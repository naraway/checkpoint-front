import { CommandResponse, FirstParameter, NameValueList } from '@nara-way/accent';
import axios from 'axios';
import { PasswordLetterRule, PasswordPeriodRule, PasswordSimilarityRule } from '~/models';
import { ModifyPolicyCommand, RegisterPolicyCommand } from '../command';

const url = (path: string) => `/api/checkpoint/feature/policy${path}`;

const registerPolicy = (variables: {
  pavilionId: string;
  loginRetryCount?: number;
  noneLoginPeriod?: number;
  sessionTimeoutMinutes?: number;
  passwordLetterRule?: PasswordLetterRule;
  passwordSimilarityRule?: PasswordSimilarityRule;
  passwordPeriodRule?: PasswordPeriodRule;
}) => {
  const command = <RegisterPolicyCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/register-policy/command'), command);
};

const modifyPolicy = (variables: { pavilionId: string; nameValues: NameValueList }) => {
  const command = <ModifyPolicyCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/modify-policy/command'), command);
};

export default {
  registerPolicy,
  modifyPolicy,
};
