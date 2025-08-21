import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Menu, X, Droplets } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-3 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2 hover:text-cyan-300 transition-colors">
              <Phone size={16} className="text-cyan-400" />
              <span className="font-medium">+52 618 111 4757</span>
            </div>
            <div className="flex items-center gap-2 hover:text-cyan-300 transition-colors">
              <MapPin size={16} className="text-cyan-400" />
              <span>Real del Mezquital 85, Durango</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-cyan-100">
            <Clock size={16} className="text-cyan-400" />
            <span>Lun - Dom: 8:00 AM - 8:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`fixed top-12 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-100' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 via-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Droplets className="text-white" size={28} />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                H2O Autolavado
              </h1>
              <p className="text-sm text-slate-500 font-medium">Durango</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-slate-700 hover:text-cyan-600 transition-all duration-300 font-medium relative group"
            >
              Inicio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('servicios')}
              className="text-slate-700 hover:text-cyan-600 transition-all duration-300 font-medium relative group"
            >
              Servicios
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('galeria')}
              className="text-slate-700 hover:text-cyan-600 transition-all duration-300 font-medium relative group"
            >
              Galería
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-slate-700 hover:text-cyan-600 transition-all duration-300 font-medium relative group"
            >
              Contacto
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Reservar Cita
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} className="text-slate-700" /> : <Menu size={24} className="text-slate-700" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-lg shadow-xl border-t border-gray-100">
            <div className="px-6 py-6 space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="block w-full text-left text-slate-700 hover:text-cyan-600 transition-colors font-medium py-2"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="block w-full text-left text-slate-700 hover:text-cyan-600 transition-colors font-medium py-2"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('galeria')}
                className="block w-full text-left text-slate-700 hover:text-cyan-600 transition-colors font-medium py-2"
              >
                Galería
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="block w-full text-left text-slate-700 hover:text-cyan-600 transition-colors font-medium py-2"
              >
                Contacto
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all mt-4"
              >
                Reservar Cita
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;