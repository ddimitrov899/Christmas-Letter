export interface IStatsState {
  statsSuccess: boolean;
  users: number;
  sendLetters: number;
}

export const initialState: IStatsState = {
  statsSuccess: false,
  users: 0,
  sendLetters: 0
};
