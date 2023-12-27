"use client";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import{SIGNOUT_API,DOMAIN,LOGIN_API} from '../../../commons/constants';


export const loginAsync = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const response = await axios.post(DOMAIN + LOGIN_API, credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
});

// Async thunk for logout
export const logoutAsync = createAsyncThunk("auth/logout", async (userId) => {
  try {
    const response = await axios.post(DOMAIN + SIGNOUT_API, { userId });
    return response.data;
  } catch (error) {
    throw error;
  }
});

export interface AuthState {
  isAuthenticated: boolean;
  user: {
    id: string | null;
    username: string | null;
  };
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: {
    id: null,
    username: null,
  },
  loading: "idle",
  error: null,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    resetAuthState: (state) => {
      state.isAuthenticated = false;
      state.user.id = null;
      state.user.username = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.isAuthenticated = true;
        state.user.id = action.payload.id;
        state.user.username = action.payload.username;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message || "An error occurred during login.";
      })
      .addCase(logoutAsync.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(logoutAsync.fulfilled, (state) => {
        state.loading = "succeeded";
        state.isAuthenticated = false;
        state.user.id = null;
        state.user.username = null;
      })
      .addCase(logoutAsync.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message || "An error occurred during logout.";
      });
  },
});

export const { setIsAuthenticated, resetAuthState } = AuthSlice.actions;

export default AuthSlice.reducer;