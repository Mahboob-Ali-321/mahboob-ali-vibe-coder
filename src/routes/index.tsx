import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type CSSProperties, type FormEvent } from "react";
import {
  Github,
  Instagram,
  MessageCircle,
  ArrowUpRight,
  Code2,
  Rocket,
  Sparkles,
  Menu,
  X,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { useReveal, useParallax, useCursorGlow, WORDS } from "@/hooks/use-reveal";
import modelpulseImg from "@/assets/modelpulse.jpg";
import smartlookImg from "@/assets/smartlook.jpg";
import bellastudioImg from "@/assets/bellastudio.jpg";
import decodreamsImg from "@/assets/decodreams.jpg";
import houseofkevalImg from "@/assets/houseofkeval.jpg";
import jsmasteryImg from "@/assets/jsmastery.jpg";
import resumeAsset from "@/assets/Mahboob_Ali_Resume.pdf.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Mahboob Ali — Frontend Developer & Vibe Coder" },
      {
        name: "description",
        content:
          "Portfolio of Mahboob Ali, a React developer building AI tools, dashboards and business websites with React, JavaScript and Python.",
      },
      { property: "og:title", content: "Mahboob Ali — Frontend Developer & Vibe Coder" },
      {
        property: "og:description",
        content:
          "React developer building fast, clean, functional web products — AI tools, dashboards and client websites.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Mahboob Ali",
          jobTitle: "Frontend Developer",
          url: "https://github.com/Mahboob-Ali-321",
          sameAs: [
            "https://github.com/Mahboob-Ali-321",
            "https://www.instagram.com/cyb3r.aliiii__",
          ],
          knowsAbout: ["React", "JavaScript", "Python", "HTML", "CSS", "UI/UX"],
        }),
      },
    ],
  }),
});

const WEB3FORMS_ACCESS_KEY = "ce2f0d90-14de-434b-ad7a-d3e475570cf7";

const GITHUB = "https://github.com/Mahboob-Ali-321";
const INSTAGRAM = "https://www.instagram.com/cyb3r.aliiii__";
const WHATSAPP =
  "https://wa.me/916203778896?text=Hi%20Mahboob!%20I'd%20like%20to%20discuss%20a%20project.";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = [
  { name: "React", mono: "<Component />" },
  { name: "JavaScript", mono: "const x = …" },
  { name: "Python", mono: "def build():" },
  { name: "HTML5", mono: "<section>" },
  { name: "CSS3", mono: "@layer base" },
  { name: "Frontend Dev", mono: "npm run dev" },
  { name: "UI/UX Implementation", mono: "pixel === perfect" },
];

const PROJECTS = [
  {
    title: "ModelPulse",
    tag: "AI Dashboard",
    description:
      "An AI model comparison dashboard that helps users find the right AI model for their workload — clean data visualization and an intuitive comparison interface.",
    link: "https://mahboobali.dpdns.org/",
    image: modelpulseImg,
    stack: ["React", "Data Viz", "Tailwind"],
  },
  {
    title: "Smart Look Beauty Salon & Academy",
    tag: "Client Website",
    description:
      "A professional bridal studio website built for a real salon client — showcasing services, bridal portfolio, academy courses, and integrated booking/contact features.",
    link: "https://smart-look-bridal-studio.vercel.app/",
    image: smartlookImg,
    stack: ["React", "Responsive", "Booking"],
  },
];

function Socials({ size = 18 }: { size?: number }) {
  const cls =
    "grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:scale-110 hover:text-foreground hover:border-primary/60 hover:shadow-[var(--shadow-glow)]";
  return (
    <div className="flex items-center gap-3">
      <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub" className={cls}>
        <Github size={size} />
      </a>
      <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram" className={cls}>
        <Instagram size={size} />
      </a>
      <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp" className={cls}>
        <MessageCircle size={size} />
      </a>
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-2 shadow-lg" : "py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5">
        <a href="#top" className="font-mono text-sm tracking-tight">
          <span className="text-gradient font-semibold">mahboob</span>
          <span className="text-muted-foreground">.dev</span>
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
          <a
            href={resumeAsset.url}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:scale-105 hover:border-primary/60 hover:text-foreground"
          >
            Download Resume
          </a>
          <a
            href={resumeAsset.url}
            target="_blank"
            rel="noreferrer"
            className="bg-brand rounded-full px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-105"
          >
            Hire me
          </a>
        </div>
        <button
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <div className="glass mx-5 mt-2 flex flex-col gap-1 rounded-2xl p-3 md:hidden">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
          <a
            href={resumeAsset.url}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
          >
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
}

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = WORDS[i % WORDS.length] ?? "";
    const done = !deleting && text === word;
    const empty = deleting && text === "";
    const delay = done ? 1400 : empty ? 200 : deleting ? 40 : 80;

    const t = setTimeout(() => {
      if (done) return setDeleting(true);
      if (empty) {
        setDeleting(false);
        setI((v) => v + 1);
        return;
      }
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, i]);

  return (
    <span className="font-mono">
      <span className="text-gradient">{text}</span>
      <span className="animate-caret text-primary">_</span>
    </span>
  );
}

