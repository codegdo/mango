import { useState } from "react";
import { http, RequestOptions, utils } from '@/helpers';

export enum FetchStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
  DELAY = 'DELAY',
  CANCEL = 'CANCEL',
  ABORT = 'ABORT',
}

export const useFetch = (url?: string, params?: Record<string, string | number>) => {
  const [status, setStatus] = useState();

  const request = async (options: RequestOptions = {}) => {
    const baseUrl = options.baseUrl || process.env.BASE_URL || 'https://jsonplaceholder.typicode.com';
    const path = options.url || url;
    const query = options.params || params || {};
    const strUrl = utils.stringifyUrl(`${baseUrl}${path}`, query)
    return http.request(strUrl);
  }

  const mutation = async (options?: RequestOptions) => {
    return await request(options);
  }

  const query = async (options?: RequestOptions) => {
    return request(options);
  }

  return { query, mutation };
}