type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export const apiRequest = async <T>({
  endpoint,
  method,
  payload,
  configOptions,
}: {
  endpoint: string;
  method: HttpMethod;
  payload?: T;
  configOptions?: RequestInit;
}) => {
  const requestOptions: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    ...configOptions,
  };

  if (method === 'POST' || method === 'PUT') {
    requestOptions.body = JSON.stringify(payload);
  }

  const response = await fetch(endpoint, requestOptions);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.error?.message);
  }

  return data;
};
