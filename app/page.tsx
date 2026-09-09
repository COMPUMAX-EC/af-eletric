import { ArrowUpRight, Boxes, Cable, CheckCircle2, Cpu, FileSignature, Globe2, Headset, Menu, ShieldCheck, Zap } from 'lucide-react'

const WHATSAPP_NUMBER = '593987486064'
const WHATSAPP_MESSAGE = 'Hola A&F Electric, me gustaría más información sobre sus productos y soluciones.'
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

const highlights = [
  { icon: Boxes, title: 'Soluciones integrales', text: 'Equipamiento para diferentes necesidades industriales y corporativas.' },
  { icon: Cable, title: 'Amplio portafolio', text: 'Suministro de productos eléctricos, industriales y tecnológicos.' },
  { icon: Headset, title: 'Atención profesional', text: 'Acompañamiento técnico constante durante todo el proceso.' },
  { icon: ShieldCheck, title: 'Calidad y confiabilidad', text: 'Productos de alto nivel para aplicaciones técnicas exigentes.' },
]

const products = [
  { title: 'Equipos eléctricos', text: 'Motores, transformadores, cables, conmutadores y componentes para instalaciones confiables.', icon: Zap },
  { title: 'Equipos industriales', text: 'Bombas, automatización y soluciones para el funcionamiento continuo de su operación.', icon: Cpu },
  { title: 'Tecnología empresarial', text: 'Computadores, periféricos y herramientas para potenciar sus procesos.', icon: Boxes },
]

export default function Page() {
  return (
    <main>
      <header className="site-header">
        <div className="header-inner">
          <a href="#inicio" className="logo-lockup" aria-label="A&F Electric inicio">
            <span className="logo-badge"><span className="logo-af">AF</span><span className="logo-bolt">↯</span></span>
            <span className="logo-text"><strong>A&F</strong> ELECTRIC<small>SAS · Industrial & Tech</small></span>
          </a>
          <nav className="main-nav" aria-label="Navegación principal">
            <a href="#inicio">Inicio</a><a href="#nosotros">Nosotros</a><a href="#productos">Productos</a><a href="#soluciones">Soluciones</a><a href="#por-que-af">Empresa</a><a href="#contacto">Contacto</a>
          </nav>
          <a className="header-cta" href="#cotizacion"><FileSignature size={15} /> Solicitar cotización</a>
          <button className="mobile-menu" aria-label="Abrir menú"><Menu size={22} /></button>
        </div>
      </header>

      <section className="reference-hero" id="inicio">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-overlay" />
        <div className="content-shell hero-content">
          <div className="hero-badge"><span /> Proveedor industrial y tecnológico</div>
          <h1>Energía que<br /><em>impulsa tus proyectos.</em></h1>
          <p>Soluciones eléctricas, industriales y tecnológicas para empresas que buscan rendimiento, confiabilidad y eficiencia.</p>
          <div className="hero-actions"><a className="yellow-button" href="#productos"><Boxes size={17} /> Ver nuestros productos</a><a className="light-button" href="#cotizacion"><FileSignature size={17} /> Solicitar cotización</a></div>
          <div className="hero-note"><Zap size={17} /> Equipamiento eléctrico · Soluciones industriales · Tecnología</div>
        </div>
      </section>

      <section className="highlight-wrap"><div className="highlight-grid">{highlights.map(({ icon: Icon, title, text }) => <article className="highlight-card" key={title}><div className="highlight-icon"><Icon size={21} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section className="about-section content-shell" id="nosotros"><div className="about-image"><div className="image-caption"><small>A&F ELECTRIC SAS</small><strong>Comercialización y suministro B2B al por mayor.</strong></div></div><div className="about-copy"><div className="section-kicker">Sobre nosotros</div><h2>Tecnología y soluciones<br /><em>para la industria.</em></h2><p>A&F ELECTRIC SAS orienta sus actividades a la comercialización de equipos eléctricos, industriales y tecnológicos, ofreciendo a sus clientes alternativas para el desarrollo y equipamiento de sus proyectos.</p><div className="value-list"><div><CheckCircle2 size={18} /><span><strong>Confiabilidad</strong>Compromiso firme con el cumplimiento técnico y la entrega puntual.</span></div><div><CheckCircle2 size={18} /><span><strong>Experiencia</strong>Conocimiento para acompañar cada decisión de compra.</span></div></div></div></section>

      <section className="products-section" id="productos"><div className="content-shell"><div className="section-kicker">Nuestro portafolio</div><div className="products-heading"><h2>Todo lo que su<br /><em>operación necesita.</em></h2><p>Representamos y suministramos soluciones de marcas reconocidas para ambientes industriales y corporativos.</p></div><div className="product-grid">{products.map(({ title, text, icon: Icon }) => <article className="product-card" key={title}><Icon size={30} /><h3>{title}</h3><p>{text}</p><a href="#cotizacion" aria-label={`Solicitar información sobre ${title}`}><ArrowUpRight size={18} /></a></article>)}</div></div></section>

      <section className="coverage-section content-shell"><div className="coverage-copy"><div className="section-kicker">Cobertura regional</div><h2>Una alianza técnica<br /><em>cerca de usted.</em></h2><p>Atendemos proyectos y requerimientos de empresas en Ecuador, Perú y Colombia con respuesta ágil y soporte especializado.</p></div><div className="coverage-map"><Globe2 size={54} /><div><strong>Ecuador</strong><strong>Perú</strong><strong>Colombia</strong></div></div></section>

      <section className="contact-section" id="cotizacion"><div className="content-shell contact-inner"><div><div className="section-kicker">Hablemos de su proyecto</div><h2>Estamos listos para<br /><em>conectar.</em></h2></div><div className="contact-details"><p>Cuéntenos qué necesita y nuestro equipo técnico le ayudará a encontrar la solución adecuada.</p><a href="mailto:contacto@afelectric.com">contacto@afelectric.com <ArrowUpRight size={19} /></a></div></div></section>
      <footer><div className="content-shell footer-inner"><a href="#inicio" className="logo-text"><strong>A&F</strong> ELECTRIC<small>SAS · Industrial & Tech</small></a><p>Equipamiento eléctrico · Soluciones industriales · Tecnología</p><span>© 2026 A&F Electric SAS</span></div></footer>

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chatear por WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.39a9.87 9.87 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.13-2.9-7C17.17 3.03 14.69 2 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.2 8.2 0 0 1-1.26-4.37c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.55-3.7 8.23-8.24 8.23Zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.99-1.22-.74-.65-1.23-1.46-1.38-1.71-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.55c.13.17 1.73 2.64 4.2 3.7.59.25 1.05.4 1.41.51.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.1-.23-.16-.48-.28Z" />
        </svg>
      </a>
    </main>
  )
}
