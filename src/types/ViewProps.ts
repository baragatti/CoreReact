import Bloc from './Bloc';

export default interface ViewProps<T extends Bloc> {
  bloc?: T;
}
