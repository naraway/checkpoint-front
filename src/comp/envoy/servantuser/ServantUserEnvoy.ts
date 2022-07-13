import { ServantAuthStorage, ServantLoginResponseData, ServantUserFlowApiStub } from '~/comp/api';
import { FailureMessage } from '@nara-way/accent';


export async function login(
  loginEmailId: string,
  password: string,
  onSuccessCallback?: (servantLoginResponseData: ServantLoginResponseData) => void,
  onFailureCallback?: (failureMessage: FailureMessage) => void,
) {
  const response = await ServantAuthStorage.instance.login(loginEmailId, password);

  if (response.success) {
    const servantLoginResponseData = response.getQueryResult();
    onSuccessCallback && onSuccessCallback(servantLoginResponseData);
  } else {
    const failureMessage = response.getFailureMessage();
    onFailureCallback && onFailureCallback(failureMessage);
  }
}

export async function logout(
  onSuccessCallback?: () => void,
  onFailureCallback?: () => void
) {
  const servantUser = ServantAuthStorage.instance.getServantUser();
  const loginEmailId = servantUser.loginEmailId;
  const response = await ServantUserFlowApiStub.instance.logoutServantUser(loginEmailId, '', '')
    .catch(() => onFailureCallback && onFailureCallback())
    .finally(() => ServantAuthStorage.instance.clear());

  if (response?.result) {
    onSuccessCallback && onSuccessCallback();
  } else {
    onFailureCallback && onFailureCallback();
  }
}

export function checkPassword() {
  // TODO: check password logic
}

export function resetPassword() {
  // TODO: reset password logic
}

export function isLogin() {
  return ServantAuthStorage.instance.isLogin();
}

function defaultValidate(email: string, password: string): boolean {
  if (!validateEmail(email)) {
    return false;
  }

  return password.length !== 0;
}

function validateEmail(email: string) {
  const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

  if (pattern.test(email)) {
    return true;
  }

  return false;
}
