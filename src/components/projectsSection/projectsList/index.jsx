import styles from "../index.module.css";
export const ProjectList = ({ children }) => {
    return (
        <section className="sectionProjects" id="section-Projects">
            <div className="div-sectionProjects">
                <h2 className={ styles.h2 }>My Projects</h2>
                <p className={ styles.p }>Projects created at <span className={ styles.span }>Kenzie Academy</span></p>
                { children }
            </div>
        </section>
    )
}