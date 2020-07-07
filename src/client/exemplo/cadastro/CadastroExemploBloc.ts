import {action, observable} from 'mobx';
import Exemplo from '../Exemplo';

export default class CadastroExemploBloc {
  @observable rota: Exemplo = new Exemplo();
  @observable erros: {[key: string]: string} = {};

  @action
  cadastrar() {
    // TODO Adicionar request API

    this.rota = new Exemplo();
    this.erros = {};
  }
}
