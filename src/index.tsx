import React from 'react';
import ReactDOM from 'react-dom';
import TraducaoYup from './modules/TraducaoYup';
import * as serviceWorker from './serviceWorker';
import Router from './modules/Router';
import theme from './styles/Theme';
import {ThemeProvider} from '@material-ui/core';
import './styles/styles.scss';

TraducaoYup.registrar();

ReactDOM.render(
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Router/>
      </ThemeProvider>
    </React.Fragment>,
    document.getElementById('root'),
);

serviceWorker.unregister();
