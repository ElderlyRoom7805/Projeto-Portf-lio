import { BannerSection } from "../components/bannerSection/index.jsx";
import { HeaderElement } from "../components/header/index.jsx";
import { username } from "../data/user.js";
export const Page1 = () => {
    return(
        <>
        <HeaderElement>
            <h1> { username } </h1>
        </HeaderElement>
        <main>
            <BannerSection />
        </main>
        </>
    )
}