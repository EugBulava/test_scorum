import { API } from "./API";

interface ICard {
  image: string;
  value: string;
}

type ReturnedData = {
  data: {
    cards: ICard[];
  };
};

export const getRandomCards = (count: number): Promise<ReturnedData> => {
  return API.get(`/new/draw/?count=${count}`);
};
