"use client"

import UserHeader from "@/components/UserHeader"
import Avatar from "@/components/Avatar"
import Bio from "@/components/Bio"
import UserStats from "@/components/UserStats"
import UserDetails from "@/components/UserDetails"
import type { UserSchemaType } from "@/lib/schemas/github-user"

export default function UserProfileCard({
  userData,
}: {
  userData: UserSchemaType | undefined
}) {
  return (
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
  )
}
