import {configureStore} from '@reduxjs/toolkit';
import questionSlice from './question-slice';

const store = configureStore({
    reducer: {questions: questionSlice.reducer}
});

export default store;