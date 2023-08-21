import { redirect } from "react-router-dom"

export async function requireAuth(request) {
  const pathname = new URL(request.url).pathname
  const isLoggedIn = localStorage.getItem("loggedin")
  const response = redirect(`/login?message=You must log in first&redirectTo=${pathname}`)
  response.body = true
  if (!isLoggedIn) {
    return response
  }
  return null
}