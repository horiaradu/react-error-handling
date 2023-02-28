import { AxiosError } from 'axios';
import { makeAutoObservable } from 'mobx';
import { genericErrorHandler } from '../genericErrorHandler';

export class ErrorStore {
  errors: AxiosError<any>[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  handleError = async (error: any) => {
    if (!genericErrorHandler(error)) {
      this.errors.push(error);
    }
  };

  hasError(code: string) {
    return this.errors.some(
      (error) => error.response?.data?.error?.code === code,
    );
  }

  clearError(code: string) {
    this.errors = this.errors.filter(
      (error) => error.response?.data?.error?.code !== code,
    );
  }
}
