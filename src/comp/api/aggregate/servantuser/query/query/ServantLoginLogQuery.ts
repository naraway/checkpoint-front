import { QueryRequest } from '@nara-way/accent';
import { ServantLoginLog } from '../../api-model';


class ServantLoginLogQuery extends QueryRequest<ServantLoginLog> {
  servantLoginLogId: string;

  constructor(servantLoginLogId: string) {
    super(ServantLoginLog);
    this.servantLoginLogId = servantLoginLogId;
  }

  static fromDomain(domain: ServantLoginLogQuery): ServantLoginLogQuery {
    const query = new ServantLoginLogQuery(domain.servantLoginLogId);

    query.setResponse(domain);
    return query;
  }

  static by(servantLoginLogId: string) {
    const query = new ServantLoginLogQuery(servantLoginLogId);

    return query;
  }

}

export default ServantLoginLogQuery;

