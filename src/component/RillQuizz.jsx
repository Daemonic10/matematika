import React, { useState, useEffect } from 'react';

const RillQuizz = () => {
  const [soal, setSoal] = useState(null);
  const [showSolution, setShowSolution] = useState(false);

  const generateRandomSoal = () => {
    const tipe = Math.floor(Math.random() * 3);
    const getNum = () => Math.floor(Math.random() * 10) + 1;
    const getSign = () => (Math.random() > 0.5 ? 1 : -1);

    let data = {};
    const formatEq = (val) => (val < 0 ? `+ ${Math.abs(val)}` : `- ${val}`);

    if (tipe === 0) {
      const a = getNum() * getSign();
      const b = getNum() * getSign();
      const r = Math.abs(b);
      data = {
        judul: "Menyinggung Sumbu-X",
        pertanyaan: `Tentukan persamaan lingkaran yang berpusat di (${a}, ${b}) dan menyinggung sumbu-X.`,
        langkah: [
          `Diketahui pusat (a, b) = (${a}, ${b}).`,
          `Syarat menyinggung sumbu-X: r = |b|.`,
          `Maka r = |${b}| = ${r}.`,
          `Substitusi ke (x - a)² + (y - b)² = r²`
        ],
        hasil: `(x ${formatEq(a)})² + (y ${formatEq(b)})² = ${r * r}`
      };
    } else if (tipe === 1) {
      const a = getNum() * getSign();
      const b = getNum() * getSign();
      const r = Math.abs(a);
      data = {
        judul: "Menyinggung Sumbu-Y",
        pertanyaan: `Tentukan persamaan lingkaran yang berpusat di (${a}, ${b}) dan menyinggung sumbu-Y.`,
        langkah: [
          `Diketahui pusat (a, b) = (${a}, ${b}).`,
          `Syarat menyinggung sumbu-Y: r = |a|.`,
          `Maka r = |${a}| = ${r}.`,
          `Substitusi ke (x - a)² + (y - b)² = r²`
        ],
        hasil: `(x ${formatEq(a)})² + (y ${formatEq(b)})² = ${r * r}`
      };
    } else {
      const r = getNum();
      const kuadran = Math.floor(Math.random() * 4) + 1;
      const kMap = { 1: [r, r], 2: [-r, r], 3: [-r, -r], 4: [r, -r] };
      const romawi = ["I", "II", "III", "IV"];
      const [a, b] = kMap[kuadran];
      data = {
        judul: `Menyinggung Dua Sumbu (Kuadran ${romawi[kuadran-1]})`,
        pertanyaan: `Sebuah lingkaran menyinggung sumbu-X dan sumbu-Y di kuadran ${romawi[kuadran-1]} dengan jari-jari ${r}. Tentukan persamaannya.`,
        langkah: [
          `Jari-jari (r) = ${r}.`,
          `Di Kuadran ${romawi[kuadran-1]}, pusat (a, b) adalah (${a}, ${b}).`,
          `Substitusi ke (x - a)² + (y - b)² = r²`
        ],
        hasil: `(x ${formatEq(a)})² + (y ${formatEq(b)})² = ${r * r}`
      };
    }
    setSoal(data);
    setShowSolution(false);
  };

  useEffect(() => { generateRandomSoal(); }, []);

  if (!soal) return null;

  return (
    <section className="w-full max-w-2xl mx-auto px-6 py-12 bg-white font-sans">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
          Latihan Interaktif
        </h2>
        <button 
          onClick={generateRandomSoal}
          className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors uppercase tracking-widest"
        >
          Acak Soal Baru
        </button>
      </div>

      <div className="flex flex-col p-8 md:p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 shadow-sm transition-all duration-300">
        <div className="flex-1">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4 block">
            {soal.judul}
          </span>
          <p className="text-gray-900 font-semibold leading-relaxed text-xl">
            {soal.pertanyaan}
          </p>
        </div>
        
        <div className="mt-8">
          {showSolution && (
            <div className="mb-6 p-6 bg-white rounded-3xl border border-blue-50 shadow-inner animate-in fade-in zoom-in duration-300">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter mb-3 block">Langkah Penyelesaian:</span>
              
              <div className="space-y-3 mb-5">
                {soal.langkah.map((step, index) => (
                  <p key={index} className="text-sm md:text-base text-gray-600 flex gap-2">
                    <span className="text-blue-500 font-bold">•</span> {step}
                  </p>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-100">
                <span className="text-xs font-bold text-green-600 uppercase block mb-1">Hasil Akhir:</span>
                <p className="text-lg font-mono font-bold text-gray-800">{soal.hasil}</p>
              </div>
            </div>
          )}

          <button 
            onClick={() => setShowSolution(!showSolution)}
            className={`w-full py-4 rounded-2xl text-sm font-bold transition-all duration-300 active:scale-95 ${
              showSolution 
              ? "bg-gray-200 text-gray-700 shadow-inner" 
              : "bg-black text-white hover:bg-gray-800 shadow-lg"
            }`}
          >
            {showSolution ? "Tutup Cara Kerja" : "Lihat Cara Kerja"}
          </button>
        </div>
      </div>
      
      <p className="mt-6 text-center text-gray-400 text-xs italic">
        Gunakan tombol acak untuk melatih pemahamanmu dengan angka yang berbeda.
      </p>
    </section>
  );
};

export default RillQuizz;