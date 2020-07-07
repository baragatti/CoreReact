import {action, observable} from 'mobx';
import Exemplo from '../Exemplo';

export default class ConsultaExemploBloc {
  @observable exemplos: Exemplo[] = [];
  @observable totalRegistros: number = 0;
  nome: string = '';
  ordenacao: string = '1';

  @action
  buscarRegistros() {
    // TODO Trocar por request na API

    const registros = [
      {
        CODIGO: 1,
        NOME: 'Exemplo 1',
      },
      {
        CODIGO: 2,
        NOME: 'Exemplo 2',
      },
      {
        CODIGO: 3,
        NOME: 'Exemplo 3',
      },
    ];

    if (this.ordenacao === '1') {
      registros.sort((a, b) => a.NOME.localeCompare(b.NOME));
    } else {
      registros.sort((a, b) => b.NOME.localeCompare(a.NOME));
    }

    if (this.nome.length === 0) {
      this.exemplos = registros;
    } else {
      this.exemplos = registros.filter((value: Exemplo) => value.NOME.includes(this.nome));
    }
    this.totalRegistros = this.exemplos.length;
  }

  @action
  filtrar(filtros: string, ordenacoes: string) {
    this.nome = filtros;
    this.ordenacao = ordenacoes;

    this.buscarRegistros();
  }
}
