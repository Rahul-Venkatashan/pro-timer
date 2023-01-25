import styles from './FeaturesDisplay.module.css'
import {useState} from 'react'


function FrameElement({frame_number, frame_title, frame_description, image_styling}){
    return (
        <div className={styles.frame}>
            <div className={styles.frame_image} style={image_styling}></div>
            <div className={styles.current_frame}>{frame_number} / 3</div>
            <div className={styles.frame_title}>{frame_title}</div>
            <div className={styles.frame_description}>{frame_description}</div>
        </div>
    )
}

export default function FeaturesDisplay(){
    
    let [transform_slide, setSlide] = useState(0)
   
    function traverse(btn){
        const max_translation = ((Object.values(frame_content).length - 1)* -20)
        if (btn === 1){
            setSlide(prev => prev + 20 <= 0 ? prev + 20:max_translation)
        } else{
            setSlide(prev => prev - 20 >= max_translation ? prev - 20:0)
        }
    }
    // Frame Content
    let frame_content = {
        frame_1: {
            title: "Plan Your Time",
            description: "Plan your time, get work done on time.",
            image_styling: {
                backgroundPositionX: '200%',
                backgroundImage: `url(${require('../../../images/graph.png')})`
            },
            frame_number: 1
        },
        frame_2: {
            title: "Listen To Music",
            description: "Find music, podcasts or youtube to focus.",
            image_styling: {
                backgroundPositionX: '100%',
                backgroundImage: `url(${require('../../../images/soundWaves.png')})`
            },
            frame_number: 2
        },
        frame_3: {
            title: "Track Results",
            description: "Track your results, understand your self. Enjoy life and be your best.",
            image_styling: {
                backgroundPositionX: 'right',
                backgroundImage: `url(${require('../../../images/stopwatch.png')})`
            },
            frame_number: 3
        },
    }
    
    // Render method
    return <div className = {styles.container}>
        <div className={styles.frame_container} style={{left: transform_slide + 'vw'}}>
            {
                Object.values(frame_content).map((value, index) => 
                { 
                       return <FrameElement
                        key={`${value.frame_number}_${index}`}
                        frame_number={value.frame_number}
                        frame_title={value.title}
                        frame_description={value.description}
                        image_styling={value.image_styling}
                    />}
                )
            }                    
        </div>

        <div className={styles.btnContainer}>
            <div className={styles.btn} onClick={() => traverse(1)}>{"<"}</div>
            <div className={styles.btn} onClick={() => traverse(0)}>{">"}</div>
        </div>
    </div>
} 