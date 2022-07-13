import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { pwdValidation } from '~/comp/view';
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField
} from '@mui/material';
import { useLocalObservable } from 'mobx-react-lite';
import { ServantUserStateKeeper } from '~/comp/state';
import { DialogNoticeType, dialogUtil } from '@nara-way/prologue';


const ServantUserChangePasswordDialogContainer = observer(
  ({
     open,
     ifFirst = false,
     onClose,
     onSuccess = () => undefined,
     onFail = () => undefined,
     logout,
   }: {
    open: boolean,
    ifFirst?: boolean,
    onClose: () => void,
    onSuccess?: () => void,
    onFail?: () => void,
    logout: () => void,
  }) => {
    const servantUserStateKeeper = useLocalObservable(() => ServantUserStateKeeper.instance);
    const [loading, setLoading] = useState(false);
    const [rePassword, setRePassword] = useState('');
    const [samePassword, setSamePassword] = useState(true);

    const init = () => servantUserStateKeeper.clear();
    const startProgressing = () => setLoading(true);
    const endProgressing = () => setLoading(false);
    const closeDialog = () => onClose();

    const handleClickSave = async () => {
      const { loginId, password, newPassword } = servantUserStateKeeper;

      if (await validationCheck() === false) {
        return false;
      }

      startProgressing();
      servantUserStateKeeper.changeServantUserPassword(loginId, password, newPassword)
        .then(response => {
          onSuccess();
          logout();
        })
        .catch(response => {
          onFail();
        });

      closeDialog();
      endProgressing();
      return true;
    };

    const validationCheck = async () => {
      const { loginId, newPassword, password } = servantUserStateKeeper;

      if (!loginId) {
        await dialogUtil.alert({
          title: 'Login ID',
          message: 'Login ID is required.',
          noticeType: DialogNoticeType.Check,
        });
        return false;
      }

      const pwValid = pwdValidation(password);

      if (!pwValid.pass) {
        await dialogUtil.alert({
          title: 'Password',
          message: pwValid.defaultMessage,
          noticeType: DialogNoticeType.Check,
        });
        return false;
      }

      if (!newPassword) {
        await dialogUtil.alert({
          title: 'Password',
          message: 'Password is required.',
          noticeType: DialogNoticeType.Check,
        });
        return false;
      }

      if (!samePassword) {
        await dialogUtil.alert({
          title: 'Password',
          message: 'Verify password.',
          noticeType: DialogNoticeType.Check,
        });
        return false;
      }

      return true;
    };

    const handleClickCancel = () => {
      init();
      closeDialog();
    };

    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => servantUserStateKeeper.setPassword(event.target.value);

    const handleChangeNewPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newPassword = event.target.value;
      if (rePassword === newPassword) {
        setSamePassword(true);
      } else {
        setSamePassword(false);
      }

      servantUserStateKeeper.setNewPassword(newPassword);
    }

    const handleChangeLoginId = (event: React.ChangeEvent<HTMLInputElement>) => servantUserStateKeeper.setLoginId(event.target.value);

    const onChangeRePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
      const rePassword = event.target.value;
      const { newPassword } = servantUserStateKeeper;

      if (rePassword === newPassword) {
        setSamePassword(true);
        setRePassword(rePassword);
      } else {
        setSamePassword(false);
        setRePassword(rePassword);
      }
    };

    return (
      <Dialog open={open} fullWidth maxWidth={'sm'}>
        <DialogTitle>
          {ifFirst ?
            <Box pl={1} mt={2}>
              Change password (in first login.)
            </Box>
            :
            <Box pl={1} mt={2}>
              Change password
            </Box>
          }
        </DialogTitle>
        <DialogContent>
          <Box p={1}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  name="loginId"
                  required
                  fullWidth
                  label="Login ID"
                  onChange={handleChangeLoginId}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="password"
                  type="password"
                  required
                  fullWidth
                  label="Password"
                  onChange={handleChangePassword}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="newPassword"
                  type="password"
                  required
                  fullWidth
                  label="New password"
                  onChange={handleChangeNewPassword}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="rePassword"
                  type="password"
                  required
                  fullWidth
                  error={!samePassword}
                  helperText={!samePassword && 'Please Check your newPassword.'}
                  label="Verify password"
                  onChange={onChangeRePassword}
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Box mb={2} mt={1} pr={3}>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleClickCancel}
            >
              Cancel
            </Button>
            &nbsp;&nbsp;
            {
              loading ?
                <CircularProgress size={20}/>
                :
                <Button
                  color="primary"
                  variant="contained"
                  onClick={handleClickSave}
                >
                  Save
                </Button>
            }
          </Box>
        </DialogActions>
      </Dialog>
    );
  });

export default ServantUserChangePasswordDialogContainer;
