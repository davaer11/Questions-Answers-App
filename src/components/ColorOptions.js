import { useState } from "react";
import { useDispatch } from "react-redux";
import { questionActions } from "../store/question-slice";
import MyButton from "./MyButton";

const ColorOptions = (props) => {

    //const [checkedColor, setCheckedColor] = useState('');
    const [checkColors, setCheckColors] = useState([false,false,false]);
    console.log(checkColors)

    const dispatch = useDispatch();

    const handleColor = (colorValue, colorBox) => {
        const updatedCheckColors = [...checkColors];
        if (colorValue === 'blue') {
            updatedCheckColors[0] = colorBox;
        }
        if (colorValue === 'red') {
            updatedCheckColors[1] = colorBox;
        }
        if (colorValue === 'green') {
            updatedCheckColors[2] = colorBox;
        }
        dispatch(questionActions.addColor(colorValue))
       
        setCheckColors(updatedCheckColors); 
    }

    const handleCloseBtn = () => {
        props.closeColorOptions();
    }

    return (
        <div> 
            <label htmlFor="Blue">Blue</label>
            <input type = "checkbox"  value = 'blue' onChange = {(event) => handleColor(event.target.value,event.target.checked)} checked = {checkColors[0]}></input>
            
            <label htmlFor="Red">Red</label>
            <input type = "checkbox" value = 'red' onChange = {(event) => handleColor(event.target.value,event.target.checked)} checked = {checkColors[1]}></input>

            <label htmlFor="Green">Green</label>
            <input type = "checkbox" value = 'green' onChange = {(event) => handleColor(event.target.value,event.target.checked)} checked = {checkColors[2]}></input>

            <MyButton text = "Add color"></MyButton>
            <MyButton text = "Close" onClick = {handleCloseBtn}></MyButton>
        </div>
    )
}
export default ColorOptions;