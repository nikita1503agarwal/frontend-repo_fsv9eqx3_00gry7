export default function Pricing() {
  return (
    <section id="harga" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Paket Harga Transparan</h2>
          <p className="mt-3 text-gray-600">Pilih paket sesuai kebutuhan Anda. Tanpa biaya tersembunyi.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[{
            name: 'Starter', price: 'Gratis', features: ['1 Halaman', 'Dukungan Email', 'Update Bulanan']
          },{
            name: 'Pro', price: 'Rp149.000/bln', features: ['Hingga 5 Halaman', 'Integrasi Form & Email', 'Analitik']
          },{
            name: 'Bisnis', price: 'Rp399.000/bln', features: ['Halaman Tak Terbatas', 'Custom Domain', 'Prioritas Support']
          }].map((tier) => (
            <div key={tier.name} className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{tier.name}</h3>
                <p className="mt-2 text-2xl font-extrabold text-gray-900">{tier.price}</p>
              </div>
              <ul className="mb-6 space-y-2 text-sm text-gray-700">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-green-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#cta" className="mt-auto inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800">Pilih Paket</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
