"use client";

import { useState } from "react";

import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

enum Theme {
  Light = "light",
  Dark = "dark",
}

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>(Theme.Light);

  const toggleTheme = () => {
    if (theme === Theme.Light) {
      setTheme(Theme.Dark);
    } else {
      setTheme(Theme.Light);
    }
  };

  const isDarkMode = theme === Theme.Dark;
  const isLightMode = theme === Theme.Light;

  return (
    <div className="flex items-center space-x-6 pl-6">
      <button
        onClick={toggleTheme}
        className={`p-2 ${isLightMode && "bg-gray-200 rounded-full"}`}
      >
        <IoSunnyOutline className="text-xl" />
      </button>
      <button
        onClick={toggleTheme}
        className={`p-2 ${isDarkMode && "bg-gray-200 p-2 rounded-full"}`}
      >
        <IoMoonOutline className={`text-xl`} />
      </button>
    </div>
  );
}
