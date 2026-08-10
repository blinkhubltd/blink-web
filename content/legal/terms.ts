import type { LegalDoc } from "@/lib/legal/types";

/** Section 7.1 — the non-exhaustive restricted items list. */
const RESTRICTED_ITEMS: [string, string][] = [
  [
    "Alcohol and Tobacco Products",
    "Alcohol, tobacco products, and any related or assimilated products.",
  ],
  [
    "Animals and Regulated Species",
    "Animal parts or fluids; banned seeds, harmful plants; regulated plants or other organisms which are endangered or whose trade is regulated by law.",
  ],
  [
    "Child Exploitation Material",
    "Pornographic material involving children or content that may be perceived as erotic paedophilia.",
  ],
  [
    "Counterfeits and Unauthorised Products",
    "Copies or imitations of designer products; false autographs; foreign currency; stamps; tickets; or other unauthorised goods.",
  ],
  [
    "Controlled Drugs",
    "Controlled substances, narcotics, illegal drugs and their paraphernalia, including psychoactive substances and materials promoting their use.",
  ],
  [
    "Explosives and Dangerous Substances",
    "Explosives, flammable, corrosive, or toxic substances requiring special handling or permits.",
  ],
  [
    "Gambling and Betting",
    "Lottery tickets, bets, online betting site memberships/registrations, and related content.",
  ],
  [
    "Prescription Medicines",
    "Prescription drugs may not be ordered or delivered. OTC medicines and pharmacy products are subject to applicable regulatory requirements.",
  ],
  [
    "Stolen or Illegal Goods",
    "Materials, products or information that promotes illegal goods or facilitates illegal acts; goods produced in violation of third-party rights.",
  ],
  [
    "Offensive Goods",
    "Goods, literature, or other materials that are defamatory, promote violence, promote intolerance or hatred, or are contrary to public morals.",
  ],
  [
    "Weapons",
    "Firearms, ammunition and other weapons including undetectable or concealable knives, martial arts weapons, silencers, or ammunition magazines.",
  ],
  [
    "Pyrotechnic Devices",
    "Pyrotechnic items and related goods where their supply is regulated, as well as substances such as petrol or propane.",
  ],
  [
    "Traffic-Related Devices",
    "Radars, number plate covers, illegal traffic-modification devices and related products.",
  ],
  [
    "Money and Foreign Currency",
    "Foreign currency, banknotes, coins or any other valuable securities.",
  ],
  [
    "Minors / Near Schools",
    "Blink reserves the right to refuse orders from minors or at locations near primary or secondary schools, and to request proof of age.",
  ],
];

/**
 * Ported verbatim from the Blink mobile app
 * (`blink-ecommerce/app/terms-of-service.tsx`). Wording must not be edited here
 * without the drafter's sign-off.
 */
