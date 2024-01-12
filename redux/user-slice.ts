import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "./store";
import axios from "axios";
import { IUserState } from "../typescript/interfaces/data";

export const apiInstance = axios.create({
  withCredentials: true,
  baseURL: "https://rich-sprite-352923.uc.r.appspot.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const addCoins = createAsyncThunk<
  object,
  { email: string; type: string; number: number },
  { dispatch: AppDispatch }
>(
  "user/setAuth",
  async function ({ email, type, number }, { dispatch, getState }) {
    const state: any = getState();
    try {
      if (!state.user.isPending) {
        dispatch(setPending(true));
        const response = await apiInstance.post(`auth/addCoins`, {
          email,
          type,
          number,
        });
        dispatch(setAuthData(response.data.data));
        dispatch(setPending(false));
      }
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState: IUserState = {
  isPending: false,
  isLoaded: false,
  _id: "",
  email: "",
  userId: 0,
  coins: 200,
  level: 0,
  total: 10,
  totalCompleted: 0,
  missions: {
    easy: [],
    medium: [],
    hard: [],
  },
  isSnackbarOpened: false,
  snackbarMessage: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthData(state, action: PayloadAction<IUserState>) {
      state._id = action.payload._id;
      state.email = action.payload.email;
      state.userId = action.payload.userId;
      state.coins = action.payload.coins;
      state.level = action.payload.level;
      state.total = action.payload.total;
      state.totalCompleted = action.payload.totalCompleted;
      state.missions = action.payload.missions;
      state.isLoaded = true;
    },

    setPending(state, action: PayloadAction<boolean>) {
      state.isPending = action.payload;
    },

    setSnackbar(
      state,
      action: PayloadAction<{
        isSnackbarOpened: boolean;
        snackbarMessage: string;
      }>
    ) {
      state.isSnackbarOpened = action.payload.isSnackbarOpened;
      state.snackbarMessage = action.payload.snackbarMessage;
    },
  },
});

export const { setAuthData, setPending, setSnackbar } = userSlice.actions;

export default userSlice.reducer;
