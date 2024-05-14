import create from "./http-service";
import { Platform } from "./platform-service";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {
    platform: Platform;
  }[];
  metacritic: number;
  rating_top: number; // Returns an int number from API from 0 to 5.
}

export default create<Game>("/games");
