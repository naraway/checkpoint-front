import { RuleEvaluationResult } from '~/comp';


class PolicyEvaluationResult {
  userId: string;
  successful: boolean;
  ruleEvaluationResults: RuleEvaluationResult[] = [];
  
  constructor(userId: string, successful: boolean) {
    this.userId = userId;
    this.successful = successful;
  }

  static fromDomains(domains: PolicyEvaluationResult[]): PolicyEvaluationResult[] {
    return domains.map(domain => this.fromDomain(domain));
  }

  static fromDomain(domain: PolicyEvaluationResult): PolicyEvaluationResult {
    const policyEvaluationResult = new PolicyEvaluationResult(
      domain.userId,
      domain.successful,
    );
    
    policyEvaluationResult.ruleEvaluationResults = domain.ruleEvaluationResults ? RuleEvaluationResult.fromDomains(domain.ruleEvaluationResults) : [];
    return policyEvaluationResult;
  }

  static new(): PolicyEvaluationResult {
    return new PolicyEvaluationResult('', false);
  }

}

export default PolicyEvaluationResult;

