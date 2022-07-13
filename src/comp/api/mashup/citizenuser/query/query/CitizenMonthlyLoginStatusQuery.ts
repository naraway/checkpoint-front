import { QueryRequest } from '@nara-way/accent';
import { CitizenMonthlyLoginStatus } from '../../api-model';


class CitizenMonthlyLoginStatusQuery extends QueryRequest<CitizenMonthlyLoginStatus> {
  citizenLoginLogId: string;

  constructor(citizenLoginLogId: string) {
    super(CitizenMonthlyLoginStatus);
    this.citizenLoginLogId = citizenLoginLogId;
  }

  static fromDomain(domain: CitizenMonthlyLoginStatusQuery): CitizenMonthlyLoginStatusQuery {
    const query = new CitizenMonthlyLoginStatusQuery(domain.citizenLoginLogId);

    query.setResponse(domain);
    return query;
  }

  static by(citizenLoginLogId: string) {
    const query = new CitizenMonthlyLoginStatusQuery(citizenLoginLogId);

    return query;
  }

}

export default CitizenMonthlyLoginStatusQuery;

