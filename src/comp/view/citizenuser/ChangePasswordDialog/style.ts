import { createStyles, WithStyles as MuiWithStyles, withStyles as muiWithStyles } from '@mui/styles';


const style = () => createStyles({
  inputFormLabel: {
    alignItems: 'flex-end',
  },
});

export default style;
export type WithStyles = MuiWithStyles<typeof style>;
export const withStyles = muiWithStyles(style);
