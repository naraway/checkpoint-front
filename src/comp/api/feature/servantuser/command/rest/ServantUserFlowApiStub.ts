import { CommandResponse } from '@nara-way/accent';
import { ApiClient } from '@nara-way/prologue';
import { UserState } from '~/comp';
import {
  ChangeServantUserPasswordCommand,
  LoginServantUserCommand,
  LogoutServantUserCommand,
  ModifyServantUserInfoCommand,
  ModifyServantUserStateCommand,
  RegisterServantUserCommand,
} from '../command';


class ServantUserFlowApiStub {
  static _instance: ServantUserFlowApiStub;

  private readonly client = new ApiClient('/api/checkpoint/feature/servantuser');

  static get instance() {
    if (!ServantUserFlowApiStub._instance) {
      ServantUserFlowApiStub._instance = new ServantUserFlowApiStub();
    }
    return ServantUserFlowApiStub._instance;
  }

  async registerServantUser(loginEmailId: string, password: string, displayName: string, publicServantId: string, officeIds: string[]): Promise<CommandResponse> {
    const command = RegisterServantUserCommand.new(
      loginEmailId,
      password,
      displayName,
      publicServantId,
      officeIds,
    );
    return this.client.postNotNull<CommandResponse>(CommandResponse, '/register-servant-user/command', command);
  }

  async modifyServantUserInfo(servantUserId: string, password: string, displayName: string, officeIds: string[]): Promise<CommandResponse> {
    const command = ModifyServantUserInfoCommand.new(
      servantUserId,
      password,
      displayName,
      officeIds,
    );
    return this.client.postNotNull<CommandResponse>(CommandResponse, '/modify-servant-user-info/command', command);
  }

  async modifyServantUserState(servantUserId: string, userState: UserState, reason: string, remark: string): Promise<CommandResponse> {
    const command = ModifyServantUserStateCommand.new(
      servantUserId,
      userState,
      reason,
      remark,
    );
    return this.client.postNotNull<CommandResponse>(CommandResponse, '/modify-servant-user-state/command', command);
  }

  async loginServantUser(loginEmailId: string, password: string, location: string, deviceIp: string): Promise<CommandResponse> {
    const command = LoginServantUserCommand.new(
      loginEmailId,
      password,
      location,
      deviceIp,
    );
    return this.client.postNotNull<CommandResponse>(CommandResponse, '/login-servant-user/command', command);
  }

  async logoutServantUser(loginEmailId: string, location: string, deviceIp: string): Promise<CommandResponse> {
    const command = LogoutServantUserCommand.new(
      loginEmailId,
      location,
      deviceIp,
    );
    return this.client.postNotNull<CommandResponse>(CommandResponse, '/logout-servant-user/command', command);
  }

  async changeServantUserPassword(loginEmailId: string, location: string, deviceIp: string, password: string, newPassword: string): Promise<CommandResponse> {
    const command = ChangeServantUserPasswordCommand.new(
      loginEmailId,
      location,
      deviceIp,
      password,
      newPassword,
    );
    return this.client.postNotNull<CommandResponse>(CommandResponse, '/change-servant-user-password/command', command);
  }

}

export default ServantUserFlowApiStub;

