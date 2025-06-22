// main.tsx
import "@/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UserProvider } from "./contexts/UserContext.tsx"; // adjust path as needed

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider> {/* ✅ Wrap App here */}
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
