import React from 'react'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import skills from "../../data/skills.json";
import history from "../../data/history.json";
import education from "../../data/education.json";
import styles from "./Experience.module.css";
import { getImageUrl } from '../../utils';

export const Experience = () => {
    return <section className={styles.container} id='experience'>
        <h2 className={styles.title}>Experience</h2>
        <Tabs
            defaultActiveKey="skills"
            id="experience-tabs"
            className="mb-3"
            >
            <Tab tabClassName={styles.tab} eventKey="skills" title="Skills">
                <div className={styles.skills}>{
                    skills.map((skill, id) => {
                        return <div className={styles.skill} key={id}>
                            <div className={styles.skillImageContainer}>
                                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                            </div>
                            <p>{skill.title}</p>
                        </div>
                    })
                    }</div>
            </Tab>
            <Tab tabClassName={styles.tab} eventKey="education" title="Education">
                <ul className={styles.history}>
                    {
                        education.map((educationItem, id) => {
                            return <li className={styles.historyItem} key={id}>
                                <img src={getImageUrl(educationItem.imageSrc)} 
                                alt={`${educationItem.organisation} Logo`} />
                                <div className={styles.historyItemDetails}>
                                    <h3>{`${educationItem.school}, ${educationItem.location}`}</h3>
                                    <p>{`${educationItem.startDate} - ${educationItem.endDate}`}</p>
                                    <ul>{educationItem.experiences.map((experience, id) => {
                                        return <li key={id}>{experience}</li>
                                    })}</ul>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </Tab>
            <Tab tabClassName={styles.tab} eventKey="work-history" title="Work History">
                <ul className={styles.history}>
                    {
                        history.map((historyItem, id) => {
                            return <li className={styles.historyItem} key={id}>
                                <img src={getImageUrl(historyItem.imageSrc)} 
                                alt={`${historyItem.organisation} Logo`} />
                                <div className={styles.historyItemDetails}>
                                    <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                    <ul>{historyItem.experiences.map((experience, id) => {
                                        return <li key={id}>{experience}</li>
                                    })}</ul>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </Tab>
        </Tabs>
        {/* <div className={styles.content}>
            <div className={styles.skills}>{
                skills.map((skill, id) => {
                    return <div className={styles.skill} key={id}>
                        <div className={styles.skillImageContainer}>
                            <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                        </div>
                        <p>{skill.title}</p>
                    </div>
                })
                }</div>
            <ul className={styles.history}>
                {
                    history.map((historyItem, id) => {
                        return <li className={styles.historyItem} key={id}>
                            <img src={getImageUrl(historyItem.imageSrc)} 
                            alt={`${historyItem.organisation} Logo`} />
                            <div className={styles.historyItemDetails}>
                                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                <ul>{historyItem.experiences.map((experience, id) => {
                                    return <li key={id}>{experience}</li>
                                })}</ul>
                            </div>
                        </li>
                    })
                }
            </ul>
        </div> */}
    </section>;
};