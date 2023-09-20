import MyButton from "./MyButton";
import styles from './QuestionFooter.module.css';
import { useState } from "react";
import QuestionForm from "./QuestionForm";
import { useSelector, useDispatch } from "react-redux";
import { questionActions } from "../store/question-slice";
import ColorOptions from './ColorOptions';

const QuestionFooter = () => {

    const [showQuestionForm, setShowQuestionForm] = useState(false);
    const [selectedForDelete, setSelectedForDelete] = useState(-1);
    const [showColorOptions, setShowColorOptions] = useState(false);

    const dispatch = useDispatch();
    const questionIds = useSelector(state => state.questions.questions.map((question => question.id)));

    const closeQuestionForm = () => {
        setShowQuestionForm(false)
    }
    const closeColorOptions = () => {
        setShowColorOptions(false);
    }

    const openQuestionForm = () => {
        setShowQuestionForm(true);
    }
    const deleteQuestion = () => {
        dispatch(questionActions.removeQuestion(selectedForDelete));
        setSelectedForDelete(-1);
    }
    const addColorToQuestion = () => {
        setShowColorOptions(true)
    }
  
    if (showQuestionForm) {
        return <QuestionForm closeQuestionForm = {closeQuestionForm} />
    }
    else if(showColorOptions) {
        return <ColorOptions closeColorOptions = {closeColorOptions}/>
    }
    else {

        return (
            <div className= {styles.qFooter}>
                <MyButton onClick = {openQuestionForm} text = "Add question" />
                <div>
                    <MyButton onClick = {deleteQuestion} text = "Delete question" /> 
                    <select value = {selectedForDelete} onChange = {(event) => setSelectedForDelete(event.target.value)}>
                        <option value = ""></option>
                        {questionIds.map(id => (
                            <option key = {id} value = {id}>
                                {id}
                            </option>
                        ))}
                    </select>
                </div>
                <MyButton onClick = {addColorToQuestion} text = "Add color" />
            </div>
        )
    }
};

export default QuestionFooter;