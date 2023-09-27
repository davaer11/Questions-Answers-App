import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const timerSlice = createSlice({
    name: 'timer',
    initialState: {
        stats: {
            seconds: 0,
            numOfViolations: 0, // broji koliko puta se sve skupa odznačilo
            isRunning: false,
            intervalId: null
        }
    },
    reducers: {
        increaseNumOfViolations(state, action)  { // bilo bi dobro kada bi tu mogao pristupit questionSlice-u i odcheckirat sva pitanja
            state.stats.numOfViolations += 1;
        },
        startTimer(state, action) {
            state.stats.intervalId = action.payload;
            state.stats.isRunning = true;
            state.stats.seconds = state.stats.seconds + 1;
        },
        stopTimer(state, action) {
            clearInterval(action.payload);
            state.stats.seconds = 0;
            state.stats.isRunning = false;
        },

    }
});

export const startTimerAsync = createAsyncThunk('timer/startTimer', async (_,{dispatch, getState}) => {
    const { timer } = getState();
    if (!timer.stats.isRunning) { 
        const intervalId = setInterval(() => {
            dispatch(timerSlice.actions.startTimer(intervalId));
        },1000);
    }
});
export const stopTimerAsync = createAsyncThunk('timer/stopTimer', (_,{getState,dispatch}) => {
    const { timer } = getState();
    if (timer.stats.isRunning) { //ova provjera je ovdje redundantna
        dispatch(timerSlice.actions.stopTimer(timer.stats.intervalId));
    }
});
export const selectIsRunning = state => state.timer.stats.isRunning;
export const selectSeconds = state => state.timer.stats.seconds;
export const selectNumOfViolations = state => state.timer.stats.numOfViolations;

export const timerActions = timerSlice.actions;
export default timerSlice;