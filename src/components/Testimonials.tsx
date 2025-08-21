import React from 'react';
import { Star, Quote, User } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      rating: 5,
      text: "Excelente servicio, mi auto siempre queda impecable. El personal es muy amable y profesional. Lo recomiendo ampliamente, definitivamente el mejor autolavado de Durango."
    },
    {
      name: "Carlos Martínez",
      rating: 5,
      text: "Llevo mis autos de empresa aquí desde hace 2 años. Siempre cumplen con la calidad y los tiempos prometidos. Muy confiables y profesionales en todo momento."
    },
    {
      name: "Ana Rodríguez",
      rating: 5,
      text: "El mejor autolavado de Durango sin duda alguna. Los precios son justos y el trabajo es de primera calidad. Mi auto queda como nuevo siempre que vengo."
    },
    {
      name: "Roberto Silva",
      rating: 5,
      text: "Para mi negocio es esencial tener el auto limpio todos los días. H2O siempre me ha dado excelente servicio, rapidez y la mejor atención al cliente."
    },
    {
      name: "Patricia López",
      rating: 5,
      text: "Me encanta la atención personalizada y la calidad del servicio. Siempre salen con detalles extras que no esperaba. Totalmente recomendado para todos."
    },
    {
      name: "Miguel Hernández",
      rating: 5,
      text: "Instalaciones modernas, personal capacitado y resultados increíbles. He probado otros autolavados pero ninguno se compara con la calidad de H2O Autolavado."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-semibold mb-6">
            <Star size={20} />
            Testimonios Reales
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-800 mb-6">
            Lo que dicen nuestros <span className="bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">Clientes</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Miles de clientes satisfechos respaldan la calidad excepcional de nuestros servicios profesionales de autolavado
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 p-8 border border-gray-100 group"
            >
              {/* Quote Icon */}
              <div className="text-cyan-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Quote size={40} />
              </div>
              
              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={24} />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center">
                <div className="w-14 h-14 bg-gradient-to-r from-slate-200 to-slate-300 rounded-full flex items-center justify-center mr-4">
                  <User className="text-slate-500" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">{testimonial.name}</h4>
                  <p className="text-slate-500 font-medium">Cliente Verificado</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-3xl p-12 text-white shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-5xl font-black mb-3 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                4.9/5
              </div>
              <div className="text-slate-300 font-semibold text-lg">Calificación Promedio</div>
            </div>
            <div className="group">
              <div className="text-5xl font-black mb-3 bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                5,000+
              </div>
              <div className="text-slate-300 font-semibold text-lg">Clientes Satisfechos</div>
            </div>
            <div className="group">
              <div className="text-5xl font-black mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                95%
              </div>
              <div className="text-slate-300 font-semibold text-lg">Clientes que Regresan</div>
            </div>
            <div className="group">
              <div className="text-5xl font-black mb-3 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                15
              </div>
              <div className="text-slate-300 font-semibold text-lg">Años de Experiencia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;