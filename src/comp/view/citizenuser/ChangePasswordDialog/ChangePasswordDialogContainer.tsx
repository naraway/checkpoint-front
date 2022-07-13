import React, { useState } from 'react';
import { observer } from 'mobx-react';
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
import { CitizenUserStateKeeper } from '~/comp/state';
import { DialogNoticeType, dialogUtil } from '@nara-way/prologue';
import { pwdValidation } from '~/comp/view';
import { CitizenUserEnvoy } from '~/comp';

interface Props {
  pavilionId: string;
  open: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  onFail?: (reason: string) => void;
}

const ChangePasswordDialogContainer = observer(
  ({
     pavilionId,
     open,
     onClose,
     onSuccess = () => undefined,
     onFail = () => undefined,
   }: {
     pavilionId: string,
     open: boolean,
     onClose: () => void,
     onSuccess?: () => void,
     onFail?: (reason: string) => void,
   }
  ) => {
    const citizenUserStateKeeper = useLocalObservable(() => CitizenUserStateKeeper.instance);
    const [loading, setLoading] = useState(false);
    const [rePassword, setRePassword] = useState('');
    const [samePassword, setSamePassword] = useState(true);

    const init = () => citizenUserStateKeeper.clear();
    const startProgressing = () => setLoading(true);
    const endProgressing = () => setLoading(false);
    const closeDialog = () => onClose();

    const handleAlert = async (response: any) => {
      const msg = response.failureMessage.exceptionMessage.replaceAll('\n', '<br/>');
      alert(msg);
      await dialogUtil.alert({
        title: response.failureMessage.exceptionName,
        message: msg,
        noticeType: DialogNoticeType.Check,
      });
    }

    const handleClickSave = () => {
      const { loginId, password, newPassword } = citizenUserStateKeeper;

      startProgressing();
      CitizenUserEnvoy.changePassword(pavilionId, loginId, password, newPassword, () => {
        alert('Success change password');
        onSuccess();
        closeDialog();
      }, message => {
        alert(message);
      });
      endProgressing();
      return true;
    }

    const handleClickCancel = () => {
      init();
      closeDialog();
    }

    const handleChangeLoginId = (event: React.ChangeEvent<HTMLInputElement>) => citizenUserStateKeeper.setLoginId(event.target.value);
    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => citizenUserStateKeeper.setPassword(event.target.value);

    const handleChangeNewPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newPassword = event.target.value;
      if (rePassword === newPassword) {
        setSamePassword(true);
      } else {
        setSamePassword(false);
      }

      citizenUserStateKeeper.setNewPassword(newPassword);
    }

    const handleChangeRePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
      const rePassword = event.target.value;
      const { newPassword } = citizenUserStateKeeper;

      if (rePassword === newPassword) {
        setSamePassword(true);
        setRePassword(rePassword);
      } else {
        setSamePassword(false);
        setRePassword(rePassword);
      }
    }

    const validationCheck = async () => {
      const { loginId, newPassword, password } = citizenUserStateKeeper;

      if (!loginId) {
        await dialogUtil.alert({
          title: 'ID',
          message: 'Login ID is requried.',
          noticeType: DialogNoticeType.Check,
        });
        return false;
      }

      if (!password) {
        await dialogUtil.alert({
          title: 'Password',
          message: 'Password is required.',
          noticeType: DialogNoticeType.Check,
        });
        return false;
      }

      const pwValid = pwdValidation(newPassword);

      if (!pwValid.pass) {
        await dialogUtil.alert({
          title: 'Password',
          message: pwValid.defaultMessage,
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
    }

    return (
      <Dialog open={open} fullWidth maxWidth={'sm'}>
        <DialogTitle>
          <Box pl={1} mt={2}>
            Change password
          </Box>
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
                  onChange={handleChangeRePassword}
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
                  OK
                </Button>
            }
          </Box>
        </DialogActions>
      </Dialog>
    );
  });

export default ChangePasswordDialogContainer;