function Hero() {
  const y = useParallax(0.18);
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-44 sm:pb-32"
    >
      <div
        className="grid-bg pointer-events-none absolute inset-0"
        style={{ transform: `translate3d(0, ${y * 0.4}px, 0)` }}
        aria-hidden
      />
      <div
        className="animate-blob pointer-events-none absolute -top-24 -left-24 size-[20rem] rounded-full bg-[var(--cyan)] opacity-20 blur-[100px] sm:size-[28rem]"
        style={{ translate: `0 ${y * 0.6}px` }}
        aria-hidden
      />
      <div
        className="animate-blob pointer-events-none absolute -right-32 top-24 size-[22rem] rounded-full bg-[var(--violet)] opacity-25 blur-[110px] [animation-delay:-6s] sm:size-[32rem]"
        style={{ translate: `0 ${y * -0.35}px` }}
        aria-hidden
      />
      <div
        className="relative mx-auto max-w-6xl px-5"
        style={{ transform: `translate3d(0, ${y * 0.12}px, 0)` }}
      >
        <p className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[11px] text-muted-foreground sm:text-xs">
          <span className="size-2 rounded-full bg-primary shadow-[var(--shadow-glow)]" />
          available for freelance work
        </p>
        <h1 className="reveal hero-heading mt-6 text-[2.1rem] leading-[1.08] font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Hi, I&apos;m <span className="text-gradient">Mahboob Ali</span>
        </h1>
        <p className="mt-4 text-lg font-medium sm:text-3xl">
          <Typewriter />
        </p>
        <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
          I build clean, functional websites and web apps — from AI tools to business sites — with
          React, Python, and a sharp eye for design.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
          <a
            href="#projects"
            className="bg-brand rounded-full px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-glow)] sm:py-3"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:border-primary/60 hover:shadow-[var(--shadow-glow)] sm:py-3"
          >
            Let&apos;s Talk
          </a>
          <div className="mt-2 w-full sm:mt-0 sm:ml-2 sm:w-auto">
            <Socials />
          </div>
        </div>
      </div>
    </section>
  );
}

function Words({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((w, i) => (
        <span key={`${w}-${i}`} className="word" style={{ "--i": i } as CSSProperties}>
          {w}
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </>
  );
}

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="reveal reveal-words">
      <p className="font-mono text-xs tracking-widest text-primary uppercase">{kicker}</p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-4xl">
        <Words text={title} />
      </h2>
    </div>
  );
}

