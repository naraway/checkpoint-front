import { DynamicQueryRequest } from '@nara-way/accent';
import { ServantUser } from '../../api-model';


class ServantUsersDynamicQuery extends DynamicQueryRequest<ServantUser[]> {
  static fromDomain(domain: ServantUsersDynamicQuery): ServantUsersDynamicQuery {
    const query = new ServantUsersDynamicQuery();

    query.setResponse(domain);
    return query;
  }

}

export default ServantUsersDynamicQuery;

