import { Apresentation } from "./apresentation/index.jsx";
import bannerImg from "../../assets/banner-img.png";
import { user } from "../../data/user.js";
import { ButtonDiv } from "./buttonDiv/index.jsx";
import { ImgsLanguages } from "./imgsBanner";
import style from "./index.module.css";

export const BannerSection = () => {
    return(
        <section className="sectionBanner" id="home">
            <div className="leftBanner">
                <Apresentation img={bannerImg} nomeImg={"photo-Loggin"} name={ user }/>
                <h1 className={ style.h1Banner }>I <span>love</span> creating and <span>developing</span> projects</h1>
                <p className={ style.pBanner }>Discover here in this environment, created especially for you, all my projects and technologies</p>
                <ButtonDiv />
                <ImgsLanguages />
            </div>
            
        </section>
    )
}