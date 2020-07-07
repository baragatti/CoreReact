import React, {useState} from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {Box, Button, createStyles, Drawer, Typography} from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';

interface Props {
  onLimpar: () => void;
  onFiltrar: () => void;
}

const useStyles = makeStyles(() =>
  createStyles({
    botaoFiltro: {
      marginLeft: 'auto',
    },
    filtroDrawer: {
      width: 300,
      padding: 16,
    },
    fullWidth: {
      width: '100%',
    },
    legendaFiltro: {
      marginBottom: 16,
    },
    botoesFiltro: {
      marginTop: 32,
      display: 'flex',
      margin: '0 -8px',
      '& > *': {
        flexGrow: 1,
        flexBasis: '50%',
        margin: '0 8px',
      },
    },
  }),
);

const CardFiltros: React.FC<React.PropsWithChildren<Props>> = (props: React.PropsWithChildren<Props>) => {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);
  const [isFiltrando, setFiltrando] = useState(false);
  const {
    children,
    onLimpar,
    onFiltrar,
  } = props;

  const filtrar = (isLimpando?: boolean) => {
    onFiltrar();

    setFiltrando(!isLimpando);

    if (!isLimpando) {
      setOpen(false);
    }
  };

  const limpar = () => {
    onLimpar();
    setFiltrando(false);

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
            {children}
          </div>
          <div className={classes.botoesFiltro}>
            <Box boxShadow={1}>
              <Button
                className={classes.fullWidth}
                color="primary"
                size="medium"
                onClick={limpar}
              >
                Limpar
              </Button>
            </Box>
            <Button
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
      <div>
        <Button
          aria-label="Abrir filtros"
          color={isFiltrando ? 'primary' : 'default'}
          className={classes.botaoFiltro}
          startIcon={<FilterListIcon/>}
          onClick={() => setOpen(true)}
        >
          Filtrar
        </Button>
      </div>
    </>
  );
};

export default CardFiltros;
