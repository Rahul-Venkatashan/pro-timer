import styles from './FeaturesDisplay.module.css'
import React, {useState, useEffect} from 'react'

export default function FeaturesDisplay(){
    // Reference for frame number
    const [frame_number, set_frame_num] = useState(1);
    // Different values for different frames
    const frame_values = {
        titles: ["Track Results", "Listen To Music", "Plan Your Time", "Organize Tasks"],
        descriptions: [
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry 1.", 
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry 2.", 
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry 3.", 
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry 4."
        ]
    }
    // Frame
    function Frame({frame_number}){
        return (
            <div>
                <div className={styles.current_frame}>{frame_number} / 4</div>
                <div className={styles.frame_title}>{frame_values.titles[frame_number - 1]}</div>
                <div className={styles.frame_description}>{frame_values.descriptions[frame_number - 1]}</div>
            </div>
        );
    }    
    // callback for btn press
    function callback(increase = true){
        if (increase){
            set_frame_num(prev => prev + 1 > 4? 1: prev + 1);
        }else{
            set_frame_num(prev => prev - 1 < 1? 4:prev - 1);
        }
    }

    return (
        <div className={styles.container}>

            <Frame frame_number={frame_number}></Frame>

            <div className={styles.btnContainer}>
                <div className={[styles.btnLeft, styles.btn].join(" ")} onClick={() => callback(false)}>{"<"}</div>
                <div className={[styles.btnRight, styles.btn].join(" ")} onClick={() => callback()}>{">"}</div>
            </div>
            
        </div>
    );
}

/* 
<div className={styles.frame}>
            <div className={styles.frame_title}>{frame_values.titles[frame_number - 1]}</div>
            <div className={styles.frame_description}>{frame_values.descriptions[frame_number - 1]}</div>
            <div className={styles.current_frame}>{frame_number} / 4</div>
            <div className={[styles.btnLeft, styles.btn].join(" ")} onClick={() => set_frame_num(prev => prev - 1 < 1? 4:prev - 1)}>{"<"}</div>
            <div className={[styles.btnRight, styles.btn].join(" ")} onClick={() => set_frame_num(prev => prev + 1 > 4? 1:prev + 1)}>{">"}</div>
    </div>
*/