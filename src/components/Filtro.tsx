import React, {useState} from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {
  Button,
  createStyles,
  Drawer,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';
import {drawerWidth} from '../client/main/Menu';

export interface Ordenacao {
  nome: string;
  campo: string;
  direcao?: 'ASC' | 'DESC';
}

export type OperadorConsulta = 'BW' | 'CC' | 'CO' | 'CT' | 'DI' | 'IG' | 'II' | 'IN' | 'SI' | 'SU';

export class CampoFiltro {
  campo: string;
  operacao: OperadorConsulta;
  valor: string;

  constructor(campo: string, operacao: OperadorConsulta, valor: string) {
    this.campo = campo;
    this.operacao = operacao;
    this.valor = valor;
  }
}

interface Props {
  ordenacoes?: Ordenacao[];
  montarFiltros: () => CampoFiltro[];
  onLimpar: () => void;
  onSubmit: (filtros: string, ordenacao: string) => void;
}

const useStyles = makeStyles(() =>
  createStyles({
    wrapper: {
      display: 'flex',
      width: '100%',
      height: 36,
      borderBottom: 'solid 1px #e0e0e0',
    },
    botaoFiltro: {
      marginLeft: 'auto',
      marginRight: 8,
    },
    filtroDrawer: {
      width: drawerWidth,
      padding: 16,
    },
    campoOrdenacao: {
      width: '100%',
    },
    legendaFiltro: {
      marginBottom: 16,
    },
    botoesFiltro: {
      marginTop: 16,
      textAlign: 'end',
    },
    botaoFiltrar: {
      marginLeft: 16,
    },
  }),
);

const Filtro: React.FC<React.PropsWithChildren<Props>> = (props: React.PropsWithChildren<Props>) => {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);
  const [isFiltrando, setFiltrando] = useState(false);
  const [ordenacao, setOrdenacao] = useState(null);
  const {
    children,
    ordenacoes,
    montarFiltros,
    onLimpar,
    onSubmit,
  } = props;

  const filtrar = (isLimpando?: boolean) => {
    const ordenacaoPadrao = ordenacoes ? ordenacoes[0] : null;
    const filtrosSelecionados: CampoFiltro[] = isLimpando ? [] : montarFiltros();
    const ordenacaoSelecionada = isLimpando ? ordenacaoPadrao : (ordenacoes[ordenacao] || ordenacaoPadrao);

    const filtroMontado = filtrosSelecionados
        .map((filtro) => `${filtro.campo}:${filtro.operacao}:${filtro.valor}`)
        .join(',');
    const ordenacaoMontada = ordenacaoSelecionada ?
      (ordenacaoSelecionada.campo + ' ' + ordenacaoSelecionada.direcao) : '';

    onSubmit(filtroMontado, ordenacaoMontada);

    setFiltrando(!isLimpando);

    if (!isLimpando) {
      setOpen(false);
    }
  };

  const limpar = () => {
    onLimpar();
    setFiltrando(false);
    setOrdenacao(null);

    filtrar(true);
  };

  return (
    <>
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => setOpen(false)}
      >
        <div className={classes.filtroDrawer}>
          <Typography variant="h6" gutterBottom className={classes.legendaFiltro}>
            Filtrar
          </Typography>
          <div>
            {ordenacoes && (
              <FormControl className={classes.campoOrdenacao}>
                <InputLabel>Ordenação</InputLabel>
                <Select
                  value={ordenacao || 0}
                  onChange={(event) => setOrdenacao(event.target.value)}
                >
                  {ordenacoes.map((itemOrdenacao, index) => (
                    <MenuItem
                      key={itemOrdenacao.nome}
                      value={index}
                    >
                      {itemOrdenacao.nome}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
            {children}
          </div>
          <div className={classes.botoesFiltro}>
            <Button
              color="primary"
              size="medium"
              onClick={limpar}
            >
              Limpar
            </Button>
            <Button
              className={classes.botaoFiltrar}
              color="primary"
              size="medium"
              variant="contained"
              onClick={() => filtrar()}
            >
              Filtrar
            </Button>
          </div>
        </div>
      </Drawer>
      <div className={classes.wrapper}>
        <IconButton
          className={classes.botaoFiltro}
          color={isFiltrando ? 'primary' : 'default'}
          size="small"
          aria-label="Abrir filtros"
          onClick={() => setOpen(true)}
        >
          <FilterListIcon/> Filtros
        </IconButton>
      </div>
    </>
  );
};

export default Filtro;
