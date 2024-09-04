import { Button } from "./ui/button"

export function Hero() {
  return (
    <section className="text-center py-12 md:py-20 px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-blue-800">Premier League Pick 'Em League</h1>
      <p className="text-lg md:text-xl mb-8 text-blue-600">Compete with friends and fans worldwide in predicting Premier League results!</p>
      <Button className="bg-blue-500 hover:bg-blue-600 text-white text-base md:text-lg px-6 py-2 md:px-8 md:py-3">Get Started</Button>
    </section>
  )
}