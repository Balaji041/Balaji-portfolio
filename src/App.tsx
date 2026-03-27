import { useCallback, useEffect, useState } from "react";
import { fetchResume, submitContact } from "./api";
import type { Resume } from "./types";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-cyan-500/25 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
      {children}
    </span>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="whitespace-nowrap text-sm font-medium text-cyan-400/95 transition hover:text-cyan-300"
    >
      {children}
    </a>
  );
}

export default function App() {
  const [resume, setResume] = useState<Resume | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [contact, setContact] = useState({ name: "", email: "", message: "" });
  const [contactStatus, setContactStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [contactErr, setContactErr] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetchResume()
      .then((data) => {
        if (!cancelled) setResume(data);
      })
      .catch(() => {
        if (!cancelled) setLoadError("Could not reach the API. Start the backend or set VITE_API_URL.");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const onSubmitContact = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setContactErr(null);
      setContactStatus("sending");
      try {
        await submitContact(contact);
        setContactStatus("ok");
        setContact({ name: "", email: "", message: "" });
      } catch (err) {
        setContactStatus("err");
        setContactErr(err instanceof Error ? err.message : "Something went wrong");
      }
    },
    [contact]
  );

  if (!resume && !loadError) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="font-mono text-sm text-slate-500">Loading profile…</p>
      </div>
    );
  }

  if (loadError || !resume) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
        <p className="max-w-md text-slate-400">{loadError}</p>
        <code className="rounded-lg border border-surface-muted bg-surface-card px-4 py-2 font-mono text-xs text-cyan-200">
          cd server && npm install && npm run dev
        </code>
      </div>
    );
  }

  const { profile, experience, education, skills, certifications } = resume;

  return (
    <div className="relative mx-auto min-h-screen max-w-5xl px-4 pb-24 pt-8 sm:px-6 lg:px-8">
      <header className="mb-16 flex flex-col gap-8 border-b border-slate-800/80 pb-10 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
        <div className="min-w-0 flex-1">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-cyan-400/90">
            Portfolio
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-lg text-cyan-200/90 sm:text-xl">{profile.title}</p>
          <div className="mt-4 flex max-w-xl flex-col gap-2">
            <div className="flex flex-wrap gap-2">
              <Pill>{profile.location}</Pill>
              <Pill>{profile.email}</Pill>
              <Pill>{profile.phone}</Pill>
            </div>
            <div className="flex flex-wrap gap-2">
              <Pill>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-inherit underline-offset-2 hover:underline"
                >
                  LinkedIn
                </a>
              </Pill>
              <Pill>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-inherit underline-offset-2 hover:underline"
                >
                  GitHub
                </a>
              </Pill>
            </div>
          </div>
        </div>

        <nav
          className="flex shrink-0 max-w-full flex-nowrap items-center justify-end gap-x-4 overflow-x-auto pb-0.5 text-xs sm:gap-x-5 sm:text-sm md:gap-x-6"
          aria-label="Page sections"
        >
          <NavLink href="#about">About</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
      </header>

      <section id="about" className="mb-20 scroll-mt-24">
        <h2 className="mb-4 font-mono text-sm uppercase tracking-widest text-slate-500">
          Summary
        </h2>
        <p className="max-w-3xl text-lg leading-relaxed text-slate-300">{profile.summary}</p>
      </section>

      <section id="experience" className="mb-20 scroll-mt-24">
        <h2 className="mb-10 font-mono text-sm uppercase tracking-widest text-slate-500">
          Experience
        </h2>
        <div className="relative space-y-12 border-l border-slate-800 pl-8">
          {experience.map((job) => (
            <article key={`${job.company}-${job.period}`} className="relative">
              <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full border-2 border-cyan-400 bg-surface shadow-[0_0_12px_rgba(34,211,238,0.5)]" />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                <time className="font-mono text-sm text-cyan-400/80">{job.period}</time>
              </div>
              <p className="mt-1 text-slate-400">
                {job.company}
                <span className="text-slate-600"> · </span>
                {job.location}
              </p>
              <ul className="mt-4 list-inside list-disc space-y-2 text-slate-400 marker:text-cyan-600">
                {job.highlights.map((h, idx) => (
                  <li key={idx} className="pl-1 leading-relaxed">
                    {h}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="mb-20 scroll-mt-24">
        <h2 className="mb-8 font-mono text-sm uppercase tracking-widest text-slate-500">
          Technical skills
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800/80 bg-surface-card/80 p-6 backdrop-blur">
            <h3 className="mb-3 font-mono text-xs uppercase text-cyan-500">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-800/80 bg-surface-card/80 p-6 backdrop-blur">
            <h3 className="mb-3 font-mono text-xs uppercase text-cyan-500">Web</h3>
            <div className="flex flex-wrap gap-2">
              {skills.web.map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-800/80 bg-surface-card/80 p-6 backdrop-blur md:col-span-2">
            <h3 className="mb-3 font-mono text-xs uppercase text-cyan-500">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="mb-20 scroll-mt-24">
        <h2 className="mb-8 font-mono text-sm uppercase tracking-widest text-slate-500">
          Education & certifications
        </h2>
        <div className="space-y-8">
          {education.map((ed) => (
            <div
              key={ed.degree}
              className="rounded-2xl border border-slate-800/80 bg-surface-card/80 p-6 backdrop-blur"
            >
              <h3 className="text-lg font-semibold text-white">{ed.degree}</h3>
              <p className="mt-1 text-slate-400">
                {ed.school} · {ed.location}
              </p>
              <p className="mt-2 font-mono text-sm text-cyan-400/80">{ed.period}</p>
              <p className="mt-2 text-slate-500">{ed.detail}</p>
            </div>
          ))}
          <div className="rounded-2xl border border-slate-800/80 bg-surface-card/80 p-6 backdrop-blur">
            <h3 className="mb-4 font-mono text-xs uppercase text-cyan-500">Certifications</h3>
            <ul className="grid gap-2 sm:grid-cols-2">
              {certifications.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-slate-400">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" aria-hidden />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24">
        <h2 className="mb-2 font-mono text-sm uppercase tracking-widest text-slate-500">
          Get in touch
        </h2>
        <p className="mb-8 max-w-xl text-slate-400">
          Messages are sent to the API (<span className="font-mono text-cyan-600">POST /api/contact</span>
          ). Wire email or a database in production.
        </p>
        <form
          onSubmit={onSubmitContact}
          className="max-w-xl space-y-4 rounded-2xl border border-slate-800/80 bg-surface-card/80 p-6 backdrop-blur"
        >
          <div>
            <label htmlFor="name" className="mb-1 block text-sm text-slate-500">
              Name
            </label>
            <input
              id="name"
              required
              value={contact.name}
              onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))}
              className="w-full rounded-lg border border-slate-700 bg-surface/50 px-3 py-2 text-white outline-none ring-cyan-500/30 focus:ring-2"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm text-slate-500">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={contact.email}
              onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
              className="w-full rounded-lg border border-slate-700 bg-surface/50 px-3 py-2 text-white outline-none ring-cyan-500/30 focus:ring-2"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm text-slate-500">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={contact.message}
              onChange={(e) => setContact((c) => ({ ...c, message: e.target.value }))}
              className="w-full resize-y rounded-lg border border-slate-700 bg-surface/50 px-3 py-2 text-white outline-none ring-cyan-500/30 focus:ring-2"
            />
          </div>
          {contactErr && <p className="text-sm text-rose-400">{contactErr}</p>}
          {contactStatus === "ok" && (
            <p className="text-sm text-emerald-400">Thanks — your message was received.</p>
          )}
          <button
            type="submit"
            disabled={contactStatus === "sending"}
            className="rounded-lg bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-surface transition hover:bg-cyan-400 disabled:opacity-50"
          >
            {contactStatus === "sending" ? "Sending…" : "Send message"}
          </button>
        </form>
      </section>

      <footer className="mt-24 border-t border-slate-800/80 pt-8 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} {profile.name}. Built with React + Vite + Express.
      </footer>
    </div>
  );
}
