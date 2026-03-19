import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiMail, FiPhone, FiSend, FiGithub,
  FiMessageSquare, FiCheckCircle, FiAlertCircle, FiMapPin,
} from 'react-icons/fi'

const CONTACT_CARDS = [
  {
    icon:  FiMail,
    label: 'Email',
    value: 'vansh@vanshz.online',
    href:  'mailto:vansh@vanshz.online',
    color: 'cyan',
  },
  {
    icon:  FiPhone,
    label: 'WhatsApp',
    value: '+91-XXXXXXXXXX',
    href:  'https://wa.me/91XXXXXXXXXX?text=Hi%20Vansh%2C%20I%20found%20your%20portfolio!',
    color: 'violet',
  },
  {
    icon:  FiSend,
    label: 'Telegram',
    value: '@VanshCZ',
    href:  'https://t.me/VanshCZ',
    color: 'gold',
  },
  {
    icon:  FiGithub,
    label: 'GitHub',
    value: 'github.com/VanshCZ',
    href:  'https://github.com/VanshCZ',
    color: 'cyan',
  },
]

const COLOR_MAP = {
  cyan:   { text: 'text-cyan-400',   bg: 'bg-cyan-500/10',   border: 'border-cyan-500/20',   hover: 'hover:border-cyan-400/50 hover:bg-cyan-500/15' },
  violet: { text: 'text-violet-400', bg: 'bg-violet-500/10', border: 'border-violet-500/20', hover: 'hover:border-violet-400/50 hover:bg-violet-500/15' },
  gold:   { text: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20', hover: 'hover:border-yellow-400/50 hover:bg-yellow-500/15' },
}

const SERVICES_LIST = [
  'Frontend Development',
  'UI/UX Design',
  'SEO Optimization',
  'Landing Page',
  'Telegram Bot',
  'AI Prompt Engineering',
  'Other',
]

function ContactForm() {
  const [form,    setForm]    = useState({ name: '', email: '', service: '', message: '' })
  const [errors,  setErrors]  = useState({})
  const [status,  setStatus]  = useState('idle') // idle | sending | success | error
  const [touched, setTouched] = useState({})

  const validate = (data) => {
    const e = {}
    if (!data.name.trim())    e.name    = 'Name is required'
    if (!data.email.trim())   e.email   = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = 'Enter a valid email'
    if (!data.message.trim()) e.message = 'Message is required'
    else if (data.message.trim().length < 20) e.message = 'Message must be at least 20 characters'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (touched[name]) {
      const errs = validate({ ...form, [name]: value })
      setErrors(prev => ({ ...prev, [name]: errs[name] }))
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched(t => ({ ...t, [name]: true }))
    const errs = validate(form)
    setErrors(prev => ({ ...prev, [name]: errs[name] }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate(form)
    setErrors(errs)
    setTouched({ name: true, email: true, message: true })
    if (Object.keys(errs).length) return

    setStatus('sending')
    // Simulate form submission — replace with your API endpoint
    await new Promise(r => setTimeout(r, 1800))
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center text-center py-16 gap-5"
      >
        <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/30
                        flex items-center justify-center">
          <FiCheckCircle className="w-10 h-10 text-green-400" />
        </div>
        <h3 className="font-display font-bold text-2xl text-white">Message Sent!</h3>
        <p className="text-slate-400 max-w-xs">
          Vansh will reply within 24 hours. Thank you for reaching out!
        </p>
        <button
          onClick={() => { setStatus('idle'); setForm({ name:'', email:'', service:'', message:'' }); setTouched({}); setErrors({}) }}
          className="btn-outline mt-2"
        >
          Send Another
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="Contact Vansh Langeh Rajput">
      {/* Name + Email row */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">
            Your Name <span className="text-cyan-400">*</span>
          </label>
          <input
            id="name" name="name" type="text"
            value={form.name} onChange={handleChange} onBlur={handleBlur}
            placeholder="John Doe"
            className={`form-input ${errors.name ? 'border-red-500/50 focus:border-red-500' : ''}`}
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
              <FiAlertCircle className="w-3 h-3" />{errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">
            Your Email <span className="text-cyan-400">*</span>
          </label>
          <input
            id="email" name="email" type="email"
            value={form.email} onChange={handleChange} onBlur={handleBlur}
            placeholder="you@example.com"
            className={`form-input ${errors.email ? 'border-red-500/50 focus:border-red-500' : ''}`}
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
              <FiAlertCircle className="w-3 h-3" />{errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Service dropdown */}
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-slate-400 mb-2">
          Service Needed
        </label>
        <select
          id="service" name="service"
          value={form.service} onChange={handleChange}
          className="form-input"
          style={{ colorScheme: 'dark' }}
        >
          <option value="">Select a service…</option>
          {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">
          Your Message <span className="text-cyan-400">*</span>
        </label>
        <textarea
          id="message" name="message" rows={5}
          value={form.message} onChange={handleChange} onBlur={handleBlur}
          placeholder="Hi Vansh, I need help with…"
          className={`form-input resize-none ${errors.message ? 'border-red-500/50 focus:border-red-500' : ''}`}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        <div className="flex justify-between items-start mt-1.5">
          {errors.message ? (
            <p id="message-error" className="text-xs text-red-400 flex items-center gap-1">
              <FiAlertCircle className="w-3 h-3" />{errors.message}
            </p>
          ) : <span />}
          <span className={`text-xs font-mono-code ${form.message.length > 500 ? 'text-red-400' : 'text-slate-600'}`}>
            {form.message.length}/500
          </span>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full btn-primary justify-center text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed"
        aria-label="Send message to Vansh Langeh Rajput"
      >
        {status === 'sending' ? (
          <>
            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending…
          </>
        ) : (
          <>
            <FiSend className="w-5 h-5" />
            Send Message to Vansh
          </>
        )}
      </button>
    </form>
  )
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div className="absolute inset-0 pointer-events-none grid-bg opacity-30" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-cyan   w-[500px] h-[500px] top-[-10%] left-[-10%]  opacity-20" />
        <div className="orb orb-violet w-[400px] h-[400px] bottom-0   right-[-8%] opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="section-tag">// Hire Vansh Langeh Rajput</span>
          <h2
            id="contact-heading"
            className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white mt-4 mb-6"
          >
            Let's Work <span className="text-gradient-cyan">Together</span>
          </h2>
          <p className="max-w-xl mx-auto text-slate-400 text-lg">
            Got a project in mind? Vansh is available for freelance work and collaborations.
            Let's build something extraordinary.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* ── LEFT SIDEBAR — Contact Info ── */}
          <div className="lg:col-span-2 space-y-5">

            {CONTACT_CARDS.map(({ icon: Icon, label, value, href, color }, i) => {
              const c = COLOR_MAP[color]
              return (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className={`flex items-center gap-4 p-4 glass-card rounded-xl border ${c.border} ${c.hover} transition-all duration-300 group`}
                  aria-label={`Contact Vansh via ${label}: ${value}`}
                >
                  <div className={`w-11 h-11 rounded-lg ${c.bg} flex items-center justify-center shrink-0`}>
                    <Icon className={`w-5 h-5 ${c.text}`} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-mono-code uppercase tracking-widest mb-0.5">{label}</p>
                    <p className={`font-display font-medium text-sm ${c.text} group-hover:text-white transition-colors`}>{value}</p>
                  </div>
                </motion.a>
              )
            })}

            {/* Location card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="glass-card rounded-xl border border-slate-700/50 p-5"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                  <FiMapPin className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-mono-code uppercase tracking-widest mb-1">Location</p>
                  <p className="text-white font-medium text-sm">Ranbirsinghpura, Jammu</p>
                  <p className="text-slate-500 text-xs">J&K, India 🇮🇳</p>
                  <p className="text-green-400 text-xs mt-2 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Available for remote work worldwide
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Response time */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="glass-card rounded-xl border border-slate-700/50 p-5"
            >
              <div className="flex items-center gap-3 mb-3">
                <FiMessageSquare className="text-cyan-400 w-5 h-5" />
                <span className="font-display font-semibold text-white text-sm">Quick Response</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Vansh typically responds within <strong className="text-white">24 hours</strong>.
                For urgent projects, reach out via Telegram for instant communication.
              </p>
            </motion.div>
          </div>

          {/* ── RIGHT — Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 glass-card rounded-2xl p-8 border border-slate-700/50"
          >
            <h3 className="font-display font-bold text-xl text-white mb-2">
              Send Vansh a Message
            </h3>
            <p className="text-slate-500 text-sm mb-8">
              Describe your project and Vansh will get back with a custom proposal.
            </p>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
