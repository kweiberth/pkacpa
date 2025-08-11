import { StaticImageData } from 'next/image';
import headshots from '@/app/images/headshots';
import { Employee } from './constants';

export enum Skills {
  ACCOUNTING = 'Accounting',
  TAXES = 'Taxes',
  CONSULTING = 'Consulting',
  AUDITS = 'Audits',
  VIRTUAL_CFO = 'Virtual CFO',
  PAYROLL = 'Payroll',
  NON_PROFITS = 'Non-profits',
  QUICKBOOKS = 'QuickBooks',
  BOOKKEEPING = 'Bookkeeping',
}

export interface EmployeeData {
  headshot?: StaticImageData;
  name: string;
  nickname: string;
  title: string;
  email: string;
  bio?: string;
  skills: Skills[];
}

export const employees: Record<Employee, EmployeeData> = {
  [Employee.FrankJr]: {
    headshot: headshots[Employee.FrankJr],
    name: 'Frank J. Palermo, Jr',
    nickname: 'Frank',
    title: 'CPA, Founder',
    email: 'fp@pkacpa.com',
    bio: `Frank earned his B.S. in Accounting from John Carroll University in 1974. With over 43 years of experience in public accounting and banking, he founded this accounting firm in 1983. Frank is a member of the American Institute of CPAs, the Pennsylvania Institute of CPAs, and the National Association of Certified Valuation and Analysis. He has served on the boards of several nonprofit organizations and is a member of the board of directors at S&T Bankcorp, Inc., where he serves as Chairman of the Audit Committee.`,
    skills: [
      Skills.ACCOUNTING,
      Skills.TAXES,
      Skills.CONSULTING,
      Skills.NON_PROFITS,
    ],
  },
  [Employee.Gary]: {
    headshot: headshots[Employee.Gary],
    name: 'Gary A. Kissinger',
    nickname: 'Gary',
    title: 'CPA, Shareholder',
    email: 'gk@pkacpa.com',
    bio: `Gary is a shareholder in Palermo/Kissinger and Associates, P.C. Gary joined the firm after graduating with a B.A. degree in Accounting from Washington & Jefferson College in 1988. He has over 30 years of experience working with local businesses providing tax, accounting, and consulting services. In addition, Gary is in charge of the firm's quality control and each of the firms audit engagements developing a specialty in audits of non-profit organizations and local governments. Gary is also known as "Chip" by family and friends. He resides in Upper St Clair with his wife, Amy, and two sons, AJ and Matthew. Professionally, Gary is a member of the AICPA and PICPA. Gary is presently the Treasurer of the United Way of Washington as well as a member of the Finance Council of Holy Child Church in Bridgeville, PA`,
    skills: [
      Skills.ACCOUNTING,
      Skills.TAXES,
      Skills.CONSULTING,
      Skills.AUDITS,
      Skills.NON_PROFITS,
    ],
  },
  [Employee.FrankIII]: {
    headshot: headshots[Employee.FrankIII],
    name: 'Frank J. Palermo III',
    nickname: 'Frank',
    title: 'CPA, Shareholder',
    email: 'fjp@pkacpa.com',
    bio: `Frank graduated from Allegheny College with a B.A. in Managerial Economics and earned his CPA in 2010. He is skilled in all areas of accounting including audit work, tax preparation and planning, and consulting services. Frank is actively involved with local nonprofits and serves as a consultant to the board of directors of Legacies Alive. In his free time, he enjoys spending time with his family and his dog, Birdie, and playing golf.`,
    skills: [
      Skills.AUDITS,
      Skills.TAXES,
      Skills.ACCOUNTING,
      Skills.VIRTUAL_CFO,
      Skills.NON_PROFITS,
    ],
  },
  [Employee.John]: {
    headshot: headshots[Employee.John],
    name: 'John Palermo',
    nickname: 'John',
    title: 'CPA, Shareholder',
    email: 'jp@pkacpa.com',
    bio: `John holds a B.S. in Accounting from Elon University and has been with the firm since 2011. He earned his CPA in 2017 and has gained experience across all areas of the accounting practice, specializing in business and personal tax services and virtual CFO roles. John serves as VP on the board of Pathways of Southwestern Pennsylvania and recently participated in Pittsburgh's 50 Finest, raising funds to fight cystic fibrosis. He resides in Mt. Lebanon with his wife Leilani and two daughters, Kalea and Myla. In his free time, he enjoys golfing and exploring the mountains.`,
    skills: [
      Skills.TAXES,
      Skills.ACCOUNTING,
      Skills.VIRTUAL_CFO,
      Skills.QUICKBOOKS,
    ],
  },
  [Employee.Lisa]: {
    headshot: headshots[Employee.Lisa],
    name: 'Lisa Vipperman',
    nickname: 'Lisa',
    email: 'lv@pkacpa.com',
    title: 'CPA',
    bio: `Lisa holds a B.A. in Accounting from King University, Tennessee (2002) and a Master's Degree in Accounting and Information Systems from Virginia Tech (2003). She joined the firm in 2010, focusing primarily on audits of nonprofit organizations and governmental entities. Lisa also served as a contracted CFO for a local nonprofit organization for over ten years.`,
    skills: [Skills.AUDITS, Skills.NON_PROFITS, Skills.TAXES],
  },
  [Employee.Denise]: {
    headshot: headshots[Employee.Denise],
    name: 'Denise Roberts',
    nickname: 'Denise',
    email: 'dr@pkacpa.com',
    title: 'Staff accountant',
    bio: `Denise has been with the firm since 1989, serving in various roles. She began in payroll services and has since expanded her expertise to include bookkeeping, tax return processing, and office management. Denise specializes in handling day-to-day business tasks such as bill payments, paycheck processing, and bank account reconciliations, providing these services without the overhead costs of a full-time in-house bookkeeper. In her free time, Denise enjoys outdoor activities with her husband Jim, their two children Alex and Rachel, and their dog Rocko.`,
    skills: [Skills.PAYROLL, Skills.BOOKKEEPING],
  },
  [Employee.Lindsay]: {
    headshot: headshots[Employee.Lindsay],
    name: 'Lindsay Fritz',
    nickname: 'Lindsay',
    email: 'lf@pkacpa.com',
    title: 'Payroll specialist',
    bio: `Lindsay graduated from California University of Pennsylvania in 2006 with a B.S. in Business Administration and joined the firm shortly after. She brings over 12 years of payroll expertise into her role as payroll specialist. Lindsay currently manages payroll for 21 clients and is knowledgeable in payroll tax regulations across most states. Outside of work, she enjoys spending time with her husband, Tim, and their four cats.`,
    skills: [Skills.PAYROLL],
  },
  [Employee.Matt]: {
    headshot: headshots[Employee.Matt],
    name: 'Matt Kissinger',
    nickname: 'Matt',
    email: 'mk@pkacpa.com',
    title: 'Staff accountant',
    skills: [
      Skills.TAXES,
      Skills.VIRTUAL_CFO,
      Skills.BOOKKEEPING,
      Skills.PAYROLL,
      Skills.QUICKBOOKS,
    ],
  },
  [Employee.Jaime]: {
    name: 'Jaime DeCecco',
    nickname: 'Jaime',
    email: 'jd@pkacpa.com',
    title: 'Staff accountant',
    skills: [Skills.BOOKKEEPING, Skills.TAXES],
  },
  [Employee.Emily]: {
    name: 'Emily Knier',
    nickname: 'Emily',
    email: 'ek@pkacpa.com',
    title: 'Staff accountant',
    skills: [Skills.BOOKKEEPING],
  },
  [Employee.Katie]: {
    name: 'Katie Worthy',
    nickname: 'Katie',
    email: 'kw@pkacpa.com',
    title: 'Staff accountant',
    skills: [Skills.BOOKKEEPING],
  },
  [Employee.Sarah]: {
    name: 'Sarah Moore',
    nickname: 'Sarah',
    email: 'sm@pkacpa.com',
    title: 'Staff accountant',
    skills: [Skills.BOOKKEEPING],
  },
  [Employee.Natalee]: {
    name: 'Natalee Burns',
    nickname: 'Natalee',
    email: 'nb@pkacpa.com',
    title: 'Staff accountant',
    skills: [Skills.BOOKKEEPING],
  },
};
