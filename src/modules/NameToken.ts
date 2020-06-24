import React from 'react';
import RotasView from '../client/rotas/consulta/RotasView';
import CadastroRotasView from '../client/rotas/cadastro/CadastroRotasView';

export class NameToken {
  public static allValues: NameToken[] = [];

  static readonly ROTAS = new NameToken({endpoint: 'rotas', component: RotasView});
  static readonly ROTAS_CADASTRO = new NameToken({endpoint: 'rotas-cadastro', component: CadastroRotasView});

  private constructor(private readonly tokenData: TokenData) {
    NameToken.allValues.push(this);
  }

  get endpoint(): string {
    return this.tokenData.endpoint;
  }

  get component(): React.ComponentType<any> | undefined {
    return this.tokenData.component;
  }

  get queryParam(): { key: string, value: string } | undefined {
    return this.tokenData.queryParam;
  }

  static fromEndPoint(endpoint: string): NameToken | undefined {
    return NameToken.allValues.find((value) => value.tokenData.endpoint === endpoint.replace('/', ''));
  }

  toString(): string {
    return this.tokenData.endpoint;
  }
}

interface TokenData {
  endpoint: string;
  queryParam?: { key: string, value: string };
  component?: React.ComponentType<any>
}
