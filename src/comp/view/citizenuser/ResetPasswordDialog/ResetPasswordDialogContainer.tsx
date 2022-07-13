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
import { CitizenUserStateKeeper } from '~/comp';
import { DialogNoticeType, dialogUtil } from '@nara-way/prologue';

const ResetPasswordDialogContainer = observer(
  ({
     open,
     onClose,
     onSuccess = () => undefined,
     onFail = () => undefined,
   }: {
    open: boolean,
    onClose: () => void,
    onSuccess?: () => void,
    onFail?: (reason: string) => void,
  }) => {
    const citizenUserStateKeeper = useLocalObservable(() => CitizenUserStateKeeper.instance);
    const [loading, setLoading] = useState(false);

    const init = () => citizenUserStateKeeper.clear();
    const startProgressing = () => setLoading(true);
    const endProgressing = () => setLoading(false);
    const closeDialog = () => onClose();

    const handleClickSave = async () => {
      const { pavilionId, loginId, email } = citizenUserStateKeeper;

      if (!await validationCheck()) {
        return false;
      }

      startProgressing();
      citizenUserStateKeeper.sendMailForResetCitizenUserPassword(pavilionId, loginId, email)
        .then(response => {
          onSuccess();
        })
        .catch(response => {
          onFail(response.getFailureMessage().exceptionMessage);
        });

      closeDialog();
      endProgressing();
      return true;
    };

    const validationCheck = async () => {
      const { loginId, email } = citizenUserStateKeeper;

      if (!loginId) {
        await dialogUtil.alert({
          title: 'Login ID',
          message: 'Login ID is required.',
          noticeType: DialogNoticeType.Check,
        });
        return false;
      }
      if (!email) {
        await dialogUtil.alert({
          title: 'E-mail',
          message: 'E-mail is required.',
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

    const handleChangeLoginId = (event: React.ChangeEvent<HTMLInputElement>) => citizenUserStateKeeper.setLoginId(event.target.value);
    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => citizenUserStateKeeper.setEmail(event.target.value);

    return (
      <Dialog open={open} fullWidth maxWidth={'sm'}>
        <DialogTitle>
          <Box pl={1} mt={2}>
            Reset Password
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
                  name="email"
                  required
                  fullWidth
                  label="E-mail"
                  onChange={handleChangeEmail}
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
                  Reset Password
                </Button>
            }
          </Box>
        </DialogActions>
      </Dialog>
    );
  });

export default ResetPasswordDialogContainer;
