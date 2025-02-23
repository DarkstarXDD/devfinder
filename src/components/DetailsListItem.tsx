import { IconType } from "react-icons"

export default function DetailsListItem({
  icon: Icon,
  content,
}: {
  icon: IconType
  content: string
}) {
  return (
    <li className={`flex items-center gap-4 ${content ? "" : "opacity-75"}`}>
      <Icon className="size-5 shrink-0" />
      <p>{content ? content : "Not Available"}</p>
    </li>
  )
}
