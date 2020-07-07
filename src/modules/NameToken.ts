import React from 'react';
import ConsultaExemploView from '../client/exemplo/consulta/ConsultaExemploView';
import CadastroExemploView from '../client/exemplo/cadastro/CadastroExemploView';

export class NameToken {
  public static allValues: NameToken[] = [];

  static readonly EXEMPLO_CONSULTA = new NameToken({endpoint: 'exemplo', component: ConsultaExemploView});
  static readonly EXEMPLO_CADASTRO = new NameToken({endpoint: 'exemplo-cadastro', component: CadastroExemploView});

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
