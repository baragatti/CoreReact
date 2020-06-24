import RetornoRegistros from '../../shared/RetornoRegistros';
import Rota from './Rota';
import RetornoPost from '../../shared/RetornoPost';

export default interface RotasService {
  get(colunas: string,
      filtros: string,
      ordenacoes: string,
      registroInicial: number,
      numeroRegistros: number
  ): Promise<RetornoRegistros<Rota>>;

  post(rota: Rota): Promise<RetornoPost>;

  put(codigo: string, rota: Rota): Promise<RetornoPost>;

  delete(codigo: string): Promise<void>;
};
