import {action, observable} from 'mobx';
import {ExemploFiltro} from '../ConsultaExemploBloc';

export class ConsultaExemploFiltroBloc implements ExemploFiltro {
  @observable nome: string = '';
  @observable ordenacao: string = '1';

  @action
  limpar() {
    this.nome = '';
    this.ordenacao = '1';
  }
}
