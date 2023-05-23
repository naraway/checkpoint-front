import { CommandResponse, FirstParameter, NameValueList } from '@nara-way/accent';
import axios from 'axios';
import {
  AuthPolicy,
  AuthPolicyCdo,
  LoginPolicy,
  LoginPolicyCdo,
  PasswordPolicy,
  PasswordPolicyCdo,
  UsernamePolicy,
  UsernamePolicyCdo,
} from '~/models';
import { AuthPolicyCommand, LoginPolicyCommand, PasswordPolicyCommand, UsernamePolicyCommand } from '../command';

const url = (path: string) => `/api/checkpoint/aggregate/policy${path}`;

// AuthPolicy

const registerAuthPolicy = (variables: { authPolicyCdo: AuthPolicyCdo | AuthPolicyCdo[] }) => {
  const command = <AuthPolicyCommand>{};
  if (Array.isArray(variables.authPolicyCdo)) {
    Object.assign(command, { authPolicyCdos: variables.authPolicyCdo, multiCdo: true });
  } else {
    Object.assign(command, { authPolicyCdo: variables.authPolicyCdo, multiCdo: false });
  }
  return axios.post<CommandResponse>(url('/auth-policy/remove/command'), command);
};

const modifyAuthPolicy = <T = AuthPolicy>(variables: { authPolicyId: string; nameValues: NameValueList<T> }) => {
  const command = <AuthPolicyCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/auth-policy/modify/command'), command);
};

const removeAuthPolicy = (variables: { authPolicyId: string }) => {
  const command = <AuthPolicyCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/auth-policy/remove/command'), command);
};

// LoginPolicy

const registerLoginPolicy = (variables: { loginPolicyCdo: LoginPolicyCdo | LoginPolicyCdo[] }) => {
  const command = <LoginPolicyCommand>{};
  if (Array.isArray(variables.loginPolicyCdo)) {
    Object.assign(command, { loginPolicyCdos: variables.loginPolicyCdo, multiCdo: true });
  } else {
    Object.assign(command, { loginPolicyCdo: variables.loginPolicyCdo, multiCdo: false });
  }
  return axios.post<CommandResponse>(url('/login-policy/register/command'), command);
};

const modifyLoginPolicy = <T = LoginPolicy>(variables: { loginPolicyId: string; nameValues: NameValueList<T> }) => {
  const command = <LoginPolicyCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/login-policy/modify/command'), command);
};

const removeLoginPolicy = (variables: { loginPolicyId: string }) => {
  const command = <LoginPolicyCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/login-policy/remove/command'), command);
};

// PasswordPolicy

const registerPasswordPolicy = (variables: { passwordPolicyCdo: PasswordPolicyCdo | PasswordPolicyCdo[] }) => {
  const command = <PasswordPolicyCommand>{};
  if (Array.isArray(variables.passwordPolicyCdo)) {
    Object.assign(command, { passwordPolicyCdos: variables.passwordPolicyCdo, multiCdo: true });
  } else {
    Object.assign(command, { passwordPolicyCdo: variables.passwordPolicyCdo, multiCdo: false });
  }
  return axios.post<CommandResponse>(url('/password-policy/register/command'), command);
};

const modifyPasswordPolicy = <T = PasswordPolicy>(variables: {
  passwordPolicyId: string;
  nameValues: NameValueList<T>;
}) => {
  const command = <PasswordPolicyCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/password-policy/modify/command'), command);
};

const removePasswordPolicy = (variables: { passwordPolicyId: string }) => {
  const command = <PasswordPolicyCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/password-policy/remove/command'), command);
};

// UsernamePolicy

const registerUsernamePolicy = (variables: { usernamePolicyCdo: UsernamePolicyCdo | UsernamePolicyCdo[] }) => {
  const command = <UsernamePolicyCommand>{};
  if (Array.isArray(variables.usernamePolicyCdo)) {
    Object.assign(command, { usernamePolicyCdos: variables.usernamePolicyCdo, multiCdo: true });
  } else {
    Object.assign(command, { usernamePolicyCdo: variables.usernamePolicyCdo, multiCdo: false });
  }
  return axios.post<CommandResponse>(url('/username-policy/register/command'), command);
};

const modifyUsernamePolicy = <T = UsernamePolicy>(variables: {
  usernamePolicyId: string;
  nameValues: NameValueList<T>;
}) => {
  const command = <UsernamePolicyCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/username-policy/modify/command'), command);
};

const removeUsernamePolicy = (variables: { usernamePolicyId: string }) => {
  const command = <UsernamePolicyCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/username-policy/remove/command'), command);
};

export default {
  registerAuthPolicy,
  modifyAuthPolicy,
  removeAuthPolicy,
  registerLoginPolicy,
  modifyLoginPolicy,
  removeLoginPolicy,
  registerPasswordPolicy,
  modifyPasswordPolicy,
  removePasswordPolicy,
  registerUsernamePolicy,
  modifyUsernamePolicy,
  removeUsernamePolicy,
};
