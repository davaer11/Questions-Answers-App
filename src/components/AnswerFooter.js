const calculateYesAnswers = (questions) => {
    const yesAnswers = questions.filter(question => question.answer === 'yes');
    return yesAnswers.length;
}
const findNumOfColoredAnswers = (questions) => {
    const coloredAnswers = questions.filter(question => question.color !== 'black');
    return coloredAnswers.length;
}

const AnswerFooter = (props) => {

    const questions = props.questions;
    const numOfYesAnswers = calculateYesAnswers(questions);
    const numOfNoAnswers = questions.length - numOfYesAnswers;
    const numOfColoredQuestions = findNumOfColoredAnswers(questions);
    const numOfBlackQuestions = questions.length - numOfColoredQuestions;

    return (
        <div>
            <h2>Statistics:</h2>
            <p>Total number of questions: {questions.length} </p>
            <p>Number of YES answers: {numOfYesAnswers}</p>
            <p>Number of NO answers: {numOfNoAnswers} </p>
            <p>Total number of colored questions: {numOfColoredQuestions}</p>
            <p>Total number of black questions: {numOfBlackQuestions}</p>
        </div>
    )   

};
export default AnswerFooter;