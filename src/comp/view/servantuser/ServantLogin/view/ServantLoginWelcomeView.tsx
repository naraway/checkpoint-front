import React from 'react';
import { observer } from 'mobx-react';
import { Box, Grid, Typography } from '@mui/material';


const ServantLoginWelcomeView = observer(
  ({
     title = 'Login',
     description = 'Please login to use service.',
     logoPath,
   }: {
    title?: string,
    description?: string,
    logoPath?: string,
  }) => (
    <Box mb={3}>
      <Grid container justifyContent="space-between" alignItems="center">
        <div>
          <Typography variant="h2" color="textPrimary" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
        </div>

        {logoPath && (
          <Box>
            <img src={logoPath} alt="Logo"/>
          </Box>
        )}
      </Grid>
    </Box>
  ));

export default ServantLoginWelcomeView;
