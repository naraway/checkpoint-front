import { CommandResponse, NameValueList } from '@nara-way/accent';
import { ApiClient } from '@nara-way/prologue';
import {
  CitizenLoginLogCdo,
  CitizenSessionCdo,
  CitizenStateLogCdo,
  CitizenUserCdo,
  PasswordStateLogCdo,
} from '../../api-model/sdo';
import {
  CitizenLoginLogCommand,
  CitizenSessionCommand,
  CitizenStateLogCommand,
  CitizenUserCommand,
  PasswordStateLogCommand,
} from '../command';


class CitizenUserApiStub {
  static _instance: CitizenUserApiStub;

  private readonly client = new ApiClient('/api/checkpoint/aggregate/citizenuser');

  static get instance() {
    if (!CitizenUserApiStub._instance) {
      CitizenUserApiStub._instance = new CitizenUserApiStub();
    }
    return CitizenUserApiStub._instance;
  }

  async registerCitizenLoginLog(citizenLoginLogCdo: CitizenLoginLogCdo): Promise<CommandResponse> {
    const command = CitizenLoginLogCommand.newRegisterCitizenLoginLogCommand(citizenLoginLogCdo);
    return this.executeCitizenLoginLog(command);
  }

  async registerCitizenSession(citizenSessionCdo: CitizenSessionCdo): Promise<CommandResponse> {
    const command = CitizenSessionCommand.newRegisterCitizenSessionCommand(citizenSessionCdo);
    return this.executeCitizenSession(command);
  }

  async registerCitizenStateLog(citizenStateLogCdo: CitizenStateLogCdo): Promise<CommandResponse> {
    const command = CitizenStateLogCommand.newRegisterCitizenStateLogCommand(citizenStateLogCdo);
    return this.executeCitizenStateLog(command);
  }

  async registerCitizenUser(citizenUserCdo: CitizenUserCdo): Promise<CommandResponse> {
    const command = CitizenUserCommand.newRegisterCitizenUserCommand(citizenUserCdo);
    return this.executeCitizenUser(command);
  }

  async registerPasswordStateLog(passwordStateLogCdo: PasswordStateLogCdo): Promise<CommandResponse> {
    const command = PasswordStateLogCommand.newRegisterPasswordStateLogCommand(passwordStateLogCdo);
    return this.executePasswordStateLog(command);
  }

  async registerCitizenLoginLogs(citizenLoginLogCdos: CitizenLoginLogCdo[]): Promise<CommandResponse> {
    const command = CitizenLoginLogCommand.newRegisterCitizenLoginLogCommands(citizenLoginLogCdos);
    return this.executeCitizenLoginLog(command);
  }

  async registerCitizenSessions(citizenSessionCdos: CitizenSessionCdo[]): Promise<CommandResponse> {
    const command = CitizenSessionCommand.newRegisterCitizenSessionCommands(citizenSessionCdos);
    return this.executeCitizenSession(command);
  }

  async registerCitizenStateLogs(citizenStateLogCdos: CitizenStateLogCdo[]): Promise<CommandResponse> {
    const command = CitizenStateLogCommand.newRegisterCitizenStateLogCommands(citizenStateLogCdos);
    return this.executeCitizenStateLog(command);
  }

  async registerCitizenUsers(citizenUserCdos: CitizenUserCdo[]): Promise<CommandResponse> {
    const command = CitizenUserCommand.newRegisterCitizenUserCommands(citizenUserCdos);
    return this.executeCitizenUser(command);
  }

  async registerPasswordStateLogs(passwordStateLogCdos: PasswordStateLogCdo[]): Promise<CommandResponse> {
    const command = PasswordStateLogCommand.newRegisterPasswordStateLogCommands(passwordStateLogCdos);
    return this.executePasswordStateLog(command);
  }

