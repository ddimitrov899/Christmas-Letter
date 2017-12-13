export interface IAddLetterState {
  getSuccess: boolean;
}

export interface IGetLetterState {
  getSuccess: boolean;
  letter: string;
  createdBy: string;
  age: number;
  location: string;
}

export interface IGetLettersState {
  getSuccess: boolean;
  letters: Array<IGetLetterState>;
}

export const initialAddLetterState: IAddLetterState = {
  getSuccess: false
};

export const initialGetLetterState: IGetLetterState = {
  getSuccess: false,
  letter: 'Dear Santa, ',
  createdBy: null,
  age: 0,
  location: null,
};

export const initialGetLettersState: IGetLettersState = {
  getSuccess: false,
  letters: []
};
