interface IUserData {
  login: string;
  password: string;
}

export const validUsersData: IUserData[] = [
  { login: "admin", password: "123456" },
];

export const HOME_PATH = "/";
export const LOGIN_PATH = "/login";
