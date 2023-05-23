import { ValueObject } from '@nara-way/accent';

export interface RuleEvaluationResult extends ValueObject {
  ruleName?: string;
  successful?: boolean;
  message?: string;
  code?: string;
}
