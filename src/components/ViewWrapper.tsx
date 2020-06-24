import React from 'react';
import {inject, observer, Provider} from 'mobx-react';
import Store from './Store';

@inject('store')
class StoreHolder extends React.PureComponent<React.PropsWithChildren<any>> {
  render() {
    return React.cloneElement(this.props.children as React.ReactElement, {store: this.props.store});
  }
}

export function bindView<T extends { store?: Store }>(View: React.ComponentType<T>, Store: new () => Store) {
  const WrappedView: React.ComponentType<T> = observer(View);

  return class Wrapper extends React.PureComponent<T> {
    private store: Store = null;

    constructor(props: T) {
      super(props);

      this.store = new Store();
    }

    render() {
      return (
        <Provider store={this.store}>
          <StoreHolder>
            <WrappedView {...this.props}/>
          </StoreHolder>
        </Provider>
      );
    }
  };
}
