import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                {/* <img
                src={getImageUrl("about/aboutImage.png")}
                alt="Me sitting with a laptop"
                className={styles.aboutImage}
                /> */}
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursor.png")} alt="Cursor Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Web Developer</h3>
                            <h4>Front-End Web Development</h4>
                            <p>I'm a frontend developer with experience in building responsive and optimized sites.</p>
                            <h4>Back-End Web Development</h4>
                            <p>I have experience developing fast and optimized back-end systems.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/magic-wand.png")} alt="Design Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Graphic Designer</h3>
                            <h4>Art Direction</h4>
                            <p>I have experience developing fast and optimized back-end systems.</p>
                            <h4>Promotional Branding</h4>
                            <p>I have experience developing fast and optimized back-end systems.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/paintbrush-pencil.png")} alt="Art Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Fine Artist</h3>
                            <h4>Painting</h4>
                            <p>I have experience developing fast and optimized back-end systems.</p>
                            <h4>Printing</h4>
                            <p>I have experience developing fast and optimized back-end systems.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};