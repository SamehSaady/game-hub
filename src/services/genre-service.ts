import create, { FetchResponse } from "./http-service";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export default create<Genre>("/genres");
