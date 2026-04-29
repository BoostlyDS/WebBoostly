import { useEffect, useRef, useState } from 'react';
import { Button } from './components/ui/button';
import logoImg from '../imports/logo-1.png';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Background Effects */}
      <div className="fixed top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed top-[20%] right-[-10%] w-[500px] h-[500px] bg-slate-900/3 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-sm'
            : 'bg-white/80 backdrop-blur-xl'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-1 py-1 md:px-6 md:py-2">
          {/* Mobile Layout */}
          <div className="md:hidden flex items-center justify-between">
            <a href="#" className="flex items-center">
              <img
                src={logoImg}
                alt="Boostly"
                className="w-[180px] h-auto object-contain"
              />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-900 hover:text-blue-600 transition-colors"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-3 items-center gap-8">
            <a href="#" className="flex items-start justify-start">
              <img
                src={logoImg}
                alt="Boostly"
                className="w-[500px] h-[200px] object-contain"
              />
            </a>
            <div className="flex items-center justify-center gap-8">
              <a href="#servicios" className="text-lg font-medium text-slate-900 hover:text-blue-600 transition-colors">
                Servicios
              </a>
              <a href="#proceso" className="text-lg font-medium text-slate-900 hover:text-blue-600 transition-colors">
                Nuestro Proceso
              </a>
              <a href="#beneficios" className="text-lg font-medium text-slate-900 hover:text-blue-600 transition-colors">
                Beneficios
              </a>
            </div>
            <div className="flex justify-end">
              <a href="https://wa.me/34666880466" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/40 hover:shadow-xl hover:shadow-blue-600/40 transition-all cursor-pointer text-base px-8"
                >
                  Solicitar Presupuesto
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-2 py-2 space-y-3">
              <a
                href="#servicios"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-slate-900 hover:text-blue-600 transition-colors"
              >
                Servicios
              </a>
              <a
                href="#proceso"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-slate-900 hover:text-blue-600 transition-colors"
              >
                Nuestro Proceso
              </a>
              <a
                href="#beneficios"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-slate-900 hover:text-blue-600 transition-colors"
              >
                Beneficios
              </a>
              <a href="https://wa.me/34666880466" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="block">
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/40 transition-all cursor-pointer"
                >
                  Solicitar Presupuesto
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="pt-32 md:pt-60 pb-12 md:pb-20 px-4 md:px-6 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="fade-in opacity-0 translate-y-8 transition-all duration-700">
            <div className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-blue-600/10 text-blue-600 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6 border border-blue-600/20">
              Estudio Premium de Creación Web
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight tracking-tight">
              Creamos páginas web que{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                hacen crecer
              </span>
              <br />
              negocios.
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto mb-6 md:mb-10 px-4">
              Webs modernas diseñadas para atraer clientes, generar confianza y aumentar conversiones.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
              <a href="https://wa.me/34666880466" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/40 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  Solicitar Presupuesto
                </Button>
              </a>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-slate-300 hover:border-slate-900 hover:bg-slate-50 hover:-translate-y-0.5 transition-all"
              >
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=boostlyds@gmail.com" target="_blank" rel="noopener noreferrer">Contáctanos</a>
              </Button>
            </div>
          </div>

          {/* Device Mockup */}
          <div className="fade-in opacity-0 translate-y-8 transition-all duration-700 delay-200 mt-12 md:mt-20 max-w-4xl mx-auto perspective-1000 px-4">
            <div className="relative bg-slate-100 rounded-t-xl md:rounded-t-2xl p-2 md:p-4 pb-3 md:pb-6 border border-slate-200 shadow-2xl shadow-blue-600/10 hover:shadow-blue-600/20 transition-all duration-500 hover:scale-105">
              <div className="bg-white rounded-lg overflow-hidden shadow-inner border border-slate-200">
                {/* Mockup Header */}
                <div className="h-12 border-b border-slate-100 flex items-center px-6 justify-between">
                  <div className="w-20 h-4 bg-slate-900 rounded opacity-80" />
                  <div className="w-48 h-3 bg-slate-100 rounded" />
                </div>
                {/* Mockup Body */}
                <div className="p-10 text-center flex flex-col items-center justify-center min-h-[300px]">
                  <div className="w-3/5 h-8 bg-slate-100 rounded-lg mb-4" />
                  <div className="w-2/5 h-4 bg-slate-100 rounded opacity-60 mb-8" />
                  <div className="w-32 h-9 bg-blue-600 rounded" />
                </div>
              </div>
              {/* Laptop Base */}
              <div className="absolute -bottom-4 -left-5 -right-5 h-4 bg-slate-300 rounded-b-2xl flex justify-center">
                <div className="w-24 h-1.5 bg-slate-400 rounded-b" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="servicios" className="py-16 md:py-32 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="fade-in opacity-0 translate-y-8 transition-all duration-700 text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 md:mb-4">
              Diseñadas para el Crecimiento
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto px-4">
              No solo hacemos páginas web. Creamos activos digitales que generan ingresos para tu empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                ),
                title: 'Diseño Web Profesional',
                description: 'Diseños premium y a medida que reflejan perfectamente la identidad de tu marca y te diferencian de la competencia.',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                  </svg>
                ),
                title: 'Página optimizada para móviles',
                description: 'Experiencia impecable en cualquier dispositivo. Aseguramos que tu web luzca increíble en teléfonos, tablets y ordenadores.',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                ),
                title: 'Entrega rápida',
                description: 'Flujos de trabajo optimizados que permiten lanzar una web de primera categoría en tiempo récord sin comprometer la calidad.',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                ),
                title: 'Más clientes, más confianza',
                description: 'Estructuras estratégicas y embudos optimizados, pensados específicamente para convertir visitantes en clientes de pago.',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  </svg>
                ),
                title: 'Interfaz Moderna y Limpia',
                description: 'Interfaces de usuario intuitivas y diseño visual atractivo que mantienen al usuario navegando y generan confianza inmediata.',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
                title: 'Asesoramiento personalizado',
                description: 'Te acompañamos en todo el proceso con soluciones personalizadas para lograr una presencia digital sólida y profesional.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="fade-in opacity-0 translate-y-8 transition-all duration-700 bg-white border border-slate-200 rounded-xl md:rounded-2xl p-6 md:p-8 hover:shadow-lg hover:-translate-y-1 hover:border-blue-600/20"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-blue-600/5 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="proceso" className="py-16 md:py-32 px-4 md:px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="fade-in opacity-0 translate-y-8 transition-all duration-700 text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">Nuestro Proceso</h2>
            <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto px-4">
              Un enfoque claro, transparente y orientado a resultados. Así es como construimos tu nueva presencia digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                number: '01',
                title: 'Estrategia y Planificación',
                description: 'Analizamos tu negocio, tus competidores y tus objetivos para definir la estructura perfecta de tu nueva web.',
              },
              {
                number: '02',
                title: 'Diseño UI/UX Premium',
                description: 'Creamos interfaces modernas y visualmente impactantes que captan la atención y transmiten la máxima profesionalidad.',
              },
              {
                number: '03',
                title: 'Desarrollo a Medida',
                description: 'Programamos tu web con tecnologías modernas, asegurando una velocidad de carga ultrarrápida y rendimiento impecable.',
              },
              {
                number: '04',
                title: 'Lanzamiento y Soporte',
                description: 'Publicamos tu web al mundo, la optimizamos para Google (SEO) y nos aseguramos de que todo funcione a la perfección.',
              },
            ].map((step, index) => (
              <div
                key={index}
                className="fade-in opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl p-6 md:p-8 hover:-translate-y-1 hover:bg-white/10 hover:border-white/20"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl font-extrabold text-blue-600 mb-4 opacity-80">{step.number}</div>
                <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                <p className="text-slate-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-16 md:py-32 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="fade-in opacity-0 translate-y-8 transition-all duration-700">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 md:mb-6">
                Diseño Web de Alto Rendimiento
              </h2>
              <p className="text-base md:text-lg text-slate-600 mb-6 md:mb-8">
                Tu presencia digital es la extensión de tu marca. Nos aseguramos de que cada pantalla, botón e interacción transmita calidad, confianza y profesionalidad.
              </p>
              <ul className="space-y-4">
                {[
                  'Interfaces limpias y modernas',
                  'Experiencia de usuario (UX) impecable',
                  'Diseños orientados a la conversión',
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-900 font-medium">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-blue-600 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="fade-in opacity-0 translate-y-8 transition-all duration-700 delay-200">
              <div className="bg-gradient-to-br from-blue-50 to-slate-100 rounded-2xl p-8 shadow-xl shadow-blue-600/10 aspect-video flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-8 h-8">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <p className="text-slate-600 font-medium">Vista previa de diseño UI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-10 md:py-12 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-6 md:mb-8">
            <div className="md:col-span-5">
              <img
                src={logoImg}
                alt="Boostly"
                className="w-[200px] md:w-[280px] h-auto object-contain mb-2"
              />
              <p className="text-slate-600 text-sm leading-relaxed m-[0px] p-[0px]">
                Creamos páginas web que hacen crecer negocios.
              </p>
            </div>
            <div className="md:col-span-3 md:col-start-7 px-[0px] py-[30px]">
              <h5 className="font-bold text-slate-900 mb-3 text-sm">Agencia</h5>
              <div className="space-y-2">
                <a href="#" className="block text-slate-600 hover:text-blue-600 transition-colors text-sm">
                  Sobre Nosotros
                </a>
                <a href="#proceso" className="block text-slate-600 hover:text-blue-600 transition-colors text-sm">
                  Nuestro Proceso
                </a>
                <a href="mailto:boostlyds@gmail.com" className="block text-slate-600 hover:text-blue-600 transition-colors text-sm">
                  Contacto
                </a>
              </div>
            </div>
            <div className="md:col-span-3 px-[0px] py-[30px]">
              <h5 className="font-bold text-slate-900 mb-3 text-sm">Servicios</h5>
              <div className="space-y-2">
                <a href="#" className="block text-slate-600 hover:text-blue-600 transition-colors text-sm">
                  Diseño Web Profesional
                </a>
                <a href="#" className="block text-slate-600 hover:text-blue-600 transition-colors text-sm">
                  Desarrollo Web
                </a>
                <a href="#" className="block text-slate-600 hover:text-blue-600 transition-colors text-sm">
                  Optimización SEO
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-6 text-center text-xs text-slate-500">
            <p>&copy; 2026 Boostly. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}