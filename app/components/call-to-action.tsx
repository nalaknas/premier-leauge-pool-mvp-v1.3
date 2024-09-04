import { Button } from "./ui/button"

export function CallToAction() {
  return (
    <section className="w-full bg-accent">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-primary">Ready to join the league?</h2>
        <p className="text-base md:text-xl mb-8 text-primary/80">Sign up now and start making your picks!</p>
        <Button className="bg-primary text-text hover:bg-primary/90 text-base md:text-lg px-6 py-2 md:px-8 md:py-3">
          Sign Up
        </Button>
      </div>
    </section>
  )
}