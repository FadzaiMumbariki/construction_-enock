import React from 'react';

export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();

  const handleNav = (pageId) => {
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-01 md-skin-dark">
      <div className="footer-01__widget">
        <div className="container">
          <div className="row">
            
            {/* Col 1: About & Logo */}
            <div className="col-md-6 col-lg-3 mb-30">
              <section className="widget">
                <div className="footer-logo" style={{ marginBottom: '20px' }}>
                  <img src="/assets/images/enock_logo.png" alt="Enock Construction Logo" style={{ height: '48px' }} />
                </div>
                <p style={{ fontSize: '14px', lineHeight: '1.7', color: '#9CA3AF', marginBottom: '15px' }}>
                  Enock Construction &amp; Earthmoving Equipment is Bulawayo's premier civil engineering contractor, specializing in road construction, township infrastructure, earthworks, and heavy plant hire across Zimbabwe.
                </p>
                <p style={{ fontSize: '12px', color: '#6B7280', fontFamily: "'Oswald', sans-serif", textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Reg. No: BP 4/2010 | Bulawayo, Zimbabwe
                </p>
                <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
                  <a href="https://www.facebook.com/enockconstruction.zw/" target="_blank" rel="noopener noreferrer" style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#1877F2', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="https://wa.me/2638688005304" target="_blank" rel="noopener noreferrer" style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#25D366', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                    <i className="fa fa-whatsapp"></i>
                  </a>
                  <a href="tel:+2638688005304" style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--enock-red)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                    <i className="fa fa-phone"></i>
                  </a>
                  <a href="mailto:info@enockconstruction.co.zw" style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#374151', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                    <i className="fa fa-envelope"></i>
                  </a>
                </div>
              </section>
            </div>

            {/* Col 2: Quick Links */}
            <div className="col-md-6 col-lg-3 mb-30">
              <section className="widget">
                <div className="sec-title">
                  <h2 className="sec-title__title" style={{ fontSize: '20px', color: '#ffffff' }}>Quick Links</h2>
                  <span className="sec-title__divider" style={{ backgroundColor: 'var(--enock-red)' }}></span>
                </div>
                <ul className="footer-links-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '8px' }}>
                    <a href="#home" onClick={(e) => { e.preventDefault(); handleNav('home'); }} style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                      <i className="fa fa-angle-right" style={{ marginRight: '8px', color: 'var(--enock-red)' }}></i> Home
                    </a>
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    <a href="#about" onClick={(e) => { e.preventDefault(); handleNav('about'); }} style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                      <i className="fa fa-angle-right" style={{ marginRight: '8px', color: 'var(--enock-red)' }}></i> About Our Company
                    </a>
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    <a href="#services" onClick={(e) => { e.preventDefault(); handleNav('services'); }} style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                      <i className="fa fa-angle-right" style={{ marginRight: '8px', color: 'var(--enock-red)' }}></i> Civil Engineering Services
                    </a>
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    <a href="#equipment" onClick={(e) => { e.preventDefault(); handleNav('equipment'); }} style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                      <i className="fa fa-angle-right" style={{ marginRight: '8px', color: 'var(--enock-red)' }}></i> Heavy Equipment Hire
                    </a>
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    <a href="#projects" onClick={(e) => { e.preventDefault(); handleNav('projects'); }} style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                      <i className="fa fa-angle-right" style={{ marginRight: '8px', color: 'var(--enock-red)' }}></i> Projects &amp; Portfolio
                    </a>
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    <a href="#contact" onClick={(e) => { e.preventDefault(); handleNav('contact'); }} style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                      <i className="fa fa-angle-right" style={{ marginRight: '8px', color: 'var(--enock-red)' }}></i> Contact Us
                    </a>
                  </li>
                </ul>
              </section>
            </div>

            {/* Col 3: Services */}
            <div className="col-md-6 col-lg-3 mb-30">
              <section className="widget">
                <div className="sec-title">
                  <h2 className="sec-title__title" style={{ fontSize: '20px', color: '#ffffff' }}>Our Core Services</h2>
                  <span className="sec-title__divider" style={{ backgroundColor: 'var(--enock-red)' }}></span>
                </div>
                <ul className="footer-links-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '8px' }}>
                    <a href="#services" onClick={(e) => { e.preventDefault(); handleNav('services'); }} style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '14px' }}>
                      <i className="fa fa-check text-danger" style={{ marginRight: '8px' }}></i> Road Construction &amp; Tar
                    </a>
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    <a href="#services" onClick={(e) => { e.preventDefault(); handleNav('services'); }} style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '14px' }}>
                      <i className="fa fa-check text-danger" style={{ marginRight: '8px' }}></i> Civil Engineering Works
                    </a>
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    <a href="#services" onClick={(e) => { e.preventDefault(); handleNav('services'); }} style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '14px' }}>
                      <i className="fa fa-check text-danger" style={{ marginRight: '8px' }}></i> Township Development
                    </a>
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    <a href="#services" onClick={(e) => { e.preventDefault(); handleNav('services'); }} style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '14px' }}>
                      <i className="fa fa-check text-danger" style={{ marginRight: '8px' }}></i> Bulk Earthworks &amp; Levelling
                    </a>
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    <a href="#equipment" onClick={(e) => { e.preventDefault(); handleNav('equipment'); }} style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '14px' }}>
                      <i className="fa fa-check text-danger" style={{ marginRight: '8px' }}></i> Heavy Plant &amp; Fleet Hire
                    </a>
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    <a href="#services" onClick={(e) => { e.preventDefault(); handleNav('services'); }} style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '14px' }}>
                      <i className="fa fa-check text-danger" style={{ marginRight: '8px' }}></i> 80 TPH Asphalt Supply
                    </a>
                  </li>
                </ul>
              </section>
            </div>

            {/* Col 4: Contact & Hours */}
            <div className="col-md-6 col-lg-3 mb-30">
              <section className="widget">
                <div className="sec-title">
                  <h2 className="sec-title__title" style={{ fontSize: '20px', color: '#ffffff' }}>Contact &amp; Hours</h2>
                  <span className="sec-title__divider" style={{ backgroundColor: 'var(--enock-red)' }}></span>
                </div>
                <div style={{ fontSize: '14px', lineHeight: '1.7' }}>
                  <div style={{ marginBottom: '12px' }}>
                    <span style={{ color: '#ffffff', fontWeight: 600 }}>
                      <i className="fa fa-map-marker" style={{ color: 'var(--enock-red)', marginRight: '6px' }}></i> Bulawayo HQ:
                    </span>
                    <p style={{ margin: '2px 0 0 18px', color: '#9CA3AF' }}>
                      Stand No. 17052, Kelvin West, Bulawayo, Zimbabwe
                    </p>
                  </div>
                  <div style={{ marginBottom: '12px' }}>
                    <span style={{ color: '#ffffff', fontWeight: 600 }}>
                      <i className="fa fa-phone" style={{ color: 'var(--enock-red)', marginRight: '6px' }}></i> Phone:
                    </span>
                    <p style={{ margin: '2px 0 0 18px' }}>
                      <a href="tel:+2638688005304" style={{ color: '#9CA3AF', textDecoration: 'none' }}>+263 8688 005304</a>
                    </p>
                  </div>
                  <div style={{ marginBottom: '12px' }}>
                    <span style={{ color: '#ffffff', fontWeight: 600 }}>
                      <i className="fa fa-envelope" style={{ color: 'var(--enock-red)', marginRight: '6px' }}></i> Email:
                    </span>
                    <p style={{ margin: '2px 0 0 18px' }}>
                      <a href="mailto:info@enockconstruction.co.zw" style={{ color: '#9CA3AF', textDecoration: 'none' }}>info@enockconstruction.co.zw</a>
                    </p>
                  </div>
                  <div>
                    <span style={{ color: '#ffffff', fontWeight: 600 }}>
                      <i className="fa fa-clock-o" style={{ color: 'var(--enock-red)', marginRight: '6px' }}></i> Working Hours:
                    </span>
                    <p style={{ margin: '2px 0 0 18px', color: '#9CA3AF' }}>
                      Mon - Fri: 08:00 - 17:00<br />Sat: 08:00 - 13:00
                    </p>
                  </div>
                </div>
              </section>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="copyright-01 md-text-center">
        <div className="container">
          <p className="copyright-01__copy">
            &copy; {currentYear} Enock Construction &amp; Earthmoving Equipment. All rights reserved. | Reg. No: BP 4/2010 | Bulawayo, Zimbabwe
          </p>
        </div>
      </div>
    </footer>
  );
}
