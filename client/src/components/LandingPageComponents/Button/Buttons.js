import styles from './button.module.css'

export default  function SignUpButton(){
    function callback(){
        console.log('redirect')
    }

    return <button className={styles.btn} onClick={callback}> Learn More </button>
}