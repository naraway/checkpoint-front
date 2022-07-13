import { DynamicQueryRequest } from '@nara-way/accent';
import { CitizenWeeklyLoginStatus } from '../../api-model';


class CitizenWeeklyLoginStatusDynamicQuery extends DynamicQueryRequest<CitizenWeeklyLoginStatus> {
  static fromDomain(domain: CitizenWeeklyLoginStatusDynamicQuery): CitizenWeeklyLoginStatusDynamicQuery {
    const query = new CitizenWeeklyLoginStatusDynamicQuery();

    query.setResponse(domain);
    return query;
  }

}

export default CitizenWeeklyLoginStatusDynamicQuery;

