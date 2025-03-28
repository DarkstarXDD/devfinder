import { UserSchemaType } from "../lib/schemas/github-user"
import { cn } from "../lib/utils"

type BioProps = Partial<Pick<UserSchemaType, "bio">> & { className?: string }

export default function Bio({ bio, className }: BioProps) {
  return (
    <p className={cn(bio ? "" : "opacity-70", className)}>
      {bio || "This profile has no bio."}
    </p>
  )
}
