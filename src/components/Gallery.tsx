import React from 'react';
import { Camera, ExternalLink } from 'lucide-react';

const Gallery = () => {
  // Placeholder para los links que proporcionarás manualmente
  const galleryLinks = [
    "https://maps.app.goo.gl/NNuyzpVcViMv95f57",
    "https://maps.app.goo.gl/kEPcy2zQJLzFXA3n7",
    "https://maps.app.goo.gl/FkTC1XxQMMdbfDqLA",
    "https://maps.app.goo.gl/q4ShQTx9Pu5UHdzS7"
    // Ejemplo: "https://maps.app.goo.gl/NNuyzpVcViMv95f57"
  ];

  return (
    <section id="galeria" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-semibold mb-6">
            <Camera size={20} />
            Galería de Trabajos
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-800 mb-6">
            Nuestros <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">Trabajos</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Descubre la calidad de nuestro trabajo y las instalaciones donde cuidamos tu vehículo con la máxima profesionalidad
          </p>
        </div>

        {/* Gallery Content */}
        <div className="text-center">
          {galleryLinks.length === 0 ? (
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-16 border-2 border-dashed border-slate-300">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-gradient-to-r from-slate-400 to-slate-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Camera className="text-white" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-700 mb-4">Galería en Construcción</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Estamos preparando una increíble galería con fotos reales de nuestros trabajos y instalaciones. 
                  ¡Pronto podrás ver la calidad de nuestros servicios!
                </p>
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2">
                  <ExternalLink size={20} />
                  Próximamente
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryLinks.map((link, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-slate-100 to-slate-200"
                >
                  <div className="aspect-w-16 aspect-h-12 bg-slate-200 h-64 flex items-center justify-center">
                    <div className="text-center">
                      <Camera className="text-slate-400 mx-auto mb-2" size={32} />
                      <p className="text-slate-500 font-medium">Imagen {index + 1}</p>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <a 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-semibold hover:text-cyan-300 transition-colors"
                      >
                        <ExternalLink size={16} />
                        Ver en Maps
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-3xl p-12 text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">¿Quieres ver más de nuestro trabajo?</h3>
          <p className="text-xl mb-8 text-cyan-100">
            Visita nuestras instalaciones o síguenos en redes sociales para ver más fotos y videos de nuestros servicios
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-slate-700 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-all transform hover:scale-105">
              Visitar Instalaciones
            </button>
            <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold hover:bg-white/30 transition-all border border-white/30">
              Seguir en Redes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;