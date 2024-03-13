import { useRef, useState } from 'react';
import { http, RequestOptions, utils } from '@/helpers';
import { getBaseUrl } from '@/actions';

export enum FetchStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
  DELAY = 'DELAY',
  CANCEL = 'CANCEL',
  ABORT = 'ABORT',
}

export const useFetch = <T>(url?: string, options?: RequestOptions) => {
  const [status, setStatus] = useState<keyof typeof FetchStatus>('IDLE');
  const [data, setData] = useState<T>();
  const [error, setError] = useState<Error>();
  const { current: controller } = useRef(new AbortController());

  const httpRequest = async (
    requestUrl?: string,
    requestOptions?: RequestOptions
  ) => {
    const baseUrl =
      requestOptions?.baseUrl || options?.baseUrl || (await getBaseUrl());
    const path = requestUrl || url;
    const query = requestOptions?.params || options?.params;

    if (!baseUrl || !path) {
      throw new Error(
        'baseUrl and path must be provided and cannot be null, undefined, or empty string.'
      );
    }

    const strUrl = utils.stringifyUrl(`${baseUrl}${path}`, query);

    return http.request<T>(strUrl, requestOptions || options || {});
  };

  const mutation = async (url?: string, options?: RequestOptions) => {
    return httpRequest(url, options);
  };

  const query = async (url?: string, options?: RequestOptions) => {
    return httpRequest(url, options);
  };

  return {
    status,
    data,
    error,
    query,
    mutation,
    controller,
  };
};
