import React, { useState, useEffect } from 'react';
import './index.css';

// --- Icons (SVG) ---
const IconDumbbell = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.4 14.4 9.6 9.6" /><path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z" /><path d="m21.5 21.5-1.4-1.4" /><path d="M3.9 3.9 2.5 2.5" /><path d="M6.404 2.515a2 2 0 0 0-2.829 2.828l1.768-1.767a2 2 0 0 0 2.829 2.828l6.364 6.364a2 2 0 0 0-2.829-2.829l1.767-1.768a2 2 0 0 0-2.829-2.828z" /></svg>
);
const IconWeight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
);
const IconHeart = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
);
const IconUser = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
);
const IconCheckCircle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
);
const IconPhone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
);
const IconWhatsApp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 0C5.385 0 0 5.385 0 12.033c0 2.119.553 4.185 1.604 6.012L.15 24l6.115-1.603A12.015 12.015 0 0 0 12.031 24c6.645 0 12.03-5.385 12.03-12.033C24.062 5.385 18.676 0 12.031 0zm0 22.013c-1.803 0-3.57-.484-5.116-1.402l-.367-.217-3.793.995.998-3.704-.239-.379A10.012 10.012 0 0 1 2.019 12.03c0-5.526 4.498-10.024 10.012-10.024 5.513 0 10.011 4.498 10.011 10.024 0 5.526-4.498 10.024-10.011 10.024zm5.495-7.509c-.3-.151-1.782-.88-2.057-.98-.276-.1-.477-.151-.678.151-.202.302-.78 1.006-.954 1.207-.175.201-.35.226-.653.076-1.928-.962-3.323-2.616-3.832-3.483-.175-.3-.018-.464.133-.615.136-.135.302-.352.453-.528.151-.176.202-.302.302-.503.1-.201.05-.378-.025-.528-.075-.152-.678-1.636-.93-2.24-.244-.587-.492-.507-.678-.517-.174-.01-.376-.011-.577-.011-.201 0-.528.075-.804.377-.276.302-1.055 1.031-1.055 2.514 0 1.484 1.08 2.917 1.231 3.118.151.201 2.126 3.245 5.148 4.549 2.049.886 2.822.95 3.33.805.58-.166 1.782-.73 2.032-1.434.25-.705.25-1.309.175-1.435-.075-.126-.276-.201-.577-.352z" /></svg>
);
const IconMapPin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
);
const IconStar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
);
const IconMenu = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
);
const IconX = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18" /><line x1="6" x2="18" y1="6" y2="18" /></svg>
);

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container flex justify-between items-center" style={{ width: '100%' }}>
          <div className="logo">JPS <span>FITNESS</span></div>
          <div className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#testimonials" className="nav-link">Reviews</a>
            <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.85rem' }}>Join Now</a>
          </div>
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {menuOpen ? <IconX /> : <IconMenu />}
          </button>
        </div>
      </nav>
      <div className={`mobile-nav ${menuOpen ? 'active' : ''}`}>
        <a href="#about" className="nav-link" onClick={toggleMenu}>About</a>
        <a href="#services" className="nav-link" onClick={toggleMenu}>Services</a>
        <a href="#testimonials" className="nav-link" onClick={toggleMenu}>Reviews</a>
        <a href="#contact" className="nav-link" onClick={toggleMenu}>Contact</a>
        <a href="tel:09677388685" className="btn btn-primary justify-center" onClick={toggleMenu}>Call Now</a>
      </div>
    </>
  );
};

