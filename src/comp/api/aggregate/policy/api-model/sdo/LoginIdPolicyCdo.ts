class LoginIdPolicyCdo {
  minimumLength: number;
  maximumLength: number;
  maximumDigitLetterCount: number;
  noSpace: boolean;
  noSpecialCharacters: boolean;
  regularExpression: string;
  
  constructor(minimumLength: number, maximumLength: number, maximumDigitLetterCount: number, noSpace: boolean, noSpecialCharacters: boolean, regularExpression: string) {
    this.minimumLength = minimumLength;
    this.maximumLength = maximumLength;
    this.maximumDigitLetterCount = maximumDigitLetterCount;
    this.noSpace = noSpace;
    this.noSpecialCharacters = noSpecialCharacters;
    this.regularExpression = regularExpression;
  }

  static new(): LoginIdPolicyCdo {
    return new LoginIdPolicyCdo(0, 0, 0, false, false, '');
  }

}

export default LoginIdPolicyCdo;

