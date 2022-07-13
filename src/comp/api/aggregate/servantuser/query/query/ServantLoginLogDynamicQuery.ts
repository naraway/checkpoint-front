import { DynamicQueryRequest } from '@nara-way/accent';
import { ServantLoginLog } from '../../api-model';


class ServantLoginLogDynamicQuery extends DynamicQueryRequest<ServantLoginLog> {
  static fromDomain(domain: ServantLoginLogDynamicQuery): ServantLoginLogDynamicQuery {
    const query = new ServantLoginLogDynamicQuery();

    query.setResponse(domain);
    return query;
  }

}

export default ServantLoginLogDynamicQuery;

