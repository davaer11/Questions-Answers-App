import { createSlice, createSelector } from '@reduxjs/toolkit';

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
        },
        addAnswer(state,action) { //action payload = {id, answer, labeled)
            state.questions = state.questions.map(question => {
                if(question.id === Number(action.payload.id)) {
                    question.answer = action.payload.answer;
                    question.labeled = action.payload.labeled;
                    return question;
                }
                return question;
            })

        },
        addColor(state, action) { //action payload = {color, id}
            state.questions.map(question => {
                if (question.id === Number(action.payload.id)) {
                    question.color = action.payload.color;
                }
                return question;
            })
        },
        toggleQuestionLabel(state,action) {   //action.payload = id
            
            state.questions.map(question => {
                if(question.id === Number(action.payload)) {
                    question.labeled = !question.labeled;
                }
                return question;
            });

        },
        setQuestionAnswer(state,action) { //action.payload = {id, answer}
            
            state.questions.map(question => {
                if(question.id === Number(action.payload.id)) {
                    question.answer = action.payload.answer;
                }
                return question;
            });
        },
        uncheckAllQuestions(state,action) {
            state.questions.map(question => {
                question.labeled = false;
                question.answer = "";
                return question;
            })
        } 
    }
});
export const selectAllQuestions = state => state.questions.questions; 
export const selectLabeledQuestions = createSelector(
    selectAllQuestions,
    allQuestions => allQuestions.map(question => question.labeled)
);
export const selectQuestionIds = createSelector(
    selectAllQuestions,
    allQuestions => allQuestions.map(question => question.id)
);
//Ova dva selektora ispod spojit u jedan da bude manje koda? 
export const selectQuestionLabel = createSelector(
    [selectAllQuestions,(_,id) => id],  
    (allQuestions,id) => {
        const question = allQuestions.find(q => q.id === Number(id));
        return question ? question.label : null;
    }
);
export const selectQuestionAnswer = createSelector(
    [selectAllQuestions, (_,id) => id], 
    (allQuestions,id) => {
        const question = allQuestions.find(q => q.id === Number(id));
        return question ? question.answer : null;
    }
);
export const questionActions = questionSlice.actions; //action creators
export default questionSlice;