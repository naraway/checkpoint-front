import { LoginPolicy, PasswordPolicy } from '~/comp/api';

export type PolicyCommandResultType = { id: string; success: boolean };
export type PolicyQueryResultType = {
  pavilionId?: string;
  authPolicyId?: string;
  loginPolicy?: LoginPolicy;
  passwordPolicy?: PasswordPolicy;
  success: boolean;
};
