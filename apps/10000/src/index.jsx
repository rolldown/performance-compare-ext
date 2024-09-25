import React from "react";
import ReactDom from "react-dom/client";
import App1 from "./f0";
import './index.css'

ReactDom.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App1 />
	</React.StrictMode>
);

