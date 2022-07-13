import { CommandResponse, NameValueList } from '@nara-way/accent';
import { ApiClient } from '@nara-way/prologue';
import { AuthPolicyCdo, LoginIdPolicyCdo, LoginPolicyCdo, PasswordPolicyCdo, } from '../../api-model/sdo';
import { AuthPolicyCommand, LoginIdPolicyCommand, LoginPolicyCommand, PasswordPolicyCommand, } from '../command';


class PolicyApiStub {
  static _instance: PolicyApiStub;

  private readonly client = new ApiClient('/api/checkpoint/aggregate/policy');

  static get instance() {
    if (!PolicyApiStub._instance) {
      PolicyApiStub._instance = new PolicyApiStub();
    }
    return PolicyApiStub._instance;
  }

  async registerLoginIdPolicy(loginIdPolicyCdo: LoginIdPolicyCdo): Promise<CommandResponse> {
    const command = LoginIdPolicyCommand.newRegisterLoginIdPolicyCommand(loginIdPolicyCdo);
    return this.executeLoginIdPolicy(command);
  }

  async registerPasswordPolicy(passwordPolicyCdo: PasswordPolicyCdo): Promise<CommandResponse> {
    const command = PasswordPolicyCommand.newRegisterPasswordPolicyCommand(passwordPolicyCdo);
    return this.executePasswordPolicy(command);
  }

  async registerLoginPolicy(loginPolicyCdo: LoginPolicyCdo): Promise<CommandResponse> {
    const command = LoginPolicyCommand.newRegisterLoginPolicyCommand(loginPolicyCdo);
    return this.executeLoginPolicy(command);
  }

  async registerAuthPolicy(authPolicyCdo: AuthPolicyCdo): Promise<CommandResponse> {
    const command = AuthPolicyCommand.newRegisterAuthPolicyCommand(authPolicyCdo);
    return this.executeAuthPolicy(command);
  }

  async registerLoginIdPolicys(loginIdPolicyCdos: LoginIdPolicyCdo[]): Promise<CommandResponse> {
    const command = LoginIdPolicyCommand.newRegisterLoginIdPolicyCommands(loginIdPolicyCdos);
    return this.executeLoginIdPolicy(command);
  }

  async registerPasswordPolicys(passwordPolicyCdos: PasswordPolicyCdo[]): Promise<CommandResponse> {
    const command = PasswordPolicyCommand.newRegisterPasswordPolicyCommands(passwordPolicyCdos);
    return this.executePasswordPolicy(command);
  }

  async registerLoginPolicys(loginPolicyCdos: LoginPolicyCdo[]): Promise<CommandResponse> {
    const command = LoginPolicyCommand.newRegisterLoginPolicyCommands(loginPolicyCdos);
    return this.executeLoginPolicy(command);
  }

  async registerAuthPolicys(authPolicyCdos: AuthPolicyCdo[]): Promise<CommandResponse> {
    const command = AuthPolicyCommand.newRegisterAuthPolicyCommands(authPolicyCdos);
    return this.executeAuthPolicy(command);
  }

  async modifyLoginIdPolicy(loginIdPolicyId: string, nameValues: NameValueList): Promise<CommandResponse> {
    const command = LoginIdPolicyCommand.newModifyLoginIdPolicyCommand(loginIdPolicyId, nameValues);
    return this.executeLoginIdPolicy(command);
  }

  async modifyPasswordPolicy(passwordPolicyId: string, nameValues: NameValueList): Promise<CommandResponse> {
    const command = PasswordPolicyCommand.newModifyPasswordPolicyCommand(passwordPolicyId, nameValues);
    return this.executePasswordPolicy(command);
  }

  async modifyLoginPolicy(loginPolicyId: string, nameValues: NameValueList): Promise<CommandResponse> {
    const command = LoginPolicyCommand.newModifyLoginPolicyCommand(loginPolicyId, nameValues);
    return this.executeLoginPolicy(command);
  }

  async modifyAuthPolicy(authPolicyId: string, nameValues: NameValueList): Promise<CommandResponse> {
    const command = AuthPolicyCommand.newModifyAuthPolicyCommand(authPolicyId, nameValues);
    return this.executeAuthPolicy(command);
  }

  async removeLoginIdPolicy(loginIdPolicyId: string): Promise<CommandResponse> {
    const command = LoginIdPolicyCommand.newRemoveLoginIdPolicyCommand(loginIdPolicyId);
    return this.executeLoginIdPolicy(command);
  }

  async removePasswordPolicy(passwordPolicyId: string): Promise<CommandResponse> {
    const command = PasswordPolicyCommand.newRemovePasswordPolicyCommand(passwordPolicyId);
    return this.executePasswordPolicy(command);
  }

  async removeLoginPolicy(loginPolicyId: string): Promise<CommandResponse> {
    const command = LoginPolicyCommand.newRemoveLoginPolicyCommand(loginPolicyId);
    return this.executeLoginPolicy(command);
  }

  async removeAuthPolicy(authPolicyId: string): Promise<CommandResponse> {
    const command = AuthPolicyCommand.newRemoveAuthPolicyCommand(authPolicyId);
    return this.executeAuthPolicy(command);
  }

  async executeLoginIdPolicy(loginIdPolicyCommand: LoginIdPolicyCommand): Promise<CommandResponse> {
    return this.client.postNotNull<CommandResponse>(CommandResponse, '/login-id-policy/command', loginIdPolicyCommand);
  }

  async executePasswordPolicy(passwordPolicyCommand: PasswordPolicyCommand): Promise<CommandResponse> {
    return this.client.postNotNull<CommandResponse>(CommandResponse, '/password-policy/command', passwordPolicyCommand);
  }

  async executeLoginPolicy(loginPolicyCommand: LoginPolicyCommand): Promise<CommandResponse> {
    return this.client.postNotNull<CommandResponse>(CommandResponse, '/login-policy/command', loginPolicyCommand);
  }

  async executeAuthPolicy(authPolicyCommand: AuthPolicyCommand): Promise<CommandResponse> {
    return this.client.postNotNull<CommandResponse>(CommandResponse, '/auth-policy/command', authPolicyCommand);
  }

}

export default PolicyApiStub;

