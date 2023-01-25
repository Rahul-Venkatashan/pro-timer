import styles from './Login.module.css'


function Login(){
    return (
        <div className={styles.container}>
           <div className={styles.sub_container}>
                <input className={[styles.input, styles.email_container].join(" ")} placeholder="Email" type="text"></input> 
                <div className={styles.password_container}>
                    <input className={styles.input} placeholder="passsword" type="password"></input>    
                    <div className={styles.forgot_password}>Forgot</div>
                </div>
                <div className={styles.sumbit_handler}>
                    Login
                </div>
            </div> 
         </div>
    )
}


function Signup(){
    return (
        <div className={styles.container}>
           <div className={styles.sub_container}>
                <input className={styles.input} placeholder="Email" type="text"></input> 
                <input className={styles.input} placeholder="passsword" type="password"></input>
                <div className={styles.sumbit_handler}>
                    Sign Up
                </div>
            </div> 
         </div>
    )
}

export {
    Login,
    Signup
}