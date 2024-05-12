import create, { FetchResponse } from "./http-service";

export interface Genre {
  id: number;
  name: string;
}

export default create<Genre>("/genres");
