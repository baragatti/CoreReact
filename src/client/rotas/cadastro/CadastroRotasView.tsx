import React from 'react';
import CadastroRotasBloc from './CadastroRotasBloc';
import {bindView} from '../../../components/ViewWrapper';
import AppBar from '../../../components/AppBar';
import ViewMain from '../../../components/ViewMain';
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
  store?: CadastroRotasBloc;
}

const formSchema = yup.object().shape({
  NOME: yup.string().required().min(3).max(20),
  OBSERVACAO: yup.string().transform((value) => value || null).min(3).max(50).nullable(true),
});


function CadastroRotasView(props: Props) {
  const history = useHistory();
  const {store} = props;
  const {rota, erros} = props.store;

  const onSubmit = () => {
    formSchema.validate(rota)
        .then(async () => {
          await store.cadastrar();

          history.push(NameToken.ROTAS.endpoint);
        })
        .catch((erro) => {
          erros[erro.path] = erro.message;
        });
  };

  return (
    <>
      <AppBar title="Cadastro de rotas"/>
      <ViewMain>
        <ViewContent>
          <Card>
            <CardContent>
              <Formulario<Rota> objeto={rota} erros={erros}>
                <Grid container>
                  <Grid item md={6}>
                    <CampoFormulario propriedade="NOME">
                      <TextField label="Nome"/>
                    </CampoFormulario>
                  </Grid>
                  <Grid item md={6}>
                    <CampoFormulario propriedade="OBSERVACAO">
                      <TextField label="Observação"/>
                    </CampoFormulario>
                  </Grid>
                </Grid>
              </Formulario>
            </CardContent>
          </Card>
        </ViewContent>
      </ViewMain>
      <BarraAcoes>
        <Button color="primary" variant="contained" onClick={onSubmit}>
          Salvar
        </Button>
      </BarraAcoes>
    </>
  );
}

export default bindView(CadastroRotasView, CadastroRotasBloc);
