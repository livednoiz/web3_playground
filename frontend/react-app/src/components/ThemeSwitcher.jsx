import React, { useState } from "react";

const themes = [
  { name: "Light", class: "bg-gradient-to-br from-blue-50 to-purple-100 text-gray-900" },
  { name: "Dark", class: "bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white" }
];

export default function ThemeSwitcher({ onThemeChange }) {
  const [theme, setTheme] = useState(themes[0]);

  function handleChange(e) {
    const selected = themes.find(t => t.name === e.target.value);
    setTheme(selected);
    if (onThemeChange) onThemeChange(selected.class);
  }

  return (
    <div className="mb-4 flex items-center gap-2">
      <label className="font-semibold">Theme:</label>
      <select
        className="p-2 rounded border"
        value={theme.name}
        onChange={handleChange}
      >
        {themes.map(t => (
          <option key={t.name} value={t.name}>{t.name}</option>
        ))}
      </select>
    </div>
  );
}
