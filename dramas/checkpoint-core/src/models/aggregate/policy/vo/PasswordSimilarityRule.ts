import { ValueObject } from '@nara-way/accent';

export interface PasswordSimilarityRule extends ValueObject {
  sameLetterCount?: number;
}
