import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import mainRouter from "./routes/main-router.tsx";

if (process.env.NODE_ENV === "development") {
	const { worker } = await import("./mocks/browser.ts");

	// `worker.start()` returns a Promise that resolves
	// once the Service Worker is up and ready to intercept requests.
	await worker.start();
}

const queryClient = new QueryClient();

// biome-ignore lint/style/noNonNullAssertion: we always has root element
ReactDOM.createRoot(document.getElementById("root")!).render(
	<QueryClientProvider client={queryClient}>
		<RouterProvider router={mainRouter} />

		<ReactQueryDevtools initialIsOpen={false} />
	</QueryClientProvider>,
);
