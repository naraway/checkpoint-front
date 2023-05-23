import { ValueObject } from '@nara-way/accent';
import { RuleEvaluationResult } from './RuleEvaluationResult';

export interface PolicyEvaluationResult extends ValueObject {
  userId?: string;
  successful?: boolean;
  ruleEvaluationResults?: RuleEvaluationResult[];
}
