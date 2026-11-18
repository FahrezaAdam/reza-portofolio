"use client";

export function ThemeToggle({ className }: { className?: string }) {
  function toggleTheme() {
    const root = document.documentElement;
    const next = root.classList.contains("dark") ? "light" : "dark";
    root.classList.toggle("dark", next === "dark");
    localStorage.setItem("color-theme", next);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={className}
      title="Toggle Theme"
      aria-label="Toggle theme"
    >
      <span className="material-symbols-outlined theme-icon-moon text-[20px]">
        dark_mode
      </span>
      <span className="material-symbols-outlined theme-icon-sun text-[20px]">
        light_mode
      </span>
    </button>
  );
}
