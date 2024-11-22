import { ButtonHeader } from "./buttons";
export const HeaderElement = ({children}) => {
    const listButtons = {
        list1: "Home",
        list2: "Projects",
        list3: "Contatos",
        list4: "Misias Digitais",
    };

    return(
        <header>
            {children}
            <ButtonHeader key={1} buttonName={listButtons.list1}/>
            <ButtonHeader key={2} buttonName={listButtons.list2}/>
            <ButtonHeader key={3} buttonName={listButtons.list3}/>
            <ButtonHeader key={4} buttonName={listButtons.list4}/>
        </header>
    )
}