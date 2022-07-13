import { DynamicQueryRequest } from '@nara-way/accent';
import { CitizenSession } from '../../api-model';


class CitizenSessionDynamicQuery extends DynamicQueryRequest<CitizenSession> {
  static fromDomain(domain: CitizenSessionDynamicQuery): CitizenSessionDynamicQuery {
    const query = new CitizenSessionDynamicQuery();

    query.setResponse(domain);
    return query;
  }

}

export default CitizenSessionDynamicQuery;

