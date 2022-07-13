import { CommandRequest, CommandType } from '@nara-way/accent';


class HeartbeatCommand extends CommandRequest {
  citizenSessionId: string;

  constructor(citizenSessionId: string) {
    super(CommandType.UserDefined);
    this.citizenSessionId = citizenSessionId;
  }

  static new(citizenSessionId: string) {
    const command = new HeartbeatCommand(
      citizenSessionId,
    );

    return command;
  }

}

export default HeartbeatCommand;

