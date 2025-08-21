import React from 'react';
import { Car, Sparkles, Shield, Zap, Droplets, Star, Check } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Car className="text-blue-500" size={32} />,
      title: "Lavado Básico",
      description: "Lavado exterior completo con productos de calidad premium",
      price: "$80",
      originalPrice: "$100",
      features: ["Enjuague inicial completo", "Lavado con jabón biodegradable", "Secado profesional", "Limpieza de llantas"],
      popular: false,
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Sparkles className="text-purple-500" size={32} />,
      title: "Lavado Premium",
      description: "Servicio completo interior y exterior con acabado profesional",
      price: "$150",
      originalPrice: "$180",
      features: ["Todo lo del básico", "Aspirado interior profundo", "Limpieza de cristales", "Encerado básico", "Aromatizante premium"],
      popular: true,
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Shield className="text-green-500" size={32} />,
      title: "Detallado Completo",
      description: "Servicio profesional integral con protección avanzada",
      price: "$280",
      originalPrice: "$320",
      features: ["Todo lo del premium", "Lavado de motor", "Pulido de faros", "Protección UV", "Limpieza profunda tapicería"],
      popular: false,
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Zap className="text-yellow-500" size={32} />,
      title: "Lavado Express",
      description: "Servicio rápido y eficiente para cuando tienes prisa",
      price: "$60",
      originalPrice: "$75",
      features: ["Lavado exterior rápido", "Secado básico", "Solo 15 minutos", "Sin cita previa"],
      popular: false,
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Droplets className="text-cyan-500" size={32} />,
      title: "Lavado Ecológico",
      description: "100% productos biodegradables con tecnología de ahorro",
      price: "$120",
      originalPrice: "$140",
      features: ["Productos 100% ecológicos", "Tecnología de ahorro de agua", "Lavado exterior completo", "Certificación verde"],
      popular: false,
      color: "from-cyan-500 to-teal-500"
    },
    {
      icon: <Star className="text-orange-500" size={32} />,
      title: "Paquete VIP",
      description: "La experiencia de lujo completa para tu vehículo",
      price: "$450",
      originalPrice: "$550",
      features: ["Todos los servicios incluidos", "Lavado de motor premium", "Encerado de alta gama", "Ozono interior", "Garantía 30 días"],
      popular: false,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full font-semibold mb-6">
            <Sparkles size={20} />
            Servicios Profesionales
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-800 mb-6">
            Nuestros <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Servicios</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Desde lavado básico hasta detallado profesional de lujo, tenemos el servicio perfecto 
            para mantener tu vehículo en condiciones impecables
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden group ${
                service.popular ? 'ring-2 ring-orange-400 scale-105' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    ⭐ Más Popular
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 text-center mb-3">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 text-center mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-4xl font-black bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                      {service.price}
                    </span>
                    <span className="text-lg text-slate-400 line-through">{service.originalPrice}</span>
                  </div>
                  <span className="text-slate-500 text-sm font-medium">MXN</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-600">
                      <Check className="text-green-500 mr-3 flex-shrink-0" size={18} />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 ${
                  service.popular 
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 shadow-lg hover:shadow-xl' 
                    : 'bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 hover:from-slate-200 hover:to-slate-300'
                }`}>
                  Seleccionar Servicio
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Special Offers */}
        <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-3xl p-12 text-white text-center shadow-2xl">
          <h3 className="text-4xl font-black mb-8 flex items-center justify-center gap-3">
            🎉 <span>Ofertas Especiales</span> 🎉
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h4 className="text-2xl font-bold mb-4 text-cyan-300">Paquete Mensual</h4>
              <p className="mb-6 text-lg">4 lavados premium por solo $500 MXN</p>
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full text-lg font-bold inline-block">
                Ahorra $100
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h4 className="text-2xl font-bold mb-4 text-orange-300">Cliente Nuevo</h4>
              <p className="mb-6 text-lg">20% de descuento en tu primer servicio</p>
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full text-lg font-bold inline-block">
                Código: NUEVO20
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;