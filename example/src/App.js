import React from "react"
// import SlideButton from "react-slide-button"
import SlideButton from "./slide-button/SlideButton"
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx"
import css from "react-syntax-highlighter/dist/esm/languages/prism/css"
import prism from "react-syntax-highlighter/dist/esm/styles/prism/prism"

import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import "./App.css"

SyntaxHighlighter.registerLanguage("jsx", jsx)
SyntaxHighlighter.registerLanguage("css", css)

function App() {
  const [reset, setReset] = React.useState(0)
  return (
    <center>
      <div style={{ width: "400px" }}>
        <br />
        <br />
        <SlideButton
          mainText="Slide me"
          overlayText="S I K E"
          reset={reset}
          onSlideDone={() => {
            toast("Done!", { type: "info" })
            console.log("Done!")
          }}
        />

        <br />
        <br />
        <SlideButton
          mainText="pay"
          overlayText=""
          overlayClassList="custom-width"
          classList="mainText"
          caretClassList="custom-caret-list"
          reset={reset}
          caret={<p style={{ color: "white" }}>Pay With Wallet</p>}
          customCaretWidth={180}
          onSlideDone={() => {
            toast("Done!", { type: "info" })
            console.log("Done!")
          }}
        />
      </div>
    </center>
  )
}

export default App
