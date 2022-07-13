import { QueryRequest } from '@nara-way/accent';
import { CitizenWeeklyLoginStatus } from '../../api-model';


class CitizenWeeklyLoginStatusQuery extends QueryRequest<CitizenWeeklyLoginStatus> {
  citizenLoginLogId: string;

  constructor(citizenLoginLogId: string) {
    super(CitizenWeeklyLoginStatus);
    this.citizenLoginLogId = citizenLoginLogId;
  }

  static fromDomain(domain: CitizenWeeklyLoginStatusQuery): CitizenWeeklyLoginStatusQuery {
    const query = new CitizenWeeklyLoginStatusQuery(domain.citizenLoginLogId);

    query.setResponse(domain);
    return query;
  }

  static by(citizenLoginLogId: string) {
    const query = new CitizenWeeklyLoginStatusQuery(citizenLoginLogId);

    return query;
  }

}

export default CitizenWeeklyLoginStatusQuery;

