import { useState, useEffect } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import profilePhoto from "@/imports/image.png";
import pulseScreenshot from "@/imports/pulse.png";
import {
  Menu,
  X,
  Code2,
  Database,
  Smartphone,
  Github,
  MapPin,
  Mail,
  ExternalLink,
  GraduationCap,
  ChevronRight,
  Terminal,
} from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "TypeScript", "React", "Vite", "Tailwind CSS"],
  },
  {
    category: "Backend / Database",
    items: ["JavaScript", "Laravel", "Supabase", "SQLite", "MySQL", "Node.js", "Hono", "SQL"],
  },
  {
    category: "Tools",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
      "Expo",
      "Adobe Photoshop",
      "Adobe Illustrator",
    ],
  },
  {
    category: "AI",
    items: ["Cursor", "Codex", "OpenAI"],
  },
];

const PROJECTS = [
  {
    name: "Pulse",
    description:
      "An anonymous message and music dedication platform where users can send heartfelt messages and song dedications without revealing their identity.",
    tech: ["React", "Vite", "TypeScript", "Supabase", "Hono", "SQLite"],
    icon: "💬",
    color: "from-cyan-500/20 to-blue-500/20",
    href: "https://pulse-sv.vercel.app",
    wip: false,
  },
  {
    name: "BloodLink",
    description:
      "A blood donor matching system that connects donors with recipients in real-time, streamlining the process of finding compatible donors during emergencies.",
    tech: ["React Native", "Expo", "Supabase"],
    icon: "🩸",
    color: "from-rose-500/20 to-orange-500/20",
    href: "#",
    wip: true,
  },
  {
    name: "AttendEase",
    description:
      "A mobile attendance management system for schools and organizations, featuring QR-code check-ins and real-time attendance tracking dashboards.",
    tech: ["React Native", "Expo", "Supabase"],
    icon: "✅",
    color: "from-emerald-500/20 to-teal-500/20",
    href: "#",
    wip: true,
  },
];

