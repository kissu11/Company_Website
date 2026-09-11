"use client";

import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Blocks,
  Bot,
  CirclePlay,
  Clock,
  CloudCog,
  Cpu,
  Headphones,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Twitter,
} from "lucide-react";

const services = [
  {
    icon: Blocks,
    title: "Custom Software Development",
    copy: "Plan, design, and ship secure applications for web, mobile, internal tools, and customer portals.",
    bullets: ["Product discovery and architecture", "Frontend and backend engineering"],
  },
  {
    icon: CloudCog,
    title: "Cloud & Infrastructure",
    copy: "Modernize hosting, deployments, monitoring, backups, and cost controls across cloud environments.",
    bullets: ["Migration and DevOps automation", "Reliability and performance tuning"],
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity Readiness",
    copy: "Reduce operational risk with practical security reviews, access controls, compliance support, and response plans.",
    bullets: ["Security audits and hardening", "Endpoint and identity protection"],
  },
  {
    icon: Bot,
    title: "AI & Workflow Automation",
    copy: "Automate repetitive work, connect business systems, and introduce AI safely where it improves throughput.",
    bullets: ["CRM and ERP integrations", "Process automation roadmaps"],
  },
  {
    icon: Headphones,
    title: "Managed IT Support",
    copy: "Keep teams productive with responsive help desk support, device management, vendor coordination, and reporting.",
    bullets: ["Remote and onsite support", "SLA-based service management"],
  },
  {
    icon: BarChart3,
    title: "Data & Business Intelligence",
    copy: "Turn scattered operational data into dashboards, reporting workflows, and decision-ready insight.",
    bullets: ["Data pipelines and warehousing", "Executive reporting dashboards"],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Diagnose",
    copy: "We review your systems, workflows, risks, data, and team needs before recommending a practical path forward.",
  },
  {
    number: "02",
    title: "Architect",
    copy: "Together we shape the technical plan, delivery milestones, security model, and measurable business outcomes.",
  },
  {
    number: "03",
    title: "Activate",
    copy: "We implement, support adoption, monitor performance, and keep improving the platform after launch.",
  },
];

