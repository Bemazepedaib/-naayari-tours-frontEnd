import React from 'react'
import Styles from '../styles/Details.module.css'

function DetailActivities(props) {

    const link = "https://drive.google.com/uc?export=view&id="
    return (
        <div>
            <div className={Styles.list}>
                {props.act.map(activity => (
                    <div key={activity.activityName} className={Styles.activities} >
                        <img
                            height={1000}
                            width={1000}
                            className={Styles.img}
                            src={link + activity.activityPhoto}
                            alt="activitie Image" />
                        <label className={Styles.label}>{activity.activityName}</label>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default DetailActivities
