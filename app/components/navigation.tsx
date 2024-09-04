import Link from 'next/link'
import { Button } from "./ui/button"

export function Navigation() {
  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center p-4 bg-secondary shadow-md">
      <Link href="/" className="text-xl md:text-2xl font-bold text-accent mb-4 sm:mb-0">PL Pick 'Em</Link>
      <div className="flex space-x-2">
        <Button variant="ghost" className="text-text hover:text-accent hover:bg-primary/50 text-sm md:text-base">Login</Button>
        <Button className="bg-accent hover:bg-accent/90 text-primary text-sm md:text-base">Sign Up</Button>
      </div>
    </nav>
  )
}