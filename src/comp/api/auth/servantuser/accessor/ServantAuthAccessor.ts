import { IdName } from '@nara-way/accent';
import { ServantLoginResponse, ServantUser } from '~/comp/api';
import { autobind } from '@nara-way/prologue';
import { ServantAuthStorage } from '../storage';


// deprecated --> use ServantUserEnvoy
class ServantAuthAccessor {
  private static _instance: ServantAuthAccessor;

  static get instance() {
    if (!ServantAuthAccessor._instance) {
      ServantAuthAccessor._instance = new ServantAuthAccessor();
    }
    return ServantAuthAccessor._instance;
  }

  private readonly authStorage: ServantAuthStorage;

  loggedIn: boolean = false;

  constructor(authStorage: ServantAuthStorage = ServantAuthStorage.instance) {
    this.authStorage = authStorage;
    autobind(this);
  }

  get servantUser(): ServantUser {
    return this.authStorage.getServantUser();
  }

  get servantUserName(): string {
    return this.servantUser && this.servantUser.displayName || '';
  }

  get servantUserEmail(): string {
    return this.servantUser && this.servantUser.loginEmailId || '';
  }

  setOfficeServant(officeServant: IdName) {
    this.authStorage.setOfficeServant(officeServant);
  }

  get officeIds(): string[] {
    return this.authStorage.getOfficeIds() || [];
  }

  /* authentication ------------------------------------------------------------------------------------------------- */

  isLogin(): boolean {
    return this.authStorage.isLogin();
  }

  // TODO: logout api
  logout(): void {
    this.clear();
  }

  async login(loginEmailId: string, password: string): Promise<ServantLoginResponse> {
    if (this.isLogin()) {
      await this.logout();
    }

    return this.authStorage.login(loginEmailId, password);
  }

  async refresh(): Promise<ServantLoginResponse> {
    if (!this.isLogin()) {
      throw new Error('refresh can\'t be invoked when not logged-in');
    }
    return this.authStorage.refresh();
  }

  clear() {
    this.authStorage.clear();
    this.loggedIn = false;
  }

  loadPrevLoginState() {
    this.loggedIn = this.authStorage.isLogin();
  }
}

export default ServantAuthAccessor;
