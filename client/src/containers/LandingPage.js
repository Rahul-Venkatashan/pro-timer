// Imports 
import styles from './LandingPage.module.css'
import InfoPannel from '../components/LandingPageComponents/InfoPannel/InfoPannel'
import SignUpButton from '../components/LandingPageComponents/Button/Buttons'
import FeaturesDisplay from '../components/LandingPageComponents/FeaturesDisplay/FeaturesDisplay'

export default function LandingPageContainer(){
    return <div className={styles.contaianer}>
        <div className={styles.earphones_img}></div>
        <div className={styles.foreground}>
            <div className={styles.bx1}>
                <div className={styles.sub_bx1}><InfoPannel/></div>
                <div className={styles.sub_bx2}><SignUpButton/></div>
            </div>

            <div className={styles.bx2}>
                <FeaturesDisplay/>
            </div>
        </div>
    </div>
    // The purpose of this functional component is to house the componenets for landing page
}

