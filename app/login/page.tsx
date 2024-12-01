import { login, loginGithub, loginGoogle } from "@/action"
import { auth } from "@/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react"
import Link from "next/link"

const Login = async () => {
  const session = await auth()
  console.log("********", session)
  return (
    <div className="flex h-screen items-center justify-center ">
      <div className="border border-black/60 rounded-lg p-10">
        <form action={login}>
          <h3 className="text-center">Welcomback </h3>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              placeholder="rayayush@gmail.com"
              type="email"
              id="email"
              name="email"
            />
            <Label htmlFor="password">Password</Label>
            <Input
              placeholder="password"
              type="password"
              id="password"
              name="password"
            />
          </div>
        </form>
        {/* Email */}
        <div className="space-y-2 mt-2 font-semibold">
          <Button type="submit" className="w-full">
            Login
          </Button>
          {/* //Google  */}
          <form action={loginGoogle}>
            <Button type="submit" className="w-full ">
              Login with <IconBrandGoogle />
            </Button>
          </form>
          {/* Github */}
          <form action={loginGithub}>
            <Button type="submit" className="w-full ">
              Login with <IconBrandGithub />
            </Button>
          </form>
        </div>
        <div className="text-center mt-4">
          <Link href="/register">Don't have an account? Register</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
