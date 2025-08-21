import React from 'react';
import { Facebook, Instagram, Phone, Mail, MapPin, Clock, Droplets } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 via-blue-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-lg">
                <Droplets className="text-white" size={32} />
              </div>
              <div>
                <h3 className="text-3xl font-black bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                  H2O Autolavado
                </h3>
                <p className="text-slate-400 font-semibold text-lg">Durango</p>
              </div>
            </div>
            
            <p className="text-slate-300 mb-8 leading-relaxed max-w-lg text-lg">
              Somos el autolavado líder en Durango, comprometidos con brindar servicios excepcionales 
              para el cuidado de tu vehículo utilizando tecnología avanzada y personal altamente especializado.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-110 shadow-lg"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="#" 
                className="w-14 h-14 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl flex items-center justify-center hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-2xl font-bold mb-8 text-cyan-300">Enlaces Rápidos</h4>
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-slate-300 hover:text-white transition-colors text-lg font-medium hover:translate-x-2 transform duration-300 block"
                >
                  → Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="text-slate-300 hover:text-white transition-colors text-lg font-medium hover:translate-x-2 transform duration-300 block"
                >
                  → Servicios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('galeria')}
                  className="text-slate-300 hover:text-white transition-colors text-lg font-medium hover:translate-x-2 transform duration-300 block"
                >
                  → Galería
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contacto')}
                  className="text-slate-300 hover:text-white transition-colors text-lg font-medium hover:translate-x-2 transform duration-300 block"
                >
                  → Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-2xl font-bold mb-8 text-cyan-300">Contacto</h4>
            <div className="space-y-6">
              <div className="flex items-start group">
                <MapPin className="text-cyan-400 mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={20} />
                <div>
                  <p className="text-slate-300 font-medium">Real del Mezquital 85</p>
                  <p className="text-slate-300 font-medium">34199 Durango, Dgo.</p>
                </div>
              </div>
              
              <div className="flex items-center group">
                <Phone className="text-green-400 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={20} />
                <p className="text-slate-300 font-semibold text-lg">+52 618 111 4757</p>
              </div>
              
              <div className="flex items-center group">
                <Mail className="text-orange-400 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={20} />
                <p className="text-slate-300 font-medium">info@h2oautolavado.com</p>
              </div>
              
              <div className="flex items-start group">
                <Clock className="text-purple-400 mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={20} />
                <div>
                  <p className="text-slate-300 font-semibold">Lun - Dom</p>
                  <p className="text-slate-300 font-semibold">8:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 mb-4 md:mb-0 text-lg">
              © {currentYear} H2O Autolavado Durango. Todos los derechos reservados.
            </p>
            
            <div className="flex space-x-8">
              <a href="#" className="text-slate-400 hover:text-white transition-colors font-medium">
                Términos de Servicio
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors font-medium">
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;