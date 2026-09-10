'use client'

import { useMemo, useState } from 'react'
import {
  ArrowRight,
  Award,
  Boxes,
  Cable,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock,
  Cog,
  Cpu,
  Droplets,
  Factory,
  FileCheck2,
  FileSignature,
  Handshake,
  Headset,
  Laptop,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  Send,
  ShieldCheck,
  Truck,
  X,
  Zap,
} from 'lucide-react'

const WHATSAPP_NUMBER = '593987486064'
const WHATSAPP_DISPLAY = '+593 98 748 6064'
const WHATSAPP_MESSAGE = 'Hola, quisiera solicitar información sobre los productos de A&F ELECTRIC SAS.'
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
const CONTACT_EMAIL = 'contacto@afelectric.com'
const BUSINESS_HOURS = 'Lunes a Viernes, 8:00 - 17:00'
const FALLBACK_IMG = 'https://placehold.co/800x600/e2e8f0/334155?text=A%26F+ELECTRIC'

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#productos', label: 'Productos' },
  { href: '#soluciones', label: 'Soluciones' },
  { href: '#por-que-af', label: 'Empresa' },
  { href: '#contacto', label: 'Contacto' },
]

const highlights = [
  { icon: Cog, title: 'Soluciones Integrales', text: 'Equipamiento para diferentes necesidades industriales y corporativas.' },
  { icon: Boxes, title: 'Amplio Portafolio', text: 'Suministro de productos eléctricos, industriales y tecnológicos.' },
  { icon: Headset, title: 'Atención Profesional', text: 'Acompañamiento técnico constante durante todo el proceso de compra.' },
  { icon: ShieldCheck, title: 'Calidad y Confiabilidad', text: 'Productos de alto nivel orientados a aplicaciones técnicas exigentes.' },
]

const values = [
  { icon: CheckCircle2, title: 'Confiabilidad', text: 'Compromiso firme con el cumplimiento técnico y la entrega puntual.' },
  { icon: Cpu, title: 'Innovación', text: 'Incorporación constante de equipamiento tecnológico avanzado.' },
  { icon: Award, title: 'Calidad', text: 'Selección de productos orientada al máximo rendimiento continuo.' },
  { icon: Handshake, title: 'Compromiso', text: 'Atención personalizada adaptada a la escala de cada cliente.' },
]

type CategoryKey = 'motores' | 'transformadores' | 'bombas' | 'cables' | 'conmutadores' | 'industrial' | 'tecnologia' | 'otros'

