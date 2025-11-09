import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Rani Pratama',
    role: 'Founder, EduApp',
    text: 'Setelah pakai landing page ini, konversi naik 2x. Setupnya cepat dan tampilannya profesional.'
  },
  {
    name: 'Dimas Arya',
    role: 'CMO, HealthPlus',
    text: 'Desain modern dan responsif. Tim kami bisa edit konten tanpa pusing coding.'
  },
  {
    name: 'Nadia Putri',
    role: 'Owner, Craftly',
    text: 'Loading ngebut dan SEO-nya bagus. Trafik organik ikut naik.'
  }
]

export default function Testimonials() {
  return (
    <section id="testimoni" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Apa Kata Pengguna</h2>
          <p className="mt-3 text-gray-600">Cerita nyata dari brand yang sudah meluncur.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-1 text-yellow-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700">“{t.text}”</p>
              <div className="mt-4">
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-600">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
