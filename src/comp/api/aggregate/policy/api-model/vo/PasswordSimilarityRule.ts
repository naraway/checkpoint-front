class PasswordSimilarityRule {
  sameLetterCount: number;
  
  constructor(sameLetterCount: number) {
    this.sameLetterCount = sameLetterCount;
  }

  static fromDomains(domains: PasswordSimilarityRule[]): PasswordSimilarityRule[] {
    return domains.map(domain => this.fromDomain(domain));
  }

  static fromDomain(domain: PasswordSimilarityRule): PasswordSimilarityRule {
    const passwordSimilarityRule = new PasswordSimilarityRule(
      domain.sameLetterCount,
    );
    
    return passwordSimilarityRule;
  }

  static new(): PasswordSimilarityRule {
    return new PasswordSimilarityRule(0);
  }

}

export default PasswordSimilarityRule;

