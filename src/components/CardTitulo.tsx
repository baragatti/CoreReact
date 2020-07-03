import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Card, CardContent, CardHeader} from '@material-ui/core';

interface Props {
  titulo?: string;
  acoesHeader?: React.ReactNode;
}

const useStyles = makeStyles(() => ({
  cardHeader: {
    padding: '8px 16px',
    borderBottom: 'solid 1px #e0e0e0',
  },
  cardHeaderContent: {
    display: 'flex',
  },
  cardHeaderActions: {
    marginLeft: 'auto',
  },
  cardContent: {
    padding: 0,
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  container: {
    width: '100%',
  },
}));

const CardTitulo = (props: React.PropsWithChildren<Props>) => {
  const {
    titulo,
    acoesHeader,
    children,
  } = props;
  const classes = useStyles();

  return (
    <Card>
      <CardHeader
        className={classes.cardHeader}
        title={(
          <div className={classes.cardHeaderContent}>
            <div>{titulo}</div>
            {acoesHeader && (
              <div className={classes.cardHeaderActions}>{acoesHeader}</div>
            )}
          </div>
        )}
        titleTypographyProps={{variant: 'h6'}}
      >
        <div>Filtro ueueue</div>
      </CardHeader>
      <CardContent className={classes.cardContent}>
        <div className={classes.container}>
          {children}
        </div>
      </CardContent>
    </Card>
  );
};

export default CardTitulo;
