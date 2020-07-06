import React from 'react';
import {action, observable} from 'mobx';
import {bindView} from '../../../components/ViewWrapper';
import Filtro from '../../../components/Filtro';
import {TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Select from '../../../components/Select';
import Ordenacao from '../../../shared/Ordenacao';

const ordenacoes: Ordenacao[] = [
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
];

class RotasFiltroBloc {
  @observable nome: string = '';
  @observable ordenacao: Ordenacao = ordenacoes[0];

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
      onLimpar={() => bloc.limpar()}
      onSubmit={() => {
        onSubmit('', '');
      }}
    >
      <Select<Ordenacao>
        placeholder="Ordenação"
        list={ordenacoes}
        value={bloc.ordenacao}
        keyHandler={(ordenacao: Ordenacao) => ordenacao?.nome}
        descriptionHandler={(ordenacao: Ordenacao) => ordenacao?.nome}
        onChange={((ordenacao: Ordenacao) => bloc.ordenacao = ordenacao)}
      />
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
