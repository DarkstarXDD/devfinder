import Header from "./components/Header"
import SearchForm from "./components/SearchForm"
import UserHeader from "./components/UserHeader"
import Avatar from "./components/Avatar"
import Bio from "./components/Bio"
import UserStats from "./components/UserStats"
import UserDetails from "./components/UserDetails"
import ErrorMessage from "./components/ErrorMessage"

import { useEffect, useState } from "react"
import { UserSchema, type UserSchemaType } from "./lib/schemas/github-user"

export default function App() {
  const [userData, setUserData] = useState<UserSchemaType>()
  const [error, setError] = useState<string>()

  async function getUserData(username: string) {
    const response = await fetch(`https://api.github.com/users/${username}`)
    if (!response.ok) {
      setError("User not found")
      setUserData(undefined)
      return
    }

    const data = await response.json()

    const parsedUserData = UserSchema.safeParse(data)
    if (!parsedUserData.success) {
      setError("Error fetching user data")
    }
    setError(undefined)
    setUserData(parsedUserData.data)
  }

  useEffect(() => {
    getUserData("octocat")
  }, [])

  return (
    <>
      <Header />
      <main>
        <SearchForm onSearch={getUserData} />

        {error && <ErrorMessage errorMessage={error} />}

        {/* {userData && ( */}
        <div className="mt-4 grid grid-cols-[auto_1fr] gap-6 rounded-md bg-white p-4 shadow-md md:gap-10 md:p-10 dark:bg-blue-900">
          <Avatar src={userData?.avatar_url} className="lg:row-span-2" />
          <UserHeader
            name={userData?.name}
            login={userData?.login}
            created_at={userData?.created_at}
          />
          <Bio bio={userData?.bio} className="col-span-2 lg:col-start-2" />

          <UserStats
            className="col-span-2 justify-self-center lg:col-start-2"
            public_repos={userData?.public_repos}
            followers={userData?.followers}
            following={userData?.following}
          />

          <UserDetails
            className="col-span-2 lg:col-start-2"
            location={userData?.location}
            blog={userData?.blog}
            twitter_username={userData?.twitter_username}
            company={userData?.company}
          />
        </div>
        {/* )} */}
      </main>
    </>
  )
}
