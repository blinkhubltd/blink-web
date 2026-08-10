/** Registered company details, identical across all three legal documents. */
export const COMPANY = {
  name: "Blink Hub Limited",
  brand: "Blink",
  addressLines: [
    "Gulf Towers, Enterprise Road, Industrial Area",
    "P.O. Box 18887 – 00100, Nairobi, Kenya",
  ],
  registrationNo: "PVT-YU2LG2J8",
  /** Office of the Data Protection Commissioner registration (privacy only). */
  odpcNo: "375-571F-F852",
  email: "blinkhubltd@gmail.com",
  privacyEmail: "privacyblinkhubltd@gmail.com",
  phone: "+254 722 578 255",
  dpoPhone: "+254 732 555 515",
  dpoName: "Faiz Hussein Abdalla",
} as const;
