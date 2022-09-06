import * as React from "react"
interface SlideProps {
  mainText: any
  overlayText: any
  onSlideDone: function
  reset?: Number
  classList?: String
  overlayClassList?: String
  caretClassList?: String
  delta?: Number
  minSlideWidth?: Number
  minSlideVelocity?: Number
  caret?: any
  customCaretWidth?: Number
}
declare class Slide extends React.Component<SlideProps, any> {}

export default Slide
