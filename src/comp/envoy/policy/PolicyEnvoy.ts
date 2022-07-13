import { NameValue, NameValueList, Operator, QueryParam } from '@nara-way/accent';
import {
  AuthPolicy,
  AuthPolicyCdo,
  AuthPolicyDynamicQuery,
  AuthPolicyQuery,
  AuthPolicyQueryApiStub,
  LoginPolicy,
  LoginPolicyCdo,
  LoginPolicyDynamicQuery,
  LoginPolicyQuery,
  LoginPolicyQueryApiStub,
  PasswordLetterRule,
  PasswordPeriodRule,
  PasswordPeriodUnit,
  PasswordPolicy,
  PasswordPolicyCdo,
  PasswordPolicyDynamicQuery,
  PasswordPolicyQuery,
  PasswordPolicyQueryApiStub,
  PasswordSimilarityRule,
  PolicyApiStub,
  RegisterPolicyCommand,
} from '~/comp/api';
import { PolicyEnvoyType } from '..';
import { ModifyPolicyCommand, PolicyFlowApiStub } from '../../api';


export async function findPolicy(pavilionId: string): Promise<PolicyEnvoyType.PolicyQueryResultType> {
  const result: PolicyEnvoyType.PolicyQueryResultType = { pavilionId, success: false };

  try {
    const authPolicyId = (await AuthPolicyQueryApiStub.instance.executeAuthPolicyDynamicQuery(
      AuthPolicyDynamicQuery.oneParam(QueryParam.endParam('pavilionId', Operator.Equal, pavilionId)),
    ))?.id;
    result.authPolicyId = authPolicyId;
    if (!(authPolicyId && authPolicyId.length)) {
      return result; // success: false
    }

    const loginPolicy = await LoginPolicyQueryApiStub.instance.executeLoginPolicyDynamicQuery(
      LoginPolicyDynamicQuery.oneParam(QueryParam.endParam('authPolicyId', Operator.Equal, authPolicyId)),
    );
    if (loginPolicy) {
      result.loginPolicy = loginPolicy;
    }

    const passwordPolicy = await PasswordPolicyQueryApiStub.instance.executePasswordPolicyDynamicQuery(
      PasswordPolicyDynamicQuery.oneParam(QueryParam.endParam('authPolicyId', Operator.Equal, authPolicyId)),
    );
    if (passwordPolicy) {
      result.passwordPolicy = passwordPolicy;
    }
  } catch (error) {
    console.error('Error = ', error);
    return result; // success: false
  }

  result.success = true;

  return result;
}

export async function createPolicy(
  pavilionId: string,
  loginRetryCount: number = 5,
  noneLoginPeriod: number = 365,
  minimumCapitalLetterCount: number = 0,
  minimumDigitLetterCount: number = 0,
  minimumSpecialLetterCount: number = 0,
  maximumLetterRepetitionCount: number = 20,
  minimumLength: number = 0,
  maximumLength: number = 20,
  sameLetterCount: number = 20,
  periodUnit: PasswordPeriodUnit = PasswordPeriodUnit.Month,
  validPeriod: number = 12,
  sessionTimeoutMinute: number = 20,
): Promise<PolicyEnvoyType.PolicyCommandResultType> {
  if (!pavilionId) {
    throw new Error('pavilionId is required!');
  }

  const result: PolicyEnvoyType.PolicyCommandResultType = { id: pavilionId, success: false };
  const passwordLetterRule = PasswordLetterRule.new();
  const passwordSimilarityRule = PasswordSimilarityRule.new();
  const passwordPeriodRule = PasswordPeriodRule.new();

  passwordLetterRule.minimumCapitalLetterCount = minimumCapitalLetterCount;
  passwordLetterRule.minimumDigitLetterCount = minimumDigitLetterCount;
  passwordLetterRule.minimumSpecialLetterCount = minimumSpecialLetterCount;
  passwordLetterRule.maximumLetterRepetitionCount = maximumLetterRepetitionCount;
  passwordLetterRule.minimumLength = minimumLength;
  passwordLetterRule.maximumLength = maximumLength;
  passwordLetterRule.maximumLength = maximumLength;
  passwordSimilarityRule.sameLetterCount = sameLetterCount;
  passwordPeriodRule.validPeriod = validPeriod;
  passwordPeriodRule.periodUnit = periodUnit;

  const authPolicy = await registerAuthPolicy(new AuthPolicyCdo(pavilionId));
  if (!authPolicy.success) {
    throw new Error('AuthPolicy registration failed!');
  }

  const loginPolicy = await registerLoginPolicy(new LoginPolicyCdo(
    loginRetryCount,
    noneLoginPeriod,
    sessionTimeoutMinute,
    authPolicy.id,
  ));
  if (!loginPolicy.success) {
    throw new Error('LoginPolicy registration failed!');
  }

  const passwordPolicy = await registerPasswordPolicy(new PasswordPolicyCdo(
    passwordLetterRule,
    passwordSimilarityRule,
    passwordPeriodRule,
    authPolicy.id,
  ));
  if (!passwordPolicy.success) {
    throw new Error('PasswordPolicy registration failed!');
  }

  result.success = true;

  return result;
}

// << Find >> ===================================================

export async function findAuthPolicy(authPolicyId: string): Promise<AuthPolicy> {
  const foundAuthPolicy = await AuthPolicyQueryApiStub.instance.executeAuthPolicyQuery(AuthPolicyQuery.by(authPolicyId));

  return foundAuthPolicy;
}

export async function findLoginPolicy(loginPolicyId: string): Promise<LoginPolicy> {
  const foundLoginPolicy = await LoginPolicyQueryApiStub.instance.executeLoginPolicyQuery(LoginPolicyQuery.by(loginPolicyId));

  return foundLoginPolicy;
}

