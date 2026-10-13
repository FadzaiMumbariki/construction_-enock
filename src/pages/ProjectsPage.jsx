import React, { useState, useMemo } from 'react';
import { projectsList } from '../data/projects.js';

const CATEGORIES = ['All', 'Township Development', 'Road Construction', 'Civil Works', 'Earthworks'];

function ProjectModal({ project, onClose }) {
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}
      onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={{ background: '#ffffff', borderRadius: '8px', width: '100%', maxWidth: '750px', maxHeight: '90vh', overflow: 'auto', boxShadow: '0 30px 70px rgba(0,0,0,0.35)' }}>
        <div style={{ position: 'relative', height: '320px' }}>
          <img src={project.imageUrl} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(transparent 50%, rgba(0,0,0,0.8))' }} />
          <button type="button" onClick={onClose} style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(0,0,0,0.5)', border: 'none', color: '#fff', fontSize: '22px', cursor: 'pointer', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&times;</button>
          <div style={{ position: 'absolute', bottom: '20px', left: '24px' }}>
            <span style={{ background: 'var(--enock-red)', color: '#fff', fontSize: '11px', fontFamily: "'Oswald',sans-serif", textTransform: 'uppercase', letterSpacing: '1px', padding: '3px 10px', borderRadius: '3px', marginBottom: '8px', display: 'inline-block' }}>{project.category}</span>
            <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: '24px', color: '#ffffff', margin: 0 }}>{project.title}</h3>
          </div>
        </div>
        <div style={{ padding: '28px 32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '24px', padding: '16px 0', borderBottom: '1px solid #E5E7EB' }}>
            <div>
              <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', color: '#9CA3AF', margin: '0 0 4px', fontFamily: "'Oswald',sans-serif" }}>Client</p>
              <p style={{ fontSize: '15px', color: '#111827', fontWeight: 600, margin: 0 }}>{project.client}</p>
            </div>
            <div>
              <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', color: '#9CA3AF', margin: '0 0 4px', fontFamily: "'Oswald',sans-serif" }}>Location</p>
              <p style={{ fontSize: '15px', color: '#111827', fontWeight: 600, margin: 0 }}>{project.location}</p>
            </div>
            <div>
              <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', color: '#9CA3AF', margin: '0 0 4px', fontFamily: "'Oswald',sans-serif" }}>Completed</p>
              <p style={{ fontSize: '15px', color: '#111827', fontWeight: 600, margin: 0 }}>{project.completionYear}</p>
            </div>
          </div>
          <h4 style={{ fontFamily: "'Oswald',sans-serif", fontSize: '18px', textTransform: 'uppercase', marginBottom: '12px', color: '#111827' }}>Project Overview</h4>
          <p style={{ fontSize: '15px', color: '#4B5563', lineHeight: 1.75 }}>{project.description}</p>
          <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
            <button type="button" onClick={onClose} className="btn btn-primary">
              Close Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage({ onNavigate }) {
  const nav = (page) => { onNavigate(page); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return projectsList;
    return projectsList.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="md-content">
      {/* Page Banner */}
      <section className="page-title-banner" style={{ backgroundImage: "url('/assets/images/DJI_0375.webp')" }}>
        <div className="banner-overlay"></div>
        <div className="container">
          <span className="banner-badge">50+ Projects Completed</span>
          <h1 className="banner-title">Our Projects</h1>
          <ul className="banner-breadcrumb">
            <li><button type="button" className="breadcrumb-link-btn" onClick={() => nav('home')}>Home</button></li>
            <li className="separator">/</li>
            <li><span>Projects</span></li>
          </ul>
        </div>
      </section>

      {/* Filter */}
      <section style={{ background: '#ffffff', padding: '70px 0 40px' }}>
        <div className="container">
          <div className="sec-title text-center" style={{ marginBottom: '40px' }}>
            <span className="sec-title__tagline">Featured Work Portfolio</span>
            <h2 className="sec-title__title">Our Projects</h2>
            <span className="sec-title__divider" style={{ margin: '0 auto' }}></span>
            <p style={{ color: '#6B7280', marginTop: '16px', maxWidth: '580px', margin: '16px auto 0' }}>
              A selection of civil engineering and infrastructure projects delivered across Zimbabwe.
            </p>
          </div>

          <div className="filter-tabs">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                type="button"
                className={`filter-tab-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat === 'All' ? `All Projects (${projectsList.length})` : `${cat} (${projectsList.filter(p => p.category === cat).length})`}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section style={{ background: '#F9FAFB', padding: '0 0 80px' }}>
        <div className="container">
          <div className="row">
            {filtered.map((project) => (
              <div key={project.id} className="col-md-6 col-lg-4 mb-30">
                <div
                  style={{ position: 'relative', borderRadius: '6px', overflow: 'hidden', height: '320px', cursor: 'pointer', boxShadow: '0 6px 20px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                  onClick={() => setSelectedProject(project)}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.18)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.1)'; }}
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    onMouseEnter={e => e.target.style.transform = 'scale(1.08)'}
                    onMouseLeave={e => e.target.style.transform = ''}
                  />
                  {/* Overlay */}
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(transparent 30%, rgba(17,24,39,0.92))', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '22px 20px' }}>
                    <span style={{ background: 'var(--enock-red)', color: '#fff', fontSize: '10px', fontFamily: "'Oswald',sans-serif", textTransform: 'uppercase', letterSpacing: '1px', padding: '2px 8px', borderRadius: '2px', marginBottom: '8px', display: 'inline-block', width: 'fit-content' }}>
                      {project.category}
                    </span>
                    <h4 style={{ fontFamily: "'Oswald',sans-serif", fontSize: '18px', color: '#ffffff', margin: '0 0 4px' }}>{project.title}</h4>
                    <div style={{ display: 'flex', gap: '12px', fontSize: '12px', color: '#9CA3AF' }}>
                      <span><i className="fa fa-map-marker" style={{ marginRight: '4px', color: 'var(--enock-red)' }}></i>{project.location}</span>
                      <span><i className="fa fa-calendar" style={{ marginRight: '4px', color: 'var(--enock-red)' }}></i>{project.completionYear}</span>
                    </div>
                    <div style={{ position: 'absolute', top: '16px', right: '16px', width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(196,18,18,0.85)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>
                      <i className="fa fa-search-plus"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px', color: '#9CA3AF' }}>
              <i className="fa fa-folder-open-o" style={{ fontSize: '48px', marginBottom: '16px', display: 'block' }}></i>
              <p>No projects found in this category.</p>
              <button type="button" className="btn btn-primary" style={{ marginTop: '12px' }} onClick={() => setActiveCategory('All')}>View All Projects</button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #C41212 0%, #9E0E0E 100%)', padding: '70px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: '36px', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', marginBottom: '16px' }}>
            Your Project Could Be Our Next Success Story
          </h2>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.85)', marginBottom: '30px' }}>
            Contact our team today for a consultation and tender submission.
          </p>
          <button type="button" onClick={() => nav('contact')} style={{ backgroundColor: '#ffffff', color: 'var(--enock-red)', fontFamily: "'Oswald',sans-serif", fontSize: '15px', fontWeight: 700, textTransform: 'uppercase', padding: '14px 32px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>
            <i className="fa fa-file-text-o" style={{ marginRight: '8px' }}></i> Request a Quote
          </button>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
}
