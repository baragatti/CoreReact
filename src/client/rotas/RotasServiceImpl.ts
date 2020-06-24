/* eslint-disable @typescript-eslint/no-unused-vars */
import RotasService from './RotasService';
import RetornoRegistros from '../../shared/RetornoRegistros';
import Rota from './Rota';
import RetornoPost from '../../shared/RetornoPost';

export default class RotasServiceImpl implements RotasService {
  async get(colunas: string, filtros: string, ordenacoes: string, registroInicial: number, numeroRegistros: number):
    Promise<RetornoRegistros<Rota>> {
    const registros = [
      {
        CODIGO: 2,
        NOME: 'Centro-Oeste',
      },
      {
        CODIGO: 1,
        NOME: 'Litoral',
      },
      {
        CODIGO: 3,
        NOME: 'Sul',
      },
    ];

    if (filtros.includes('NOME:')) {
      registros.pop();
    }

    if (ordenacoes.includes(' ASC')) {
      registros.sort((a, b) => a.NOME.localeCompare(b.NOME));
    } else if (ordenacoes.includes(' DESC')) {
      registros.sort((a, b) => b.NOME.localeCompare(a.NOME));
    }

    return {
      TOTAL_REGISTROS: registros.length,
      REGISTROS: registros,
    };
  }

  async post(rota: Rota): Promise<RetornoPost> {
    return {
      REFERENCIAS: {
        CODIGO: 4,
      },
    };
  }

  async put(codigo: string, rota: Rota): Promise<RetornoPost> {
    return {
      REFERENCIAS: {
        CODIGO: 4,
      },
    };
  }

  async delete(codigo: string): Promise<void> {
    return Promise.resolve();
  }
}
