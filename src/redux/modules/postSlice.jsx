import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  posts: [],
  post: {
    title: '',
    contents: '',
    name: '',
    password: '',
    id: 0,
    createAt: 'yyyy. mm. dd. hh:mm:ss',
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
    const currentPost = await axios.get(`http://localhost:3001/posts/${payload.id}`);

    if (currentPost.data.password === payload.password) {
      const data = await axios.patch(`http://localhost:3001/posts/${payload.id}`, {
        title: payload.title,
        contents: payload.contents,
        name: payload.name,
      });
      return thunkAPI.fulfillWithValue(data.data);
    }
    throw new Error('비밀번호 불일치');
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const deletePost = createAsyncThunk('post/DELETE_POST', async (payload, thunkAPI) => {
  try {
    await axios.delete(`http://localhost:3001/posts/${payload}`);
    return '삭제 완료!';
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const getPostById = createAsyncThunk('post/GET_POST_BY_ID', async (payload, thunkAPI) => {
  try {
    const data = await axios.get(`http://localhost:3001/posts/${payload}`);
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    clearError: (state) => ({ ...state, error: null }),
  },
  extraReducers: {
    [createPost.pending]: (state) => {
      state.isLoading = true;
    },
    [createPost.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [createPost.rejected]: (state, action) => {
      console.log(action.payload);
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

    [updatePost.pending]: (state) => {
      state.isLoading = true;
    },
    [updatePost.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [updatePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [deletePost.pending]: (state) => {
      state.isLoading = true;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [deletePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [getPostById.pending]: (state) => {
      state.isLoading = true;
    },
    [getPostById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    },
    [getPostById.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { clearError } = postSlice.actions;

export default postSlice.reducer;
