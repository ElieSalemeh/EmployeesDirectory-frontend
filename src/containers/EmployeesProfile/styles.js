import {
    createStyles, makeStyles,
  } from '@material-ui/core/styles';
  
  export const useStyles = makeStyles((theme) =>
    createStyles({
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: theme.spacing(2),
      },
      textField: {
        margin: '6px!important',
      },
      buttons: {
        padding: theme.spacing(2),
        textAlign: 'center',
      },
      btnContainer: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-around'
      },
      btn: {
        minWidth: '150px',
        textDecoration: 'none!important'
      }
    }),
  );