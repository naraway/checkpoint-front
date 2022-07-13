import { DynamicQueryRequest } from '@nara-way/accent';
import { CitizenMonthlyLoginStatus } from '../../api-model';


class CitizenMonthlyLoginStatusDynamicQuery extends DynamicQueryRequest<CitizenMonthlyLoginStatus> {
  static fromDomain(domain: CitizenMonthlyLoginStatusDynamicQuery): CitizenMonthlyLoginStatusDynamicQuery {
    const query = new CitizenMonthlyLoginStatusDynamicQuery();

    query.setResponse(domain);
    return query;
  }

}

export default CitizenMonthlyLoginStatusDynamicQuery;

