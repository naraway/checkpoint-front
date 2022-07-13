import { DynamicQueryRequest } from '@nara-way/accent';
import { ServantStateLog } from '../../api-model';


class ServantStateLogDynamicQuery extends DynamicQueryRequest<ServantStateLog> {
  static fromDomain(domain: ServantStateLogDynamicQuery): ServantStateLogDynamicQuery {
    const query = new ServantStateLogDynamicQuery();

    query.setResponse(domain);
    return query;
  }

}

export default ServantStateLogDynamicQuery;

