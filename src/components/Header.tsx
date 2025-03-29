import ThemeToggle from "@/components/ThemeToggle"

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <p className="text-xl font-bold">devfinder</p>
      <ThemeToggle />
    </header>
  )
}
