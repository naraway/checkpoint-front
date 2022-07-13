import { DomainEntity, NameValueList } from '@nara-way/accent';


class ServantUser extends DomainEntity {
  loginEmailId: string;
  password: string;
  displayName: string;
  publicServantId: string;
  officeIds: string[] = [];
  active: boolean;

  constructor(loginEmailId: string, password: string, displayName: string, publicServantId: string, active: boolean) {
    super();
    this.loginEmailId = loginEmailId;
    this.password = password;
    this.displayName = displayName;
    this.publicServantId = publicServantId;
    this.active = active;
  }

  static fromDomain(domain: ServantUser): ServantUser {
    const servantUser = new ServantUser(
      domain.loginEmailId,
      domain.password,
      domain.displayName,
      domain.publicServantId,
      domain.active,
    );

    servantUser.setDomainEntity(domain);
    servantUser.officeIds = domain.officeIds ? domain.officeIds : [];
    return servantUser;
  }

  static fromDomains(domains: ServantUser[]): ServantUser[] {
    return domains.map(domain => this.fromDomain(domain));
  }

  static asNameValues(model: ServantUser): NameValueList {
    return NameValueList.fromModel(ServantUser, model, {

    });
  }

  static new(): ServantUser {
    return new ServantUser('', '', '', '', false);
  }

}

export default ServantUser;

