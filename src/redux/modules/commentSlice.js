import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

export const createComments = createAsyncThunk('comments/create', async (payload, thunkAPI) => {
  try {
    const response = await axios.post('http://localhost:3001/comments', payload);
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const readComments = createAsyncThunk('comments/read', async (postId, thunkAPI) => {
  try {
    const response = await axios.get(`http://localhost:3001/comments?postId=${postId}`);
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// export const updateComments = createAsyncThunk('comments/update', async (payload, thunkAPI) => {
//   try {
//     const data = await axios.get('http://localhost:3001/comments');
//     return thunkAPI.fulfillWithValue(data.data);
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error);
//   }
// });

export const deleteComments = createAsyncThunk('comments/delete', async (id, thunkAPI) => {
  try {
    await axios.delete(`http://localhost:3001/comments/${id}`);
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: {
    [createComments.pending]: (state) => {
      state.isLoading = true;
    },
    [createComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments.push(action.payload);
    },
    [createComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [readComments.pending]: (state) => {
      state.isLoading = true;
    },
    [readComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [readComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // [updateComments.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [updateComments.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.comments = action.payload;
    // },
    // [updateComments.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
    [deleteComments.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = state.comments.filter((element) => element.id !== action.payload);
    },
    [deleteComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default commentsSlice.reducer;
