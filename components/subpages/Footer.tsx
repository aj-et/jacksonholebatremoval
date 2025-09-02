
export default function Footer() {
  return (
    <footer className="bg-rust text-white py-8 text-center">
      <p>© {new Date().getFullYear()} Wildlife Specialists. All rights reserved.</p>
      <p className="mt-2">Serving Wyoming & surrounding areas.</p>
      <p className="mt-2">
        Call us at{" "}
        <a href="tel:(801)675-8829" className="text-gold font-semibold">
          (801) 675-8829
        </a>
      </p>
    </footer>
  )
}
