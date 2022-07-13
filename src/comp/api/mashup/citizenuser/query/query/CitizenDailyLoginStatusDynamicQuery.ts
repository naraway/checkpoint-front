import { DynamicQueryRequest } from '@nara-way/accent';
import { CitizenDailyLoginStatus } from '../../api-model';


class CitizenDailyLoginStatusDynamicQuery extends DynamicQueryRequest<CitizenDailyLoginStatus> {
  static fromDomain(domain: CitizenDailyLoginStatusDynamicQuery): CitizenDailyLoginStatusDynamicQuery {
    const query = new CitizenDailyLoginStatusDynamicQuery();

    query.setResponse(domain);
    return query;
  }

}

export default CitizenDailyLoginStatusDynamicQuery;

