import { IconType } from "react-icons"

export default function DetailsListItem({
  icon: Icon,
  content,
}: {
  icon: IconType
  content: string
}) {
  return (
    <li className={`flex items-center gap-4 ${content ? "" : "opacity-50"}`}>
      <Icon className="size-5" />
      <p>{content ? content : "Not Available"}</p>
    </li>
  )
}
