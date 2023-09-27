import QuestionFooter from "../components/QuestionFooter";
import { useDispatch, useSelector } from "react-redux";
import Question from "../components/Question";
import styles from './Questions.module.css';
import MyButton from "../components/MyButton";
import { NavLink} from "react-router-dom";
import {  selectIsRunning, selectSeconds } from "../store/timer-slice";
import { startTimerAsync, stopTimerAsync } from "../store/timer-slice";
import { selectAllQuestions, selectLabeledQuestions } from "../store/question-slice";
import { useEffect } from "react";
import { timerActions } from "../store/timer-slice";
import { questionActions } from "../store/question-slice";

//TODO: DODAT TIMER KOJI ODBROJAVA I KAD ODBROJI AKO SU NEKA PITANJA BILA OZNAČENA ODZNAČIT IH TJ. ODZNAČIT SVA PITANJA (TIMER TREBA KUCAT SAMO U SLUČAJU DA JE OZNAČENO JEDNO PITANJE)
//Treba na neki način kad se ponovno dođe na ovu stranicu resetirat čekirana pitanja (u storeu)
const Questions = () => {
  
    const questions = useSelector(selectAllQuestions);
    const questionChecks = useSelector(selectLabeledQuestions);
    const isTimerRunning = useSelector(selectIsRunning);
    const elapsedTimeInSeconds = useSelector(selectSeconds);

    const dispatch = useDispatch();

    useEffect(() => {
        if(questionChecks.some(check => check) && !isTimerRunning) { //ako je barem jedan označen pokreni timer i ako timer vec nije pokrenut
            dispatch(startTimerAsync());
        }
        if(questionChecks.every(check => !check) && isTimerRunning) { //ako su sva pitanja neoznačena i ako je timer pokrenut zaustavi ga 
            dispatch(stopTimerAsync());
        }
        if(elapsedTimeInSeconds > 5 && !questionChecks.every(check => !check)) { //ako je barem jedan označen (tj. nisu svi neoznačeni)
            dispatch(timerActions.increaseNumOfViolations());
            dispatch(questionActions.uncheckAllQuestions());
        }
    },[questionChecks, isTimerRunning, dispatch, elapsedTimeInSeconds]);


    let disabled = true
    if(questionChecks.every(check => check)) {
        disabled = false;
    }
   
    return (
        <div>
            <div className = {styles.innerDiv}>
                <h1>Questions</h1>
                <ul>
                    {questions.map((question) => (
                        <Question key = {question.id} id = {question.id} text = {question.text} color = {question.color}/>
                    ))}
                </ul>
            <NavLink to = "/answers">   
                <MyButton disabled = {disabled} text = "Submit"/>        
            </NavLink>
            </div>
            <QuestionFooter />
        </div>
    )
};

export default Questions;