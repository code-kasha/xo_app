import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import App from "./App.jsx"

import "./index.css"

let root = document.getElementById("root")

if (root === null) {
	root = document.createElement("div")
	root.id = "root"
}

ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
)
