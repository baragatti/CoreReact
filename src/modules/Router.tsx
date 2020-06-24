import React from 'react';
import MainView from '../client/main/MainView';
import AppProvider, {AppConsumer} from '../components/AppProvider';
import {HashRouter, Redirect, Route} from 'react-router-dom';
import {NameToken} from './NameToken';
import {CacheRoute, CacheSwitch} from 'react-router-cache-route';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
  route: {
    width: '100%',
  },
}));

const MainRouter: React.FC = () => {
  const classes = useStyles();

  return (
    <CacheRoute path='/'>
      <AppProvider>
        <MainView>
          <CacheSwitch>
            {NameToken.allValues
                .filter((value) => value.component)
                .map((value, i) => (
                  <CacheRoute
                    key={i}
                    cacheKey={'route-' + value.endpoint}
                    path={'/' + value.endpoint}
                    className={classes.route}
                    render={((props) => (
                      <AppConsumer>
                        <value.component {...props}/>
                      </AppConsumer>
                    ))}
                    exact
                  />
                ))}
          </CacheSwitch>
        </MainView>
      </AppProvider>
    </CacheRoute>
  );
};

const Router: React.FC = () => {
  return (
    <HashRouter>
      <CacheSwitch>
        <Route exact path='/login'>
          <Redirect to={NameToken.ROTAS.endpoint}/>
        </Route>
        <Route exact path='/'>
          <Redirect to={NameToken.ROTAS.endpoint}/>
        </Route>
        <MainRouter/>
      </CacheSwitch>
    </HashRouter>
  );
};

export default Router;
