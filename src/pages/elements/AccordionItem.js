import React, { useState } from 'react'

import { Accordion } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import Styles from '../../styles/elementStyles/AccordionItem.module.css';

function AccordionItem({ header, body, eventKey }) {

    const [cssClass, setCssClass] = useState(Styles.header)

    const changeStyle = () => {
        if (cssClass === (Styles.header)){
            setCssClass(Styles.headerActive)
        } else {
            setCssClass(Styles.header)
        }        
    }

    return (
        <Accordion.Item eventKey={eventKey} bsPrefix={Styles.item}>
            <Accordion.Button bsPrefix={cssClass} onClick={changeStyle}>
                <FontAwesomeIcon className={Styles.icon} icon={faPlus}></FontAwesomeIcon>
                {header}
                <FontAwesomeIcon className={Styles.icon} icon={faPlus}></FontAwesomeIcon>
            </Accordion.Button>
            <Accordion.Body bsPrefix={Styles.textBody}>
                {body}
            </Accordion.Body>
        </Accordion.Item>
    )
}

export default AccordionItem;