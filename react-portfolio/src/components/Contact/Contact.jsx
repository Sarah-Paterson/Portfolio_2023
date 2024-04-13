import React from 'react'

import styles from "./Contact.module.css";
import { getImageUrl } from '../../utils';

export const Contact = () => {
    return <footer className={styles.container} id='contact'>
        <div className={styles.text}>
            <h2>Contact Me!</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                <a href="mailto:sarahlridings@gmail.com">sarahlridings@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
                <a href="https://www.linkedin.com/in/sarahlpaterson">linkedin.com/in/sarahlpaterson</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub icon" />
                <a href="https://github.com/Sarah-Paterson">github.com/Sarah-Paterson</a>
            </li>
        </ul>
    </footer>;
};