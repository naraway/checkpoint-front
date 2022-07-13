import { DynamicQueryRequest } from '@nara-way/accent';
import { CitizenLoginLog } from '../../api-model';


class CitizenLoginLogsDynamicQuery extends DynamicQueryRequest<CitizenLoginLog[]> {
  static fromDomain(domain: CitizenLoginLogsDynamicQuery): CitizenLoginLogsDynamicQuery {
    const query = new CitizenLoginLogsDynamicQuery();

    query.setResponse(domain);
    return query;
  }

}

export default CitizenLoginLogsDynamicQuery;

