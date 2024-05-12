import create from "./http-service";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {
    platform: Platform;
  }[];
  metacritic: number;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export default create<Game>("/games");
