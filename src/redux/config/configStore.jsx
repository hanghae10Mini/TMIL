import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import postText from '../modules/textSlice';
import post from '../modules/postSlice';

const rootReducer = combineReducers({
  postText,
  post,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
