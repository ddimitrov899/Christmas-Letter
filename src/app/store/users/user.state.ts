export interface IUsersState {
  userRegister: boolean;
  userAuthenticate: boolean;
  token: string;
  lastname: string;
}

export const initialState: IUsersState = {
  userRegister: false,
  userAuthenticate: false,
  token: null,
  lastname: null
};
