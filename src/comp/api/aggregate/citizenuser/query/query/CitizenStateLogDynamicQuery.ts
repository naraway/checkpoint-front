import { DynamicQueryRequest } from '@nara-way/accent';
import { CitizenStateLog } from '../../api-model';


class CitizenStateLogDynamicQuery extends DynamicQueryRequest<CitizenStateLog> {
  static fromDomain(domain: CitizenStateLogDynamicQuery): CitizenStateLogDynamicQuery {
    const query = new CitizenStateLogDynamicQuery();

    query.setResponse(domain);
    return query;
  }

}

export default CitizenStateLogDynamicQuery;

