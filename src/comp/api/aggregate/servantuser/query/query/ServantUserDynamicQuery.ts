import { DynamicQueryRequest } from '@nara-way/accent';
import { ServantUser } from '../../api-model';


class ServantUserDynamicQuery extends DynamicQueryRequest<ServantUser> {
  static fromDomain(domain: ServantUserDynamicQuery): ServantUserDynamicQuery {
    const query = new ServantUserDynamicQuery();

    query.setResponse(domain);
    return query;
  }

}

export default ServantUserDynamicQuery;

