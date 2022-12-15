import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  contents: '',
  name: '',
  password: '',
};

const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    clearText: (state) => ({ ...state, title: '', contents: '', name: '', password: '' }),
    changeTitle: (state, action) => ({ ...state, title: action.payload }),
    changeContents: (state, action) => ({ ...state, contents: action.payload }),
    changeName: (state, action) => ({ ...state, name: action.payload }),
    changePassword: (state, action) => ({ ...state, password: action.payload }),
  },
});

export const { clearText, changeTitle, changeContents, changeName, changePassword } =
  textSlice.actions;
export default textSlice.reducer;
