import MyButton from "./MyButton";
import styles from './QuestionFooter.module.css';
import { useState } from "react";
import QuestionForm from "./QuestionForm";
import { useSelector, useDispatch } from "react-redux";
import { questionActions } from "../store/question-slice";
import ColorOptions from './ColorOptions';
import { selectQuestionIds } from "../store/question-slice";
//TODO izdvojit logiku za brisanje u novu komponentu gdje ću moć brisat s obzirom na boju, s obzirom na id pitanja, s obzirom na neki drugi parametar ili cu moc brisat vise pitanja odjednom
//PITANJE: Je li bolje da QuestionFooter bude parent Questions komponenti, jer svaki put kad mi se promijeni Questions komponenta QuestionFooter se nanovo renderira i dobivam neki warning??
const QuestionFooter = () => {
    
    const [showQuestionForm, setShowQuestionForm] = useState(false);
    const [selectedForDelete, setSelectedForDelete] = useState(-1);
    const [showColorOptions, setShowColorOptions] = useState(false);

    const dispatch = useDispatch();
    const questionIds = useSelector(selectQuestionIds);

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
        return <ColorOptions closeColorOptions = {closeColorOptions} questionIds = {questionIds}/>
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