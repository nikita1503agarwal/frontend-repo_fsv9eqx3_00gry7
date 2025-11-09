import { Shield, Zap, Layout, LineChart } from 'lucide-react'

const features = [
  {
    icon: Layout,
    title: 'Desain Profesional',
    desc: 'Komponen siap pakai dengan tipografi rapi dan warna yang konsisten.'
  },
  {
    icon: Zap,
    title: 'Performa Cepat',
    desc: 'Optimasi gambar, caching, dan praktik terbaik untuk loading kilat.'
  },
  {
    icon: Shield,
    title: 'Aman & Handal',
    desc: 'Dibangun dengan standar keamanan modern dan pengujian yang baik.'
  },
  {
    icon: LineChart,
    title: 'Siap Scale',
    desc: 'Struktur yang mudah dikembangkan seiring pertumbuhan bisnis.'
  }
]

export default function Features() {
  return (
    <section id="fitur" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Semua yang Anda Butuhkan</h2>
          <p className="mt-3 text-gray-600">Fokus pada produk, biarkan kami menangani sisanya.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-6 shadow-sm">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
