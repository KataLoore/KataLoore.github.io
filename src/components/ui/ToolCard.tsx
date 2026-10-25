import { Link } from 'react-router-dom'
import './ToolCard.css'

type ToolCardProps = {
  title: string
  description: string
  image?: string
  to?: string
}

const ToolCard = ({ title, description, image, to }: ToolCardProps) => {
  const content = (
    <>
      {image && <img className="tool-card-background" src={image} alt="" />}
      <div className="tool-card-content">
        <span className="tool-card-status">{to ? 'Explore tool' : 'In the making'}</span>
        <h3 className="tool-card-title">{title}</h3>
        <p className="tool-card-description">{description}</p>
        {to && <span className="tool-card-arrow" aria-hidden="true">↗</span>}
      </div>
    </>
  )

  return to ? (
    <Link className="tool-card tool-card-link" to={to}>{content}</Link>
  ) : (
    <article className="tool-card">{content}</article>
  )
}

export default ToolCard
