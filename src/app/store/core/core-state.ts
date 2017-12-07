export interface ICoreState {
  isSuccess: boolean;
  message: string;

}

export const initialState: ICoreState = {
  isSuccess: false,
  message: null,
};
