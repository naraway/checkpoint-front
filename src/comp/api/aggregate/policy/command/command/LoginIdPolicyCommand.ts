import { CommandRequest, CommandType, NameValueList } from '@nara-way/accent';
import { LoginIdPolicyCdo } from '../../api-model/sdo';


class LoginIdPolicyCommand extends CommandRequest {
  loginIdPolicyCdo: LoginIdPolicyCdo | null = null;
  loginIdPolicyCdos: LoginIdPolicyCdo[] = [];
  multiCdo: boolean | null = null;
  loginIdPolicyId: string | null = null;
  nameValues: NameValueList | null = null;

  static newRegisterLoginIdPolicyCommand(loginIdPolicyCdo: LoginIdPolicyCdo): LoginIdPolicyCommand {
    const command = new LoginIdPolicyCommand(CommandType.Register);

    command.loginIdPolicyCdo = loginIdPolicyCdo;
    return command;
  }

  static newRegisterLoginIdPolicyCommands(loginIdPolicyCdos: LoginIdPolicyCdo[]): LoginIdPolicyCommand {
    const command = new LoginIdPolicyCommand(CommandType.Register);

    command.loginIdPolicyCdos = loginIdPolicyCdos;
    command.multiCdo = true;
    return command;
  }

  static newModifyLoginIdPolicyCommand(loginIdPolicyId: string, nameValues: NameValueList): LoginIdPolicyCommand {
    const command = new LoginIdPolicyCommand(CommandType.Modify);

    command.loginIdPolicyId = loginIdPolicyId;
    command.nameValues = nameValues;
    return command;
  }

  static newRemoveLoginIdPolicyCommand(loginIdPolicyId: string): LoginIdPolicyCommand {
    const command = new LoginIdPolicyCommand(CommandType.Remove);

    command.loginIdPolicyId = loginIdPolicyId;
    return command;
  }

}

export default LoginIdPolicyCommand;

