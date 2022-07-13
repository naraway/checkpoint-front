import { DynamicQueryRequest } from '@nara-way/accent';
import { CitizenDailyLoginStatus } from '../../api-model';


class CitizenDailyLoginStatussDynamicQuery extends DynamicQueryRequest<CitizenDailyLoginStatus[]> {
  static fromDomain(domain: CitizenDailyLoginStatussDynamicQuery): CitizenDailyLoginStatussDynamicQuery {
    const query = new CitizenDailyLoginStatussDynamicQuery();

    query.setResponse(domain);
    return query;
  }

}

export default CitizenDailyLoginStatussDynamicQuery;

