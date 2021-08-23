import create from "zustand";

type State = {
  logged: boolean;
  money: number;
  betSize: number;
  setLogged: (login: boolean) => void;
};

export const useStore = create<State>((set) => ({
  logged: localStorage.getItem("logged") === "authenticated" || false,
  money: 0,
  betSize: 10,
  deposit: (count: number) => set((state) => ({ money: state.money + count })),
  withdraw: (count: number) => set((state) => ({ money: state.money - count })),
  setBetSize: (size: number) => set(() => ({ money: size })),
  setLogged: (login: boolean) => {
    set(() => ({ logged: login }));
    !login
      ? localStorage.setItem("logged", "")
      : localStorage.setItem("logged", "authenticated");
  },
  bet: () => set((state) => ({ money: state.money - state.betSize })),
  winBet: () => set((state) => ({ money: state.money + state.betSize * 2 })),
}));
