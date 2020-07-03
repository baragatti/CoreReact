import React, {ChangeEvent, ReactNode, useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {FormularioContext} from './Formulario';
import {observer} from 'mobx-react';

interface Props<T> {
  propriedade: keyof T;
  children?: ReactNode
}

const useStyles = makeStyles(() => ({
  campoFormulario: {
    padding: 8,
    width: '100%',
    '& > *': {
      width: '100%',
    },
  },
}));

const CampoFormulario = function <T>(props: Props<T>) {
  const {
    children,
    propriedade,
  } = props;
  const classes = useStyles();
  const {objeto, erros} = useContext(FormularioContext);

  const onChange = (e: ChangeEvent<any>) => {
    const valor = e.target.value;

    objeto[propriedade] = (valor !== '') ? valor : null;
  };
  const onBlur = () => {
    delete erros[propriedade as string];
  };

  return (
    <div className={classes.campoFormulario}>
      {
        React.cloneElement(children as React.ReactElement, {
          value: objeto[propriedade] || '',
          onChange,
          onBlur,
          error: !!erros[propriedade as string],
          helperText: erros[propriedade as string],
        })
      }
    </div>
  );
};

export default observer(CampoFormulario);
