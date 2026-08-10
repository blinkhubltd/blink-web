import type { LegalDoc } from "@/lib/legal/types";

/**
 * Ported verbatim from the Blink mobile app (`blink-ecommerce/app/eula.tsx`).
 * Wording must not be edited here without the drafter's sign-off.
 */
export const EULA: LegalDoc = {
  slug: "eula",
  title: "End User Licence Agreement",
  legalTitle: "END USER LICENCE AGREEMENT (EULA)",
  version: "v1.0",
  description:
    "The End User Licence Agreement governing your use of the Blink mobile application, issued by Blink Hub Limited under the laws of Kenya.",
  summary:
    "The licence terms between you and Blink Hub Limited for downloading, installing and using the Blink app.",
  sections: [
    {
      n: "1",
      title: "Acceptance of Terms (Clickwrap Enforcement)",
      blocks: [
        {
          t: "clause",
          n: "1.1",
          text: [
            'This End User License Agreement ("Agreement") is a legally binding contract between ',
            { b: "BLINK HUB LIMITED" },
            ', a company incorporated in Kenya ("Blink", "we", "us", "our"), and any individual who downloads, installs, registers, accesses, or uses the Blink mobile application ("User", "you", "your").',
          ],
        },
        {
          t: "clause",
          n: "1.2",
          text: 'By selecting "I Agree", creating an account, or using the App, you:',
        },
        {
          t: "list",
          marker: "roman",
          items: [
            "Confirm that you have read this Agreement;",
            "Confirm that you understand it;",
            "Agree to be legally bound by it.",
          ],
        },
        {
          t: "clause",
          n: "1.3",
          text: "If you do not agree, you must not use the App.",
        },
        {
          t: "clause",
          n: "1.4",
          text: "This Agreement forms an electronic contract under Kenyan law and is enforceable as if physically signed.",
        },
        {
          t: "clause",
          n: "1.5",
          text: "This Agreement is recognized as an electronic record and an electronic contract under the Kenyan Electronic Transactions Act, 2007, and is enforceable as if physically signed.",
        },
      ],
    },
    {
      n: "2",
      title: "Grant of License",
      blocks: [
        {
          t: "clause",
          n: "2.1",
          text: "Subject to your compliance with this Agreement, Blink hereby grants you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to:",
        },
        {
          t: "list",
          marker: "roman",
          items: [
            "Download, install, access, and use the Blink mobile application;",
            "Use the App in object code form only;",
            "Use the App solely for personal, non-commercial purposes;",
            "Use the App strictly in accordance with this Agreement.",
          ],
        },
        {
          t: "clause",
          n: "2.2",
          text: "This license does not grant you any ownership rights in the App or its intellectual property.",
        },
        {
          t: "clause",
          n: "2.3",
          text: "All rights not expressly granted to you under this Agreement are reserved by Blink.",
        },
      ],
    },
    {
      n: "3",
      title: "License Restrictions",
      blocks: [
        {
          t: "p",
          text: "Except as expressly permitted under this Agreement, you shall not:",
        },
        {
          t: "list",
          marker: "roman",
          items: [
            "Copy, modify, adapt, translate, or create derivative works of the App;",
            "Reverse engineer, decompile, disassemble, or attempt to extract source code;",
            "Rent, lease, lend, sell, sublicense, assign, or otherwise commercially exploit the App;",
            "Remove or alter any proprietary notices, branding, trademarks, or copyrights;",
            "Use the App for unlawful or unauthorized purposes;",
            "Violate usage limits or controls of the App Store or Google Play;",
            "Attempt any actions that may impair other users' access or the App functionality.",
          ],
        },
        {
          t: "p",
          text: "Any breach of this section may result in immediate termination of your license.",
        },
      ],
    },
    {
      n: "4",
      title: "Acceptable Use",
      blocks: [
        {
          t: "clause",
          n: "4.1",
          text: "You agree that you will not use or encourage others to use the Mobile App or the Subscription Service in a way that could harm or impair others' use of the App or Service.",
        },
        {
          t: "clause",
          n: "4.2",
          text: "Your use of the App and Service is governed by the Acceptable Use Policy.",
        },
        {
          t: "clause",
          n: "4.3",
          text: "You also agree not to violate the usage limits or controls set forth by:",
        },
        {
          t: "list",
          marker: "roman",
          items: [
            "the App Store Terms of Service, for iOS users accessing the App on an Apple product; or",
            "Google Play Terms of Service, for Android users accessing the App on an Android product.",
          ],
        },
      ],
    },
    {
      n: "5",
      title: "Nature of Blink's Services (Marketplace Positioning)",
      blocks: [
        {
          t: "clause",
          n: "5.1",
          text: 'Blink operates a technology-enabled marketplace platform that connects Users with independent third-party grocery merchants ("Merchants").',
        },
        { t: "clause", n: "5.2", text: "Blink:" },
        {
          t: "list",
          marker: "roman",
          items: [
            "Does not manufacture goods;",
            "Does not own inventory (unless expressly stated in writing);",
            "Does not act as principal seller of goods listed by Merchants;",
            "Does not control expiry dates, storage standards, labeling, or product safety compliance.",
          ],
        },
        {
          t: "clause",
          n: "5.3",
          text: "The contract of sale for goods is concluded directly between the User and the Merchant fulfilling the order.",
        },
        { t: "clause", n: "5.4", text: "Blink acts solely as:" },
        {
          t: "list",
          marker: "roman",
          items: [
            "A technology intermediary;",
            "A digital payment facilitator;",
            "A logistics coordination platform.",
          ],
        },
        {
          t: "clause",
          n: "5.5",
          text: "Nothing in this Agreement creates agency, partnership, joint venture, or employment relationship between Blink and Merchants. Blink does not act as a seller under the E-commerce Regulations, 2019 (Kenya); all product obligations remain with the Merchant.",
        },
      ],
    },
    {
      n: "6",
      title: "Eligibility",
      blocks: [
        { t: "p", text: "You may use the App only if:" },
        {
          t: "list",
          marker: "roman",
          items: [
            "You are at least 18 years old;",
            "You have legal capacity to contract under Kenyan law;",
            "You provide accurate registration information.",
            "Users under 18 years must have parental/guardian consent to use the App.",
          ],
        },
        {
          t: "p",
          text: "Blink reserves the right to suspend accounts of minors without appropriate consent. Blink may suspend accounts found to be false, fraudulent, or misleading.",
        },
      ],
    },
    {
      n: "7",
      title: "Account Registration & Security",
      blocks: [
        { t: "clause", n: "7.1", text: "You must provide accurate:" },
        {
          t: "list",
          marker: "roman",
          items: [
            "Name;",
            "Phone number;",
            "Delivery address;",
            "Payment details.",
          ],
        },
        { t: "clause", n: "7.2", text: "You are responsible for:" },
        {
          t: "list",
          marker: "roman",
          items: [
            "Maintaining password confidentiality;",
            "All activities conducted under your account.",
          ],
        },
        {
          t: "clause",
          n: "7.3",
          text: "Blink may suspend or terminate accounts for:",
        },
        {
          t: "list",
          marker: "roman",
          items: [
            "Fraud;",
            "Abuse of refunds;",
            "Payment reversals;",
            "Harassment of riders or pickers.",
          ],
        },
      ],
    },
    {
      n: "8",
      title: "Order Process & Contract Formation",
      blocks: [
        {
          t: "clause",
          n: "8.1",
          text: "Listings displayed in the App constitute invitations to treat.",
        },
        {
          t: "clause",
          n: "8.2",
          text: "An order placed by you constitutes an offer to purchase.",
        },
        {
          t: "clause",
          n: "8.3",
          text: "A binding contract is formed only when:",
        },
        {
          t: "list",
          marker: "roman",
          items: [
            "The Merchant confirms availability; and",
            "Blink confirms order processing.",
          ],
        },
        {
          t: "clause",
          n: "8.4",
          text: "Blink reserves the right to cancel orders due to:",
        },
        {
          t: "list",
          marker: "roman",
          items: [
            "Stock unavailability;",
            "Pricing errors;",
            "Fraud detection triggers;",
            "Payment failure;",
            "Force majeure events.",
          ],
        },
        { t: "p", text: "Refunds shall follow applicable law." },
      ],
    },
    {
      n: "9",
      title: "Pricing, Fees & Payment Terms",
      blocks: [
        {
          t: "clause",
          n: "9.1",
          text: "Product prices are set by Merchants unless otherwise stated.",
        },
        { t: "clause", n: "9.2", text: "Blink may charge:" },
        {
          t: "list",
          marker: "roman",
          items: [
            "Delivery fees;",
            "Service fees;",
            "Surge fees;",
            "Small basket fees;",
            "Platform convenience fees.",
          ],
        },
        { t: "clause", n: "9.3", text: "Payment methods may include:" },
        {
          t: "list",
          marker: "roman",
          items: [
            "M-Pesa;",
            "Debit/Credit Cards;",
            "Cash on Delivery (COD) (where available).",
          ],
        },
        {
          t: "clause",
          n: "9.4",
          text: "Digital payments are processed via licensed third-party payment providers.",
        },
        {
          t: "clause",
          n: "9.5",
          text: "Blink does not store full card details unless compliant with applicable payment security standards. All digital payment transactions comply with Payment Card Industry Data Security Standards (PCI DSS) and Kenya National Payment System Regulations.",
        },
        { t: "clause", n: "9.6", text: "Cash on Delivery:" },
        {
          t: "list",
          marker: "roman",
          items: [
            "Exact payment is required;",
            "Refusal to pay may result in account suspension;",
            "Blink may withdraw COD privileges.",
          ],
        },
      ],
    },
    {
      n: "10",
      title: "Delivery Terms",
      blocks: [
        {
          t: "clause",
          n: "10.1",
          text: 'Estimated delivery times (including "10-minute delivery") are estimates only and not guaranteed.',
        },
        { t: "clause", n: "10.2", text: "Delays may arise due to:" },
        {
          t: "list",
          marker: "roman",
          items: [
            "Traffic;",
            "Weather;",
            "Merchant delays;",
            "Rider availability;",
            "Technical system errors.",
          ],
        },
        {
          t: "clause",
          n: "10.3",
          text: "Risk in goods passes upon delivery and acceptance.",
        },
        {
          t: "clause",
          n: "10.4",
          text: "You must inspect goods upon delivery and report visible issues immediately.",
        },
        {
          t: "clause",
          n: "10.5",
          text: "Notwithstanding delivery risk transfer, statutory rights under the Consumer Protection Act, 2012 remain enforceable.",
        },
      ],
    },
    {
      n: "11",
      title: "Product Liability & Disclaimers",
      blocks: [
        {
          t: "clause",
          n: "11.1",
          text: "Merchants are solely responsible for:",
        },
        {
          t: "list",
          marker: "roman",
          items: [
            "Product quality;",
            "Expiry dates;",
            "Storage compliance;",
            "Food safety compliance;",
            "Regulatory approvals;",
            "Pricing accuracy.",
          ],
        },
        { t: "clause", n: "11.2", text: "Blink is not liable for:" },
        {
          t: "list",
          marker: "roman",
          items: [
            "Defective goods;",
            "Expired products;",
            "Allergic reactions;",
            "Mislabeling;",
            "Incorrect nutritional information.",
          ],
        },
        {
          t: "clause",
          n: "11.3",
          text: "Nothing excludes rights granted under the Consumer Protection Act.",
        },
        {
          t: "clause",
          n: "11.4",
          text: "Blink is not liable for any breach of standards under the Kenya Food, Drugs and Chemical Substances Act, Cap 254 by Merchants.",
        },
      ],
    },
    {
      n: "12",
      title: "Returns & Refunds",
      blocks: [
        { t: "clause", n: "12.1", text: "Refunds may be granted where:" },
        {
          t: "list",
          marker: "roman",
          items: [
            "Wrong items are delivered;",
            "Goods are visibly defective;",
            "Items are missing.",
          ],
        },
        {
          t: "clause",
          n: "12.2",
          text: "Refunds shall comply with Kenyan consumer law.",
        },
        {
          t: "clause",
          n: "12.3",
          text: "Blink may facilitate refunds but does not assume seller liability unless explicitly stated.",
        },
        {
          t: "clause",
          n: "12.4",
          text: "All claims for refunds must be made within 7 days of delivery unless otherwise required by law.",
        },
      ],
    },
    {
      n: "13",
      title: "Data Protection & Privacy",
      blocks: [
        {
          t: "clause",
          n: "13.1",
          text: "Blink processes personal data in accordance with the Data Protection Act.",
        },
        { t: "clause", n: "13.2", text: "Categories collected:" },
        {
          t: "list",
          marker: "roman",
          items: [
            "Identity data;",
            "Contact details;",
            "Location data (GPS);",
            "Device information;",
            "Payment transaction data;",
            "Order history.",
          ],
        },
        { t: "clause", n: "13.3", text: "Purposes:" },
        {
          t: "list",
          marker: "roman",
          items: [
            "Order fulfillment;",
            "Fraud prevention;",
            "AI-based route optimization;",
            "Customer support;",
            "Regulatory compliance.",
          ],
        },
        { t: "clause", n: "13.4", text: "Legal bases include:" },
        {
          t: "list",
          marker: "roman",
          items: [
            "Contract performance;",
            "Legitimate interests;",
            "Legal obligations;",
            "Consent (where required).",
          ],
        },
        { t: "clause", n: "13.5", text: "Users have rights to:" },
        {
          t: "list",
          marker: "roman",
          items: [
            "Access;",
            "Rectification;",
            "Erasure (where applicable);",
            "Objection;",
            "Restriction of processing.",
          ],
        },
        {
          t: "p",
          text: "Requests may be directed to Blink's Data Protection Officer.",
        },
        {
          t: "clause",
          n: "13.6",
          text: "Blink shall retain personal data only for as long as necessary to fulfill contractual obligations, meet legal obligations, and enforce rights. Users may lodge complaints with the Office of the Data Protection Commissioner (ODPC), Kenya.",
        },
      ],
    },
    {
      n: "14",
      title: "GPS & Location Tracking",
      blocks: [
        {
          t: "clause",
          n: "14.1",
          text: "The App uses real-time GPS tracking for:",
        },
        {
          t: "list",
          marker: "roman",
          items: [
            "Rider allocation;",
            "Order tracking;",
            "Delivery optimization.",
          ],
        },
        {
          t: "clause",
          n: "14.2",
          text: "Disabling location services may impair functionality.",
        },
        {
          t: "clause",
          n: "14.3",
          text: "Location data is processed securely and retained only as necessary.",
        },
        {
          t: "clause",
          n: "14.4",
          text: "Location data processing is conducted in compliance with the Data Protection (Privacy of Personal Information) Regulations, Kenya, 2020.",
        },
      ],
    },
    {
      n: "15",
      title: "Automated Decision-Making",
      blocks: [
        { t: "p", text: "Blink uses automated systems to:" },
        {
          t: "list",
          marker: "roman",
          items: [
            "Assign riders;",
            "Detect fraud;",
            "Optimize routing;",
            "Manage delivery prioritization.",
          ],
        },
        {
          t: "p",
          text: "Where legally required, meaningful human oversight is applied. Users may request clarification regarding automated decisions affecting them.",
        },
      ],
    },
    {
      n: "16",
      title: "Prohibited Conduct",
      blocks: [
        { t: "p", text: "You must not:" },
        {
          t: "list",
          marker: "roman",
          items: [
            "Commit fraud;",
            "Interfere with delivery personnel;",
            "Upload malicious software;",
            "Attempt system intrusion;",
            "Reverse engineer the App.",
          ],
        },
        {
          t: "p",
          text: "Violations may attract action under the Computer Misuse and Cybercrimes Act. Users who commit offences under the Computer Misuse and Cybercrimes Act, 2018 may face criminal prosecution and civil liability.",
        },
      ],
    },
    {
      n: "17",
      title: "Intellectual Property",
      blocks: [
        { t: "p", text: "All intellectual property rights in:" },
        {
          t: "list",
          marker: "roman",
          items: [
            "Software;",
            "Logos;",
            "Trademarks;",
            "Branding;",
            "Content",
          ],
        },
        {
          t: "p",
          text: "belong exclusively to Blink. No ownership rights are transferred.",
        },
      ],
    },
    {
      n: "18",
      title: "Limitation of Liability",
      blocks: [
        {
          t: "p",
          text: "To the fullest extent permitted by law, Blink shall not be liable for:",
        },
        {
          t: "list",
          marker: "roman",
          items: [
            "Indirect damages;",
            "Loss of profits;",
            "Consequential damages;",
            "Delivery delays;",
            "Merchant negligence.",
          ],
        },
        {
          t: "p",
          text: "Total liability (if any) shall not exceed the total service fees paid for the relevant order.",
        },
        {
          t: "p",
          text: "Nothing in this Agreement shall limit liability for:",
        },
        {
          t: "list",
          marker: "roman",
          items: [
            "Death or personal injury caused by negligence;",
            "Fraud or fraudulent misrepresentation;",
            "Non-excludable statutory rights under Kenyan law.",
          ],
        },
      ],
    },
    {
      n: "19",
      title: "Indemnity",
      blocks: [
        {
          t: "p",
          text: "You agree to indemnify Blink against claims arising from:",
        },
        {
          t: "list",
          marker: "roman",
          items: [
            "Breach of this Agreement;",
            "Fraudulent conduct;",
            "Violation of law;",
            "Misuse of the platform.",
          ],
        },
      ],
    },
    {
      n: "20",
      title: "Suspension & Termination",
      blocks: [
        {
          t: "clause",
          n: "20.1",
          text: "Blink may suspend or terminate your access at any time, with or without notice, for any reason, including:",
        },
        {
          t: "list",
          marker: "roman",
          items: [
            "Breach of this Agreement;",
            "Fraudulent or unlawful conduct;",
            "Unauthorized use of the App or Service;",
            "Repeated abuse of the refund system or payment reversals;",
            "Activities that could harm Blink, other Users, or the App.",
          ],
        },
        {
          t: "clause",
          n: "20.2",
          text: "Upon termination, all licenses granted under this Agreement will immediately cease. You must stop using the App and delete all copies from your devices.",
        },
        {
          t: "clause",
          n: "20.3",
          text: "Users may discontinue use at any time. Termination does not affect accrued rights, remedies, or obligations.",
        },
      ],
    },
    {
      n: "21",
      title: "Force Majeure",
      blocks: [
        { t: "p", text: "Blink is not liable for failure due to:" },
        {
          t: "list",
          marker: "roman",
          items: [
            "Natural disasters;",
            "Civil unrest;",
            "Government orders;",
            "Power outages;",
            "System failures.",
          ],
        },
      ],
    },
    {
      n: "22",
      title: "Competition Law Compliance",
      blocks: [
        {
          t: "p",
          text: "Blink operates as a neutral platform and does not engage in unlawful price-fixing in compliance with the Competition Act.",
        },
      ],
    },
    {
      n: "23",
      title: "Dispute Resolution",
      blocks: [
        { t: "p", text: "Disputes shall:" },
        {
          t: "list",
          marker: "decimal",
          items: [
            "First be resolved amicably within 14 days;",
            "Failing which, be referred to mediation in Nairobi;",
            "If unresolved, submitted to arbitration seated in Nairobi under Kenyan law;",
            "Courts of Kenya retain supervisory jurisdiction.",
            "Arbitration will be conducted in accordance with the Arbitration Act, Cap 49, Laws of Kenya. The arbitration award shall be final and binding.",
          ],
        },
        {
          t: "p",
          text: "Any party may seek interim relief from the High Court of Kenya as necessary.",
        },
      ],
    },
    {
      n: "24",
      title: "Children's Privacy",
      blocks: [
        {
          t: "p",
          text: "The App is not intended for children under 13 years. Blink does not knowingly collect personal data from children without parental consent. Parents may request deletion of data collected from their child.",
        },
      ],
    },
    {
      n: "25",
      title: "Third-Party Links & Content",
      blocks: [
        {
          t: "p",
          text: "The App may contain links to third-party websites or services. Blink is not responsible for their content, privacy practices, or availability. Users access such content at their own risk.",
        },
      ],
    },
    {
      n: "26",
      title: "Amendments",
      blocks: [
        {
          t: "p",
          text: "Blink may update this Agreement. Material changes will be notified via:",
        },
        {
          t: "list",
          marker: "roman",
          items: ["App notification;", "Email."],
        },
        { t: "p", text: "Continued use constitutes acceptance." },
      ],
    },
    {
      n: "27",
      title: "Governing Law and Jurisdiction",
      blocks: [
        {
          t: "p",
          text: "This Agreement is governed by the laws of the Republic of Kenya. Any dispute shall be resolved under section 23, with courts of Kenya retaining supervisory jurisdiction.",
        },
      ],
    },
    {
      n: "28",
      title: "Contact Information",
      blocks: [
        {
          t: "defs",
          items: [
            {
              term: "BLINK HUB LIMITED",
              text: [
                "Gulf Towers, Enterprise Road, Industrial Area · P.O. Box 18887, Enterprise Road, Nairobi · ",
                { a: "blinkhubltd@gmail.com", href: "mailto:blinkhubltd@gmail.com" },
                " · ",
                { a: "+254 722 578 255", href: "tel:+254722578255" },
              ],
            },
            {
              term: "Data Protection Officer",
              text: [
                "Faiz Hussein Abdalla · ",
                { a: "+254 732 555 515", href: "tel:+254732555515" },
                " · ",
                { a: "blinkhubltd@gmail.com", href: "mailto:blinkhubltd@gmail.com" },
              ],
            },
          ],
        },
        {
          t: "callout",
          text: "By installing or using the Blink app you confirm that you have read and accepted this End User License Agreement in full. This Agreement constitutes an electronic contract enforceable under the Electronic Transactions Act, 2007 (Kenya).",
        },
      ],
    },
  ],
};
