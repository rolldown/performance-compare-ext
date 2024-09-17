import React from "react";
import ReactDom from "react-dom/client";
import App1 from "./f0";
import App2 from "./f1";
import App3 from "./f2";
import App4 from "./f3";
import App5 from "./f4";
import App6 from "./f5";
import App7 from "./f6";
import App8 from "./f7";
import './index.css'

ReactDom.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App1 />
		<App2 />
		<App3 />
		<App4 />
		<App5 />
		<App6 />
		<App7 />
		<App8 />
	</React.StrictMode>
);
