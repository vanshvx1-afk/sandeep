import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import { useTheme } from '../App'

const NAV_LINKS = [
  { label: 'Home',     href: '#home' },
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const { dark, setDark } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen]  = useState(false)
  const [active, setActive]      = useState('#home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      // Update active section
      const sections = NAV_LINKS.map(l => l.href.slice(1))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive('#' + id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    setMenuOpen(false)
    const el = document.getElementById(href.slice(1))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass border-b border-white/5 py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* ── LOGO ── */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollTo('#home') }}
          className="relative group flex items-center gap-2"
          aria-label="Vansh Langeh Rajput — VanshCZ Home"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-600
                          flex items-center justify-center shadow-cyan-glow group-hover:shadow-violet-glow
                          transition-all duration-300">
            <span className="font-display font-black text-lg text-white leading-none">V</span>
          </div>
          <span className="font-display font-bold text-xl text-white">
            Vansh<span className="text-gradient-cyan">CZ</span>
          </span>
        </a>

        {/* ── DESKTOP LINKS ── */}
        <ul className="hidden lg:flex items-center gap-1" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <button
                onClick={() => scrollTo(href)}
                className={`relative px-4 py-2 font-display font-medium text-sm transition-all duration-300 rounded-lg
                  ${active === href
                    ? 'text-cyan-400'
                    : 'text-slate-400 hover:text-white'
                  }`}
                aria-current={active === href ? 'page' : undefined}
              >
                {label}
                {active === href && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-0 bg-cyan-500/10 border border-cyan-500/20 rounded-lg"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* ── RIGHT ACTIONS ── */}
        <div className="flex items-center gap-3">
          {/* Dark/Light Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="w-10 h-10 rounded-lg glass flex items-center justify-center
                       text-slate-400 hover:text-cyan-400 transition-all duration-300
                       border border-slate-700/50 hover:border-cyan-500/30"
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={dark ? 'moon' : 'sun'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {dark ? <FiMoon className="w-4 h-4" /> : <FiSun className="w-4 h-4" />}
              </motion.span>
            </AnimatePresence>
          </button>

          {/* Hire Me CTA */}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo('#contact') }}
            className="hidden sm:inline-flex btn-primary text-sm py-2.5 px-5"
            aria-label="Hire Vansh Langeh Rajput"
          >
            Hire Me
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-10 h-10 rounded-lg glass flex items-center justify-center
                       text-slate-400 hover:text-white transition-all border border-slate-700/50"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass border-t border-white/5 overflow-hidden"
          >
            <nav aria-label="Mobile navigation">
              <ul className="px-4 py-4 flex flex-col gap-1">
                {NAV_LINKS.map(({ label, href }) => (
                  <li key={href}>
                    <button
                      onClick={() => scrollTo(href)}
                      className={`w-full text-left px-4 py-3 rounded-lg font-display font-medium
                        transition-all duration-200
                        ${active === href
                          ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                          : 'text-slate-400 hover:text-white hover:bg-white/5'
                        }`}
                    >
                      {label}
                    </button>
                  </li>
                ))}
                <li className="pt-2">
                  <button
                    onClick={() => scrollTo('#contact')}
                    className="w-full btn-primary justify-center"
                  >
                    Hire Me
                  </button>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
