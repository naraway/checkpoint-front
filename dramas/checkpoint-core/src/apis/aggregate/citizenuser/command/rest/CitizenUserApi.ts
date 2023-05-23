import { CommandResponse, FirstParameter, NameValueList } from '@nara-way/accent';
import axios from 'axios';
import {
  CitizenLoginLog,
  CitizenLoginLogCdo,
  CitizenSession,
  CitizenSessionCdo,
  CitizenStateLog,
  CitizenStateLogCdo,
  CitizenUser,
  CitizenUserCdo,
  PasswordStateLog,
  PasswordStateLogCdo,
} from '~/models';
import {
  CitizenLoginLogCommand,
  CitizenSessionCommand,
  CitizenStateLogCommand,
  CitizenUserCommand,
  PasswordStateLogCommand,
} from '../command';

const url = (path: string) => `/api/checkpoint/aggregate/citizenuser${path}`;

// CitizenLoginLog

const registerCitizenLoginLog = (variables: { citizenLoginLogCdo: CitizenLoginLogCdo | CitizenLoginLogCdo[] }) => {
  const command = <CitizenLoginLogCommand>{};
  if (Array.isArray(variables.citizenLoginLogCdo)) {
    Object.assign(command, {
      citizenLoginLogCdos: variables.citizenLoginLogCdo,
      multiCdo: true,
    });
  } else {
    Object.assign(command, {
      citizenLoginLogCdo: variables.citizenLoginLogCdo,
      multiCdo: false,
    });
  }
  return axios.post<CommandResponse>(url('/citizen-login-log/remove/command'), command);
};

const modifyCitizenLoginLog = <T = CitizenLoginLog>(variables: {
  citizenLoginLogId: string;
  nameValues: NameValueList<T>;
}) => {
  const command = <CitizenLoginLogCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/citizen-login-log/modify/command'), command);
};

const removeCitizenLoginLog = (variables: { citizenLoginLogId: string }) => {
  const command = <CitizenLoginLogCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/citizen-login-log/remove/command'), command);
};

// CitizenSession

const registerCitizenSession = (variables: { citizenSessionCdo: CitizenSessionCdo | CitizenSessionCdo[] }) => {
  const command = <CitizenSessionCommand>{};
  if (Array.isArray(variables.citizenSessionCdo)) {
    Object.assign(command, {
      citizenSessionCdos: variables.citizenSessionCdo,
      multiCdo: true,
    });
  } else {
    Object.assign(command, {
      citizenSessionCdo: variables.citizenSessionCdo,
      multiCdo: false,
    });
  }
  return axios.post<CommandResponse>(url('/citizen-session/register/command'), command);
};

const modifyCitizenSession = <T = CitizenSession>(variables: {
  citizenSessionId: string;
  nameValues: NameValueList<T>;
}) => {
  const command = <CitizenSessionCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/citizen-session/modify/command'), command);
};

const removeCitizenSession = (variables: { citizenSessionId: string }) => {
  const command = <CitizenSessionCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/citizen-session/remove/command'), command);
};

// CitizenStateLog

const registerCitizenStateLog = (variables: { citizenStateLogCdo: CitizenStateLogCdo | CitizenStateLogCdo[] }) => {
  const command = <CitizenStateLogCommand>{};
  if (Array.isArray(variables.citizenStateLogCdo)) {
    Object.assign(command, { citizenStateLogCdos: variables.citizenStateLogCdo, multiCdo: true });
  } else {
    Object.assign(command, { citizenStateLogCdo: variables.citizenStateLogCdo, multiCdo: false });
  }
  return axios.post<CommandResponse>(url('/citizen-state-log/register/command'), command);
};

const modifyCitizenStateLog = <T = CitizenStateLog>(variables: {
  citizenStateLogId: string;
  nameValues: NameValueList<T>;
}) => {
  const command = <CitizenStateLogCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/citizen-state-log/modify/command'), command);
};

const removeCitizenStateLog = (variables: { citizenStateLogId: string }) => {
  const command = <CitizenStateLogCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/citizen-state-log/remove/command'), command);
};

// CitizenUser

const registerCitizenUser = (variables: { citizenUserCdo: CitizenUserCdo | CitizenUserCdo[] }) => {
  const command = <CitizenUserCommand>{};
  if (Array.isArray(variables.citizenUserCdo)) {
    Object.assign(command, { citizenUserCdos: variables.citizenUserCdo, multiCdo: true });
  } else {
    Object.assign(command, { citizenUserCdo: variables.citizenUserCdo, multiCdo: false });
  }
  return axios.post<CommandResponse>(url('/citizen-user/register/command'), command);
};

const modifyCitizenUser = <T = CitizenUser>(variables: { citizenUserId: string; nameValues: NameValueList<T> }) => {
  const command = <CitizenUserCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/citizen-user/modify/command'), command);
};

const removeCitizenUser = (variables: { citizenUserId: string }) => {
  const command = <CitizenUserCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/citizen-user/remove/command'), command);
};

// PasswordStateLog

const registerPasswordStateLog = (variables: { passwordStateLogCdo: PasswordStateLogCdo | PasswordStateLogCdo[] }) => {
  const command = <PasswordStateLogCommand>{};
  if (Array.isArray(variables.passwordStateLogCdo)) {
    Object.assign(command, { passwordStateLogCdos: variables.passwordStateLogCdo, multiCdo: true });
  } else {
    Object.assign(command, { passwordStateLogCdo: variables.passwordStateLogCdo, multiCdo: false });
  }
  return axios.post<CommandResponse>(url('/password-state-log/register/command'), command);
};

const modifyPasswordStateLog = <T = PasswordStateLog>(variables: {
  passwordStateLogId: string;
  nameValues: NameValueList<T>;
}) => {
  const command = <PasswordStateLogCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/password-state-log/modify/command'), command);
};

const removePasswordStateLog = (variables: { passwordStateLogId: string }) => {
  const command = <PasswordStateLogCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/password-state-log/remove/command'), command);
};

export default {
  registerCitizenLoginLog,
  modifyCitizenLoginLog,
  removeCitizenLoginLog,
  registerCitizenSession,
  modifyCitizenSession,
  removeCitizenSession,
  registerCitizenStateLog,
  modifyCitizenStateLog,
  removeCitizenStateLog,
  registerCitizenUser,
  modifyCitizenUser,
  removeCitizenUser,
  registerPasswordStateLog,
  modifyPasswordStateLog,
  removePasswordStateLog,
};
