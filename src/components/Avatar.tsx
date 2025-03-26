import { cn } from "../lib/utils"

export default function Avatar({
  src,
  className,
}: {
  src: string
  className?: string
}) {
  return (
    <img
      src={src}
      alt=""
      width={117}
      height={117}
      className={cn("size-16 md:size-30", className)}
    />
  )
}
