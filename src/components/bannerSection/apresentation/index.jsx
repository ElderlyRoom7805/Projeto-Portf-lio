export const Apresentation = ({img, nameImg, name}) => {
    return(
        <div>
            <img src={img} alt={nameImg} />
            <p>Hello, my name is {name}</p>
        </div>
    )
}