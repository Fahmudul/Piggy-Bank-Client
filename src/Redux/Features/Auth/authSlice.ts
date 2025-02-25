import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IUserState {
  email?: string;
  NID?: string;
  id?: string;
  phone?: string;
  iat?: string;
  token?: string;
  role?: string;
}

const initialState: IUserState = {};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserState>) => {
      return { ...state, ...action.payload };
    },
    logout: (state) => {
      state = {};
      return state;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
