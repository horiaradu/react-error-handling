import { AxiosError } from 'axios';

import { toast } from 'react-toastify';

export function genericErrorHandler(error: AxiosError) {
  toast('fail');
}
