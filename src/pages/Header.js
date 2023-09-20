import { Outlet,NavLink } from "react-router-dom";
import MyButton from '../components/MyButton';
import styles from './Header.module.css';

const Header = () => {

    return (
        <>
            <div className={styles.header}>
                <h1>Question Answer App</h1>
                <NavLink to = "questions">
                    <MyButton text = "Questions"></MyButton>
                </NavLink>
                <NavLink to = "answers">
                    <MyButton text = "Answers"></MyButton>
                </NavLink>
            </div>
            <Outlet />
       </>
    );
}
export default Header;