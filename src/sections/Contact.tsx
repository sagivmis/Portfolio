import { useRef, useState, type FormEvent } from "react"
import emailjs from "@emailjs/browser"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, Send } from "lucide-react"
import { GitHub, LinkedIn, Fiverr } from "@/assets"
import { MagneticButton } from "@/components/ui/MagneticButton"
import { Reveal } from "@/components/ui/Reveal"
import { cn } from "@/lib/utils"

const socials = [
  { name: "GitHub", href: "https://github.com/sagivmishaan", icon: GitHub },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sagiv-mishaan/",
    icon: LinkedIn,
  },
  { name: "Fiverr", href: "https://www.fiverr.com/sagivmishaan", icon: Fiverr },
]

function FloatingInput({
  id,
  label,
  type = "text",
  required = false,
}: {
  id: string
  label: string
  type?: string
  required?: boolean
}) {
  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        name={id}
        required={required}
        placeholder=" "
        className="peer w-full rounded-xl border border-white/10 bg-white/5 px-4 pb-2 pt-6 text-ink outline-none transition-colors focus:border-primary/50 focus:ring-1 focus:ring-primary/30"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-4 origin-left font-mono text-xs uppercase tracking-wider text-muted transition-all peer-focus:top-2 peer-focus:scale-75 peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:scale-75"
      >
        {label}
      </label>
    </div>
  )
}

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  )

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    setStatus("sending")

    emailjs
      .sendForm(
        "service_8umzsu2",
        "template_ta2qs5g",
        formRef.current,
        "k1xhd6zpmT1BWXMr6"
      )
      .then(
        () => {
          setStatus("success")
          formRef.current?.reset()
        },
        () => setStatus("error")
      )
  }

  return (
    <section id="contact" className="relative section-padding">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="section-label mb-4">Contact</p>
          <h2 className="heading-xl text-balance">
            Let&apos;s build{" "}
            <span className="text-gradient">something.</span>
          </h2>
          <p className="mt-4 max-w-lg text-left text-muted">
            Have a project in mind or want to collaborate? Drop me a message.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 space-y-6"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <FloatingInput id="fullName" label="Full Name *" required />
              <FloatingInput id="email" label="Email *" type="email" required />
              <FloatingInput id="phone" label="Phone" type="tel" />
              <div className="relative">
                <select
                  id="reason"
                  name="reason"
                  className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-ink outline-none transition-colors focus:border-primary/50"
                  defaultValue="New Project"
                >
                  <option value="Job Opening">Job Opening</option>
                  <option value="New Project">New Project</option>
                  <option value="Support">Support</option>
                </select>
                <label
                  htmlFor="reason"
                  className="absolute -top-2 left-3 bg-surface px-1 font-mono text-[10px] uppercase tracking-wider text-muted"
                >
                  Reason
                </label>
              </div>
            </div>

            <FloatingInput id="title" label="Title *" required />

            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder=" "
                className="peer w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 pb-2 pt-6 text-ink outline-none transition-colors focus:border-primary/50 focus:ring-1 focus:ring-primary/30"
              />
              <label
                htmlFor="message"
                className="pointer-events-none absolute left-4 top-4 origin-left font-mono text-xs uppercase tracking-wider text-muted transition-all peer-focus:top-2 peer-focus:scale-75 peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:scale-75"
              >
                Message
              </label>
            </div>

            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <MagneticButton type="submit" className="flex items-center gap-2">
                {status === "sending" ? "Sending..." : "Send message"}
                <Send className="h-4 w-4" />
              </MagneticButton>

              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 font-mono text-sm text-primary"
                  >
                    <CheckCircle className="h-4 w-4" />
                    Message sent successfully!
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="font-mono text-sm text-accent"
                  >
                    Something went wrong. Please try again.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </form>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-6">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="pointer"
                aria-label={social.name}
                className={cn(
                  "glass flex items-center gap-3 rounded-full px-6 py-3 transition-all hover:border-primary/30 hover:text-primary"
                )}
              >
                <img
                  src={social.icon}
                  alt=""
                  className="h-5 w-5 opacity-70"
                />
                <span className="font-mono text-xs uppercase tracking-widest">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
