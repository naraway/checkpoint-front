import { QueryRequest } from '@nara-way/accent';
import { ServantUser } from '../../api-model';


class ServantUserQuery extends QueryRequest<ServantUser> {
  servantUserId: string;

  constructor(servantUserId: string) {
    super(ServantUser);
    this.servantUserId = servantUserId;
  }

  static fromDomain(domain: ServantUserQuery): ServantUserQuery {
    const query = new ServantUserQuery(domain.servantUserId);

    query.setResponse(domain);
    return query;
  }

  static by(servantUserId: string) {
    const query = new ServantUserQuery(servantUserId);

    return query;
  }

}

export default ServantUserQuery;