export async function findPasswordPolicy(passwordPolicyId: string): Promise<PasswordPolicy> {
  const foundPasswordPolicy = await PasswordPolicyQueryApiStub.instance.executePasswordPolicyQuery(PasswordPolicyQuery.by(passwordPolicyId));

  return foundPasswordPolicy;
}

// << Register >> ===================================================

export async function registerPolicy(registerPolicyCommand: RegisterPolicyCommand): Promise<PolicyEnvoyType.PolicyCommandResultType> {
  const result = { id: '', success: false };
  try {
    const response = await PolicyFlowApiStub.instance.registerPolicy(
      registerPolicyCommand.pavilionId,
      registerPolicyCommand.loginRetryCount,
      registerPolicyCommand.noneLoginPeriod,
      registerPolicyCommand.sessionTimeoutMinutes,
      registerPolicyCommand.passwordLetterRule,
      registerPolicyCommand.passwordSimilarityRule,
      registerPolicyCommand.passwordPeriodRule,
    );

    result.id = response.entityIds[0];
    result.success = true;
  } catch (error) {
    console.error('Error! = ', error);
  }

  return result;
}

export async function modifyPolicy(modifyPolicyCommand: ModifyPolicyCommand): Promise<PolicyEnvoyType.PolicyCommandResultType> {
  const result = { id: '', success: false };
  try {
    const response = await PolicyFlowApiStub.instance.modifyPolicy(
      modifyPolicyCommand.pavilionId,
      modifyPolicyCommand.nameValues,
    );

    result.success = true;
  } catch (error) {
    console.error('Error! = ', error);
  }

  return result;
}

export async function registerAuthPolicy(authPolicyCdo: AuthPolicyCdo): Promise<PolicyEnvoyType.PolicyCommandResultType> {
  const result = { id: '', success: false };

  try {
    const response = await PolicyApiStub.instance.registerAuthPolicy(authPolicyCdo);

    result.id = response.entityIds[0];
    result.success = true;
  } catch (error) {
    console.error('Error! = ', error);
  }

  return result;
}

export async function registerLoginPolicy(loginPolicyCdo: LoginPolicyCdo): Promise<PolicyEnvoyType.PolicyCommandResultType> {
  const result = { id: '', success: false };

  try {
    const response = await PolicyApiStub.instance.registerLoginPolicy(loginPolicyCdo);

    result.id = response.entityIds[0];
    result.success = true;
  } catch (error) {
    console.error('Error! = ', error);
  }

  return result;
}

export async function registerPasswordPolicy(
  passwordPolicyCdo: PasswordPolicyCdo,
): Promise<PolicyEnvoyType.PolicyCommandResultType> {
  const result = { id: '', success: false };

  try {
    const response = await PolicyApiStub.instance.registerPasswordPolicy(passwordPolicyCdo);

    result.id = response.entityIds[0];
    result.success = true;
  } catch (error) {
    console.error('Error! = ', error);
  }

  return result;
}

// << Modify >> ===================================================

export async function modifyAuthPolicy(
  authPolicyId: string,
  key: string,
  value: string,
): Promise<PolicyEnvoyType.PolicyCommandResultType> {
  const result = { id: authPolicyId, success: false };

  try {
    await PolicyApiStub.instance.modifyAuthPolicy(
      authPolicyId,
      new NameValueList(new NameValue(key, value)),
    );

    result.success = true;
  } catch (error) {
    console.error('Error! = ', error);
  }

  return result;
}

export async function modifyLoginPolicy(
  loginPolicyId: string,
  key: string,
  value: string,
): Promise<PolicyEnvoyType.PolicyCommandResultType> {
  const result = { id: loginPolicyId, success: false };

  try {
    await PolicyApiStub.instance.modifyLoginPolicy(
      loginPolicyId,
      new NameValueList(new NameValue(key, value)),
    );

    result.success = true;
  } catch (error) {
    console.error('Error! = ', error);
  }

  return result;
}

export async function modifyPasswordPolicy(
  passwordPolicyId: string,
  key: string,
  value: string,
): Promise<PolicyEnvoyType.PolicyCommandResultType> {
  const result = { id: passwordPolicyId, success: false };

  try {
    await PolicyApiStub.instance.modifyPasswordPolicy(
      passwordPolicyId,
      new NameValueList(new NameValue(key, value)),
    );

    result.success = true;
  } catch (error) {
    console.error('Error! = ', error);
  }

  return result;
}

// << Remove >> ===================================================

export async function removeAuthPolicy(authPolicyId: string): Promise<PolicyEnvoyType.PolicyCommandResultType> {
  const result = { id: authPolicyId, success: false };

  try {
    await PolicyApiStub.instance.removeAuthPolicy(authPolicyId);

    result.success = true;
  } catch (error) {
    console.error('Error! = ', error);
  }

  return result;
}

export async function removeLoginPolicy(loginPolicyId: string): Promise<PolicyEnvoyType.PolicyCommandResultType> {
  const result = { id: loginPolicyId, success: false };

  try {
    await PolicyApiStub.instance.removeLoginPolicy(loginPolicyId);

    result.success = true;
  } catch (error) {
    console.error('Error! = ', error);
  }

  return result;
}

export async function removePasswordPolicy(passwordPolicyId: string): Promise<PolicyEnvoyType.PolicyCommandResultType> {
  const result = { id: passwordPolicyId, success: false };

  try {
    await PolicyApiStub.instance.removePasswordPolicy(passwordPolicyId);

    result.success = true;
  } catch (error) {
    console.error('Error! = ', error);
  }
  return result;
}
