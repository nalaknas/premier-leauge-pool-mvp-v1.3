import Link from 'next/link'
import { Button } from "./ui/button"

export function Navigation() {
  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center p-4 bg-white shadow-md">
      <Link href="/" className="text-xl md:text-2xl font-bold text-blue-600 mb-4 sm:mb-0">PL Pick 'Em</Link>
      <div className="flex space-x-2">
        <Button variant="ghost" className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 text-sm md:text-base">Login</Button>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white text-sm md:text-base">Sign Up</Button>
      </div>
    </nav>
  )
}