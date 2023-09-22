import QuestionFooter from "../components/QuestionFooter";
import { useSelector } from "react-redux";
import Question from "../components/Question";
import styles from './Questions.module.css';
import MyButton from "../components/MyButton";
import { NavLink} from "react-router-dom";

const Questions = () => {

    const questions = useSelector(state => state.questions.questions);
   
    const questionChecks = useSelector(state => state.questions.questions.map(question => question.labeled));
    //Treba na neki način kad se ponovno dođe na ovu stranicu resetirat čekirana pitanja (u storeu)
    
    let disabled = true
    if(questionChecks.every(check => check)) {
        disabled = false;
    }

    return (
        <div>
            <div className = {styles.innerDiv}>
                <h1>Questions</h1>
                <ul>
                    {questions.map((question) => (
                        <Question key = {question.id} id = {question.id} text = {question.text} color = {question.color}/>
                    ))}
                </ul>
            <NavLink to = "/answers">   
                <MyButton disabled = {disabled} text = "Submit"/>        
            </NavLink>
            </div>
            <QuestionFooter />
        </div>
    )
};

export default Questions;