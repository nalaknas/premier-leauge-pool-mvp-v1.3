import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"

const features = [
  { title: "Weekly Picks", description: "Submit your predictions for each Premier League matchday" },
  { title: "Custom Leagues", description: "Create or join private leagues with friends" },
  { title: "Live Standings", description: "Track your performance in real-time" },
]

export function Features() {
  return (
    <section className="py-12 md:py-20 bg-white px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10 text-blue-800">Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <Card key={index} className="border-blue-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl text-blue-600">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm md:text-base text-blue-800">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}