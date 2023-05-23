import { CreationDataObject } from '@nara-way/accent';

export interface LoginPolicyCdo extends CreationDataObject {
  loginRetryCount: number;
  noneLoginPeriod: number;
  sessionTimeoutMinutes: number;
  authPolicyId: string;
}
