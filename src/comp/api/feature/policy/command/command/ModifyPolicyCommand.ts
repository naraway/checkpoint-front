import { CommandRequest, CommandType, NameValueList } from '@nara-way/accent';


class ModifyPolicyCommand extends CommandRequest {
  pavilionId: string;
  nameValues: NameValueList;

  constructor(pavilionId: string, nameValues: NameValueList) {
    super(CommandType.UserDefined);
    this.pavilionId = pavilionId;
    this.nameValues = nameValues;
  }

  static new(pavilionId: string, nameValues: NameValueList) {
    const command = new ModifyPolicyCommand(
      pavilionId,
      nameValues,
    );

    return command;
  }

}

export default ModifyPolicyCommand;

