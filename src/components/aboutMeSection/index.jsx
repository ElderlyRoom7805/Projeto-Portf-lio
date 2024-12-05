import styles from "./index.module.css";

export const AboutMeSection = ({ children }) => {

    return(
        <section className="aboutMeSection" id="contact">
            <div className="div-aboutMe">
                <div className="leftBox">
                    <h2 className={ styles.h2Left }>Let's set up a conversation and <span>develop our creativity</span> together?</h2>
                    <p className={ styles.pLeft }>Advertise your brand organically within Dribbble’s design inspiration feed.</p>
                </div>
                { children }
            </div>
        </section>
    )
}