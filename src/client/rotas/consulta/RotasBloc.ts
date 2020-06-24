import {action, observable} from 'mobx';
import Rota from '../Rota';
import Store from '../../../components/Store';
import RotasService from '../RotasService';
import RotasServiceImpl from '../RotasServiceImpl';

export default class RotasBloc extends Store {
  private rotasService: RotasService = new RotasServiceImpl();
  @observable rotas: Rota[] = [];
  filtros: string = '';
  ordenacoes: string = '';

  @action
  async buscarRegistros() {
    const retorno = await this.rotasService.get('CODIGO,NOME,OBSERVACAO', this.filtros, this.ordenacoes, 0, 50);

    this.rotas = retorno.REGISTROS;
  }

  @action
  filtrar(filtros: string, ordenacoes: string) {
    this.filtros = filtros;
    this.ordenacoes = ordenacoes;

    this.buscarRegistros();
  }
}
