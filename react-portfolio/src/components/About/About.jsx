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
                            <p>I’m a front-end developer with experience in building responsive and optimized sites. This website was created with React; however, I have experienced and am comfortable with a variety of other front-end programs working individually or as part of a team.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursor.png")} alt="Cursor Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Web Developer</h3>
                            <h4>Back-End Web Development</h4>
                            <p>I have experience developing fast and optimized back-end systems. I have experienced a variety of back-end programs and have designed back-end for my own projects as well as assisted with a team.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/magic-wand.png")} alt="Design Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Graphic Designer</h3>
                            <h4>Art Direction</h4>
                            <p>I have over eight years of professional experience as a graphic designer and over two years as an art director where I managed a team to ensure design consistency throughout.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/magic-wand.png")} alt="Design Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Graphic Designer</h3>
                            <h4>Promotional Branding</h4>
                            <p>I have worked directly with clients to prepare and modify current designs or help create completely new designs for promotional products.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/paintbrush-pencil.png")} alt="Art Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Fine Artist</h3>
                            <p>I have a bachelor’s degree in fine art and over ten years of experience as an artist. My artwork has been displayed in a local shop, a local art studio, and one piece was displayed in the Denver Art Museum.</p>

                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};