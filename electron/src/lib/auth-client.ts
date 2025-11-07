import { createAuthClient } from "better-auth/react"
import { VITE_BACKEND_API } from "./secret"
export const authClient = createAuthClient({
    baseURL: VITE_BACKEND_API
})