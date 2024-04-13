import React from 'react'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import codeprojects from "../../data/code-projects.json";
import artprojects from "../../data/art-projects.json";
import designprojects from "../../data/design-projects.json";
import styles from "./Projects.module.css";
import { CodeProjectCard } from './CodeProjectCard';
import { ArtProjectCard } from './ArtProjectCard';
import { DesignProjectCard } from './DesignProjectCard';

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
                    {codeprojects.map((project, id) => {
                        return (
                            <CodeProjectCard key={id} project={project}/>
                        );
                    })}
                </div>
            </Tab>
            <Tab tabClassName={styles.tab} eventKey="profile" title="Graphic Design">
                <div className={styles.projects}>
                    {designprojects.map((project, id) => {
                        return (
                            <DesignProjectCard key={id} project={project}/>
                        );
                    })}
                </div>
            </Tab>
            <Tab tabClassName={styles.tab} eventKey="contact" title="Fine Art">
                <div className={styles.projects}>
                    {artprojects.map((project, id) => {
                        return (
                            <ArtProjectCard key={id} project={project}/>
                        );
                    })}
                </div>
            </Tab>
        </Tabs>
    </section>;
};