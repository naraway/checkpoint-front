import { ValueObject } from '@nara-way/accent';
import { PasswordRule } from './PasswordRule';

export interface PasswordLetterRule extends ValueObject, PasswordRule {
  minimumCapitalLetterCount?: number;
  minimumDigitLetterCount?: number;
  minimumSpecialLetterCount?: number;
  maximumLetterRepetitionCount?: number;
  minimumLength?: number;
  maximumLength?: number;
  regularExpression?: string;
}
