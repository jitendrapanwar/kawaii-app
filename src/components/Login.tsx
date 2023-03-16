import { useState } from "react"

type userProps = {
  name: string
  email: string
}
export const Login = () => {

  const [user, setUser] = useState<userProps | null>(null)
  const handleLogin = () => { setUser({
    name: 'jitendra',
    email: 'jitendra@123.com'
  })}
  const handleLogout = () => { setUser(null)}
  return (
    <div>
    <button onClick={handleLogin}>Login In</button>
    <button onClick={handleLogout}>Logged Out</button>
    <div>{user?.name}</div>
    <div>{user?.email}</div>
    </div>
  )
}