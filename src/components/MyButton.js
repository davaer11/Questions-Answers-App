import styles from '../components/MyButton.module.css';

const MyButton = (props) => {

    return (
         <button type = {props.type} disabled = {props.disabled} onClick = {props.onClick} className={styles.btn}>{props.text}</button>
    )
}
export default MyButton;