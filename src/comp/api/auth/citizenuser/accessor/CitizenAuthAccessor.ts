import { IdName } from '@nara-way/accent';
import { CitizenLoginResponse, CitizenUser } from '~/comp/api';
import { CitizenAuthStorage } from '../storage';
import { autobind } from '@nara-way/prologue';


// deprecated --> use CitizenUserEnvoy
class CitizenAuthAccessor {
  //
  private static _instance: CitizenAuthAccessor;

  static get instance() {
    if (!CitizenAuthAccessor._instance) {
      CitizenAuthAccessor._instance = new CitizenAuthAccessor();
    }
    return CitizenAuthAccessor._instance;
  }

  private readonly authStorage: CitizenAuthStorage;

  loggedIn: boolean = false;

  constructor(authStorage: CitizenAuthStorage = CitizenAuthStorage.instance) {
    //
    this.authStorage = authStorage;
    autobind(this);
  }

  get citizenUser(): CitizenUser {
    //
    return this.authStorage.getCitizenUser();
  }

  get citizenUserName(): string {
    //
    return this.citizenUser && this.citizenUser.displayName || '';
  }

  get citizenUserEmail(): string {
    //
    return this.citizenUser && this.citizenUser.email || '';
  }

  get audience(): IdName | null {
    //
    return this.authStorage.getAudience();
  }

  get actor(): IdName | null {
    //
    return this.authStorage.getActor();
  }

  setAudience(audience: IdName) {
    //
    this.authStorage.setAudience(audience);
  }

  setActor(actor: IdName) {
    //
    this.authStorage.setActor(actor);
  }

  get cineroomIds(): string[] {
    //
    return this.authStorage.getCineroomIds() || [];
  }

  get citizenSessionId(): string {
    //
    return this.authStorage.getCitizenSessionId() || '';
  }

  /* authentication ------------------------------------------------------------------------------------------------- */

  isLogin(): boolean {
    //
    return this.authStorage.isLogin();
  }

  logout(): void {
    //
    this.clear();
  }

  async login(email: string, password: string, pavilionId: string): Promise<CitizenLoginResponse> {
    //
    if (this.isLogin()) {
      this.logout();
    }

    return this.authStorage.login(email, password, pavilionId);
  }

  async refresh(): Promise<CitizenLoginResponse> {
    //
    if (!this.isLogin()) {
      throw new Error('refresh can\'t be invoked when not logged-in');
    }

    return this.authStorage.refresh();
  }

  clear() {
    //
    sessionStorage.clear();
    this.loggedIn = false;
  }

  loadPrevLoginState() {
    //
    this.loggedIn = this.authStorage.isLogin();
  }

  rememberMe(save: boolean = true) {
    if (save) {
      this.authStorage.setRememberMe();
    } else {
      this.authStorage.removeRememberMe();
    }
  }

  isRememberMe() {
    const rememberMe = this.authStorage.getRememberMe();
    return rememberMe && rememberMe.length > 0;
  }

  async autoLogin() {
    return this.authStorage.refresh(this.authStorage.getRememberMe());
  }

}

export default CitizenAuthAccessor;