const Hero = () => {
  return (
    <section className="hero" id="home" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop")', backgroundPosition: 'center', backgroundSize: 'cover' }}>
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <div className="badge badge-accent">🔥 Irugur's Top-Rated Studio</div>
          <h1 className="hero-title">
            Train Better. <br />
            <span>Transform Faster.</span>
          </h1>
          <p className="hero-subtitle">
            Irugur’s most trusted fitness studio with expert trainers, premium equipment, and real results. Join the community focused on discipline and true transformation.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-primary">Join Now</a>
            <a href="https://wa.me/919677388685" className="btn btn-secondary"><IconWhatsApp /> Book Free Trial</a>
          </div>
          <div className="trust-signals">
            <div className="stars">
              <IconStar /><IconStar /><IconStar /><IconStar /><IconStar />
            </div>
            <p style={{ fontWeight: '500' }}>4.9 Rating | 600+ Members</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section className="section bg-darker" id="about">
      <div className="container">
        <div className="grid grid-2 items-center">
          <div>
            <h2 className="section-title">More than a gym — <br /><span className="text-accent">a place where discipline meets results.</span></h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--color-secondary)' }}>
              At JPS Fitness Studio, we are driven by passion. Led by expert owners Prabhu & Sri, our focus is entirely on your real fitness journey.
              We've created a clean, spacious, and highly structured environment where beginners find strong guidance and fitness enthusiasts feel at home.
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--color-secondary)' }}>
              No overcrowding, no neglect. Just pure focus on comfort, proper techniques, and transformative results.
            </p>
            <ul style={{ display: 'grid', gap: '1rem', gridTemplateColumns: '1fr 1fr', marginBottom: '2rem' }}>
              <li className="flex items-center" style={{ gap: '0.5rem', fontWeight: '500' }}><IconCheckCircle className="text-accent" /> Owner-Led Guidance</li>
              <li className="flex items-center" style={{ gap: '0.5rem', fontWeight: '500' }}><IconCheckCircle className="text-accent" /> Space & Cleanliness</li>
              <li className="flex items-center" style={{ gap: '0.5rem', fontWeight: '500' }}><IconCheckCircle className="text-accent" /> Premium Equipment</li>
              <li className="flex items-center" style={{ gap: '0.5rem', fontWeight: '500' }}><IconCheckCircle className="text-accent" /> No Overcrowding</li>
            </ul>
            <a href="#services" className="btn btn-primary">Explore Services</a>
          </div>
          <div style={{ position: 'relative' }}>
            <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" alt="Gym owners and trainers" style={{ borderRadius: '8px', boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }} />
            <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', background: 'var(--color-accent)', padding: '20px', borderRadius: '8px', boxShadow: '0 10px 20px rgba(0,0,0,0.5)' }}>
              <h3 style={{ fontSize: '2rem', margin: 0 }}>4.9/5</h3>
              <p style={{ margin: 0, fontWeight: 'bold' }}>Google Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: "Strength Training", icon: <IconDumbbell />, desc: "Build pure strength with progressive overloading and top-quality weights in a dedicated space." },
    { title: "Weight Loss", icon: <IconHeart />, desc: "Structured cardio and high-intensity plans designed to burn fat and improve cardiovascular health." },
    { title: "Muscle Building", icon: <IconWeight />, desc: "Hypertrophy-focused guidance to help you sculpt your body and increase muscle mass effectively." },
    { title: "Personal Guidance", icon: <IconUser />, desc: "One-on-one attention from passionate owners ensuring perfect form and maximizing your potential." },
  ];

  return (
    <section className="section bg-dark" id="services">
      <div className="container text-center">
        <h2 className="section-title">Our <span className="text-gradient">Services</span></h2>
        <p className="section-subtitle">Comprehensive fitness programs tailored to your goals, guided by true experts in Irugur.</p>

        <div className="grid grid-4" style={{ textAlign: 'left', marginTop: '3rem' }}>
          {services.map((srv, idx) => (
            <div className="card" key={idx}>
              <div className="service-icon">{srv.icon}</div>
              <h3 className="service-title">{srv.title}</h3>
              <p style={{ color: 'var(--color-secondary)' }}>{srv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="section bg-darker">
      <div className="container">
        <div className="grid grid-2 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" alt="Clean Gym Space" style={{ borderRadius: '8px', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ padding: '2rem' }}>
            <h2 className="section-title text-gradient">Train in a space designed for focus & performance.</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>We stand out because we care. Our facility is designed to provide the most comfortable and effective training experience in the region.</p>

            <div className="feature-row">
              <div className="feature-icon"><IconCheckCircle /></div>
              <div className="feature-content">
                <h4>Top-Quality Equipment</h4>
                <p>Well-maintained machines from reputed brands for safe and smooth workouts.</p>
              </div>
            </div>
            <div className="feature-row">
              <div className="feature-icon"><IconCheckCircle /></div>
              <div className="feature-content">
                <h4>Clean & Hygienic Space</h4>
                <p>Immaculate floors, sanitized equipment, and fresh airflow guaranteed daily.</p>
              </div>
            </div>
            <div className="feature-row">
              <div className="feature-icon"><IconCheckCircle /></div>
              <div className="feature-content">
                <h4>Affordable Pricing</h4>
                <p>Premium setup and expert coaching without the exorbitant luxury price tag.</p>
              </div>
            </div>
            <div className="feature-row">
              <div className="feature-icon"><IconCheckCircle /></div>
              <div className="feature-content">
                <h4>Passionate Owners</h4>
                <p>Prabhu & Sri are always on the floor, correcting posture and pushing you forward.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { text: "Game-changer gym! The environment is spotless and the equipment is top-notch. Best decision I made for my health.", author: "Arun K." },
    { text: "Clean and well equipped. The trainers guide you like finding a mentor. Irugur really needed a state-of-the-art place like this.", author: "Sneha P." },
    { text: "Best gym in Irugur by far. Prabhu and Sri give personal attention even during general training. Not overcrowded, very comfortable.", author: "Ramesh T." }
  ];

  return (
    <section className="section bg-dark" id="testimonials">
      <div className="container">
        <h2 className="section-title text-center">Real Results, <br /><span className="text-accent">Real Reviews</span></h2>
        <p className="section-subtitle text-center">Join 600+ members who transformed their lifestyle with us.</p>

        <div className="grid grid-3" style={{ marginTop: '3rem' }}>
          {reviews.map((rev, idx) => (
            <div className="card testimonial-card" key={idx}>
              <div className="testimonial-stars"><IconStar /><IconStar /><IconStar /><IconStar /><IconStar /></div>
              <p className="testimonial-text">"{rev.text}"</p>
              <p className="testimonial-author">— {rev.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="section" style={{ background: 'linear-gradient(135deg, var(--color-accent) 0%, #78350f 100%)', textAlign: 'center', padding: '6rem 1rem' }}>
      <div className="container">
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', marginBottom: '1rem', color: 'white' }}>Start Your Fitness Journey Today.</h2>
        <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>Take the first step towards a stronger, healthier, and more confident you. Walk in for a trial or contact us to know more.</p>
        <div className="flex justify-center" style={{ gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#contact" className="btn" style={{ backgroundColor: 'white', color: 'var(--color-primary)' }}>Join JPS Fitness Studio</a>
          <a href="https://wa.me/919677388685" className="btn" style={{ backgroundColor: 'transparent', border: '2px solid white', color: 'white' }}><IconWhatsApp /> Get Free Consultation</a>
        </div>
      </div>
    </section>
  );
};

const ContactAndFooter = () => {
  return (
    <>
      <section className="section bg-darker" id="contact">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2 className="section-title">Visit <span className="text-accent">Us</span></h2>
              <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>We operate in batches to ensure focus and avoid overcrowding.</p>
              <div style={{ padding: '2rem', backgroundColor: 'var(--color-surface-1)', borderRadius: '8px', border: '1px solid var(--color-surface-2)', marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-accent)' }}>Working Hours</h4>
                <p style={{ fontSize: '1.1rem' }}>Morning & Evening batches</p>
                <p style={{ color: 'var(--color-secondary)' }}>Closes 12 PM, Reopens 4:30 PM</p>
              </div>
              <div className="flex flex-col" style={{ gap: '1.5rem' }}>
                <div className="flex items-center" style={{ gap: '1rem' }}>
                  <div className="service-icon" style={{ marginBottom: 0, width: '40px', height: '40px' }}><IconMapPin /></div>
                  <div>
                    <strong>Location</strong>
                    <p style={{ color: 'var(--color-secondary)' }}>91B, Gandhi Nagar, Nehru Street,<br />People’s Hospital Road, Under Erattaipuliayamaram Bridge,<br />Irugur, Tamil Nadu 641103</p>
                  </div>
                </div>
                <div className="flex items-center" style={{ gap: '1rem' }}>
                  <div className="service-icon" style={{ marginBottom: 0, width: '40px', height: '40px' }}><IconPhone /></div>
                  <div>
                    <strong>Phone</strong>
                    <p style={{ color: 'var(--color-secondary)' }}>096773 88685</p>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                <a href="tel:09677388685" className="btn btn-primary"><IconPhone /> Call Us</a>
                <a href="https://wa.me/919677388685" className="btn btn-whatsapp"><IconWhatsApp /> WhatsApp</a>
              </div>
            </div>
            <div className="map-container">
              {/* Embed Google Maps placeholder. In reality this would be an iframe of the actual address */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15664.717904071479!2d77.0315995!3d11.0253406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857bbfba4de3f%3A0xe6f4fb5e227fc691!2sIrugur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer bg-dark">
        <div className="container">
          <div className="grid grid-3">
            <div>
              <div className="logo" style={{ marginBottom: '1rem' }}>JPS <span>FITNESS</span></div>
              <p style={{ color: 'var(--color-secondary)', maxWidth: '300px' }}>Train Better. Transform Faster. The premium destination for real fitness results in Irugur.</p>
            </div>
            <div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Quick Links</h4>
              <ul className="flex flex-col" style={{ gap: '0.5rem' }}>
                <li><a href="#about" className="nav-link" style={{ textTransform: 'none' }}>About Us</a></li>
                <li><a href="#services" className="nav-link" style={{ textTransform: 'none' }}>Our Services</a></li>
                <li><a href="#testimonials" className="nav-link" style={{ textTransform: 'none' }}>Reviews</a></li>
                <li><a href="#contact" className="nav-link" style={{ textTransform: 'none' }}>Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Services</h4>
              <ul className="flex flex-col" style={{ gap: '0.5rem' }}>
                <li style={{ color: 'var(--color-secondary)' }}>Strength Training</li>
                <li style={{ color: 'var(--color-secondary)' }}>Weight Loss Programs</li>
                <li style={{ color: 'var(--color-secondary)' }}>Muscle Building</li>
                <li style={{ color: 'var(--color-secondary)' }}>General Fitness Training</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} JPS Fitness Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <FinalCTA />
      <ContactAndFooter />

      <a href="https://wa.me/919677388685" className="btn-whatsapp-floating" aria-label="WhatsApp Us">
        <IconWhatsApp />
      </a>

      <div className="mobile-sticky-cta">
        <div className="mobile-cta-grid">
          <a href="https://wa.me/919677388685" className="btn btn-whatsapp" style={{ padding: '0.5rem', fontSize: '0.9rem' }}><IconWhatsApp /> WhatsApp</a>
          <a href="tel:09677388685" className="btn btn-primary" style={{ padding: '0.5rem', fontSize: '0.9rem' }}><IconPhone /> Call Now</a>
        </div>
      </div>
    </div>
  );
}

export default App;
