import { motion } from 'framer-motion'
import { FiGithub, FiSend, FiMail, FiHeart } from 'react-icons/fi'

const FOOTER_LINKS = {
  'Quick Links': [
    { label: 'Home',     href: '#home' },
    { label: 'About',    href: '#about' },
    { label: 'Skills',   href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact',  href: '#contact' },
  ],
  'Services': [
    { label: 'Frontend Development', href: '#services' },
    { label: 'UI/UX Design',         href: '#services' },
    { label: 'SEO Optimization',     href: '#services' },
    { label: 'Landing Pages',        href: '#services' },
    { label: 'Telegram Bots',        href: '#services' },
    { label: 'AI Prompt Engineering',href: '#services' },
  ],
  'Contact': [
    { label: 'vansh@vanshz.online',    href: 'mailto:vansh@vanshz.online' },
    { label: 'Telegram @VanshCZ',      href: 'https://t.me/VanshCZ' },
    { label: 'GitHub VanshCZ',         href: 'https://github.com/VanshCZ' },
    { label: 'WhatsApp',               href: '#contact' },
  ],
}

const SOCIALS = [
  { icon: FiGithub, href: 'https://github.com/VanshCZ', label: 'GitHub' },
  { icon: FiSend,   href: 'https://t.me/VanshCZ',       label: 'Telegram' },
  { icon: FiMail,   href: 'mailto:vansh@vanshz.online',  label: 'Email' },
]

const KEYWORDS = [
  'Vansh', 'Vansh Langeh Rajput', 'VanshCZ',
  'Frontend Developer Jammu', 'Web Developer J&K',
  'UI/UX Designer', 'SEO Expert', 'Telegram Bot Dev',
  'AI Prompt Engineer', 'Hire Vansh',
]

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = (href) => {
    if (href.startsWith('#')) {
      const el = document.getElementById(href.slice(1))
      el?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer
      role="contentinfo"
      className="relative border-t border-slate-800/80 overflow-hidden"
      aria-label="Site footer — Vansh Langeh Rajput portfolio"
    >
      {/* Gradient top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-cyan w-[300px] h-[300px] bottom-[-50%] left-[20%] opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* ── TOP GRID ── */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* Brand column */}
          <div className="md:col-span-1">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollTo('#home') }}
              className="flex items-center gap-2 mb-5"
              aria-label="Vansh Langeh Rajput — VanshCZ Home"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-600
                              flex items-center justify-center shadow-cyan-glow">
                <span className="font-display font-black text-xl text-white leading-none">V</span>
              </div>
              <span className="font-display font-bold text-xl text-white">
                Vansh<span className="text-gradient-cyan">CZ</span>
              </span>
            </a>

            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              <strong className="text-slate-400">Vansh Langeh Rajput</strong> — Frontend Developer
              from Jammu, India. Building fast, beautiful, and SEO-dominant digital experiences.
            </p>

            <div className="flex items-center gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 rounded-lg glass border border-slate-700/50
                             flex items-center justify-center text-slate-500
                             hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <nav key={heading} aria-label={`${heading} navigation`}>
              <h3 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-5">
                {heading}
              </h3>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    {href.startsWith('#') ? (
                      <button
                        onClick={() => scrollTo(href)}
                        className="text-slate-500 hover:text-cyan-400 transition-colors text-sm text-left"
                      >
                        {label}
                      </button>
                    ) : (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-slate-500 hover:text-cyan-400 transition-colors text-sm"
                      >
                        {label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* ── SEO KEYWORD STRIP (hidden visually but in DOM for SEO) ── */}
        <div className="mb-8 p-4 glass border border-slate-800/50 rounded-xl">
          <p className="text-slate-700 text-xs text-center font-mono-code leading-loose">
            {KEYWORDS.join(' · ')}
          </p>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="border-t border-slate-800/50 pt-8 flex flex-col sm:flex-row
                        items-center justify-between gap-4">
          <p className="text-slate-600 text-sm font-mono-code text-center sm:text-left">
            © {year}{' '}
            <a href="https://vanshz.online" className="text-slate-500 hover:text-cyan-400 transition-colors">
              Vansh Langeh Rajput (VanshCZ)
            </a>
            {' '}· vanshz.online · All rights reserved
          </p>

          <p className="text-slate-700 text-xs flex items-center gap-1.5 font-mono-code">
            Made with <FiHeart className="text-red-500/70 w-3 h-3 animate-pulse" /> in Jammu, India
          </p>
        </div>
      </div>
    </footer>
  )
}