  async modifyCitizenLoginLog(citizenLoginLogId: string, nameValues: NameValueList): Promise<CommandResponse> {
    const command = CitizenLoginLogCommand.newModifyCitizenLoginLogCommand(citizenLoginLogId, nameValues);
    return this.executeCitizenLoginLog(command);
  }

  async modifyCitizenSession(citizenSessionId: string, nameValues: NameValueList): Promise<CommandResponse> {
    const command = CitizenSessionCommand.newModifyCitizenSessionCommand(citizenSessionId, nameValues);
    return this.executeCitizenSession(command);
  }

  async modifyCitizenStateLog(citizenStateLogId: string, nameValues: NameValueList): Promise<CommandResponse> {
    const command = CitizenStateLogCommand.newModifyCitizenStateLogCommand(citizenStateLogId, nameValues);
    return this.executeCitizenStateLog(command);
  }

  async modifyCitizenUser(citizenUserId: string, nameValues: NameValueList): Promise<CommandResponse> {
    const command = CitizenUserCommand.newModifyCitizenUserCommand(citizenUserId, nameValues);
    return this.executeCitizenUser(command);
  }

  async modifyPasswordStateLog(passwordStateLogId: string, nameValues: NameValueList): Promise<CommandResponse> {
    const command = PasswordStateLogCommand.newModifyPasswordStateLogCommand(passwordStateLogId, nameValues);
    return this.executePasswordStateLog(command);
  }

  async removeCitizenLoginLog(citizenLoginLogId: string): Promise<CommandResponse> {
    const command = CitizenLoginLogCommand.newRemoveCitizenLoginLogCommand(citizenLoginLogId);
    return this.executeCitizenLoginLog(command);
  }

  async removeCitizenSession(citizenSessionId: string): Promise<CommandResponse> {
    const command = CitizenSessionCommand.newRemoveCitizenSessionCommand(citizenSessionId);
    return this.executeCitizenSession(command);
  }

  async removeCitizenStateLog(citizenStateLogId: string): Promise<CommandResponse> {
    const command = CitizenStateLogCommand.newRemoveCitizenStateLogCommand(citizenStateLogId);
    return this.executeCitizenStateLog(command);
  }

  async removeCitizenUser(citizenUserId: string): Promise<CommandResponse> {
    const command = CitizenUserCommand.newRemoveCitizenUserCommand(citizenUserId);
    return this.executeCitizenUser(command);
  }

  async removePasswordStateLog(passwordStateLogId: string): Promise<CommandResponse> {
    const command = PasswordStateLogCommand.newRemovePasswordStateLogCommand(passwordStateLogId);
    return this.executePasswordStateLog(command);
  }

  async executeCitizenLoginLog(citizenLoginLogCommand: CitizenLoginLogCommand): Promise<CommandResponse> {
    return this.client.postNotNull<CommandResponse>(CommandResponse, '/citizen-login-log/command', citizenLoginLogCommand);
  }

  async executeCitizenSession(citizenSessionCommand: CitizenSessionCommand): Promise<CommandResponse> {
    return this.client.postNotNull<CommandResponse>(CommandResponse, '/citizen-session/command', citizenSessionCommand);
  }

  async executeCitizenStateLog(citizenStateLogCommand: CitizenStateLogCommand): Promise<CommandResponse> {
    return this.client.postNotNull<CommandResponse>(CommandResponse, '/citizen-state-log/command', citizenStateLogCommand);
  }

  async executeCitizenUser(citizenUserCommand: CitizenUserCommand): Promise<CommandResponse> {
    return this.client.postNotNull<CommandResponse>(CommandResponse, '/citizen-user/command', citizenUserCommand);
  }

  async executePasswordStateLog(passwordStateLogCommand: PasswordStateLogCommand): Promise<CommandResponse> {
    return this.client.postNotNull<CommandResponse>(CommandResponse, '/password-state-log/command', passwordStateLogCommand);
  }

}

export default CitizenUserApiStub;

