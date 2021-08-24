import { API } from "./API";

export const getRandomCards = (count: number) => {
  return API.get(`/new/draw/?count=${count}`);
};
