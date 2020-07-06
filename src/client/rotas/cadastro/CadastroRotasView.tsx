import React from 'react';
import CadastroRotasBloc from './CadastroRotasBloc';
import {bindView} from '../../../components/ViewWrapper';
import AppBar from '../../../components/AppBar';
import ViewContent from '../../../components/ViewContent';
import {Button, Card, CardContent, Grid, TextField} from '@material-ui/core';
import CampoFormulario from '../../../components/CampoFormulario';
import BarraAcoes from '../../../components/BarraAcoes';
import * as yup from 'yup';
import Formulario from '../../../components/Formulario';
import Rota from '../Rota';
import {useHistory} from 'react-router-dom';
import {NameToken} from '../../../modules/NameToken';

interface Props {
  bloc?: CadastroRotasBloc;
}

const formSchema = yup.object().shape({
  NOME: yup.string().required().min(3).max(20),
  OBSERVACAO: yup.string().transform((value) => value || null).min(3).max(50).nullable(true),
});


function CadastroRotasView(props: Props) {
  const history = useHistory();
  const {bloc} = props;
  const {rota, erros} = props.bloc;

  const onSubmit = () => {
    formSchema.validate(rota)
        .then(async () => {
          await bloc.cadastrar();

          history.push(NameToken.ROTAS.endpoint);
        })
        .catch((erro) => {
          erros[erro.path] = erro.message;
        });
  };

  return (
    <>
      <AppBar title="Cadastro de rotas"/>
      <ViewContent>
        <Card>
          <CardContent>
            <Formulario<Rota> objeto={rota} erros={erros}>
              <Grid container>
                <Grid item md={6} xs={12}>
                  <CampoFormulario propriedade="NOME">
                    <TextField label="Nome"/>
                  </CampoFormulario>
                </Grid>
                <Grid item md={6} xs={12}>
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
}

export default bindView(CadastroRotasView, CadastroRotasBloc);
