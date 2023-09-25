import AnswerFooter from "../components/AnswerFooter";
import styles from './Answers.module.css';
import Answer from './Answer';

import { useSelector } from "react-redux/es/hooks/useSelector";

//TODO: DODAT SEARCH BAR KOJI MI FILTRIRA ODGOVORE S OBZIROM NA BOJU ILI S OBZIROM NA YES/NO. DODAT FILTER ZA OBOJE (FILTER MOGU BIT RADIO BUTTONI KOJE OZNAČAVAM ISPOD SEARCH BARA)
//TODO: SVAKI ANSWER NEK BUDE ZAPRAVO LINK KOJI VODI NA NOVU STRANICU NA KOJOJ JE OPISAN SADRŽAJ PITANJA TJ. ODGOVORA I UMETNUTA NEKA SLIKA KOJA ODGOVARA TOME -- tu još vidjet jel se to može

const Answers = () => {

    const questions = useSelector(state => state.questions.questions);

    return (
        <div className={styles.answersStyle}>
            <div>
                <h1> Answers </h1>
                <ul>
                    {questions.map(question => <Answer key = {question.id} questionId = {question.id} questionText = {question.text} textColor = {question.color} answerText = {question.answer}/>)}
                </ul>
            </div>
            <AnswerFooter questions = {questions}/>
        </div>
    )
};
export default Answers;