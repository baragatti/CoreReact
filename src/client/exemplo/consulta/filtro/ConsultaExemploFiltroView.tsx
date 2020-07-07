import React from 'react';
import CardFiltros from '../../../../components/CardFiltros';
import {FormControl, InputLabel, MenuItem, Select, TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import ViewProps from '../../../../components/types/ViewProps';
import {bindView} from '../../../../components/ViewBinder';
import {ConsultaExemploFiltroBloc} from './ConsultaExemploFiltroBloc';

const useStyles = makeStyles(() => ({
  campo: {
    width: '100%',
    marginTop: 16,
  },
}));

interface Props extends ViewProps<ConsultaExemploFiltroBloc> {
  buscarRegistros: (nome: string, ordenacao: string) => void;
}

const ConsultaExemploFiltroView: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const {bloc, buscarRegistros} = props;

  return (
    <CardFiltros
      onLimpar={() => bloc.limpar()}
      onFiltrar={() => buscarRegistros(bloc.nome, bloc.ordenacao)}
    >
      <FormControl fullWidth={true}>
        <InputLabel id="ordenacao">Ordenação</InputLabel>
        <Select
          labelId="ordenacao"
          id="ordenacao-select"
          value={bloc.ordenacao}
          onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
            bloc.ordenacao = event.target.value as string;
          }}
        >
          <MenuItem value={'1'}>Nome A..Z</MenuItem>
          <MenuItem value={'2'}>Nome Z..A</MenuItem>
        </Select>
      </FormControl>
      <TextField
        className={classes.campo}
        label="Nome"
        value={bloc.nome}
        onChange={(event) => bloc.nome = event.target.value}
      />
    </CardFiltros>
  );
};

export default bindView(ConsultaExemploFiltroView, ConsultaExemploFiltroBloc);
