import './About.css'

const About = () => {
    return (
        <div className="page-content about-page">
            <h1>About</h1>
            <p className="text-muted">Exploring knitting and programming</p>
            <div className="about-copy">
                <p className="text-primary">
                    Hi, I’m Kata! I'm an avid knitter and freshly graduated developer. This website, Keepsake Knits, is my current hobby project. It acts as a sandbox where i try to do cool stuff by combining knitting and programming.
                </p>
                <p className="text-primary">
                     The long term goal of this project is to develop a collection of digital knitting tools. As this is an exploratory project, the plan is largely made up as I go. The tools could, for instance, range from project trackers to chart visualizers. Regardless of the final outcome, my hope is to boost creative ideation and encourage unique knitting projects.
                </p>
                <p className="text-primary">
                    At the moment, Keepsake Knits is still in early-stage development. I will be exploring some fun ideas moving forward, and hope to share the results of my work on a rolling basis. You are very welcome to follow along and use whatever grows out of this little project of mine.
                </p>
                <p className="text-primary">Stay tuned! &lt;3</p>
            </div>
        </div>
    )
}

export default About
