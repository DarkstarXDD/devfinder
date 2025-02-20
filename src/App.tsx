import { IoSearchOutline } from "react-icons/io5"

export default function App() {
  return (
    <>
      <header className="flex items-center justify-between">
        <p className="text-lg font-bold">devfinder</p>
        <p>Light</p>
      </header>
      <main>
        <form className="flex items-center gap-2 rounded bg-blue-900 px-4 py-3">
          <label htmlFor="username" className="sr-only">
            Enter Github Username
          </label>
          <IoSearchOutline className="size-5 shrink-0 text-blue-400" />
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Github Username"
            className="min-w-0 grow rounded p-3 text-base focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:outline-none"
          />
          <button className="cursor-pointer rounded bg-blue-400 p-3 text-sm text-white hover:bg-blue-400/90 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none">
            Search
          </button>
        </form>
      </main>
    </>
  )
}
