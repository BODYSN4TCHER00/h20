import React from 'react';
import { Star, Award, Users, Clock, ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-100/10 to-blue-100/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-60 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 3}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="mb-8 inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/20">
          <Award className="text-orange-500" size={24} />
          <span className="text-slate-700 font-semibold">Autolavado #1 en Durango</span>
          <Sparkles className="text-cyan-500" size={20} />
        </div>

        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
          <span className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent">
            H2O
          </span>
          <br />
          <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 bg-clip-text text-transparent">
            Autolavado
          </span>
          <br />
          <span className="text-4xl md:text-6xl bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            Durango
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-slate-600 leading-relaxed font-medium">
          Transformamos tu vehículo con servicios profesionales de autolavado. 
          <br className="hidden md:block" />
          <span className="text-cyan-600 font-semibold">Tecnología avanzada</span> y 
          <span className="text-blue-600 font-semibold"> atención personalizada</span> en cada servicio.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <button 
            onClick={() => scrollToSection('servicios')}
            className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3"
          >
            Ver Servicios
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => scrollToSection('contacto')}
            className="bg-white/90 backdrop-blur-sm text-slate-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-white/50 hover:border-cyan-200"
          >
            Contactar Ahora
          </button>
        </div>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/30">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-2xl flex items-center justify-center">
                <Users className="text-white" size={32} />
              </div>
            </div>
            <div className="text-4xl font-black text-slate-800 mb-2">5000+</div>
            <div className="text-slate-600 font-medium">Clientes Satisfechos</div>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/30">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center">
                <Star className="text-white" size={32} />
              </div>
            </div>
            <div className="text-4xl font-black text-slate-800 mb-2">4.9</div>
            <div className="text-slate-600 font-medium">Calificación Promedio</div>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/30">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center">
                <Clock className="text-white" size={32} />
              </div>
            </div>
            <div className="text-4xl font-black text-slate-800 mb-2">15</div>
            <div className="text-slate-600 font-medium">Años de Experiencia</div>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/30">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-500 rounded-2xl flex items-center justify-center">
                <Award className="text-white" size={32} />
              </div>
            </div>
            <div className="text-4xl font-black text-slate-800 mb-2">24/7</div>
            <div className="text-slate-600 font-medium">Servicio Disponible</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-slate-400/50 rounded-full flex justify-center">
          <div className="w-1 h-4 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;