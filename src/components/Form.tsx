import { FaSearch } from "react-icons/fa"

export default function Form() {
  return (
    <form className="mt-9 flex items-center gap-2 rounded-md bg-white px-4 py-3 shadow-md md:gap-4 md:px-10 md:py-4 dark:bg-blue-900">
      <label htmlFor="username" className="sr-only">
        Enter Github Username
      </label>
      <FaSearch className="size-5 shrink-0 text-blue-400 md:size-6" />
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Github Username"
        className="min-w-0 grow rounded p-3 text-base placeholder:text-blue-800/70 focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:outline-none md:p-4 dark:placeholder:text-white/70"
      />
      <button className="cursor-pointer rounded bg-blue-400 p-3 text-white hover:bg-blue-400/90 focus-visible:ring-2 focus-visible:ring-blue-800 focus-visible:outline-none md:px-4 dark:focus-visible:ring-white">
        Search
      </button>
    </form>
  )
}
