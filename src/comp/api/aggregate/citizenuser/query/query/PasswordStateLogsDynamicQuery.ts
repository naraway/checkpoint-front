import { DynamicQueryRequest } from '@nara-way/accent';
import { PasswordStateLog } from '../../api-model';


class PasswordStateLogsDynamicQuery extends DynamicQueryRequest<PasswordStateLog[]> {
  static fromDomain(domain: PasswordStateLogsDynamicQuery): PasswordStateLogsDynamicQuery {
    const query = new PasswordStateLogsDynamicQuery();

    query.setResponse(domain);
    return query;
  }

}

export default PasswordStateLogsDynamicQuery;

