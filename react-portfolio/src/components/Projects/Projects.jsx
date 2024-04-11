import React from 'react'

import projects from "../../data/projects.json";
import styles from "./Projects.module.css";
import { getImageUrl } from '../../utils';

export const Projects = () => {
    return <section className={styles.container}>
        <h2>Projects</h2>
        <div>{
            projects.map((project, id) => {
                return <div key={id}>
                    <img src={getImageUrl(project.imageSrc)} alt={`image of ${project.title}`} />
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <ul>{
                        project.skills.map((skill, id) => {
                            <li key={id}>{skill}</li>
                        })
                    }</ul>
                    <div>
                        <a href={project.title}>Demo</a>
                        <a href={project.source}>Source</a>
                    </div>
                </div>
            })
        }</div>
    </section>;
};