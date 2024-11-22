import { Apresentation } from "./apresentation";
import bannerImg from "../../assets/banner-img.png";
import { user } from "../../data/user.js";
import { ButtonDiv } from "./buttonDiv/index.jsx";

export const BannerSection = () => {
    return(
        <section>
            <Apresentation img={bannerImg} nomeImg={"photo-Loggin"} name={ user }/>
            <h1>I <span>love</span> creating and <span>developing</span> projects</h1>
            <p>Discover here in this environment, created especially for you, all my projects and technologies</p>
            <ButtonDiv />
        </section>
    )
}