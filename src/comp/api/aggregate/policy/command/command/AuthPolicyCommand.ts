import { CommandRequest, CommandType, NameValueList } from '@nara-way/accent';
import { AuthPolicyCdo } from '../../api-model/sdo';


class AuthPolicyCommand extends CommandRequest {
  authPolicyCdo: AuthPolicyCdo | null = null;
  authPolicyCdos: AuthPolicyCdo[] = [];
  multiCdo: boolean | null = null;
  authPolicyId: string | null = null;
  nameValues: NameValueList | null = null;

  static newRegisterAuthPolicyCommand(authPolicyCdo: AuthPolicyCdo): AuthPolicyCommand {
    const command = new AuthPolicyCommand(CommandType.Register);

    command.authPolicyCdo = authPolicyCdo;
    return command;
  }

  static newRegisterAuthPolicyCommands(authPolicyCdos: AuthPolicyCdo[]): AuthPolicyCommand {
    const command = new AuthPolicyCommand(CommandType.Register);

    command.authPolicyCdos = authPolicyCdos;
    command.multiCdo = true;
    return command;
  }

  static newModifyAuthPolicyCommand(authPolicyId: string, nameValues: NameValueList): AuthPolicyCommand {
    const command = new AuthPolicyCommand(CommandType.Modify);

    command.authPolicyId = authPolicyId;
    command.nameValues = nameValues;
    return command;
  }

  static newRemoveAuthPolicyCommand(authPolicyId: string): AuthPolicyCommand {
    const command = new AuthPolicyCommand(CommandType.Remove);

    command.authPolicyId = authPolicyId;
    return command;
  }

}

export default AuthPolicyCommand;

