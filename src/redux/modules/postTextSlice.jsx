import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  contents: '',
  name: '',
  password: '',
};

const postTextSlice = createSlice({
  name: 'postText',
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
  postTextSlice.actions;
export default postTextSlice.reducer;
