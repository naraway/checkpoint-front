import { DynamicQueryRequest } from '@nara-way/accent';
import { CitizenUser } from '../../api-model';


class CitizenUsersDynamicQuery extends DynamicQueryRequest<CitizenUser[]> {
  static fromDomain(domain: CitizenUsersDynamicQuery): CitizenUsersDynamicQuery {
    const query = new CitizenUsersDynamicQuery();

    query.setResponse(domain);
    return query;
  }

}

export default CitizenUsersDynamicQuery;

