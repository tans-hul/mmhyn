import { Player } from '@lottiefiles/react-lottie-player'
import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'

function AnimatedIcon({ iconData, height, width }) {
  const [isVisible, setIsVisible] = useState(false)
  const viewportRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update visibility state when target intersects with viewport
        setIsVisible(entry.isIntersecting)
      },
      {
        root: null, // viewport
        rootMargin: '0px', // no margin
        threshold: 0.1, // trigger when 10% of the target is visible
      },
    )

    if (viewportRef.current) {
      observer.observe(viewportRef.current)
    }

    return () => {
      if (viewportRef.current) {
        observer.unobserve(viewportRef.current)
      }
    }
  }, [])

  return (
    <div ref={viewportRef}>
      {isVisible && (
        <Player
          autoplay
          hover={true}
          onMouseEnter
          keepLastFrame
          mode="bounce"
          src={iconData}
          style={{ height, width, margin: 0, cursor: 'unset' }}
        />
      )}
    </div>
  )
}

export default AnimatedIcon

AnimatedIcon.propTypes = {
  iconData: PropTypes.object.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
}
