
import { notFound } from "next/navigation"
import fs from "fs"
import path from "path"

type Props = {
  params: {
    state: string
    category: string
  }
}

export default function TourCategoryPage({ params }: Props) {
  const { state } = params

  const dataPath = path.join(
    process.cwd(),
    "data",
    "spiritual-tours",
    "India",
    state
  )

  if (!fs.existsSync(dataPath)) return notFound()

  const tours:any[] = []

  fs.readdirSync(dataPath).forEach((city) => {
    const cityPath = path.join(dataPath, city)
    fs.readdirSync(cityPath).forEach((file) => {
      const content = fs.readFileSync(path.join(cityPath, file), "utf-8")
      tours.push(JSON.parse(content))
    })
  })

  if (!tours.length) return notFound()

  return (
    <main className="container">
      <h1 className="page-title">
        Spiritual Tours in {state.replace("-", " ")}
      </h1>

      <div className="grid">
        {tours.map((tour, i) => (
          <article key={i} className="card">
            <h2>{tour.title}</h2>
            <p>{tour.description}</p>
            <ul>
              <li>📍 {tour.location}</li>
              <li>🕒 {tour.duration}</li>
            </ul>
            <button>Enquire Now</button>
          </article>
        ))}
      </div>
    </main>
  )
}
