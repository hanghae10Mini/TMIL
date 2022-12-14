import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import postText from '../modules/textSlice';
import post from '../modules/postSlice';
import comments from '../modules/commentSlice';

const rootReducer = combineReducers({
  postText,
  post,
  comments,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
