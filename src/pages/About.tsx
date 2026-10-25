import './About.css'

const About = () => {
    return (
        <div className="page-content about-page">
            <h1>About</h1>
            <p className="text-muted">A knitting and web-programming hobby project by Kata</p>
            <div className="about-copy">
                <p className="text-primary">
                    Hi, I’m Kata! As an avid knitter and freshly graduated developer,
                    I figured I ought to make something that combines knitting and
                    programming — so here we are.
                </p>
                <p className="text-primary">
                    ...
                </p>
                <p className="text-primary">
                    For now, I’m starting small with the website itself. There are
                    plenty of ideas for what could come next, but I’m figuring it
                    out as I go. I’m making this primarily for myself, but you’re
                    very welcome to follow along and use whatever grows out of it.
                </p>
                <p className="text-primary">It’s a work in progress. Stay tuned! &lt;3</p>
            </div>
        </div>
    )
}

export default About
