import React, { useState } from 'react';

export default function Header({ activePage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'equipment', label: 'Equipment Hire' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleLinkClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="header-topbar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7 col-sm-12">
              <span className="topbar-item">
                <i className="fa fa-map-marker"></i> Stand No. 17052, Kelvin West, Bulawayo
              </span>
              <span className="topbar-item">
                <i className="fa fa-phone"></i>{' '}
                <a href="tel:+2638688005304">+263 8688 005304</a>
              </span>
            </div>
            <div className="col-md-5 col-sm-12 topbar-right">
              <span className="topbar-item">
                <i className="fa fa-envelope-o"></i>{' '}
                <a href="mailto:info@enockconstruction.co.zw">info@enockconstruction.co.zw</a>
              </span>
              <span className="topbar-item">
                <i className="fa fa-clock-o"></i> Mon - Fri: 08:00 - 17:00
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Navigation */}
      <header className="header header-fixheight header--fixed">
        <div className="container">
          <div className="header__inner">
            <div className="header-logo">
              <a 
                href="#home" 
                onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}
                title="Enock Construction & Earthmoving Equipment"
              >
                <img src="/assets/images/enock_logo.png" alt="Enock Construction Logo" style={{ height: '48px' }} />
              </a>
            </div>

            <nav className="raising-nav">
              <ul className="raising-menu">
                {navLinks.map((link) => (
                  <li key={link.id} className={activePage === link.id ? 'current' : ''}>
                    <a 
                      href={`#${link.id}`} 
                      onClick={(e) => { e.preventDefault(); handleLinkClick(link.id); }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Mobile menu hamburger button */}
              <div 
                className="navbar-toggle" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{ cursor: 'pointer' }}
                aria-label="Toggle navigation menu"
              >
                <i className={mobileMenuOpen ? "fa fa-times" : "fa fa-bars"}></i>
              </div>
            </nav>

            <div className="btn-right" style={{ display: 'flex', alignItems: 'center' }}>
              <button 
                type="button" 
                className="header-cta-btn"
                onClick={() => handleLinkClick('contact')}
              >
                <i className="fa fa-file-text-o" style={{ marginRight: '6px' }}></i> Request a Quote
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Nav Backdrop & Drawer */}
      {mobileMenuOpen && (
        <div 
          className="mobile-nav-backdrop" 
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <img src="/assets/images/enock_logo.png" alt="Enock Construction" style={{ height: '40px' }} />
          <button 
            type="button"
            onClick={() => setMobileMenuOpen(false)} 
            style={{ background: 'none', border: 'none', color: '#ffffff', fontSize: '24px', cursor: 'pointer' }}
          >
            &times;
          </button>
        </div>

        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0' }}>
          {navLinks.map((link) => (
            <li key={link.id} style={{ marginBottom: '16px' }}>
              <a 
                href={`#${link.id}`} 
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.id); }}
                style={{
                  color: activePage === link.id ? 'var(--enock-red)' : '#E5E7EB',
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: '18px',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  display: 'block',
                  fontWeight: activePage === link.id ? '700' : '500'
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid #374151' }}>
          <button 
            type="button"
            className="header-cta-btn" 
            style={{ width: '100%', justifyContent: 'center', marginBottom: '15px' }}
            onClick={() => handleLinkClick('contact')}
          >
            <i className="fa fa-file-text-o" style={{ marginRight: '6px' }}></i> Request a Quote
          </button>
          <div style={{ color: '#9CA3AF', fontSize: '12px', lineHeight: '1.6' }}>
            <p style={{ margin: '0 0 4px 0' }}><i className="fa fa-phone text-danger"></i> +263 8688 005304</p>
            <p style={{ margin: '0' }}><i className="fa fa-map-marker text-danger"></i> Kelvin West, Bulawayo</p>
          </div>
        </div>
      </div>
    </>
  );
}
