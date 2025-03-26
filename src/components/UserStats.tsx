import { UserSchemaType } from "../lib/schemas/github-user"
import { cn } from "../lib/utils"

type UserStatsProps = Pick<
  UserSchemaType,
  "public_repos" | "followers" | "following"
> & { className: string }

export default function UserStats({
  public_repos: publicRepos,
  followers,
  following,
  className,
}: UserStatsProps) {
  return (
    <dl
      className={cn(
        "flex w-full max-w-96 items-center justify-between rounded-md bg-blue-50 px-4 py-4.5 md:max-w-none md:px-8 dark:bg-blue-950",
        className
      )}
    >
      <UserStatsItem name="Repos" value={publicRepos} />
      <UserStatsItem name="Followers" value={followers} />
      <UserStatsItem name="Following" value={following} />
    </dl>
  )
}

function UserStatsItem({
  name,
  value,
}: {
  name: string
  value: string | number
}) {
  return (
    <div className="grid justify-items-center gap-1">
      <dt>{name}</dt>
      <dd className="text-base font-bold md:text-lg">{value}</dd>
    </div>
  )
}

// Was wondering whether a <dl> would be suitable for this situation.
// The below example uses a <dl> for a same type of usecase.
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl#metadata
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl#wrapping_name-value_groups_in_div_elements
