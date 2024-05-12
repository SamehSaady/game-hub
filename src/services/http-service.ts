import apiClient from "./api-client";

class HttpService<T> {
  endPoint: string;

  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  getAll() {
    const controller = new AbortController();
    const request = apiClient.get<T>(this.endPoint, {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }
}

const create = <T>(endPoint: string) => new HttpService<T>(endPoint);

export default create;
