import { DomainEntity } from '@nara-way/accent';

export interface UsernamePolicy extends DomainEntity {
  minimumLength: number;
  maximumLength: number;
  maximumDigitLetterCount: number;
  noSpace: boolean;
  noSpecialCharacters: boolean;
  regularExpression?: string;
  readonly authPolicyId: string;
}

export const UsernamePolicyUpdatable = [
  'minimumLength',
  'maximumLength',
  'maximumDigitLetterCount',
  'noSpace',
  'noSpecialCharacters',
  'regularExpression',
] as const;
