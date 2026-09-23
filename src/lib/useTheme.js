import { useCallback, useState } from "react";

const KEY = "theme";

/** Reads the theme set by the inline script in index.html and persists changes. */
export default function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || "dark"
  );

  const toggle = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(KEY, next);
    } catch {
      /* storage unavailable; the choice still applies for this visit */
    }
    setTheme(next);
  }, [theme]);

  return [theme, toggle];
}
