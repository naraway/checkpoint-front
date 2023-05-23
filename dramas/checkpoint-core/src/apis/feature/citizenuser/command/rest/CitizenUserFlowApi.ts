import { CommandResponse, FirstParameter } from '@nara-way/accent';
import axios from 'axios';
import { UserState } from '~/models';
import {
  ChangeCitizenUserPasswordCommand,
  CheckCitizenUserStateCommand,
  HeartbeatCommand,
  LogoutCitizenUserCommand,
  ModifyCitizenUserInfoCommand,
  ModifyCitizenUserStateCommand,
  RegisterCitizenUserCommand,
  ResetCitizenUserPasswordCommand,
  SendMailForCitizenUserPasswordCommand,
} from '../command';

const url = (path: string) => `/api/checkpoint/feature/citizenuser${path}`;

const registerCitizenUser = (variables: {
  pavilionId: string;
  username: string;
  password: string;
  email?: string;
  displayName?: string;
  additionalInformation?: { [key: string]: any };
}) => {
  const command = <RegisterCitizenUserCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/register-citizen-user/command'), command);
};

const modifyCitizenUserInfo = (variables: {
  citizenUserId: string;
  password?: string;
  email?: string;
  displayName?: string;
  additionalInformation?: { [key: string]: any };
}) => {
  const command = <ModifyCitizenUserInfoCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/modify-citizen-user-info/command'), command);
};

const modifyCitizenUserState = (variables: {
  citizenUserId: string;
  userState: keyof typeof UserState;
  reason: string;
  remark?: string;
}) => {
  const command = <ModifyCitizenUserStateCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/modify-citizen-user-state/command'), command);
};

const logoutCitizenUser = (variables: {
  pavilionId: string;
  username: string;
  citizenSessionId?: string;
  location?: string;
  deviceIp?: string;
}) => {
  const command = <LogoutCitizenUserCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/logout-citizen-user/command'), command);
};

const checkCitizenUserState = (variables: { pavilionId: string; username: string }) => {
  const command = <CheckCitizenUserStateCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/check-citizen-user-state/command'), command);
};

const changeCitizenUserPassword = (variables: {
  pavilionId: string;
  username: string;
  location?: string;
  deviceIp?: string;
  password: string;
  newPassword: string;
}) => {
  const command = <ChangeCitizenUserPasswordCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/change-citizen-user-password/command'), command);
};

const resetCitizenUserPassword = (variables: {
  pavilionId: string;
  username: string;
  password: string;
  secretCode: string;
}) => {
  const command = <ResetCitizenUserPasswordCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/reset-citizen-user-password/command'), command);
};

const sendMailForCitizenUserPassword = (variables: { pavilionId: string; username: string; email: string }) => {
  const command = <SendMailForCitizenUserPasswordCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/send-mail-for-citizen-user-password/command'), command);
};

const heartbeat = (variables: { citizenSessionId: string }) => {
  const command = <HeartbeatCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/heartbeat/command'), command);
};

export default {
  registerCitizenUser,
  modifyCitizenUserInfo,
  modifyCitizenUserState,
  logoutCitizenUser,
  checkCitizenUserState,
  changeCitizenUserPassword,
  resetCitizenUserPassword,
  sendMailForCitizenUserPassword,
  heartbeat,
};
