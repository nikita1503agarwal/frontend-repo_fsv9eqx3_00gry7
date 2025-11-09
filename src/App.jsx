import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-fuchsia-50 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <section id="cta" className="bg-gray-900 py-16 text-white">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <h3 className="text-3xl font-bold">Siap meluncurkan produk digital Anda?</h3>
            <p className="mt-3 text-gray-300">Dapatkan landing page yang dirancang untuk konversi lebih tinggi.</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                placeholder="Email Anda"
                className="flex-1 rounded-md border border-gray-700 bg-gray-800 px-4 py-3 text-sm placeholder-gray-400 focus:border-indigo-400 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100"
              >
                Dapatkan Demo
              </button>
            </form>
            <p className="mt-3 text-xs text-gray-400">Kami tidak akan pernah mengirim spam.</p>
          </div>
        </section>
        <footer className="bg-white py-10">
          <div className="mx-auto max-w-6xl px-4 text-center text-sm text-gray-600">
            © {new Date().getFullYear()} DigiLaunch. Semua hak dilindungi.
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
