import { QueryRequest } from '@nara-way/accent';
import { CitizenSession } from '../../api-model';


class CitizenSessionQuery extends QueryRequest<CitizenSession> {
  citizenSessionId: string;

  constructor(citizenSessionId: string) {
    super(CitizenSession);
    this.citizenSessionId = citizenSessionId;
  }

  static fromDomain(domain: CitizenSessionQuery): CitizenSessionQuery {
    const query = new CitizenSessionQuery(domain.citizenSessionId);

    query.setResponse(domain);
    return query;
  }

  static by(citizenSessionId: string) {
    const query = new CitizenSessionQuery(citizenSessionId);

    return query;
  }

}

export default CitizenSessionQuery;

