import { AxiosError } from 'axios';

import { toast } from 'react-toastify';

const knownErrors = ['INVALID_TITLE'];

export function genericErrorHandler(error: AxiosError<any>) {
  if (!knownErrors.includes(error.response?.data?.error?.code)) {
    console.error(error);
    toast('fail');
  }
}
