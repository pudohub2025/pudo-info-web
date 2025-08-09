"use client";

import Image from "next/image";
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => {
      observer.observe(el);
    });

    // Header scroll effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const hero :any = document.querySelector('.hero');
      if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="pudo-landing">
      {/* Header */}
      <header className="header">
        <div className="header-animations">
          <div className="header-truck" style={{transform: 'scaleX(-1)'}}>🚚</div>
          <div className="header-truck" style={{transform: 'scaleX(-1)'}}>🚛</div>
          <div className="header-package">📦</div>
        </div>
        <nav className="nav">
          <div className="logo">
            <img src="pudo-logo.png" alt="PUDO Logo" />
          </div>
          <ul className="nav-links">
            <li><a onClick={() => scrollToSection('#home')}>Home</a></li>
            <li><a onClick={() => scrollToSection('#services')}>Services</a></li>
            <li><a onClick={() => scrollToSection('#technology')}>Technology</a></li>
            <li><a onClick={() => scrollToSection('#green')}>Go Green</a></li>
            <li><a onClick={() => scrollToSection('#contact')}>Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="floating-element">📦</div>
        <div className="floating-element">🚛</div>
        <div className="floating-element">🌱</div>
        <div className="floating-element">🏪</div>
        <div className="floating-element">⚡</div>
        <div className="floating-element">🔄</div>
        
        <div className="hero-content">
          <h1>Effortless Logistics, Anytime, Anywhere</h1>
          <p>Revolutionizing last-mile delivery in India with smart PUDO solutions</p>
          <button 
            className="cta-button"
          >
            <a href="http://13.232.199.44:3000/" target="_blank" rel="noopener noreferrer">
            Discover PUDO</a>
          </button>
        </div>
      </section>

      {/* What is PUDO Section */}
      <section className="pudo-section scroll-reveal">
        <div className="pudo-content">
          <div className="pudo-text">
            <h2>What is PUDO?</h2>
            <p>PUDO (Pick-Up Drop-Off) is an innovative last-mile logistics solution that enables customers to collect or return parcels from secure lockers or partner locations at their convenience. It improves delivery efficiency, reduces costs, enhances customer satisfaction, and supports scalable, sustainable growth for e-commerce and courier businesses.</p>
          </div>
          <div className="pudo-visual">
            <div className="pudo-animation">
              <div className="delivery-truck">🚛</div>
              <div className="package">📦</div>
              <div className="package">📦</div>
              <div className="package">📦</div>
              <div className="locker">🏪</div>
            </div>
          </div>
        </div>
      </section>

      {/* With Vs Without PUDO Section */}
      <section className="comparison-section scroll-reveal">
        <div className="comparison-header">
          <h2>With Vs Without PUDO</h2>
          <p>See the dramatic difference PUDO makes in logistics efficiency</p>
        </div>
        
        <div className="comparison-container">
          {/* Without PUDO Side */}
          <div className="comparison-side without-pudo">
            <div className="comparison-title">
              <h3>❌ Traditional Delivery</h3>
              <span className="status-badge inefficient">Inefficient</span>
            </div>
            
            <div className="scenario-animation without-animation">
              <div className="delivery-scenario">
                <div className="failed-delivery">
                  <div className="truck-failed">🚛</div>
                  <div className="house">🏠</div>
                  <div className="failed-notice">📋</div>
                  <div className="sad-customer">😞</div>
                </div>
                <div className="problems-list">
                  <div className="problem-item">
                    <span className="problem-icon">⏰</span>
                    <span>Multiple failed delivery attempts</span>
                  </div>
                  <div className="problem-item">
                    <span className="problem-icon">💸</span>
                    <span>Higher operational costs</span>
                  </div>
                  <div className="problem-item">
                    <span className="problem-icon">😤</span>
                    <span>Customer frustration</span>
                  </div>
                  <div className="problem-item">
                    <span className="problem-icon">🔄</span>
                    <span>Inefficient route planning</span>
                  </div>
                  <div className="problem-item">
                    <span className="problem-icon">🌫️</span>
                    <span>Higher carbon emissions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* VS Divider */}
          <div className="vs-divider">
            <div className="vs-circle">
              <span>VS</span>
            </div>
            <div className="lightning">⚡</div>
          </div>

          {/* With PUDO Side */}
          <div className="comparison-side with-pudo">
            <div className="comparison-title">
              <h3>✅ PUDO Solution</h3>
              <span className="status-badge efficient">Efficient</span>
            </div>
            
            <div className="scenario-animation with-animation">
              <div className="delivery-scenario">
                <div className="successful-delivery">
                  <div className="truck-success">🚛</div>
                  <div className="pudo-locker">🏪</div>
                  <div className="notification">📱</div>
                  <div className="happy-customer">😊</div>
                </div>
                <div className="benefits-list">
                  <div className="benefit-item">
                    <span className="benefit-icon">✅</span>
                    <span>First-time delivery success</span>
                  </div>
                  <div className="benefit-item">
                    <span className="benefit-icon">💰</span>
                    <span>Reduced operational costs</span>
                  </div>
                  <div className="benefit-item">
                    <span className="benefit-icon">😊</span>
                    <span>Enhanced customer satisfaction</span>
                  </div>
                  <div className="benefit-item">
                    <span className="benefit-icon">📍</span>
                    <span>Optimized delivery routes</span>
                  </div>
                  <div className="benefit-item">
                    <span className="benefit-icon">🌱</span>
                    <span>Eco-friendly operations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="impact-stats">
          <div className="stat-item">
            <div className="stat-number">75</div>
            <div className="stat-label">% Cost Reduction</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">90</div>
            <div className="stat-label">% Delivery Success Rate</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">60</div>
            <div className="stat-label">% Carbon Emission Reduction</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24</div>
            <div className="stat-label">Hours Accessibility</div>
          </div>
        </div>
      </section>

      {/* Benefits for Last-Mile Delivery Companies */}
      <section className="section">
        <h2 className="section-title">Benefits for Last-Mile Delivery Companies</h2>
        <div className="benefits-grid">
          <div className="benefit-card floating">
            <div className="benefit-icon2">💰</div>
            <h3 className="benefit-title">Cost Savings</h3>
            <p className="benefit-description">By utilizing PUDO points (like lockers, retail stores, or hubs), companies can consolidate deliveries, reducing the need for individual home deliveries. This leads to fewer delivery attempts, more efficient routing, and reduced transportation costs.</p>
          </div>
          <div className="benefit-card floating" style={{animationDelay: '0.2s'}}>
            <div className="benefit-icon2">⚡</div>
            <h3 className="benefit-title">Improved Operational Efficiency</h3>
            <p className="benefit-description">PUDO solutions allow last-mile providers to optimize delivery routes and reduce delivery times, ensuring drivers can focus on larger batch deliveries to PUDO locations, instead of making individual home stops.</p>
          </div>
          <div className="benefit-card floating" style={{animationDelay: '0.4s'}}>
            <div className="benefit-icon2">📈</div>
            <h3 className="benefit-title">Scalability</h3>
            <p className="benefit-description">PUDO networks offer flexibility, making it easier for companies to expand their reach without the need for new infrastructure. Partnering with retail locations or leveraging automated lockers offers a scalable solution to meet growing demand.</p>
          </div>
          <div className="benefit-card floating" style={{animationDelay: '0.6s'}}>
            <div className="benefit-icon2">✅</div>
            <h3 className="benefit-title">Reduced Failed Deliveries</h3>
            <p className="benefit-description">With PUDO points, there is less chance of missed deliveries since customers can pick up their packages at a time that's convenient for them. This minimizes the cost of reattempting deliveries.</p>
          </div>
          <div className="benefit-card floating" style={{animationDelay: '0.8s'}}>
            <div className="benefit-icon2">⭐</div>
            <h3 className="benefit-title">Enhanced Customer Experience</h3>
            <p className="benefit-description">Offering PUDO as an option for package pick-up adds a layer of customer convenience, which can enhance brand loyalty. It also allows the company to cater to users who might not be available for home deliveries.</p>
          </div>
        </div>
      </section>

      {/* Benefits for End Users */}
      <section className="section">
        <h2 className="section-title">Benefits for End Users</h2>
        <div className="end-user-grid">
          <div className="user-benefit-card">
            <div className="user-benefit-number">1</div>
            <h3 className="user-benefit-title">Convenience and Flexibility</h3>
            <p className="user-benefit-description">PUDO locations are often available 24/7 (such as lockers or partner shops), allowing customers to pick up or drop off their packages whenever it's most convenient for them. This flexibility is especially valuable for those with busy schedules or irregular hours.</p>
          </div>
          <div className="user-benefit-card">
            <div className="user-benefit-number">2</div>
            <h3 className="user-benefit-title">Reduced Delivery Costs</h3>
            <p className="user-benefit-description">Many PUDO solutions offer lower delivery fees compared to home delivery, as the cost for last-mile delivery is shared between multiple customers and locations.</p>
          </div>
          <div className="user-benefit-card">
            <div className="user-benefit-number">3</div>
            <h3 className="user-benefit-title">Reduced Risk of Theft</h3>
            <p className="user-benefit-description">With deliveries left at home, there's always the risk of packages being stolen (porch piracy). PUDO points, especially secure lockers, provide a safer alternative for package pick-up, reducing the risk of theft.</p>
          </div>
          <div className="user-benefit-card">
            <div className="user-benefit-number">4</div>
            <h3 className="user-benefit-title">Increased Accessibility</h3>
            <p className="user-benefit-description">For customers who live in areas where home delivery options are limited, PUDO networks expand access to a wider range of products by providing an alternative delivery option in accessible locations.</p>
          </div>
          <div className="user-benefit-card">
            <div className="user-benefit-number">5</div>
            <h3 className="user-benefit-title">Faster Access to Packages</h3>
            <p className="user-benefit-description">Depending on the service, some PUDO networks allow for faster pick-up compared to waiting for home delivery, especially when using automated lockers.</p>
          </div>
        </div>
      </section>

      {/* Key Features & Benefits */}
      <section className="section">
        <h2 className="section-title">Key Features & Benefits</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-number">1</div>
            <h3 className="feature-title">24/7 Convenience with Smart Parcel Machines</h3>
          </div>
          <div className="feature-card">
            <div className="feature-number">2</div>
            <h3 className="feature-title">Eco-Friendly Logistics Solutions</h3>
          </div>
          <div className="feature-card">
            <div className="feature-number">3</div>
            <h3 className="feature-title">Cutting-Edge Technology for Efficiency</h3>
          </div>
          <div className="feature-card">
            <div className="feature-number">4</div>
            <h3 className="feature-title">Customer-Centric Services</h3>
          </div>
          <div className="feature-card">
            <div className="feature-number">5</div>
            <h3 className="feature-title">Nationwide Reach across India</h3>
          </div>
          <div className="feature-card">
            <div className="feature-number">6</div>
            <h3 className="feature-title">Cost-Effective Operations</h3>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services scroll-reveal">
        <div className="animated-bg">
          <div className="moving-shape">🚛</div>
          <div className="moving-shape">📦</div>
          <div className="moving-shape">🌱</div>
        </div>
        <div className="services-header">
          <h2>Core Services</h2>
          <p>Comprehensive logistics solutions designed for the modern world</p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🏪</div>
            <h3>Smart Parcel Machines</h3>
            <p>24/7 access to secure, automated parcel lockers for ultimate convenience</p>
          </div>
          <div className="service-card">
            <div className="service-icon">📋</div>
            <h3>PUDO Points</h3>
            <p>Strategic pick-up and drop-off locations across India</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🔄</div>
            <h3>Reverse Logistics</h3>
            <p>Efficient return and exchange solutions for businesses</p>
          </div>
          <div className="service-card">
            <div className="service-icon">📊</div>
            <h3>E-Commerce Fulfillment</h3>
            <p>Complete order fulfillment solutions for online businesses</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🌱</div>
            <h3>Sustainable Logistics</h3>
            <p>Eco-friendly delivery solutions for a greener future</p>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technology" className="technologies scroll-reveal">
        <div className="services-header">
          <h2>Our Technologies</h2>
          <p>Cutting-edge innovation driving logistics excellence</p>
        </div>
        <div className="tech-grid">
          <div className="tech-item">
            <h3>🤖 AI-Powered Route Optimization</h3>
            <p>Smart algorithms for maximum delivery efficiency</p>
          </div>
          <div className="tech-item">
            <h3>📱 Smart Parcel Machines</h3>
            <p>Automated, secure locker systems</p>
          </div>
          <div className="tech-item">
            <h3>🗺️ Geo-Intelligent Location Mapping</h3>
            <p>Precise location intelligence for optimal placement</p>
          </div>
          <div className="tech-item">
            <h3>📡 IoT-Enabled Parcel Tracking</h3>
            <p>Real-time tracking and monitoring systems</p>
          </div>
          <div className="tech-item">
            <h3>📈 Sustainability Analytics</h3>
            <p>Dashboard for environmental impact monitoring</p>
          </div>
          <div className="tech-item">
            <h3>🔗 Seamless API Integration</h3>
            <p>Easy integration with existing systems</p>
          </div>
        </div>
      </section>

      {/* Go Green Section */}
      <section id="green" className="go-green scroll-reveal">
        <div className="green-content">
          <h2>Go Green Initiative</h2>
          <p>Leading the way towards sustainable logistics solutions</p>
          <div className="green-features">
            <div className="green-feature">
              <h3>⚡Electric Vehicles</h3>
              <p>Zero-emission deliveries with EVs and bicycles</p>
            </div>
            <div className="green-feature">
              <h3>📊 Carbon Footprint Tracking</h3>
              <p>Monitor and reduce environmental impact</p>
            </div>
            <div className="green-feature">
              <h3>🔋 Renewable Energy</h3>
              <p>Solar-powered smart lockers</p>
            </div>
            <div className="green-feature">
              <h3>📱 Paperless Operations</h3>
              <p>100% digital processes</p>
            </div>
            <div className="green-feature">
              <h3>🌳 Reforestation Efforts</h3>
              <p>Giving back to nature</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact scroll-reveal">
        <h2>Get In Touch</h2>
        <div className="contact-info">
          <div className="contact-item">
            <h3>📞 Phone</h3>
            <p>+91 9666620307</p>
          </div>
          <div className="contact-item">
            <h3>✉️ Email</h3>
            <p>info@pudoindia.com</p>
          </div>
          <div className="contact-item">
            <h3>🌐 Website</h3>
            <p>www.pudoindia.com</p>
          </div>
          <div className="contact-item">
            <h3>📍 Location</h3>
            <p>Hyderabad, India</p>
          </div>
        </div>
      </section>
    </div>
  );
}