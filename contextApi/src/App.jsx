import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Page from "./assets/components/Pages";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext value={{ theme, setTheme }}>
      <Page />
    </ThemeContext>
  );
}

export default App;