import styles from './Question.module.css';
import { useState } from 'react';
import {questionActions} from '../store/question-slice';
import { useDispatch } from 'react-redux';

//TODO: kad se označi yes ili no i kad se na tako označeno pokuša označit onaj ne označeni ispisat neki tekst da se to ne može i da se prvo treba odznačit trenutno označeno
const Question = (props) => {
    
    const textColor = {
        color: props.color
    }
    const dispatch = useDispatch();

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
    }

    return(
        <li className={styles.questionStyle}>
            <p style = {textColor} >{`${props.id + 1}. ${props.text}`}</p>
            
            <input type = "checkbox" id = "Yes" checked = {yesBox} onChange = {(event) => toggleCheckBox("yes", event.target.checked)}></input>
            <label htmlFor = "Yes">Yes</label>
          
            <input type = "checkbox" id = "No" checked = {noBox} onChange = {(event) => toggleCheckBox("no", event.target.checked)}></input>
            <label htmlFor="No">No</label>
        </li>  
    );
};
export default Question;