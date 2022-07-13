import { QueryRequest } from '@nara-way/accent';
import { CitizenStateLog } from '../../api-model';


class CitizenStateLogQuery extends QueryRequest<CitizenStateLog> {
  citizenStateLogId: string;

  constructor(citizenStateLogId: string) {
    super(CitizenStateLog);
    this.citizenStateLogId = citizenStateLogId;
  }

  static fromDomain(domain: CitizenStateLogQuery): CitizenStateLogQuery {
    const query = new CitizenStateLogQuery(domain.citizenStateLogId);

    query.setResponse(domain);
    return query;
  }

  static by(citizenStateLogId: string) {
    const query = new CitizenStateLogQuery(citizenStateLogId);

    return query;
  }

}

export default CitizenStateLogQuery;

