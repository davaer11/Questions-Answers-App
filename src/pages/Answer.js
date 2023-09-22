
const Answer = (props) => {
    return (
       <li style = {{color: props.textColor}}>
            {`${props.questionId + 1}. ${props.questionText} ----------- ${props.answerText}`}
       </li>
    )
};

export default Answer;