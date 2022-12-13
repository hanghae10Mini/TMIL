import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import text from '../modules/textSlice';
import post from '../modules/postSlice';

const rootReducer = combineReducers({
  text,
  post,
});

const store = configureStore({ reducer: rootReducer });

export default store;
