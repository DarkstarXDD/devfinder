import ErrorMessage from "@/components/ErrorMessage"
import Header from "@/components/Header"
import SearchForm from "@/components/SearchForm"
import UserProfileCard from "@/components/UserProfileCard"
import { UserSchema, UserSchemaType } from "@/lib/schemas/github-user"

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ username: string | undefined }>
}) {
  let userData: UserSchemaType | undefined
  let error: string | undefined

  const { username } = await searchParams

  const response = await fetch(
    `https://api.github.com/users/${username || "octocat"}`
  )

  if (response.ok) {
    const data = await response.json()
    const parsedUserData = UserSchema.safeParse(data)
    if (parsedUserData.success) {
      userData = parsedUserData.data
    } else {
      error = "Error fetching user data"
    }
  } else {
    error = "User not found"
  }

  return (
    <div className="w-full max-w-md md:max-w-xl lg:max-w-3xl">
      <Header />
      <main>
        <SearchForm />
        {error && <ErrorMessage errorMessage={error} />}
        <UserProfileCard userData={userData} />
      </main>
    </div>
  )
}
