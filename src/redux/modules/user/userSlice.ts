import {createSlice} from '@reduxjs/toolkit';

interface User {
  user: any;
}

interface StateProps {
  user: User | any;
}

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: state => {
      state.user = null;
    },
  },
});

export const {login, logout} = userSlice.actions;

export const selectUser = (state: StateProps) => state.user.user;

export default userSlice.reducer;
