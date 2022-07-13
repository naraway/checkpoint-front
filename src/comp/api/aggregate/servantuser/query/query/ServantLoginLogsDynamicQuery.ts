import { DynamicQueryRequest } from '@nara-way/accent';
import { ServantLoginLog } from '../../api-model';


class ServantLoginLogsDynamicQuery extends DynamicQueryRequest<ServantLoginLog[]> {
  static fromDomain(domain: ServantLoginLogsDynamicQuery): ServantLoginLogsDynamicQuery {
    const query = new ServantLoginLogsDynamicQuery();

    query.setResponse(domain);
    return query;
  }

}

export default ServantLoginLogsDynamicQuery;

