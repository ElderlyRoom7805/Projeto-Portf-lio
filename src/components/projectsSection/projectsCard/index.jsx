import { projects } from "../../../data/projects.js";
import GitIcon from "../../../assets/git-icon.png";
import Share from "../../../assets/share.png";
import styles from "../index.module.css";

export const ProjectCards = () => {
    return(
        <ul className="blockOfCards">
            { projects.map( (Element) => {
                return(
                <li key={ Element.Id } className="projectCard">
                    <h2 className={ styles.h2 }>{ Element.name } </h2>
                    <p className={ styles.p }> linguagem: <span className={ styles.spanlanguage }>javascript</span></p>
                    <p className={ styles.p }>{ Element.description }</p>
                    <div className="buttonProjectBox">
                        <a className={ styles.a } href="https://github.com" target="_blanck"><img className={ styles.img } src= { GitIcon } alt="git-icon" /> Github Code</a>
                        <a className={ styles.a } href="https://www.kenzie.com.br" target="_blanck"><img src={ Share } alt="share" /> aplicação</a>
                    </div>
                </li>
                )
            })}
        </ul>
    )
}