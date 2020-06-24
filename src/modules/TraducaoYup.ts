/* eslint-disable no-template-curly-in-string */
import {setLocale} from 'yup';

const traducaoPadrao = {
  default: 'Valor inválido',
  required: 'O campo é obrigatório',
};

const traducao = {
  mixed: {
    ...traducaoPadrao,
    oneOf: 'O campo deve ser um dos seguintes valores: ${values}',
    notOneOf: 'O campo não pode ser um dos seguintes valores: ${values}',
  },
  string: {
    ...traducaoPadrao,
    length: 'O campo deve ter exatamente ${length} caracteres',
    min: 'O campo deve ter pelo menos ${min} caracteres',
    max: 'O campo deve ter no máximo ${max} caracteres',
    email: 'O campo tem o formato de e-mail inválido',
    url: 'O campo deve ter um formato de URL válida',
    trim: 'O campo não deve conter espaços no início ou no fim.',
    lowercase: 'O campo deve estar em maiúsculo',
    uppercase: 'O campo deve estar em minúsculo',
  },
  number: {
    ...traducaoPadrao,
    min: 'O campo deve ser no mínimo ${min}',
    max: 'O campo deve ser no máximo ${max}',
    lessThan: 'O campo deve ser menor que ${less}',
    moreThan: 'O campo deve ser maior que ${more}',
    notEqual: 'O campo não pode ser igual à ${notEqual}',
    positive: 'O campo deve ser um número posítivo',
    negative: 'O campo deve ser um número negativo',
    integer: 'O campo deve ser um número inteiro',
    required: 'O campo deve ser preenchido',
  },
  date: {
    ...traducaoPadrao,
    min: 'O campo deve ser maior que a data ${min}',
    max: 'O campo deve ser menor que a data ${max}',
  },
  array: {
    ...traducaoPadrao,
    min: 'O campo deve ter no mínimo ${min} itens',
    max: 'O campo deve ter no máximo ${max} itens',
  },
};

setLocale(traducao);

export default {
  registrar: () => {
    setLocale(traducao);
  },
};
