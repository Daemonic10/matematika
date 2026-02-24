import React from "react";

export default function Herosection() {
  return (
    <main className="flex flex-col items-center gap-8 pt-40 pb-20 px-4 min-h-[90vh] bg-white">
      <div className="relative">
        <img
          src="mtkimg1.png" 
          alt="Geometri Lingkaran"
          className="w-24 h-24 object-cover rounded-[2rem] shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500 border border-gray-100"
        />
      </div>

      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-black leading-[1.05]">
          Kuasai Konsep <br /> 
          <span className="text-black">Persamaan Lingkaran.</span>
        </h1>
      </div>

      <div className="max-w-2xl text-center">
        <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-medium">
          Pelajari hubungan antara titik pusat dan sumbu koordinat dengan <br className="hidden md:block" />
          visualisasi yang jelas dan latihan soal yang interaktif.
        </p>
      </div>


      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
        <button className="bg-[#111] text-white py-4 px-10 rounded-full font-bold hover:bg-black transition-all active:scale-95 shadow-xl w-full sm:w-auto">
          Mulai Belajar
        </button>
        <button className="flex items-center justify-center gap-2 border-2 border-gray-100 py-4 px-10 rounded-full font-bold hover:bg-gray-50 hover:border-gray-200 transition-all active:scale-95 w-full sm:w-auto text-gray-700">
          Coba Latihan Soal <span className="text-lg">→</span>
        </button>
      </div>
    </main>
  );
}