import React, {useEffect} from 'react';
import RotasBloc from './RotasBloc';
import {bindView} from '../../../components/ViewWrapper';
import AppBar from '../../../components/AppBar';
import ViewMain from '../../../components/ViewMain';
import ViewContent from '../../../components/ViewContent';
import RotasFiltro from './RotasFiltro';
import CardRegistros from '../../../components/CardRegistros';
import Rota from '../Rota';

interface Props {
  store?: RotasBloc;
}

const RotasView: React.FC<Props> = (props: Props) => {
  const {store} = props;

  useEffect(() => {
    store.buscarRegistros();
  }, [store]);

  return (
    <>
      <AppBar title="Consulta de rotas"/>
      <ViewMain>
        <ViewContent>
          <CardRegistros<Rota>
            titulo="Rotas"
            acoesHeader={(
              <RotasFiltro onSubmit={(filtros: string, ordenacoes: string) => {
                store.filtrar(filtros, ordenacoes);
              }}/>
            )}
            registros={store.rotas}
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
