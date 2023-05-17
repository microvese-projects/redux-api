import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = 'https://randomuser.me/api/?results=10'
const initialState = {
  users: [],
  isLoading: false,
  error: null,
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const resp = await axios(USERS_URL);
    return [...resp.data.results];
  } catch(err) {
    return err.message
  }
})

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder 
      .addCase(fetchUsers.pending, (state, action) => {
        state.isLoading = 'true';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.error = action.error.message;
      })
  },
})

export default usersSlice.reducer;
