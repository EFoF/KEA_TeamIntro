import { createSlice, combineReducers } from '@reduxjs/toolkit';
import { questionReducer } from '.';



const initialState = {
  title: '',
  detail: '',
};

const { actions: formActions, reducer: formReducer } = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addForm: (state, action) => {
      const { title, detail } = action.payload;
      state.title = title;
      state.detail = detail;
    },
  },
});

export { formActions };
export default combineReducers({
  form: formReducer,
  questions: questionReducer,
});
