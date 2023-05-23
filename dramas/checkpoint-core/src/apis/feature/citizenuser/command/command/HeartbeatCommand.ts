import { CommandRequest } from '@nara-way/accent';

export interface HeartbeatCommand extends CommandRequest {
  citizenSessionId?: string;
}
