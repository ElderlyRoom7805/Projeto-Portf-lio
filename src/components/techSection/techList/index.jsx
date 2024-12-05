export const Techlist = ({ children }) => {
    return (
        <section className="sectionTech" id="section-Tech">
            <div className="div-sectionTech">
                <h2 className="h2-sectionTech">technologies used:</h2>
                { children }
            </div>
        </section>
    )
}