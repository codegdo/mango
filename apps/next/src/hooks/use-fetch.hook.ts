'use client'
import { useRef, useState } from 'react';
import { http, DelayOptions, RequestOptions, ResponseData, utils } from '@/helpers';
import { envAPI } from '@/actions';

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
  const [data, setData] = useState<ResponseData<T>>();
  const [error, setError] = useState<Error>();
  const controllerRef = useRef(new AbortController());
  const timeoutRef = useRef<NodeJS.Timeout>();

  const clearTimeoutIfSet = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }
  };

  const delay = async (responsePromise: Promise<ResponseData<T>>, { count = 0, maxAttempts = 5, delayMs = 1000 }: DelayOptions) => {
    clearTimeoutIfSet();

    const timeoutPromise = new Promise<string>((resolve) => {
      timeoutRef.current = setTimeout(() => {
        resolve('TIMEOUT');
      }, delayMs);
    });

    try {
      const result = await Promise.race([responsePromise, timeoutPromise]);

      if (result === 'TIMEOUT' && count < maxAttempts) {
        setStatus('DELAY');
        await delay(responsePromise, { count: count + 1, maxAttempts, delayMs });
      } else if (result === 'TIMEOUT') {
        setStatus('ABORT');
        return await responsePromise;
      } else {
        return result as ResponseData<T>;
      }
    } catch (error) {
      // Handle promise rejection
      console.error('Error during delay:', error);
      const err = error as Error;

      if (err?.name === 'AbortError') {
        setStatus('CANCEL');
      }

      throw error;
    }
  };

  const httpRequest = async (
    requestUrl?: string,
    requestOptions?: RequestOptions
  ) => {
    try {
      // Merge provided requestOptions with default options or an empty object
      const mergedOptions = { ...options, ...requestOptions };
      //const apiEnv = await envAPI();

      // Extract baseUrl and path from options or fetch them from default sources
      const baseUrl = mergedOptions.baseUrl || process.env.API_URL;
      const path = requestUrl || url;

      // Ensure essential parameters are provided
      if (!baseUrl || !path) {
        throw new Error('baseUrl and path must be provided and cannot be null, undefined, or an empty string.');
      }

      // Construct full URL with query parameters
      const fullUrl = utils.stringifyUrl(`${baseUrl}${path}`, mergedOptions.params);

      setStatus('LOADING');

      const responsePromise = http.request<T>(fullUrl, mergedOptions);

      // Perform request with or without delay based on options
      const result = mergedOptions.delay ? await delay(responsePromise, mergedOptions.delay) : await responsePromise;

      setData(result);
      setStatus('SUCCESS');
      return result;
    } catch (error) {
      // Handle errors by updating state with error and status
      setError(error as Error);
      setStatus('ERROR');
      return error;
    }
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
    controller: controllerRef.current,
  };
};
