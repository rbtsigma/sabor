// src/app/page.tsx
import { ArrowRight, ChefHat, BarChart3, Smartphone } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navbar fijo */}
<nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
  <div className="max-w-7xl mx-auto px-6 py-3 md:py-4 flex justify-between items-center">
    {/* Logo */}
    <a href="/" className="flex items-center">
    <div className="flex items-center">
      <img 
        src="/logo.png" 
        alt="SABOR - Sistema Automatizado para Bares y Restaurantes" 
        className="h-10 md:h-24 w-auto"  // ajusta el height según tu logo
      />
      <span className="h-10 md:h-12 ml-3 text-3xl font-bold text-orange-600">SABOR</span>  
    </div>
    </a>

    {/* Links */}
    <div className="space-x-6 md:space-x-8">
      <a href="#caracteristicas" className="text-slate-700 hover:text-orange-600 transition-colors text-sm md:text-base">
        Características
      </a>
      <a href="#contacto" className="text-slate-700 hover:text-orange-600 transition-colors text-sm md:text-base">
        Contacto
      </a>
    </div>
  </div>
</nav>
      {/* Hero principal */}
      <section className="pt-32 pb-20 px-6 text-center max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          SABOR <span className="text-orange-600">revoluciona</span> tu bar o restaurante
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-10 max-w-4xl mx-auto leading-relaxed">
          Sistema automatizado para bares o Restaurantes, todo-en-uno: ventas rápidas, inventario en tiempo real, control de mesas, reportes claros y más.  
          Menos estrés, más control y más ganancias desde el primer día.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <button className="bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-orange-700 transition shadow-lg hover:shadow-xl">
            Solicitar demo GRATIS
          </button>
          <button className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-orange-50 transition">
            Conoce más <ArrowRight className="inline ml-2 w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Sección de características */}
      <section id="caracteristicas" className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-16 text-slate-800">
            Lo que hace especial a SABOR
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-slate-100">
              <Smartphone className="w-12 h-12 text-orange-600 mb-6" />
              <h4 className="text-xl md:text-2xl font-bold mb-3 text-slate-800">Punto de venta ultra rápido</h4>
              <p className="text-slate-600 leading-relaxed">
                Registra pedidos y comandas en segundos desde celular, tablet o PC, sin errores de papel y con dispersión automática a cocina y barra.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-slate-100">
              <BarChart3 className="w-12 h-12 text-orange-600 mb-6" />
              <h4 className="text-xl md:text-2xl font-bold mb-3 text-slate-800">Reportes que sí sirven</h4>
              <p className="text-slate-600 leading-relaxed">
                Ventas por hora, producto más vendido, calendarios de ventas, control de gastos y todo en tiempo real.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-slate-100">
              <ChefHat className="w-12 h-12 text-orange-600 mb-6" />
              <h4 className="text-xl md:text-2xl font-bold mb-3 text-slate-800">Control total de inventario</h4>
              <p className="text-slate-600 leading-relaxed">
                Registra entradas, salidas, mermas y alertas de stock bajo. Evita faltantes y desperdicios.
              </p>
            </div>

            {/* Agrega aquí las otras características fuertes que tenga SABOR */}
          </div>
        </div>
      </section>



<section className="py-20 px-6 bg-white">
  <div className="max-w-6xl mx-auto">
    
    {/* Card del Video */}
<div className="mb-16 md:mb-20">
  <h3 className="text-3xl sm:text-4xl font-bold text-center mb-8 md:mb-12 text-slate-800">
    Mira SABOR en acción
  </h3>
  
  <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto border-8 border-slate-800">
    <div className="aspect-video">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/6VIov7VXjX8?rel=0&modestbranding=1&showinfo=0&controls=1"
        title="Demo SABOR - Sistema para Bares y Restaurantes"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  </div>
  
  <p className="text-center mt-6 text-slate-600 text-lg">
    Descubre lo fácil y rápido que es manejar tu negocio con SABOR – ¡demo real en acción!
  </p>
