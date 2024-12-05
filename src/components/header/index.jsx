import { username } from "../../data/user.js";
export const HeaderElement = () => {
    const listButtons = [
        {
            id: 1,
            aName: "Home",
            aHref: "#home",
        },
        {
            id: 2,
            aName: "Technologies",
            aHref: "#section-Tech",
        },
        {
            id: 3,
            aName: "Contacts",
            aHref: "#contact",
        },
        {
            id: 4,
            aName: "Digital Midia",
            aHref: "#digitalMidia",
        },
    ];

    return(
        <header>
            <div className="forLine">
                <h1 className="headerUsername"> { username } </h1>
                <div className="headerDiv">
                { listButtons.map((e) => {
                    return(
                        <a className="aHeader" href={ e.aHref } key={e.id}>{e.aName}</a>
                    )
                })}
                </div>
            </div>
        </header>
    )
}