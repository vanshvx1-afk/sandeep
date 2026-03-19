import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

const SKILL_GROUPS = [
  {
    category: 'Frontend Development',
    color:     'cyan',
    skills: [
      { name: 'HTML5 / CSS3',       pct: 97 },
      { name: 'JavaScript (ES6+)',  pct: 92 },
      { name: 'React.js',           pct: 90 },
      { name: 'Tailwind CSS',       pct: 95 },
      { name: 'Next.js',            pct: 82 },
      { name: 'GSAP / Framer Motion',pct: 85 },
    ],
  },
  {
    category: 'UI/UX Design',
    color:     'violet',
    skills: [
      { name: 'Figma',                pct: 88 },
      { name: 'Responsive Design',    pct: 96 },
      { name: 'Glassmorphism / Neuro', pct: 90 },
      { name: 'Typography & Spacing', pct: 92 },
      { name: 'Prototyping',          pct: 84 },
      { name: 'Brand Design',         pct: 80 },
    ],
  },
  {
    category: 'SEO & Growth',
    color:     'gold',
    skills: [
      { name: 'On-Page SEO',          pct: 95 },
      { name: 'Technical SEO',        pct: 90 },
      { name: 'Schema / Structured Data', pct: 88 },
      { name: 'Core Web Vitals',      pct: 92 },
      { name: 'Keyword Research',     pct: 87 },
      { name: 'Google Analytics 4',   pct: 82 },
    ],
  },
  {
    category: 'Bots & AI',
    color:     'cyan',
    skills: [
      { name: 'Telegram Bot API',     pct: 93 },
      { name: 'Python',               pct: 78 },
      { name: 'AI Prompt Engineering',pct: 94 },
      { name: 'OpenAI API',           pct: 85 },
      { name: 'Automation & Webhooks',pct: 87 },
      { name: 'Node.js',              pct: 76 },
    ],
  },
]

const COLOR_MAP = {
  cyan:   { bar: 'from-cyan-500 to-cyan-300',   text: 'text-cyan-400',   border: 'border-cyan-500/20',   bg: 'bg-cyan-500/10'   },
  violet: { bar: 'from-violet-500 to-violet-300',text: 'text-violet-400', border: 'border-violet-500/20', bg: 'bg-violet-500/10' },
  gold:   { bar: 'from-yellow-500 to-yellow-300',text: 'text-yellow-400', border: 'border-yellow-500/20', bg: 'bg-yellow-500/10' },
}

function SkillBar({ name, pct, color, visible }) {
  const c = COLOR_MAP[color]
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="text-slate-300 text-sm font-medium">{name}</span>
        <span className={`font-mono-code text-xs font-bold ${c.text}`}>{pct}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className={`skill-bar-fill bg-gradient-to-r ${c.bar}`}
          style={{ width: visible ? `${pct}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const sectionRef = useRef(null)
  const inView     = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      aria-labelledby="skills-heading"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-cyan   w-[350px] h-[350px] top-[10%]  left-[-8%]  opacity-25" />
        <div className="orb orb-violet w-[400px] h-[400px] bottom-0   right-[-8%] opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="section-tag">// Skills & Expertise</span>
          <h2
            id="skills-heading"
            className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white mt-4 mb-6"
          >
            What <span className="text-gradient-cyan">Vansh</span> Can Do
          </h2>
          <p className="max-w-xl mx-auto text-slate-400 text-lg">
            A full-spectrum developer with deep expertise across frontend, design, SEO, and automation.
          </p>
        </motion.div>

        {/* Skill grids */}
        <div className="grid md:grid-cols-2 gap-8">
          {SKILL_GROUPS.map(({ category, color, skills }, gi) => {
            const c = COLOR_MAP[color]
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: gi * 0.12, ease: [0.23,1,0.32,1] }}
                className="glass-card rounded-2xl p-8"
              >
                <div className="flex items-center gap-3 mb-8">
                  <span className={`inline-block w-3 h-3 rounded-full bg-gradient-to-r ${c.bar}`} />
                  <h3 className={`font-display font-bold text-lg ${c.text}`}>{category}</h3>
                </div>

                {skills.map((s, si) => (
                  <SkillBar
                    key={s.name}
                    {...s}
                    color={color}
                    visible={inView}
                  />
                ))}
              </motion.div>
            )
          })}
        </div>

        {/* Tech badges strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="font-mono-code text-xs text-slate-600 uppercase tracking-widest mb-6">
            // Also proficient in
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'TypeScript','SASS/SCSS','MongoDB','Firebase','REST APIs',
              'GraphQL','PWA','Docker basics','Linux CLI','VS Code','Chrome DevTools',
            ].map((t) => (
              <span
                key={t}
                className="px-4 py-2 glass border border-slate-700/40 rounded-lg
                           font-mono-code text-xs text-slate-500
                           hover:text-cyan-400 hover:border-cyan-500/30 transition-colors cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
