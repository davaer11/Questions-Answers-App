import {configureStore} from '@reduxjs/toolkit';
import questionSlice from './question-slice';
import timerSlice from './timer-slice';

const store = configureStore({
    reducer: {questions: questionSlice.reducer, timer: timerSlice.reducer}
});

export default store;