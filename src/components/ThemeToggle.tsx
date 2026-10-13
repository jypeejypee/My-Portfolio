"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";

type Theme = "light" | "dark";

// Switches between the light and dark theme and remembers the choice.
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
  }

  const label = theme === "dark" ? "Switch to light theme" : "Switch to dark theme";
  return (
    <button type="button" onClick={toggle} className={className} aria-label={label} title={label}>
      <Icon name={theme === "dark" ? "sun" : "moon"} size={20} weight="bold" />
    </button>
  );
}
