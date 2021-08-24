interface IUserData {
  login: string;
  password: string;
}

interface IBetSize {
  id: number;
  size: number;
  active: boolean;
}

export const validUsersData: IUserData[] = [
  { login: "admin", password: "123456" },
];

export const HOME_PATH = "/";
export const LOGIN_PATH = "/login";

export const betSizes: IBetSize[] = [
  { id: 1, size: 10, active: true },
  { id: 2, size: 20, active: false },
  { id: 3, size: 30, active: false },
  { id: 4, size: 50, active: false },
  { id: 5, size: 100, active: false },
];

export const cardsApiBaseUrl = "https://deckofcardsapi.com/api/deck";

export const cardValues: string[] = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "JACK",
  "QUEEN",
  "KING",
  "ACE",
];