function Navbar({ active }: { active: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="font-extrabold text-xl tracking-tight text-foreground"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Christian<span className="text-primary">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  active === link.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-b border-border">
          <ul className="max-w-[1280px] mx-auto px-4 py-3 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    active === link.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="relative w-full min-h-[520px] flex flex-col items-center justify-start pt-4 select-none">
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.15); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up-card {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up       { animation: fade-up 0.7s ease both; }
        .animate-fade-up-1     { animation: fade-up 0.7s ease 0.1s both; }
        .animate-fade-up-2     { animation: fade-up 0.7s ease 0.2s both; }
        .animate-fade-up-3     { animation: fade-up 0.7s ease 0.35s both; }
        .animate-fade-up-4     { animation: fade-up 0.7s ease 0.5s both; }
        .animate-fade-up-5     { animation: fade-up 0.7s ease 0.65s both; }
        .animate-slide-up-card { animation: slide-up-card 0.8s ease 0.4s both; }
      `}</style>

      {/* ── Photo + rings ── */}
      <div className="relative flex items-center justify-center" style={{ width: 300, height: 300 }}>
        {/* Ambient glow */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(34,211,238,0.2) 0%, transparent 70%)",
            animation: "glow-pulse 4s ease-in-out infinite",
          }}
        />

        {/* Spinning conic arc */}
        <div
          className="absolute"
          style={{
            width: 292,
            height: 292,
            borderRadius: "50%",
            border: "1.5px solid transparent",
            background:
              "linear-gradient(#09090b, #09090b) padding-box, conic-gradient(from 0deg, #22d3ee 0%, transparent 35%, transparent 65%, #22d3ee 100%) border-box",
            animation: "spin-slow 8s linear infinite",
          }}
        />

        {/* Counter-spin dashed ring */}
        <div
          className="absolute"
          style={{
            width: 316,
            height: 316,
            borderRadius: "50%",
            border: "1px dashed rgba(34,211,238,0.18)",
            animation: "spin-slow 14s linear infinite reverse",
          }}
        />

        {/* Orbiting dot */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: 292,
            height: 292,
            borderRadius: "50%",
            animation: "spin-slow 8s linear infinite",
          }}
        >
          <div
            className="absolute rounded-full bg-primary shadow-lg"
            style={{
              width: 9,
              height: 9,
              top: -4.5,
              left: "50%",
              marginLeft: -4.5,
              boxShadow: "0 0 8px #22d3ee",
            }}
          />
        </div>

        {/* Profile photo */}
        <div
          className="relative z-10 rounded-full overflow-hidden border-2 border-primary/30"
          style={{
            width: 264,
            height: 264,
            boxShadow: "0 0 32px rgba(34,211,238,0.18), 0 0 64px rgba(34,211,238,0.07)",
          }}
        >
          <ImageWithFallback
            src={profilePhoto}
            alt="Christian — Aspiring Full-Stack Developer"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Floating badge — top right */}
        <div
          className="absolute -top-2 -right-4 z-20 bg-card border border-border rounded-lg px-3 py-1.5 text-xs text-primary shadow-lg whitespace-nowrap"
          style={{
            fontFamily: "'Geist Mono', monospace",
            animation: "float 5s ease-in-out infinite",
          }}
        >
          &lt;/&gt; open to work
        </div>

        {/* Floating badge — bottom left */}
        <div
          className="absolute -bottom-2 -left-6 z-20 bg-card border border-border rounded-lg px-3 py-1.5 text-xs text-emerald-400 shadow-lg whitespace-nowrap"
          style={{
            fontFamily: "'Geist Mono', monospace",
            animation: "float 6s ease-in-out infinite 1.2s",
          }}
        >
          ✦ building projects
        </div>
      </div>

      {/* ── Terminal card ── */}
      <div
        className="animate-slide-up-card relative w-full max-w-sm mt-6 bg-card border border-border rounded-xl shadow-2xl shadow-black/50 overflow-hidden"
      >
        {/* Titlebar */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-secondary border-b border-border">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          <span
            className="ml-2 text-xs text-muted-foreground"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            christian@portfolio ~ $
          </span>
        </div>

        {/* Body */}
        <div
          className="p-4 text-xs space-y-2"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          <div>
            <span className="text-primary">❯ </span>
            <span className="text-muted-foreground">whoami</span>
          </div>
          <div className="pl-4 space-y-0.5">
            <div>
              <span className="text-primary/70">name</span>
              <span className="text-muted-foreground">: </span>
              <span className="text-cyan-300">&quot;Christian Vence&quot;</span>
            </div>
            <div>
              <span className="text-primary/70">role</span>
              <span className="text-muted-foreground">: </span>
              <span className="text-cyan-300">&quot;Full-Stack Developer&quot;</span>
            </div>
            <div>
              <span className="text-primary/70">status</span>
              <span className="text-muted-foreground">: </span>
              <span className="text-emerald-400">&quot;BSIT Student&quot;</span>
            </div>
          </div>
          <div className="pt-0.5">
            <span className="text-primary">❯ </span>
            <span className="text-muted-foreground">ls skills/ </span>
            <span className="text-muted-foreground/50 animate-pulse">█</span>
          </div>
          <div className="pl-4 flex flex-wrap gap-1.5 pb-1">
            {["React", "TypeScript", "Supabase", "Laravel"].map((s) => (
              <span
                key={s}
                className="px-2 py-0.5 rounded bg-primary/15 text-primary border border-primary/20"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span
        className="text-xs text-primary tracking-widest uppercase"
        style={{ fontFamily: "'Geist Mono', monospace" }}
      >
        {children}
      </span>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="min-h-screen bg-background text-foreground antialiased"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Navbar active={activeSection} />

      {/* ── HERO ── */}
      <section
        id="home"
        className="min-h-screen flex items-center pt-16 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />

        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <div className="animate-fade-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs" style={{ fontFamily: "'Geist Mono', monospace" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                BSIT Student · Available for projects
              </div>

              <div className="animate-fade-up-1 space-y-2">
                <h1
                  className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-none tracking-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Hi, I&apos;m{" "}
                  <span className="text-primary">Christian</span>
                </h1>
                <p
                  className="text-2xl sm:text-3xl font-semibold text-foreground/80"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Aspiring Full-Stack Developer
                </p>
              </div>

              <p className="animate-fade-up-2 text-base text-muted-foreground leading-relaxed max-w-lg">
                I build practical, responsive, and user-friendly web and mobile
                systems using modern technologies.
              </p>

              <div className="animate-fade-up-3 flex flex-wrap gap-3 pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
                >
                  View Projects
                  <ChevronRight size={16} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground font-semibold text-sm hover:bg-secondary hover:border-primary/40 transition-colors"
                >
                  Contact Me
                </a>
              </div>

              <div className="animate-fade-up-4 flex items-center gap-6 pt-2 text-muted-foreground">
                <a
                  href="https://github.com/seven-err"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
                >
                  <Github size={16} />
                  seven-err
                </a>
                <span className="flex items-center gap-1.5 text-sm">
                  <MapPin size={16} />
                  Philippines
                </span>
              </div>
            </div>

            <div className="relative lg:pl-8">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 relative">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>About Me</SectionLabel>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mt-8">
            <div className="space-y-6">
              <h2
                className="text-3xl sm:text-4xl font-extrabold leading-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Turning ideas into{" "}
                <span className="text-primary">working systems</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                I am a BSIT student and aspiring full-stack developer with
                experience in building web applications, mobile app prototypes,
                and database-driven systems. I enjoy learning through real
                projects and improving systems based on user needs.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                From crafting pixel-perfect UIs in React to designing relational
                schemas in Supabase and MySQL, I aim to ship solutions that are
                both technically solid and genuinely useful.
              </p>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
              >
                See my projects <ChevronRight size={16} />
              </a>
            </div>

            <div className="grid gap-4">
              {[
                {
                  icon: <Code2 size={22} className="text-primary" />,
                  title: "Full-Stack Development",
                  desc: "Building end-to-end web apps from database schema to responsive frontend — React, Laravel, Node.js, and beyond.",
                },
                {
                  icon: <Database size={22} className="text-primary" />,
                  title: "Database Systems",
                  desc: "Designing and querying relational and real-time databases with MySQL, SQLite, and Supabase.",
                },
                {
                  icon: <Smartphone size={22} className="text-primary" />,
                  title: "Mobile App Prototypes",
                  desc: "Building cross-platform mobile experiences using React Native and Expo for iOS and Android.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="flex gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors group"
                >
                  <div className="mt-0.5 flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    {card.icon}
                  </div>
                  <div>
                    <h3
                      className="font-semibold text-base text-foreground mb-1"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="py-24 bg-secondary/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>Skills</SectionLabel>

          <div className="mt-8 mb-12">
            <h2
              className="text-3xl sm:text-4xl font-extrabold"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Technologies I work with
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {SKILLS.map((group) => (
              <div
                key={group.category}
                className="p-6 rounded-xl bg-card border border-border"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Terminal size={14} className="text-primary" />
                  <span
                    className="text-xs text-primary tracking-widest uppercase"
                    style={{ fontFamily: "'Geist Mono', monospace" }}
                  >
                    {group.category}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-md text-sm bg-secondary text-foreground border border-border hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-colors cursor-default"
                      style={{ fontFamily: "'Geist Mono', monospace" }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>Projects</SectionLabel>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mt-8 mb-12">
            <h2
              className="text-3xl sm:text-4xl font-extrabold"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Projects I&apos;ve Built
            </h2>
            <a
              href="https://github.com/seven-err"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={16} />
              View on GitHub
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <div
                key={project.name}
                className="flex flex-col rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 overflow-hidden group"
              >
                <div
                  className={`h-36 bg-gradient-to-br ${project.color} flex items-center justify-center border-b border-border relative overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 50% 120%, #22d3ee, transparent 60%)" }} />
                  {project.name === "Pulse" ? (
                    <ImageWithFallback
                      src={pulseScreenshot}
                      alt="Pulse app screenshot"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                  ) : (
                    <span className="text-5xl relative z-10">{project.icon}</span>
                  )}
                </div>

                <div className="flex flex-col flex-1 p-5 gap-3">
                  <h3
                    className="text-lg font-bold text-foreground"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 rounded bg-secondary text-muted-foreground border border-border"
                        style={{ fontFamily: "'Geist Mono', monospace" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {project.wip ? (
                    <span
                      className="mt-2 inline-flex items-center gap-2 text-xs px-2.5 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 self-start"
                      style={{ fontFamily: "'Geist Mono', monospace" }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                      Under Development
                    </span>
                  ) : (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      View Project <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section id="education" className="py-24 bg-secondary/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>Education</SectionLabel>

          <div className="mt-8 mb-12">
            <h2
              className="text-3xl sm:text-4xl font-extrabold"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Academic background
            </h2>
          </div>

          <div className="max-w-2xl">
            <div className="flex gap-5 p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <GraduationCap size={24} className="text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3
                      className="font-bold text-lg text-foreground"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      Bachelor of Science in Information Technology
                    </h3>
                    <p className="text-muted-foreground text-sm mt-0.5">
                      College of Computer Studies
                    </p>
                  </div>
                  <span
                    className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs whitespace-nowrap self-start"
                    style={{ fontFamily: "'Geist Mono', monospace" }}
                  >
                    4th Year Student
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Web Development",
                    "Database Systems",
                    "Mobile Development",
                    "System Analysis",
                  ].map((subject) => (
                    <span
                      key={subject}
                      className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground border border-border"
                      style={{ fontFamily: "'Geist Mono', monospace" }}
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>Contact</SectionLabel>

          <div className="mt-8 max-w-3xl">
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Interested in working with me
              <br />
              <span className="text-primary">or checking my projects?</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-10 max-w-xl">
              I&apos;m always open to collaboration, internship opportunities,
              or just a friendly conversation about tech. Reach out through any
              of the channels below.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              {[
                {
                  icon: <Github size={20} className="text-primary" />,
                  label: "GitHub",
                  value: "seven-err",
                  href: "https://github.com/seven-err",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" className="text-primary">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  ),
                  label: "LinkedIn",
                  value: "Vence Christian Jay",
                  href: "https://www.linkedin.com/in/vence-christian-jay-86997b2b4/",
                },
                {
                  icon: <Mail size={20} className="text-primary" />,
                  label: "Email",
                  value: "crmchs.vence.christianjay@gmail.com",
                  href: "mailto:crmchs.vence.christianjay@gmail.com",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p
                      className="text-xs text-muted-foreground mb-0.5"
                      style={{ fontFamily: "'Geist Mono', monospace" }}
                    >
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm font-medium text-foreground hover:text-primary transition-colors break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-foreground">
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="mailto:crmchs.vence.christianjay@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              <Mail size={16} />
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border py-8">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span
            className="font-bold text-foreground"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Christian<span className="text-primary">.</span>
          </span>
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Christian. Built with React &amp; TypeScript.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/seven-err"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="mailto:crmchs.vence.christianjay@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
