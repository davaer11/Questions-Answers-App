import MyButton from "./MyButton";
import styles from './QuestionForm.module.css';
import { useDispatch } from "react-redux";
import { useState } from "react";
import {questionActions} from '../store/question-slice';

const QuestionForm = (props) => {

    const dispatch = useDispatch();

    const [questionText, setQuestionText] = useState('');

    const handleCloseBtn = () => {
        props.closeQuestionForm();
    }
    const handleAddBtn = () => {
        dispatch(questionActions.addQuestion(questionText));
        setQuestionText('');
    }

    return (
        <div className = {styles.questionForm}>
            <input value = {questionText} placeholder="Write your question" onChange = {(event) => setQuestionText(event.target.value)}></input>
            <MyButton onClick = {handleAddBtn} text = "Add"/>
            <MyButton onClick = {handleCloseBtn} text = "Close" />
        </div>
    );
};
export default QuestionForm;