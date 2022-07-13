import React, { useEffect, useState } from 'react';
import { observer, useLocalObservable } from 'mobx-react-lite';
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Link,
  TextField,
  Typography
} from '@mui/material';
import CitizenLoginWelcomeView from './view/CitizenLoginWelcomeView';
import { CitizenUserChangePasswordDialog, CitizenUserResetPasswordDialog } from '~/comp/view';
import { CitizenAuthStorage } from '~/comp/api'
import { DialogNoticeType, dialogUtil } from '@nara-way/prologue';
import { CitizenUserEnvoy } from '../../../envoy';
import { LoginFailedReason } from '../../../envoy/citizenuser/CitizenUserEnvoy';


const CitizenLoginContainer = observer(
  ({
     title,
     description,
     logoPath,
     onSuccess,
     onFailure,
     onClickSignUp,
     pavilionId
   }: {
    title?: string,
    description?: string,
    logoPath?: string,
    onSuccess: () => void,
    onFailure: (reason: string) => void,
    onClickSignUp?: (e: React.MouseEvent) => void,
    pavilionId: string,
  }) => {
    const citizenAuthStorage = useLocalObservable(() => CitizenAuthStorage.instance);
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [changeOpen, setChangeOpen] = useState(false);
    const [resetOpen, setResetOpen] = useState(false);
    const [citizenSessionId, setCitizenSessionId] = useState('');

    const handleChangeEmail = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setInputEmail(event.target.value);
    const handleChangePassword = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setInputPassword(event.target.value);
    const handleClickChangePassword = () => setChangeOpen(true);
    const handleClickCancelChangePassword = () => setChangeOpen(false);
    const handleClickResetPassword = () => setResetOpen(true);
    const handleClickCancelResetPassword = () => setResetOpen(false);
    const handleChangeIsSave = (event: React.ChangeEvent<HTMLInputElement>) => {
    };

    const validateEmail = () => {
      const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      return pattern.test(inputEmail);
    }

    const validate = () => {
      if (!validateEmail()) {
        return false;
      } else return inputPassword.length !== 0;
    }

    const loginAction = async () => {
      if (validate()) {
        CitizenUserEnvoy.login(inputEmail, inputPassword, pavilionId, citizenLoginResponseData => {
          onSuccess();
          setCitizenSessionId(citizenAuthStorage.getCitizenSessionId() || '');
        }, async (loginFailedReason: LoginFailedReason) => {
          alert(loginFailedReason);
          await dialogUtil.alert(loginFailedReason, { title: 'Login', noticeType: DialogNoticeType.Danger });
        });
      } else {
        alert('Invalid email or password.');
        await dialogUtil.alert('Invalid email or password.', { title: 'Login' });
      }
    }

    const handleClickLogout = () => {
      CitizenUserEnvoy.logout(async () => {
        setCitizenSessionId('');
        alert('Logout success');
        await dialogUtil.alert('Logout success', { title: 'Logout', noticeType: DialogNoticeType.Info });
      }, () => {
        alert('Logout success');
      });
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' && validate()) {
        loginAction();
      }
    }

    useEffect(() => {
      console.log('*** citizenSessionId ==> ' + (citizenAuthStorage.getCitizenSessionId() || 'None'));
      CitizenUserEnvoy.startHeartbeat(pavilionId);
    }, [pavilionId, citizenSessionId])

    const renderSubActions = () => {
      return (
        <>
          <Box mt={1} mb={2}>
            <Divider/>
          </Box>

          <Box display="flex" justifyContent="space-between">
            {
              <Link variant="body2" color="textSecondary" onClick={handleClickResetPassword} style={{ cursor: 'pointer' }}>
                Reset password
              </Link>
            }
            {
              <Link variant="body2" color="textSecondary" onClick={handleClickChangePassword} style={{ cursor: 'pointer' }}>
                Change password
              </Link>
            }
            {onClickSignUp && (
              <Link variant="body2" color="textSecondary" onClick={onClickSignUp} style={{ cursor: 'pointer' }}>
                Signup
              </Link>
            )}
          </Box>
        </>
      );
    }

    return (
      <Card>
        {
          citizenAuthStorage.isLogin() ?
            <CardContent>
              <Typography>
                Logged in as <small>{citizenAuthStorage.getCitizenUser().loginId}</small>
                <Button variant={'contained'} fullWidth onClick={handleClickLogout}>Logout</Button>
              </Typography>
            </CardContent>
            :
            <CardContent>
              <CitizenLoginWelcomeView
                title={title}
                description={description}
                logoPath={logoPath}
              />

              <>
                <CitizenUserChangePasswordDialog
                  pavilionId={pavilionId}
                  open={changeOpen}
                  onFail={onFailure}
                  onClose={handleClickCancelChangePassword}
                />
                <CitizenUserResetPasswordDialog
                  open={resetOpen}
                  onFail={onFailure}
                  onClose={handleClickCancelResetPassword}
                />
                <Box mt={3} flexGrow={1}>
                  <FormGroup>
                    <TextField
                      type="email"
                      name="email"
                      label="Email"
                      margin="normal"
                      autoFocus={true}
                      fullWidth={true}
                      onChange={handleChangeEmail}
                      onKeyPress={handleKeyPress}
                    />
                    <TextField
                      type="password"
                      name="password"
                      label="Password"
                      margin="normal"
                      fullWidth={true}
                      onChange={handleChangePassword}
                      onKeyPress={handleKeyPress}
                    />
                  </FormGroup>
                </Box>

                <Box mt={2}>
                  <FormControlLabel
                    label={
                      <Typography variant="body2" color="textSecondary">Remember me</Typography>
                    }
                    control={
                      <Checkbox onChange={handleChangeIsSave}/>
                    }
                  />
                </Box>
                <Box my={2}>
                  <Button
                    size="large"
                    color="primary"
                    fullWidth
                    onClick={loginAction}
                  >
                    Log In
                  </Button>
                </Box>
                {renderSubActions()}
              </>
            </CardContent>
        }
      </Card>
    );
  });

export default CitizenLoginContainer;
