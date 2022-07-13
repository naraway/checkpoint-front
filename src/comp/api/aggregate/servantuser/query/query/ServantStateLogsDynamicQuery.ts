import { DynamicQueryRequest } from '@nara-way/accent';
import { ServantStateLog } from '../../api-model';


class ServantStateLogsDynamicQuery extends DynamicQueryRequest<ServantStateLog[]> {
  static fromDomain(domain: ServantStateLogsDynamicQuery): ServantStateLogsDynamicQuery {
    const query = new ServantStateLogsDynamicQuery();

    query.setResponse(domain);
    return query;
  }

}

export default ServantStateLogsDynamicQuery;

