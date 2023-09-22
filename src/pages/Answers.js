import AnswerFooter from "../components/AnswerFooter";
import styles from './Answers.module.css';
import Answer from './Answer';

import { useSelector } from "react-redux/es/hooks/useSelector";

const Answers = () => {

    const questions = useSelector(state => state.questions.questions);

    return (
        <div className={styles.answersStyle}>
            <div>
                <h1> Answers </h1>
                <ul>
                    {questions.map(question => <Answer key = {question.id} questionId = {question.id} questionText = {question.text} textColor = {question.color} answerText = {question.answer}/>)}
                   {/* {questions.map(question => <li key = {question.id}>{`${question.text} ------------  ${question.answer}`}</li>)} */}
                </ul>
            </div>
            <AnswerFooter questions = {questions}/>
        </div>
    )
};
export default Answers;