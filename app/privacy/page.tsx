import { PageTemplate } from "@/components/PageTemplate";
import { LegalDoc, type Block } from "@/components/LegalDoc";

export const metadata = { title: "Privacy Policy · Runwayz" };

const BLOCKS: Block[] = [
  {
    type: "p",
    text: "Runwayz, Inc. (“Runwayz,” “we,” “us,” or “our”) provides a mobile-first career exploration and opportunity platform designed to help students, emerging talent, employers, educators, and partners discover pathways to work, training, and advancement (the “Services”).",
  },
  {
    type: "p",
    text: "We believe privacy is foundational to trust. Our mission is to help users explore their futures with dignity, autonomy, and transparency. This Privacy Policy explains how we collect, use, disclose, and protect personal information when you use our Services.",
  },
  {
    type: "p",
    text: "This Privacy Policy applies to personal information we process as a data controller through our website, mobile applications, communications, and Services that link to this Privacy Policy.",
  },
  {
    type: "p",
    text: "If Runwayz provides Services to a school, district, workforce board, employer, or other organization under a separate contract, we may process some data as a service provider or processor on that organization’s behalf. In those cases, our contract with that organization may govern certain processing activities. If you have questions about data provided through an institution or employer, please contact that organization first.",
  },

  { type: "h2", text: "Runwayz Commitments" },
  { type: "p", text: "We aim to build a platform that:" },
  {
    type: "ul",
    items: [
      "Increases opportunity without exploiting data",
      "Helps people present themselves, not be reduced to a score",
      "Uses AI responsibly and transparently",
      "Protects our users",
      "Gives people more control over their future, not less",
    ],
  },

  { type: "h2", text: "1. Information We Collect" },
  {
    type: "p",
    text: "We collect information directly from you, automatically through your use of the Services, and from third parties you authorize or who work with us.",
  },
  { type: "h3", text: "Our Collection Principles" },
  {
    type: "p",
    text: "Runwayz is built around data minimization. We collect only the personal information reasonably necessary and proportionate to operate, improve, secure, and deliver the Services users request.",
  },
  { type: "p", text: "We do not collect information simply because it may be useful later." },
  { type: "p", text: "Where information is optional, we will identify it as such." },
  { type: "h3", text: "Information You Provide Directly" },
  { type: "p", text: "Depending on how you use Runwayz, we may collect:" },
  {
    type: "ul",
    items: [
      "Name",
      "Email address",
      "Password or authentication credentials",
      "Date of birth or age range",
      "ZIP code or general location",
      "Phone number",
      "Education history or current school status",
      "Career interests, preferences, goals, and blockers",
      "Resume or profile information",
      "Skills, certifications, licenses, and credentials",
      "Job application materials",
      "Messages sent through approved platform workflows",
      "Survey responses or feedback",
      "Payment information (processed by third-party payment providers, if applicable)",
    ],
  },
  { type: "h3", text: "User Content" },
  { type: "p", text: "We may collect content you upload or create, such as:" },
  {
    type: "ul",
    items: [
      "Profile photos",
      "Portfolio items",
      "Work samples",
      "Videos or introductions",
      "Career reflections",
      "Saved opportunities",
      "Applications or interest signals",
    ],
  },
  { type: "h3", text: "Automatically Collected Information" },
  { type: "p", text: "We and our service providers may collect:" },
  {
    type: "ul",
    items: [
      "Device type",
      "Browser type",
      "Operating system",
      "IP address",
      "App version",
      "Usage logs",
      "Pages viewed",
      "Clickstream activity",
      "Session timestamps",
      "Referring URLs",
      "Crash diagnostics",
      "Approximate location inferred from IP address",
    ],
  },
  { type: "h3", text: "Information from Third Parties" },
  { type: "p", text: "We may receive information from:" },
  {
    type: "ul",
    items: [
      "Schools or training providers",
      "Employers or hiring partners",
      "Credential providers",
      "Public labor market datasets (such as O*NET, SOC, CIP, IPEDS, NCES)",
      "Identity or fraud prevention vendors",
      "Analytics vendors",
      "Third-party authentication providers, if we offer and you choose to use social or federated login options (such as Google, Apple, or similar providers).",
    ],
  },
  { type: "h3", text: "Cookies, Analytics, and Similar Technologies" },
  {
    type: "p",
    text: "Runwayz and our service providers may use cookies, local storage, software development kits (SDKs), pixels, log files, and similar technologies to operate, secure, and improve the Services.",
  },
  { type: "p", text: "These technologies may be used to:" },
  {
    type: "ul",
    items: [
      "Keep users signed in",
      "Remember preferences and settings",
      "Measure traffic and feature usage",
      "Diagnose errors and performance issues",
      "Prevent fraud or abuse",
      "Understand how users interact with the Services",
    ],
  },
  {
    type: "p",
    text: "Runwayz does not use third-party tracking technologies for cross-site behavioral advertising or retargeting users based on activity across unrelated websites or apps.",
  },
  {
    type: "p",
    text: "We do not permit third parties to use tracking technologies on Runwayz for their own independent advertising purposes.",
  },
  {
    type: "p",
    text: "Users may be able to control certain cookie or device settings through their browser or device preferences, though some features may not function properly as a result.",
  },

  { type: "h2", text: "2. How We Use Information" },
  { type: "p", text: "We use personal information to:" },
  { type: "h3", text: "Provide the Services" },
  {
    type: "ul",
    items: [
      "Create and maintain accounts",
      "Deliver recommendations and pathway guidance",
      "Match users with jobs, programs, organizations, employers, apprenticeships, and opportunities",
      "Enable applications and expressions of interest",
      "Support messaging workflows and status updates",
      "Provide customer support",
    ],
  },
  { type: "h3", text: "Improve the Platform" },
  {
    type: "ul",
    items: [
      "Analyze usage patterns",
      "Improve navigation and onboarding",
      "Measure feature effectiveness",
      "Test new features",
      "Troubleshoot errors",
    ],
  },
  { type: "h3", text: "Recommend relevant opportunities" },
  {
    type: "ul",
    items: [
      "Highlight next steps",
      "Surface programs aligned to interests and constraints",
      "Save preferences and progress",
    ],
  },
  { type: "h3", text: "Safety, Integrity, and Compliance" },
  {
    type: "ul",
    items: [
      "Detect fraud or abuse",
      "Enforce Terms of Use",
      "Prevent misuse of youth-facing features",
      "Respond to legal requests",
      "Protect rights, safety, and property",
    ],
  },
  { type: "h3", text: "Communications" },
  {
    type: "ul",
    items: [
      "Send service notices",
      "Confirm applications or milestones",
      "Respond to support requests",
      "Send optional marketing communications (you may opt out)",
    ],
  },

  { type: "h2", text: "3. AI Features and Data Use" },
  {
    type: "p",
    text: "Runwayz may use artificial intelligence to support discovery, reflection, and opportunity navigation.",
  },
  { type: "h3", text: "Our AI Principles" },
  { type: "p", text: "We design AI to elevate the human, not replace them." },
  {
    type: "p",
    text: "That means our AI is intended to help users better understand themselves and opportunities—not to judge, rank, or define their worth.",
  },
  { type: "h3", text: "We Do Not Use Black-Box AI for High-Stakes Decisions" },
  {
    type: "p",
    text: "Runwayz does not use fully automated AI systems to make legal or similarly significant decisions such as:",
  },
  {
    type: "ul",
    items: [
      "Hiring decisions",
      "Admissions decisions",
      "Scholarship awards",
      "Eligibility determinations",
    ],
  },
  { type: "p", text: "Those decisions remain with the relevant institution or employer." },
  { type: "h3", text: "We Do Not Sell User Data for AI Training" },
  {
    type: "p",
    text: "We do not sell personal information to AI model providers. Where we use third-party AI vendors, we seek contractual protections restricting use of submitted data for model training.",
  },
  { type: "h3", text: "Human Review Matters" },
  {
    type: "p",
    text: "AI outputs may be incomplete or incorrect. Users should exercise judgment, and users remain responsible for their own decisions.",
  },

  { type: "h2", text: "4. How We Share Information" },
  { type: "p", text: "We do not sell personal information." },
  { type: "p", text: "We may share information in the following circumstances:" },
  { type: "h3", text: "With Employers or Opportunity Providers" },
  {
    type: "p",
    text: "If you apply, opt in, express interest, or otherwise authorize sharing, we may share relevant information such as:",
  },
  {
    type: "ul",
    items: [
      "Name and contact information",
      "Resume or profile details",
      "Skills, certifications, and credentials",
      "Education history",
      "Work samples or portfolio materials",
      "Application responses",
      "Availability, location preferences, or work authorization information where provided",
      "Other information you choose to submit or have visible on your profile",
    ],
  },
  { type: "h3", text: "With Schools or Institutional Partners" },
  {
    type: "p",
    text: "If your account is sponsored or managed by a school, district, workforce board, or similar organization, we may share information such as:",
  },
  {
    type: "ul",
    items: [
      "Account registration details",
      "Participation and engagement data",
      "Progress or milestone completion data",
      "Career interest signals",
      "Aggregate or de-identified analytics",
      "Information necessary to administer the program or fulfill contractual obligations",
    ],
  },
  { type: "h3", text: "With Service Providers" },
  {
    type: "p",
    text: "We may share information reasonably necessary for vendors to perform services on our behalf, such as:",
  },
  {
    type: "ul",
    items: [
      "Account identifiers",
      "Contact information",
      "Usage and technical data",
      "Support communications",
      "Payment or billing information where applicable",
    ],
  },
  { type: "h3", text: "No Third-Party Advertising or Marketing Sharing" },
  {
    type: "p",
    text: "Runwayz does not share personal information with third parties for their own advertising, behavioral marketing, or independent commercial marketing purposes.",
  },
  {
    type: "p",
    text: "We do not permit third parties to use personal information we provide to market unrelated products or services to users.",
  },
  {
    type: "p",
    text: "We may use service providers to help us send communications on our behalf, subject to contractual restrictions and applicable law.",
  },
  { type: "h3", text: "Advertising and Sponsorships" },
  {
    type: "p",
    text: "Runwayz does not use personal information to sell advertising placements or to target users with third-party advertisements.",
  },
  {
    type: "p",
    text: "Runwayz may display sponsorship acknowledgments, partner branding, featured opportunities, or similar promotional placements in connection with organizations, employers, schools, nonprofits, or other partners.",
  },
  {
    type: "p",
    text: "These placements are not based on behavioral tracking or the sale of personal information.",
  },
  { type: "h3", text: "Legal and Safety Reasons" },
  {
    type: "p",
    text: "We may disclose any category of information reasonably necessary to comply with law, protect safety, investigate fraud, or enforce our rights.",
  },
  { type: "h3", text: "Corporate Transactions" },
  {
    type: "p",
    text: "In connection with a merger, acquisition, financing, reorganization, or sale, relevant account, operational, and customer information may be transferred as permitted by law.",
  },
  {
    type: "p",
    text: "Any successor entity receiving personal information in connection with such a transaction must continue to protect previously collected personal information in a manner materially consistent with this Privacy Policy unless users receive advance notice of material changes and any choices required by applicable law.",
  },

  { type: "h2", text: "5. Your Rights and Choices" },
  { type: "p", text: "Depending on your location, you may have rights to:" },
  {
    type: "ul",
    items: [
      "Access your personal information",
      "Correct inaccurate information",
      "Delete your account or data",
      "Obtain a copy of certain data",
      "Opt out of marketing emails",
      "Limit certain processing activities where required by law",
    ],
  },
  { type: "p", text: "To exercise rights, contact us using the details below." },
  { type: "h3", text: "Account Controls" },
  { type: "p", text: "You may be able to:" },
  {
    type: "ul",
    items: [
      "Edit your profile",
      "Update preferences",
      "Change notifications",
      "Delete certain content",
      "Close your account",
    ],
  },

  { type: "h2", text: "6. Data Retention" },
  {
    type: "p",
    text: "We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy, including to provide the Services, maintain accounts, support users, comply with legal obligations, resolve disputes, and protect the security and integrity of Runwayz and its users.",
  },
  {
    type: "p",
    text: "Retention periods may vary depending on the type of information and how the Services are used. In general:",
  },
  {
    type: "ul",
    items: [
      "Account information is retained while an account remains active and for a reasonable period afterward to support reactivation, security, fraud prevention, and legal compliance.",
      "Application, profile, and opportunity records may be retained while relevant to user activity, employer processes, or institutional programs.",
      "Support requests and communications may be retained for operational, training, and dispute-resolution purposes.",
      "Usage logs and technical data are typically retained for shorter periods unless needed for security investigations or legal obligations.",
      "De-identified or aggregated information may be retained longer where permitted by law.",
    ],
  },
  {
    type: "p",
    text: "When personal information is no longer reasonably needed, we will delete, anonymize, or de-identify it consistent with applicable law.",
  },
  {
    type: "p",
    text: "Users may request deletion of certain information or closure of their account, subject to legal, contractual, fraud-prevention, and recordkeeping requirements.",
  },

  { type: "h2", text: "7. Security" },
  {
    type: "p",
    text: "We use administrative, technical, and physical safeguards designed to protect information, including:",
  },
  {
    type: "ul",
    items: [
      "All personal information transmitted to or from Runwayz is encrypted in transit using industry-standard secure protocols.",
      "Personal information stored in production systems is encrypted at rest using industry-standard controls.",
      "Role-based access controls",
      "Authentication and credential protections",
      "Logging and security monitoring",
      "Secure software development practices",
      "Vendor security diligence and contractual safeguards",
      "Measures designed to maintain the confidentiality, integrity, and availability of systems",
    ],
  },
  { type: "p", text: "No system is perfectly secure, and we cannot guarantee absolute security." },
  { type: "h3", text: "Security Incidents and Breach Notification" },
  {
    type: "p",
    text: "If we become aware of unauthorized access to personal information or another security incident affecting Runwayz, we will investigate promptly, take reasonable steps to contain and remediate the issue, and provide notifications required by applicable law.",
  },
  {
    type: "p",
    text: "Where legally required, we will notify affected individuals, institutional customers, regulators, or other appropriate parties within the timeframes required by law.",
  },
  {
    type: "p",
    text: "Notifications may describe the nature of the incident, the types of information involved (if known), steps we have taken or plan to take, and recommended protective actions where appropriate.",
  },

  { type: "h2", text: "8. Children and Young Users" },
  { type: "h3", text: "Intended Audience" },
  {
    type: "p",
    text: "Runwayz is intended for users 17 and older, and for users 14, 15, or 16 who access Runwayz through an authorized school, district, or institutional program with required consents.",
  },
  {
    type: "p",
    text: "Runwayz is not directed to children under 14, and we do not knowingly collect personal information from anyone under 14, including through institutional partners. If we learn that we have collected personal information from a user under 14, we will take steps to delete it.",
  },
  { type: "h3", text: "Student and Institutional Use" },
  { type: "p", text: "Runwayz may be used by:" },
  {
    type: "ul",
    items: [
      "High school students",
      "Postsecondary students",
      "Adult learners",
      "Career and technical education participants",
      "Workforce development participants",
      "Schools, districts, colleges, and training providers",
      "Workforce boards and community organizations",
    ],
  },
  { type: "p", text: "Runwayz is not primarily designed for preschool or elementary classroom use." },
  {
    type: "p",
    text: "Where Runwayz is provided through a school or institution, we may process information under the direction of that organization and consistent with applicable agreements and law.",
  },
  { type: "h3", text: "User Safety, Visibility, and Communications" },
  { type: "p", text: "Runwayz is designed to support safe and purposeful interactions." },
  {
    type: "p",
    text: "Runwayz does not provide unrestricted open direct messaging between users by default. Communications, where offered, may be limited to approved workflows, structured introductions, application-related messaging, or other controlled interactions.",
  },
  {
    type: "p",
    text: "User profile information is private by default except where a user chooses to share information in connection with opportunities, applications, institutional programs, or other intended platform uses.",
  },
  {
    type: "p",
    text: "We may use administrative, technical, and human review measures to detect spam, fraud, harassment, impersonation, or misuse of communication features.",
  },
  {
    type: "p",
    text: "Users may be provided tools to report suspected abuse, inappropriate conduct, or safety concerns.",
  },
  {
    type: "p",
    text: "We may restrict, suspend, or terminate access to communication features or accounts that violate our Terms, safety rules, or applicable law.",
  },

  { type: "h2", text: "9. Schools, Employers, and Institutional Accounts" },
  {
    type: "p",
    text: "Where Runwayz is provided through a school, district, workforce board, nonprofit, or employer:",
  },
  {
    type: "ul",
    items: [
      "The organization may control certain account settings",
      "They may request reports or analytics about authorized users",
      "They may direct certain data processing activities",
      "Their own privacy notices may also apply",
    ],
  },
  {
    type: "p",
    text: "Users should review both this Privacy Policy and the organization’s policies.",
  },
  { type: "h3", text: "Accounts and Access" },
  {
    type: "p",
    text: "Some features of Runwayz may be available without creating an account, such as viewing general informational content or publicly available materials.",
  },
  {
    type: "p",
    text: "Creating an account may be required to access personalized features, save progress, submit applications, communicate through approved workflows, or participate in partner or institutional programs.",
  },
  { type: "p", text: "Accounts may be created and managed in different ways, including:" },
  {
    type: "ul",
    items: [
      "Self-created individual accounts established directly by users",
      "Institution-managed accounts created or administered by a school, district, workforce board, nonprofit, employer, or other authorized organization",
      "Single sign-on or federated accounts provided through approved identity providers where available",
    ],
  },
  {
    type: "p",
    text: "Where an account is managed by an organization, that organization may control certain settings, access permissions, onboarding status, or data processing activities consistent with applicable agreements and law.",
  },
  { type: "h3", text: "Institutional Account Administration" },
  {
    type: "p",
    text: "Depending on the nature of the program or agreement, an authorized school, district, workforce board, nonprofit, employer, or other organization managing accounts may be able to:",
  },
  {
    type: "ul",
    items: [
      "Create, invite, suspend, or deactivate user accounts",
      "Reset passwords or manage authentication methods",
      "Configure access permissions or participation settings",
      "View reports or analytics regarding authorized users",
      "Request correction, export, or deletion of data consistent with applicable law and contractual obligations",
      "Manage onboarding, rostering, or program participation workflows",
    ],
  },
  {
    type: "p",
    text: "Runwayz limits administrative access to authorized personnel and may require verification before honoring administrative requests.",
  },
  {
    type: "p",
    text: "Administrative capabilities may vary based on the Services provided and applicable agreements.",
  },

  { type: "h2", text: "10. State Privacy Rights" },
  {
    type: "p",
    text: "As of the Effective Date of this Privacy Policy, Residents of states such as California, Colorado, Virginia, Connecticut, Texas, Oregon, and others may have additional privacy rights under applicable law.",
  },
  { type: "p", text: "These may include rights to:" },
  {
    type: "ul",
    items: [
      "Know what data we collect",
      "Access or correct data",
      "Delete data",
      "Obtain portable copies",
      "Appeal certain request denials",
      "Opt out of targeted advertising or profiling where applicable",
    ],
  },
  { type: "p", text: "Runwayz does not knowingly sell personal information." },
  { type: "p", text: "To exercise applicable rights, contact us below." },

  { type: "h2", text: "11. International Users" },
  {
    type: "p",
    text: "Runwayz is based in the United States. If you use our Services from outside the U.S., your information may be transferred to and processed in the United States or other countries where our providers operate.",
  },
  { type: "p", text: "Where required, we use lawful transfer mechanisms." },

  { type: "h2", text: "12. Changes to This Policy" },
  { type: "p", text: "We may update this Privacy Policy from time to time." },
  {
    type: "p",
    text: "If we make material changes, we will provide notice by updating the effective date, posting a notice in the Services, or using other appropriate communication methods.",
  },

  { type: "h2", text: "13. Contact Us" },
  { type: "p", text: "Runwayz, Inc." },
  { type: "p", text: "Privacy Team" },
  { type: "p", text: "privacy@runwayz.com" },
  {
    type: "p",
    text: "If you submit a privacy request, we may take reasonable steps to verify your identity before responding.",
  },
];

export default function PrivacyPage() {
  return (
    <PageTemplate
      eyebrow="Legal"
      title="Privacy Policy"
      subtitle="Effective Date: June 23, 2026."
      closingCta={false}
    >
      <LegalDoc blocks={BLOCKS} />
    </PageTemplate>
  );
}
