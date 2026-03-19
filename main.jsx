import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMapPin, FiCode, FiLayout, FiSearch, FiSend, FiCpu } from 'react-icons/fi'

const EXPERTISE = [
  { icon: FiCode,   label: 'High-Performance Websites', desc: 'Ultra-fast, Core Web Vitals optimized sites' },
  { icon: FiLayout, label: 'Intuitive UI/UX Design',    desc: 'Pixel-perfect, user-centric interfaces'       },
  { icon: FiSearch, label: 'SEO Dominance Strategies',  desc: 'Rank #1 with technical + on-page SEO'         },
  { icon: FiSend,   label: 'Telegram Bot Development',  desc: 'Custom bots with advanced automation'         },
  { icon: FiCpu,    label: 'AI Prompt Engineering',     desc: 'Precision prompts for powerful AI outputs'    },
]

const TECH = [
  'HTML5','CSS3','JavaScript','React','Tailwind CSS','Next.js','GSAP',
  'Framer Motion','Node.js','Python','SEO','Telegram API','OpenAI',
  'Figma','Vite','Git','Vercel','Netlify','Firebase',
]

const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 40 },
  whileInView:{ opacity: 1, y: 0 },
  viewport:  { once: true },
  transition:{ duration: 0.8, delay, ease: [0.23, 1, 0.32, 1] },
})

export default function About() {
  const sectionRef = useRef(null)
  const inView     = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-violet w-[400px] h-[400px] top-[-5%] right-[-5%] opacity-30" />
        <div className="orb orb-cyan   w-[300px] h-[300px] bottom-0  left-[-5%]  opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── SECTION HEADER ── */}
        <motion.div {...fadeUp(0)} className="text-center mb-20">
          <span className="section-tag">// About Vansh</span>
          <h2
            id="about-heading"
            className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white mt-4 mb-6"
          >
            Meet{' '}
            <span className="text-gradient-cyan">Vansh Langeh Rajput</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg">
            Multi-skilled developer from <strong className="text-white">Ranbirsinghpura, Jammu, J&K, India</strong>{' '}
            turning bold ideas into blazing-fast digital realities.
          </p>
        </motion.div>

        {/* ── MAIN GRID ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">

          {/* LEFT — Text */}
          <div>
            <motion.div {...fadeUp(0.1)}>
              <h3 className="font-display font-bold text-2xl text-white mb-4">
                Who is <span className="text-gradient-cyan">Vansh</span>?
              </h3>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  I'm <strong className="text-white">Vansh Langeh Rajput</strong> — also known as{' '}
                  <strong className="text-cyan-400">VanshCZ</strong> across the web. A passionate
                  frontend developer and digital creator based in Jammu, Jammu &amp; Kashmir, India,
                  obsessed with building experiences that load instantly, look stunning, and rank #1.
                </p>
                <p>
                  With <strong className="text-white">3+ years of hands-on experience</strong>, I've
                  delivered <strong className="text-white">50+ projects</strong> for{' '}
                  <strong className="text-white">30+ satisfied clients</strong> spanning web apps,
                  SEO campaigns, Telegram automation bots, and AI-powered tools.
                </p>
                <p>
                  Whether you need a lightning-fast landing page, a full-blown web app, a bot that
                  automates your workflow, or SEO that puts your brand on page one — Vansh gets it done.
                </p>
              </div>
            </motion.div>

            {/* Location badge */}
            <motion.div {...fadeUp(0.2)} className="mt-8">
              <div className="inline-flex items-center gap-3 px-5 py-3 glass
                              border border-slate-700/50 rounded-xl">
                <FiMapPin className="text-cyan-400 w-5 h-5 shrink-0" />
                <span className="text-slate-300 font-medium">
                  Ranbirsinghpura, Jammu, J&K, India 🇮🇳
                </span>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              {...fadeUp(0.3)}
              className="grid grid-cols-3 gap-4 mt-8"
            >
              {[
                { n: '50+', label: 'Projects',   color: 'text-cyan-400' },
                { n: '30+', label: 'Clients',    color: 'text-violet-400' },
                { n: '3+',  label: 'Years Exp',  color: 'text-yellow-400' },
              ].map(({ n, label, color }) => (
                <div
                  key={label}
                  className="glass-card rounded-xl p-5 text-center"
                >
                  <p className={`font-display font-black text-3xl ${color} mb-1`}>{n}</p>
                  <p className="text-slate-500 text-xs font-medium uppercase tracking-widest">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Expertise cards */}
          <div className="space-y-4">
            {EXPERTISE.map(({ icon: Icon, label, desc }, i) => (
              <motion.article
                key={label}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                className="glass-card rounded-xl p-5 flex items-start gap-4 group"
              >
                <div className="w-11 h-11 rounded-lg bg-cyan-500/10 border border-cyan-500/20
                                flex items-center justify-center shrink-0
                                group-hover:bg-cyan-500/20 transition-colors">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-white mb-1">{label}</h4>
                  <p className="text-slate-500 text-sm">{desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* ── TECH MARQUEE ── */}
        <motion.div {...fadeUp(0.5)}>
          <p className="text-center text-slate-600 font-mono-code text-xs uppercase tracking-widest mb-6">
            // Technologies I work with
          </p>
          <div className="marquee-wrapper relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-void to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-void to-transparent z-10 pointer-events-none" />

            <div className="marquee-track">
              {[...TECH, ...TECH].map((t, i) => (
                <span
                  key={`${t}-${i}`}
                  className="px-4 py-2 glass border border-slate-700/50 rounded-lg
                             font-mono-code text-sm text-slate-400 whitespace-nowrap
                             hover:text-cyan-400 hover:border-cyan-500/30 transition-colors
                             cursor-default"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