function Brand({ footer = false }) {
  return (
    <a className={`brand ${footer ? "footer-brand" : ""}`} href="#home" aria-label="Netrixa home">
      <span className="brand-mark">
        <Cpu aria-hidden="true" />
      </span>
      <span>
        <strong>Netrixa</strong>
        <small>IT Solutions & Services</small>
      </span>
    </a>
  );
}

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [formNote, setFormNote] = useState("");

  function handleNavClick() {
    setIsNavOpen(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    setFormNote("Thanks. This static demo captured the interaction locally.");
  }

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Brand />

          <button
            className="nav-toggle"
            type="button"
            aria-label="Open menu"
            aria-expanded={isNavOpen}
            onClick={() => setIsNavOpen((value) => !value)}
          >
            <Menu aria-hidden="true" />
          </button>

          <nav className={`main-nav ${isNavOpen ? "open" : ""}`}>
            <a href="#home" className="active" onClick={handleNavClick}>
              Landing
            </a>
            <a href="#services" onClick={handleNavClick}>
              Services
            </a>
            <a href="#process" onClick={handleNavClick}>
              Process
            </a>
            <a href="#contact" onClick={handleNavClick}>
              Contact
            </a>
          </nav>

          <a className="header-cta" href="#contact">
            Book a strategy call
          </a>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2200&q=82"
            alt="Technology team collaborating around laptops in a modern office"
          />
          <div className="hero-overlay" />
          <div className="container hero-content">
            <span className="eyebrow hero-pill">Technology built for momentum</span>
            <h1>Where business ambition becomes reliable digital execution.</h1>
            <p>
              Netrixa helps growing companies design, build, secure, and scale the systems that
              keep modern teams moving.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#contact">
                Book a strategy call <ArrowRight aria-hidden="true" />
              </a>
              <a className="btn ghost" href="#services">
                Explore services <CirclePlay aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="trust-band">
          <div className="container">
            <p className="eyebrow">Trusted by teams that need resilient technology</p>
            <div className="tag-row" aria-label="Client types">
              <span>Startups</span>
              <span>Enterprise teams</span>
              <span>SaaS companies</span>
              <span>Healthcare providers</span>
              <span>Retail operations</span>
            </div>
            <div className="metric-grid">
              <article>
                <strong>150+</strong>
                <span>Digital products delivered</span>
              </article>
              <article>
                <strong>99.9%</strong>
                <span>Infrastructure uptime targets</span>
              </article>
              <article>
                <strong>24/7</strong>
                <span>Managed support coverage</span>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <div className="section-heading split">
              <div>
                <p className="eyebrow">Core delivery pillars</p>
                <h2>Executive-grade IT services for digital transformation.</h2>
              </div>
              <a className="btn soft" href="#contact">
                See all services <ArrowRight aria-hidden="true" />
              </a>
            </div>

            <div className="service-grid">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article className="service-card" key={service.title}>
                    <span className="icon-chip">
                      <Icon aria-hidden="true" />
                    </span>
                    <h3>{service.title}</h3>
                    <p>{service.copy}</p>
                    <ul>
                      {service.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section muted" id="process">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Our methodology</p>
              <h2>A disciplined approach for complex technology change.</h2>
            </div>
            <div className="process-grid">
              {processSteps.map((step) => (
                <article key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="impact-section">
          <div className="container impact-layout">
            <article className="featured-card">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=82"
                alt="Server racks in a modern data center"
              />
              <div>
                <p className="eyebrow">Featured engagement</p>
                <h3>Modernizing infrastructure for a fast-growing services company.</h3>
              </div>
            </article>
            <div className="impact-copy">
              <p className="eyebrow">Proof of impact</p>
              <h2>Technology that performs in operations, security, and growth.</h2>
              <p>
                Netrixa helped a multi-location company replace aging systems, centralize support,
                improve uptime, and gain executive visibility into technology performance.
              </p>
              <div className="impact-metrics">
                <article>
                  <strong>42%</strong>
                  <span>Support ticket reduction</span>
                </article>
                <article>
                  <strong>3.1x</strong>
                  <span>Release cycle acceleration</span>
                </article>
                <article>
                  <strong>68%</strong>
                  <span>Lower manual reporting effort</span>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Start the dialogue</p>
              <h2>Tell us where your technology is and where it needs to go.</h2>
            </div>
            <div className="contact-layout">
              <form className="contact-card" onSubmit={handleSubmit}>
                <h3>Book an IT strategy call</h3>
                <div className="form-grid">
                  <label>
                    Name *
                    <input type="text" name="name" placeholder="Maya Chen" required />
                  </label>
                  <label>
                    Email *
                    <input type="email" name="email" placeholder="maya@company.com" required />
                  </label>
                  <label>
                    Company
                    <input type="text" name="company" placeholder="Meridian Labs" />
                  </label>
                  <label>
                    Inquiry type
                    <select name="topic">
                      <option value="">Select a topic</option>
                      <option>Software development</option>
                      <option>Cloud and DevOps</option>
                      <option>Cybersecurity</option>
                      <option>Managed IT support</option>
                    </select>
                  </label>
                </div>
                <label>
                  Message *
                  <textarea name="message" placeholder="Tell us about your goals..." required />
                </label>
                <button className="btn primary compact" type="submit">
                  Send message
                </button>
                <p className="form-note" aria-live="polite">
                  {formNote}
                </p>
              </form>

              <aside className="contact-card next-card">
                <h3>What happens next</h3>
                <p>
                  Within one business day, our team will send an agenda and recommend the right
                  discussion format for your priorities.
                </p>
                <dl className="contact-list">
                  <div>
                    <dt>
                      <Mail aria-hidden="true" /> Email
                    </dt>
                    <dd>hello@netrixa.com</dd>
                  </div>
                  <div>
                    <dt>
                      <Phone aria-hidden="true" /> Phone
                    </dt>
                    <dd>+1 (415) 903-2148</dd>
                  </div>
                  <div>
                    <dt>
                      <MapPin aria-hidden="true" /> Office
                    </dt>
                    <dd>San Francisco and remote delivery</dd>
                  </div>
                  <div>
                    <dt>
                      <Clock aria-hidden="true" /> Hours
                    </dt>
                    <dd>Monday - Friday, 9:00 AM - 6:00 PM</dd>
                  </div>
                </dl>
              </aside>
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="container">
            <p className="eyebrow">Ready when you are</p>
            <h2>Position your organization for its next decade of digital advantage.</h2>
            <p>
              Netrixa partners with teams that need strategic depth, operational clarity, and
              trusted execution support.
            </p>
            <div className="hero-actions centered">
              <a className="btn light" href="#contact">
                Schedule consultation <ArrowRight aria-hidden="true" />
              </a>
              <a className="btn outline-light" href="#services">
                Review service model
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <Brand footer />
            <p>Designing dependable technology with boardroom precision.</p>
          </div>
          <nav aria-label="Footer navigation">
            <h3>Navigation</h3>
            <a href="#home">Landing</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
          <div>
            <h3>Contact</h3>
            <p>
              <Mail aria-hidden="true" /> hello@netrixa.com
            </p>
            <p>
              <Phone aria-hidden="true" /> +1 (415) 903-2148
            </p>
            <p>
              <MapPin aria-hidden="true" /> San Francisco and remote delivery
            </p>
          </div>
          <div>
            <h3>Connect</h3>
            <div className="social-row">
              <a href="#" aria-label="LinkedIn">
                <Linkedin aria-hidden="true" />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter aria-hidden="true" />
              </a>
            </div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© 2026 Netrixa Solutions. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
