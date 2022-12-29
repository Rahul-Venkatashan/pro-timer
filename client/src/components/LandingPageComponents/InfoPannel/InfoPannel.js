import styles from './InfoPannel.module.css'

export default function InfoPannel (){
    return <div className={styles.container}>
        <div className={styles.line_one}>improve</div>
        <div className={styles.line_two}>Focus</div>
        <div className={styles.text}>Focus on whats important. Get more done in less time. Be in love with yourself!</div>
    </div>
}