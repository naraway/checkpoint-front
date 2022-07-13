import { DynamicQueryRequest } from '@nara-way/accent';
import { CitizenLoginLog } from '../../api-model';


class CitizenLoginLogDynamicQuery extends DynamicQueryRequest<CitizenLoginLog> {
  static fromDomain(domain: CitizenLoginLogDynamicQuery): CitizenLoginLogDynamicQuery {
    const query = new CitizenLoginLogDynamicQuery();

    query.setResponse(domain);
    return query;
  }

}

export default CitizenLoginLogDynamicQuery;

