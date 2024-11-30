import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react"
import Link from "next/link"

const Login = () => {
  return (
    <div className="flex h-screen items-center justify-center ">
      <div className="border border-black/60 rounded-lg p-10">
        <form>
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
          <div className="space-y-2 mt-2 font-semibold">
            <button type="submit" className="w-full">
              Login
            </button>
            <button type="submit" className="w-full flex bg-slate-300 p-2">
              Login with <IconBrandGoogle />
            </button>
            <button type="submit" className="w-full flex bg-slate-300 p-2">
              Login with <IconBrandGithub />
            </button>
          </div>
          <div className="text-center mt-4">
            <Link href="/register">Don't have an account? Register</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
