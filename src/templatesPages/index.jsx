import { BannerSection } from "../components/bannerSection/index.jsx";
import { HeaderElement } from "../components/header/index.jsx";
import { Techlist } from "../components/techSection/techList/index.jsx";
import { TechCards } from "../components/techSection/techCard/index.jsx";
import { ProjectList } from "../components/projectsSection/projectsList/index.jsx";
import { ProjectCards } from "../components/projectsSection/projectsCard/index.jsx";
import { Footer } from "../components/footer/index.jsx";
import { AboutMeSection } from "../components/aboutMeSection/index.jsx";
import { LiAboutMe } from "../components/aboutMeSection/liAboutMe/index.jsx";
import { New } from "../fragments/new/index.jsx"
import { Details } from "../fragments/detailsOfBackground/index.jsx";
import Styles from "./index.module.css";
export const Page1 = () => {
    return(
        <>
        <HeaderElement />
        <main>
            <BannerSection />
            <div className={ Styles.barra }></div>
            <AboutMeSection>
                <Details />
                <LiAboutMe />
            </AboutMeSection>
            <Techlist>
                <TechCards />
            </Techlist>
            <ProjectList>
                <New />
                <ProjectCards />
            </ProjectList>
        </main>
        <Footer />
        </>
    )
}