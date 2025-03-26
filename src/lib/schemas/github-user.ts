import { z } from "zod"

export type UserSchemaType = z.infer<typeof UserSchema>

export const UserSchema = z.object({
  login: z.string(),
  id: z.number(),
  avatar_url: z.string(),
  html_url: z.string(),
  name: z.string().nullable(),
  company: z.string().nullable(),
  blog: z.string().nullable(),
  location: z.string().nullable(),
  email: z.string().nullable(),
  bio: z.string().nullable(),
  twitter_username: z.string().nullable(),
  public_repos: z.number(),
  public_gists: z.number(),
  followers: z.number(),
  following: z.number(),
  created_at: z.string(),
})
