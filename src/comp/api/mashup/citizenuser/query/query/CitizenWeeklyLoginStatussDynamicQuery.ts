import { DynamicQueryRequest } from '@nara-way/accent';
import { CitizenWeeklyLoginStatus } from '../../api-model';


class CitizenWeeklyLoginStatussDynamicQuery extends DynamicQueryRequest<CitizenWeeklyLoginStatus[]> {
  static fromDomain(domain: CitizenWeeklyLoginStatussDynamicQuery): CitizenWeeklyLoginStatussDynamicQuery {
    const query = new CitizenWeeklyLoginStatussDynamicQuery();

    query.setResponse(domain);
    return query;
  }

}

export default CitizenWeeklyLoginStatussDynamicQuery;

