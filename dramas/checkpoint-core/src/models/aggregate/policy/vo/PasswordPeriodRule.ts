import { PasswordPeriodUnit } from './PasswordPeriodUnit';

export interface PasswordPeriodRule {
  periodUnit?: keyof typeof PasswordPeriodUnit;
  validPeriod?: number;
}
