import React, { useState, useEffect, useRef } from 'react';

const slides = [
  {
    bg: "/assets/images/DJI_0375.webp",
    badge: "Bulawayo's Premier Civil Contractor",
    title: "Building Zimbabwe's Road Infrastructure",
    subtitle: "15+ years of precision road construction, township development, and civil engineering across Zimbabwe.",
    primary: { label: "View Our Projects", page: "projects" },
    secondary: { label: "Request a Quote", page: "contact" }
  },
  {
    bg: "/assets/images/fleet.jpg",
    badge: "80+ Units Available",
    title: "Heavy Equipment Hire Across Zimbabwe",
    subtitle: "Motor graders, excavators, rollers, tippers and more - wet or dry hire with certified operators.",
    primary: { label: "Browse Equipment", page: "equipment" },
    secondary: { label: "Hire Now", page: "contact" }
  },
  {
    bg: "/assets/images/valindre.jpg",
    badge: "Mahatshula East & Valindre",
    title: "Complete Township Infrastructure Delivery",
    subtitle: "From road formation to water reticulation and sewer networks - full turn-key township development.",
    primary: { label: "Township Services", page: "services" },
    secondary: { label: "Get in Touch", page: "contact" }
  },
  {
    bg: "/assets/images/earth_works.jpg",
    badge: "High-Capacity Earthmoving Fleet",
    title: "Bulk Earthworks & Excavation Specialists",
    subtitle: "CAT bulldozers, 30-ton excavators, and precision grading crews ready for large-scale civil projects.",
    primary: { label: "Our Services", page: "services" },
    secondary: { label: "Contact Us", page: "contact" }
  }
];

export default function HeroSlider({ onNavigate }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % slides.length);
    }, 5500);
  };

  useEffect(() => {
    if (!paused) startTimer();
    else if (timerRef.current) clearInterval(timerRef.current);
    return () => clearInterval(timerRef.current);
  }, [paused]);

  const goTo = (idx) => {
    setActive(idx);
    startTimer();
  };

  const prev = () => goTo((active - 1 + slides.length) % slides.length);
  const next = () => goTo((active + 1) % slides.length);

  return (
    <section
      className="react-hero-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`hero-slide ${i === active ? 'active' : ''}`}
          style={{ backgroundImage: `url('${slide.bg}')` }}
        >
          <div className="hero-slide__overlay" />
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="hero-slide__content">
              <div className="hero-badge">
                <i className="fa fa-star" style={{ fontSize: '12px' }}></i>
                {slide.badge}
              </div>
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
              <div className="hero-actions">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => { onNavigate(slide.primary.page); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                >
                  {slide.primary.label}
                </button>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => { onNavigate(slide.secondary.page); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  style={{ borderColor: 'rgba(255,255,255,0.6)', color: '#111827', backgroundColor: '#ffffff', marginLeft: '2px' }}
                >
                  {slide.secondary.label}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dot Indicators */}
      <div className="slider-indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`slider-dot ${i === active ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
