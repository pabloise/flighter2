import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../modules/user/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
