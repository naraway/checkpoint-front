import { QueryRequest } from '@nara-way/accent';
import { CitizenUser } from '../../api-model';


class CitizenUserQuery extends QueryRequest<CitizenUser> {
  citizenUserId: string;

  constructor(citizenUserId: string) {
    super(CitizenUser);
    this.citizenUserId = citizenUserId;
  }

  static fromDomain(domain: CitizenUserQuery): CitizenUserQuery {
    const query = new CitizenUserQuery(domain.citizenUserId);

    query.setResponse(domain);
    return query;
  }

  static by(citizenUserId: string) {
    const query = new CitizenUserQuery(citizenUserId);

    return query;
  }

}

export default CitizenUserQuery;

