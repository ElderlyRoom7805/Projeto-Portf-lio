import { technologies } from "../../../data/technologies";
import AcessIcon from "../../../assets/acess.png";
import styles from "./index.module.css";

export const TechCards = () => {
    return(
        <ul className="blockOfCards">
            { technologies.map( (Element) => {
                return(
                <li className="technologiesCard" key={ Element.id }>
                    <div className="infoCard">
                        <h2>{ Element.name } </h2>
                        <img src={ Element.img } alt={ Element.name } className={ styles.img }/>
                    </div>
                    <p className= { styles.description }>{ Element.description }</p>
                    <a target="_blanck" className="buttonTechnologie" href={ Element.link}><img src={ AcessIcon } alt="Acess-Incon" /> Learn More.</a>
                </li>
                )
            })}
        </ul>
    )
}