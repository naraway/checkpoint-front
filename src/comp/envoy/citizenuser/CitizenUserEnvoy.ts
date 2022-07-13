import { CitizenAuthStorage, CitizenUserFlowApiStub, getGeolocationData, } from '~/comp/api';
import CitizenLoginResponseData from '../../api/auth/citizenuser/api-model/CitizenLoginResponseData';
import { PolicyEnvoy } from '../policy';

export enum LoginFailedReason {
  BadCredential = 'BadCredential',
  Locked = 'Locked',
  Preliminary = 'Preliminary',
  Dormant = 'Dormant',
  Removed = 'Removed',
}

export async function login(
  loginId: string,
  password: string,
  pavilionId: string,
  onSuccessCallback?: (citizenLoginResponseData: CitizenLoginResponseData) => void,
  onFailureCallback?: (loginFailedReason: LoginFailedReason) => void,
) {
  const response = await CitizenAuthStorage.instance.login(loginId, password, pavilionId);

  if (response.success) {
    const citizenLoginResponseData = response.getQueryResult();
    onSuccessCallback && onSuccessCallback(citizenLoginResponseData);
  } else {
    const result = response.policyEvaluationResult;
    onFailureCallback && onFailureCallback(LoginFailedReason[result]);
  }
}

export async function logout(
  onSuccessCallback?: () => void,
  onFailureCallback?: () => void
) {
  const citizenUser = CitizenAuthStorage.instance.getCitizenUser();
  const { pavilionId, loginId } = citizenUser;
  const citizenSessionId = CitizenAuthStorage.instance.getCitizenSessionId() || '';

  const response = await CitizenUserFlowApiStub.instance.logoutCitizenUser(pavilionId, loginId, citizenSessionId)
    .catch(() => onFailureCallback && onFailureCallback())
    .finally(() => CitizenAuthStorage.instance.clear());

  if (response?.result) {
    onSuccessCallback && onSuccessCallback();
  } else {
    onFailureCallback && onFailureCallback();
  }
}

const DEFAULT_HEARTBEAT_MIN = 10;
let heartbeatTimer: any;

export async function startHeartbeat(pavilionId: string) {
  const getHeartbeatMinFromPolicy = async (): Promise<number> => {
    const policy = await PolicyEnvoy.findPolicy(pavilionId);
    const heartbeatMin = policy.loginPolicy?.sessionTimeoutMinutes;
    return heartbeatMin || DEFAULT_HEARTBEAT_MIN;
  }

  if (heartbeatTimer) {
    clearInterval(heartbeatTimer);
  }

  if (CitizenAuthStorage.instance.isLogin()) {
    const heartbeatMin: number = await getHeartbeatMinFromPolicy();
    // console.log('heartbeat minutes: ' + heartbeatMin);
    const citizenSessionId = CitizenAuthStorage.instance.getCitizenSessionId() || '';
    let count = 0;
    heartbeatTimer = setInterval(() => {
      count++
      // console.log('[' + citizenSessionId + '] heartbeat... ' + count);
      CitizenUserFlowApiStub.instance.heartbeat(citizenSessionId);
    }, heartbeatMin * 60 * 1000);
  }
}

export async function changePassword(
  pavilionId: string,
  loginId: string,
  password: string,
  newPassword: string,
  onSuccessCallback: () => void,
  onFailureCallback: (message: string) => void
) {
  const geoData = await getGeolocationData();
  const response = await CitizenUserFlowApiStub.instance.changeCitizenUserPassword(pavilionId, loginId, geoData.location, geoData.deviceIp, password, newPassword)
    .catch(response => {
      const message = response.failureMessage.exceptionMessage.replaceAll('\n', '<br/>');
      onFailureCallback(message);
    });
  onSuccessCallback();
}

export function isLogin() {
  return CitizenAuthStorage.instance.isLogin();
}
