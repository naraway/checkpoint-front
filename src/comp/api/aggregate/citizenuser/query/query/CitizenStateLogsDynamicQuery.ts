import { DynamicQueryRequest } from '@nara-way/accent';
import { CitizenStateLog } from '../../api-model';


class CitizenStateLogsDynamicQuery extends DynamicQueryRequest<CitizenStateLog[]> {
  static fromDomain(domain: CitizenStateLogsDynamicQuery): CitizenStateLogsDynamicQuery {
    const query = new CitizenStateLogsDynamicQuery();

    query.setResponse(domain);
    return query;
  }

}

export default CitizenStateLogsDynamicQuery;

