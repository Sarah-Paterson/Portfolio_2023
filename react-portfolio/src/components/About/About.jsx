import React from "react";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section>
            <div>
                <img
                src={getImageUrl("about/aboutImage.png")}
                alt="Me sitting with a laptop"
                />
                <ul>
                    <li>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
                        <div>
                            <h3>Frontend Developer</h3>
                            <p>I'm a frontend developer with experience in building responsive and optomized sites</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};