import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { ThemeProvider } from "./context/ThemeProvider";
import "./App.css";

function ThemeSwitcherApp() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <main className="app-shell" data-theme={theme}>
      <section className="theme-card">
        <p className="theme-label">
          {theme === "light" ? "Light Mode" : "Dark Mode"}
        </p>
        <button type="button" className="toggle-button" onClick={toggleTheme}>
          Toggle Theme
        </button>
      </section>
    </main>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemeSwitcherApp />
    </ThemeProvider>
  );
}

export default App;
