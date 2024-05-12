import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",

  params: {
    key: "2e9c955572734b2c8dd874d1ad285f61",
  },
});

export { CanceledError };
