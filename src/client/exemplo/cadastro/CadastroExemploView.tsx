import React from 'react';
import AppBar from '../../../components/AppBar';
import ViewContent from '../../../components/ViewContent';
import {Button, Card, CardContent, Grid, TextField} from '@material-ui/core';
import CampoFormulario from '../../../components/CampoFormulario';
import BarraAcoes from '../../../components/BarraAcoes';
import * as yup from 'yup';
import Formulario from '../../../components/Formulario';
import Exemplo from '../Exemplo';
import {useHistory} from 'react-router-dom';
import {NameToken} from '../../../modules/NameToken';
import ViewProps from '../../../components/types/ViewProps';
import {bindView} from '../../../components/ViewBinder';
import CadastroExemploBloc from './CadastroExemploBloc';

const formHandler = yup.object().shape({
  NOME: yup.string().required().min(3).max(20),
  OBSERVACAO: yup.string().transform((value) => value || null).min(3).max(50).nullable(true),
});

const CadastroExemploView: React.FC<ViewProps<CadastroExemploBloc>> = (props: ViewProps<CadastroExemploBloc>) => {
  const history = useHistory();
  const {bloc} = props;
  const {exemplo, erros} = props.bloc;

  const onSubmit = () => {
    formHandler.validate(exemplo)
        .then(async () => {
          await bloc.cadastrar();

          history.push(NameToken.EXEMPLO_CONSULTA.endpoint);
        })
        .catch((erro) => {
          erros[erro.path] = erro.message;
        });
  };

  return (
    <>
      <AppBar title="Cadastro de exemplos"/>
      <ViewContent>
        <Card>
          <CardContent>
            <Formulario<Exemplo> objeto={exemplo} erros={erros}>
              <Grid container>
                <Grid item xs={12} sm={6}>
                  <CampoFormulario propriedade="NOME">
                    <TextField label="Nome"/>
                  </CampoFormulario>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CampoFormulario propriedade="OBSERVACAO">
                    <TextField label="Observação"/>
                  </CampoFormulario>
                </Grid>
              </Grid>
            </Formulario>
          </CardContent>
        </Card>
      </ViewContent>
      <BarraAcoes>
        <Button color="primary" variant="contained" onClick={onSubmit}>
          Salvar
        </Button>
      </BarraAcoes>
    </>
  );
};

export default bindView(CadastroExemploView, CadastroExemploBloc);
