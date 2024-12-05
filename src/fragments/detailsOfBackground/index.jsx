import styles from "./index.module.css";
export const Details = () => {
    return(
        <>
        <div className={ styles.totalbox}>
            <div className={ styles.box }>
                <div className={ styles.ball }></div>
                <div className={ styles.ball }></div>
                <div className={ styles.ball }></div>
                <div className={ styles.ball }></div>
                <div className={ styles.ball }></div>
            </div>
            <div className={ styles.box }>
                <div className={ styles.ball }></div>
                <div className={ styles.ball }></div>
                <div className={ styles.ball }></div>
                <div className={ styles.ball }></div>
                <div className={ styles.ball }></div>
            </div>
            <div className={ styles.box }>
                <div className={ styles.ball }></div>
                <div className={ styles.ball }></div>
                <div className={ styles.ball }></div>
                <div className={ styles.ball }></div>
                <div className={ styles.ball }></div>
            </div>
        </div>
        </>
    )
}