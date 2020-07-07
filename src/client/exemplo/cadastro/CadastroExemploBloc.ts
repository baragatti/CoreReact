import {action, observable} from 'mobx';
import Exemplo from '../Exemplo';

export default class CadastroExemploBloc {
  @observable exemplo: Exemplo = new Exemplo();
  @observable erros: {[key: string]: string} = {};

  @action
  cadastrar() {
    // TODO Adicionar request API

    this.exemplo = new Exemplo();
    this.erros = {};
  }
}
