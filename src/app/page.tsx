import ErrorMessage from "@/components/ErrorMessage"
import Header from "@/components/Header"
import SearchForm from "@/components/SearchForm"
import UserProfileCard from "@/components/UserProfileCard"
import { UserSchema, UserSchemaType } from "@/lib/schemas/github-user"

import type { Metadata } from "next"

type PagePropsType = {
  searchParams: Promise<{ username: string | undefined }>
}

export async function generateMetadata({
  searchParams,
}: PagePropsType): Promise<Metadata> {
  const { username } = await searchParams

  if (!username) {
    return {
      title: "devfinder",
    }
  }

  return {
    title: `devfinder - ${username}'s Profile`,
  }
}

export default async function HomePage({ searchParams }: PagePropsType) {
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
