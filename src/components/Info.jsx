const Info = () => {
    return (
        <header className="header">
            <section className="info">
                <div>
                    <h3>Hi, i'm</h3>
                    <h1>Ron Rustemi</h1>
                    <p>A passionate <span>front-end </span> developer from Macedonia.</p>
                </div>
                <div className="tech-stack">
                    <h2>Tech Stack </h2>
                    <hr />
                    <img className="skills1" src="https://skillicons.dev/icons?i=html,css,sass,js,react,materialui&perline=3" />
                    <img className="skills2" src="https://skillicons.dev/icons?i=html,css,sass,js,react,materialui" />
                </div>
            </section>
        </header>
    );
}
 
export default Info;