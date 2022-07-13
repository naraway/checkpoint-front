import { QueryRequest } from '@nara-way/accent';
import { CitizenLoginLog } from '../../api-model';


class CitizenLoginLogQuery extends QueryRequest<CitizenLoginLog> {
  citizenLoginLogId: string;

  constructor(citizenLoginLogId: string) {
    super(CitizenLoginLog);
    this.citizenLoginLogId = citizenLoginLogId;
  }

  static fromDomain(domain: CitizenLoginLogQuery): CitizenLoginLogQuery {
    const query = new CitizenLoginLogQuery(domain.citizenLoginLogId);

    query.setResponse(domain);
    return query;
  }

  static by(citizenLoginLogId: string) {
    const query = new CitizenLoginLogQuery(citizenLoginLogId);

    return query;
  }

}

export default CitizenLoginLogQuery;

