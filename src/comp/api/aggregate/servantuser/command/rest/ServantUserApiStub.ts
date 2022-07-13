import { CommandResponse, NameValueList } from '@nara-way/accent';
import { ApiClient } from '@nara-way/prologue';
import { ServantLoginLogCdo, ServantStateLogCdo, ServantUserCdo } from '../../api-model/sdo';
import { ServantLoginLogCommand, ServantStateLogCommand, ServantUserCommand } from '../command';


class ServantUserApiStub {
  static _instance: ServantUserApiStub;

  private readonly client = new ApiClient('/api/checkpoint/aggregate/servantuser');

  static get instance() {
    if (!ServantUserApiStub._instance) {
      ServantUserApiStub._instance = new ServantUserApiStub();
    }
    return ServantUserApiStub._instance;
  }

  async registerServantLoginLog(servantLoginLogCdo: ServantLoginLogCdo): Promise<CommandResponse> {
    const command = ServantLoginLogCommand.newRegisterServantLoginLogCommand(servantLoginLogCdo);
    return this.executeServantLoginLog(command);
  }

  async registerServantStateLog(servantStateLogCdo: ServantStateLogCdo): Promise<CommandResponse> {
    const command = ServantStateLogCommand.newRegisterServantStateLogCommand(servantStateLogCdo);
    return this.executeServantStateLog(command);
  }

  async registerServantUser(servantUserCdo: ServantUserCdo): Promise<CommandResponse> {
    const command = ServantUserCommand.newRegisterServantUserCommand(servantUserCdo);
    return this.executeServantUser(command);
  }

  async registerServantLoginLogs(servantLoginLogCdos: ServantLoginLogCdo[]): Promise<CommandResponse> {
    const command = ServantLoginLogCommand.newRegisterServantLoginLogCommands(servantLoginLogCdos);
    return this.executeServantLoginLog(command);
  }

  async registerServantStateLogs(servantStateLogCdos: ServantStateLogCdo[]): Promise<CommandResponse> {
    const command = ServantStateLogCommand.newRegisterServantStateLogCommands(servantStateLogCdos);
    return this.executeServantStateLog(command);
  }

  async registerServantUsers(servantUserCdos: ServantUserCdo[]): Promise<CommandResponse> {
    const command = ServantUserCommand.newRegisterServantUserCommands(servantUserCdos);
    return this.executeServantUser(command);
  }

  async modifyServantLoginLog(servantLoginLogId: string, nameValues: NameValueList): Promise<CommandResponse> {
    const command = ServantLoginLogCommand.newModifyServantLoginLogCommand(servantLoginLogId, nameValues);
    return this.executeServantLoginLog(command);
  }

  async modifyServantStateLog(servantStateLogId: string, nameValues: NameValueList): Promise<CommandResponse> {
    const command = ServantStateLogCommand.newModifyServantStateLogCommand(servantStateLogId, nameValues);
    return this.executeServantStateLog(command);
  }

  async modifyServantUser(servantUserId: string, nameValues: NameValueList): Promise<CommandResponse> {
    const command = ServantUserCommand.newModifyServantUserCommand(servantUserId, nameValues);
    return this.executeServantUser(command);
  }

  async removeServantLoginLog(servantLoginLogId: string): Promise<CommandResponse> {
    const command = ServantLoginLogCommand.newRemoveServantLoginLogCommand(servantLoginLogId);
    return this.executeServantLoginLog(command);
  }

  async removeServantStateLog(servantStateLogId: string): Promise<CommandResponse> {
    const command = ServantStateLogCommand.newRemoveServantStateLogCommand(servantStateLogId);
    return this.executeServantStateLog(command);
  }

  async removeServantUser(servantUserId: string): Promise<CommandResponse> {
    const command = ServantUserCommand.newRemoveServantUserCommand(servantUserId);
    return this.executeServantUser(command);
  }

  async executeServantLoginLog(servantLoginLogCommand: ServantLoginLogCommand): Promise<CommandResponse> {
    return this.client.postNotNull<CommandResponse>(CommandResponse, '/servant-login-log/command', servantLoginLogCommand);
  }

  async executeServantStateLog(servantStateLogCommand: ServantStateLogCommand): Promise<CommandResponse> {
    return this.client.postNotNull<CommandResponse>(CommandResponse, '/servant-state-log/command', servantStateLogCommand);
  }

  async executeServantUser(servantUserCommand: ServantUserCommand): Promise<CommandResponse> {
    return this.client.postNotNull<CommandResponse>(CommandResponse, '/servant-user/command', servantUserCommand);
  }

}

export default ServantUserApiStub;

