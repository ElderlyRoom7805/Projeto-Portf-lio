import styles from "./index.module.css";
export const ButtonDiv = () => {
    return(
        <div className={ styles.div }>
            <button type="button" className={ styles.seeButton }>See Projects</button>
            <button type="button" className={ styles.gitButton }></button>
        </div>
    )
}