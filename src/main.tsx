import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./App.css"

// Make sure the element exists before trying to render
const rootElement = document.getElementById("root")
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
} else {
  console.error("Failed to find the root element")
}
