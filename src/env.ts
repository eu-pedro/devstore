import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.url(),
  APP_URL: z.url()
})

const parseSchema = envSchema.safeParse(process.env)

if(!parseSchema.success) {
  
  console.error("Invalid enviroment variables", z.treeifyError(parseSchema.error))

  throw new Error("Invalid enviroment variables")
}

export const env = parseSchema.data