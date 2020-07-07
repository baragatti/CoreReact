import React, {useEffect} from 'react';
import AppBar from '../../../components/AppBar';
import ViewContent from '../../../components/ViewContent';
import CardRegistros from '../../../components/CardRegistros';
import Exemplo from '../Exemplo';
import ViewProps from '../../../components/types/ViewProps';
import {bindView} from '../../../components/ViewBinder';
import ConsultaExemploBloc from './ConsultaExemploBloc';
import ConsultaExemploFiltroView from './filtro/ConsultaExemploFiltroView';

const ConsultaExemploView: React.FC<ViewProps<ConsultaExemploBloc>> = (props: ViewProps<ConsultaExemploBloc>) => {
  const {bloc} = props;

  useEffect(() => {
    bloc.buscarRegistros();
  }, [bloc]);

  return (
    <>
      <AppBar title="Consulta de exemplo"/>
      <ViewContent>
        <CardRegistros<Exemplo>
          titulo={bloc.totalRegistros > 0 ? `Total de ${bloc.totalRegistros} registros encontrados` : 'Registros'}
          acoesHeader={(
            <ConsultaExemploFiltroView buscarRegistros={(nome: string, ordenacao: string) => {
              bloc.filtrar(nome, ordenacao);
            }}/>
          )}
          registros={bloc.exemplos}
          keyHandler={(rota: Exemplo) => `${rota.CODIGO || ''}`}
          renderItem={(rota: Exemplo) => (
            <div>{rota.NOME}</div>
          )}
        />
      </ViewContent>
    </>
  );
};

export default bindView(ConsultaExemploView, ConsultaExemploBloc);
