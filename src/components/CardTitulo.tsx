import React from 'react';
import {Card, CardContent, CardHeader} from '@material-ui/core';
import {cardStyles} from '../styles/Styles';

interface Props {
  titulo?: string;
  acoesHeader?: React.ReactNode;
}

const CardTitulo = (props: React.PropsWithChildren<Props>) => {
  const {
    titulo,
    acoesHeader,
    children,
  } = props;
  const cardClasses = cardStyles();

  return (
    <Card>
      <CardHeader
        className={cardClasses.cardHeader}
        title={(
          <div className={cardClasses.cardHeaderContent}>
            <div>{titulo}</div>
            {acoesHeader && (
              <div className={cardClasses.cardHeaderActions}>{acoesHeader}</div>
            )}
          </div>
        )}
        titleTypographyProps={{variant: 'h5'}}
      >
        <div>Filtro</div>
      </CardHeader>
      <CardContent className={cardClasses.cardContent}>
        <div className={cardClasses.container}>
          {children}
        </div>
      </CardContent>
    </Card>
  );
};

export default CardTitulo;
