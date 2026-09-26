import type { ImageMetadata } from 'astro';
import iso9001 from '../assets/certificates/iso-9001-2015.jpeg';
import iso14001 from '../assets/certificates/iso-14001-2015.jpeg';
import iso45001 from '../assets/certificates/iso-45001-2018.jpeg';

// Details transcribed from the certificate images issued to
// Avani Ecocare Labs Private Limited.
export interface Certification {
  standard: string;
  system: string;
  number: string;
  issued: string;
  expires: string;
  image: ImageMetadata;
  alt: string;
}

export const certificationBody = {
  name: 'Quality Control Certification (QCC)',
  accreditation: 'Accredited by UASL, England, UK',
  verifyUrl: 'http://uasl.uk.com/certifiedorganization',
};

export const certificationScope =
  'Testing Services: Polymer and Polymer Products, Metal & Alloys, Building Material, Chemical Testing, Water Testing, Compliance Testing and Environmental Testing';

export const certifications: Certification[] = [
  {
    standard: 'ISO 9001:2015',
    system: 'Quality Management System',
    number: 'QMS/4DA6/0926',
    issued: '21 September 2026',
    expires: '20 September 2029',
    image: iso9001,
    alt: 'ISO 9001:2015 Quality Management System certificate issued to Avani Ecocare Labs Private Limited, certificate number QMS/4DA6/0926',
  },
  {
    standard: 'ISO 14001:2015',
    system: 'Environmental Management System',
    number: 'EMS/027C/0926',
    issued: '21 September 2026',
    expires: '20 September 2029',
    image: iso14001,
    alt: 'ISO 14001:2015 Environmental Management System certificate issued to Avani Ecocare Labs Private Limited, certificate number EMS/027C/0926',
  },
  {
    standard: 'ISO 45001:2018',
    system: 'Occupational Health & Safety Management System',
    number: 'OHSMS/2ACB/0926',
    issued: '21 September 2026',
    expires: '20 September 2029',
    image: iso45001,
    alt: 'ISO 45001:2018 Occupational Health and Safety Management System certificate issued to Avani Ecocare Labs Private Limited, certificate number OHSMS/2ACB/0926',
  },
];
