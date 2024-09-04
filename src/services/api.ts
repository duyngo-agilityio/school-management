import { BASE_URL } from '@/constants/env';

interface IApiClient {
  baseURL: string;
  headers?: HeadersInit;
}

interface RequestInitExtended extends Omit<RequestInit, 'body'> {
  body?: object | null;
}

export class ApiClient {
  baseURL: string;
  config: RequestInit;
  private static apiClientInstance: ApiClient;

  private constructor(baseURL: string, config: RequestInit) {
    this.baseURL = baseURL;
    this.config = config;
  }

  static create(params: IApiClient): ApiClient {
    const { baseURL, headers } = params;

    if (!this.apiClientInstance)
      this.apiClientInstance = new ApiClient(baseURL, { headers });

    return this.apiClientInstance;
  }

  fetchWithConfig(url: string, config?: RequestInit) {
    return fetch(`${this.baseURL}${url}`, {
      ...this.config,
      ...config,
      headers: {
        ...this.config.headers,
        ...config?.headers,
      },
    });
  }

  async get<T>(url: string, config: RequestInit = {}): Promise<T> {
    const response = await this.fetchWithConfig(url, config);

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const data: T = await response.json();
    return data;
  }

  async post<T>(url: string, config: RequestInitExtended = {}): Promise<T> {
    const response = await this.fetchWithConfig(url, {
      ...config,
      method: 'POST',
      body: JSON.stringify(config.body),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to post: ${response.statusText}`);
    }

    const data: T = await response.json();

    return data;
  }

  async put<T>(url: string, config: RequestInitExtended = {}): Promise<T> {
    const response = await this.fetchWithConfig(url, {
      ...config,
      method: 'PUT',
      body: JSON.stringify(config.body),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to put: ${response.statusText}`);
    }

    const data: T = await response.json();

    return data;
  }

  async delete<T>(url: string, config?: RequestInit): Promise<T> {
    const response = await this.fetchWithConfig(url, {
      ...config,
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`Failed to delete: ${response.statusText}`);
    }

    const data: T = await response.json();

    return data;
  }
}

export const apiClient = ApiClient.create({ baseURL: BASE_URL });
