import React from 'react';
import HeroSlider from '../components/HeroSlider.jsx';
import { servicesList } from '../data/services.js';
import { projectsList } from '../data/projects.js';
import { equipmentList } from '../data/equipment.js';

const STATS = [
  { value: '15+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Completed' },
  { value: '80+', label: 'Fleet Machines' },
  { value: '200+', label: 'Skilled Professionals' }
];

const FEATURED_SERVICES = servicesList.slice(0, 6);
const FEATURED_PROJECTS = projectsList.filter(p => p.featured);

export default function HomePage({ onNavigate }) {
  const nav = (page) => { onNavigate(page); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return (
    <div className="md-content">

      {/* ── HERO ─────────────────────────────────── */}
      <HeroSlider onNavigate={onNavigate} />

      {/* ── ABOUT STRIP ──────────────────────────── */}
      <section className="md-section" style={{ padding: '100px 0 70px', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-40">
              <div className="about-image-wrapper" style={{ position: 'relative' }}>
                <img
                  src="/assets/images/about_fleet_line.jpg"
                  alt="Enock Construction Equipment Line"
                  style={{ width: '100%', borderRadius: '6px', boxShadow: '0 20px 50px rgba(0,0,0,0.12)' }}
                />
                <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', background: 'var(--enock-red)', color: '#fff', padding: '24px', borderRadius: '6px', textAlign: 'center', boxShadow: '0 8px 25px rgba(196,18,18,0.4)' }}>
                  <div style={{ fontSize: '36px', fontFamily: "'Oswald',sans-serif", fontWeight: 700, lineHeight: 1 }}>15+</div>
                  <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px' }}>Years Delivering</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="sec-title">
                <span className="sec-title__tagline">Company Background & Heritage</span>
                <h2 className="sec-title__title" style={{ fontSize: '34px', lineHeight: 1.25 }}>
                  Engineering Solutions Built on 15 Years of Experience
                </h2>
                <span className="sec-title__divider"></span>
              </div>
              <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.75, marginTop: '20px' }}>
                Enock Construction &amp; Earthmoving Equipment is a leading Bulawayo-based civil engineering and infrastructure contracting company, established in <strong>2010 (Reg. BP 4/2010)</strong>.
              </p>
              <p style={{ fontSize: '15px', color: '#4B5563', lineHeight: 1.7, marginTop: '12px' }}>
                With over <strong>80 pieces of heavy machinery</strong> and <strong>200+ skilled professionals</strong>, we deliver road construction, township development, and earthmoving projects across Zimbabwe.
              </p>
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '30px' }}>
                {STATS.map((s, i) => (
                  <div key={i} style={{ textAlign: 'center', minWidth: '80px' }}>
                    <div style={{ fontSize: '32px', fontFamily: "'Oswald',sans-serif", fontWeight: 700, color: 'var(--enock-red)', lineHeight: 1 }}>{s.value}</div>
                    <div style={{ fontSize: '12px', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '4px' }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <button type="button" className="btn btn-primary" style={{ marginTop: '32px' }} onClick={() => nav('about')}>
                Learn About Our Company
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ────────────────────────── */}
      <section className="md-section" style={{ padding: '90px 0', backgroundColor: '#F9FAFB' }}>
        <div className="container">
          <div className="sec-title text-center" style={{ marginBottom: '50px' }}>
            <span className="sec-title__tagline">What We Do</span>
            <h2 className="sec-title__title">Our Core Services</h2>
            <span className="sec-title__divider" style={{ margin: '0 auto' }}></span>
            <p style={{ color: '#6B7280', marginTop: '16px', maxWidth: '620px', margin: '16px auto 0' }}>
              From road construction and township infrastructure to heavy equipment hire and asphalt production.
            </p>
          </div>

          <div className="row">
            {FEATURED_SERVICES.map((svc, i) => (
              <div key={svc.id} className="col-md-6 col-lg-4 mb-30">
                <div
                  style={{
                    background: '#ffffff',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    height: '100%',
                    cursor: 'pointer'
                  }}
                  onClick={() => nav('services')}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.12)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.07)'; }}
                >
                  <div style={{ height: '200px', overflow: 'hidden' }}>
                    <img
                      src={svc.image}
                      alt={svc.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                      onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                      onMouseLeave={e => e.target.style.transform = ''}
                    />
                  </div>
                  <div style={{ padding: '24px' }}>
                    <span style={{ background: 'var(--enock-red)', color: '#fff', fontSize: '10px', fontFamily: "'Oswald',sans-serif", textTransform: 'uppercase', letterSpacing: '1px', padding: '3px 10px', borderRadius: '2px', marginBottom: '10px', display: 'inline-block' }}>
                      Service {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: '20px', fontWeight: 600, marginBottom: '10px', color: '#111827' }}>{svc.title}</h3>
                    <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.6, marginBottom: '16px' }}>
                      {svc.description.substring(0, 120)}...
                    </p>
                    <span style={{ color: 'var(--enock-red)', fontSize: '13px', fontWeight: 600, fontFamily: "'Oswald',sans-serif", textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Learn More <i className="fa fa-arrow-right" style={{ marginLeft: '4px' }}></i>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '40px' }}>
            <button type="button" className="btn btn-primary" onClick={() => nav('services')}>
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* ── CALLOUT BANNER ───────────────────────── */}
      <section style={{ background: 'linear-gradient(135deg, #C41212 0%, #9E0E0E 100%)', padding: '70px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'url("/assets/images/road_construction.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.12 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: '38px', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', marginBottom: '16px' }}>
            Ready to Start Your Project?
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.85)', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
            Contact our Bulawayo office today for a free site assessment and competitive quote.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button type="button" onClick={() => nav('contact')} style={{ backgroundColor: '#ffffff', color: 'var(--enock-red)', fontFamily: "'Oswald',sans-serif", fontSize: '15px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', padding: '14px 30px', borderRadius: '4px', border: 'none', cursor: 'pointer', transition: 'all 0.3s' }}>
              <i className="fa fa-file-text-o" style={{ marginRight: '8px' }}></i> Request a Quote
            </button>
            <a href="tel:+2638688005304" style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'transparent', color: '#ffffff', fontFamily: "'Oswald',sans-serif", fontSize: '15px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', padding: '14px 30px', borderRadius: '4px', border: '2px solid rgba(255,255,255,0.5)', textDecoration: 'none' }}>
              <i className="fa fa-phone" style={{ marginRight: '8px' }}></i> +263 8688 005304
            </a>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ────────────────────── */}
      <section className="md-section" style={{ padding: '90px 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="sec-title text-center" style={{ marginBottom: '50px' }}>
            <span className="sec-title__tagline">Our Recent Work</span>
            <h2 className="sec-title__title">Featured Projects</h2>
            <span className="sec-title__divider" style={{ margin: '0 auto' }}></span>
          </div>
          <div className="row">
            {FEATURED_PROJECTS.map((proj) => (
              <div key={proj.id} className="col-md-6 col-lg-4 mb-30">
                <div
                  style={{ position: 'relative', borderRadius: '6px', overflow: 'hidden', height: '300px', cursor: 'pointer', boxShadow: '0 6px 20px rgba(0,0,0,0.1)' }}
                  onClick={() => nav('projects')}
                >
                  <img
                    src={proj.imageUrl}
                    alt={proj.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    onMouseEnter={e => e.target.style.transform = 'scale(1.08)'}
                    onMouseLeave={e => e.target.style.transform = ''}
                  />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(17,24,39,0.92))', padding: '30px 20px 20px' }}>
                    <span style={{ background: 'var(--enock-red)', color: '#fff', fontSize: '10px', fontFamily: "'Oswald',sans-serif", textTransform: 'uppercase', letterSpacing: '1px', padding: '2px 8px', borderRadius: '2px', marginBottom: '8px', display: 'inline-block' }}>{proj.category}</span>
                    <h4 style={{ fontFamily: "'Oswald',sans-serif", fontSize: '18px', color: '#ffffff', margin: '0 0 4px' }}>{proj.title}</h4>
                    <p style={{ fontSize: '13px', color: '#9CA3AF', margin: 0 }}>
                      <i className="fa fa-map-marker" style={{ marginRight: '4px', color: 'var(--enock-red)' }}></i>
                      {proj.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '40px' }}>
            <button type="button" className="btn btn-primary" onClick={() => nav('projects')}>
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────── */}
      <section className="md-section" style={{ padding: '90px 0', backgroundColor: '#F9FAFB' }}>
        <div className="container">
          <div className="sec-title text-center" style={{ marginBottom: '50px' }}>
            <span className="sec-title__tagline">Client Testimonials</span>
            <h2 className="sec-title__title">What Our Clients Say</h2>
            <span className="sec-title__divider" style={{ margin: '0 auto' }}></span>
          </div>
          <div className="row">
            {[
              { quote: "Enock Construction delivered the Mahatshula East township roads and stormwater system to the highest standard, on schedule and within budget. A truly professional contractor.", name: "Bulawayo City Council", role: "Municipal Infrastructure" },
              { quote: "The road rehabilitation programme completed by Enock exceeded our specifications. Their grader and roller fleet operated continuously with zero downtime throughout the project.", name: "Zimbabwe Roads Authority", role: "National Roads Agency" },
              { quote: "We hired Enock's CAT 320 excavator with operator for six months. The machine was maintained immaculately and the operator was highly skilled. Highly recommended.", name: "Private Contractor", role: "Mining & Earthworks" }
            ].map((t, i) => (
              <div key={i} className="col-md-6 col-lg-4 mb-30">
                <div style={{ background: '#ffffff', padding: '34px', borderRadius: '6px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', height: '100%', position: 'relative', borderTop: '4px solid var(--enock-red)' }}>
                  <div style={{ fontSize: '42px', color: 'var(--enock-red)', lineHeight: 1, marginBottom: '16px', fontFamily: 'Georgia, serif' }}>&ldquo;</div>
                  <p style={{ fontSize: '15px', color: '#4B5563', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '24px' }}>{t.quote}</p>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--enock-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '18px' }}>
                      <i className="fa fa-building"></i>
                    </div>
                    <div>
                      <p style={{ margin: 0, fontFamily: "'Oswald',sans-serif", fontSize: '16px', fontWeight: 700, color: '#111827' }}>{t.name}</p>
                      <p style={{ margin: 0, fontSize: '12px', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EQUIPMENT PREVIEW ────────────────────── */}
      <section className="md-section" style={{ padding: '90px 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="sec-title text-center" style={{ marginBottom: '50px' }}>
            <span className="sec-title__tagline">Heavy Plant & Fleet</span>
            <h2 className="sec-title__title">Our Equipment Fleet</h2>
            <span className="sec-title__divider" style={{ margin: '0 auto', backgroundColor: 'var(--enock-red)' }}></span>
            <p style={{ color: '#6B7280', marginTop: '16px', maxWidth: '600px', margin: '16px auto 0' }}>
              80+ machines available for wet or dry hire across Zimbabwe.
            </p>
          </div>
          <div className="row">
            {equipmentList.slice(0, 4).map((item) => (
              <div key={item.id} className="col-md-6 col-lg-3 mb-30">
                <div
                  style={{ position: 'relative', borderRadius: '6px', overflow: 'hidden', height: '240px', cursor: 'pointer' }}
                  onClick={() => nav('equipment')}
                >
                  <img src={item.imageUrl} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                    onMouseEnter={e => e.target.style.transform = 'scale(1.08)'}
                    onMouseLeave={e => e.target.style.transform = ''} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(transparent 40%, rgba(0,0,0,0.85))', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '16px' }}>
                    <span style={{ background: 'var(--enock-red)', color: '#fff', fontSize: '10px', fontFamily: "'Oswald',sans-serif", textTransform: 'uppercase', letterSpacing: '1px', padding: '2px 8px', borderRadius: '2px', marginBottom: '6px', display: 'inline-block', width: 'fit-content' }}>{item.category}</span>
                    <p style={{ margin: 0, fontFamily: "'Oswald',sans-serif", fontSize: '16px', color: '#fff', fontWeight: 600 }}>{item.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '40px' }}>
            <button type="button" onClick={() => nav('equipment')} style={{ backgroundColor: 'var(--enock-red)', color: '#ffffff', fontFamily: "'Oswald',sans-serif", fontSize: '15px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', padding: '14px 30px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>
              View Full Equipment Catalogue
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
