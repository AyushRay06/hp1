import Link from "next/link"
import { Button } from "../button"

const Navbar = () => {
  return (
    <nav className="flex justify-around bg-slate-800 text-white p-2 items-center">
      <Link href="/">Home</Link>
      <ul className="flex gap-x-6">
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/register">Sign-up</Link>
        </li>
        <li>
          <Link href="/secure/dashboard">Dashboard</Link>
        </li>
      </ul>
      <form>
        <Button type="submit">Logout</Button>{" "}
      </form>
    </nav>
  )
}

export default Navbar
