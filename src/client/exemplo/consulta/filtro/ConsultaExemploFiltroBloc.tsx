import {action, observable} from 'mobx';

export class ConsultaExemploFiltroBloc {
  @observable nome: string = '';
  @observable ordenacao: string = '1';

  @action
  limpar() {
    this.nome = '';
    this.ordenacao = '1';
  }
}
