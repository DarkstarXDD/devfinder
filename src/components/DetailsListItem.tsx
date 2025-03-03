import { IconType } from "react-icons"

export default function DetailsListItem({
  icon: Icon,
  content,
  href,
}: {
  icon: IconType
  content: string | undefined
  href?: string
}) {
  const Tag = href ? "a" : "p"
  const aStyles =
    "underline rounded focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:outline-none"
  const pStyles = "no-underline"

  return (
    <li className={`flex items-center gap-4 ${content ? "" : "opacity-75"}`}>
      <Icon className="size-5 shrink-0" />
      <Tag href={href} className={Tag === "a" ? aStyles : pStyles}>
        {content ? content : "Not Available"}
      </Tag>
    </li>
  )
}
