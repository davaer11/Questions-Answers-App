import QuestionFooter from "../components/QuestionFooter";
import { useSelector } from "react-redux";
import Question from "../components/Question";

const Questions = () => {

    const questions = useSelector(state => state.questions.questions);

    return (
        <div>
            <h1>Questions</h1>
            {questions.map((question) => (
                <Question key = {question.id} text = {question.text} color = {question.color}/>
            ))}
            <QuestionFooter />
        </div>
    )
};

export default Questions;