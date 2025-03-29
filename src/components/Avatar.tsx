import { cn } from "../lib/utils"
import { IoPerson } from "react-icons/io5"
import Image from "next/image"

export default function Avatar({
  src,
  className,
}: {
  src: string | undefined
  className?: string
}) {
  if (!src) {
    return <PlaceholderImage className={className} />
  }
  return (
    <Image
      priority
      src={src}
      alt=""
      width={117}
      height={117}
      className={cn("size-16 rounded-full md:size-30", className)}
    />
  )
}

function PlaceholderImage({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex size-16 items-center justify-center rounded-full bg-blue-300 md:size-30",
        className
      )}
    >
      <IoPerson className="size-8 text-blue-900 md:size-16" />
    </div>
  )
}
