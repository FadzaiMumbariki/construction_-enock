import React, { useState, useEffect } from 'react';

const SERVICES = [
  'Road Construction & Rehabilitation',
  'Civil Engineering Works',
  'Township Development',
  'Earthworks & Bulk Excavation',
  'Heavy Equipment Hire',
  'Asphalt & Paving Solutions',
  'Other / General Enquiry'
];

export default function ContactPage({ onNavigate, preSelectedService }) {
  const nav = (page) => { onNavigate(page); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const [form, setForm] = useState({
    name: '', company: '', phone: '', email: '',
    service: preSelectedService || '', message: '', urgency: 'normal'
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (preSelectedService) setForm(f => ({ ...f, service: preSelectedService }));
  }, [preSelectedService]);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Full name is required.';
    if (!form.phone.trim()) e.phone = 'Contact number is required.';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email address required.';
    if (!form.message.trim() || form.message.trim().length < 20) e.message = 'Please describe your project (at least 20 characters).';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => { setSubmitted(false); setForm({ name: '', company: '', phone: '', email: '', service: '', message: '', urgency: 'normal' }); setErrors({}); };

  const field = (key) => ({
    value: form[key],
    onChange: e => { setForm({ ...form, [key]: e.target.value }); setErrors(err => { const n = { ...err }; delete n[key]; return n; }); }
  });

  return (
    <div className="md-content">
      {/* Page Banner */}
      <section className="page-title-banner" style={{ backgroundImage: "url('/assets/images/about_us.jpg')" }}>
        <div className="banner-overlay"></div>
        <div className="container">
          <span className="banner-badge">Bulawayo Headquarters</span>
          <h1 className="banner-title">Contact Us</h1>
          <ul className="banner-breadcrumb">
            <li><button type="button" className="breadcrumb-link-btn" onClick={() => nav('home')}>Home</button></li>
            <li className="separator">/</li>
            <li><span>Contact Us</span></li>
          </ul>
        </div>
      </section>

      {/* Contact Content */}
      <section style={{ background: '#ffffff', padding: '50px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start', flexWrap: 'wrap' }}>

            {/* Left: Info + Map */}
            <div style={{ flex: '0 0 320px', minWidth: '280px' }}>
              <div className="sec-title">
                <span className="sec-title__tagline">Get in Touch</span>
                <h2 className="sec-title__title" style={{ fontSize: '28px' }}>Contact Our Team</h2>
                <span className="sec-title__divider"></span>
              </div>
              <p style={{ color: '#6B7280', fontSize: '15px', lineHeight: 1.7, marginTop: '16px', marginBottom: '30px' }}>
                Our Bulawayo office team is ready to discuss your project requirements, provide pricing, or arrange equipment. Contact us today for a fast response.
              </p>

              {/* Contact Info */}
              {[
                { icon: 'fa-map-marker', label: 'Headquarters', value: 'Stand No. 17052, Kelvin West, Bulawayo, Zimbabwe' },
                { icon: 'fa-phone', label: 'Phone', value: '+263 8688 005304', href: 'tel:+2638688005304' },
                { icon: 'fa-envelope', label: 'Email', value: 'info@enockconstruction.co.zw', href: 'mailto:info@enockconstruction.co.zw' },
                { icon: 'fa-clock-o', label: 'Working Hours', value: 'Mon-Fri: 08:00-17:00 | Sat: 08:00-13:00' },
              ].map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px', marginBottom: '20px', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', minWidth: '44px', borderRadius: '50%', background: '#FEE2E2', color: 'var(--enock-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>
                    <i className={`fa ${c.icon}`}></i>
                  </div>
                  <div>
                    <p style={{ margin: '0 0 2px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.8px', color: '#9CA3AF', fontFamily: "'Oswald',sans-serif" }}>{c.label}</p>
                    {c.href
                      ? <a href={c.href} style={{ fontSize: '14px', color: '#111827', fontWeight: 600, textDecoration: 'none' }}>{c.value}</a>
                      : <p style={{ margin: 0, fontSize: '14px', color: '#111827', fontWeight: 600 }}>{c.value}</p>
                    }
                  </div>
                </div>
              ))}

              {/* WhatsApp CTA */}


              {/* Map embed placeholder */}
              <div style={{ marginTop: '30px', borderRadius: '6px', overflow: 'hidden', border: '1px solid #E5E7EB' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.0!2d28.556!3d-20.142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDA4JzMxLjIiUyAyOMKwMzMnMjEuNiJF!5e0!3m2!1sen!2szw!4v1000000000000!5m2!1sen!2szw"
                  width="100%" height="200" style={{ border: 0, display: 'block' }}
                  allowFullScreen="" loading="lazy" title="Enock Construction Location - Bulawayo"
                ></iframe>
              </div>
            </div>

            {/* Right: Form */}
            <div style={{ flex: 1, minWidth: '320px', maxWidth: '520px', marginLeft: 'auto' }}>
              {submitted ? (
                <div style={{ background: '#F0FDF4', border: '1px solid #A7F3D0', borderRadius: '8px', padding: '60px 40px', textAlign: 'center' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#D1FAE5', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px', margin: '0 auto 24px' }}>
                    <i className="fa fa-check"></i>
                  </div>
                  <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: '28px', textTransform: 'uppercase', color: '#111827', marginBottom: '12px' }}>
                    Quote Request Sent!
                  </h3>
                  <p style={{ fontSize: '16px', color: '#4B5563', marginBottom: '8px', lineHeight: 1.7 }}>
                    Thank you, <strong>{form.name}</strong>. Our team will review your enquiry and respond within <strong>2-4 business hours</strong>.
                  </p>
                  <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '30px' }}>
                    For urgent enquiries, please call us directly on <a href="tel:+2638688005304" style={{ color: 'var(--enock-red)', fontWeight: 600 }}>+263 8688 005304</a>.
                  </p>
                  <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button type="button" onClick={resetForm} className="btn btn-primary">Submit Another Enquiry</button>
                    <button type="button" onClick={() => nav('projects')} style={{ background: '#F3F4F6', color: '#4B5563', fontFamily: "'Oswald',sans-serif", fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', padding: '12px 24px', borderRadius: '4px', border: '1px solid #E5E7EB', cursor: 'pointer' }}>
                      View Our Projects
                    </button>
                  </div>
                </div>
              ) : (
                <div style={{ background: '#F9FAFB', borderRadius: '8px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #E5E7EB' }}>
                  <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: '20px', textTransform: 'uppercase', marginBottom: '6px', color: '#111827' }}>
                    Request a Quote or Enquiry
                  </h3>
                  <p style={{ color: '#9CA3AF', fontSize: '13px', marginBottom: '20px' }}>
                    Fill out the form below and our team will respond within 2-4 hours.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-15">
                        <label style={{ fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '4px', display: 'block' }}>Full Name *</label>
                        <input type="text" className="form-control" placeholder="John Smith" {...field('name')} style={{ padding: '8px 12px', fontSize: '13px' }} />
                        {errors.name && <p style={{ color: 'var(--enock-red)', fontSize: '11px', marginTop: '3px' }}>{errors.name}</p>}
                      </div>
                      <div className="col-md-6 mb-15">
                        <label style={{ fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '4px', display: 'block' }}>Company / Organisation</label>
                        <input type="text" className="form-control" placeholder="Company Name (optional)" {...field('company')} style={{ padding: '8px 12px', fontSize: '13px' }} />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-15">
                        <label style={{ fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '4px', display: 'block' }}>Phone Number *</label>
                        <input type="tel" className="form-control" placeholder="+263..." {...field('phone')} style={{ padding: '8px 12px', fontSize: '13px' }} />
                        {errors.phone && <p style={{ color: 'var(--enock-red)', fontSize: '11px', marginTop: '3px' }}>{errors.phone}</p>}
                      </div>
                      <div className="col-md-6 mb-15">
                        <label style={{ fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '4px', display: 'block' }}>Email Address *</label>
                        <input type="email" className="form-control" placeholder="email@example.com" {...field('email')} style={{ padding: '8px 12px', fontSize: '13px' }} />
                        {errors.email && <p style={{ color: 'var(--enock-red)', fontSize: '11px', marginTop: '3px' }}>{errors.email}</p>}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-15">
                        <label style={{ fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '4px', display: 'block' }}>Service Required</label>
                        <select className="form-control" {...field('service')} style={{ padding: '8px 12px', fontSize: '13px' }}>
                          <option value="">Select a service...</option>
                          {SERVICES.map(s => <option key={s}>{s}</option>)}
                        </select>
                      </div>
                      <div className="col-md-6 mb-15">
                        <label style={{ fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '4px', display: 'block' }}>Urgency</label>
                        <select className="form-control" {...field('urgency')} style={{ padding: '8px 12px', fontSize: '13px' }}>
                          <option value="normal">Normal - 2-4 day response</option>
                          <option value="soon">Soon - Within 24 hours</option>
                          <option value="urgent">Urgent - Same day required</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-15">
                      <label style={{ fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '4px', display: 'block' }}>Project Description *</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        placeholder="Describe your project: location, scope, scale, timeline requirements, and any specific machinery or services needed..."
                        style={{ resize: 'vertical', padding: '8px 12px', fontSize: '13px' }}
                        {...field('message')}
                      />
                      {errors.message && <p style={{ color: 'var(--enock-red)', fontSize: '11px', marginTop: '3px' }}>{errors.message}</p>}
                      <p style={{ fontSize: '11px', color: '#9CA3AF', marginTop: '3px' }}>{form.message.length} / 1000 characters</p>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '14px', padding: '12px' }}>
                      <i className="fa fa-paper-plane" style={{ marginRight: '8px' }}></i>
                      Submit Request for Quote
                    </button>

                    <p style={{ fontSize: '11px', color: '#9CA3AF', textAlign: 'center', marginTop: '12px' }}>
                      <i className="fa fa-lock" style={{ marginRight: '4px' }}></i>
                      Your information is kept private and only used to respond to your enquiry.
                    </p>
                  </form>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
