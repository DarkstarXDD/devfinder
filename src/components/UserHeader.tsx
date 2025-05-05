import Link from "next/link"

import { cn } from "@/lib/utils"

import type { UserSchemaType } from "@/lib/schemas/github-user"

type UserHeaderProps = Partial<
  Pick<UserSchemaType, "name" | "login" | "created_at" | "html_url">
> & { className?: string }

export default function UserHeader({
  name,
  login,
  created_at,
  html_url: profileUrl,
  className = "",
}: UserHeaderProps) {
  return (
    <div className={cn("grid gap-1 self-center", className)}>
      {profileUrl && (
        <>
          <h1 className="text-lg font-bold md:text-xl">{name ?? login}</h1>
          <Link
            href={profileUrl}
            className="justify-self-start text-blue-400 underline outline-none hover:opacity-90 focus-visible:ring-2 focus-visible:ring-blue-300 dark:text-blue-200"
          >
            <p>{`@${login}`}</p>
          </Link>
          <p>Joined: {formatDate(created_at)}</p>
        </>
      )}
    </div>
  )
}

function formatDate(str: string | undefined) {
  if (str === undefined) {
    return null
  }
  const time = new Date(str)
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  }

  return time.toLocaleDateString("en-US", options)
}
