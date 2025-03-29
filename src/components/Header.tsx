"use client"

import { Toggle } from "@radix-ui/react-toggle"
import { useTheme } from "next-themes"
import { MdLightMode } from "react-icons/md"
import { MdDarkMode } from "react-icons/md"

export default function Header() {
  const { theme, setTheme } = useTheme()

  console.log(theme)
  return (
    <header className="flex items-center justify-between">
      <p className="text-xl font-bold">devfinder</p>
      <Toggle
        className="cursor-pointer"
        aria-label="Enable dark theme"
        onPressedChange={(pressed) => setTheme(pressed ? "dark" : "light")}
      >
        {theme === "light" ? (
          <MdLightMode className="size-6" />
        ) : (
          <MdDarkMode className="size-6" />
        )}
      </Toggle>
    </header>
  )
}
