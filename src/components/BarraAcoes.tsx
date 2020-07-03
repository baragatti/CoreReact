import React, {useCallback, useEffect, useLayoutEffect, useState} from 'react';
import {Card, CardContent, Theme} from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {drawerWidth} from '../client/main/Menu';
import {useDebouncer} from '../common/Debouncer';

const alturaBarra = 52;
const larguraMaxima = 960;

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    position: 'absolute',
    display: 'flex',
    bottom: 0,
    zIndex: 999,
    height: alturaBarra + 16,
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

const BarraAcoes: React.FC<React.PropsWithChildren<{}>> = (props: React.PropsWithChildren<{}>) => {
  const {children} = props;
  const [estilo, setEstilo] = useState({width: 0, marginLeft: 0});
  const classes = useStyles();

  const atualizarTamanho = useCallback(() => {
    let width = window.innerWidth;
    let marginLeft = 0;
    const drawerVisivel = window.innerWidth > larguraMaxima;

    if (drawerVisivel) {
      width -= drawerWidth;
    }

    if (width > larguraMaxima) {
      marginLeft = (width - larguraMaxima) / 2;
      width = larguraMaxima;
    }

    setEstilo({width, marginLeft});
  }, []);
  const atualizarTamanhoDebouncer = useDebouncer(() => atualizarTamanho(), 100);

  useLayoutEffect(() => {
    window.addEventListener('resize', atualizarTamanhoDebouncer);

    atualizarTamanho();

    return () => window.removeEventListener('resize', atualizarTamanhoDebouncer);
  }, []);

  useEffect(() => {
    atualizarTamanho();
  }, []);

  return (
    <div
      style={estilo}
      className={classes.wrapper}
    >
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          {children}
        </CardContent>
      </Card>
    </div>
  );
};

export default BarraAcoes;
