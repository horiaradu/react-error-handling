import { AxiosError } from 'axios';

import { toast } from 'react-toastify';

export function genericErrorHandler(error: AxiosError<any>) {
  if (error.response?.data?.error?.code === 'GENERIC_ERROR') {
    console.error(error);
    toast('fail');
  }
}
