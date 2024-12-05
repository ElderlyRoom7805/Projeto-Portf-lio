import style from "./index.module.css";
export const Apresentation = ({img, nameImg, name}) => {
    return(
        <div className={ style.div }>
            <img src={img} alt={nameImg} className={ style.photoLogo } />
            <p>Hello, my name is {name}</p>
        </div>
    )
}