import React from "react"
import SlideButton from "react-slide-button"
// import SlideButton from "./slide-button/SlideButton"
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
    <div className="App">
      <ToastContainer
        autoClose={3000}
        pauseOnHover={false}
        position="bottom-center"
      />
      <a
        href="https://github.com/A-Rehman01/react-slide-button"
        className="github-corner"
        aria-label="View source on GitHub"
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 250 250"
          style={{
            fill: "#151513",
            color: "#fff",
            position: "fixed",
            top: 0,
            border: 0,
            right: 0
          }}
          aria-hidden="true"
        >
          <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
          <path
            d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
            fill="currentColor"
            style={{ transformOrigin: "130px 106px" }}
            class="octo-arm"
          ></path>
          <path
            d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
            fill="currentColor"
            class="octo-body"
          ></path>
        </svg>
      </a>
      <div className="wrapper">
        <center>
          <h1 style={{ fontFamily: "monospace" }}>react-slide-button</h1>
        </center>
        <div className="content-wrapper">
          <div className="col heading centered">basic usage</div>
          <div className="col centered">
            <div className="button-wrapper">
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
              <center>
                <button onClick={() => setReset((r) => r + 1)}>Reset</button>
              </center>
            </div>
          </div>
          <div className="col">
            <SyntaxHighlighter language="jsx" style={prism}>
              {`import SlideButton from 'react-slide-button';

const [reset, setReset] = useState(0);

<SlideButton 
  mainText="slide me" 
  overlayText="S I K E" 
  onSlideDone={function () {
    console.log("Done!");
  }} 
  reset={reset}
/>

<button onClick={() => {
  setReset(counter => counter + 1)
}}
>
  Reset
</button>
`}
            </SyntaxHighlighter>
          </div>
          {/* ====================================================================================================== */}

          <div className="col heading centered">custom caret width</div>
          <div className="col centered">
            <div className="button-wrapper">
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
              <br />
              <center>
                <button onClick={() => setReset((r) => r + 1)}>Reset</button>
              </center>
            </div>
          </div>
          <div className="col">
            <SyntaxHighlighter language="jsx" style={prism}>
              {`<SlideButton
                mainText=""
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
              />`}
            </SyntaxHighlighter>
          </div>

          {/* ==================================================================================================================== */}
          <div className="col heading centered">custom colors</div>
          <div className="col centered">
            <div className="button-wrapper">
              <SlideButton
                mainText="Slide me"
                reset={reset}
                overlayText="S I K E"
                classList="my-class"
                caretClassList="my-caret-class"
                overlayClassList="my-overlay-class"
                onSlideDone={() => {
                  toast("Done!", { type: "info" })
                  console.log("Done!")
                }}
              />
              <br />
              <center>
                <button onClick={() => setReset((r) => r + 1)}>Reset</button>
              </center>
            </div>
          </div>
          <div className="col">
            <SyntaxHighlighter language="css" style={prism}>
              {`.my-class {
  border-color:red !important;
}
.my-caret-class {
  background:dodgerblue !important;
}
.my-overlay-class {
  background:green !important;
}`}
            </SyntaxHighlighter>
            <SyntaxHighlighter language="jsx" style={prism}>
              {`<SlideButton 
  mainText="Slide me" 
  overlayText="S I K E"
  classList="my-class"
  caretClassList="my-caret-class"
  overlayClassList="my-overlay-class"
  onSlideDone={function () {
    console.log("Done!");
  }} 
/>`}
            </SyntaxHighlighter>
          </div>
          {/* ====================================================================================================== */}
          <div className="col heading centered">size</div>
          <div className="col centered">
            <div style={{ width: "200px" }}>
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
              <center>
                <button onClick={() => setReset((r) => r + 1)}>Reset</button>
              </center>
            </div>
          </div>
          <div className="col">
            <SyntaxHighlighter language="jsx" style={prism}>
              {`<div style={{width:'200px'}}>
  <SlideButton 
  ...
  />
</div>`}
            </SyntaxHighlighter>
          </div>
          {/* ====================================================================================================== */}
          <div className="col heading centered">custom elements as text</div>
          <div className="col centered">
            <div className="button-wrapper">
              <SlideButton
                mainText={
                  <span>
                    Sw<b style={{ color: "red", fontSize: "19px" }}>ipe</b> me
                  </span>
                }
                overlayText={
                  <span>
                    S I <b style={{ color: "cyan", fontSize: "19px" }}>K E</b>
                  </span>
                }
                reset={reset}
                onSlideDone={() => {
                  toast("Done!", { type: "info" })
                  console.log("Done!")
                }}
              />
              <br />
              <center>
                <button onClick={() => setReset((r) => r + 1)}>Reset</button>
              </center>
            </div>
          </div>
          <div className="col">
            <SyntaxHighlighter language="jsx" style={prism}>
              {`<SlideButton 
  mainText={<span>Sw<b style={{ color: 'red', fontSize: '19px' }}>ipe</b> me</span>}
  overlayText={<span>S I <b style={{ color: 'cyan', fontSize: '19px' }}>K E</b></span>}
  ...
/>`}
            </SyntaxHighlighter>
          </div>
          {/* ====================================================================================================== */}
          <div className="col heading centered">custom caret</div>
          <div className="col centered">
            <div className="button-wrapper">
              <SlideButton
                mainText="Slide me"
                overlayText="S I K E"
                reset={reset}
                caret={<img src="./caret.png" alt="img" />}
                onSlideDone={() => {
                  toast("Done!", { type: "info" })
                  console.log("Done!")
                }}
              />
              <br />
              <center>
                <button onClick={() => setReset((r) => r + 1)}>Reset</button>
              </center>
            </div>
          </div>
          <div className="col">
            <SyntaxHighlighter language="jsx" style={prism}>
              {`<SlideButton
  caret={<img src="./caret.png" />}
  ...
/>`}
            </SyntaxHighlighter>
          </div>
          {/* ====================================================================================================== */}
        </div>
      </div>
    </div>
  )
}

export default App
