import React, { useState } from "react";

export default function SoalLatihan() {
  const [jawabanTerbuka, setJawabanTerbuka] = useState(null);

  const daftarSoal = [
    {
      id: "01",
      pertanyaan: "Tentukan persamaan lingkaran yang berpusat di (4, -3) dan menyinggung sumbu-X.",
      langkah: [
        "Diketahui pusat (a, b) = (4, -3).",
        "Syarat menyinggung sumbu-X: r = |b|.",
        "Maka r = |-3| = 3.",
        "Substitusi ke (x - a)² + (y - b)² = r²"
      ],
      hasil: "(x - 4)² + (y + 3)² = 9"
    },
    {
      id: "02",
      pertanyaan: "Tentukan persamaan lingkaran yang berpusat di (2, 5) dan menyinggung sumbu-Y.",
      langkah: [
        "Diketahui pusat (a, b) = (2, 5).",
        "Syarat menyinggung sumbu-Y: r = |a|.",
        "Maka r = |2| = 2.",
        "Substitusi ke (x - a)² + (y - b)² = r²"
      ],
      hasil: "(x - 2)² + (y - 5)² = 4"
    },
    {
      id: "03",
      pertanyaan: "Sebuah lingkaran menyinggung sumbu-X dan sumbu-Y di kuadran II dengan jari-jari 6. Tentukan persamaannya.",
      langkah: [
        "Jari-jari (r) = 6.",
        "Di Kuadran II, pusat (a, b) adalah (-r, r).",
        "Maka pusatnya adalah (-6, 6).",
        "Substitusi ke (x - a)² + (y - b)² = r²"
      ],
      hasil: "(x + 6)² + (y - 6)² = 36"
    }
  ];

  const toggleJawaban = (id) => {
    setJawabanTerbuka(jawabanTerbuka === id ? null : id);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24 bg-white font-sans">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
          Contoh Soal Lainnyax
        </h2>
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto italic">
          Klik tombol di bawah setiap soal untuk melihat langkah penyelesaiannya secara detail.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {daftarSoal.map((item) => (
          <div 
            key={item.id} 
            className="flex flex-col p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 transition-all duration-300 hover:shadow-2xl"
          >
            <div className="flex-1">
              <span className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4 block">
                Soal {item.id}
              </span>
              <p className="text-gray-900 font-semibold leading-relaxed text-lg">
                {item.pertanyaan}
              </p>
            </div>
            
            <div className="mt-8">
              {jawabanTerbuka === item.id && (
                <div className="mb-6 p-5 bg-white rounded-3xl border border-blue-50 shadow-inner animate-in fade-in zoom-in duration-300">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter mb-3 block">Cara Kerja:</span>
                  
                  <div className="space-y-2 mb-4">
                    {item.langkah.map((step, index) => (
                      <p key={index} className="text-sm text-gray-600 flex gap-2">
                        <span className="text-blue-500 font-bold">•</span> {step}
                      </p>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-gray-100">
                    <span className="text-xs font-bold text-green-600 uppercase block mb-1">Hasil Akhir:</span>
                    <p className="text-md font-mono font-bold text-gray-800">{item.hasil}</p>
                  </div>
                </div>
              )}

              <button 
                onClick={() => toggleJawaban(item.id)}
                className={`w-full py-4 rounded-2xl text-sm font-bold transition-all duration-300 active:scale-95 ${
                  jawabanTerbuka === item.id 
                  ? "bg-gray-200 text-gray-700 shadow-inner" 
                  : "bg-black text-white hover:bg-gray-800 shadow-lg"
                }`}
              >
                {jawabanTerbuka === item.id ? "Tutup Cara Kerja" : "Lihat Cara Kerja"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}   