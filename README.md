## Description

Final project for Typescript N1, this project will use all the concepts learnt through the course.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## DB Schemas

These are the schemas we will follow during the development of the project.

### **Affiliate**

- Personal information [✓]

```ts

enum IdentificationTypes {
  citizenId = 'citizenId',
  foreignId = 'foreignId',
  passport = 'passport',
  identityCard = 'identityCard'
}

enum Gender {
  male = 'male',
  female = 'female',
  other = 'other'
}

enum Status {
  ACTIVE = 'ACTIVE',
  DISABLED = 'DISABLED'
}

interface IPersonalInfo {
  name: string;
  middleName?: string;
  lastNames: string;
  birthdate: Date;
  identificationType: IdentificationTypes;
  id: string;
  phoneNumber?: string;
  cellPhoneNumber: string;
  postalCode: string;
  address: string;
  country: string;
  city: string;
  email: string; // Regex
  gender: Gender;
  status: Status;
  socialStratum: number;
  sisben: boolean;
  requiresCompany: boolean;
}
```

- Invoice [✓]

```ts
enum InvoiceStatus {
  VALID = 'VALID',
  DENIED = 'DENIED',
}

interface Invoice {
  idAffiliate: string;
  creationDate: Date;
  html: string;
  status: InvoiceStatus
}
```

- Risk groups [✓]

```ts
interface RiskGroup {
  name: string;
  appointmentFrecuencyInMonths: string;
  lastAppointment: Date;
  specialist: string[];
}

interface RiskGroupByAffiliate {
  idAffiliate: string;
  riskGroups: RiskGroup[];
}
```

- Medical formulas [✓]

```ts
interface MedicalFormula {
  id: string;
  html: string;
  currentFormula: boolean;
}

interface MedicalFormulaAffiliate {
  idAffiliate: string;
  formulas: MedicalFormula[];
}
```

- Medical appointment [✓]

```ts
interface MedicalAppointment  {
  dateOfAppointment: Date;
  appointmentByRiskGroup: boolean;
  timeOfAppointment: string;
  clinic: string;
  city: string;
  professional: string;
  nameOfMedicOrSpecialist: string;
  requiredAuthorization: boolean;
  givenAuthorization?: boolean;
  paid: boolean;
  active: boolean;
}

interface MedicalAppointmentAffiliate {
  idAffiliate: string;
  medicalAppointments: MedicalAppointment[];
}
```

- Laboral inhability [✓]

```ts
enum LaboralInhabilityStatus {
  ACTIVE = 'ACTIVE',
  EXPIRED = 'EXPIRED'
}

interface LaboralInhability {
  idAffiliate: string;
  description: string;
  expirationDate: Date;
  status: LaboralInhabilityStatus;
}
```

- Medical history [✓]

```ts
enum Professional {
  MEDIC = 'MEDIC',
  SPECIALIST = 'SPECIALIST'
}

interface MedicalHistory {
  dateOfAppointment: Date;
  appointmentByRiskGroup: boolean;
  timeOfAppointment: string;
  clinic: string;
  city: string;
  professional: Professional;
  nameOfMedicOrSpecialist: string;
  description: string;
  idMedicalFormula?: string;
}

interface MedicalHistoryAffiliate {
  idAffiliate: string;
  medicalHistory: MedicalHistory[];
}
```

## **Medic**

## Classes

### **Mongoose operations**

| Interface MongooseOperations | 
| ---------------------------- | 
| find                         | 
| update                       | 
| delete @override             | 
| create                       |

### **Personal information**

| PersonalInformation implements MongooseOperations | 
| ---------------------------- | 
| find                         | 
| findAll @own method          |
| update                       | 
| delete @override             | 
| create                       |

### **Invoice**

| Invoice implements MongooseOperations | 
| ------------------------------------  | 
| find                                  | 
| findAllByAffiliateId @own method      |
| update                                | 
| delete @override change status        | 
| create                                |

### **Risk groups**

| RiskGroups implements MongooseOperations | 
| ------------------------------------  | 
| find                                  | 
| findAllByAffiliateId @own method      |
| update                                | 
| delete @override change frecuency     | 
| create                                |

### **Medical Formulas**

| MedicalFormulas implements MongooseOperations | 
| ------------------------------------  | 
| find                                  | 
| findAllByAffiliateId @own method      |
| update                                | 
| delete @override change status        | 
| create                                |

### **Medical history**

| MedicalHistory implements MongooseOperations | 
| ------------------------------------  | 
| find                                  | 
| findAllByAffiliateId @own method      |
| update                                | 
| delete @override change status        | 
| create                                |

### **Medical appointment**

| MedicalAppointment implements MongooseOperations | 
| ------------------------------------  | 
| find                                  | 
| findAllByAffiliateId @own method      |
| update                                | 
| delete @override change status        | 
| create                                |

### **Laboral inhability**

| LaboraInhability implements MongooseOperations | 
| ------------------------------------  | 
| find                                  | 
| update                                | 
| delete @override change status        | 
| create                                |
