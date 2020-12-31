import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { persistReducer } from 'redux-persist';
import {combineReducers} from "redux"; 
import storage from 'redux-persist/lib/storage';
import userReducer from '../features/user/UserSlice';


const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

const persistConfig ={
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default configureStore({
  reducer: persistedReducer,
});
