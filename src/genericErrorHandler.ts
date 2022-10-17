import { AxiosError } from 'axios';

import { toast } from 'react-toastify';

export function genericErrorHandler(error: AxiosError<any>) {
  const code = error.response?.data?.error?.code;
  console.error(error);
  if (code === 'GENERIC_ERROR') {
    toast('fail');
  } else {
    toast(code);
  }
}
