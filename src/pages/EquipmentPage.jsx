import React, { useState, useMemo } from 'react';
import { equipmentList } from '../data/equipment.js';

const CATEGORIES = ['All', 'Compaction', 'Heavy Equipment', 'Support Equipment', 'Trucks'];

function HireModal({ item, onClose, onSubmit }) {
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', startDate: '', duration: '', project: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { onSubmit(); onClose(); setSubmitted(false); }, 2000);
  };

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.65)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }} onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={{ background: '#ffffff', borderRadius: '8px', width: '100%', maxWidth: '600px', maxHeight: '90vh', overflow: 'auto', boxShadow: '0 25px 60px rgba(0,0,0,0.3)' }}>
        {/* Header */}
        <div style={{ background: 'var(--enock-red)', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0, fontFamily: "'Oswald',sans-serif", fontSize: '20px', color: '#ffffff', textTransform: 'uppercase' }}>
            <i className="fa fa-truck" style={{ marginRight: '10px' }}></i>Equipment Hire Request
          </h3>
          <button type="button" onClick={onClose} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '24px', cursor: 'pointer', lineHeight: 1 }}>&times;</button>
        </div>

        {/* Machine info */}
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', background: '#F9FAFB', padding: '16px 24px', borderBottom: '1px solid #E5E7EB' }}>
          <img src={item.imageUrl} alt={item.name} style={{ width: '90px', height: '65px', objectFit: 'cover', borderRadius: '4px' }} />
          <div>
            <span style={{ fontFamily: "'Oswald',sans-serif", textTransform: 'uppercase', fontSize: '11px', color: 'var(--enock-red)', fontWeight: 700 }}>{item.category}</span>
            <h4 style={{ margin: '2px 0', fontFamily: "'Oswald',sans-serif", fontSize: '18px', color: '#1A1A1A' }}>{item.name}</h4>
            <span style={{ fontSize: '12px', color: '#10B981', fontWeight: 600 }}>
              <i className="fa fa-circle" style={{ fontSize: '8px', marginRight: '4px' }}></i>Available in Bulawayo Fleet Yard
            </span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ padding: '24px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '30px' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#D1FAE5', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', margin: '0 auto 16px' }}>
                <i className="fa fa-check"></i>
              </div>
              <h4 style={{ fontFamily: "'Oswald',sans-serif", color: '#111827' }}>Hire Request Submitted!</h4>
              <p style={{ color: '#6B7280' }}>We'll contact you within 2 hours during business hours.</p>
            </div>
          ) : (
            <>
              <div className="row">
                <div className="col-md-6 mb-15">
                  <label style={{ fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '4px', display: 'block' }}>Your Name *</label>
                  <input type="text" className="form-control" placeholder="Full Name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                </div>
                <div className="col-md-6 mb-15">
                  <label style={{ fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '4px', display: 'block' }}>Company Name</label>
                  <input type="text" className="form-control" placeholder="Company (optional)" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-15">
                  <label style={{ fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '4px', display: 'block' }}>Contact Phone *</label>
                  <input type="tel" className="form-control" placeholder="+263..." required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                </div>
                <div className="col-md-6 mb-15">
                  <label style={{ fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '4px', display: 'block' }}>Contact Email *</label>
                  <input type="email" className="form-control" placeholder="Email Address" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-15">
                  <label style={{ fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '4px', display: 'block' }}>Start Date</label>
                  <input type="date" className="form-control" value={form.startDate} onChange={e => setForm({ ...form, startDate: e.target.value })} />
                </div>
                <div className="col-md-6 mb-15">
                  <label style={{ fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '4px', display: 'block' }}>Duration Required</label>
                  <select className="form-control" value={form.duration} onChange={e => setForm({ ...form, duration: e.target.value })}>
                    <option value="">Select duration...</option>
                    <option>Daily (1 Day)</option>
                    <option>Weekly (1 Week)</option>
                    <option>Bi-Weekly (2 Weeks)</option>
                    <option>Monthly (1 Month)</option>
                    <option>Quarterly (3 Months)</option>
                    <option>6 Months+</option>
                    <option>Custom Duration</option>
                  </select>
                </div>
              </div>
              <div className="mb-15">
                <label style={{ fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '4px', display: 'block' }}>Project Description</label>
                <textarea className="form-control" rows={3} placeholder="Describe your project location, scope, and requirements..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ resize: 'vertical' }} />
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
                  <i className="fa fa-paper-plane" style={{ marginRight: '8px' }}></i>Submit Hire Request
                </button>
                <button type="button" onClick={onClose} style={{ background: '#F3F4F6', color: '#4B5563', fontFamily: "'Oswald',sans-serif", fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', padding: '12px 20px', borderRadius: '4px', border: '1px solid #E5E7EB', cursor: 'pointer' }}>
                  Cancel
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default function EquipmentPage({ onNavigate }) {
  const nav = (page) => { onNavigate(page); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [hireItem, setHireItem] = useState(null);
  const [toast, setToast] = useState(null);

  const filtered = useMemo(() => {
    return equipmentList.filter(item => {
      const matchCat = activeCategory === 'All' || item.category === activeCategory;
      const matchSearch = !search || item.name.toLowerCase().includes(search.toLowerCase()) || item.category.toLowerCase().includes(search.toLowerCase()) || (item.description && item.description.toLowerCase().includes(search.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [activeCategory, search]);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 4000);
  };

  return (
    <div className="md-content">
      {/* Page Banner */}
      <section className="page-title-banner" style={{ backgroundImage: "url('/assets/images/fleet.jpg')" }}>
        <div className="banner-overlay"></div>
        <div className="container">
          <span className="banner-badge">80+ Machines Available</span>
          <h1 className="banner-title">Heavy Equipment Hire</h1>
          <ul className="banner-breadcrumb">
            <li><button type="button" className="breadcrumb-link-btn" onClick={() => nav('home')}>Home</button></li>
            <li className="separator">/</li>
            <li><span>Equipment Hire</span></li>
          </ul>
        </div>
      </section>

      {/* Fleet intro */}
      <section style={{ background: '#ffffff', padding: '70px 0 40px' }}>
        <div className="container">
          <div className="sec-title text-center" style={{ marginBottom: '30px' }}>
            <span className="sec-title__tagline">Wet & Dry Hire Available</span>
            <h2 className="sec-title__title">Our Equipment Catalogue</h2>
            <span className="sec-title__divider" style={{ margin: '0 auto' }}></span>
            <p style={{ color: '#6B7280', marginTop: '16px', maxWidth: '600px', margin: '16px auto 0' }}>
              Browse our full fleet of {equipmentList.length} machines available for hire across Zimbabwe. All machines are maintained to OEM standards.
            </p>
          </div>

          {/* Search */}
          <div className="equip-search-container">
            <svg className="equip-search-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              type="text"
              className="equip-search-input"
              placeholder={`Search ${equipmentList.length} machines by name or type...`}
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          {/* Filter tabs */}
          <div className="filter-tabs">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                type="button"
                className={`filter-tab-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat === 'All' ? `All (${equipmentList.length})` : `${cat} (${equipmentList.filter(e => e.category === cat).length})`}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Grid */}
      <section style={{ background: '#F9FAFB', padding: '0 0 80px' }}>
        <div className="container">
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 20px', color: '#9CA3AF' }}>
              <i className="fa fa-search" style={{ fontSize: '48px', marginBottom: '20px', display: 'block' }}></i>
              <p style={{ fontSize: '18px' }}>No machines found matching your search.</p>
              <button type="button" className="btn btn-primary" onClick={() => { setSearch(''); setActiveCategory('All'); }} style={{ marginTop: '16px' }}>Clear Filters</button>
            </div>
          ) : (
            <div className="row">
              {filtered.map((item) => (
                <div key={item.id} className="col-md-6 col-lg-4 mb-30">
                  <div style={{ background: '#ffffff', borderRadius: '6px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', transition: 'transform 0.3s ease, box-shadow 0.3s ease', height: '100%' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.12)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'; }}>
                    
                    {/* Thumb */}
                    <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                      <img src={item.imageUrl} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                        onMouseEnter={e => e.target.style.transform = 'scale(1.06)'}
                        onMouseLeave={e => e.target.style.transform = ''} />
                      <span style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(17,24,39,0.85)', color: '#fff', fontFamily: "'Oswald',sans-serif", fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', padding: '3px 10px', borderRadius: '3px' }}>
                        {item.category}
                      </span>
                    </div>

                    {/* Body */}
                    <div style={{ padding: '20px' }}>
                      <h4 style={{ fontFamily: "'Oswald',sans-serif", fontSize: '18px', color: '#111827', marginBottom: '8px' }}>{item.name}</h4>
                      <p style={{ fontSize: '13px', color: '#6B7280', lineHeight: 1.6, marginBottom: '16px' }}>
                        {item.description || 'Heavy civil construction equipment maintained to OEM manufacturer standards.'}
                      </p>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button
                          type="button"
                          className="btn btn-primary"
                          style={{ flex: 1, fontSize: '13px', padding: '10px 12px' }}
                          onClick={() => setHireItem(item)}
                        >
                          <i className="fa fa-calendar-check-o" style={{ marginRight: '6px' }}></i>Request Hire
                        </button>
                        <a
                          href={`https://wa.me/2638688005304?text=${encodeURIComponent(`Hello, I'd like to hire the ${item.name}. Please provide availability and rates.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '42px', height: '42px', background: '#25D366', color: '#ffffff', borderRadius: '4px', textDecoration: 'none', flexShrink: 0 }}
                          title="Chat on WhatsApp"
                        >
                          <i className="fa fa-whatsapp" style={{ fontSize: '18px' }}></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Hire Info Strip */}
      <section style={{ background: '#ffffff', padding: '60px 0', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 mb-30">
              <span style={{ color: 'var(--enock-red)', fontFamily: "'Oswald',sans-serif", fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 700 }}>Hire Options Available</span>
              <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: '32px', color: '#111827', textTransform: 'uppercase', margin: '10px 0 16px' }}>Wet Hire or Dry Hire</h2>
              <p style={{ color: '#4B5563', fontSize: '15px', lineHeight: 1.7 }}>
                We offer both <strong style={{ color: '#111827' }}>Wet Hire</strong> (machine + certified operator + on-site maintenance & fuel) and <strong style={{ color: '#111827' }}>Dry Hire</strong> (machine only). All machines are fully serviced and roadworthy before dispatch.
              </p>
              <div style={{ display: 'flex', gap: '30px', marginTop: '20px', flexWrap: 'wrap' }}>
                <div>
                  <p style={{ color: 'var(--enock-red)', fontFamily: "'Oswald',sans-serif", fontSize: '12px', textTransform: 'uppercase', margin: '0 0 4px', letterSpacing: '1px' }}>Daily Rates</p>
                  <p style={{ color: '#111827', fontSize: '14px', margin: 0 }}>Contact for pricing</p>
                </div>
                <div>
                  <p style={{ color: 'var(--enock-red)', fontFamily: "'Oswald',sans-serif", fontSize: '12px', textTransform: 'uppercase', margin: '0 0 4px', letterSpacing: '1px' }}>Weekly / Monthly</p>
                  <p style={{ color: '#111827', fontSize: '14px', margin: 0 }}>Discounted long-term rates</p>
                </div>
                <div>
                  <p style={{ color: 'var(--enock-red)', fontFamily: "'Oswald',sans-serif", fontSize: '12px', textTransform: 'uppercase', margin: '0 0 4px', letterSpacing: '1px' }}>Coverage Area</p>
                  <p style={{ color: '#111827', fontSize: '14px', margin: 0 }}>All of Zimbabwe</p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 text-center">
              <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '8px', padding: '32px' }}>
                <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: '20px' }}>Call us directly to check availability:</p>
                <a href="tel:+2638688005304" style={{ display: 'block', fontFamily: "'Oswald',sans-serif", fontSize: '28px', fontWeight: 700, color: '#111827', textDecoration: 'none', marginBottom: '16px' }}>
                  <i className="fa fa-phone" style={{ color: 'var(--enock-red)', marginRight: '10px' }}></i>
                  +263 8688 005304
                </a>
                <a
                  href="https://wa.me/2638688005304?text=Hello%20Enock%20Construction%2C%20I%20would%20like%20to%20enquire%20about%20equipment%20hire."
                  target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: '4px', textDecoration: 'none', fontFamily: "'Oswald',sans-serif", fontSize: '15px', fontWeight: 600, textTransform: 'uppercase' }}
                >
                  <i className="fa fa-whatsapp" style={{ fontSize: '18px' }}></i> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hire Modal */}
      {hireItem && (
        <HireModal
          item={hireItem}
          onClose={() => setHireItem(null)}
          onSubmit={() => showToast(`✓ Hire request for ${hireItem.name} submitted. We'll contact you shortly.`)}
        />
      )}

      {/* Toast */}
      {toast && (
        <div className="enock-toast-container">
          <div className="enock-toast">
            <i className="fa fa-check-circle" style={{ color: '#10B981', fontSize: '18px' }}></i>
            {toast}
          </div>
        </div>
      )}
    </div>
  );
}
