import { Outlet,NavLink } from "react-router-dom";
import MyButton from '../components/MyButton';
import styles from './Header.module.css';
import Timer from "../components/Timer";

const Header = () => {
  
    return (
        <>
            <div className={styles.header}>
                <div>
                    <Timer></Timer>            
                    <h1>Question Answer App</h1>
                    <div>
                        <NavLink to = "questions">
                            <MyButton text = "Questions"></MyButton>
                        </NavLink>
                        <NavLink to = "answers">
                            <MyButton text = "Answers"></MyButton>
                        </NavLink>
                    </div>
                </div>  
                
            </div>
            <Outlet />
       </>
    );
}
export default Header;