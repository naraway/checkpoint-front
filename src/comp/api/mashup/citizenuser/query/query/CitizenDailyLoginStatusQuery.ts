import { QueryRequest } from '@nara-way/accent';
import { CitizenDailyLoginStatus } from '../../api-model';


class CitizenDailyLoginStatusQuery extends QueryRequest<CitizenDailyLoginStatus> {
  citizenLoginLogId: string;

  constructor(citizenLoginLogId: string) {
    super(CitizenDailyLoginStatus);
    this.citizenLoginLogId = citizenLoginLogId;
  }

  static fromDomain(domain: CitizenDailyLoginStatusQuery): CitizenDailyLoginStatusQuery {
    const query = new CitizenDailyLoginStatusQuery(domain.citizenLoginLogId);

    query.setResponse(domain);
    return query;
  }

  static by(citizenLoginLogId: string) {
    const query = new CitizenDailyLoginStatusQuery(citizenLoginLogId);

    return query;
  }

}

export default CitizenDailyLoginStatusQuery;

