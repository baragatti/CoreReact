import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Button, Card, CardContent, CardHeader} from '@material-ui/core';

interface Props<T> {
  titulo?: string;
  registros: T[];
  keyHandler: (registro: T) => string;
  renderItem: (registro: T) => React.ReactNode;
  onCarregarMaisRegistros?: () => void;
}

const useStyles = makeStyles(() => ({
  cardHeader: {
    padding: '8px 16px',
    borderBottom: 'solid 1px #e0e0e0',
  },
  cardContent: {
    'padding': 0,
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  container: {
    width: '100%',
  },
  registro: {
    'width': '100%',
    'padding': 16,
    'borderBottom': 'solid 1px #e0e0e0',
    '&:last-child': {
      borderBottom: 'none',
    },
  },
  botaoCarregarMais: {
    width: '100%',
    textAlign: 'center',
  },
  mensagemCard: {
    textAlign: 'center',
    padding: 16,
  },
}));

const CardRegistros = function <T>(props: Props<T>) {
  const {
    titulo,
    registros,
    keyHandler,
    renderItem,
    onCarregarMaisRegistros,
  } = props;
  const classes = useStyles();

  return (
    <Card>
      {titulo && (
        <CardHeader
          className={classes.cardHeader}
          title={titulo}
          titleTypographyProps={{variant: 'h6'}}
        />
      )}
      <CardContent className={classes.cardContent}>
        <div className={classes.container}>
          {(registros && registros.length > 0) ? (
            <React.Fragment>
              {registros.map((registro) => (
                <div key={keyHandler(registro)} className={classes.registro}>
                  {renderItem(registro)}
                </div>
              ))}
              {onCarregarMaisRegistros && (
                <Button color="primary" className={classes.botaoCarregarMais}>
                  Carregar mais registros
                </Button>
              )}
            </React.Fragment>
          ) : (
            <div className={classes.mensagemCard}>Nenhum registro encontrado</div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CardRegistros;
