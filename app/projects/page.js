import styles from "./projects.module.css"
import { ProjectCard } from "@/Components/Project Card/projectCard";
import { ProjectData } from "./projectData";

export const metadata = {
    title: "thevaibhav's projects",
  }

export default function Projects() {
    return (
        <>
            <div
                className={styles.projectsContainer}
            >
                <div
                    className={styles.headerContainer}
                >
                    <div className={styles.heading}>
                        Projects
                    </div>
                </div>
                <div
                    className={styles.projectsList}
                >
                    {ProjectData.map((project, index) => (
                        <ProjectCard
                            key={index}
                            imageSRC={project.imageSRC}
                            title={project.title}
                            employer={project.employer}
                            year={project.year}
                            style={{ "--index": index }}
                            className={styles.projectCard}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}