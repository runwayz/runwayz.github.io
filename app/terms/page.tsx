import { PageTemplate } from "@/components/PageTemplate";
import { LegalDoc, type Block } from "@/components/LegalDoc";

export const metadata = { title: "Terms of Use · Runwayz" };

const BLOCKS: Block[] = [
  {
    type: "p",
    text: "Welcome to Runwayz (“Runwayz,” “we,” “us,” or “our”). Runwayz provides career exploration, pathway discovery, opportunity matching, and related tools through our websites, applications, and related services (collectively, the “Services”).",
  },
  {
    type: "p",
    text: "By accessing or using the Services, you, the user, agree to these Terms of Use (“Terms”). If you do not agree, you may not use the Services.",
  },
  {
    type: "p",
    text: "These Terms, together with the Runwayz Privacy Policy and any additional policies expressly incorporated by reference, govern your use of the Services.",
  },

  { type: "h2", text: "In Plain English" },
  {
    type: "p",
    text: "We know legal documents can be dense. Here’s the practical version of what these Terms mean.",
  },

  { type: "h3", text: "Our Commitments to You" },
  { type: "p", text: "When you use Runwayz, here’s what you can expect from us:" },
  {
    type: "ul",
    items: [
      {
        lead: "We’ll treat your data with care.",
        text: "We collect only what we reasonably need to run the platform, protect users, and improve the experience.",
      },
      {
        lead: "We won’t reduce you to a score.",
        text: "Runwayz may use AI to help you explore careers, reflect on opportunities, or present yourself more clearly, but we do not use black-box AI to rank your worth or make life-changing decisions about you.",
      },
      {
        lead: "We’ll prioritize safety.",
        text: "Especially for younger users, we design communication features to be structured, intentional, and safer than open social platforms. That means some communication features may be limited, monitored, or require mutual opt-in.",
      },
      {
        lead: "Your content is still yours.",
        text: "If you upload a profile, portfolio, resume, or work samples, you still own it. We only use it to operate Runwayz and help you use the platform as intended.",
      },
    ],
  },

  { type: "h3", text: "Your Commitments to Us" },
  { type: "p", text: "To keep Runwayz useful, fair, and safe for everyone, we ask you to:" },
  {
    type: "ul",
    items: [
      {
        lead: "Be honest.",
        text: "Use your real information, represent yourself accurately, and don’t impersonate other people or organizations.",
      },
      {
        lead: "Use Runwayz in good faith.",
        text: "Don’t harass people, scam people, spam employers, upload harmful content, or try to game the system.",
      },
      {
        lead: "Only share what you have the right to share.",
        text: "If you upload a photo, project, resume, or portfolio item, make sure it’s yours—or that you have permission to use it.",
      },
    ],
  },
  {
    type: "p",
    text: "Remember: opportunities still belong to humans. Employers, schools, and institutions make their own decisions. Runwayz helps you explore and present yourself—it doesn’t guarantee an offer, interview, acceptance, or placement.",
  },

  { type: "h2", text: "1. Eligibility and Authorized Use" },
  { type: "p", text: "You may use Runwayz if:" },
  {
    type: "ul",
    items: [
      "you are 17 years of age or older; or",
      "you are 14, 15, or 16 years of age and are accessing Runwayz through an authorized school, district, workforce organization, or other approved institutional program with all permissions required by applicable law.",
    ],
  },
  {
    type: "p",
    text: "Runwayz is not available to anyone under 14 years of age, including through institutional programs.",
  },
  { type: "p", text: "By using Runwayz, you represent that:" },
  {
    type: "ul",
    items: [
      "you meet these eligibility requirements;",
      "the information you provide is accurate;",
      "your use complies with applicable law.",
    ],
  },
  {
    type: "p",
    text: "If you use Runwayz on behalf of a school, employer, workforce organization, or other entity, you represent that you have authority to bind that organization to these Terms.",
  },

  { type: "h2", text: "2. Institutional Users, Students, and Minors" },
  {
    type: "p",
    text: "Runwayz may be made available through schools, districts, colleges, workforce boards, nonprofits, employers, or other organizations (“Institutional Partners”).",
  },
  {
    type: "p",
    text: "If you are an educator, administrator, employer, workforce leader, or other representative creating or facilitating access for users under 17 and in no case under 14, you represent and warrant that:",
  },
  {
    type: "ul",
    items: [
      "you have obtained all required consents, permissions, notices, and authorizations;",
      "you have lawful authority to share any user information with Runwayz;",
      "your use complies with all applicable laws and contractual obligations.",
    ],
  },
  {
    type: "p",
    text: "Where users under applicable age thresholds access Runwayz through Institutional Partners, Runwayz may rely on those Institutional Partners to obtain and document parental or guardian consent where required by applicable law.",
  },
  {
    type: "p",
    text: "Additional information regarding student, youth, and institutional data handling is described in the Runwayz Privacy Policy.",
  },
  {
    type: "p",
    text: "Runwayz may suspend or terminate accounts if we reasonably believe required permissions have not been obtained.",
  },

  { type: "h2", text: "3. Accounts and Security" },
  { type: "p", text: "Some features require an account." },
  { type: "p", text: "You agree to:" },
  {
    type: "ul",
    items: [
      "provide accurate and current information;",
      "maintain the confidentiality of your credentials;",
      "notify us promptly of unauthorized account access.",
    ],
  },
  {
    type: "p",
    text: "You are responsible for activity occurring under your account unless caused by Runwayz’s own security failure.",
  },
  {
    type: "p",
    text: "Institutional Partners may create, administer, suspend, or manage accounts for students, educators, or workforce participants consistent with applicable law and institutional agreements.",
  },
  {
    type: "p",
    text: "Information about account administration, institutional account controls, and data processing is described in the Runwayz Privacy Policy. Rights relating to access, correction, export, or deletion of personal information are described in the Runwayz Privacy Policy.",
  },

  { type: "h2", text: "4. Your Content" },
  {
    type: "p",
    text: "You may submit content through Runwayz, including profiles, resumes, portfolio materials, work samples, reflections, applications, or other materials (“User Content”).",
  },
  { type: "p", text: "You retain ownership of your User Content." },
  { type: "p", text: "By submitting User Content, you represent and warrant that:" },
  {
    type: "ul",
    items: [
      "you own the content or have lawful rights to submit it;",
      "the content does not infringe third-party rights;",
      "where required, you have obtained consent from individuals depicted or represented.",
    ],
  },
  {
    type: "p",
    text: "You grant Runwayz a non-exclusive, worldwide, royalty-free license to host, process, display, reproduce, and use User Content solely as necessary to:",
  },
  {
    type: "ul",
    items: [
      "provide the Services;",
      "support authorized applications or introductions;",
      "improve platform functionality;",
      "enforce these Terms.",
    ],
  },
  {
    type: "p",
    text: "Information about how User Content may be processed is described in the Runwayz Privacy Policy.",
  },

  { type: "h2", text: "5. AI-Assisted Features" },
  {
    type: "p",
    text: "Runwayz may provide AI-assisted features designed to support career exploration, reflection, and opportunity discovery.",
  },
  { type: "p", text: "AI outputs:" },
  {
    type: "ul",
    items: [
      "may be incomplete, inaccurate, or non-unique;",
      "are provided for informational and assistive purposes only;",
      "do not constitute employment, admissions, credentialing, legal, financial, or educational decisions.",
    ],
  },
  {
    type: "p",
    text: "Runwayz does not use fully automated AI systems to make high-stakes decisions about users.",
  },
  {
    type: "p",
    text: "Additional information regarding our AI practices and data handling is described in the Runwayz Privacy Policy.",
  },

  { type: "h2", text: "6. Acceptable Use" },
  { type: "p", text: "You agree not to:" },
  {
    type: "ul",
    items: [
      "violate applicable law;",
      "harass, threaten, abuse, or impersonate others;",
      "upload unlawful, fraudulent, misleading, or infringing content;",
      "use Runwayz for spam, solicitation, or unauthorized commercial purposes;",
      "attempt unauthorized access to systems or accounts;",
      "interfere with platform security or functionality.",
    ],
  },
  {
    type: "p",
    text: "We may investigate and take action against violations, including suspension, termination, or further legal action.",
  },

  { type: "h2", text: "7. Platform Restrictions and Intellectual Property" },
  {
    type: "p",
    text: "All platform software, designs, recommendation systems, workflows, taxonomies, standards mappings, trademarks, logos, and related intellectual property are owned by Runwayz or its licensors.",
  },
  { type: "p", text: "You may not:" },
  {
    type: "ul",
    items: [
      "scrape, harvest, or extract platform content or data;",
      "use bots, crawlers, or automated systems without written authorization;",
      "reverse engineer or attempt to discover source code;",
      "copy, reproduce, redistribute, or resell platform materials;",
      "use Runwayz content, outputs, metadata, or datasets to train machine learning or AI systems without written authorization.",
    ],
  },
  {
    type: "p",
    text: "Unauthorized use may cause irreparable harm, and Runwayz may seek injunctive or equitable relief.",
  },

  { type: "h2", text: "8. Safety, Communications, and Enforcement" },
  {
    type: "p",
    text: "Runwayz is designed to support structured, purposeful, and safe interactions.",
  },
  { type: "p", text: "We may:" },
  {
    type: "ul",
    items: [
      "restrict communication channels;",
      "log or review communications;",
      "investigate reports of misuse;",
      "remove content;",
      "suspend communication features or accounts.",
    ],
  },
  {
    type: "p",
    text: "Additional information regarding communication safeguards, profile visibility, and youth safety is described in the Runwayz Privacy Policy.",
  },
  {
    type: "p",
    text: "Certain profile information, portfolios, credentials, or application materials may be visible to authorized employers, schools, mentors, or other approved participants depending on user settings, institutional controls, and platform workflows.",
  },
  {
    type: "p",
    text: "Runwayz may cooperate with law enforcement or regulatory authorities where required by law or reasonably necessary to protect users, institutions, or the public.",
  },

  { type: "h2", text: "9. Third-Party Services" },
  {
    type: "p",
    text: "Runwayz may integrate with third-party services, including identity providers, educational systems, analytics vendors, credential providers, or employer systems.",
  },
  { type: "p", text: "We are not responsible for third-party services, content, or policies." },
  { type: "p", text: "Your use of third-party services is governed by their own terms." },
  {
    type: "p",
    text: "Information regarding third-party data processing is described in the Runwayz Privacy Policy.",
  },

  { type: "h2", text: "10. Changes to Services or Terms" },
  { type: "p", text: "We may:" },
  {
    type: "ul",
    items: [
      "modify features;",
      "add or remove functionality;",
      "discontinue portions of the Services;",
      "update these Terms.",
    ],
  },
  {
    type: "p",
    text: "If material changes are made, we will provide notice as required by applicable law.",
  },
  { type: "p", text: "Continued use constitutes acceptance of revised Terms." },

  { type: "h2", text: "11. Termination" },
  { type: "p", text: "You may stop using Runwayz at any time." },
  { type: "p", text: "We may suspend or terminate access if:" },
  {
    type: "ul",
    items: [
      "you violate these Terms;",
      "required permissions are invalid;",
      "required by law;",
      "necessary to protect users or platform integrity.",
    ],
  },

  { type: "h2", text: "12. Disclaimer of Warranties" },
  { type: "p", text: "THE SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE.”" },
  {
    type: "p",
    text: "TO THE MAXIMUM EXTENT PERMITTED BY LAW, RUNWAYZ DISCLAIMS ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.",
  },
  { type: "p", text: "WE DO NOT GUARANTEE:" },
  {
    type: "ul",
    items: [
      "uninterrupted availability;",
      "error-free operation;",
      "accuracy or suitability of recommendations, opportunities, or AI outputs.",
    ],
  },

  { type: "h2", text: "13. Limitation of Liability" },
  {
    type: "p",
    text: "TO THE MAXIMUM EXTENT PERMITTED BY LAW, RUNWAYZ SHALL NOT BE LIABLE FOR:",
  },
  {
    type: "ul",
    items: [
      "INDIRECT DAMAGES;",
      "CONSEQUENTIAL DAMAGES;",
      "LOSS OF PROFITS;",
      "LOSS OF OPPORTUNITIES;",
      "LOSS OF DATA.",
    ],
  },
  {
    type: "p",
    text: "RUNWAYZ’S TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID TO RUNWAYZ BY YOU IN THE PRIOR TWELVE (12) MONTHS, OR $100 IF NO FEES WERE PAID.",
  },

  { type: "h2", text: "14. Indemnification" },
  {
    type: "p",
    text: "You agree to defend, indemnify, and hold harmless Runwayz, its officers, employees, affiliates, and partners from claims, damages, liabilities, and expenses arising from:",
  },
  {
    type: "ul",
    items: [
      "your violation of these Terms;",
      "your misuse of the Services;",
      "your User Content;",
      "your violation of third-party rights.",
    ],
  },

  { type: "h2", text: "15. Force Majeure" },
  {
    type: "p",
    text: "Runwayz shall not be liable for delays or failures caused by events beyond our reasonable control, including but not limited to:",
  },
  {
    type: "ul",
    items: [
      "cloud or internet outages;",
      "cyberattacks;",
      "labor disputes;",
      "acts of government;",
      "natural disasters.",
    ],
  },

  { type: "h2", text: "16. Assignment and Corporate Transactions" },
  { type: "p", text: "Runwayz may assign these Terms in connection with:" },
  {
    type: "ul",
    items: ["merger,", "acquisition,", "financing,", "reorganization,", "sale of assets."],
  },
  {
    type: "p",
    text: "Any transferred personal information will continue to be handled consistent with the Runwayz Privacy Policy.",
  },

  { type: "h2", text: "17. Copyright Claims" },
  {
    type: "p",
    text: "If you believe content on Runwayz infringes your copyright, contact privacy@runwayz.com",
  },
  { type: "p", text: "Runwayz may remove allegedly infringing material pending investigation." },

  { type: "h2", text: "18. Governing Law" },
  {
    type: "p",
    text: "These Terms are governed by the laws of the State of Delaware, without regard to conflict of law principles.",
  },

  { type: "h2", text: "19. International Use" },
  {
    type: "p",
    text: "Runwayz is operated from the United States. Users who access the Services from outside the United States do so at their own initiative and are responsible for compliance with applicable local laws. You may not use the Services in any jurisdiction where such use would violate applicable law.",
  },

  { type: "h2", text: "20. Entire Agreement" },
  {
    type: "p",
    text: "These Terms, together with the Runwayz Privacy Policy and any additional policies or agreements expressly incorporated by reference, constitute the entire agreement between you and Runwayz regarding the Services and supersede any prior agreements or understandings relating to the Services.",
  },

  { type: "h2", text: "21. No Waiver" },
  {
    type: "p",
    text: "Failure by Runwayz to enforce any provision of these Terms shall not constitute a waiver of that provision or any other provision. Any waiver must be in writing and signed by an authorized representative of Runwayz.",
  },

  { type: "h2", text: "22. Severability" },
  {
    type: "p",
    text: "If any provision of these Terms is determined to be unlawful, invalid, or unenforceable, that provision shall be enforced to the maximum extent permitted by law, and the remaining provisions shall remain in full force and effect.",
  },

  { type: "h2", text: "23. Electronic Communications" },
  {
    type: "p",
    text: "By using the Services, sending us emails, or otherwise communicating with Runwayz electronically, you consent to receive communications from us electronically. You agree that notices, disclosures, agreements, and other communications provided electronically satisfy any legal requirement that such communications be in writing.",
  },
];

export default function TermsPage() {
  return (
    <PageTemplate
      eyebrow="Legal"
      title="Terms of Use"
      subtitle="Effective Date: June 23, 2026."
      closingCta={false}
    >
      <LegalDoc blocks={BLOCKS} />
    </PageTemplate>
  );
}
