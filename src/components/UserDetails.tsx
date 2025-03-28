import { IconType } from "react-icons"
import { FaLocationDot } from "react-icons/fa6"
import { FaLink } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { HiBuildingOffice2 } from "react-icons/hi2"
import { UserSchemaType } from "../lib/schemas/github-user"
import { cn } from "../lib/utils"

type UserDetailsProps = Partial<
  Pick<UserSchemaType, "location" | "blog" | "twitter_username" | "company">
> & { className?: string }

export default function UserDetails({
  location,
  blog,
  twitter_username: twitter,
  company,
  className,
}: UserDetailsProps) {
  return (
    <ul className={cn("grid gap-4 md:grid-cols-2", className)}>
      <UserDetailsItem icon={FaLocationDot} content={location} />
      <UserDetailsItem
        icon={FaLink}
        content={blog}
        href={blog && formatBlogLink(blog)}
      />
      <UserDetailsItem
        icon={FaTwitter}
        content={twitter && `@${twitter}`}
        href={twitter && `https://x.com/${twitter}`}
      />
      <UserDetailsItem
        icon={HiBuildingOffice2}
        content={company}
        href={company && `https://github.com/${formatCompanyName(company)}`}
      />
    </ul>
  )
}

function UserDetailsItem({
  icon: Icon,
  content,
  href,
}: {
  icon: IconType
  content: string | undefined | null
  href?: string | null
}) {
  const Tag = href ? "a" : "p"
  const aStyles =
    "underline rounded focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:outline-none"
  const pStyles = "no-underline"

  return (
    <li className={`flex items-center gap-4 ${content ? "" : "opacity-70"}`}>
      <Icon className="size-5 shrink-0" />
      <Tag href={href || undefined} className={Tag === "a" ? aStyles : pStyles}>
        {content ? content : "Not Available"}
      </Tag>
    </li>
  )
}

function formatCompanyName(str: string) {
  if (str.includes("@")) {
    return str.split("@")[1]
  } else {
    return str
  }
}

function formatBlogLink(href: string) {
  if (href.includes("https://")) {
    return href
  } else {
    return `https://${href}`
  }
}
