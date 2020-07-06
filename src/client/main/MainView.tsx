import React, {useContext} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Menu, {drawerWidth} from './Menu';
import {AppContext} from '../../components/AppProvider';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('md')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    toolbar: {
      ...theme.mixins.toolbar,
      paddingLeft: 24,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    bold: {
      fontWeight: 500,
    },
    routeHidden: {
      display: 'none',
    },
    routeVisible: {
      width: '100%',
    },
    menuItem: {
      paddingTop: 0,
      paddingBottom: 0,
      '&.Mui-selected': {
        backgroundColor: '#FFF',
      },
      '&.Mui-focusVisible': {
        backgroundColor: '#FFF',
      },
      '&.Mui-selected:hover': {
        backgroundColor: '#EEE',
      },
      '& .MuiListItemText-primary': {
        fontSize: '14px',
      },
      '&.Mui-selected .MuiListItemText-primary': {
        color: '#1e96f3',
      },
      '&.Mui-selected .material-icons': {
        color: '#1e96f3',
      },
    },
  }),
);

const MainView: React.FC<React.PropsWithChildren<any>> = (props: React.PropsWithChildren<any>) => {
  const classes = useStyles();
  const {children} = props;
  const {state, update} = useContext(AppContext);
  const setMobileOpen = (drawerOpen: boolean) => {
    update('drawerOpen', drawerOpen);
  };

  return (
    <div className={classes.root}>
      <CssBaseline/>
      <nav className={classes.drawer}>
        <Hidden mdUp implementation="css">
          <Drawer
            variant={'temporary'}
            anchor={'left'}
            open={state.drawerOpen}
            onClose={() => setMobileOpen(false)}
            classes={{paper: classes.drawerPaper}}
            ModalProps={{keepMounted: true}}
          >
            <Menu/>
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <Menu/>
          </Drawer>
        </Hidden>
      </nav>
      {children}
    </div>
  );
};

export default MainView;
