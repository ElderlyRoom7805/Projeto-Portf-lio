import HtmlIcon from "../../../assets/html-icon.png";
import CssIcon from "../../../assets/css-icon.png";
import JsIcon  from "../../../assets/js-icon.png";
import ReactIcon from "../../../assets/react-icon.png";

export const ImgsLanguages = () => {
    return(
        <div>
            <img src= { HtmlIcon }  alt="html-icon" />
            <img src= { CssIcon } alt="cs-icon" />
            <img src= { JsIcon } alt="js-icon" />
            <img src= { ReactIcon } alt="react-icon" />
        </div>
    )
}