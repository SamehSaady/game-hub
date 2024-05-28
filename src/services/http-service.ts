// A generic HTTP Service.
import { AxiosRequestConfig } from "axios";
import apiClient from "./api-client";

export interface FetchResponse<T> {
  count: number; // The number of retrieved objects from API response.
  results: T[]; // The retrieved objects from API response.
}
// In some cases (like retrieving Games) the [count] doesn't equal to the [results]
// as the [results] contains the objects per page while the [count] contains all the requested objects.

// <T> is the Entity to fetch its objects.
export class HttpService<T> {
  endPoint: string;

  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  getAll(requestConfig?: AxiosRequestConfig) {
    const controller = new AbortController();
    const request = apiClient.get<FetchResponse<T>>(this.endPoint, {
      ...requestConfig,
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }
}

const create = <T>(endPoint: string) => new HttpService<T>(endPoint);

export default create;
