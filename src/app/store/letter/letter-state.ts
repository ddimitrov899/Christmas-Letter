export interface IAddLetterState {
  addSuccess: boolean;
}
export interface IGetLetterState {
  getSuccess: boolean;
  letter: string;
  name: string;
  age: number;
  city: string;
}

export interface IGetLettersState {
  getSuccess: boolean;
  letters: Array<IGetLetterState>;
}

export const initialAddLetterState: IAddLetterState = {
  addSuccess: false
};

export const initialGetLetterState: IGetLetterState = {
  getSuccess: false,
  letter: 'Dear Santa, ',
  name: null,
  age: 0,
  city: null,
};

export const initialGetLettersState: IGetLettersState = {
  getSuccess: false,
  letters: []
};
