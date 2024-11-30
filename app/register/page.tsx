import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

const Register = async () => {
  return (
    <div className="mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border border-[#121212] dark:bg:bg-black">
      <div className="flex justify-center items-center flex-col">
        <h3 className="font-bold text-2xl">Welcome to our App.</h3>
        <p>Register to use our app.</p>
      </div>
      <form>
        <div>
          <Label htmlFor="firstname">First Name</Label>
          <Input
            placeholder="Ayush"
            type="text"
            name="firstname"
            id="firstname"
          />

          <Label htmlFor="lastname">Last name</Label>
          <Input
            placeholder="Patel"
            type="text"
            id="lastname"
            name="lastname"
          />

          <Label htmlFor="email">Email</Label>
          <Input
            placeholder="rayayush@gmail.com"
            type="email"
            id="email"
            name="email"
          />

          <Label htmlFor="password">Password</Label>
          <Input
            placeholder="********"
            type="password"
            id="password"
            name="password"
          />
        </div>
        <Button size="lg" className="w-full mt-6">
          Sign Up
        </Button>
        <div className="text-center mt-4">
          <Link className="text-center" href="/login">
            Already ahve an account? Login{" "}
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Register
