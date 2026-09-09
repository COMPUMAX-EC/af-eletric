import { ArrowUpRight, Cable, Cpu, Globe2, Menu, Settings2, Ship, Zap } from 'lucide-react'

const services = [
  { icon: Ship, title: 'Sistemas navales', text: 'Adquisición de datos, automatización y soporte eléctrico para operación marítima.' },
  { icon: Settings2, title: 'Mantenimiento industrial', text: 'Diagnóstico, puesta en marcha y mantenimiento de sistemas críticos.' },
  { icon: Cpu, title: 'Control y automatización', text: 'Integración de PLC, SCADA e instrumentación para procesos más confiables.' },
]

export default function Page() {
  return (
    <main>
      <section className="hero-section">
        <nav className="site-nav" aria-label="Navegación principal">
          <a href="#inicio" className="brand-mark"><span>A&F</span> ELECTRIC</a>
          <div className="nav-links"><a href="#servicios">Servicios</a><a href="#experiencia">Experiencia</a><a href="#contacto">Contacto</a></div>
          <a href="#contacto" className="nav-cta">Hablemos <ArrowUpRight size={16} /></a>
          <button className="menu-button" aria-label="Abrir menú"><Menu size={22} /></button>
        </nav>
        <div className="hero-content" id="inicio">
          <p className="eyebrow"><span className="eyebrow-line" /> Ingeniería que mantiene el rumbo</p>
          <h1>La energía de<br /><em>lo esencial.</em></h1>
          <p className="hero-copy">Sistemas eléctricos y adquisición de datos para buques e industria. Ingeniería precisa para operaciones que no pueden detenerse.</p>
          <a href="#servicios" className="primary-button">Conozca nuestras soluciones <ArrowUpRight size={17} /></a>
        </div>
        <div className="hero-footer"><span>01 — 03</span><span className="hero-scroll">Desplazar para explorar <span className="scroll-line" /></span></div>
      </section>

      <section className="intro-section" id="experiencia">
        <div className="section-label">A&F / 01</div>
        <div className="intro-content"><p className="eyebrow dark"><span className="eyebrow-line" /> Ingeniería eléctrica especializada</p><h2>Conectamos la<br /><strong>inteligencia</strong> con la operación.</h2><p className="body-copy">Desde el mar hasta las plantas industriales, ayudamos a nuestros clientes a ver, entender y controlar sus sistemas eléctricos. Una alianza técnica para cada desafío.</p><div className="regions"><Globe2 size={18} /><span>Ecuador</span><span>Perú</span><span>Colombia</span></div></div>
      </section>

      <section className="services-section" id="servicios"><div className="section-heading"><div><p className="eyebrow dark"><span className="eyebrow-line" /> Lo que hacemos</p><h2>Experiencia que<br /><strong>se siente.</strong></h2></div><p className="heading-note">Soluciones diseñadas para entornos exigentes, donde la precisión y la continuidad son parte del resultado.</p></div><div className="service-grid">{services.map(({ icon: Icon, title, text }, index) => <article className="service-card" key={title}><span className="service-number">0{index + 1}</span><Icon className="service-icon" size={28} strokeWidth={1.4} /><h3>{title}</h3><p>{text}</p><a href="#contacto" aria-label={`Conocer más sobre ${title}`}><ArrowUpRight size={18} /></a></article>)}</div></section>

      <section className="partners-section"><p className="eyebrow dark"><span className="eyebrow-line" /> Tecnología que conocemos</p><div className="partner-row"><span>SIEMENS</span><span>HONEYWELL</span><span>GE <small>fanuc</small></span><span className="partner-caption">Integradores y especialistas certificados<br />para sistemas industriales.</span></div></section>

      <section className="contact-section" id="contacto"><div><p className="eyebrow"><span className="eyebrow-line" /> Hablemos de su próximo proyecto</p><h2>Todo sistema<br />tiene un <em>pulso.</em></h2></div><a className="contact-link" href="mailto:contacto@afelectric.com">contacto@afelectric.com <ArrowUpRight size={20} /></a></section>
      <footer><a href="#inicio" className="brand-mark"><span>A&F</span> ELECTRIC</a><p>Ingeniería eléctrica para un mundo en movimiento.</p><span>© 2026 A&F Electric</span></footer>
    </main>
  )
}

