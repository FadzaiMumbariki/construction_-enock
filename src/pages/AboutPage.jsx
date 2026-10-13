import React from 'react';

const STATS = [
  { value: '15+', label: 'Years Experience', icon: 'fa-clock-o' },
  { value: '50+', label: 'Projects Delivered', icon: 'fa-check-circle' },
  { value: '80+', label: 'Fleet Machines', icon: 'fa-truck' },
  { value: '200+', label: 'Skilled Professionals', icon: 'fa-users' }
];

const VALUES = [
  { icon: 'fa-bullseye', title: 'Our Mission', text: 'To be Zimbabwe\'s most trusted civil engineering contractor by consistently delivering infrastructure projects on time, within budget, and to the highest quality standards — while positively impacting communities through every project we build.' },
  { icon: 'fa-eye', title: 'Our Vision', text: 'To transform Zimbabwe\'s infrastructure landscape through innovation, world-class equipment, and engineering excellence — building the roads, townships, and utilities that drive economic growth and improve livelihoods.' }
];


export default function AboutPage({ onNavigate }) {
  const nav = (page) => { onNavigate(page); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return (
    <div className="md-content">
      {/* Page Banner */}
      <section className="page-title-banner" style={{ backgroundImage: "url('/assets/images/about_us.jpg')" }}>
        <div className="banner-overlay"></div>
        <div className="container">
          <span className="banner-badge">Bulawayo, Zimbabwe</span>
          <h1 className="banner-title">About Our Company</h1>
          <ul className="banner-breadcrumb">
            <li><button type="button" className="breadcrumb-link-btn" onClick={() => nav('home')}>Home</button></li>
            <li className="separator">/</li>
            <li><span>About Us</span></li>
          </ul>
        </div>
      </section>

      {/* Company Story */}
      <section className="md-section" style={{ backgroundColor: '#ffffff', padding: '100px 0 70px' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-40">
              <div style={{ position: 'relative' }}>
                <img src="/assets/images/about_fleet_line.jpg" alt="Enock Construction Equipment Line"
                  style={{ width: '100%', borderRadius: '6px', boxShadow: '0 20px 50px rgba(0,0,0,0.12)' }} />
                <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', background: 'var(--enock-red)', color: '#fff', padding: '24px', borderRadius: '6px', textAlign: 'center', boxShadow: '0 8px 25px rgba(196,18,18,0.4)' }}>
                  <div style={{ fontSize: '36px', fontFamily: "'Oswald',sans-serif", fontWeight: 700, lineHeight: 1 }}>15+</div>
                  <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px' }}>Years of Delivery</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="sec-title">
                <span className="sec-title__tagline">Company Background & Heritage</span>
                <h2 className="sec-title__title" style={{ fontSize: '34px', lineHeight: 1.25 }}>Engineering Solutions Built on Experience</h2>
                <span className="sec-title__divider"></span>
              </div>
              <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.75, marginTop: '20px' }}>
                Enock Construction &amp; Earthmoving Equipment is a leading Bulawayo-based civil engineering and infrastructure contracting company. Established in 2010 (Company Registration No: <strong>BP 4/2010</strong>), we have spent over 15 years building the roads, bridges, township developments, and earthworks that underpin economic progress in Zimbabwe.
              </p>
              <p style={{ fontSize: '15px', color: '#4B5563', lineHeight: 1.7 }}>
                Starting with a dedicated core team and select earthmoving machinery, our commitment to engineering precision, strict timeline compliance, and client transparency has enabled us to grow into an industry leader possessing over <strong>80 pieces of heavy machinery</strong> and employing over <strong>200 skilled professionals</strong>.
              </p>
              <p style={{ fontSize: '15px', color: '#4B5563', lineHeight: 1.7 }}>
                Whether executing municipal road rehabilitation, high-density residential township infrastructure such as Mahatshula East and Valindre, or supplying heavy equipment to the mining sector, we deliver dependable quality backed by seasoned technical supervision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="md-section" style={{ backgroundColor: '#F9FAFB', padding: '80px 0' }}>
        <div className="container">
          <div className="sec-title text-center" style={{ marginBottom: '50px' }}>
            <span className="sec-title__tagline">Our Purpose & Direction</span>
            <h2 className="sec-title__title">Mission & Vision</h2>
            <span className="sec-title__divider" style={{ margin: '0 auto' }}></span>
          </div>
          <div className="row">
            {VALUES.map((v, i) => (
              <div key={i} className="col-md-6 mb-30">
                <div style={{ background: '#ffffff', padding: '40px', borderRadius: '6px', border: '1px solid #E5E7EB', height: '100%', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
                  <div style={{ width: '50px', height: '50px', background: '#FEE2E2', color: 'var(--enock-red)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', marginBottom: '20px' }}>
                    <i className={`fa ${v.icon}`}></i>
                  </div>
                  <h3 style={{ fontFamily: "'Oswald',sans-serif", textTransform: 'uppercase', fontSize: '22px', marginBottom: '12px' }}>{v.title}</h3>
                  <p style={{ fontSize: '15px', color: '#4B5563', lineHeight: 1.75 }}>{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #C41212 0%, #9E0E0E 100%)', padding: '70px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: '36px', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', marginBottom: '16px' }}>
            Start Your Project with Us
          </h2>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.85)', marginBottom: '30px' }}>
            Talk to our team today - free site assessment and competitive tender.
          </p>
          <button type="button" onClick={() => nav('contact')} style={{ backgroundColor: '#ffffff', color: 'var(--enock-red)', fontFamily: "'Oswald',sans-serif", fontSize: '15px', fontWeight: 700, textTransform: 'uppercase', padding: '14px 32px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>
            <i className="fa fa-file-text-o" style={{ marginRight: '8px' }}></i> Request a Quote
          </button>
        </div>
      </section>
    </div>
  );
}
