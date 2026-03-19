import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiArrowRight, FiDownload, FiGithub, FiSend } from 'react-icons/fi'

const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 40 },
  animate:   { opacity: 1, y: 0 },
  transition:{ duration: 0.8, delay, ease: [0.23, 1, 0.32, 1] },
})

const SOCIAL = [
  { icon: FiGithub, href: 'https://github.com/VanshCZ',  label: 'GitHub — VanshCZ' },
  { icon: FiSend,   href: 'https://t.me/VanshCZ',        label: 'Telegram — VanshCZ' },
]

export default function Hero() {
  const parallaxRef = useRef(null)

  useEffect(() => {
    const handleMouse = (e) => {
      if (!parallaxRef.current) return
      const { clientX, clientY } = e
      const cx = window.innerWidth  / 2
      const cy = window.innerHeight / 2
      const dx = (clientX - cx) / cx
      const dy = (clientY - cy) / cy
      parallaxRef.current.style.transform =
        `translate(${dx * 20}px, ${dy * 14}px)`
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
      aria-labelledby="hero-heading"
    >
      {/* ── GRADIENT ORBS ── */}
      <div ref={parallaxRef} className="absolute inset-0 pointer-events-none transition-transform duration-75 ease-out">
        <div className="orb orb-cyan   w-[600px] h-[600px] top-[-10%] left-[-15%]  opacity-60" />
        <div className="orb orb-violet w-[500px] h-[500px] bottom-[5%] right-[-10%] opacity-50" />
        <div className="orb orb-gold   w-[300px] h-[300px] top-[40%]  left-[40%]  opacity-40" />
      </div>

      {/* ── FLOATING CODE CHIPS ── */}
      {[
        { text: 'const vansh = { skills: "∞" }', top: '18%',  left: '5%',   delay: 0 },
        { text: '<VanshCZ />',                    top: '72%',  left: '3%',   delay: 0.3 },
        { text: 'SEO.rank("Vansh", #1)',           top: '20%',  right: '3%',  delay: 0.6 },
        { text: 'npm run build --perf',            top: '78%',  right: '4%',  delay: 0.9 },
      ].map(({ text, top, left, right, delay }) => (
        <motion.div
          key={text}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 1.5, duration: 0.6 }}
          className="absolute hidden xl:block font-mono-code text-xs px-3 py-1.5
                     glass border border-cyan-500/15 rounded-lg text-cyan-400/60 animate-float"
          style={{ top, left, right }}
          aria-hidden="true"
        >
          {text}
        </motion.div>
      ))}

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">

        {/* Status badge */}
        <motion.div {...fadeUp(0.1)} className="flex justify-center mb-8">
          <span className="section-tag">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true" />
            Available for hire — Vansh Langeh Rajput
          </span>
        </motion.div>

        {/* H1 — primary SEO keyword */}
        <motion.h1
          {...fadeUp(0.2)}
          id="hero-heading"
          className="font-display font-black leading-none tracking-tight mb-6"
        >
          <span className="block text-5xl sm:text-7xl lg:text-[110px] text-gradient-cyan glow-cyan mb-2">
            Vansh
          </span>
          <span className="block text-2xl sm:text-3xl lg:text-4xl text-slate-300 font-medium tracking-widest uppercase">
            Langeh Rajput
          </span>
        </motion.h1>

        {/* Typing animation — roles */}
        <motion.div {...fadeUp(0.35)} className="mb-8 h-12 flex items-center justify-center">
          <span className="font-display text-xl sm:text-2xl text-slate-400">
            I'm a{' '}
            <TypeAnimation
              sequence={[
                'Frontend Developer', 2000,
                'UI/UX Designer',     2000,
                'SEO Expert',         2000,
                'Telegram Bot Dev',   2000,
                'AI Prompt Engineer', 2000,
                'Creative Coder',     2000,
              ]}
              repeat={Infinity}
              className="text-gradient-cyan font-bold"
              cursor={true}
            />
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          {...fadeUp(0.45)}
          className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed mb-10"
        >
          Building blazing-fast, SEO-dominant websites from{' '}
          <strong className="text-white">Jammu, J&K, India</strong>.{' '}
          Crafting pixel-perfect interfaces, powerful Telegram bots, and AI-driven digital experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...fadeUp(0.55)}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-base"
            aria-label="View Vansh's projects"
          >
            <FiArrowRight className="w-5 h-5" />
            View Projects
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline text-base"
            aria-label="Hire Vansh Langeh Rajput"
          >
            Hire Me
          </button>
          <a
            href="/resume-vansh-langeh-rajput.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 font-display font-semibold text-sm
                       text-slate-400 hover:text-white glass border border-slate-700/50
                       hover:border-slate-500 rounded-lg transition-all duration-300"
            aria-label="Download Vansh's resume"
          >
            <FiDownload className="w-4 h-4" />
            Resume
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          {...fadeUp(0.65)}
          className="flex flex-wrap justify-center gap-6 sm:gap-12 mb-14"
        >
          {[
            { n: '50+', label: 'Projects Delivered' },
            { n: '30+', label: 'Happy Clients'      },
            { n: '3+',  label: 'Years Experience'   },
            { n: '100%',label: 'Client Satisfaction'},
          ].map(({ n, label }) => (
            <div key={label} className="text-center group">
              <p className="font-display font-black text-3xl sm:text-4xl text-gradient-cyan
                            group-hover:glow-cyan transition-all">
                {n}
              </p>
              <p className="text-slate-500 text-xs sm:text-sm mt-1 font-medium uppercase tracking-wider">
                {label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Social links */}
        <motion.div {...fadeUp(0.75)} className="flex items-center justify-center gap-4">
          <span className="text-slate-600 text-sm font-mono-code">// find me on</span>
          {SOCIAL.map(({ icon: Icon, href, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl glass border border-slate-700/50
                         flex items-center justify-center text-slate-400
                         hover:text-cyan-400 hover:border-cyan-500/40
                         hover:shadow-cyan-glow transition-all duration-300"
              aria-label={label}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="text-slate-600 text-xs font-mono-code tracking-widest uppercase">scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-cyan-500/60 to-transparent animate-pulse" />
        </motion.div>
      </div>
    </section>
  )
}
