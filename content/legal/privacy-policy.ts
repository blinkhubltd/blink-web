import type { LegalDoc } from "@/lib/legal/types";

const DPO_EMAIL = "privacyblinkhubltd@gmail.com";
const GENERAL_EMAIL = "blinkhubltd@gmail.com";

/**
 * Ported verbatim from the Blink mobile app
 * (`blink-ecommerce/app/privacy-policy.tsx`). Wording must not be edited here
 * without the drafter's sign-off.
 */
export const PRIVACY_POLICY: LegalDoc = {
  slug: "privacy-policy",
  title: "Privacy Policy",
  legalTitle: "BLINK PRIVACY POLICY",
  version: "v1.0",
  description:
    "How Blink Hub Limited collects, uses, shares, protects and retains your personal data under the Data Protection Act, 2019 (Kenya).",
  summary:
    "How we collect, use, share, protect and retain your personal data across the Blink app, website and APIs.",
  intro: [
    {
      t: "p",
      text: 'This Privacy Policy ("Policy") explains how Blink collects, uses, shares, protects, and retains your personal data when you use the Blink mobile application, websites, APIs, or other digital services (collectively, the "Platform").',
    },
    { t: "p", text: 'This Policy applies to all "Data Subjects" including:' },
    {
      t: "list",
      marker: "roman",
      items: [
        "Users (customers)",
        "Merchants",
        "Delivery Partners",
        "Job Applicants",
        "Website Visitors",
        "Business Partners",
      ],
    },
  ],
  sections: [
    {
      n: "1",
      title: "Overview and Commitment",
      blocks: [
        {
          t: "p",
          text: "Blink is committed to safeguarding personal data and processing it lawfully, fairly, and transparently in accordance with the Data Protection Act, 2019 (Kenya) and related regulations. Blink will not process personal data in a manner incompatible with the purposes stated in this Policy.",
        },
        {
          t: "p",
          text: "Blink Hub Limited is a duly registered Data Controller under the laws of Kenya, Data Controller Registration Number (ODPC NO.) 375-571F-F852.",
        },
      ],
    },
    {
      n: "2",
      title: "Key Definitions",
      blocks: [
        {
          t: "p",
          text: [
            { b: '"Personal Data"' },
            " means any information relating to an identified or identifiable natural person.",
          ],
        },
        {
          t: "p",
          text: [
            { b: '"Processing"' },
            " means any operation performed on personal data including collection, storage, use, disclosure, and deletion.",
          ],
        },
        {
          t: "p",
          text: [
            { b: '"Data Subject"' },
            " means an individual to whom Personal Data relates.",
          ],
        },
        { t: "sub", title: "2.1 Data Protection Principles" },
        {
          t: "p",
          text: "Blink processes Personal Data in accordance with the following principles:",
        },
        {
          t: "list",
          marker: "roman",
          items: [
            "Lawfulness, fairness and transparency;",
            "Purpose limitation – Personal Data is collected for specified, explicit and legitimate purposes and not further processed in a manner incompatible with those purposes;",
            "Data minimisation – Only Personal Data necessary for the stated purposes is collected;",
            "Accuracy – Personal Data is kept accurate and up to date;",
            "Storage limitation – Personal Data is retained only for as long as necessary;",
            "Integrity and confidentiality – Appropriate technical and organisational measures are implemented to safeguard Personal Data.",
          ],
        },
      ],
    },
    {
      n: "3",
      title: "Summary of Information",
      blocks: [
        {
          t: "table",
          head: ["Item", "Detail"],
          rows: [
            [
              "Data Controller",
              `Blink Hub Limited\nGulf Towers, Enterprise Road, Industrial Area, Nairobi\nP.O. Box 18887, Kenya\nEmail: ${DPO_EMAIL}`,
            ],
            ["ODPC Registration No.", "375-571F-F852"],
            ["Data Protection Officer", `Email: ${DPO_EMAIL}`],
            [
              "Your Rights",
              `Access · Rectify · Erasure · Restrict · Object · Portability · Withdraw consent · Lodge complaint with ODPC\n\nExercise via the Blink App (Privacy Section) or email: ${DPO_EMAIL}`,
            ],
          ],
        },
        { t: "sub", title: "Purposes of Processing" },
        { t: "sub", title: "When You Are a USER (Customer)" },
        {
          t: "table",
          head: ["Purpose", "How We Use Your Data"],
          rows: [
            [
              "Contractual",
              "Create/manage account; authenticate identity; enable orders; connect with Merchants and Delivery Partners; process payments and refunds; provide support; track deliveries; enable ratings.",
            ],
            [
              "Legal & Compliance",
              "Comply with tax, consumer protection and regulatory requirements; prevent and investigate fraud; respond to court or regulatory requests; enforce Blink Terms.",
            ],
            [
              "Security & Fraud",
              "Monitor transactions; detect misuse; use device, IP, location and behavioural data to prevent fraud; verify identity; collaborate with law enforcement when legally required.",
            ],
            [
              "Statistics & Research",
              "Analyse purchasing trends; improve algorithms; conduct voluntary surveys; develop new services and features.",
            ],
            [
              "Marketing",
              "Send offers, discounts and promotions; provide tailored recommendations; conduct campaigns; send service notifications (subject to consent where required).",
            ],
          ],
        },
        { t: "sub", title: "When You Are a PARTNER (Merchant / Vendor)" },
        {
          t: "table",
          head: ["Purpose", "How We Use Your Data"],
          rows: [
            [
              "Commercial Relationship",
              "Create/manage merchant accounts; onboard and verify business details; transmit orders; manage settlements and commissions.",
            ],
            [
              "Compliance & Due Diligence",
              "Conduct KYC checks; comply with tax and commercial regulations; prevent fraud; respond to legal or regulatory authorities.",
            ],
            [
              "Customer Support",
              "Provide technical assistance; manage disputes; improve operational efficiency.",
            ],
          ],
        },
        { t: "sub", title: "When You Are a JOB APPLICANT" },
        {
          t: "table",
          head: ["Purpose", "How We Use Your Data"],
          rows: [
            [
              "Recruitment & Assessment",
              "Evaluate suitability; conduct interviews; verify references; perform background checks (where lawful).",
            ],
            [
              "Communications",
              "Inform about job opportunities; provide recruitment updates; respond to application inquiries.",
            ],
          ],
        },
        { t: "sub", title: "When You Are a WEBSITE VISITOR" },
        {
          t: "table",
          head: ["Purpose", "How We Use Your Data"],
          rows: [
            [
              "Website Interaction",
              "Respond to inquiries; manage blog comments; improve website functionality; analyse traffic and engagement patterns; maintain security of digital infrastructure.",
            ],
          ],
        },
        { t: "sub", title: "Lawful Basis for Processing" },
        {
          t: "table",
          head: ["Legal Basis", "Description"],
          rows: [
            [
              "Performance of a Contract",
              "Processing necessary to provide Blink services to Users, Delivery Partners, and Merchants.",
            ],
            [
              "Legal Obligations",
              "Processing required under Kenyan law, including tax, consumer protection, anti-fraud, and regulatory requirements.",
            ],
            [
              "Legitimate Interests",
              "Fraud prevention; platform security; service improvement; operational efficiency; defence of legal claims.",
            ],
            [
              "Consent",
              "Marketing communications; optional surveys; cookies and tracking technologies (where required).",
            ],
            [
              "Legal Claims",
              "Establishment, exercise or defence of legal claims.",
            ],
          ],
        },
        { t: "sub", title: "Data Sharing — If You Are a USER" },
        {
          t: "table",
          head: ["Recipient", "Purpose of Sharing"],
          rows: [
            ["Delivery Partners", "To collect and deliver your order."],
            ["Merchants", "To prepare and fulfil your order."],
            ["Payment Service Providers", "To process transactions and refunds."],
            [
              "Customer Support Providers",
              "To resolve complaints and inquiries.",
            ],
            [
              "IT & Cloud Service Providers",
              "To host and maintain platform infrastructure.",
            ],
            [
              "Fraud Prevention Providers",
              "To detect and prevent unlawful activity.",
            ],
            ["Insurance Providers", "To manage claims and liability coverage."],
            [
              "Marketing & Survey Providers",
              "To conduct promotions and satisfaction surveys (where permitted).",
            ],
            ["Public Authorities", "Where required by law or court order."],
          ],
        },
      ],
    },
    {
      n: "4",
      title: "Data We Collect",
      blocks: [
        {
          t: "p",
          text: "Blink may collect the following categories of Personal Data depending on your interactions with the Platform:",
        },
        { t: "sub", title: "4.1 Registration & Account Data" },
        {
          t: "list",
          marker: "roman",
          items: [
            "Full name",
            "Email address",
            "Mobile number",
            "Profile photo (optional)",
            "Password hash",
          ],
        },
        { t: "sub", title: "4.2 Transaction & Order Data" },
        {
          t: "list",
          marker: "roman",
          items: [
            "Order history",
            "Transaction identifiers",
            "Delivery address",
            "Contact instructions",
            "Ratings and feedback",
          ],
        },
        { t: "sub", title: "4.3 Payment Data" },
        { t: "p", text: "Processed by third-party providers:" },
        {
          t: "list",
          marker: "roman",
          items: ["Billing amounts", "Masked payment identifiers"],
        },
        { t: "callout", text: "Blink does not store full card numbers." },
        { t: "sub", title: "4.4 Location & Geolocation Data" },
        {
          t: "p",
          text: "With your explicit consent, Blink may collect precise or approximate location data from your device for the purposes of:",
        },
        {
          t: "list",
          marker: "roman",
          items: [
            "Facilitating order delivery;",
            "Optimising routing and logistics;",
            "Fraud detection and service integrity.",
          ],
        },
        {
          t: "p",
          text: "Location tracking may occur while the application is in active use and, where permitted by device settings and consent, in the background for delivery optimisation. You may disable location permissions at any time through your device settings; however, certain services may not function properly without location access.",
        },
        { t: "sub", title: "4.5 Technical & Device Data" },
        {
          t: "list",
          marker: "roman",
          items: [
            "Device type and OS",
            "App usage logs",
            "IP address",
            "Error reports",
          ],
        },
        { t: "sub", title: "4.6 Communications Data" },
        {
          t: "list",
          marker: "roman",
          items: ["In-App chats", "Customer support interactions", "Emails"],
        },
        { t: "sub", title: "4.7 Merchant & Delivery Partner Data" },
        {
          t: "list",
          marker: "roman",
          items: [
            "Business registration details",
            "Licence or permit information",
            "Vehicle and insurance data",
            "Bank account details (for payouts)",
          ],
        },
        { t: "sub", title: "4.8 Optional Sensitive Data" },
        {
          t: "p",
          text: "Only as voluntarily provided (e.g., dietary preferences).",
        },
      ],
    },
    {
      n: "5",
      title: "Purposes and Legal Bases for Processing",
      blocks: [
        { t: "sub", title: "5.1 Contractual Performance" },
        { t: "p", text: "To:" },
        {
          t: "list",
          marker: "roman",
          items: [
            "Register your account",
            "Process orders and payments",
            "Fulfil deliveries",
            "Provide customer support",
          ],
        },
        { t: "sub", title: "5.2 Compliance with Law" },
        { t: "p", text: "To:" },
        {
          t: "list",
          marker: "roman",
          items: [
            "Prevent fraud and security breaches",
            "Respond to law enforcement requests",
            "Retain data required by tax and regulatory obligations",
          ],
        },
        { t: "sub", title: "5.3 Legitimate Interests" },
        { t: "p", text: "To:" },
        {
          t: "list",
          marker: "roman",
          items: [
            "Improve and personalise services",
            "Enhance platform security",
            "Prevent abusive activity",
          ],
        },
        { t: "sub", title: "5.4 Consent" },
        { t: "p", text: "Where legally required, for:" },
        {
          t: "list",
          marker: "roman",
          items: [
            "Location tracking",
            "Marketing communications",
            "Cookies and similar technologies",
          ],
        },
        {
          t: "p",
          text: "Provision of certain Personal Data is mandatory in order to create an account and access Blink services. Failure to provide required information may result in inability to register or use certain features of the Platform. Optional data (such as marketing preferences or dietary information) is provided voluntarily.",
        },
      ],
    },
    {
      n: "6",
      title: "Data Processing by Category of Data Subject",
      blocks: [
        { t: "sub", title: "6.1 For Users" },
        {
          t: "p",
          text: [
            { b: "Purpose:" },
            " Provide Platform services, process orders, handle payments, communicate promotions, and provide support.",
          ],
        },
        {
          t: "p",
          text: [
            { b: "Data Categories:" },
            " Account data, transaction data, location, technical logs, communications.",
          ],
        },
        {
          t: "p",
          text: [
            { b: "Legal Bases:" },
            " Contract necessity; consent for optional processing; legitimate interests for fraud prevention.",
          ],
        },
        { t: "sub", title: "6.2 For Merchants" },
        {
          t: "p",
          text: [
            { b: "Purpose:" },
            " Enable Merchant registration, product listing, order fulfilment, revenue settlement.",
          ],
        },
        {
          t: "p",
          text: [
            { b: "Data Categories:" },
            " Business registration info, contact details, bank details, performance data.",
          ],
        },
        {
          t: "p",
          text: [
            { b: "Legal Basis:" },
            " Contract necessity; legal obligations; legitimate interests.",
          ],
        },
        { t: "sub", title: "6.3 For Delivery Partners" },
        {
          t: "p",
          text: [
            { b: "Purpose:" },
            " Assign delivery tasks, coordinate logistics, verify identity, process payouts.",
          ],
        },
        {
          t: "p",
          text: [
            { b: "Data Categories:" },
            " Identity data, vehicle details, licence and insurance, location data.",
          ],
        },
        {
          t: "p",
          text: [
            { b: "Legal Basis:" },
            " Contract necessity; legal compliance (traffic and labour regulations); legitimate interests.",
          ],
        },
      ],
    },
    {
      n: "7",
      title: "Data Receivers & Disclosure",
      blocks: [
        { t: "sub", title: "7.1 Service Providers" },
        {
          t: "list",
          marker: "roman",
          items: [
            "Payment processors",
            "Analytics and cloud service providers",
            "Fraud detection partners",
            "Customer support platforms",
          ],
        },
        {
          t: "p",
          text: "These providers process data solely on Blink's instructions. Blink enters into written data processing agreements with all third-party processors to ensure compliance with applicable data protection laws.",
        },
        { t: "sub", title: "7.2 Merchants & Delivery Partners" },
        {
          t: "list",
          marker: "roman",
          items: ["Order details are shared for processing and fulfilment."],
        },
        { t: "sub", title: "7.3 Legal & Regulatory Authorities" },
        {
          t: "list",
          marker: "roman",
          items: [
            "Where required by Kenyan law (e.g., anti-fraud, anti-money-laundering investigations).",
          ],
        },
        { t: "sub", title: "7.4 Business Partners" },
        {
          t: "p",
          text: "With explicit consent or subject to a data sharing agreement.",
        },
      ],
    },
    {
      n: "8",
      title: "International Data Transfers",
      blocks: [
        {
          t: "p",
          text: "Personal data may be transferred outside Kenya only where:",
        },
        {
          t: "list",
          marker: "roman",
          items: [
            "The receiving country ensures adequate data protection; or",
            "Appropriate safeguards are in place such as binding contractual clauses.",
          ],
        },
      ],
    },
    {
      n: "9",
      title: "Data Retention",
      blocks: [
        {
          t: "p",
          text: "Blink retains Personal Data only for as long as necessary to fulfil the purposes outlined in this Policy and to comply with legal obligations. Indicative retention periods include:",
        },
        {
          t: "list",
          marker: "roman",
          items: [
            "Account Data – retained while the account remains active and for up to seven (7) years following account closure for legal and audit purposes;",
            "Transaction and Order Data – retained for a minimum of seven (7) years to comply with tax and financial reporting obligations;",
            "Marketing Data – retained until consent is withdrawn or the individual opts out;",
            "Location Data – retained for operational necessity and anonymised thereafter where possible;",
            "Recruitment Data – retained for up to two (2) years unless otherwise required by law;",
            "Dispute and Legal Records – retained for the duration of applicable statutory limitation periods.",
          ],
        },
        {
          t: "p",
          text: "Upon expiry of applicable retention periods, Personal Data is securely deleted or irreversibly anonymised.",
        },
      ],
    },
    {
      n: "10",
      title: "Security of Personal Data",
      blocks: [
        {
          t: "p",
          text: "Blink implements appropriate technical and organisational safeguards including:",
        },
        {
          t: "list",
          marker: "roman",
          items: [
            "Encryption (at rest and in transit)",
            "Access controls",
            "Regular audits",
            "Incident response protocols",
          ],
        },
        {
          t: "p",
          text: "However, no system is completely secure; absolute security cannot be guaranteed.",
        },
      ],
    },
    {
      n: "11",
      title: "Data Subject Rights",
      blocks: [
        {
          t: "p",
          text: "Under the Data Protection Act, 2019, you have rights including:",
        },
        {
          t: "list",
          marker: "roman",
          items: [
            "Right of access",
            "Right to correction",
            "Right to erasure (subject to legal limits)",
            "Right to restriction",
            "Right to data portability",
            "Right to object to processing",
            "Right to withdraw consent",
          ],
        },
        {
          t: "p",
          text: [
            "Requests may be submitted to Blink's Data Protection Officer at ",
            { a: DPO_EMAIL, href: `mailto:${DPO_EMAIL}` },
            ".",
          ],
        },
      ],
    },
    {
      n: "12",
      title: "Cookies and Similar Technologies",
      blocks: [
        {
          t: "p",
          text: "Blink uses cookies, pixels, and tracking technologies to:",
        },
        {
          t: "list",
          marker: "roman",
          items: [
            "Enable Platform functionality necessary for service provision",
            "Analyse usage patterns and improve services",
            "Deliver personalised content and marketing communications (subject to consent)",
          ],
        },
        { t: "sub", title: "Cookie Categories" },
        {
          t: "list",
          marker: "roman",
          items: [
            [{ b: "Strictly necessary:" }, " required for service operation"],
            [{ b: "Analytics:" }, " used to improve the platform"],
            [
              { b: "Marketing:" },
              " used to deliver personalised content and offers",
            ],
          ],
        },
        {
          t: "p",
          text: "Consent for non-essential cookies is obtained during app onboarding or via settings. Users may withdraw consent at any time via app settings or browser/device controls.",
        },
      ],
    },
    {
      n: "13",
      title: "Children's Data",
      blocks: [
        {
          t: "p",
          text: "Blink's services are not directed to individuals under the age of eighteen (18) years. Blink does not knowingly collect, process, or solicit Personal Data from children without verifiable parental or legal guardian consent.",
        },
        {
          t: "p",
          text: "If Blink becomes aware that Personal Data has been collected from a child without appropriate consent, Blink shall take reasonable steps to:",
        },
        {
          t: "list",
          marker: "roman",
          items: [
            "Verify the age of the individual;",
            "Obtain parental or guardian consent where legally required; or",
            "Delete the Personal Data promptly where such consent is not obtained.",
          ],
        },
        {
          t: "p",
          text: "Parents or legal guardians who believe that a child may have provided Personal Data to Blink without consent may contact the Data Protection Officer to request review and deletion of such data.",
        },
      ],
    },
    {
      n: "14",
      title: "Automated Decision-Making & Profiling",
      blocks: [
        { t: "p", text: "Blink may use automated systems to:" },
        {
          t: "list",
          marker: "roman",
          items: [
            "Detect fraud",
            "Improve routing and logistics",
            "Personalise content",
          ],
        },
        {
          t: "p",
          text: "Users may request human review where decisions have significant effects.",
        },
      ],
    },
    {
      n: "15",
      title: "Data Breach Notification",
      blocks: [
        {
          t: "p",
          text: "In the event of a personal data breach likely to result in a risk to the rights and freedoms of individuals, Blink shall:",
        },
        {
          t: "list",
          marker: "roman",
          items: [
            "Notify the Office of the Data Protection Commissioner without undue delay and, where feasible, within seventy-two (72) hours of becoming aware of the breach;",
            "Notify affected Data Subjects where the breach is likely to result in a high risk to their rights and freedoms;",
            "Implement appropriate remedial and mitigation measures.",
          ],
        },
      ],
    },
    {
      n: "16",
      title: "Changes to This Policy",
      blocks: [
        {
          t: "p",
          text: "Blink may update this Policy where necessary due to:",
        },
        {
          t: "list",
          marker: "roman",
          items: [
            "Changes in legal requirements",
            "Platform evolution",
            "Business developments",
          ],
        },
        {
          t: "p",
          text: "Where required by law, Blink will notify Users of material changes. Continued use of the Platform constitutes acceptance of the updated Policy.",
        },
      ],
    },
    {
      n: "17",
      title: "Contact Information",
      blocks: [
        {
          t: "defs",
          items: [
            {
              term: "Blink Hub Limited",
              text: "Gulf Towers, Enterprise Road, Industrial Area, Nairobi · P.O. Box 18887, Kenya",
            },
            {
              term: "Data Protection Officer",
              text: [{ a: DPO_EMAIL, href: `mailto:${DPO_EMAIL}` }],
            },
            {
              term: "General enquiries",
              text: [{ a: GENERAL_EMAIL, href: `mailto:${GENERAL_EMAIL}` }],
            },
          ],
        },
        {
          t: "p",
          text: "You may also contact the Office of the Data Protection Commissioner in Kenya for unresolved complaints under the Data Protection Act, 2019.",
        },
      ],
    },
    {
      n: "18",
      title: "Legal Basis and Consent Clarification",
      blocks: [
        {
          t: "p",
          text: "Blink processes Personal Data on the legal bases described in this Policy, including performance of a contract, compliance with legal obligations, legitimate interests, and consent where required by law.",
        },
        {
          t: "p",
          text: "Where processing is based on consent (such as marketing communications or optional location tracking), you may withdraw your consent at any time without affecting the lawfulness of processing carried out prior to withdrawal.",
        },
        {
          t: "p",
          text: "Withdrawal of consent may be exercised through the Blink application settings or by contacting the Data Protection Officer.",
        },
        {
          t: "callout",
          text: "This Policy constitutes Blink's full statement on the collection, use and protection of your personal data. For questions, contact our Data Protection Officer through the Help Section in the app.",
        },
      ],
    },
  ],
};
