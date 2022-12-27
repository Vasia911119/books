import axios from 'axios';
import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://books-api-pk0j.onrender.com/api';

const getCurrTraining = createAsyncThunk(
  'training/getCurrTraining',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/trainings');
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  },
);

const startTraining = createAsyncThunk(
  'training/startTraining',
  async (details, thunkAPI) => {
    try {
      const { startDate, endDate } = details;
      const books = details.books;
      const { data } = await axios.post('/trainings', {
        startDate,
        endDate,
        books,
      });
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  },
);

const addResult = createAsyncThunk(
  'training/addResult',
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.patch('/trainings', body);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  },
);

const addBook = createAction('training/addBook', ({ book }) => {
  return {
    payload: { book },
  };
});

const addDate = createAction('training/addDate', ({ startDate, endDate }) => {
  return {
    payload: { startDate, endDate },
  };
});

const deleteBook = createAction(
  'training/deleteBook',
  ({ author, pages, year, title, id }) => {
    return {
      payload: { book: { author, pages, year, title, id } },
    };
  },
);

const trainingActions = {
  getCurrTraining,
  addResult,
  startTraining,
  addBook,
  addDate,
  deleteBook,
};

export default trainingActions;
