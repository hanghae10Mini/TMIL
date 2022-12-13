import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  posts: [],
  post: {
    title: '',
    contents: '',
    name: '',
    password: '',
    postId: 0,
  },
  isLoading: false,
  error: null,
};

export const createPost = createAsyncThunk('post/CREATE_POST', async (payload, thunkAPI) => {
  try {
    await axios.post('http://localhost:3001/posts', payload);
    return '게시글 작성 완료';
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const readPost = createAsyncThunk('post/READ_POST', async (payload, thunkAPI) => {
  try {
    const data = await axios.get('http://localhost:3001/posts');
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const updatePost = createAsyncThunk('post/UPDATE_POST', async (payload, thunkAPI) => {
  try {
    const data = await axios.patch(`http://localhost:3001/post/${payload.id}`, {
      title: payload.title,
      contents: payload.contetns,
    });
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const deletePost = createAsyncThunk('post/DELETE_POST', async (payload, thunkAPI) => {
  try {
    await axios.delete(`http://localhost:3001/post/${payload.id}`);
    return '삭제 완료!';
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: {
    [createPost.pending]: (state) => {
      state.isLoading = true;
    },
    [createPost.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [createPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [readPost.pending]: (state) => {
      state.isLoading = true;
    },
    [readPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [readPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default postSlice.reducer;
