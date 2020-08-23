import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
    createStyles({
        toolbar: {
            flex: 1,
            justifyContent: 'space-between'
        },
        btnMargin: {
            marginRight: theme.spacing(2),
        },
        noSelection: {
            textDecoration: 'none'
        }
    }),
);