export interface IUsersState {
  userRegister: boolean;
  userAuthenticate: boolean;
  token: string;
  familyName: string;
  email: string;
}

export const initialState: IUsersState = {
  userRegister: false,
  userAuthenticate: false,
  token: null,
  familyName: null,
  email: null
};
