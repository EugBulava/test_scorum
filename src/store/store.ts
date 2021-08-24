import create from "zustand";

type State = {
  logged: boolean;
  money: number;
  betSize: number;
  setLogged: (login: boolean) => void;
  withdraw: (count: number) => void;
  deposit: (count: number) => void;
  setBetSize: (size: number) => void;
  bet: () => void;
  winBet: () => void;
  draw: () => void;
};

export const useStore = create<State>((set) => ({
  logged: Boolean(localStorage.getItem("logged")) || false,
  money: Number(localStorage.getItem("money")) || 0,
  betSize: 10,
  deposit: (count: number) =>
    set((state) => {
      localStorage.setItem("money", String(state.money + count));
      return { money: state.money + count };
    }),
  withdraw: (count: number) =>
    set((state) => {
      localStorage.setItem("money", String(state.money - count));
      return { money: state.money - count };
    }),
  setBetSize: (size: number) => set(() => ({ betSize: size })),
  setLogged: (login: boolean) => {
    set(() => ({ logged: login }));
    !login
      ? localStorage.setItem("logged", "")
      : localStorage.setItem("logged", "authenticated");
  },
  bet: () =>
    set((state) => {
      localStorage.setItem("money", String(state.money - state.betSize));
      return { money: state.money - state.betSize };
    }),
  winBet: () =>
    set((state) => {
      localStorage.setItem("money", String(state.money + state.betSize * 2));
      return { money: state.money + state.betSize * 2 };
    }),
  draw: () =>
    set((state) => {
      localStorage.setItem("money", String(state.money + state.betSize));
      return { money: state.money + state.betSize };
    }),
}));
