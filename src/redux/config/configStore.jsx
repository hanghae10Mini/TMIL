import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import postText from '../modules/postTextSlice';
import post from '../modules/postSlice';
import comment from '../modules/commentSlice';
import commentText from '../modules/commentTextSlice';

const rootReducer = combineReducers({
  postText,
  post,
  commentText,
  comment,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
