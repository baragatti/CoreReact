import {observable} from 'mobx';
import HasCodigo from '../../shared/HasCodigo';

export default class Exemplo implements HasCodigo {
  CODIGO: number;
  @observable NOME?: string;
  @observable OBSERVACAO?: string;
}
