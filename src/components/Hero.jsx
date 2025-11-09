import { Star, Rocket } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-200/60 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-200/60 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 text-sm text-gray-700 ring-1 ring-gray-200 backdrop-blur">
          <Star size={16} className="text-yellow-500" />
          Produk digital untuk tumbuh lebih cepat
        </div>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
          Launch produk digital Anda dengan lebih percaya diri
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-gray-600 sm:text-lg">
          Website landing page modern untuk mengubah pengunjung menjadi pelanggan. Desain bersih, loading cepat, dan siap dipakai.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#cta"
            className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-gray-800"
          >
            Mulai Sekarang
          </a>
          <a
            href="#fitur"
            className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
          >
            Lihat Fitur
          </a>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 text-left">
          {["Desain Responsif","SEO Friendly","Mudah Dikelola","Integrasi Pembayaran"].map((f) => (
            <div key={f} className="rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700 shadow-sm">
              {f}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
