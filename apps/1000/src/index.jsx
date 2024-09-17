import React from "react";
import ReactDom from "react-dom/client";
import App1 from "./f0";
import App2 from "./f1";
import App3 from "./f2";
import App4 from "./f3";
import './index.css'

ReactDom.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App1 />
		<App2 />
		<App3 />
		<App4 />
	</React.StrictMode>
);
