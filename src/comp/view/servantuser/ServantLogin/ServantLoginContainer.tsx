import React, { MouseEvent, useEffect, useState } from 'react';
import { observer } from 'mobx-react';
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
import ServantLoginWelcomeView from './view/ServantLoginWelcomeView';
import { ServantUserChangePasswordDialog } from '~/comp/view';
import { InvalidPropsException } from '@nara-way/accent';
import { useLocalObservable } from 'mobx-react-lite';
import { ServantAuthStorage } from '~/comp/api';
import { ServantUserEnvoy } from '../../../envoy';


const ServantLoginContainer = observer(
  ({
     title,
     description,
     logoPath,
     onSuccess,
     onChangePassword,
     onFailure,
     onClickForgotPassword,
     onClickSignUp
   }: {
    title?: string,
    description?: string,
    logoPath?: string,
    onSuccess: () => void,
    onChangePassword: () => void,
    onFailure: () => void,
    onClickForgotPassword?: (e: MouseEvent) => void,
    onClickSignUp?: (e: MouseEvent) => void,
  }) => {
    //
    const servantAuthStorage = useLocalObservable(() => ServantAuthStorage.instance);
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [open, setOpen] = useState(false);
    const [loginServantEmail, setLoginServantEmail] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleChangeEmail = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setInputEmail(event.target.value);
    const handleChangePasswordInner = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setInputPassword(event.target.value);
    const handleKeyPress = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleClickLoginAction();
      }
    }

    const handleClickLoginAction = () => {
      ServantUserEnvoy.login(inputEmail, inputPassword, servantLoginResponseData => {
        onSuccess();
        setLoginServantEmail(servantAuthStorage.getServantUser().loginEmailId);
        setLoggedIn(true);
      }, failureMessage => {
        alert(failureMessage.exceptionMessage);
        onFailure();
      });
    }

    const handleClickLogoutAction = () => {
      ServantUserEnvoy.logout(() => {
        setLoginServantEmail('');
        setLoggedIn(false);
        alert('Loged out');
      }, () => {
        alert('Logout failed');
      })
    }

    useEffect(() => {
      console.log('*** isLogin ==> ' + ServantUserEnvoy.isLogin())
      console.log('*** current servant ==> ' + (servantAuthStorage.getServantUser().loginEmailId));
    }, [loginServantEmail])

    // const onClickLogin = () => invokeLoginAction();
    // const onClickLogout = () => {
    //   ServantUserEnvoy.logout();
    // }

    // const invokeLoginAction = () => {
    //   const { loginAction } = ServantUserEnvoy;
    //   loginAction(inputEmail, inputPassword, { afterHook: onLoginActionAfterHook });
    // }

    // const onLoginActionAfterHook = async (result: ServantTypes.LoginActionResultType): Promise<void> => {
    //   if (!result.valid) {
    //     await dialogUtil.alert('Invalid email or password.', {
    //       noticeType: DialogNoticeType.Danger,
    //     });
    //   } else if (result.success) {
    //     if (result.isFirstLogin) {
    //       setOpen(true);
    //     } else {
    //       onSuccess();
    //     }
    //   } else {
    //     onFailure();
    //   }
    // }

    const handleClickChangePassword = () => setOpen(true);
    const handleClickCancelChangePassword = () => setOpen(false);
    const handleChangeIsSave = (event: React.ChangeEvent<HTMLInputElement>) => {
    };

    const handleClickForgotPasswordInner = (event: MouseEvent) => {
      if (typeof onClickForgotPassword !== 'function') {
        throw new InvalidPropsException('Login.Actions', 'Invalid onClickForgotPassword prop');
      }
      onClickForgotPassword(event);
    };

    const handleClickSignUpInner = (event: MouseEvent) => {
      if (typeof onClickSignUp !== 'function') {
        throw new InvalidPropsException('Login.Actions', 'Invalid onClickSignUp prop');
      }
      onClickSignUp(event);
    };

    const renderSubActions = () => {
      if (typeof onClickForgotPassword !== 'function' && typeof onClickSignUp !== 'function') {
        return null;
      }

      return (
        <>
          <Box mt={1} mb={2}>
            <Divider/>
          </Box>

          <Box display="flex" justifyContent="space-between">
            {onClickForgotPassword && (
              <Link variant="body2" color="textSecondary" onClick={handleClickForgotPasswordInner}
                    style={{ cursor: 'pointer' }}>
                Do you forget password?
              </Link>
            )}

            {onClickSignUp && (
              <Link variant="body2" color="textSecondary" onClick={handleClickSignUpInner} style={{ cursor: 'pointer' }}>
                Sign-up
              </Link>
            )}
          </Box>
        </>
      );
    }

    return (
      <Card>
        {
          loggedIn ?
            <CardContent>
              <Typography>
                Logged in as <small>{loginServantEmail}</small>
                <Button variant={'contained'} fullWidth onClick={handleClickLogoutAction}>Logout</Button>
              </Typography>
            </CardContent>
            :
            <CardContent>
              <ServantLoginWelcomeView
                title={title}
                description={description}
                logoPath={logoPath}
              />
              <>
                <ServantUserChangePasswordDialog
                  logout={ServantUserEnvoy.logout}
                  open={open}
                  ifFirst
                  onSuccess={onChangePassword}
                  onFail={onFailure}
                  onClose={handleClickCancelChangePassword}
                />
                <Box mt={3} flexGrow={1}>
                  <FormGroup>
                    <TextField
                      autoFocus
                      fullWidth
                      type="email"
                      margin="normal"
                      label="Email Address"
                      name="email"
                      //helperText={'TODO'}
                      onChange={handleChangeEmail}
                      onKeyPress={handleKeyPress}
                    />

                    <TextField
                      fullWidth
                      type="password"
                      margin="normal"
                      label="Password"
                      name="password"
                      //helperText={'TODO'}
                      onChange={handleChangePasswordInner}
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
                    onClick={handleClickLoginAction}
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

export default ServantLoginContainer;
