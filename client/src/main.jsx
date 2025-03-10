import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/themeContext";
import { UserProvider } from "./context/userContext";
import { LanguageProvider } from "./context/languageContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
    <ThemeProvider>
      <LanguageProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
    </UserProvider>
  </StrictMode>
);
