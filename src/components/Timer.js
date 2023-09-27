import { useSelector } from 'react-redux';
import styles from './Timer.module.css';
import { selectNumOfViolations, selectSeconds } from '../store/timer-slice';

const Timer = () => {

    const seconds = useSelector(selectSeconds);
    const numOfViolations = useSelector(selectNumOfViolations);
  
    return(
        <div className={styles.timer}>
            <p> {`${seconds} seconds`}</p>
            <p>Violations: {numOfViolations}</p>
        </div>
    );

};
export default Timer;