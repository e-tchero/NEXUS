import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, ChevronDown, Crosshair, Fingerprint, Menu, Radar, ShieldCheck, Terminal, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import './styles.css';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    number: '01',
    icon: Radar,
    title: 'Infrastructure risk research',
    text: 'Evidence-led reviews of public-facing digital infrastructure, exposure, and configuration risk.',
    tags: ['OSINT', 'Exposure mapping', 'Risk briefs']
  },
  {
    number: '02',
    icon: Terminal,
    title: 'Security workflow automation',
    text: 'Repeatable workflows that reduce manual overhead in monitoring, triage, and routine security operations.',
    tags: ['Workflow design', 'Signal triage', 'Reporting']
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'SME security readiness',
    text: 'Practical, prioritised steps that help growing teams understand their gaps and improve resilience.',
    tags: ['Gap assessment', 'Prioritisation', 'Action plans']
  }
];

const steps = [
  ['01 / DISCOVER', 'Map the environment', 'Establish what is exposed, what matters, and where evidence points to risk.'],
  ['02 / PRIORITISE', 'Focus on material gaps', 'Separate actionable findings from noise, then rank work by impact and effort.'],
  ['03 / OPERATIONALISE', 'Build repeatable systems', 'Turn the highest-value actions into documented processes and reliable automation.']
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const root = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true, wheelMultiplier: 0.9 });
    lenis.on('scroll', ScrollTrigger.update);
    const update = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      gsap.from('.hero-kicker', { y: 14, opacity: 0, duration: 0.65, ease: 'power3.out', delay: 0.1 });
      gsap.from('.hero-title-line', { yPercent: 105, opacity: 0, duration: 0.9, stagger: 0.12, ease: 'power4.out', delay: 0.16 });
      gsap.from('.hero-copy, .hero-actions, .hero-footnote', { y: 18, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out', delay: 0.45 });
      gsap.from('.hero-visual', { clipPath: 'inset(12% 0 12% 0)', opacity: 0, duration: 1.1, ease: 'power3.inOut', delay: 0.25 });
      gsap.utils.toArray('[data-reveal]').forEach((el) => {
        gsap.from(el, {
          y: 28, opacity: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 86%', once: true }
        });
      });
      gsap.to('.orbit-one', { rotate: 360, duration: 42, repeat: -1, ease: 'none', transformOrigin: '50% 50%' });
      gsap.to('.orbit-two', { rotate: -360, duration: 58, repeat: -1, ease: 'none', transformOrigin: '50% 50%' });
      gsap.to('.signal-pulse', { scale: 1.6, opacity: 0, duration: 2.1, repeat: -1, ease: 'power1.out' });
    }, root);

    return () => {
      gsap.ticker.remove(update);
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" ref={root}>
      <div className="announcement"><span className="status-dot" /> APPLIED SECURITY RESEARCH <span className="announcement-divider">/</span> CYBERSECURITY AUTOMATION</div>
      <header className="site-header">
        <a href="#top" className="brand" aria-label="ETCHERO home" onClick={closeMenu}>
          <img src="/logo.png" alt="ETCHERO logo" className="brand-logo" />
          <span className="brand-word">ETCHERO<span className="brand-period">.</span></span>
        </a>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
          <a href="#approach" onClick={closeMenu}>Approach</a>
          <a href="#capabilities" onClick={closeMenu}>Capabilities</a>
          <a href="#method" onClick={closeMenu}>Method</a>
          <a href="#contact" className="nav-contact" onClick={closeMenu}>Start a conversation <ArrowUpRight size={14} /></a>
        </nav>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-content">
            <div className="hero-kicker"><span className="kicker-line" /> SYSTEMS FOR A MORE RESILIENT DIGITAL WORLD</div>
            <h1>
              <span className="title-mask"><span className="hero-title-line">Security should</span></span>
              <span className="title-mask"><span className="hero-title-line">not be a <em>luxury.</em></span></span>
            </h1>
            <p className="hero-copy">We help small and growing organisations close the gap between the security they need and the capability they have — with evidence-led research and practical automation.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Explore a collaboration <ArrowUpRight size={16} /></a>
              <a className="text-link" href="#approach">See how we work <ArrowDownRight size={16} /></a>
            </div>
            <div className="hero-footnote"><span className="footnote-mark">E/</span> Engineering what comes next.</div>
          </div>
          <div className="hero-visual" aria-label="Abstract visualisation of a monitored digital environment">
            <div className="visual-topline"><span>ETCHERO / FIELD NOTES</span><span>FIG. 001</span></div>
            <div className="radar-stage">
              <div className="radar-grid" />
              <div className="radar-cross radar-cross-x" /><div className="radar-cross radar-cross-y" />
              <div className="radar-ring ring-a" /><div className="radar-ring ring-b" /><div className="radar-ring ring-c" />
              <div className="orbit orbit-one"><span className="orbit-node node-a" /><span className="orbit-node node-b" /></div>
              <div className="orbit orbit-two"><span className="orbit-node node-c" /></div>
              <div className="radar-center"><Fingerprint size={39} strokeWidth={1.1} /><span className="signal-pulse" /></div>
              <div className="radar-label label-top">EXPOSURE / 03</div>
              <div className="radar-label label-right">SIGNAL DETECTED <span className="signal-dot" /></div>
              <div className="radar-label label-bottom">OBSERVE → VERIFY → IMPROVE</div>
              <div className="coordinate coordinate-left">09° 04' N<br/>07° 29' E</div>
              <div className="coordinate coordinate-right">RISK INDEX<br/><b>IN CONTEXT</b></div>
            </div>
            <div className="visual-bottomline"><span>CONTINUOUS IMPROVEMENT</span><span className="visual-live"><i /> SYSTEMS THINKING / ACTIVE</span></div>
          </div>
          <div className="hero-index"><span>01</span><span className="index-rule" /><span>04</span></div>
        </section>

        <section className="trust-strip" aria-label="Operating principles">
          <div className="trust-inner"><span>BUILT ON EVIDENCE</span><i /><span>DESIGNED FOR REAL CONSTRAINTS</span><i /><span>ENGINEERED TO REPEAT</span><i /><span>MEASURED BY OUTCOMES</span></div>
        </section>

        <section className="intro section-wrap section-pad" id="approach">
          <div className="section-label" data-reveal><span>01 / THE GAP</span><span className="section-label-line" /></div>
          <div className="intro-grid">
            <h2 data-reveal>Good security is not just a tool. <em>It is a capability.</em></h2>
            <div className="intro-body" data-reveal>
              <p>Growing organisations are expected to defend increasingly complex digital environments — often without the time, specialist staff, or budget of a large enterprise.</p>
              <p>ETCHERO exists to make security work more understandable, more repeatable, and more accessible. We start with evidence, focus on what matters, and engineer practical next steps.</p>
              <a className="underlined-link" href="#method">Our operating method <ArrowRight size={15} /></a>
            </div>
          </div>
          <div className="principle-row" data-reveal>
            <div><span className="principle-number">A.</span><b>See clearly.</b><p>Build a grounded picture before making a recommendation.</p></div>
            <div><span className="principle-number">B.</span><b>Act deliberately.</b><p>Prioritise changes that address meaningful risk.</p></div>
            <div><span className="principle-number">C.</span><b>Improve continuously.</b><p>Turn one-off effort into a process teams can repeat.</p></div>
          </div>
        </section>

        <section className="capabilities section-pad" id="capabilities">
          <div className="section-wrap">
            <div className="section-label section-label-light" data-reveal><span>02 / CAPABILITIES</span><span className="section-label-line" /></div>
            <div className="capabilities-heading" data-reveal><h2>Research that informs.<br/><em>Systems that act.</em></h2><p>Focused capabilities, connected by one principle: useful security must lead to clear action.</p></div>
            <div className="capability-grid">
              {capabilities.map(({ number, icon: Icon, title, text, tags }) => (
                <article className="capability-card" key={number} data-reveal>
                  <div className="capability-card-top"><span>{number}</span><Icon size={22} strokeWidth={1.35} /></div>
                  <h3>{title}</h3><p>{text}</p>
                  <div className="tag-list">{tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <a href="#contact" className="card-arrow" aria-label={'Discuss ' + title}><ArrowUpRight size={18} /></a>
                </article>
              ))}
            </div>
            <div className="capabilities-note" data-reveal><Crosshair size={17} /><p><b>Scope before solution.</b> Engagements begin with a clear objective, an agreed scope, and evidence that supports the work.</p></div>
          </div>
        </section>

        <section className="method section-wrap section-pad" id="method">
          <div className="section-label" data-reveal><span>03 / METHOD</span><span className="section-label-line" /></div>
          <div className="method-heading" data-reveal><h2>From uncertainty<br/>to <em>operational clarity.</em></h2><p>A straightforward working cycle designed to keep effort connected to outcomes.</p></div>
          <div className="method-list">
            {steps.map(([eyebrow, title, text], index) => <div className="method-step" key={eyebrow} data-reveal><span className="method-step-index">{eyebrow}</span><h3>{title}</h3><p>{text}</p><span className="method-step-icon">{index === 0 ? <Radar /> : index === 1 ? <Crosshair /> : <Check />}</span></div>)}
          </div>
          <div className="disclaimer" data-reveal><span className="disclaimer-mark">i</span><p>Work is scoped and authorised before execution. Findings are evidence-based, limitations are documented, and recommendations are matched to the organisation’s actual context.</p></div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="section-wrap contact-grid">
            <div className="section-label section-label-light" data-reveal><span>04 / BEGIN HERE</span><span className="section-label-line" /></div>
            <div className="contact-main" data-reveal><p className="contact-kicker">A CLEARER PICTURE. A PRACTICAL NEXT STEP.</p><h2>Let’s close<br/>the <em>capability gap.</em></h2><p className="contact-copy">Have a security question, a workflow that needs improving, or a research problem worth investigating? Start with the objective. We’ll work from there.</p><a className="button button-light" href="mailto:etcherotech@gmail.com?subject=ETCHERO%20-%20Initial%20enquiry">Discuss a project <ArrowUpRight size={16} /></a></div>
            <div className="contact-aside" data-reveal><span className="aside-label">DIRECT CONTACT</span><a href="mailto:etcherotech@gmail.com">etcherotech@gmail.com <ArrowUpRight size={14} /></a><span className="aside-label">RESEARCH ETHOS</span><p>Authorised. Evidence-led. Outcome-focused.</p><span className="aside-label">OPERATING PRINCIPLE</span><p>Engineering what comes next.</p></div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-top"><a href="#top" className="footer-brand"><img src="/logo.png" alt="" /><span>ETCHERO<span className="brand-period">.</span></span></a><span className="footer-statement">SECURITY CAPABILITY, ENGINEERED.</span><a className="back-top" href="#top">BACK TO TOP <ArrowUpRight size={14} /></a></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} ETCHERO. All rights reserved.</span><span>APPLIED SECURITY RESEARCH <i /> CYBERSECURITY AUTOMATION</span><a href="https://www.linkedin.com/in/abdulhameed-amin/" target="_blank" rel="noreferrer">LINKEDIN <ArrowUpRight size={12} /></a></div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);