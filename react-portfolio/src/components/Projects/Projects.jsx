import React from 'react'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import projects from "../../data/code-projects.json";
import styles from "./Projects.module.css";
import { CodeProjectCard } from './CodeProjectCard';

export const Projects = () => {
    return <section className={styles.container} id='projects'>
        <h2 className={styles.title}>Projects</h2>
        <Tabs
            defaultActiveKey="profile"
            id="project-tabs"
            className="mb-3"
            >
            <Tab tabClassName={styles.tab} eventKey="home" title="Programming">
                <div className={styles.projects}>
                    {projects.map((project, id) => {
                        return (
                            <CodeProjectCard key={id} project={project}/>
                        );
                    })}
                </div>
            </Tab>
            <Tab tabClassName={styles.tab} eventKey="profile" title="Graphic Design">
                Tab content for Profile
            </Tab>
            <Tab tabClassName={styles.tab} eventKey="contact" title="Fine Art">
                Tab content for Contact
            </Tab>
        </Tabs>
    </section>;
};