export const TERMS: LegalDoc = {
  slug: "terms",
  title: "Terms & Conditions",
  legalTitle: "BLINK GENERAL TERMS OF USE AND CONTRACTING",
  version: "v1.0",
  description:
    "The General Terms of Use and Contracting for the Blink platform, operated by Blink Hub Limited in the Republic of Kenya.",
  summary:
    "The General Terms of Use and Contracting that govern your access to the Blink platform and every order you place through it.",
  intro: [
    {
      t: "p",
      text: 'These General Terms of Use and Contracting (the "General Terms") apply to the website and mobile application operated under the brand name Blink ("Blink"), including all related websites, mobile applications, subdomains, and affiliated platforms operated by Blink in the Republic of Kenya (collectively, the "Platform"). By accessing the Platform and/or creating an account, the User expressly acknowledges and agrees to these General Terms, as well as Blink\'s Privacy Policy. Any person who does not agree with these Terms must refrain from using the Platform.',
    },
  ],
  sections: [
    {
      n: "1",
      title: "Object",
      blocks: [
        {
          t: "p",
          text: "Blink is a technology company whose principal activity consists of the development and operation of a digital technology platform that facilitates:",
        },
        {
          t: "list",
          marker: "roman",
          items: [
            'The listing and sale of products and/or services offered by independent third-party merchants ("Merchants"); and',
            'The coordination of delivery services performed by independent third-party delivery partners ("Delivery Partners").',
          ],
        },
        {
          t: "p",
          text: "Blink operates solely as an intermediary technology platform. Blink does not manufacture, own, store, sell, or supply the products listed by Merchants; employ Delivery Partners as employees; or act as an agent of the User, Merchant, or Delivery Partner unless expressly stated. The contractual relationship for the purchase of goods exists directly between the User and the Merchant.",
        },
        {
          t: "p",
          text: 'Where applicable, Users classified as "consumers" under the laws of the Republic of Kenya shall benefit from protections under the Consumer Protection Act and other applicable Kenyan legislation.',
        },
      ],
    },
    {
      n: "2",
      title: "User Access and Registration",
      blocks: [
        { t: "sub", title: "2.1 Basic Requirements for Registration" },
        {
          t: "p",
          text: "To register as a User of the Platform, the following conditions must be met:",
        },
        {
          t: "list",
          marker: "roman",
          items: [
            "The User must be at least 18 years of age.",
            "The User must provide accurate, complete, and up-to-date personal information, including full name, email address, telephone number, and payment details (where applicable).",
            "The User must accept these General Terms before completing registration.",
            "The User must accept Blink's Privacy Policy and Data Protection practices in compliance with the Data Protection Act.",
          ],
        },
        {
          t: "p",
          text: "Blink reserves the right to verify identity information and to refuse registration where information appears false, misleading, or incomplete.",
        },
        { t: "sub", title: "2.2 User Profile and Security" },
        {
          t: "p",
          text: "Upon registration, Users will create personal, confidential, and non-transferable login credentials. Users are solely responsible for maintaining the confidentiality of their credentials and for all activities conducted under their account. Blink shall not be liable for unauthorized access resulting from the User's failure to safeguard login credentials. Users must immediately notify Blink if they suspect unauthorized use of their account.",
        },
        { t: "sub", title: "2.3 User Obligations" },
        {
          t: "p",
          text: "Users agree to use the Platform in compliance with Kenyan law; provide accurate delivery addresses and contact details; and refrain from using the Platform for unlawful, fraudulent, or abusive purposes, uploading harmful software, or infringing intellectual property rights or personal data rights of third parties.",
        },
        {
          t: "p",
          text: "Blink reserves the right to suspend or terminate accounts that breach these Terms, engage in fraudulent behavior, or pose risk to the Platform or other users.",
        },
        { t: "sub", title: "2.4 User Reviews" },
        {
          t: "p",
          text: "Blink may allow Users to submit reviews relating to Merchants and/or delivery services. By submitting a review, the User confirms the review is truthful and based on actual experience, and grants Blink a non-exclusive license to publish and display the review. Blink may moderate, remove, or refuse reviews that are offensive, defamatory, false, discriminatory, or contrary to law or public policy.",
        },
        { t: "sub", title: "2.5 Fraud and Payment Misuse" },
        {
          t: "p",
          text: "Users must immediately notify Blink if their payment method has been stolen or unauthorized transactions are detected. Blink will cooperate with financial institutions and law enforcement where required but shall not be liable for fraudulent use of payment instruments where such fraud did not result from Blink's negligence.",
        },
        { t: "sub", title: "2.6 Deactivation of Accounts" },
        {
          t: "p",
          text: "Users may voluntarily deactivate their accounts through the Platform. Blink may suspend or permanently terminate accounts where registration requirements are no longer met, fraudulent or unlawful conduct is reasonably suspected, or these Terms are breached.",
        },
      ],
    },
    {
      n: "3",
      title: "Operation of the Service & Service Models",
      blocks: [
        { t: "sub", title: "3.1 Nature of the Platform" },
        {
          t: "p",
          text: "Blink operates a digital technology platform enabling Users to browse goods and services from independent Merchants, place Orders, and coordinate logistics with Delivery Partners. All Merchants and Delivery Partners operate as independent contractors solely responsible for compliance with licensing requirements, health and safety regulations, tax obligations, and applicable Kenyan laws.",
        },
        { t: "sub", title: "3.2 Order Process" },
        {
          t: "p",
          text: "An Order is placed when the User selects goods, confirms delivery details, selects a payment method, and confirms the Order through the Platform. The Order becomes binding upon confirmation by the Merchant and/or acceptance by a Delivery Partner. Blink reserves the right to decline or cancel Orders where products are unavailable, there is a pricing error, fraud is suspected, the delivery location is outside operational coverage, a technical malfunction occurs, or a Force Majeure Event arises.",
        },
        { t: "sub", title: "3.3 Service Models" },
        {
          t: "clause",
          n: "3.3.1",
          text: "Marketplace Model: Merchants list products and set pricing; Users purchase directly from Merchants; the sales contract exists solely between the User and the Merchant. Blink does not guarantee product quality, Merchant performance, accuracy of product descriptions, or stock levels.",
        },
        {
          t: "clause",
          n: "3.3.2",
          text: "Errand or On-Demand Procurement Model: Users may request a Delivery Partner to purchase items in person, collect goods from specified locations, or perform lawful errands. Users acknowledge that Blink does not inspect goods purchased through this service and does not guarantee pricing accuracy.",
        },
        {
          t: "clause",
          n: "3.3.3",
          text: "Courier Model: Users may request transportation of packages from one location to another. Users warrant that packages contain lawful items, are properly packaged, and comply with the Restricted Items policy (Section 7).",
        },
        { t: "sub", title: "3.4 Estimated Delivery Times" },
        {
          t: "p",
          text: "Delivery times displayed on the Platform are estimates only. Blink does not guarantee delivery within a specific timeframe. Delays may occur due to traffic conditions, weather, Merchant preparation times, Delivery Partner availability, security concerns, or Force Majeure Events.",
        },
        { t: "sub", title: "3.5 Communication" },
        {
          t: "p",
          text: "Users consent to receiving order confirmations, delivery notifications, service-related communications, customer service follow-ups, and Platform updates via SMS, push notifications, email, or in-app messaging.",
        },
      ],
    },
    {
      n: "4",
      title: "Economic Conditions",
      blocks: [
        { t: "sub", title: "4.1 Pricing Structure" },
        {
          t: "p",
          text: "Users may be charged: the product price, delivery fee, service fee, small order surcharge, platform convenience fee, surge or dynamic pricing adjustment, and applicable taxes including VAT. All charges shall be displayed prior to Order confirmation. By confirming the Order, the User authorizes the full amount displayed.",
        },
        { t: "sub", title: "4.2 Dynamic Pricing" },
        {
          t: "p",
          text: "Delivery and service fees may vary based on distance, time of day, demand levels, weather conditions, or special events. Blink reserves the right to adjust fees without prior notice, provided such fees are displayed before Order confirmation.",
        },
        { t: "sub", title: "4.3 Payment Methods" },
        {
          t: "p",
          text: "Payments may be made via mobile money platforms, debit or credit cards, or other electronic payment systems integrated into the Platform. Blink uses third-party payment service providers compliant with Kenyan regulatory requirements. Blink does not store full payment card details.",
        },
        { t: "sub", title: "4.4 Failed or Rejected Payments" },
        {
          t: "p",
          text: "If a payment fails, the Order may be automatically cancelled, the User account may be temporarily restricted, and outstanding balances may be recovered through lawful means.",
        },
        { t: "sub", title: "4.5 Refund Policy" },
        {
          t: "p",
          text: "Refunds may be processed where required under the Consumer Protection Act, the Merchant accepts cancellation or return, delivery fails due to fault attributable to Blink, or fraudulent or duplicate payment occurs. Refund timelines depend on the payment provider. Blink reserves discretion to issue goodwill refunds where commercially appropriate.",
        },
        { t: "sub", title: "4.6 Taxes" },
        {
          t: "p",
          text: "Merchants are responsible for declaring and remitting applicable taxes on goods sold. Blink is responsible for taxes applicable to its service fees.",
        },
      ],
    },
    {
      n: "5",
      title: "Cancellation of Orders and Right of Withdrawal",
      blocks: [
        { t: "sub", title: "5.1 Cancellation by the User" },
        {
          t: "p",
          text: "Users may cancel Orders before Merchant acceptance without penalty. Once the Merchant has begun preparation or a Delivery Partner has accepted the assignment, cancellation fees may apply, the product price may be non-refundable for perishable goods, and delivery fees may be non-refundable.",
        },
        { t: "sub", title: "5.2 Cancellation by Blink" },
        {
          t: "p",
          text: "Blink may cancel Orders due to fraud suspicion, Merchant unavailability, operational constraints, safety risks, or Force Majeure Events. Where payment has been processed, a refund shall be issued where appropriate.",
        },
        { t: "sub", title: "5.3 Right of Withdrawal" },
        {
          t: "p",
          text: "Where applicable under the Consumer Protection Act, Consumers may exercise statutory rights of withdrawal for non-perishable goods. The right of withdrawal does not apply to perishable goods, customized goods, prepared meals, or services fully performed.",
        },
      ],
    },
    {
      n: "6",
      title: "Promotional Campaigns and Commercial Actions",
      blocks: [
        { t: "sub", title: "6.1 Sampling Initiatives" },
        {
          t: "p",
          text: "Blink reserves the right to enter into commercial, marketing, or promotional agreements with third parties for the purpose of promoting products or services through the Platform. Such arrangements may include free samples within Orders, promotional inserts or branded materials, and sponsored product placement or featured listings. The inclusion of free samples shall not result in any additional cost to the User.",
        },
        { t: "sub", title: "6.2 User Participation" },
        {
          t: "p",
          text: "By placing an Order, the User acknowledges that the Order may include promotional samples and that participation in sampling campaigns may occur automatically. Users may opt out of promotional communications in accordance with Blink's Privacy Policy.",
        },
        { t: "sub", title: "6.3 Disclaimer for Samples" },
        {
          t: "p",
          text: "Blink does not manufacture, supply, inspect, test, or guarantee the quality, safety, or characteristics of promotional samples. Blink accepts no liability for any damage, allergic reaction, defect, loss, or offence arising from promotional samples. Responsibility rests solely with the Merchant or sponsoring brand.",
        },
        { t: "sub", title: "6.4 Merchant-Led Campaigns" },
        {
          t: "p",
          text: "Merchants may independently organise promotional campaigns through the Platform. Blink does not control or verify such campaigns and shall not be liable for their legality or compliance. Merchants are solely responsible for compliance with the Consumer Protection Act, advertising standards, and public health regulations.",
        },
      ],
    },
    {
      n: "7",
      title: "Policy on the Delivery of Restricted Items",
      blocks: [
        { t: "sub", title: "7.1 General Policy" },
        {
          t: "p",
          text: "Blink prohibits the use of the Platform for the purchase, sale, transport, or delivery of illegal, restricted, or regulated items. The following is a non-exhaustive list of restricted or prohibited items:",
        },
        {
          t: "table",
          head: ["Category", "Description"],
          rows: RESTRICTED_ITEMS.map(([cat, desc]) => [cat, desc]),
        },
        { t: "sub", title: "7.2 Alcohol-Specific Provisions" },
        {
          t: "p",
          text: "Users ordering alcoholic products warrant that they are of legal drinking age under Kenyan law and will provide valid identification upon delivery. Delivery Partners may refuse delivery where age cannot be verified, the recipient is visibly intoxicated, or delivery occurs outside legally permitted hours. Where delivery is refused, the User shall bear the full cost of the Order.",
        },
        { t: "sub", title: "7.3 Pharmacy and Medical Products" },
        {
          t: "p",
          text: "Blink does not sell or advertise prescription medicines unless permitted by Kenyan law. Where legally permitted, Blink acts solely as an intermediary and the pharmacy dispenses products directly to the User. Blink does not provide medical advice, guarantee product suitability, and accepts no liability for User misuse of pharmaceutical products.",
        },
      ],
    },
    {
      n: "8",
      title: "Content Moderation and Alteration",
      blocks: [
        {
          t: "p",
          text: "Blink reserves the right to restrict access, suspend accounts, remove or block content, or disable functionality where it reasonably believes content is illegal, fraudulent, harmful, infringing third-party rights, or contrary to these Terms.",
        },
        {
          t: "p",
          text: "Blink does not tolerate abusive language directed at Blink personnel, Merchants, Delivery Partners, or other Users. Users may report unlawful content through the Help Section. Blink will investigate reports and take reasonable steps to remove unlawful content where identified.",
        },
        {
          t: "p",
          text: "Blink reserves the right to determine ranking algorithms, Merchant positioning, product visibility, and sponsored placements. Ranking may depend on proximity, reviews, performance metrics, or commercial agreements.",
        },
      ],
    },
    {
      n: "9",
      title: "Social Responsibility and Donation Campaigns",
      blocks: [
        {
          t: "p",
          text: "Blink may collaborate with non-governmental organisations, charitable institutions, and corporate social responsibility initiatives. Blink acts solely as an intermediary platform facilitating donations. Blink does not control the final use of donated funds, provides no guarantee regarding outcomes, and accepts no liability for campaign results.",
        },
      ],
    },
    {
      n: "10",
      title: "Geolocation",
      blocks: [
        {
          t: "p",
          text: "Blink may collect and process precise geolocation data for displaying merchant proximity, facilitating deliveries, and improving service accuracy. By using the Platform, the User consents to geolocation processing in accordance with the Data Protection Act.",
        },
        {
          t: "p",
          text: "Geolocation data may be shared with Merchants and Delivery Partners for the sole purpose of fulfilling Orders. Users may disable geolocation through device settings, though this may limit functionality.",
        },
      ],
    },
    {
      n: "11",
      title: "Responsibilities, Warranties and Limitation of Liability",
      blocks: [
        { t: "sub", title: "11.1 User Equipment and Access" },
        {
          t: "p",
          text: "Users are solely responsible for obtaining and maintaining compatible devices, internet connectivity, updated operating systems, and any other technical infrastructure necessary to access and use the Platform. Blink shall not be responsible for incompatibility between the Platform and a User's device, network failures, browser malfunctions, or use of outdated software.",
        },
        { t: "sub", title: "11.2 No Guarantee of Continuous Availability" },
        {
          t: "p",
          text: "While Blink shall use reasonable technical and organisational measures to maintain platform functionality, Blink does not warrant that the Platform will be uninterrupted, error-free, or always available. Blink shall not be liable for service interruptions beyond its reasonable control, internet outages, Force Majeure Events, maintenance downtime, or cyberattacks.",
        },
        { t: "sub", title: "11.3 Security and Cyber Risk" },
        {
          t: "p",
          text: "Blink implements reasonable safeguards consistent with the Data Protection Act and good industry practice. However, Blink shall not be liable for damage arising from malware on the User's device, phishing attacks, compromised passwords due to User negligence, or third-party hacking beyond Blink's reasonable control.",
        },
        { t: "sub", title: "11.4 User-Generated Content" },
        {
          t: "p",
          text: "Blink does not control, pre-screen or continuously monitor content uploaded by Users, Merchants, Vendors, or Delivery Partners. Each content provider bears sole responsibility for accuracy, legality, authenticity, completeness, and non-infringement of third-party rights.",
        },
        { t: "sub", title: "11.5 Intermediary Status" },
        {
          t: "p",
          text: "Blink acts strictly as a digital intermediary. Upon order confirmation, a direct contractual relationship arises between the User and the Merchant and/or Delivery Partner. Blink is not a party to that contract and does not assume liability for its performance. Users expressly acknowledge that Blink is not the seller of goods, the manufacturer of products, or the provider of delivery services.",
        },
        { t: "sub", title: "11.6 Products and Services" },
        {
          t: "p",
          text: "Blink makes no warranties regarding product quality, Merchant compliance, ingredient disclosures, allergen information, or product suitability. All responsibility for goods rests solely with the Merchant. Images displayed on the Platform are for illustrative purposes only.",
        },
        { t: "sub", title: "11.7 Delivery Liability" },
        {
          t: "p",
          text: "Where delivery is requested, Blink acts solely as a digital intermediary between the User and an independent Delivery Partner. Blink is not a logistics provider and does not directly employ or control Delivery Partners. Any delivery time displayed is an estimate only.",
        },
        {
          t: "p",
          text: "Blink shall not be liable for delays, missed delivery windows, Delivery Partner non-performance, or loss, damage, deterioration, spoilage, theft, or mishandling during transit. If a User alleges damage or loss, the User must notify the Delivery Partner immediately and notify Blink through the Help Section.",
        },
      ],
    },
    {
      n: "12",
      title: "Updates and Changes to the Platform",
      blocks: [
        {
          t: "p",
          text: "Blink reserves the right to amend these General Terms, Privacy Policy, and all Platform policies. Where required by Kenyan law, Users shall be given prior notice. Continued use of the Platform after notification constitutes acceptance of revised Terms.",
        },
        {
          t: "p",
          text: "Blink may at any time update features, modify functionality, suspend services, remove content, restrict access, or discontinue parts of the Platform without liability, unless otherwise required by law.",
        },
      ],
    },
    {
      n: "13",
      title: "Intellectual Property",
      blocks: [
        { t: "sub", title: "13.1 Ownership" },
        {
          t: "p",
          text: "All intellectual property rights in the Platform, including software code, layout and design, trademarks, logos, databases, written content, graphics, and user interface elements, are owned by or licensed to Blink and protected under the Copyright Act and other applicable laws.",
        },
        { t: "sub", title: "13.2 Prohibited Conduct" },
        {
          t: "p",
          text: "Users shall not copy or reproduce the Platform, reverse engineer the software, extract databases, scrape content, modify design, re-publish content for commercial purposes, or create derivative works. Any unauthorised use may result in account termination, legal proceedings, or damages claims.",
        },
        { t: "sub", title: "13.3 Licence Granted by Users" },
        {
          t: "p",
          text: "By uploading content to the Platform, Users grant Blink a worldwide, royalty-free, transferable, sub-licensable, non-exclusive licence to use, reproduce, modify, distribute and display such content for platform operation, marketing and business purposes, to the maximum extent permitted under Kenyan law.",
        },
      ],
    },
    {
      n: "14",
      title: "Severability",
      blocks: [
        {
          t: "p",
          text: "If any provision of these Terms is declared invalid, illegal or unenforceable by a court of competent jurisdiction in Kenya, that provision shall be severed and the remaining provisions shall remain valid and enforceable. The Parties agree that any invalid clause shall be interpreted so as to reflect as closely as possible the original commercial intention.",
        },
      ],
    },
    {
      n: "15",
      title: "Applicable Law and Jurisdiction",
      blocks: [
        {
          t: "p",
          text: "These Terms shall be governed by and construed in accordance with the laws of the Republic of Kenya. Any dispute arising from or related to the use of the Platform shall be subject to the exclusive jurisdiction of the courts of Kenya. Nothing in this clause shall limit consumer rights that cannot be waived under Kenyan law, including protections under the Consumer Protection Act.",
        },
      ],
    },
    {
      n: "16",
      title: "Customer Support and Alternative Dispute Resolution",
      blocks: [
        { t: "sub", title: "16.1 Help Section" },
        {
          t: "p",
          text: "Blink provides an in-app Help Section enabling communication with Delivery Partners during order fulfilment, submission of complaints, reporting of incidents, and account support. Users must use official channels for dispute reporting.",
        },
        { t: "sub", title: "16.2 Complaint Handling" },
        {
          t: "p",
          text: "Blink may act as an intermediary in resolving disputes relating to orders, account suspension, Platform conduct, or payment processing. Blink does not guarantee specific dispute outcomes.",
        },
        { t: "sub", title: "16.3 Alternative Dispute Resolution" },
        {
          t: "p",
          text: "Where applicable, Users retain the right to lodge complaints with relevant regulatory bodies, refer disputes to mediation, and seek recourse before Kenyan courts. Nothing in these Terms limits statutory consumer remedies.",
        },
        {
          t: "callout",
          text: "This document constitutes the entire agreement between you and Blink Hub Limited regarding your use of the Platform. For questions, contact us through the Help Section in the app.",
        },
      ],
    },
  ],
};
