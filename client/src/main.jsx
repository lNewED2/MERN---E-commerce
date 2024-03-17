import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./router/Router"
import AuthProvider from "./context/AuthProvider";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </AuthProvider>
);