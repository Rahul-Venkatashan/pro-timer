import styles from './button.module.css'
import { useNavigate } from 'react-router-dom'

export default  function SignUpButton(){
    let navigate = useNavigate();
    function redirect(){
        let path = '/auth'
        navigate(path)
    }
    return <button className={styles.btn} onClick={redirect}> Learn More </button>
}