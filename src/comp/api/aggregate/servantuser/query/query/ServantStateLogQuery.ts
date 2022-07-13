import { QueryRequest } from '@nara-way/accent';
import { ServantStateLog } from '../../api-model';


class ServantStateLogQuery extends QueryRequest<ServantStateLog> {
  servantStateLogId: string;

  constructor(servantStateLogId: string) {
    super(ServantStateLog);
    this.servantStateLogId = servantStateLogId;
  }

  static fromDomain(domain: ServantStateLogQuery): ServantStateLogQuery {
    const query = new ServantStateLogQuery(domain.servantStateLogId);

    query.setResponse(domain);
    return query;
  }

  static by(servantStateLogId: string) {
    const query = new ServantStateLogQuery(servantStateLogId);

    return query;
  }

}

export default ServantStateLogQuery;

