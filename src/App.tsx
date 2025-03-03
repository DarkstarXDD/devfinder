import Header from "./components/Header"
import Form from "./components/Form"
import DescriptionListItem from "./components/DescriptionListItem"
import DetailsListItem from "./components/DetailsListItem"

import { FaLocationDot } from "react-icons/fa6"
import { FaLink } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { HiBuildingOffice2 } from "react-icons/hi2"

export default function App() {
  // Temporary
  const location = "San Francisco"
  const blog = "https://github.blog"
  const twitter = "octocat"
  const company = "@github"

  return (
    <>
      <Header />
      <main>
        <Form />

        <div className="mt-4 grid grid-cols-[auto_1fr] gap-6 rounded-md bg-white p-4 shadow-md md:gap-10 md:p-10 dark:bg-blue-900">
          <img
            src="/placeholder.png"
            alt=""
            width={117}
            height={117}
            className="size-16 md:size-30 lg:row-span-2"
          />
          <div className="grid gap-1 self-start lg:grid-cols-2">
            <h1 className="text-lg font-bold md:text-xl">The Octocat</h1>
            <p className="text-blue-400 dark:text-blue-200">@octocat</p>
            <p className="lg:col-start-2 lg:row-start-1 lg:justify-self-end">
              Joined 25 Jan 2011
            </p>
          </div>

          <p className="col-span-2 lg:col-start-2">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
          </p>

          <dl className="col-span-2 flex w-full max-w-96 items-center justify-between justify-self-center rounded-md bg-blue-50 px-4 py-4.5 md:max-w-none md:px-8 lg:col-start-2 dark:bg-blue-950">
            <DescriptionListItem name="Repos" value="8" />
            <DescriptionListItem name="Followers" value="3938" />
            <DescriptionListItem name="Following" value="9" />
          </dl>

          <ul className="col-span-2 grid gap-4 md:grid-cols-2 lg:col-start-2">
            <DetailsListItem icon={FaLocationDot} content={location} />
            <DetailsListItem icon={FaLink} content={blog} href={blog} />
            <DetailsListItem
              icon={FaTwitter}
              content={twitter ? `@${twitter}` : undefined}
              href={twitter ? `https://x.com/${twitter}` : undefined}
            />
            <DetailsListItem
              icon={HiBuildingOffice2}
              content={company}
              href={`https://github.com/${company.split("@")[1]}`}
            />
          </ul>
        </div>
      </main>
    </>
  )
}
