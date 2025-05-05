import { cn } from "@/lib/utils"

import type { UserSchemaType } from "@/lib/schemas/github-user"

type BioProps = Partial<Pick<UserSchemaType, "bio">> & { className?: string }

export default function Bio({ bio, className }: BioProps) {
  return (
    <p className={cn(bio ? "" : "opacity-70", className)}>
      {bio || "This profile has no bio."}
    </p>
  )
}
