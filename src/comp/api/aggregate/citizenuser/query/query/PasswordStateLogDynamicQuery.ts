import { DynamicQueryRequest } from '@nara-way/accent';
import { PasswordStateLog } from '../../api-model';


class PasswordStateLogDynamicQuery extends DynamicQueryRequest<PasswordStateLog> {
  static fromDomain(domain: PasswordStateLogDynamicQuery): PasswordStateLogDynamicQuery {
    const query = new PasswordStateLogDynamicQuery();

    query.setResponse(domain);
    return query;
  }

}

export default PasswordStateLogDynamicQuery;

