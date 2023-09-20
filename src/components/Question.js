import styles from './Question.module.css';
import { useState } from 'react';

const Question = (props) => {
    
    const textColor = {
        color: props.color
    }

    const [yesBox, setYesBox] = useState(false);
    const [noBox, setNoBox] = useState(false);

    const toggleCheckBox = (boxText, boxValue) => {
       
        if (boxText === "yes") {
            if (!noBox) {
                setYesBox(boxValue);
            }
        }
        if (boxText === "no") {
            if (!yesBox) {
                setNoBox(boxValue);
            }
        }
    }

    return(
        <div className={styles.questionStyle}>
            <p style = {textColor} >{props.text}</p>
            
            <input type = "checkbox" id = "Yes" checked = {yesBox} onChange = {(event) => toggleCheckBox("yes", event.target.checked)}></input>
            <label htmlFor = "Yes">Yes</label>
          
            <input type = "checkbox" id = "No" checked = {noBox} onChange = {(event) => toggleCheckBox("no", event.target.checked)}></input>
            <label htmlFor="No">No</label>
        </div>  
    );
};
export default Question;