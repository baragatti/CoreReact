import React from 'react';
import {inject, observer, Provider} from 'mobx-react';
import Bloc from '../types/Bloc';

@inject('store')
class StoreHolder extends React.PureComponent<React.PropsWithChildren<any>> {
  render() {
    return React.cloneElement(this.props.children as React.ReactElement, {bloc: this.props.store});
  }
}

type PropsWithBloc = { bloc?: Bloc };

export function bindView<T extends PropsWithBloc>(View: React.ComponentType<T>, ViewBloc: new () => Bloc) {
  const WrappedView: React.ComponentType<T> = observer(View);

  return class Wrapper extends React.PureComponent<T> {
    private bloc: Bloc = null;

    constructor(props: T) {
      super(props);

      this.bloc = new ViewBloc();
    }

    render() {
      return (
        <Provider store={this.bloc}>
          <StoreHolder>
            <WrappedView {...this.props}/>
          </StoreHolder>
        </Provider>
      );
    }
  };
}
