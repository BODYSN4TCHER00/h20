import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('¡Gracias por contactarnos! Te responderemos pronto.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold mb-6">
            <MessageCircle size={20} />
            Contáctanos Ahora
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-800 mb-6">
            <span className="bg-gradient-to-r from-green-500 to-cyan-600 bg-clip-text text-transparent">Contáctanos</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Estamos listos para atender tu vehículo con el mejor servicio. Reserva tu cita o consulta nuestros servicios profesionales
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-3xl font-bold text-slate-800 mb-10">Información de Contacto</h3>
            
            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="text-white" size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-2 text-xl">Dirección</h4>
                  <p className="text-slate-600 text-lg">Real del Mezquital 85</p>
                  <p className="text-slate-600 text-lg">Real del Mezquital</p>
                  <p className="text-slate-600 text-lg">34199 Durango, Dgo.</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="text-white" size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-2 text-xl">Teléfono</h4>
                  <p className="text-slate-600 text-lg font-semibold">+52 618 111 4757</p>
                  <p className="text-green-600 font-medium">WhatsApp disponible 24/7</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="text-white" size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-2 text-xl">Horarios</h4>
                  <p className="text-slate-600 text-lg">Lunes - Domingo</p>
                  <p className="text-slate-600 text-lg font-semibold">8:00 AM - 8:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="text-white" size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-2 text-xl">Email</h4>
                  <p className="text-slate-600 text-lg">info@h2oautolavado.com</p>
                  <p className="text-purple-600 font-medium">Respuesta en 24 horas</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-12 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.9982547359324!2d-104.6280485857749!3d24.027065384695454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869bc8e5c1e1a1a1%3A0x1234567890123456!2sReal%20del%20Mezquital%2085%2C%20Real%20del%20Mezquital%2C%2034199%20Durango%2C%20Dgo.!5e0!3m2!1sen!2smx!4v1234567890123"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación H2O Autolavado Durango"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100">
            <h3 className="text-3xl font-bold text-slate-800 mb-8">Reserva tu Cita</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-3">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border-2 border-slate-200 rounded-2xl focus:ring-4 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all text-lg"
                  placeholder="Tu nombre completo"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-slate-200 rounded-2xl focus:ring-4 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all text-lg"
                    placeholder="tu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-3">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-slate-200 rounded-2xl focus:ring-4 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all text-lg"
                    placeholder="618 123 4567"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-bold text-slate-700 mb-3">
                  Servicio Deseado *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border-2 border-slate-200 rounded-2xl focus:ring-4 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all text-lg"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="basico">Lavado Básico - $80</option>
                  <option value="premium">Lavado Premium - $150</option>
                  <option value="completo">Detallado Completo - $280</option>
                  <option value="express">Lavado Express - $60</option>
                  <option value="ecologico">Lavado Ecológico - $120</option>
                  <option value="vip">Paquete VIP - $450</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-3">
                  Mensaje Adicional
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border-2 border-slate-200 rounded-2xl focus:ring-4 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all resize-none text-lg"
                  placeholder="Déjanos saber si tienes alguna solicitud especial o comentario adicional..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-5 px-8 rounded-2xl font-bold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
              >
                <Send size={24} />
                Enviar Solicitud
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;