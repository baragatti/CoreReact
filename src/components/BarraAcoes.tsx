import React from 'react';
import {Card, CardContent, Theme} from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

export const alturaBarraAcoes = 68;

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    width: 'calc(100% - 240px)',
    position: 'fixed',
    display: 'flex',
    bottom: 0,
    zIndex: 999,
    height: alturaBarraAcoes,
    padding: 8,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  card: {
    margin: '0 auto 0 auto',
    maxWidth: 960,
    width: '100%',
    padding: 0,
  },
  cardContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    padding: 8,
    '&:last-child': {
      paddingBottom: 0,
    },
  },
}));

const BarraAcoes: React.FC<React.PropsWithChildren<{}>> = (props: React.PropsWithChildren<{}>) => {
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
