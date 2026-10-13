import React, { useState } from 'react';
import { servicesList } from '../data/services.js';

export default function ServicesPage({ onNavigate }) {
  const nav = (page) => { onNavigate(page); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const [activeService, setActiveService] = useState(null);

  return (
    <div className="md-content">
      {/* Page Banner */}
      <section className="page-title-banner" style={{ backgroundImage: "url('/assets/images/road_construction.jpg')" }}>
        <div className="banner-overlay"></div>
        <div className="container">
          <span className="banner-badge">Civil Engineering Solutions</span>
          <h1 className="banner-title">Our Services</h1>
          <ul className="banner-breadcrumb">
            <li><button type="button" className="breadcrumb-link-btn" onClick={() => nav('home')}>Home</button></li>
            <li className="separator">/</li>
            <li><span>Services</span></li>
          </ul>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background: '#ffffff', padding: '80px 0 60px' }}>
        <div className="container">
          <div className="sec-title text-center" style={{ marginBottom: '50px' }}>
            <span className="sec-title__tagline">Full-Scope Civil Engineering Capabilities</span>
            <h2 className="sec-title__title">What We Deliver</h2>
            <span className="sec-title__divider" style={{ margin: '0 auto' }}></span>
            <p style={{ color: '#6B7280', marginTop: '16px', maxWidth: '640px', margin: '16px auto 0', fontSize: '16px' }}>
              From road construction and bulk earthworks to township development, asphalt production, and heavy equipment hire - Enock Construction provides complete civil engineering services across Zimbabwe.
            </p>
          </div>
        </div>
      </section>

      {/* Services Alternating Layout */}
      <section style={{ background: '#F9FAFB', paddingBottom: '90px' }}>
        <div className="container">
          {servicesList.map((svc, i) => (
            <div
              key={svc.id}
              id={svc.id}
              style={{
                background: '#ffffff',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
                marginBottom: '24px',
                display: 'flex',
                flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
                height: '220px'
              }}
              className="services-detail-card"
            >
              {/* Image half */}
              <div style={{ flex: '0 0 36%', minWidth: '36%', position: 'relative', overflow: 'hidden' }}>
                <img
                  src={svc.image}
                  alt={svc.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.06)'}
                  onMouseLeave={e => e.target.style.transform = ''}
                />
                <div style={{ position: 'absolute', top: '12px', left: '12px', background: 'var(--enock-red)', color: '#fff', fontFamily: "'Oswald',sans-serif", fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1.5px', padding: '3px 10px', borderRadius: '3px' }}>
                  Service {String(i + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Content half */}
              <div style={{ flex: 1, padding: '24px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{ fontSize: '11px', color: 'var(--enock-red)', fontFamily: "'Oswald',sans-serif", textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>
                  {svc.tagline}
                </span>
                <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: '20px', fontWeight: 700, color: '#111827', margin: '6px 0 10px', textTransform: 'uppercase' }}>
                  {svc.title}
                </h2>
                <p style={{ fontSize: '13px', color: '#4B5563', lineHeight: 1.6, marginBottom: '16px' }}>
                  {(() => {
                    const text = svc.description.substring(0, 160);
                    const lastStop = text.lastIndexOf('.');
                    return lastStop > 60 ? text.substring(0, lastStop + 1) : text.substring(0, text.lastIndexOf(' ')) + '.';
                  })()}
                </p>
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ alignSelf: 'flex-start', padding: '8px 20px', fontSize: '13px' }}
                  onClick={() => nav('contact')}
                >
                  Request a Quote <i className="fa fa-arrow-right" style={{ marginLeft: '6px' }}></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #C41212 0%, #9E0E0E 100%)', padding: '70px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: '36px', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', marginBottom: '16px' }}>
            Ready to Get Started?
          </h2>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.85)', marginBottom: '30px' }}>
            Contact our team for a competitive quote tailored to your project.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button type="button" onClick={() => nav('contact')} style={{ backgroundColor: '#ffffff', color: 'var(--enock-red)', fontFamily: "'Oswald',sans-serif", fontSize: '15px', fontWeight: 700, textTransform: 'uppercase', padding: '14px 30px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>
              Request a Quote
            </button>
            <button type="button" onClick={() => nav('equipment')} style={{ backgroundColor: 'transparent', color: '#ffffff', fontFamily: "'Oswald',sans-serif", fontSize: '15px', fontWeight: 700, textTransform: 'uppercase', padding: '14px 30px', borderRadius: '4px', border: '2px solid rgba(255,255,255,0.5)', cursor: 'pointer' }}>
              Browse Equipment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
