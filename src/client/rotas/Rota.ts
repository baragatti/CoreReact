import {observable} from 'mobx';
import HasCodigo from '../../shared/HasCodigo';

export default class Rota implements HasCodigo {
  CODIGO: number;
  @observable NOME?: string;
  @observable OBSERVACAO?: string;
}
