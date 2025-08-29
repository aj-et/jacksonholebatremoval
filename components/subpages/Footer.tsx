type City = {
  state: string
  phone: string
}

export default function Footer({ city }: { city: City }) {
  return (
    <footer className="bg-rust text-white py-8 text-center">
      <p>© {new Date().getFullYear()} Wildlife Specialists. All rights reserved.</p>
      <p className="mt-2">Serving {city.state} & surrounding areas.</p>
      <p className="mt-2">
        Call us at{" "}
        <a href={`tel:${city.phone}`} className="text-gold font-semibold">
          {city.phone}
        </a>
      </p>
    </footer>
  )
}
