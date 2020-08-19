import React, { useState, useEffect } from "react"
import { useSwipeable } from "react-swipeable"
import Img from "gatsby-image"

const Carousel = props => {
  let container = null
  const [elementWidth, setElementWidth] = useState(0)
  const [left, setLeft] = useState(0)

  useEffect(() => {
    const element = container.firstChild
    const margin = parseInt(window.getComputedStyle(element).marginRight)
    const newWidth = Math.round(element.getBoundingClientRect().width + margin)
    return setElementWidth(newWidth)
  }, [elementWidth])

  const handleSwipe = (e, dx) => {
    if (dx < 0) {
      // swiped right
      return setLeft(Math.max(left - elementWidth, 0))
    } else {
      // swiped left
      const fromRight = container.lastChild.getBoundingClientRect().right
      if (fromRight > window.innerWidth) {
        return setLeft(left + elementWidth)
      }
    }
  }

  const handlers = useSwipeable({
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  })

  return (
    <div {...handlers}>
      <div className="styled-scroller" {...props}>
        <div className="outer-scroller-wrapper container">
          <div
            className="inner-scroller-wrapper"
            style={{
              transform: `translate3d(-${left}px, 0, 0)`,
            }}
            ref={node => (container = node)}
          >
            {props.images.map(child => (
              <div className="slide-image">
                <Img fixed={child.childImageSharp.fixed} />
              </div>
            ))}
          </div>
          <div className="arrows">
            <div
              className="mdi previous-arrow"
              onClick={e => handleSwipe(e, -1)}
            ></div>
            <div
              className="mdi next-arrow"
              onClick={e => handleSwipe(e, 1)}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel
