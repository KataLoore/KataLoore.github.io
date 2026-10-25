import { Children, useEffect, useId, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import './Carousel.css'

type CarouselProps = {
  children: ReactNode
  title: string
  itemLabel?: string
}

const Carousel = ({ children, title, itemLabel = 'image' }: CarouselProps) => {
  const id = useId()
  const trackRef = useRef<HTMLUListElement>(null)
  const [canGoBack, setCanGoBack] = useState(false)
  const [canGoForward, setCanGoForward] = useState(false)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const updateControls = () => {
      setCanGoBack(track.scrollLeft > 1)
      setCanGoForward(track.scrollLeft + track.clientWidth < track.scrollWidth - 1)
    }

    const frame = requestAnimationFrame(updateControls)
    const observer = new ResizeObserver(updateControls)
    observer.observe(track)
    for (const card of track.children) observer.observe(card)
    track.addEventListener('scroll', updateControls, { passive: true })

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      track.removeEventListener('scroll', updateControls)
    }
  }, [children])

  const scrollCards = (direction: number) => {
    const track = trackRef.current
    if (!track) return

    const first = track.children[0] as HTMLElement | undefined
    const second = track.children[1] as HTMLElement | undefined
    const distance = first && second
      ? second.offsetLeft - first.offsetLeft
      : track.clientWidth

    track.scrollBy({
      left: direction * distance,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'instant'
        : 'smooth',
    })
  }

  return (
    <section className="carousel" aria-labelledby={`${id}-title`}>
      <div className="carousel-header">
        <h2 id={`${id}-title`}>{title}</h2>
        <div className="carousel-controls">
          <button type="button" aria-label={`Previous ${itemLabel}`} aria-controls={id}
            aria-disabled={!canGoBack} onClick={() => canGoBack && scrollCards(-1)}>
            <span aria-hidden="true">←</span>
          </button>
          <button type="button" aria-label={`Next ${itemLabel}`} aria-controls={id}
            aria-disabled={!canGoForward} onClick={() => canGoForward && scrollCards(1)}>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
      <ul ref={trackRef} id={id} className="carousel-track"
        tabIndex={0} aria-label={`${title} — scrollable ${itemLabel} cards`}>
        {Children.map(children, (child) => (
          <li className="carousel-slide">{child}</li>
        ))}
      </ul>
    </section>
  )
}

export default Carousel
