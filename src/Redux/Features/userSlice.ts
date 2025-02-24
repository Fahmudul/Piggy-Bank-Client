import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IUserState {
  id?: string;
  email?: string;
  token?: string;
  loggedInDeviceNumber?: number;
}

const initialState: IUserState = {};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserState>) => {
      return { ...state, ...action.payload };
    },
  },
});
