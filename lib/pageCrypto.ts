// Password protection for standard pages on a static host. There is no server
// at runtime, so the page payload is AES-256-GCM encrypted at BUILD time with
// the password from Sanity, and the browser decrypts it after the visitor
// enters the password (components/ProtectedPage.tsx). The published files
// contain only ciphertext. Uses global WebCrypto, available in both the build
// (Node 20+) and the browser, so seal and open share one implementation.

export type ProtectedPagePayload = {
  title: string
  eyebrow?: string
  description?: string
  heroImageUrl?: string
  body?: unknown
  showClosingCta?: boolean
}

// All fields base64. salt feeds PBKDF2; iv feeds AES-GCM; data is ciphertext.
export type SealedPayload = { salt: string; iv: string; data: string }

const PBKDF2_ITERATIONS = 310_000

function toBase64(bytes: Uint8Array): string {
  let binary = ''
  for (const b of bytes) binary += String.fromCharCode(b)
  return btoa(binary)
}

function fromBase64(value: string): Uint8Array {
  return Uint8Array.from(atob(value), (c) => c.charCodeAt(0))
}

async function deriveKey(password: string, salt: Uint8Array): Promise<CryptoKey> {
  const material = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(password),
    'PBKDF2',
    false,
    ['deriveKey'],
  )
  return crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt: salt as BufferSource, iterations: PBKDF2_ITERATIONS, hash: 'SHA-256' },
    material,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt'],
  )
}

export async function sealPagePayload(
  payload: ProtectedPagePayload,
  password: string,
): Promise<SealedPayload> {
  const salt = crypto.getRandomValues(new Uint8Array(16))
  const iv = crypto.getRandomValues(new Uint8Array(12))
  const key = await deriveKey(password, salt)
  const data = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv: iv as BufferSource },
    key,
    new TextEncoder().encode(JSON.stringify(payload)),
  )
  return { salt: toBase64(salt), iv: toBase64(iv), data: toBase64(new Uint8Array(data)) }
}

// Throws on a wrong password: AES-GCM authentication fails, so a bad key can
// never yield garbage output, only an error.
export async function openPagePayload(
  sealed: SealedPayload,
  password: string,
): Promise<ProtectedPagePayload> {
  const key = await deriveKey(password, fromBase64(sealed.salt))
  const plain = await crypto.subtle.decrypt(
    { name: 'AES-GCM', iv: fromBase64(sealed.iv) as BufferSource },
    key,
    fromBase64(sealed.data) as BufferSource,
  )
  return JSON.parse(new TextDecoder().decode(plain)) as ProtectedPagePayload
}
