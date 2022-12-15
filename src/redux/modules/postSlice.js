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
    views: 0,
    createdAt: 'yyyy. mm. dd. hh:mm:ss',
  },
  isLoading: false,
  error: null,
};

export const createPost = createAsyncThunk('post/CREATE_POST', async (payload, thunkAPI) => {
  try {
    const response = await axios.post('https://tmil-server.vercel.app/posts', payload);
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const readPost = createAsyncThunk('post/READ_POST', async (payload, thunkAPI) => {
  try {
    const data = await axios.get('https://tmil-server.vercel.app/posts');
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const updatePost = createAsyncThunk('post/UPDATE_POST', async (payload, thunkAPI) => {
  try {
    const data = await axios.patch(`https://tmil-server.vercel.app/posts/${payload.id}`, {
      title: payload.title,
      contents: payload.contents,
      name: payload.name,
    });
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const deletePost = createAsyncThunk('post/DELETE_POST', async (payload, thunkAPI) => {
  try {
    await axios.delete(`https://tmil-server.vercel.app/posts/${payload}`);
    return payload.id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const getPostById = createAsyncThunk('post/GET_POST_BY_ID', async (payload, thunkAPI) => {
  try {
    const data = await axios.get(`https://tmil-server.vercel.app/posts/${payload}`);
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const increaseViews = createAsyncThunk('post/INCREASE_VIEWS', async (payload, thunkAPI) => {
  try {
    await axios.patch(`https://tmil-server.vercel.app/posts/${payload.id}`, {
      views: payload.views + 1,
    });
    return '';
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
    [createPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments.push(action.payload);
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

    [updatePost.pending]: (state) => {
      state.isLoading = true;
    },
    [updatePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = state.posts.map((element) => {
        if (element.id === action.payload.id) {
          return action.payload;
        }
        return element;
      });
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
      state.posts = state.posts.filter((element) => element.id !== action.payload);
      state.post = initialState.post;
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

    [increaseViews.pending]: (state) => {
      state.isLoading = true;
    },
    [increaseViews.fulfilled]: (state, _) => {
      state.isLoading = false;
    },
    [increaseViews.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default postSlice.reducer;
