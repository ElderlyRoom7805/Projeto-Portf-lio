import bannerImg from "../../assets/banner-img.png";
import styles from "./index.module.css";
import { Details } from "../../fragments/detailsOfBackground/index.jsx";
export const Footer = () => {
    return(
        <footer id="digitalMidia">
            <Details />
            <div className="divFooter">
                <div className="leftDivFooter">
                    <img src={ bannerImg} alt="photo-loggin" className={ styles.img }/>
                    <div className={ styles.div }>
                        <h2 className={ styles.h2 }>Thank you!</h2>
                        <p className={ styles.p }>Follow me on my social networks and let's talk</p>
                    </div>
                </div>
                <div className="rightDivFooter">
                    <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F%3Flocale%3Dpt_BR" target="_blank" ><button className={ styles.butonFacebook }></button></a>
                    <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F%3Flocale%3Dpt_BR" target="_blank"><button className={ styles.butonInsta }></button></a>
                    <a href="https://www.linkedin.com/feed/" target="_blank"><button className={ styles.butonlinkdin }></button></a>
                </div>
            </div>
        </footer>
    )
}