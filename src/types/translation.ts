// src/types/translations.ts

export interface TranslationFooter {
  brandName: string;
  companyDescription: string;
  quickLinks: string;
  quickLinksItems: Array<{
    name: string;
    path: string;
  }>;
  services: string;
  servicesItems: string[];
  language: string;
  contact: string;
  address: string;
  phone: string;
  email: string;
  newsletterTitle: string;
  newsletterPlaceholder: string;
  newsletterSuccess: string;
  rightsReserved: string;
  privacyPolicy: string;
  termsOfService: string;
  cookiePolicy: string;
  madeWith: string;
  paymentMethods: string;
}
