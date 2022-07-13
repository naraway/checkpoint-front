import { QueryRequest } from '@nara-way/accent';
import { PasswordStateLog } from '../../api-model';


class PasswordStateLogQuery extends QueryRequest<PasswordStateLog> {
  passwordStateLogId: string;

  constructor(passwordStateLogId: string) {
    super(PasswordStateLog);
    this.passwordStateLogId = passwordStateLogId;
  }

  static fromDomain(domain: PasswordStateLogQuery): PasswordStateLogQuery {
    const query = new PasswordStateLogQuery(domain.passwordStateLogId);

    query.setResponse(domain);
    return query;
  }

  static by(passwordStateLogId: string) {
    const query = new PasswordStateLogQuery(passwordStateLogId);

    return query;
  }

}

export default PasswordStateLogQuery;

