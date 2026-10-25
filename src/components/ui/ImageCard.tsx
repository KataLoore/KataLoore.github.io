import './ImageCard.css'

type ImageCardProps = {
  title: string
  image?: string
  alt?: string
}

const ImageCard = ({ title, image, alt = '' }: ImageCardProps) => {
  return (
    <figure className="image-card">
      {image ? (
        <img className="image-card-image" src={image} alt={alt} />
      ) : (
        <div className="image-card-placeholder">
          Image coming soon
        </div>
      )}

      <figcaption className="image-card-caption">
        {title}
      </figcaption>
    </figure>
  )
}

export default ImageCard