import React, {useEffect} from 'react';
import RotasBloc from './RotasBloc';
import {bindView} from '../../../components/ViewWrapper';
import AppBar from '../../../components/AppBar';
import ViewMain from '../../../components/ViewMain';
import ViewContent from '../../../components/ViewContent';
import RotasFiltro from './RotasFiltro';
import CardRegistros from '../../../components/CardRegistros';
import Rota from '../Rota';
import ViewProps from '../../../types/ViewProps';

interface Props extends ViewProps<RotasBloc> {
}

const RotasView: React.FC<Props> = (props: Props) => {
  const {bloc} = props;

  useEffect(() => {
    bloc.buscarRegistros();
  }, [bloc]);

  return (
    <>
      <AppBar title="Consulta de rotas"/>
      <ViewMain>
        <ViewContent>
          <CardRegistros<Rota>
            titulo="Rotas"
            acoesHeader={(
              <RotasFiltro onSubmit={(filtros: string, ordenacoes: string) => {
                bloc.filtrar(filtros, ordenacoes);
              }}/>
            )}
            registros={bloc.rotas}
            keyHandler={(rota: Rota) => `${rota.CODIGO || ''}`}
            renderItem={(rota: Rota) => (
              <div>{rota.NOME}</div>
            )}
          />
        </ViewContent>
      </ViewMain>
    </>
  );
};

export default bindView(RotasView, RotasBloc);
