import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contents: '',
  name: '',
  password: '',
};

const commentTextSlice = createSlice({
  name: 'commentText',
  initialState,
  reducers: {
    clearText: (state) => ({ ...state, contents: '', name: '', password: '' }),
    changeContents: (state, action) => ({ ...state, contents: action.payload }),
    changeName: (state, action) => ({ ...state, name: action.payload }),
    changePassword: (state, action) => ({ ...state, password: action.payload }),
  },
});

export const { clearText, changeTitle, changeContents, changeName, changePassword } =
  commentTextSlice.actions;
export default commentTextSlice.reducer;
