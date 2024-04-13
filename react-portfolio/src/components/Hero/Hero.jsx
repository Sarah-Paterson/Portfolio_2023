import React from 'react'

import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Sarah</h1>
            <p className={styles.description}>I'm a graphic designer and full-stack web developer. 
                I have a bachelor's degree in art and design and a certificate in full-stack web development, which allow me to combine my creativity and technical skills. 
                Reach out if you'd like to learn more!
            </p>
            <div className={styles.btnContainer}>
                <a href='mailto:sarahlridings@gmail.com' className={styles.btn}>Email Me!</a>
                <a href="../../assets/hero/Sarah_Paterson-UIUX_Designer-Graphic_Designer.pdf" download="Sarah_Paterson_CV" className={styles.btn}>Download My CV</a>
            </div>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
    </section>;
};