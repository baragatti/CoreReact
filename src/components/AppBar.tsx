import React, {PropsWithChildren, useContext} from 'react';
import {default as ReactAppBar} from '@material-ui/core/AppBar/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {createStyles, Theme} from '@material-ui/core';
import {AppContext} from './AppProvider';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MenuIcon from '@material-ui/icons/Menu';

interface Props {
  title: string;
  gwt?: boolean;
  onVoltarClick?: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      ...theme.mixins.toolbar,
      marginLeft: 240,
      [theme.breakpoints.up('md')]: {
        width: `calc(100% - 240px)`,
      },
    },
    botaoMenu: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    botaoVoltar: {
      marginRight: theme.spacing(2),
      display: 'none',
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    menuWrapper: {
      lineHeight: 0,
      display: 'inline-flex',
      marginLeft: 'auto !important',
      zIndex: 5,
      background: 'rgb(33, 150, 243)',
    },
  }),
);

const AppBar: React.FC<Props> = (props: PropsWithChildren<Props>) => {
  const classes = useStyles();
  const {state, update} = useContext(AppContext);

  const toggleDrawer = () => {
    update('drawerOpen', !state.drawerOpen);
  };

  return (
    <ReactAppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <div id={props.gwt ? 'gwt-botao-menu' : undefined}>
          <IconButton color="inherit" edge="start" className={classes.botaoMenu} onClick={toggleDrawer}>
            <MenuIcon/>
          </IconButton>
        </div>
        <IconButton color="inherit" edge="start" className={classes.botaoVoltar}
          id={props.gwt ? 'appbar-botao-voltar' : undefined}
          style={props.onVoltarClick ? {display: 'block'} : undefined} onClick={props.onVoltarClick}>
          <ArrowBackIcon/>
        </IconButton>
        <Typography className={classes.title} variant="h6" noWrap id={props.gwt ? 'appbar-title' : undefined}>
          {props.title}
        </Typography>
        <div id={props.gwt ? 'appbar-menu-wrapper' : undefined} className={classes.menuWrapper}>
          {props.children}
        </div>
      </Toolbar>
    </ReactAppBar>
  );
};

export default AppBar;
