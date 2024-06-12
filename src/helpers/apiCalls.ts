import axios from "axios";
import { PositionInterface } from "./interfaces";
import { parsePositionRequest } from "./apiParsers";

// const API_BASE_URL = "http://192.168.0.102:8000";

const POSITION_ENDPOINT = "/api/v1/posicion";

// axios.defaults.baseURL = API_BASE_URL;
// Disable axios protection policies
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export const postPosition = async (data: PositionInterface) => {
  const parsedData = parsePositionRequest(data);

  return axios
    .post(POSITION_ENDPOINT, parsedData)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
};
