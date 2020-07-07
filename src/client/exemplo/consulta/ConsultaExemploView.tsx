import React, {useEffect} from 'react';
import AppBar from '../../../components/AppBar';
import ViewContent from '../../../components/ViewContent';
import CardRegistros from '../../../components/CardRegistros';
import Exemplo from '../Exemplo';
import ViewProps from '../../../components/types/ViewProps';
import {bindView} from '../../../components/ViewBinder';
import ConsultaExemploBloc, {ExemploFiltro} from './ConsultaExemploBloc';
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
            <ConsultaExemploFiltroView buscarRegistros={(filtros: ExemploFiltro) => {
              bloc.filtrar(filtros);
            }}/>
          )}
          registros={bloc.exemplos}
          keyHandler={(exemplo: Exemplo) => `${exemplo.CODIGO || ''}`}
          renderItem={(exemplo: Exemplo) => (
            <div>{exemplo.NOME}</div>
          )}
        />
      </ViewContent>
    </>
  );
};

export default bindView(ConsultaExemploView, ConsultaExemploBloc);
