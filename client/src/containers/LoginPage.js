import {useState} from "react"
import {Login, Signup} from "../components/LoginPageComponents/Form/Form"
import styles from './LoginPage.module.css'

export default function LoginPage(){
    const [form_state, set_form_state] = useState({
        title: "Login",
        msg: "No account?"
    })
    let callback = () => {
        set_form_state(prev => prev.title === "Login"? {
            title: "Sign Up",
            msg: "Have an account?"
        }:
        {
            title: "Login",
            msg: "No account?"
        }   
        )
    }
    return <div className={styles.container}>
       <div className={styles.bx}>        
            <div className={styles.sub_container}>
                <p className={styles.title}>{form_state.title}</p>
                <div className={styles.alt_opts}>
                    <p>{form_state.msg} <span onClick={callback}>{form_state.title === "Login"? "Sign Up":"Login"}</span></p>
                </div>
            </div> 
       </div>
       <div className={styles.bx}>
            {form_state.title === "Login"?<Login></Login>:<Signup></Signup>}
       </div>
    </div>
}