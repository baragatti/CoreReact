import React from 'react';
import {action, observable} from 'mobx';
import Store from '../../../components/Store';
import {bindView} from '../../../components/ViewWrapper';
import Filtro, {CampoFiltro} from '../../../components/Filtro';
import {TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

class RotasFiltroBloc extends Store {
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
  store?: RotasFiltroBloc;
  onSubmit: (filtros: string, ordenacoes: string) => void;
}

const RotasFiltro: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const {store, onSubmit} = props;

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

        if (store.nome) {
          filtros.push(new CampoFiltro('NOME', 'IG', store.nome));
        }

        return filtros;
      }}
      onLimpar={() => store.limpar()}
      onSubmit={onSubmit}
    >
      <TextField
        className={classes.campo}
        label="Nome"
        value={store.nome}
        onChange={(event) => store.nome = event.target.value}
      />
    </Filtro>
  );
};

export default bindView(RotasFiltro, RotasFiltroBloc);
