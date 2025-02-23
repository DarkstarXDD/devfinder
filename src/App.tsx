import Header from "./components/Header"
import Form from "./components/Form"
import DetailsListItem from "./components/DetailsListItem"

import { FaLocationDot } from "react-icons/fa6"
import { FaLink } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { HiBuildingOffice2 } from "react-icons/hi2"

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Form />

        <div className="mt-4 grid gap-6 rounded-md bg-white p-4 shadow-md md:gap-10 md:p-10 dark:bg-blue-900">
          <div className="flex items-center gap-5 md:gap-10">
            <img
              src="/placeholder.png"
              alt=""
              width={117}
              height={117}
              className="size-16 md:size-30"
            />
            <div className="grid gap-1">
              <h1 className="text-base font-bold md:text-xl">The Octocat</h1>
              <p className="text-blue-400 dark:text-blue-200">@octocat</p>
              <p>Joined 25 Jan 2011</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
          </p>
          <div className="flex w-full max-w-96 items-center justify-between justify-self-center rounded-md bg-blue-50 px-4 py-4.5 md:max-w-none md:px-8 dark:bg-blue-950">
            <dl className="grid justify-items-center gap-1">
              <dt>Repos</dt>
              <dd className="text-base font-bold md:text-lg">8</dd>
            </dl>
            <dl className="grid justify-items-center gap-1">
              <dt>Followers</dt>
              <dd className="text-base font-bold md:text-lg">3938</dd>
            </dl>
            <dl className="grid justify-items-center gap-1">
              <dt>Following</dt>
              <dd className="text-base font-bold md:text-lg">9</dd>
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
