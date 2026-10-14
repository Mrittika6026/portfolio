"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

// ── Fade-in wrapper ──────────────────────────────────────────────
function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Section label ────────────────────────────────────────────────
function SectionLabel({ text }: { text: string }) {
  return (
    <span
      className="font-mono text-xs tracking-widest uppercase"
      style={{ color: "var(--accent)" }}
    >
      {text}
    </span>
  );
}

// ── Nav ──────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["News", "Journey", "Research", "Projects", "Experience", "Contact"];

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled ? "rgba(250,250,248,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
        <span className="font-mono text-sm" style={{ color: "var(--accent)", fontWeight: 500 }}>MR</span>
        <div style={{ display: "flex", gap: "2rem" }}>
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm"
              style={{ color: "var(--muted)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

// ── Hero ─────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "6rem 2rem 4rem", maxWidth: 960, margin: "0 auto" }}>
      <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
        <SectionLabel text="AI Researcher · Bangladesh" />
        <img
          src="/photo.jpeg"
          alt="Mrittika Roy"
          style={{ width: 200, height: 200, borderRadius: "50%", objectFit: "cover", marginTop: "1rem", marginBottom: "1.5rem", border: "2px solid var(--border)" }}
        />
        <h1 className="font-display" style={{ fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 1.05, marginTop: "1rem", color: "var(--ink)" }}>
          Mrittika Roy
        </h1>
        <p style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)", color: "var(--muted)", maxWidth: 600, marginTop: "1.5rem", lineHeight: 1.6 }}>
          I build systems that understand the world across modalities — images, language, and the space between them.
        </p>
        <p style={{ fontSize: "1rem", color: "var(--muted)", maxWidth: 560, marginTop: "1rem", lineHeight: 1.7 }}>
          Computer Vision · Multimodal AI · LLMs · RAG · Explainable AI
        </p>
        <div style={{ display: "flex", gap: "1rem", marginTop: "2.5rem", flexWrap: "wrap" }}>
          <a
            href="#contact"
            style={{ background: "var(--accent)", color: "#fff", padding: "0.75rem 1.75rem", borderRadius: 4, textDecoration: "none", fontSize: "0.9rem", fontWeight: 500, transition: "opacity 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Get in touch
          </a>
          <a
            href="/CV_Mrittika_Roy.pdf"
            target="_blank"
            style={{ border: "1px solid var(--border)", color: "var(--ink)", padding: "0.75rem 1.75rem", borderRadius: 4, textDecoration: "none", fontSize: "0.9rem", fontWeight: 400, transition: "border-color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
          >
            Download CV
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)" }}
      >
        <div style={{ width: 1, height: 48, background: "var(--accent)", opacity: 0.4, margin: "0 auto" }} />
      </motion.div>
    </section>
  );
}

// ── News ─────────────────────────────────────────────────────────
function News() {
  const items = [
    {
      date: "Oct 2026",
      text: "Achieved IELTS overall band 7.0, with no band below 6.5.",
      link: "/CV_Mrittika_Roy.pdf",
      linkLabel: "Updated CV",
    },
  ];

  return (
    <section id="news" style={{ padding: "6rem 2rem", maxWidth: 960, margin: "0 auto" }}>
      <FadeIn>
        <SectionLabel text="News" />
        <h2 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginTop: "0.75rem", marginBottom: "2rem" }}>
          Recent updates
        </h2>
      </FadeIn>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {items.map((n, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div style={{ display: "flex", gap: "2rem", alignItems: "baseline" }}>
              <span className="font-mono text-xs" style={{ color: "var(--accent)", fontWeight: 500, minWidth: 64 }}>{n.date}</span>
              <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "0.95rem" }}>
                {n.text}{" "}
                <a href={n.link} target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", textDecoration: "none", fontWeight: 500 }}>
                  {n.linkLabel} →
                </a>
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ── Journey ──────────────────────────────────────────────────────
function Journey() {
  const milestones = [
    {
      year: "2023",
      label: "The Question Arrives",
      text: "In my final year at RUET, two courses changed everything. Digital Image Processing showed me what an image actually is — not pixels, but information encoded in spatial frequencies, histograms, and gradients. Neural Networks showed me how a machine could learn to see. I was sitting with both at the same time, and a question formed: what if we stopped treating vision and language as separate problems?",
    },
    {
      year: "2024",
      label: "First Research",
      text: "My undergraduate thesis became my first real experiment bridging two modalities — generating images from text using GAN and XLNet. I learned what it means to work at the intersection: the text must be understood deeply before the image can exist. Then a published paper on sentiment analysis of the Israel-Palestine conflict through Reddit showed me that AI could be pointed at real, difficult problems in the world.",
    },
    {
      year: "2024",
      label: "Going Deeper",
      text: "The BGCA-Fusion project was the most demanding research I had done. We fused mammography images and clinical text reports using CNN, ViT, and LLMs to diagnose breast cancer. The model worked well. But as I looked at what it was doing, I realised I could not fully explain why. That gap — between a model performing and a model being understood — became a problem I could not let go of.",
    },
    {
      year: "2025",
      label: "Building While Researching",
      text: "I joined Ztrios Technologies and started shipping real systems — RAG pipelines for Bengali, fine-tuning LLMs with LoRA. In parallel, I built Dikkha AI with my team: a Bengali educational assistant for high school students that answers in their language, at their level, not in textbook voice. One student said it did not sound like ChatGPT. That was the highest compliment. I also began two new research threads: an Explainable Dual-Stage RAG system for medical Q&A, and AI-generated image detection using contrastive learning.",
    },
    {
      year: "Now",
      label: "Looking Forward",
      text: "I want to pursue a PhD in Computer Vision and Multimodal AI. Not because it is the next step on a checklist — but because the questions I am carrying cannot be answered with a job title. I want to be in a place where I can push the frontier of how multimodal systems are built and understood. I want to earn that seat.",
    },
  ];

  return (
    <section id="journey" style={{ padding: "6rem 2rem", maxWidth: 960, margin: "0 auto" }}>
      <FadeIn>
        <SectionLabel text="My Journey" />
        <h2 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginTop: "0.75rem", marginBottom: "3rem" }}>
          How I got here
        </h2>
      </FadeIn>

      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", left: 72, top: 0, bottom: 0, width: 1, background: "var(--border)" }} />

        {milestones.map((m, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div style={{ display: "flex", gap: "2rem", marginBottom: "3rem", position: "relative" }}>
              <div style={{ minWidth: 56, textAlign: "right" }}>
                <span className="font-mono text-xs" style={{ color: "var(--accent)", fontWeight: 500 }}>{m.year}</span>
              </div>
              <div
                style={{
                  position: "absolute", left: 64, top: 4,
                  width: 16, height: 16, borderRadius: "50%",
                  border: "2px solid var(--accent)",
                  background: "var(--paper)",
                  zIndex: 1,
                }}
              />
              <div style={{ paddingLeft: "2rem" }}>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: "0.5rem", color: "var(--ink)" }}>{m.label}</h3>
                <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "0.95rem" }}>{m.text}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ── Research ─────────────────────────────────────────────────────
function Research() {
  const interests = [
    { title: "Computer Vision", desc: "From classical image processing to modern vision transformers. I care about how machines perceive visual structure — texture, shape, frequency, and meaning." },
    { title: "Multimodal AI", desc: "Building systems that fuse image, text, and other modalities. The challenge is not just combining signals — it is making the fusion meaningful and robust." },
    { title: "Large Language Models", desc: "Fine-tuning, retrieval-augmented generation, and deploying LLMs in production — including for Bengali, a low-resource language." },
    { title: "Explainable AI", desc: "A model that cannot explain itself is a model you cannot trust. I am interested in interpretability as a design principle, not just a post-hoc analysis." },
    { title: "RAG Systems", desc: "Designing retrieval pipelines that go beyond keyword matching — dense search, reranking, fusion strategies for high-precision knowledge retrieval." },
  ];

  const papers = [
    {
      title: "BGCA-Fusion: Bidirectional Gated Cross-Attention for Multimodal Breast Cancer Diagnosis",
      venue: "Under review — Advanced Intelligent Systems (Wiley, IF 6.1)",
      desc: "Fused mammography image features (CNN + ViT) with clinical text (LLM) using bidirectional gated cross-attention. Validated with zero-shot cross-dataset generalisation and domain adaptation across three datasets.",
      tags: ["Multimodal", "Medical AI", "ViT", "XAI"],
      status: "under-review",
    },
    {
      title: "Public Sentiment Analysis of the Israel-Palestine Conflict: A Reddit-Based Study",
      venue: "Published — IEEE",
      desc: "Hybrid RoBERTa + Bi-LSTM model trained on VADER-labeled Reddit data. Ablation study against DistilBERT and Logistic Regression baselines.",
      tags: ["NLP", "Sentiment Analysis", "RoBERTa"],
      status: "published",
      link: "https://ieeexplore.ieee.org/abstract/document/11172186",
    },
    {
      title: "Explainable Dual-Stage RAG for Medical Q&A",
      venue: "Ongoing Research",
      desc: "Separates rationale generation from evidence-based synthesis using Mistral-7B/LLaMA-3. Retrieval pipeline: Contriever dense search + BM25, fused via Reciprocal Rank Fusion and Cross-Encoder reranking.",
      tags: ["RAG", "Medical AI", "XAI", "LLM"],
      status: "ongoing",
    },
    {
      title: "AI-Generated Image Detection Using Contrastive Learning",
      venue: "Ongoing Research",
      desc: "Real/fake image dataset built from MSCOCO. Training contrastive learning with frequency domain features and SupCon loss. Cross-dataset validation for production generalisation.",
      tags: ["Computer Vision", "Contrastive Learning", "Deepfake Detection"],
      status: "ongoing",
    },
    {
      title: "Text-to-Image Generation Using GAN Based on XLNet",
      venue: "Undergraduate Thesis — RUET",
      desc: "Used XLNet's permutation-based modeling for high-dimensional linguistic feature extraction. Implemented DF-GAN for high-fidelity image synthesis from textual feature maps.",
      tags: ["GAN", "NLP", "Multimodal"],
      status: "thesis",
    },
  ];

  const statusStyle: Record<string, React.CSSProperties> = {
    published: { background: "var(--accent-light)", color: "var(--accent)" },
    "under-review": { background: "#fff3cd", color: "#856404" },
    ongoing: { background: "#e8f0fe", color: "#3a5cbf" },
    thesis: { background: "var(--surface)", color: "var(--muted)" },
  };
  const statusLabel: Record<string, string> = {
    published: "Published",
    "under-review": "Under Review",
    ongoing: "Ongoing",
    thesis: "Thesis",
  };

  return (
    <section id="research" style={{ padding: "6rem 2rem", background: "var(--surface)" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <FadeIn>
          <SectionLabel text="Research" />
          <h2 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginTop: "0.75rem", marginBottom: "3rem" }}>
            What I work on
          </h2>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.25rem", marginBottom: "4rem" }}>
          {interests.map((item, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div style={{ background: "var(--paper)", border: "1px solid var(--border)", borderRadius: 8, padding: "1.5rem" }}>
                <h3 style={{ fontWeight: 600, fontSize: "0.95rem", marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: "0.875rem", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <h3 style={{ fontWeight: 600, fontSize: "1.05rem", marginBottom: "1.5rem" }}>Papers & Research Projects</h3>
        </FadeIn>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {papers.map((p, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <div style={{ background: "var(--paper)", border: "1px solid var(--border)", borderRadius: 8, padding: "1.5rem 1.75rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
                  <div style={{ flex: 1, minWidth: 200 }}>
                    <h4 style={{ fontWeight: 600, fontSize: "0.95rem", lineHeight: 1.5, marginBottom: "0.35rem" }}>
                      {p.link ? <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", textDecoration: "none" }}>{p.title}</a> : p.title}
                    </h4>
                    <p className="font-mono text-xs" style={{ color: "var(--muted)", marginBottom: "0.75rem" }}>{p.venue}</p>
                    <p style={{ color: "var(--muted)", fontSize: "0.875rem", lineHeight: 1.7 }}>{p.desc}</p>
                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "0.75rem" }}>
                      {p.tags.map((t) => (
                        <span key={t} style={{ fontSize: "0.75rem", padding: "0.2rem 0.6rem", borderRadius: 100, background: "var(--accent-light)", color: "var(--accent)" }}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <span style={{ ...statusStyle[p.status], fontSize: "0.72rem", fontWeight: 600, padding: "0.3rem 0.75rem", borderRadius: 100, whiteSpace: "nowrap" }}>
                    {statusLabel[p.status]}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Projects ─────────────────────────────────────────────────────
function Projects() {
  const projects = [
    {
      name: "Dikkha AI",
      tagline: "Bengali AI study assistant for high school students",
      desc: "Curriculum-aligned Q&A app covering 20+ NCTB subjects. Subject-aware query-rewriting agent, RAG-based retrieval, and answers that students say feel like a friend explaining — not a textbook.",
      stack: ["Python", "FastAPI", "Supabase", "Gemini", "GCP"],
      link: "https://play.google.com/store/apps/details?id=com.dikkhaai.app&pli=1",
      linkLabel: "Play Store",
    },
    {
      name: "Chhar — Scraper Agent",
      tagline: "Automated discount discovery across Dhaka",
      desc: "Web scraping agent that finds retail discount offers, extracts and structures them using LLMs, and publishes enriched data to a production backend API.",
      stack: ["Tavily", "Firecrawl", "Gemini", "Google Maps API", "FastAPI"],
      link: "https://play.google.com/store/apps/details?id=dev.neuronfish.chhar&hl=en",
      linkLabel: "Play Store",
    },
    {
      name: "Visual Search",
      tagline: "CPU-friendly catalog image search",
      desc: "Feature extraction with DINOv2 ViT-B/14, similarity retrieval with FAISS, and optional text-guided filtering and zero-shot object cropping via OWL-ViT.",
      stack: ["DINOv2", "FAISS", "OWL-ViT", "FastAPI", "spaCy"],
      link: "https://github.com/Mrittika6026/visual_search",
      linkLabel: "GitHub",
    },
  ];

  return (
    <section id="projects" style={{ padding: "6rem 2rem", maxWidth: 960, margin: "0 auto" }}>
      <FadeIn>
        <SectionLabel text="Projects" />
        <h2 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginTop: "0.75rem", marginBottom: "3rem" }}>
          Things I have built
        </h2>
      </FadeIn>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
        {projects.map((p, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div style={{ border: "1px solid var(--border)", borderRadius: 8, padding: "1.75rem", display: "flex", flexDirection: "column", height: "100%" }}>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{p.name}</h3>
                <p style={{ color: "var(--accent)", fontSize: "0.82rem", fontWeight: 500, marginBottom: "0.75rem" }}>{p.tagline}</p>
                <p style={{ color: "var(--muted)", fontSize: "0.875rem", lineHeight: 1.75, marginBottom: "1rem" }}>{p.desc}</p>
                <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
                  {p.stack.map((s) => (
                    <span key={s} className="font-mono" style={{ fontSize: "0.72rem", padding: "0.2rem 0.55rem", borderRadius: 4, background: "var(--surface)", color: "var(--muted)" }}>{s}</span>
                  ))}
                </div>
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "0.85rem", color: "var(--accent)", textDecoration: "none", fontWeight: 500 }}
              >
                {p.linkLabel} →
              </a>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ── Experience ───────────────────────────────────────────────────
function Experience() {
  const roles = [
    {
      company: "Ztrios Technologies Ltd.",
      role: "AI Developer",
      period: "Sep 2025 — Sep 2026",
      points: [
        "Built RAG pipelines with Bengali language support for production AI applications",
        "Fine-tuned Qwen3-4B using PEFT (LoRA, rank 16) for domain-specific tasks",
        "Performed data preprocessing and cleaning for noisy real-world datasets",
        "Conducted R&D on AI-driven application architectures",
      ],
    },
    {
      company: "Samsung R&D Institute Bangladesh",
      role: "Software Test Intern",
      period: "Jul 2024 — Jul 2025",
      points: [
        "Developed and executed automated UI test scripts for Samsung Notes using Selenium",
        "Contributed to a DOI for a patent based on Image Processing research",
        "Gained hands-on experience in software testing methodologies at production scale",
      ],
    },
  ];

  return (
    <section id="experience" style={{ padding: "6rem 2rem", background: "var(--surface)" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <FadeIn>
          <SectionLabel text="Experience" />
          <h2 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginTop: "0.75rem", marginBottom: "3rem" }}>
            Where I have worked
          </h2>
        </FadeIn>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {roles.map((r, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div style={{ background: "var(--paper)", border: "1px solid var(--border)", borderRadius: 8, padding: "2rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: "1rem" }}>{r.company}</h3>
                    <p style={{ color: "var(--accent)", fontSize: "0.875rem", fontWeight: 500 }}>{r.role}</p>
                  </div>
                  <span className="font-mono text-xs" style={{ color: "var(--muted)" }}>{r.period}</span>
                </div>
                <ul style={{ paddingLeft: "1.25rem" }}>
                  {r.points.map((pt, j) => (
                    <li key={j} style={{ color: "var(--muted)", fontSize: "0.875rem", lineHeight: 1.8, marginBottom: "0.25rem" }}>{pt}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div style={{ marginTop: "3rem" }}>
            <h3 style={{ fontWeight: 600, fontSize: "1rem", marginBottom: "1.25rem" }}>Education</h3>
            <div style={{ background: "var(--paper)", border: "1px solid var(--border)", borderRadius: 8, padding: "2rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
                <div>
                  <h4 style={{ fontWeight: 700, fontSize: "1rem" }}>Rajshahi University of Engineering & Technology</h4>
                  <p style={{ color: "var(--accent)", fontSize: "0.875rem", fontWeight: 500 }}>BSc in Computer Science & Engineering</p>
                  <p style={{ color: "var(--muted)", fontSize: "0.875rem", marginTop: "0.25rem" }}>CGPA: 3.66 / 4.0</p>
                </div>
                <span className="font-mono text-xs" style={{ color: "var(--muted)" }}>Feb 2019 — May 2024</span>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div style={{ marginTop: "3rem" }}>
            <h3 style={{ fontWeight: 600, fontSize: "1rem", marginBottom: "1.25rem" }}>Languages</h3>
            <div style={{ background: "var(--paper)", border: "1px solid var(--border)", borderRadius: 8, padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <h4 style={{ fontWeight: 700, fontSize: "1rem" }}>Bengali</h4>
                <p style={{ color: "var(--muted)", fontSize: "0.875rem", marginTop: "0.25rem" }}>Native</p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
                <div>
                  <h4 style={{ fontWeight: 700, fontSize: "1rem" }}>English</h4>
                  <p style={{ color: "var(--accent)", fontSize: "0.875rem", fontWeight: 500 }}>IELTS 7.0 overall</p>
                  <p style={{ color: "var(--muted)", fontSize: "0.875rem", marginTop: "0.25rem" }}>Listening 7.5 · Reading 6.5 · Writing 7.0 · Speaking 6.5</p>
                </div>
                <span className="font-mono text-xs" style={{ color: "var(--muted)" }}>Oct 2026</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ── Contact ──────────────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" style={{ padding: "6rem 2rem", maxWidth: 960, margin: "0 auto", textAlign: "center" }}>
      <FadeIn>
        <SectionLabel text="Contact" />
        <h2 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginTop: "0.75rem", marginBottom: "1rem" }}>
          Let&apos;s talk
        </h2>
        <p style={{ color: "var(--muted)", maxWidth: 480, margin: "0 auto 2.5rem", lineHeight: 1.8 }}>
          Whether you are a researcher, a potential collaborator, or a professor with an interesting problem — I would love to hear from you.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="mailto:mrittikaroy685@gmail.com" style={{ background: "var(--accent)", color: "#fff", padding: "0.75rem 1.75rem", borderRadius: 4, textDecoration: "none", fontSize: "0.9rem", fontWeight: 500 }}>
            mrittikaroy685@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/mrittika-roy-" target="_blank" rel="noopener noreferrer" style={{ border: "1px solid var(--border)", color: "var(--ink)", padding: "0.75rem 1.75rem", borderRadius: 4, textDecoration: "none", fontSize: "0.9rem" }}>
            LinkedIn
          </a>
          <a href="https://github.com/Mrittika6026" target="_blank" rel="noopener noreferrer" style={{ border: "1px solid var(--border)", color: "var(--ink)", padding: "0.75rem 1.75rem", borderRadius: 4, textDecoration: "none", fontSize: "0.9rem" }}>
            GitHub
          </a>
        </div>
      </FadeIn>
    </section>
  );
}

// ── Footer ───────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "2rem", textAlign: "center" }}>
      <p className="font-mono text-xs" style={{ color: "var(--muted)" }}>
        Mrittika Roy · Built with Next.js · {new Date().getFullYear()}
      </p>
    </footer>
  );
}

// ── Page ─────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <News />
      <Journey />
      <Research />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
