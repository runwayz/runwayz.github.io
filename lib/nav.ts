// Plain data module (NOT "use client") so it can be imported by both server
// components (footer, home) and the client header.

const PUBLIC_LABOR = {
  heading: "Public & Labor Sector",
  items: [
    { label: "Trade Unions", href: "/unions", desc: "Grow membership & apprenticeship intake" },
    { label: "Trade Associations", href: "/associations", desc: "A talent pipeline for your members" },
    // Hidden for now (route still exists at /workforce-boards):
    // { label: "Workforce Boards", href: "/workforce-boards", desc: "Hit your placement outcomes" },
  ],
};

const PRIVATE_SECTOR = {
  heading: "Private Sector",
  items: [
    { label: "Employers", href: "/employers", desc: "Build & retain skilled talent" },
  ],
};

const EDUCATION = {
  heading: "Education",
  items: [
    { label: "Institutions & Schools", href: "/education", desc: "Credential & place your learners" },
  ],
};

const STUDENTS = {
  heading: "Students",
  items: [
    { label: "Early-Career Talent", href: "/talent", desc: "Students and Early-Career Talent" },
  ],
};

// Organizations we serve — used by the home "For Organizations" card.
// (Talent is intentionally excluded so it doesn't show up as an "organization".)
export const SERVE_GROUPS = [PUBLIC_LABOR, PRIVATE_SECTOR, EDUCATION];

// Mega-menu columns: left = Students + Education, right = Public sector + Employers.
export const MEGA_LEFT = [STUDENTS, EDUCATION];
export const MEGA_RIGHT = [PUBLIC_LABOR, PRIVATE_SECTOR];

// Flat list (mobile panel order).
export const MEGA_GROUPS = [...MEGA_LEFT, ...MEGA_RIGHT];
