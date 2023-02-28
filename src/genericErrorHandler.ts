import { AxiosError } from 'axios';

import { toast } from 'react-toastify';

const knownErrors = ['INVALID_TITLE'];

export function genericErrorHandler(error: AxiosError<any>): boolean {
  const code = error.response?.data?.error?.code;
  if (!knownErrors.includes(code)) {
    console.error(error);
    if (code === 'GENERIC_ERROR') {
      toast('fail');
    } else {
      toast(code);
    }
    return true;
  }

  return false;
}
