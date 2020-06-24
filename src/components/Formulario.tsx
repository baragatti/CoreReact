import React, {ReactNode} from 'react';
import {observer} from 'mobx-react';

interface PropriedadesFormulario<T> {
  objeto: T;
  erros: { [key: string]: string };
}

interface Props<T> extends PropriedadesFormulario<T> {
  children?: ReactNode;
}

export const FormularioContext = React.createContext({
  objeto: {},
  erros: {},
} as PropriedadesFormulario<any>);

const Formulario = function <T>(props: Props<T>) {
  const {
    children,
    objeto,
    erros,
  } = props;

  return (
    <FormularioContext.Provider value={{objeto, erros}}>
      <form>
        {children}
      </form>
    </FormularioContext.Provider>
  );
};

export default observer(Formulario);
