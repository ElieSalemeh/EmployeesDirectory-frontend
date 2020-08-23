import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    editBtn: {
      padding: theme.spacing(.4)
    },
    tableRow: {
      hover: {
        '&:hover': {
          background: "#f00",
       },
      }
    }
  }),
);