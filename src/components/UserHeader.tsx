import { cn } from "../lib/utils"
import type { UserSchemaType } from "../lib/schemas/github-user"

type UserHeaderProps = Partial<
  Pick<UserSchemaType, "name" | "login" | "created_at">
> & { className?: string }

export default function UserHeader({
  name,
  login,
  created_at,
  className = "",
}: UserHeaderProps) {
  return (
    <div className={cn("grid gap-1 self-center", className)}>
      <h1 className="text-lg font-bold md:text-xl">{name ?? login ?? "-"}</h1>
      <p className="text-blue-400 dark:text-blue-200">
        {login ? `@${login}` : "-"}
      </p>
      <p>Joined {created_at ?? "-"}</p>
    </div>
  )
}
