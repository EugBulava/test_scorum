import axios from "axios";
import { cardsApiBaseUrl } from "../consts/globalConsts";

export const API = axios.create({
  baseURL: cardsApiBaseUrl,
});
