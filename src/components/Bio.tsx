import { UserSchemaType } from "../lib/schemas/github-user"
import { cn } from "../lib/utils"

type BioProps = Pick<UserSchemaType, "bio"> & { className?: string }

export default function Bio({ bio, className }: BioProps) {
  return (
    <p className={cn(bio ? "" : "opacity-75", className)}>
      {bio || "This profile has no bio"}
    </p>
  )
}
