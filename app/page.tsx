import { Hero } from "./components/hero"
import { Features } from "./components/features"
import { CallToAction } from "./components/call-to-action"

export default function LandingPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Features />
      <CallToAction />
    </main>
  )
}