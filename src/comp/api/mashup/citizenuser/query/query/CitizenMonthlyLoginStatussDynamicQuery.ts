import { DynamicQueryRequest } from '@nara-way/accent';
import { CitizenMonthlyLoginStatus } from '../../api-model';


class CitizenMonthlyLoginStatussDynamicQuery extends DynamicQueryRequest<CitizenMonthlyLoginStatus[]> {
  static fromDomain(domain: CitizenMonthlyLoginStatussDynamicQuery): CitizenMonthlyLoginStatussDynamicQuery {
    const query = new CitizenMonthlyLoginStatussDynamicQuery();

    query.setResponse(domain);
    return query;
  }

}

export default CitizenMonthlyLoginStatussDynamicQuery;

