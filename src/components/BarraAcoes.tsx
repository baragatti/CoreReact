import React from 'react';
import {Card, CardContent, Theme} from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {drawerWidth} from '../client/main/Menu';

interface Props {
}

const tamanhoBarra = 52;

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    position: 'absolute',
    display: 'flex',
    bottom: 0,
    zIndex: 999,
    width: 'calc(100% - ' + drawerWidth + 'px)',
    height: tamanhoBarra + 16,
    padding: 8,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  card: {
    width: '100%',
    padding: 0,
  },
  cardContent: {
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'flex-end',
    'width': '100%',
    'padding': 8,
    '&:last-child': {
      paddingBottom: 0,
    },
  },
}));

const BarraAcoes: React.FC<React.PropsWithChildren<Props>> = (props: React.PropsWithChildren<Props>) => {
  const {children} = props;
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          {children}
        </CardContent>
      </Card>
    </div>
  );
};

export default BarraAcoes;
