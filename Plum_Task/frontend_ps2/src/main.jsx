import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Quiz } from "./pages";

const router = createBrowserRouter([
	{
		path: "/",
		Component: App
	},
	{
		path: "quiz/:topic",
		Component: Quiz
	}
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
