import React, { useState, useEffect, useRef } from "react"
import { useSwipeable } from "react-swipeable"
import Arrow from "./arrow.png"

import "./slideBtn.css"

const dirTypes = ["Left", "Down", "Up"]

const findLeft = (element) => {
  var rec = element.getBoundingClientRect()
  return rec.left + window.scrollX
}

const SlideButton = ({
  mainText,
  overlayText,
  onSlideDone,
  reset,
  classList = "",
  overlayClassList = "",
  caretClassList = "",
  delta = 10,
  minSlideWidth = 0.6,
  minSlideVelocity = 0.6,
  caret = null,
  customCaretWidth = 40
}) => {
  const [overlayWidth, setOverlayWidth] = useState(customCaretWidth)
  const [slideComplete, setSlideComplete] = useState(false)
  const buttonRef = useRef()

  useEffect(() => {
    if (reset) {
      setSlideComplete(false)
      setOverlayWidth(customCaretWidth)
    }
  }, [reset])

  const handlers = useSwipeable({
    onSwipedRight: (data) => {
      if (slideComplete) return
      const butWidth = buttonRef.current.offsetWidth
      if (data.velocity > minSlideVelocity) {
        setOverlayWidth(butWidth)
        setSlideComplete(true)
        setTimeout(() => onSlideDone(), 100)
      } else {
        const offsetLeft = findLeft(buttonRef.current)
        const startPos = Math.abs(data.initial[0] - offsetLeft)
        if (
          startPos <= 100 + customCaretWidth &&
          (data.event.type === "touchend"
            ? data.event.changedTouches[0].clientX - offsetLeft
            : data.event.offsetX) >
            minSlideWidth * butWidth
        ) {
          setOverlayWidth(butWidth)
          setSlideComplete(true)
          setTimeout(() => onSlideDone(), 100)
        } else setOverlayWidth(customCaretWidth)
      }
    },
    onSwiping: (data) => {
      if (slideComplete || dirTypes.includes(data.dir)) return
      const offsetLeft = findLeft(buttonRef.current)
      const startPos = Math.abs(data.initial[0] - offsetLeft)
      if (startPos <= 100 + customCaretWidth) {
        if (data.event.type && data.event.type === "touchmove")
          setOverlayWidth(data.event.touches[0].clientX - offsetLeft)
        else {
          if (data.event.offsetX > customCaretWidth) {
            setOverlayWidth(data.event.offsetX)
          }
        }
      }
    },
    delta,
    trackMouse: true,
    preventDefaultTouchmoveEvent: true
  })

  return (
    <div
      className={`slide-but ${classList}`}
      {...handlers}
      ref={(t) => {
        handlers.ref(t)
        buttonRef.current = t
      }}
    >
      <div
        className={`slide-overlay ${overlayClassList}`}
        style={{ width: overlayWidth }}
      >
        <div className="slide-overlay-wrapper">
          <div
            style={{
              width: customCaretWidth,
              maxWidth: customCaretWidth
            }}
            className={`slide-caret-wrapper ${caretClassList}`}
          >
            {caret ? (
              caret
            ) : (
              <img src={Arrow} alt="caret" style={{ maxWidth: "100%" }} />
            )}
          </div>
          <div className="slide-overlay-txt" style={{ width: overlayWidth }}>
            {overlayText}
          </div>
        </div>
      </div>

      {mainText}
    </div>
  )
}

export default SlideButton
