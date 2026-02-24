import React from "react";

export default function Materi() {
  return (
    <main className="flex flex-col items-center pt-32 pb-24 px-6 lg:px-20 min-h-screen bg-white">
      <div className="mb-8 bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase">
        Matematika Peminatan
      </div>

      <div className="flex flex-col lg:flex-row gap-16 w-full max-w-7xl items-start">
        
        <div className="w-full lg:w-2/5 flex flex-col gap-10">
          <div className="text-start">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Persamaan Lingkaran <br />
              <span className="text-gray-400 text-3xl md:text-4xl font-semibold italic">
                Menyinggung Sumbu Koordinat
              </span>
            </h1>
            <p className="mt-4 text-gray-500 text-lg">
              Kondisi di mana jari-jari lingkaran ditentukan oleh posisi titik pusat terhadap sumbu X atau sumbu Y.
            </p>
          </div>

          <div className="w-full bg-[#111] text-white p-8 md:p-10 rounded-[2.5rem] shadow-xl">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              Contoh Soal
            </h2>
            <p className="text-gray-400 mb-6 italic text-sm md:text-base">
              "Tentukan persamaan lingkaran yang berpusat di (-5, 2) dan menyinggung sumbu-Y."
            </p>
            <div className="space-y-4 text-sm md:text-base">
              <div className="flex flex-col">
                <span className="text-blue-400 font-bold">Langkah</span>
                <p className="text-gray-200">
                  Karena menyinggung sumbu-Y, maka jari-jari adalah nilai mutlak koordinat x pusat: r = |-5| = 5.
                </p>
              </div>
              <div className="flex flex-col border-t border-white/10 pt-4">
                <span className="text-green-400 font-bold">Hasil Akhir</span>
                <p className="text-xl font-mono mt-1">(x + 5)² + (y - 2)² = 25</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-3/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center font-bold mb-6">
                X
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Menyinggung Sumbu-X</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                Jari-jari lingkaran sama dengan jarak pusat ke sumbu-X. Digunakan nilai mutlak koordinat y pusat.
              </p>
              <div className="inline-block bg-white px-4 py-2 rounded-xl border border-gray-200 font-mono font-bold text-blue-600">
                r = |b|
              </div>
            </div>

            <div className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center font-bold mb-6">
                Y
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Menyinggung Sumbu-Y</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                Jari-jari lingkaran sama dengan jarak pusat ke sumbu-Y. Digunakan nilai mutlak koordinat x pusat.
              </p>
              <div className="inline-block bg-white px-4 py-2 rounded-xl border border-gray-200 font-mono font-bold text-blue-600">
                r = |a|
              </div>
            </div>
            
            <div className="md:col-span-2 p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:shadow-lg transition-all flex flex-col md:flex-row md:items-center gap-8">
              <div className="w-14 h-14 bg-black text-white rounded-2xl flex items-center justify-center font-bold italic shrink-0">
                XY
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Menyinggung Keduanya</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                  Terjadi jika jarak pusat ke sumbu-X dan sumbu-Y sama besar. Jari-jari sama dengan nilai mutlak koordinat x dan y.
                </p>
                <div className="inline-block bg-white px-4 py-2 rounded-xl border border-gray-200 font-mono font-bold text-blue-600">
                  r = |a| = |b|
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}