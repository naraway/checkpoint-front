class PasswordLetterRule {
  minimumCapitalLetterCount: number;
  minimumDigitLetterCount: number;
  minimumSpecialLetterCount: number;
  maximumLetterRepetitionCount: number;
  minimumLength: number;
  maximumLength: number;
  regularExpression: string;
  
  constructor(minimumCapitalLetterCount: number, minimumDigitLetterCount: number, minimumSpecialLetterCount: number, maximumLetterRepetitionCount: number, minimumLength: number, maximumLength: number, regularExpression: string) {
    this.minimumCapitalLetterCount = minimumCapitalLetterCount;
    this.minimumDigitLetterCount = minimumDigitLetterCount;
    this.minimumSpecialLetterCount = minimumSpecialLetterCount;
    this.maximumLetterRepetitionCount = maximumLetterRepetitionCount;
    this.minimumLength = minimumLength;
    this.maximumLength = maximumLength;
    this.regularExpression = regularExpression;
  }

  static fromDomains(domains: PasswordLetterRule[]): PasswordLetterRule[] {
    return domains.map(domain => this.fromDomain(domain));
  }

  static fromDomain(domain: PasswordLetterRule): PasswordLetterRule {
    const passwordLetterRule = new PasswordLetterRule(
      domain.minimumCapitalLetterCount,
      domain.minimumDigitLetterCount,
      domain.minimumSpecialLetterCount,
      domain.maximumLetterRepetitionCount,
      domain.minimumLength,
      domain.maximumLength,
      domain.regularExpression,
    );
    
    return passwordLetterRule;
  }

  static new(): PasswordLetterRule {
    return new PasswordLetterRule(0, 0, 0, 0, 0, 0, '');
  }

}

export default PasswordLetterRule;

