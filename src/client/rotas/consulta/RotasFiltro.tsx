import React from 'react';
import {action, observable} from 'mobx';
import Bloc from '../../../components/Bloc';
import {bindView} from '../../../components/ViewWrapper';
import Filtro, {CampoFiltro} from '../../../components/Filtro';
import {TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

class RotasFiltroBloc extends Bloc {
  @observable nome: string = '';

  @action
  limpar() {
    this.nome = '';
  }
}

const useStyles = makeStyles(() => ({
  campo: {
    width: '100%',
    marginTop: 16,
  },
}));

interface Props {
  bloc?: RotasFiltroBloc;
  onSubmit: (filtros: string, ordenacoes: string) => void;
}

const RotasFiltro: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const {bloc, onSubmit} = props;

  return (
    <Filtro
      ordenacoes={[
        {
          nome: 'Nome A..Z',
          campo: 'NOME',
          direcao: 'ASC',
        },
        {
          nome: 'Nome Z..A',
          campo: 'NOME',
          direcao: 'DESC',
        },
      ]}
      montarFiltros={() => {
        const filtros: CampoFiltro[] = [];

        if (bloc.nome) {
          filtros.push(new CampoFiltro('NOME', 'IG', bloc.nome));
        }

        return filtros;
      }}
      onLimpar={() => bloc.limpar()}
      onSubmit={onSubmit}
    >
      <TextField
        className={classes.campo}
        label="Nome"
        value={bloc.nome}
        onChange={(event) => bloc.nome = event.target.value}
      />
    </Filtro>
  );
};

export default bindView(RotasFiltro, RotasFiltroBloc);