</div>



    {/* Sección Contacto + Formulario */}
    <div id="contacto" className="max-w-3xl mx-auto">
      <h3 className="text-3xl sm:text-4xl font-bold text-center mb-8 md:mb-12 text-slate-800">
        ¿Listo para llevar tu negocio al siguiente nivel?
      </h3>
      
      <p className="text-center text-lg text-slate-600 mb-10">
        Déjanos tus datos y te contactamos en menos de 24 horas para una demo personalizada y sin costo.
      </p>

      <form 
        action="https://formspree.io/f/xkovznoa"  // ← Crea cuenta en formspree.io y pega tu ID aquí
        method="POST"
        className="space-y-6"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
            Nombre completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
            placeholder="Ej. Carlos Velázquez"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
              Teléfono / WhatsApp
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
              placeholder="+52 55 1234 5678"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
              placeholder="tunegocio@email.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
            ¿Qué necesitas? (opcional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
            placeholder="Ej. Quiero ver cómo funciona el control de mesas y reportes de ventas..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-orange-700 transition shadow-lg hover:shadow-xl"
        >
          Enviar y solicitar demo GRATIS
        </button>
      </form>

      <p className="text-center mt-6 text-sm text-slate-500">
        O contáctanos directo por WhatsApp →{" "}
        <a href="https://wa.me/523319768883?text=Hola%21%20Quiero%20una%20demo%20de%20SABOR" className="text-orange-600 hover:underline">
          +52 33 1976 8883
        </a>
      </p>
    </div>
  </div>
</section>


      {/* Footer simple por mientras */}
      <footer className="py-12 text-center text-slate-500 bg-white border-t">
        <p>© {new Date().getFullYear()} SABOR – Sistema Automatizado para Bares y Restaurantes</p>
        <p className="mt-2 text-sm">Hecho con ❤️ para que tu negocio crezca sin complicaciones</p>
      </footer>


{/* Botón flotante WhatsApp */}
<a
  href="https://wa.me/523319768883?text=Hola%21%20Quiero%20una%20demo%20de%20SABOR%20para%20mi%20bar/restaurante"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 group"
  aria-label="Chatea conmigo en WhatsApp"
>
  <div className="relative">
    <div className="animate-bounce  w-16 h-16 md:w-20 md:h-20 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all duration-300 transform hover:scale-110">
      <svg 
        className="w-10 h-10 md:w-12 md:h-12 text-white" 
        viewBox="0 0 24 24" 
        fill="currentColor"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12c0 2.08.66 4 1.78 5.56L2 22l4.44-1.78C8 21.34 9.92 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm3.78 14.38c-.22.62-.86 1.12-1.5 1.22-.64.1-1.5.1-2.28-.1-.78-.2-2.44-.94-3.56-2.06-1.12-1.12-1.86-2.78-2.06-3.56-.2-.78-.2-1.64-.1-2.28.1-.64.6-1.28 1.22-1.5.62-.22 1.3-.1 1.78.3.48.4.8.96.8 1.58 0 .62-.2 1.24-.6 1.78-.4.54-1.1.9-1.8 1.1-.7.2-1.46.1-2.06-.3-.6-.4-1-.96-1.2-1.66-.2-.7-.1-1.44.3-2.06.4-.62 1-.1 1.5.3.5.4.84.96.84 1.58 0 .62-.2 1.24-.6 1.78-.4.54-1.1.9-1.8 1.1-.7.2-1.46.1-2.06-.3-.6-.4-1-.96-1.2-1.66-.2-.7-.1-1.44.3-2.06.4-.62 1-.1 1.5.3.5.4.84.96.84 1.58 0 .62-.2 1.24-.6 1.78-.4.54-1.1.9-1.8 1.1z"/>
      </svg>
      {/* O usa el ícono de lucide-react si lo tienes: <MessageCircle className="w-10 h-10 text-white" /> */}
    </div>
    
    {/* Tooltip opcional al hover */}
    <div className="absolute bottom-full right-0 mb-3 hidden group-hover:block bg-black text-white text-sm px-4 py-2 rounded-lg shadow-lg whitespace-nowrap">
      ¡Te atendemos también por WhatsApp!
    </div>
  </div>
  
  {/* Badge de notificación (opcional, para dar urgencia) */}
  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse">
    1
  </span>
</a>


    </div>
  );
}