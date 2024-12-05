import WhatsappIcon from "../../../assets/whatsapp-icon.png";
import EmailIcon from "../../../assets/email-icon.png";
import LinkedinIcon from "../../../assets/linkedin-icon.png";
import styles from "../index.module.css";

export const LiAboutMe = () =>{
    const contactInfo = [
        {
            id: 1,
            name: "phone",
            description: "I'm available for a voice chat, let's about creativity together?",
            aInfo: "Call Now",
            aLink: "https://www.whatsapp.com",
            img: WhatsappIcon,
        },
        {
            id: 2,
            name: "email",
            description: "Send me an email reporting feedbacks, suggestions and ideas",
            aInfo: "Send email now",
            aLink: "https://www.whatsapp.com",
            img: EmailIcon,
        },
        {
            id: 3,
            name: "Linkedin",
            description: "We can create more constant interactions as well as a sharing network",
            aInfo: "Go to Telegram Now",
            aLink: "https://www.whatsapp.com",
            img: LinkedinIcon,
        },
    ]
return(
    <ul className="rightBox">
        {contactInfo.map( (e) => {
            return(
            <li key={ e.id } className={ styles.li}>
                <div className={ e.name }>
                    <img src={ e.img } alt={ e.name } className={ styles.img }/>
                </div>
                <div className={ styles.divInfo }>
                    <h3 className={ styles.h3 }>My { e.name }</h3>
                    <p className={ styles.p }>{ e.description }</p>
                    <a href={ e.aLink } target="_blank" className={ styles.a }>{ e.aInfo }</a>
                </div>
            </li>
            )
        })}
    </ul>
)
}    