import { useState } from "react";
import { useDispatch } from "react-redux";
import { questionActions } from "../store/question-slice";
import MyButton from "./MyButton";
import styles from './ColorOptions.module.css';

const ColorOptions = (props) => {

    const questionIds = props.questionIds;

    const [checkColors, setCheckColors] = useState([false,false,false]);
    const [selectedForColor, setSelectedForColor] = useState(-1);
    const [selectedColorValue, setSelectedColorValue] = useState('');
  
    const dispatch = useDispatch();

    const handleColor = (colorValue, colorBox) => {
        const updatedCheckColors = [...checkColors];
        if (colorValue === 'blue') {
            updatedCheckColors[0] = true;
            updatedCheckColors[1] = false;
            updatedCheckColors[2] = false;
        }
        if (colorValue === 'red') {
            updatedCheckColors[0] = false;
            updatedCheckColors[1] = true;
            updatedCheckColors[2] = false;
        }
        if (colorValue === 'green') {
            updatedCheckColors[0] = false;
            updatedCheckColors[1] = false;
            updatedCheckColors[2] = true;
        }
        setSelectedColorValue(colorValue);
        setCheckColors(updatedCheckColors); 
    }

    const handleCloseBtn = () => {
        props.closeColorOptions();
    }
    const addColor = () => {
        dispatch(questionActions.addColor({color: selectedColorValue, id: selectedForColor}));
        setSelectedForColor(-1);
        setSelectedColorValue('');
        setCheckColors([false,false,false]);
    }

    return (
        <div className={styles.colorOpt}> 
            <div className={styles.middleDivContainer}>
                <div>
                    <label htmlFor="Blue">Blue</label>
                    <input type = "checkbox"  value = 'blue' onChange = {(event) => handleColor(event.target.value,event.target.checked)} checked = {checkColors[0]}></input>
                </div>
               
                <div>
                    <label htmlFor="Red">Red</label>
                    <input type = "checkbox" value = 'red' onChange = {(event) => handleColor(event.target.value,event.target.checked)} checked = {checkColors[1]}></input>
                </div>
                <div>
                    <label htmlFor="Green">Green</label>
                    <input type = "checkbox" value = 'green' onChange = {(event) => handleColor(event.target.value,event.target.checked)} checked = {checkColors[2]}></input>
                </div>
            </div>
            <div>
                <select value = {selectedForColor} onChange = {(event) => setSelectedForColor(event.target.value)}>
                            <option value = ""></option>
                            {questionIds.map(id => (
                                <option key = {id} value = {id}>
                                    {`Question ${id+1}`}
                                </option>
                            ))}
                </select>
            </div>
            <div>
                <MyButton text = "Add color" onClick = {addColor}></MyButton>
                <MyButton text = "Close" onClick = {handleCloseBtn}></MyButton>
            </div>
        </div>
    )
}
export default ColorOptions;