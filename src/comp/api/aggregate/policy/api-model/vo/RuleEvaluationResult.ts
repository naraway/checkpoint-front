class RuleEvaluationResult {
  ruleName: string;
  successful: boolean;
  message: string;
  code: string;
  
  constructor(ruleName: string, successful: boolean, message: string, code: string) {
    this.ruleName = ruleName;
    this.successful = successful;
    this.message = message;
    this.code = code;
  }

  static fromDomains(domains: RuleEvaluationResult[]): RuleEvaluationResult[] {
    return domains.map(domain => this.fromDomain(domain));
  }

  static fromDomain(domain: RuleEvaluationResult): RuleEvaluationResult {
    const ruleEvaluationResult = new RuleEvaluationResult(
      domain.ruleName,
      domain.successful,
      domain.message,
      domain.code,
    );
    
    return ruleEvaluationResult;
  }

  static new(): RuleEvaluationResult {
    return new RuleEvaluationResult('', false, '', '');
  }

}

export default RuleEvaluationResult;

