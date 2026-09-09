import { ArrowUpRight, Boxes, Cable, CheckCircle2, Cpu, FileSignature, Globe2, Headset, Menu, ShieldCheck, Zap } from 'lucide-react'

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
    </main>
  )
}
