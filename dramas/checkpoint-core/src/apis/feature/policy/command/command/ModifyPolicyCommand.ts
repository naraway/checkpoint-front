import { CommandRequest, NameValueList } from '@nara-way/accent';

export interface ModifyPolicyCommand extends CommandRequest {
  pavilionId?: string;
  nameValues?: NameValueList;
}
