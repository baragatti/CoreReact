import {action, observable} from 'mobx';
import Exemplo from '../Exemplo';

export interface ExemploFiltro {
  nome: string;
  ordenacao: string;
}

export default class ConsultaExemploBloc {
  @observable exemplos: Exemplo[] = [];
  @observable totalRegistros: number = 0;
  filtro: ExemploFiltro = {
    nome: '',
    ordenacao: '1',
  };

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

    if (this.filtro.ordenacao === '1') {
      registros.sort((a, b) => a.NOME.localeCompare(b.NOME));
    } else {
      registros.sort((a, b) => b.NOME.localeCompare(a.NOME));
    }

    if (this.filtro.nome.length === 0) {
      this.exemplos = registros;
    } else {
      registros.filter((value: Exemplo) => value.NOME.includes(this.filtro.nome));
    }
    this.totalRegistros = registros.length;
  }

  @action
  filtrar(filtro: ExemploFiltro) {
    this.filtro = filtro;
    this.buscarRegistros();
  }
}
