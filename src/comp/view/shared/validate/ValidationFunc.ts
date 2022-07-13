export function pwdValidation(pw: string): { pass: boolean; reason: PwdInvalidReason; defaultMessage: string } {

  const num = pw.search(/[0-9]/g);
  const engLower = pw.search(/[a-z]/g);
  const engUpper = pw.search(/[A-Z]/g);
  const spe = pw.search(/[`_+|{}<>\\\-₩=₩[\]'/.,~()!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

  if (pw.length < 8 || pw.length > 20) {
    return { pass: false, reason: PwdInvalidReason.Length, defaultMessage: 'Password length is 8 ~ 20 letters.' };
  } else if (pw.search(/\s/) !== -1) {
    return { pass: false, reason: PwdInvalidReason.Whitespace, defaultMessage: 'Space is not available in password.' };
  } else if ([ num, engUpper, engLower, spe ].filter(cnt => cnt >= 0).length < 3) {
    return { pass: false, reason: PwdInvalidReason.MixUp, defaultMessage: 'Mix 3 kind among english capital and small letter, digit, special character' };
  } else {
    return { pass: true, reason: PwdInvalidReason.Valid, defaultMessage: 'Valid password.' };
  }

}


export enum PwdInvalidReason {
  Length = 'Length',
  Whitespace = 'Whitespace',
  MixUp = 'MixUp',
  Valid = 'Valid'
}
