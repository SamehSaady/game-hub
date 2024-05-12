// A generic HTTP Service.
import apiClient from "./api-client";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

// <T> is the Entity to fetch its objects.
export class HttpService<T> {
  endPoint: string;

  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  getAll() {
    const controller = new AbortController();
    const request = apiClient.get<FetchResponse<T>>(this.endPoint, {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }
}

const create = <T>(endPoint: string) => new HttpService<T>(endPoint);

export default create;
