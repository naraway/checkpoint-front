import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import {
  Box,
  Button,
  Card,
  CardContent,
  FormGroup,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography
} from '@mui/material';
import { PolicyEnvoy } from '../../../envoy';
import {
  LoginPolicy,
  ModifyPolicyCommand,
  PasswordLetterRule,
  PasswordPeriodRule,
  PasswordPeriodUnit,
  PasswordPolicy,
  PasswordSimilarityRule,
  RegisterPolicyCommand
} from '~/comp/api';
import { NameValue, NameValueList } from '@nara-way/accent';


const AuthPolicyFormContainer = observer(
  ({
     pavilionId,
   }: {
    pavilionId: string,
  }) => {
    const [authPolicyId, setAuthPolicyId] = useState('');
    const [loginRetryCount, setLoginRetryCount] = useState(0);
    const [noneLoginPeriod, setNoneLoginPeriod] = useState(0);
    const [sessionTimeoutMinutes, setSessionTimeoutMinutes] = useState(0);
    const [minimumCapitalLetterCount, setMinimumCapitalLetterCount] = useState(0);
    const [minimumDigitLetterCount, setMinimumDigitLetterCount] = useState(0);
    const [minimumSpecialLetterCount, setMinimumSpecialLetterCount] = useState(0);
    const [maximumLetterRepetitionCount, setMaximumLetterRepetitionCount] = useState(0);
    const [minimumLength, setMinimumLength] = useState(0);
    const [maximumLength, setMaximumLength] = useState(0);
    const [sameLetterCount, setSameLetterCount] = useState(0);
    const [periodUnit, setPeriodUnit] = useState('Day');
    const [validPeriod, setValidPeriod] = useState(0);

    const handleChangeLoginRetryCount = (event: React.ChangeEvent<HTMLInputElement>) => setLoginRetryCount(parseInt(event.target.value));
    const handleChangeNoneLoginPeriod = (event: React.ChangeEvent<HTMLInputElement>) => setNoneLoginPeriod(parseInt(event.target.value));
    const handleChangeSessionTimeoutMinutes = (event: React.ChangeEvent<HTMLInputElement>) => setSessionTimeoutMinutes(parseInt(event.target.value));
    const handleChangeMinimumCapitalLetterCount = (event: React.ChangeEvent<HTMLInputElement>) => setMinimumCapitalLetterCount(parseInt(event.target.value));
    const handleChangeMinimumDigitLetterCount = (event: React.ChangeEvent<HTMLInputElement>) => setMinimumDigitLetterCount(parseInt(event.target.value));
    const handleChangeMinimumSpecialLetterCount = (event: React.ChangeEvent<HTMLInputElement>) => setMinimumSpecialLetterCount(parseInt(event.target.value));
    const handleChangeMaximumLetterRepetitionCount = (event: React.ChangeEvent<HTMLInputElement>) => setMaximumLetterRepetitionCount(parseInt(event.target.value));
    const handleChangeMinimumLength = (event: React.ChangeEvent<HTMLInputElement>) => setMinimumLength(parseInt(event.target.value));
    const handleChangeMaximumLength = (event: React.ChangeEvent<HTMLInputElement>) => setMaximumLength(parseInt(event.target.value));
    const handleChangeSameLetterCount = (event: React.ChangeEvent<HTMLInputElement>) => setSameLetterCount(parseInt(event.target.value));
    const handleChangePeriodUnit = (event: SelectChangeEvent<string>) => setPeriodUnit(event.target.value);
    const handleChangeValidPeriod = (event: React.ChangeEvent<HTMLInputElement>) => setValidPeriod(parseInt(event.target.value));

    const saveAction = async () => {
      if (authPolicyId) {
        // update
        console.log('update policy...' + authPolicyId);
        const nameValues = new NameValueList(
          new NameValue('loginRetryCount', '' + loginRetryCount),
          new NameValue('noneLoginPeriod', '' + noneLoginPeriod),
          new NameValue('sessionTimeoutMinutes', '' + sessionTimeoutMinutes),
          new NameValue('minimumCapitalLetterCount', '' + minimumCapitalLetterCount),
          new NameValue('minimumDigitLetterCount', '' + minimumDigitLetterCount),
          new NameValue('minimumSpecialLetterCount', '' + minimumSpecialLetterCount),
          new NameValue('maximumLetterRepetitionCount', '' + maximumLetterRepetitionCount),
          new NameValue('minimumLength', '' + minimumLength),
          new NameValue('maximumLength', '' + maximumLength),
          new NameValue('sameLetterCount', '' + sameLetterCount),
          new NameValue('periodUnit', periodUnit),
          new NameValue('validPeriod', '' + validPeriod),
        );
        const command = new ModifyPolicyCommand(pavilionId, nameValues);
        PolicyEnvoy.modifyPolicy(command)
          .then(result => {
            alert('update result: ' + result.success);
          });
      } else {
        // register
        console.log('register policy...')
        const command = RegisterPolicyCommand.new(pavilionId, loginRetryCount, noneLoginPeriod, sessionTimeoutMinutes);
        command.passwordLetterRule = new PasswordLetterRule(
          minimumCapitalLetterCount,
          minimumDigitLetterCount,
          minimumSpecialLetterCount,
          maximumLetterRepetitionCount,
          minimumLength,
          maximumLength,
          '',
        );
        command.passwordSimilarityRule = new PasswordSimilarityRule(sameLetterCount);
        command.passwordPeriodRule = new PasswordPeriodRule(validPeriod);
        if (periodUnit) {
          command.passwordPeriodRule.periodUnit = toPasswordPeriodUnit(periodUnit);
        }
        PolicyEnvoy.registerPolicy(command)
          .then(result => {
            setAuthPolicyId(result.id);
            alert('register success.');
          });
      }
    };

    const toPasswordPeriodUnit = (str: string): PasswordPeriodUnit => {
      if (str === 'Day') {
        return PasswordPeriodUnit.Day;
      } else if (str === 'Week') {
        return PasswordPeriodUnit.Week;
      } else if (str === 'Month') {
        return PasswordPeriodUnit.Month;
      }
      return PasswordPeriodUnit.Day;
    }

    const setLoginPolicy = (loginPolicy: LoginPolicy) => {
      setLoginRetryCount(loginPolicy.loginRetryCount);
      setNoneLoginPeriod(loginPolicy.noneLoginPeriod);
      setSessionTimeoutMinutes(loginPolicy.sessionTimeoutMinutes);
    };

    const setPasswordPolicy = (passwordPolicy: PasswordPolicy) => {
      const { passwordLetterRule, passwordSimilarityRule, passwordPeriodRule } = passwordPolicy;
      if (passwordLetterRule) {
        setPasswordLetterRule(passwordLetterRule);
      }
      if (passwordSimilarityRule) {
        setPasswordSimilarityRule(passwordSimilarityRule);
      }
      if (passwordPeriodRule) {
        setPasswordPeriodRule(passwordPeriodRule);
      }
    };

    const setPasswordLetterRule = (passwordLetterRule: PasswordLetterRule) => {
      setMinimumCapitalLetterCount(passwordLetterRule.minimumCapitalLetterCount);
      setMinimumDigitLetterCount(passwordLetterRule.minimumDigitLetterCount);
      setMinimumSpecialLetterCount(passwordLetterRule.minimumSpecialLetterCount);
      setMaximumLetterRepetitionCount(passwordLetterRule.maximumLetterRepetitionCount);
      setMinimumLength(passwordLetterRule.minimumLength);
      setMaximumLength(passwordLetterRule.maximumLength);
    };

    const setPasswordSimilarityRule = (passwordSimilarityRule: PasswordSimilarityRule) => {
      setSameLetterCount(passwordSimilarityRule.sameLetterCount);
    };

    const setPasswordPeriodRule = (passwordPeriodRule: PasswordPeriodRule) => {
      setPeriodUnit(passwordPeriodRule.periodUnit ? passwordPeriodRule.periodUnit : PasswordPeriodUnit.Day);
      setValidPeriod(passwordPeriodRule.validPeriod);
    };

    useEffect(() => {
      PolicyEnvoy.findPolicy(pavilionId)
        .then(result => {
          const { authPolicyId = '', loginPolicy, passwordPolicy } = result;
          setAuthPolicyId(authPolicyId);
          if (loginPolicy) {
            setLoginPolicy(loginPolicy);
          }
          if (passwordPolicy) {
            setPasswordPolicy(passwordPolicy);
          }
        });
    }, [pavilionId]);

    return (
      <Card>
        <CardContent>
          <Box mb={3}>
            <Grid container justifyContent="space-between" alignItems="center">
              <div>
                <Typography variant="h3" color="textPrimary" gutterBottom>
                  Auth Policy
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Pavilion ID {pavilionId}
                </Typography>
              </div>
            </Grid>
          </Box>
          <Box mb={3}>
            <Grid container justifyContent="space-between" alignItems="center">
              <div>
                <Typography variant="h4" color="textPrimary" gutterBottom>
                  Login Policy
                </Typography>
              </div>
            </Grid>
          </Box>
          <Box mt={3} flexGrow={1}>
            <FormGroup>
              <TextField
                label="Login retry count"
                margin="normal"
                type="number"
                onChange={handleChangeLoginRetryCount}
                value={loginRetryCount}
              />
              <TextField
                label="Last login period"
                margin="normal"
                type="number"
                onChange={handleChangeNoneLoginPeriod}
                value={noneLoginPeriod}
              />
              <TextField
                label="Session timeout(min)"
                margin="normal"
                type="number"
                onChange={handleChangeSessionTimeoutMinutes}
                value={sessionTimeoutMinutes}
              />
            </FormGroup>
          </Box>
          <Box mb={3}>
            <Grid container justifyContent="space-between" alignItems="center">
              <div>
                <Typography variant="h4" color="textPrimary" gutterBottom>
                  Password Policy
                </Typography>
                <Typography variant="h5" color="textPrimary" gutterBottom>
                  1. Password rule
                </Typography>
              </div>
            </Grid>
          </Box>
          <Box mt={3} flexGrow={1}>
            <FormGroup>
              <TextField
                label="Minimum capital letter"
                margin="normal"
                type="number"
                onChange={handleChangeMinimumCapitalLetterCount}
                value={minimumCapitalLetterCount}
              />
              <TextField
                label="Minimum digit letter"
                margin="normal"
                type="number"
                onChange={handleChangeMinimumDigitLetterCount}
                value={minimumDigitLetterCount}
              />
              <TextField
                label="Minimum special letter"
                margin="normal"
                type="number"
                onChange={handleChangeMinimumSpecialLetterCount}
                value={minimumSpecialLetterCount}
              />
              <TextField
                label="Maximum repeat letter"
                margin="normal"
                type="number"
                onChange={handleChangeMaximumLetterRepetitionCount}
                value={maximumLetterRepetitionCount}
              />
              <TextField
                label="Mimum length"
                margin="normal"
                type="number"
                onChange={handleChangeMinimumLength}
                value={minimumLength}
              />
              <TextField
                label="Maximum length"
                margin="normal"
                type="number"
                onChange={handleChangeMaximumLength}
                value={maximumLength}
              />
            </FormGroup>
          </Box>
          <Box mb={3}>
            <Grid container justifyContent="space-between" alignItems="center">
              <div>
                <Typography variant="h5" color="textPrimary" gutterBottom>
                  2. Password similarity rule
                </Typography>
              </div>
            </Grid>
          </Box>
          <Box mt={3} flexGrow={1}>
            <FormGroup>
              <TextField
                label="Same letter"
                margin="normal"
                type="number"
                onChange={handleChangeSameLetterCount}
                value={sameLetterCount}
              />
            </FormGroup>
          </Box>
          <Box mb={3}>
            <Grid container justifyContent="space-between" alignItems="center">
              <div>
                <Typography variant="h5" color="textPrimary" gutterBottom>
                  3. Period rule
                </Typography>
              </div>
            </Grid>
          </Box>
          <Box mt={3} flexGrow={1}>
            <FormGroup>
              <Select
                label="Unit"
                onChange={handleChangePeriodUnit}
                value={periodUnit}
              >
                <MenuItem value="Week">Week</MenuItem>
                <MenuItem value="Day">Day</MenuItem>
                <MenuItem value="Month">Month</MenuItem>
              </Select>
              <TextField
                label="Expiration period"
                margin="normal"
                type="number"
                onChange={handleChangeValidPeriod}
                value={validPeriod}
              />
            </FormGroup>
          </Box>
          <Box my={2}>
            <Button
              size="large"
              color="primary"
              onClick={saveAction}
            >
              {authPolicyId ? 'Update' : 'Add'}
            </Button>
          </Box>
        </CardContent>
      </Card>
    );
  });

export default AuthPolicyFormContainer;
