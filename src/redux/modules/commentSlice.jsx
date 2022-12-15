import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  comments: [],
  comment: {
    postId: 0,
    contents: '',
    name: '',
    password: '',
    id: 0,
    createdAt: 'yyyy. mm. dd. hh:mm:ss',
  },
  isLoading: false,
  error: null,
};

export const createComment = createAsyncThunk('post/CREATE_COMMENT', async (payload, thunkAPI) => {
  try {
    await axios.post('http://localhost:3001/comments', payload);
    return '게시글 작성 완료';
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const readComment = createAsyncThunk('post/READ_COMMENT', async (payload, thunkAPI) => {
  try {
    const data = await axios.get(`http://localhost:3001/comments`);
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const updateComment = createAsyncThunk('post/UPDATE_COMMENT', async (payload, thunkAPI) => {
  try {
    await axios.patch(`http://localhost:3001/comments/${payload.id}`, {
      name: payload.name,
      contents: payload.contents,
    });
    return '';
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const deleteComment = createAsyncThunk('post/DELETE_COMMENT', async (payload, thunkAPI) => {
  try {
    await axios.delete(`http://localhost:3001/posts/${payload.id}`);
    return '';
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    clearError: (state) => ({ ...state, error: null }),
  },
  extraReducers: {
    [createComment.pending]: (state) => {
      state.isLoading = true;
    },
    [createComment.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [createComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [readComment.pending]: (state) => {
      state.isLoading = true;
    },
    [readComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [readComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { clearError } = commentSlice.actions;

export default commentSlice.reducer;
