import {useCallback, useRef} from 'react';

export default class Debouncer {
  private timer: any = null;
  private fn: Function;
  private delay: number;

  constructor(fn: Function, delay: number) {
    this.fn = fn;
    this.delay = delay;
  }

  private onFinish = (params: any) => {
    this.timer = null;

    this.fn.apply(null, params);
  };

  public execute(...params: any) {
    if (this.timer != null) {
      clearTimeout(this.timer);
    }

    this.timer = setTimeout(() => this.onFinish(params), this.delay);
  }
}

export const useDebouncer = (fn: Function, delay: number) => {
  const ref = useRef(new Debouncer(fn, delay));

  return useCallback(() => ref.current.execute(), []);
};
