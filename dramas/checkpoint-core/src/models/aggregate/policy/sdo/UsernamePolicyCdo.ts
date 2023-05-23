import { CreationDataObject } from '@nara-way/accent';

export interface UsernamePolicyCdo extends CreationDataObject {
  minimumLength: number;
  maximumLength: number;
  maximumDigitLetterCount: number;
  noSpace: boolean;
  noSpecialCharacters: boolean;
}
