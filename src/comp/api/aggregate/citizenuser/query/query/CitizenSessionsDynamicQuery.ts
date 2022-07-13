import { DynamicQueryRequest } from '@nara-way/accent';
import { CitizenSession } from '../../api-model';


class CitizenSessionsDynamicQuery extends DynamicQueryRequest<CitizenSession[]> {
  static fromDomain(domain: CitizenSessionsDynamicQuery): CitizenSessionsDynamicQuery {
    const query = new CitizenSessionsDynamicQuery();

    query.setResponse(domain);
    return query;
  }

}

export default CitizenSessionsDynamicQuery;

