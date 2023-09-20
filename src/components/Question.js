
const Question = (props) => {
    
    const textColor = {
        color: props.color
    }

    return(
        <div>
            <p style = {textColor} >{props.text}</p>
            
        </div>  
    );
};
export default Question;