import { DynamicQueryRequest } from '@nara-way/accent';
import { CitizenUser } from '../../api-model';


class CitizenUserDynamicQuery extends DynamicQueryRequest<CitizenUser> {
  static fromDomain(domain: CitizenUserDynamicQuery): CitizenUserDynamicQuery {
    const query = new CitizenUserDynamicQuery();

    query.setResponse(domain);
    return query;
  }

}

export default CitizenUserDynamicQuery;

