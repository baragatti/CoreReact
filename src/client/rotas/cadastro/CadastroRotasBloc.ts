import {action, observable} from 'mobx';
import Rota from '../Rota';
import Bloc from '../../../types/Bloc';
import RotasService from '../RotasService';
import RotasServiceImpl from '../RotasServiceImpl';

export default class CadastroRotasBloc extends Bloc {
  private rotasService: RotasService = new RotasServiceImpl();
  @observable rota: Rota = new Rota();
  @observable erros: {[key: string]: string} = {};

  @action
  async cadastrar() {
    await this.rotasService.post(this.rota);

    this.rota = new Rota();
    this.erros = {};
  }
}
