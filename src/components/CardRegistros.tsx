import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Button, Card, CardContent, CardHeader} from '@material-ui/core';
import {cardStyles} from '../styles/Styles';

interface Props<T> {
  titulo?: string;
  acoesHeader?: React.ReactNode;
  registros: T[];
  keyHandler: (registro: T) => string;
  renderItem: (registro: T) => React.ReactNode;
  onCarregarMaisRegistros?: () => void;
}

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
  },
  titulo: {
    fontWeight: 400,
    fontSize: '18px',
    paddingTop: 6,
  },
  registro: {
    width: '100%',
    padding: 16,
    borderBottom: 'solid 1px #e0e0e0',
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
    acoesHeader,
    registros,
    keyHandler,
    renderItem,
    onCarregarMaisRegistros,
  } = props;
  const classes = useStyles();
  const cardClasses = cardStyles();

  return (
    <Card>
      <CardHeader
        className={cardClasses.cardHeader}
        title={(
          <div className={cardClasses.cardHeaderContent}>
            <div className={classes.titulo}>{titulo}</div>
            {acoesHeader && (
              <div className={cardClasses.cardHeaderActions}>{acoesHeader}</div>
            )}
          </div>
        )}
      >
        <div>Filtro</div>
      </CardHeader>
      <CardContent className={cardClasses.cardContent}>
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
