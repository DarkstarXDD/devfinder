"use client"

import { Toggle } from "@radix-ui/react-toggle"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { MdLightMode } from "react-icons/md"
import { MdDarkMode } from "react-icons/md"

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Toggle
      className="cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
      aria-label="Enable dark theme"
      pressed={theme === "dark" ? true : false}
      onPressedChange={(pressed) => setTheme(pressed ? "dark" : "light")}
    >
      {theme === "light" ? (
        <MdLightMode className="size-6" />
      ) : (
        <MdDarkMode className="size-6" />
      )}
    </Toggle>
  )
}
