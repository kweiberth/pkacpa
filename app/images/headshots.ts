import FrankJr from '@/app/images/headshot-employee-frank-jr.jpg';
import Gary from '@/app/images/headshot-employee-gary.jpg';
import FrankIII from '@/app/images/headshot-employee-frank-iii.jpg';
import John from '@/app/images/headshot-employee-john.jpg';
import Lisa from '@/app/images/headshot-employee-lisa.jpg';
import Denise from '@/app/images/headshot-employee-denise.jpg';
import Lindsay from '@/app/images/headshot-employee-lindsay.jpg';
import Matt from '@/app/images/headshot-employee-matt.jpg';
import { Employee } from '@/utils/constants';

const headshots = {
  [Employee.FrankJr]: FrankJr,
  [Employee.Gary]: Gary,
  [Employee.FrankIII]: FrankIII,
  [Employee.John]: John,
  [Employee.Lisa]: Lisa,
  [Employee.Denise]: Denise,
  [Employee.Lindsay]: Lindsay,
  [Employee.Matt]: Matt,
} as const;

export default headshots;

export type EmployeeHeadshot = (typeof headshots)[keyof typeof headshots];
