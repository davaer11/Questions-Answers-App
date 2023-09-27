import styles from './Question.module.css';
import { useState } from 'react';
import {questionActions} from '../store/question-slice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectQuestionLabel, selectQuestionAnswer } from '../store/question-slice';


const Question = (props) => {
   
    const textColor = {
        color: props.color
    }
    const dispatch = useDispatch();

    const questionLabel = useSelector((state) => selectQuestionLabel(state,props.id)); //Je li ovo dobar način da pošaljem argument 
    const questionAnswer = useSelector((state) => selectQuestionAnswer(state,props.id));

    let yesFlag = false;
    let noFlag = false;
    
    if(questionAnswer === 'yes') {
        yesFlag = true;
    }
    else if(questionAnswer === 'no') {
        noFlag = true;
    }


/*
    const [yesBox, setYesBox] = useState(false);
    const [noBox, setNoBox] = useState(false);

    const toggleCheckBox = (boxText, boxValue) => {
       
        if (boxText === "yes") {

            if (noBox) {
                setNoBox(!noBox);
            }
            setYesBox(boxValue);
           
        }
        if (boxText === "no") {
            if (yesBox) {
                setYesBox(!yesBox);
            }
            setNoBox(boxValue);
        }
        dispatch(questionActions.addAnswer({id: props.id, answer: boxText, labeled: boxValue}));
    }*/

    const toggleCheckBox = (boxText, boxValue) => { //boxValue = true ili false

        dispatch(questionActions.setQuestionAnswer({id: props.id, answer: boxText}))
        dispatch(questionActions.toggleQuestionLabel(props.id));
    }

    return(
        <li className={styles.questionStyle}>
            <p style = {textColor} >{`${props.id + 1}. ${props.text}`}</p>
            
            <input type = "checkbox" id = "Yes" checked = {yesFlag} onChange = {(event) => toggleCheckBox("yes", event.target.checked)}></input>
            <label htmlFor = "Yes">Yes</label>
          
            <input type = "checkbox" id = "No" checked = {noFlag} onChange = {(event) => toggleCheckBox("no", event.target.checked)}></input>
            <label htmlFor="No">No</label>
        </li>  
    );
};
export default Question;