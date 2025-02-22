import DetailsListItem from "./components/DetailsListItem"

import { IoSearchOutline } from "react-icons/io5"
import { FaLocationDot } from "react-icons/fa6"
import { FaLink } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { HiBuildingOffice2 } from "react-icons/hi2"

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

        <div className="mt-4 grid gap-6 rounded bg-white px-4 py-4 dark:bg-blue-900">
          <div className="flex items-center gap-5">
            <img
              src="/placeholder.png"
              alt=""
              width={117}
              height={117}
              className="size-16 md:size-30"
            />
            <div className="grid gap-1">
              <h1 className="text-base font-bold">The Octocat</h1>
              <p className="text-blue-400">@octocat</p>
              <p>Joined 25 Jan 2011</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
          </p>
          <div className="bg-blue-50 px-4 py-4.5 dark:bg-blue-950">
            <dl>
              <dt>Repos</dt>
              <dd>8</dd>
            </dl>
            <dl>
              <dt>Followers</dt>
              <dd>3938</dd>
            </dl>
            <dl>
              <dt>Following</dt>
              <dd>9</dd>
            </dl>
          </div>
          <ul className="grid gap-4 md:grid-cols-2">
            <DetailsListItem icon={FaLocationDot} content="San Francisco" />
            <DetailsListItem icon={FaLink} content="https://github.blog" />
            <DetailsListItem icon={FaTwitter} content="" />
            <DetailsListItem icon={HiBuildingOffice2} content="@github" />
          </ul>
        </div>
      </main>
    </>
  )
}
