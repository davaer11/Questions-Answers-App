import { createSlice } from '@reduxjs/toolkit';

const createID = (questions) => {

    const lastId = questions.reduce((currentId, question) => {
        return question.id > currentId ? question.id : currentId;
    },0)
    return lastId + 1
    
}

const questionSlice = createSlice({
    name: 'questions',
    initialState: {
        questions: [
            {
                id: 0,
                text: 'Vodena masa na Zemlji je veća od kopnene mase?',
                answer: '',
                labeled: false,
                color: 'blue'
            },
            {
                id: 1,
                text: 'Pripada li Petar Pan Disney-u?',
                answer: '',
                labeled: false,
                color: 'black'
            }
        ]
       
    },
    reducers: {
        addQuestion(state, action) { //action.payload = text 
            state.questions.push({
                id: createID(state.questions),
                text: action.payload,
                answer: '',
                labeled: false,
                color: 'black'
            })
        },
        removeQuestion(state, action) { //action payload = id 
            state.questions = state.questions.filter(question => question.id !== Number(action.payload));
        } 
    }
});
export const questionActions = questionSlice.actions; //action creators
export default questionSlice;