function About() {
  const stats = [
    { icon: Rocket, value: "2+", label: "Projects Shipped" },
    { icon: Code2, value: "Full Stack", label: "Capable" },
    { icon: Sparkles, value: "React & Python", label: "Core Stack" },
  ];
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <SectionTitle kicker="about" title="Builder first, everything else second." />
      <div className="mt-8 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div className="reveal space-y-5 text-muted-foreground [transition-delay:80ms]">
          <p>
            I&apos;m a frontend developer who genuinely enjoys building real products — AI-powered
            tools one week, a website for a local business the next. I care about how things look,
            but I care more about whether they actually work for the people using them.
          </p>
          <p>
            My style is hands-on and self-driven: sketch it, ship it, then sharpen it. That&apos;s
            the <span className="text-foreground">vibe coder</span> part — fast iterations, tight
            feedback loops, and a stubborn refusal to leave rough edges in a UI.
          </p>
        </div>
        <div className="reveal grid gap-4 [transition-delay:160ms]">
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass flex items-center gap-4 rounded-2xl p-4 transition-all duration-300 hover:border-primary/50 hover:shadow-[var(--shadow-glow)]"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                <s.icon size={20} />
              </span>
              <div>
                <p className="font-semibold">{s.value}</p>
                <p className="font-mono text-xs text-muted-foreground">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <SectionTitle kicker="stack" title="Tools I reach for daily." />
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {SKILLS.map((s, idx) => (
          <div
            key={s.name}
            className="reveal group glass relative overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/60 hover:shadow-[var(--shadow-glow-violet)]"
            style={{ transitionDelay: `${idx * 60}ms` }}
          >
            <div className="bg-brand absolute inset-x-0 top-0 h-px opacity-40 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="animate-float" style={{ animationDelay: `${idx * 0.3}s` }}>
              <p className="text-base font-semibold">{s.name}</p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">{s.mono}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <SectionTitle kicker="selected work" title="Things I've built and shipped." />
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {PROJECTS.map((p, idx) => (
          <article
            key={p.title}
            className="reveal group glass overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[var(--shadow-glow-violet)]"
            style={{ transitionDelay: `${idx * 120}ms` }}
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={p.image}
                alt={`${p.title} website preview`}
                loading="lazy"
                width={1280}
                height={800}
                className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
              <span className="glass absolute top-4 left-4 rounded-full px-3 py-1 font-mono text-[11px] text-foreground">
                {p.tag}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-secondary px-3 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-brand inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-105"
                >
                  View Live <ArrowUpRight size={16} />
                </a>
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-foreground hover:border-primary/60"
                >
                  <Github size={16} /> Code
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function GithubCta() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-12">
      <div className="reveal glass relative overflow-hidden rounded-3xl p-8 sm:p-12">
        <div
          className="animate-blob pointer-events-none absolute -right-16 -bottom-20 size-72 rounded-full bg-[var(--violet)] opacity-25 blur-[80px]"
          aria-hidden
        />
        <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Check out my code</h2>
            <p className="mt-2 font-mono text-sm text-muted-foreground">
              git clone the things I&apos;m tinkering with.
            </p>
          </div>
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="bg-brand inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-glow)]"
          >
            <Github size={18} /> @Mahboob-Ali-321
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_ACCESS_KEY);
    data.append("subject", "New message from your portfolio site");
    data.append("from_name", "mahboob.dev portfolio");

    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = (await res.json()) as { success?: boolean; message?: string };
      if (json.success) {
        toast.success("Message sent! I'll get back to you shortly.");
        form.reset();
      } else {
        toast.error(json.message || "Couldn't send that — try WhatsApp instead.");
      }
    } catch {
      toast.error("Network error — please try WhatsApp instead.");
    } finally {
      setSending(false);
    }
  };

  const field =
    "w-full rounded-xl border border-input bg-secondary/40 px-4 py-3 text-base outline-none transition-all duration-200 placeholder:text-muted-foreground focus:border-primary/70 focus:shadow-[var(--shadow-glow)] sm:text-sm";

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <SectionTitle kicker="contact" title="Let's build something together" />
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="reveal space-y-6">
          <p className="text-muted-foreground">
            Got an idea, a client project, or something half-finished that needs a builder? Ping me
            — I reply fast.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="bg-brand inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-glow)]"
          >
            <MessageCircle size={18} /> Message on WhatsApp
          </a>
          <div className="flex flex-col gap-3">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="glass group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition-all duration-300 hover:border-primary/50 hover:shadow-[var(--shadow-glow)]"
            >
              <Instagram size={18} className="transition-transform duration-300 group-hover:scale-125" />
              cyb3r.aliiii__
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="glass group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition-all duration-300 hover:border-primary/50 hover:shadow-[var(--shadow-glow)]"
            >
              <Github size={18} className="transition-transform duration-300 group-hover:scale-125" />
              Mahboob-Ali-321
            </a>
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          className="reveal glass space-y-4 rounded-3xl p-5 [transition-delay:120ms] sm:p-6"
        >
          <input
            type="text"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />
          <input required name="name" maxLength={100} placeholder="Your name" className={field} />
          <input
            required
            name="contact"
            maxLength={150}
            placeholder="Email or phone"
            className={field}
          />
          <textarea
            required
            name="message"
            rows={5}
            maxLength={2000}
            placeholder="What are we building?"
            className={field}
          />
          <button
            type="submit"
            disabled={sending}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border py-3.5 text-sm font-semibold transition-all duration-300 hover:scale-[1.02] hover:border-primary/70 hover:shadow-[var(--shadow-glow)] disabled:pointer-events-none disabled:opacity-60"
          >
            {sending && <Loader2 size={16} className="animate-spin" />}
            {sending ? "Sending…" : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-sm">
            <span className="text-gradient font-semibold">mahboob</span>
            <span className="text-muted-foreground">.dev</span>
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Built with React &amp; a lot of coffee.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="transition-colors hover:text-foreground">
              {n.label}
            </a>
          ))}
        </div>
        <Socials size={16} />
      </div>
    </footer>
  );
}

function Index() {
  useReveal();
  useCursorGlow();
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GithubCta />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
