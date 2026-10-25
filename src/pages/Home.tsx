import Carousel from '../components/ui/Carousel'
import ToolCard from '../components/ui/ToolCard'

const Home = () => {
    return (
        <div  className="page-content">
            <h1>Let's explore and create - together</h1>
            <p className="text-muted">Find inspiration for your next project, along with new ways to make it your own</p>
            <Carousel title="Explore our digital knitting tools" itemLabel="tool">
                <ToolCard
                    title="3D chart visualizer"
                    description="Plan stitch charts and colourwork to make patterns of your own."
                />
                <ToolCard
                    title="Project tracker"
                    description="Keep track of projects, yarn notes, and all those little modifications."
                />
                <ToolCard
                    title="Knitting statistics"
                    description="View knitting time, progress, and knitting habits."
                />
            </Carousel>
        </div>
        )
}

export default Home
