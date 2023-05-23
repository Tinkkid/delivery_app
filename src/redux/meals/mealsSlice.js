import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL =
  "https://646cc2357b42c06c3b2bf569.mockapi.io/api/delivery";

export const fetchMeals = createAsyncThunk(
  "meals/fetchAllMeals",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios("/meals");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
