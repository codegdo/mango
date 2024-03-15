export interface DelayOptions {
  count?: number;
  maxAttempts?: number;
  delayMs?: number;
}

export interface RequestOptions extends RequestInit {
  baseUrl?: string;
  params?: Record<string, string | number>;
  prefix?: string;
  delay?: DelayOptions;
}

export interface DefaultConfigs {
  contentType: string;
  credentials: RequestCredentials;
}

export interface ResponseData<T> {
  status: number;
  statusText: string;
  ok: boolean;
  data: T;
  redirected: boolean;
  //headers: Headers;
  //url: string;
  //type: ResponseType;
  //bodyUsed: boolean;
  //contentType: string;
  //contentLength: number | null;
  //responseURL: string;
}

export enum HTTP_METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

class HttpHelper {
  private contentType: string;
  private credentials: RequestCredentials;

  constructor(configs?: DefaultConfigs) {
    this.contentType = configs?.contentType || 'application/json';
    this.credentials = configs?.credentials || 'include';
  }

  private requestOptions({
    headers,
    method,
    body,
    ...options
  }: RequestOptions): RequestInit {
    return {
      headers: {
        'Content-Type': this.contentType,
        Accept: this.contentType,
        ...headers,
      },
      method: method || (body ? HTTP_METHODS.POST : HTTP_METHODS.GET),
      body: typeof body === 'string' ? body : JSON.stringify(body),
      credentials: this.credentials,
      ...options,
    };
  }

  async request<T>(
    url: string,
    options: RequestOptions = {}
  ): Promise<ResponseData<T>> {
    return this._fetch<T>(url, this.requestOptions(options));
  }

  async get<T>(
    url: string,
    options: RequestOptions = {}
  ): Promise<ResponseData<T>> {
    options.method = HTTP_METHODS.GET;
    return this._fetch<T>(url, this.requestOptions(options));
  }

  async post<T>(
    url: string,
    options: RequestOptions = {}
  ): Promise<ResponseData<T>> {
    options.method = HTTP_METHODS.POST;
    return this._fetch<T>(url, this.requestOptions(options));
  }

  async patch<T>(
    url: string,
    options: RequestOptions = {}
  ): Promise<ResponseData<T>> {
    options.method = HTTP_METHODS.PATCH;
    return this._fetch<T>(url, this.requestOptions(options));
  }

  async put<T>(
    url: string,
    options: RequestOptions = {}
  ): Promise<ResponseData<T>> {
    options.method = HTTP_METHODS.PUT;
    return this._fetch<T>(url, this.requestOptions(options));
  }

  async delete<T>(
    url: string,
    options: RequestOptions = {}
  ): Promise<ResponseData<T>> {
    options.method = HTTP_METHODS.DELETE;
    return this._fetch<T>(url, this.requestOptions(options));
  }

  async _fetch<T>(
    url: string,
    options: RequestOptions
  ): Promise<ResponseData<T>> {
    try {
      const res = await fetch(url, options);

      return {
        status: res.status,
        statusText: res.statusText,
        ok: res.ok,
        data: (await res.json()) as T,
        redirected: res.redirected,
        //headers: res.headers,
        //url: res.url,
        //type: res.type,
        //bodyUsed: res.bodyUsed,
        //contentType: res.headers.get('Content-Type') || '',
        //contentLength: Number(res.headers.get('Content-Length')) || null,
        //responseURL: res.url,
      };
    } catch (error) {
      console.error('Fetch Error:', error);
      throw error;
    }
  }
}

export const http = new HttpHelper();
