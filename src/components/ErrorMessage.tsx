import { MdError } from "react-icons/md"

export default function ErrorMessage({
  errorMessage,
}: {
  errorMessage: string
}) {
  return (
    <div className="bg-red/50 m-auto mt-4 flex max-w-2xs items-center justify-center gap-3 rounded-md px-4 py-3 md:px-10">
      <MdError className="size-5" />
      <p>{errorMessage}</p>
    </div>
  )
}
