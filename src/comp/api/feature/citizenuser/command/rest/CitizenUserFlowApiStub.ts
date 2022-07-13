import { CommandResponse } from '@nara-way/accent';
import { ApiClient } from '@nara-way/prologue';
import {
  ChangeCitizenUserPasswordCommand,
  CheckCitizenUserStateCommand,
  HeartbeatCommand,
  LoginCitizenUserCommand,
  LogoutCitizenUserCommand,
  ModifyCitizenUserInfoCommand,
  ModifyCitizenUserStateCommand,
  RegisterCitizenUserCommand,
  ResetCitizenUserPasswordCommand,
  SendMailForCitizenUserPasswordCommand,
} from '../command';
import AdditionalInformation from '../../../../aggregate/shared/api-model/AdditionalInformation';
import { UserState } from '../../../../aggregate';


class CitizenUserFlowApiStub {
  static _instance: CitizenUserFlowApiStub;

  private readonly client = new ApiClient('/api/checkpoint/feature/citizenuser');

  static get instance() {
    if (!CitizenUserFlowApiStub._instance) {
      CitizenUserFlowApiStub._instance = new CitizenUserFlowApiStub();
    }
    return CitizenUserFlowApiStub._instance;
  }

  async registerCitizenUser(pavilionId: string, loginId: string, password: string, email: string, displayName: string, additionalInformation: AdditionalInformation): Promise<CommandResponse> {
    const command = RegisterCitizenUserCommand.new(
      pavilionId,
      loginId,
      password,
      email,
      displayName,
      additionalInformation,
    );
    return this.client.postNotNull<CommandResponse>(CommandResponse, '/register-citizen-user/command', command);
  }

  async modifyCitizenUserInfo(citizenUserId: string, password: string, email: string, displayName: string, additionalInformation: AdditionalInformation): Promise<CommandResponse> {
    const command = ModifyCitizenUserInfoCommand.new(
      citizenUserId,
      password,
      email,
      displayName,
      additionalInformation,
    );
    return this.client.postNotNull<CommandResponse>(CommandResponse, '/modify-citizen-user-info/command', command);
  }

  async modifyCitizenUserState(citizenUserId: string, userState: UserState, reason: string, remark: string): Promise<CommandResponse> {
    const command = ModifyCitizenUserStateCommand.new(
      citizenUserId,
      userState,
      reason,
      remark,
    );
    return this.client.postNotNull<CommandResponse>(CommandResponse, '/modify-citizen-user-state/command', command);
  }

  async loginCitizenUser(pavilionId: string, loginId: string, password: string, location: string, deviceIp: string): Promise<CommandResponse> {
    const command = LoginCitizenUserCommand.new(
      pavilionId,
      loginId,
      password,
      location,
      deviceIp,
    );
    return this.client.postNotNull<CommandResponse>(CommandResponse, '/login-citizen-user/command', command);
  }

  async logoutCitizenUser(pavilionId: string, loginId: string, citizenSessionId: string, location: string = '', deviceIp: string = ''): Promise<CommandResponse> {
    const command = LogoutCitizenUserCommand.new(
      pavilionId,
      loginId,
      citizenSessionId,
      location,
      deviceIp,
    );
    return this.client.postNotNull<CommandResponse>(CommandResponse, '/logout-citizen-user/command', command);
  }

  async checkCitizenUserState(pavilionId: string, loginId: string): Promise<CommandResponse> {
    const command = CheckCitizenUserStateCommand.new(
      pavilionId,
      loginId,
    );
    return this.client.postNotNull<CommandResponse>(CommandResponse, '/check-citizen-user-state/command', command);
  }

  async changeCitizenUserPassword(pavilionId: string, loginId: string, location: string, deviceIp: string, password: string, newPassword: string): Promise<CommandResponse> {
    const command = ChangeCitizenUserPasswordCommand.new(
      pavilionId,
      loginId,
      location,
      deviceIp,
      password,
      newPassword,
    );
    return this.client.postNotNull<CommandResponse>(CommandResponse, '/change-citizen-user-password/command', command);
  }

  async resetCitizenUserPassword(pavilionId: string, loginId: string, password: string, secretCode: string): Promise<CommandResponse> {
    const command = ResetCitizenUserPasswordCommand.new(
      pavilionId,
      loginId,
      password,
      secretCode,
    );
    return this.client.postNotNull<CommandResponse>(CommandResponse, '/reset-citizen-user-password/command', command);
  }

  async sendMailForCitizenUserPassword(pavilionId: string, loginId: string, email: string): Promise<CommandResponse> {
    const command = SendMailForCitizenUserPasswordCommand.new(
      pavilionId,
      loginId,
      email,
    );
    return this.client.postNotNull<CommandResponse>(CommandResponse, '/send-mail-for-citizen-user-password/command', command);
  }

  async heartbeat(citizenSessionId: string): Promise<CommandResponse> {
    const command = HeartbeatCommand.new(
      citizenSessionId,
    );
    return this.client.postNotNull<CommandResponse>(CommandResponse, '/heartbeat/command', command);
  }

}

export default CitizenUserFlowApiStub;