const categories: { tag: string; key: CategoryKey; title: string; text: string; img: string }[] = [
  { tag: 'CAT 01', key: 'motores', title: 'Motores Eléctricos', text: 'Soluciones de accionamiento para aplicaciones industriales y comerciales.', img: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=800&auto=format&fit=crop' },
  { tag: 'CAT 02', key: 'transformadores', title: 'Transformadores', text: 'Equipamiento para aplicaciones de transformación y distribución eléctrica.', img: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=800&auto=format&fit=crop' },
  { tag: 'CAT 03', key: 'bombas', title: 'Bombas para Líquidos', text: 'Equipos para aplicaciones de bombeo y manejo eficiente de líquidos.', img: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop' },
  { tag: 'CAT 04', key: 'cables', title: 'Cables Eléctricos', text: 'Soluciones de alta resistencia para instalaciones y sistemas eléctricos.', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop' },
  { tag: 'CAT 05', key: 'conmutadores', title: 'Conmutadores', text: 'Equipos para control y conmutación robusta de sistemas eléctricos.', img: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=800&auto=format&fit=crop' },
  { tag: 'CAT 06', key: 'industrial', title: 'Equipamiento Industrial', text: 'Equipos y materiales destinados a instalaciones y plantas industriales.', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop' },
  { tag: 'CAT 07', key: 'tecnologia', title: 'Computadoras y Periféricos', text: 'Equipamiento tecnológico para entornos profesionales y empresariales.', img: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=800&auto=format&fit=crop' },
  { tag: 'CAT 08', key: 'otros', title: 'Otros Equipos', text: 'Soluciones complementarias para necesidades eléctricas e industriales.', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop' },
]

const catalogTabs: { key: CategoryKey | 'todos'; label: string }[] = [
  { key: 'todos', label: 'Todos' },
  { key: 'motores', label: 'Motores' },
  { key: 'transformadores', label: 'Transformadores' },
  { key: 'bombas', label: 'Bombas' },
  { key: 'cables', label: 'Cables' },
  { key: 'conmutadores', label: 'Conmutadores' },
  { key: 'industrial', label: 'Industrial' },
  { key: 'tecnologia', label: 'Tecnología' },
  { key: 'otros', label: 'Otros' },
]

type Product = { id: string; category: CategoryKey; name: string; desc: string; specs: string[]; img: string }

const productsData: Product[] = [
  { id: 'm1', category: 'motores', name: 'Motor Eléctrico Trifásico Industrial', desc: 'Motor asíncrono de alta eficiencia energética para procesos industriales continuos.', specs: ['Configuración Trifásica', 'Aislamiento Clase F', 'Protección IP55 / IP66'], img: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=800&auto=format&fit=crop' },
  { id: 'm2', category: 'motores', name: 'Motor Monofásico de Alta Eficiencia', desc: 'Motor compacto orientado a maquinaria comercial y bombas de accionamiento directo.', specs: ['Alimentación Monofásica', 'Carcasa de Aluminio/Hierro', 'Bajo Nivel de Ruido'], img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop' },
  { id: 't1', category: 'transformadores', name: 'Transformador de Distribución Trifásico', desc: 'Equipamiento de transformación de potencia para subestaciones y plantas industriales.', specs: ['Alta/Media Tensión', 'Refrigeración en Aceite/Seco', 'Normas Industriales'], img: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=800&auto=format&fit=crop' },
  { id: 't2', category: 'transformadores', name: 'Transformador Seco Encapsulado', desc: 'Transformador tipo seco diseñado para instalaciones interiores e infraestructura crítica.', specs: ['Encapsulado en Resina', 'Seguridad Contra Incendios', 'Mantenimiento Mínimo'], img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop' },
  { id: 'b1', category: 'bombas', name: 'Bomba Centrífuga para Líquidos', desc: 'Equipo de bombeo hidráulico continuo para fluidos limpios e industriales.', specs: ['Cuerpo en Hierro/Inox', 'Impulsor de Alto Rendimiento', 'Sello Mecánico Premium'], img: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop' },
  { id: 'b2', category: 'bombas', name: 'Bomba Sumergible Industrial', desc: 'Diseñada para extracción de agua, drenajes y manejo de efluentes en obra.', specs: ['Motor Estanco Total', 'Resistencia a la Abrasión', 'Protección Térmica'], img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop' },
  { id: 'c1', category: 'cables', name: 'Cable de Potencia Subterráneo / Industrial', desc: 'Cable de cobre multifilar aislado para transporte y distribución de energía.', specs: ['Conductor de Cobre / Aluminio', 'Aislamiento XLPE', 'Retardante de Llama'], img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop' },
  { id: 'sw1', category: 'conmutadores', name: 'Conmutador / Interruptor de Transferencia', desc: 'Equipo de conmutación de energía para transferencia manual y automática de cargas.', specs: ['Contactos de Plata Sólida', 'Enclave Mecánico Seguro', 'Alta Capacidad de Ruptura'], img: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=800&auto=format&fit=crop' },
  { id: 'ind1', category: 'industrial', name: 'Gabinete de Control Industrial', desc: 'Envolvente metálica modular para alojamiento de automatismos y protección eléctrica.', specs: ['Grado de Protección IP65', 'Pintura Epóxica Electrostática', 'Placa de Montaje Incluida'], img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop' },
  { id: 'tech1', category: 'tecnologia', name: 'Estación de Trabajo / Computadora Empresarial', desc: 'Equipo de cómputo de alto desempeño para centros de control, oficinas e ingenierías.', specs: ['Procesadores Multinúcleo', 'Almacenamiento SSD NVMe', 'Chasis de Grado Comercial'], img: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=800&auto=format&fit=crop' },
  { id: 'tech2', category: 'tecnologia', name: 'Periféricos e Infraestructura TI', desc: 'Monitores, switches y periféricos profesionales para entornos corporativos.', specs: ['Pantallas de Alta Resolución', 'Conectividad Gigabit', 'Grado de Uso Continuo'], img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop' },
  { id: 'o1', category: 'otros', name: 'Equipamiento Eléctrico Complementario', desc: 'Materiales, conectores, fusibles y accesorios para instalaciones industriales.', specs: ['Cumplimiento Normativo', 'Alta Durabilidad', 'Variedad de Calibres'], img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop' },
]

const solutions = [
  { icon: Zap, title: 'Equipamiento Eléctrico', text: 'Suministro especializado para instalaciones eléctricas, subestaciones, tableros de control y distribución de energía en entornos industriales exigentes.' },
  { icon: Factory, title: 'Soluciones Industriales', text: 'Equipamiento pesado y componentes diseñados para responder a las demandas operativas continuas de plantas de manufactura y procesamiento.' },
  { icon: Droplets, title: 'Sistemas de Bombeo', text: 'Suministro de bombas y sistemas integrados para el manejo, transporte y bombeo de fluidos e insumos líquidos industriales.' },
  { icon: Laptop, title: 'Tecnología Empresarial', text: 'Computadoras, servidores de trabajo y periféricos de alto desempeño para la infraestructura tecnológica de oficinas y centros operativos.' },
  { icon: Truck, title: 'Suministro de Materiales y Proyectos', text: 'Atención integral para compras corporativas al por mayor, abasteciendo proyectos eléctricos, de instalación y equipamiento técnico especializado con acompañamiento continuo.', wide: true },
]

const whyUs = [
  { n: '01', title: 'Portafolio Especializado', text: 'Amplia selección de equipos eléctricos e industriales en una sola fuente.' },
  { n: '02', title: 'Soluciones para la Industria', text: 'Equipamiento configurado para entornos operativos exigentes.' },
  { n: '03', title: 'Atención Personalizada', text: 'Asesoramiento directo en la formulación de pedidos técnicos.' },
  { n: '04', title: 'Enfoque Profesional', text: 'Procesos estructurados de cotización y despacho corporativo B2B.' },
  { n: '05', title: 'Respuesta a Requerimientos', text: 'Agilidad en el procesamiento de cotizaciones para proyectos urbanos e industriales.' },
  { n: '06', title: 'Equipamiento Eléctrico y Tecnológico', text: 'Convergencia de soluciones de potencia y tecnología en un solo proveedor.' },
]

const processSteps = [
  { n: '01', title: 'Cuéntanos lo que necesitas', text: 'Envíanos las especificaciones o la lista de equipos requeridos.' },
  { n: '02', title: 'Analizamos tu requerimiento', text: 'Revisamos la factibilidad comercial y técnica de tu solicitud.' },
  { n: '03', title: 'Seleccionamos la solución', text: 'Identificamos los productos idóneos de nuestro portafolio.' },
  { n: '04', title: 'Solicita tu cotización', text: 'Recibe la propuesta formal detallada para tu empresa.' },
]

const footerCategories = [
  { key: 'motores', label: 'Motores Eléctricos' },
  { key: 'transformadores', label: 'Transformadores' },
  { key: 'bombas', label: 'Bombas para Líquidos' },
  { key: 'cables', label: 'Cables Eléctricos' },
  { key: 'conmutadores', label: 'Conmutadores' },
  { key: 'tecnologia', label: 'Equipos Tecnológicos' },
] as const

function onImgError(e: React.SyntheticEvent<HTMLImageElement>) {
  const img = e.currentTarget
  img.onerror = null
  img.src = FALLBACK_IMG
}

export default function Page() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<CategoryKey | 'todos'>('todos')
  const [search, setSearch] = useState('')
  const [productInterest, setProductInterest] = useState('')
  const [formMessage, setFormMessage] = useState<string | null>(null)
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null)

  const filteredProducts = useMemo(() => {
    const term = search.toLowerCase().trim()
    return productsData.filter((item) => {
      const matchesCat = activeCategory === 'todos' || item.category === activeCategory
      const matchesSearch =
        !term ||
        item.name.toLowerCase().includes(term) ||
        item.desc.toLowerCase().includes(term) ||
        item.specs.some((s) => s.toLowerCase().includes(term))
      return matchesCat && matchesSearch
    })
  }, [activeCategory, search])

  function goToQuote(prefill: string) {
    setProductInterest(prefill)
    document.getElementById('cotizacion')?.scrollIntoView({ behavior: 'smooth' })
    window.setTimeout(() => document.getElementById('product-interest')?.focus(), 350)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('fullname') || '')
    const company = String(data.get('company') || '')
    const product = productInterest

    setFormMessage(
      `¡Gracias, ${name} (${company})! Su solicitud de cotización para "${product}" ha sido procesada. Un asesor comercial revisará su mensaje y se pondrá en contacto a la brevedad.`,
    )
    e.currentTarget.reset()
    setProductInterest('')
    window.setTimeout(() => setFormMessage(null), 8000)
  }

  return (
    <main>
      <header className="site-header">
        <div className="header-inner">
          <a href="#inicio" className="logo-lockup" aria-label="A&F Electric inicio">
            <span className="logo-badge">
              <span className="logo-af">AF</span>
              <span className="logo-bolt">↯</span>
            </span>
            <span className="logo-text">
              <strong>A&F</strong> ELECTRIC
              <small>SAS · Industrial &amp; Tech</small>
            </span>
          </a>

          <nav className="main-nav" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </nav>

          <a className="header-cta" href="#cotizacion">
            <FileSignature size={15} /> Solicitar Cotización
          </a>

          <button
            className="mobile-menu"
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="mobile-drawer">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>{link.label}</a>
            ))}
            <a href="#cotizacion" className="mobile-drawer-cta" onClick={() => setMobileOpen(false)}>
              Solicitar Cotización
            </a>
          </div>
        )}
      </header>

      <section className="reference-hero" id="inicio">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-overlay" />
        <div className="content-shell hero-content">
          <div className="hero-badge"><span /> Proveedor Industrial y Tecnológico</div>
          <h1>Energía que<br /><em>impulsa tus proyectos.</em></h1>
          <p>Soluciones eléctricas, industriales y tecnológicas para empresas que buscan rendimiento, confiabilidad y eficiencia.</p>
          <div className="hero-actions">
            <a className="yellow-button" href="#productos"><Boxes size={17} /> Ver Nuestros Productos</a>
            <a className="light-button" href="#cotizacion"><FileCheck2 size={17} /> Solicitar Cotización</a>
          </div>
          <div className="hero-note"><Zap size={17} /> Equipamiento eléctrico · Soluciones industriales · Tecnología</div>
        </div>
      </section>

      <section className="highlight-wrap">
        <div className="highlight-grid">
          {highlights.map(({ icon: Icon, title, text }) => (
            <article className="highlight-card" key={title}>
              <div className="highlight-icon"><Icon size={21} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section content-shell" id="nosotros">
        <div className="about-image">
          <div className="image-caption">
            <small>A&F ELECTRIC SAS</small>
            <strong>Comercialización y suministro B2B al por mayor.</strong>
          </div>
        </div>
        <div className="about-copy">
          <div className="section-kicker">Sobre Nosotros</div>
          <h2>Tecnología y soluciones<br /><em>para la industria.</em></h2>
          <p>A&amp;F ELECTRIC SAS orienta sus actividades a la comercialización de equipos eléctricos, industriales y tecnológicos, ofreciendo a sus clientes alternativas para el desarrollo y equipamiento de sus proyectos.</p>
          <div className="value-list">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <Icon size={18} />
                <span><strong>{title}</strong>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="categories-section" id="productos">
        <div className="content-shell">
          <div className="section-heading">
            <span className="pill-kicker">CATEGORÍAS DE PRODUCTO</span>
            <h2>Nuestro Portafolio</h2>
            <p>Equipamiento diseñado para responder a las necesidades de la industria y la tecnología.</p>
          </div>

          <div className="category-grid">
            {categories.map((cat) => (
              <article className="category-card" key={cat.key}>
                <div className="category-image">
                  <img src={cat.img} alt={cat.title} onError={onImgError} />
                  <span className="category-tag">{cat.tag}</span>
                </div>
                <div className="category-body">
                  <div>
                    <h3>{cat.title}</h3>
                    <p>{cat.text}</p>
                  </div>
                  <button
                    type="button"
                    className="category-link"
                    onClick={() => {
                      setActiveCategory(cat.key)
                      document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    <span>Ver Productos</span> <ArrowRight size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="catalog-section" id="catalogo">
        <div className="content-shell">
          <div className="catalog-header">
            <div>
              <span className="eyebrow">BÚSQUEDA TÉCNICA</span>
              <h2>Catálogo Interactivo</h2>
              <p>Explore nuestro catálogo, busque por palabra clave o busque por categoría.</p>
            </div>
            <div className="catalog-search">
              <Search size={16} />
              <input
                type="text"
                placeholder="Buscar producto o especificación..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Buscar producto o especificación"
              />
            </div>
          </div>

          <div className="catalog-tabs">
            {catalogTabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                className={`cat-tab${activeCategory === tab.key ? ' active' : ''}`}
                onClick={() => setActiveCategory(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="catalog-grid">
            {filteredProducts.length === 0 ? (
              <div className="catalog-empty">
                <Search size={28} />
                <p>No se encontraron productos que coincidan con la búsqueda.</p>
              </div>
            ) : (
              filteredProducts.map((product) => (
                <article className="catalog-card" key={product.id}>
                  <div className="catalog-card-image">
                    <img src={product.img} alt={product.name} onError={onImgError} />
                    <span>{product.category}</span>
                  </div>
                  <div className="catalog-card-body">
                    <div>
                      <h3>{product.name}</h3>
                      <p>{product.desc}</p>
                      <ul>
                        {product.specs.map((spec) => (
                          <li key={spec}><Check size={12} /> {spec}</li>
                        ))}
                      </ul>
                    </div>
                    <button type="button" onClick={() => goToQuote(product.name)}>
                      <FileSignature size={13} /> Solicitar Cotización
                    </button>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </section>

      <section className="solutions-section" id="soluciones">
        <div className="content-shell">
          <div className="section-heading">
            <span className="pill-kicker">ÁREAS DE APLICACIÓN</span>
            <h2>Soluciones que conectan tecnología e industria.</h2>
            <p>Atendemos requerimientos técnicos estratégicos para diversos sectores productivos.</p>
          </div>

          <div className="solutions-grid">
            {solutions.map(({ icon: Icon, title, text, wide }) => (
              <article className={`solution-card${wide ? ' wide' : ''}`} key={title}>
                <div>
                  <div className="solution-icon"><Icon size={26} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <button type="button" onClick={() => goToQuote(`Solución: ${title}`)}>
                  <span>Consultar Solución</span> <ChevronRight size={13} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="why-section" id="por-que-af">
        <div className="content-shell">
          <div className="section-heading">
            <span className="eyebrow">VENTAJAS ESTRATÉGICAS</span>
            <h2>Un proveedor. Múltiples soluciones.</h2>
            <p>Optimizamos la gestión de compras técnicas para empresas de diversos sectores.</p>
          </div>

          <div className="why-grid">
            {whyUs.map((item) => (
              <article className="why-card" key={item.n}>
                <span className="why-number">{item.n}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="content-shell">
          <div className="section-heading">
            <span className="pill-kicker">FLUJO DE TRABAJO B2B</span>
            <h2>Del requerimiento a la solución.</h2>
            <p>Proceso simplificado para la atención eficiente de cotizaciones y proyectos.</p>
          </div>

          <div className="process-grid">
            {processSteps.map((step, i) => (
              <div className="process-step" key={step.n}>
                <div className={`process-number${i % 3 === 0 ? ' filled' : ''}`}>{step.n}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="content-shell cta-inner">
          <h2>¿Tienes un proyecto o necesitas un equipo específico?</h2>
          <p>Nuestro portafolio está listo para ayudarte a encontrar la solución que necesitas.</p>
          <div className="cta-actions">
            <a className="dark-button" href="#cotizacion"><FileSignature size={15} /> Solicitar Cotización</a>
            <a className="light-button" href="#contacto"><Phone size={15} /> Contactarnos</a>
          </div>
        </div>
      </section>

      <section className="quote-section" id="cotizacion">
        <div className="quote-shell">
          <div className="quote-card">
            <div className="section-heading">
              <span className="pill-kicker">SOLICITUD B2B</span>
              <h2>Formulario de Cotización</h2>
              <p>Complete sus datos para recibir una propuesta formal de equipamiento.</p>
            </div>

            {formMessage && (
              <div className="form-message">
                <CheckCircle2 size={18} /> <span>{formMessage}</span>
              </div>
            )}

            <form className="quote-form" onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="fullname">Nombre Completo *</label>
                <input id="fullname" name="fullname" type="text" required placeholder="Ej. Carlos Rodríguez" />
              </div>
              <div className="form-field">
                <label htmlFor="company">Empresa *</label>
                <input id="company" name="company" type="text" required placeholder="Nombre de su Empresa S.A.S." />
              </div>
              <div className="form-field">
                <label htmlFor="position">Cargo</label>
                <input id="position" name="position" type="text" placeholder="Ej. Director de Compras / Ingeniero" />
              </div>
              <div className="form-field">
                <label htmlFor="email">Correo Electrónico *</label>
                <input id="email" name="email" type="email" required placeholder="ejemplo@empresa.com" />
              </div>
              <div className="form-field">
                <label htmlFor="phone">Teléfono / Celular *</label>
                <input id="phone" name="phone" type="tel" required placeholder="+57 300 000 0000" />
              </div>
              <div className="form-field">
                <label htmlFor="city">Ciudad / Ubicación *</label>
                <input id="city" name="city" type="text" required placeholder="Ciudad, País" />
              </div>
              <div className="form-field span-2">
                <label htmlFor="product-interest">Producto / Solución de Interés *</label>
                <input
                  id="product-interest"
                  name="product-interest"
                  type="text"
                  required
                  placeholder="Seleccione o escriba el equipo de interés"
                  value={productInterest}
                  onChange={(e) => setProductInterest(e.target.value)}
                />
              </div>
              <div className="form-field">
                <label htmlFor="quantity">Cantidad Estimada</label>
                <input id="quantity" name="quantity" type="text" placeholder="Ej. 5 unidades / Por lote" />
              </div>
              <div className="form-field span-2">
                <label htmlFor="message">Mensaje / Especificaciones Requeridas</label>
                <textarea id="message" name="message" rows={4} placeholder="Describa el requerimiento específico, tensión, potencia o tipo de aplicación..." />
              </div>
              <div className="form-field span-2">
                <button type="submit" className="submit-button">
                  <Send size={14} /> SOLICITAR COTIZACIÓN
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="contact-info-section" id="contacto">
        <div className="content-shell">
          <div className="section-heading">
            <span className="pill-kicker">COMUNICACIÓN DIRECTA</span>
            <h2>Hablemos de tu próximo proyecto.</h2>
            <p>Nuestro equipo comercial está a su disposición para resolver cualquier consulta.</p>
          </div>

          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon"><Phone size={20} /></div>
              <h3>Teléfono</h3>
              <p>{WHATSAPP_DISPLAY}</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon"><Mail size={20} /></div>
              <h3>Correo Electrónico</h3>
              <p>{CONTACT_EMAIL}</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon"><MapPin size={20} /></div>
              <h3>Cobertura</h3>
              <p>Ecuador · Perú · Colombia</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon"><Clock size={20} /></div>
              <h3>Horario</h3>
              <p>{BUSINESS_HOURS}</p>
            </div>
          </div>
        </div>
      </section>

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Contactar por WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.39a9.87 9.87 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.13-2.9-7C17.17 3.03 14.69 2 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.2 8.2 0 0 1-1.26-4.37c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.55-3.7 8.23-8.24 8.23Zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.99-1.22-.74-.65-1.23-1.46-1.38-1.71-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.55c.13.17 1.73 2.64 4.2 3.7.59.25 1.05.4 1.41.51.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.1-.23-.16-.48-.28Z" />
        </svg>
        <span className="whatsapp-tooltip">Atención Inmediata WhatsApp</span>
      </a>

      <footer>
        <div className="content-shell footer-grid">
          <div className="footer-brand">
            <a href="#inicio" className="logo-text">
              <strong>A&F</strong> ELECTRIC
              <small>SAS · Industrial &amp; Tech</small>
            </a>
            <p>Soluciones eléctricas, industriales y tecnológicas para empresas que demandan continuidad y eficiencia operativa.</p>
          </div>

          <div className="footer-col">
            <h4>Empresa</h4>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#soluciones">Soluciones</a></li>
              <li><a href="#por-que-af">Por Qué A&amp;F</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Productos</h4>
            <ul>
              {footerCategories.map((cat) => (
                <li key={cat.key}>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveCategory(cat.key)
                      document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contacto Directo</h4>
            <ul className="footer-contact">
              <li><Phone size={13} /> {WHATSAPP_DISPLAY}</li>
              <li><Mail size={13} /> {CONTACT_EMAIL}</li>
              <li><MapPin size={13} /> Ecuador · Perú · Colombia</li>
            </ul>
          </div>
        </div>

        <div className="footer-legal content-shell">
          <p>© 2026 A&amp;F ELECTRIC SAS. Todos los derechos reservados.</p>
          <div>
            <button type="button" onClick={() => setLegalModal('privacy')}>Política de Privacidad</button>
            <button type="button" onClick={() => setLegalModal('terms')}>Términos y Condiciones</button>
          </div>
        </div>
      </footer>

      {legalModal && (
        <div className="legal-modal" role="dialog" aria-modal="true" onClick={() => setLegalModal(null)}>
          <div className="legal-modal-card" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="legal-modal-close" onClick={() => setLegalModal(null)} aria-label="Cerrar">
              <X size={18} />
            </button>
            {legalModal === 'privacy' ? (
              <>
                <h3>Política de Privacidad</h3>
                <p>En <strong>A&amp;F ELECTRIC SAS</strong> respetamos la confidencialidad de la información recibida a través de nuestros canales digitales. Los datos suministrados mediante los formularios de cotización y contacto serán empleados de manera exclusiva para fines comerciales internos y atención de solicitudes B2B.</p>
                <p>No compartimos ni comercializamos datos personales a terceros sin previa autorización de la entidad o cliente interesado.</p>
              </>
            ) : (
              <>
                <h3>Términos y Condiciones</h3>
                <p>El uso del sitio web corporativo de <strong>A&amp;F ELECTRIC SAS</strong> está sujeto a la aceptación de los presentes términos. Las cotizaciones emitidas a través de la plataforma son informativas y están sujetas a confirmación formal por parte de nuestro departamento de ventas.</p>
                <p>Las especificaciones de los equipos listados en el catálogo interactivo corresponden a estándares técnicos generales y pueden ser adaptadas según requerimiento técnico formal.</p>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  )
}
