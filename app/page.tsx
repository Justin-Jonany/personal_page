'use client';

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  MapPin,
  Sparkles,
  Brain,
  Code,
  Database,
  Zap,
  Award,
  Briefcase,
  ExternalLink,
  Coffee,
  Dumbbell,
  ChefHat,
  GraduationCap,
  Medal,
  Users,
  Command,
  type LucideIcon
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { BrewMethod, Tea, TeaCategory, TeaRatio } from "@/lib/data/tea-data";

const themaHighlights: React.ReactNode[] = [
  <>
    Engineered end-to-end data enrichment pipelines using SERP APIs, web scraping, and LLMs for{" "}
    <strong>6M+ product and company data</strong>
  </>,
  <>Lead development of AI-powered acquisition target ranker using <strong>multi-agent systems</strong></>,
  <>
    Performed topic modeling and dimensionality reduction (UMAP) to standardize{" "}
    <strong>10M+ data points</strong>
  </>,
  <>
    Developed statistical revenue prediction models with <strong>95% confidence bounds 20% tighter</strong> than
    traditional providers
  </>,
  <>
    Built concurrent company search engine that identifies <strong>3x more relevant companies than OpenAI</strong>{" "}
    while being <strong>4x faster and 10x cheaper</strong>
  </>,
  
];

const oscHighlights: React.ReactNode[] = [
  <>
    Developed graph-based algorithm to identify <strong>500+ suspicious trader groups among 20M+ individuals</strong>
  </>,
  <>
    Engineered hybrid pipeline combining NLP, OCR, LLM, and RAG with <strong>95% accuracy</strong>
  </>,
  <>Led development of LLM evaluation frameworks based on academic papers</>
];

const altoHighlights: React.ReactNode[] = [
  <>
    Increased customer engagement by <strong>30% in three months</strong> by leading design and implementation of a
    responsive 10+ page React web experience.
  </>,
  <>
    Partnered with creative and project teams to iterate on UX flows, driving a noticeable rise in customer inquiries
    and conversions.
  </>
] as const;

const flareHighlights: React.ReactNode[] = [
  <>Developed advanced RAG architecture based on research paper, specializing in long-form text generation</>,
  <>
    <strong>Reduced LLM hallucinations by 80%</strong> through statistical analyses
  </>,
  <>
    Increased accuracy of traditional LLM PDF extraction from <strong>91% to 97%</strong>
  </>
];

const indoFoodNetHighlights: React.ReactNode[] = [
  <>
    Achieved a <strong>94% F1-score</strong> on Indonesian Padang food Image classification.
  </>,
  <>
    Boosted baseline accuracy by <strong>4%</strong> after fine-tuning TensorFlow Hub&apos;s EfficientNetV2 feature extractor.
  </>,
  <>Engineered data augmentation pipeline to stretch sixty image per class training data.</>
] as const;

const autoPartnerHighlights: React.ReactNode[] = [
  <>
    Built a car sales forecasting system that blends classical ML models with custom neural network.
  </>,
  <>
    Implemented forward/backward passes and gradient descent enitrely from sctach, without TensorFlow or PyTorch, to create a <strong>blending model</strong>.
  </>,
  <>
    Achieved 7.6% MAPE—35% better than best Scikit-Learn models—using MLP/DNN architectures with ReLU/Leaky ReLU.
  </>
] as const;

const sciDigestHighlights: React.ReactNode[] = [
  <>Multi-input deep learning model for structuring scientific abstracts based on research paper</>,
  <>
    <strong>40% faster training</strong> on PubMed 200k RCT dataset with 2M sentences through optimization.
  </>,
  <>
    <strong>90% accuracy</strong> with modified Bi-LSTM with token, character, and positional embeddings.
  </>
];

const covidPhyloHighlights: React.ReactNode[] = [
  <>
    Constructed phylogenetic trees from Southeast Asian SARS-CoV-2 genomes using NCBI GenBank datasets and MEGA X
    workflows.
  </>,
  <>
    Applied the <strong>Kimura 2-parameter model</strong> with maximum likelihood inference and{" "}
    <strong>1,000 bootstrap replications</strong> to validate evolutionary relationships.
  </>,
  <>
    Mapped viral mutation patterns and geographic spread, revealing Vietnam&apos;s variant most similar to the Wuhan
    reference while Thailand diverged across eight months.
  </>,
  <>
    Recognized with a <strong>Gold Award at LIVI 2022</strong>.
  </>
] as const;

const PROJECT_THEMES = {
  sky: {
    card: "hover:border-sky-500/40 hover:shadow-2xl hover:shadow-sky-500/20",
    badge: "border-sky-500/40 bg-slate-900/50 text-sky-200",
    title: "group-hover:text-sky-300",
    date: "text-sky-300",
    icon: "text-sky-400",
    link: "hover:border-sky-500 hover:text-sky-400"
  },
  purple: {
    card: "hover:border-purple-400/40 hover:shadow-2xl hover:shadow-purple-500/20",
    badge: "border-purple-400/40 bg-slate-900/50 text-purple-200",
    title: "group-hover:text-purple-300",
    date: "text-purple-300",
    icon: "text-purple-300",
    link: "hover:border-purple-400 hover:text-purple-300"
  },
  indigo: {
    card: "hover:border-indigo-400/40 hover:shadow-2xl hover:shadow-indigo-500/20",
    badge: "border-indigo-400/40 bg-slate-900/50 text-indigo-200",
    title: "group-hover:text-indigo-300",
    date: "text-indigo-300",
    icon: "text-indigo-300",
    link: "hover:border-indigo-400 hover:text-indigo-300"
  },
  emerald: {
    card: "hover:border-emerald-400/40 hover:shadow-2xl hover:shadow-emerald-500/20",
    badge: "border-emerald-400/40 bg-slate-900/50 text-emerald-200",
    title: "group-hover:text-emerald-300",
    date: "text-emerald-300",
    icon: "text-emerald-300",
    link: "hover:border-emerald-400 hover:text-emerald-300"
  }
} as const;

type ProjectThemeKey = keyof typeof PROJECT_THEMES;

type ProjectImage = {
  src: string;
  alt: string;
  aspectClass?: string;
  widthClass?: string;
  fit?: "cover" | "contain";
};

type Project = {
  id: string;
  title: string;
  date: string;
  techStack: readonly string[];
  highlights: React.ReactNode[];
  accent: ProjectThemeKey;
  icon: LucideIcon;
  link?: string;
  meta?: React.ReactNode;
  spotlightLabel?: string;
  image?: ProjectImage;
};

type Experience = {
  id: string;
  role: string;
  company: string;
  date: string;
  location: string;
  techStack: readonly string[];
  highlights: React.ReactNode[];
  accent: ProjectThemeKey;
  icon: LucideIcon;
  status?: string;
};

type AccentKey = "sky" | "purple" | "emerald" | "amber";

type EducationHighlightCard = {
  id: string;
  title: string;
  value: string;
  meta?: string;
  description?: string;
  icon: LucideIcon;
  accent: AccentKey;
};

const EDUCATION_ACCENT_STYLES: Record<AccentKey, { icon: string; bar: string; badge: string }> = {
  sky: {
    icon: "text-sky-300",
    bar: "from-sky-500/50 via-sky-400/30 to-transparent",
    badge: "bg-sky-500/10 text-sky-200"
  },
  purple: {
    icon: "text-purple-300",
    bar: "from-purple-500/50 via-purple-400/30 to-transparent",
    badge: "bg-purple-500/10 text-purple-200"
  },
  emerald: {
    icon: "text-emerald-300",
    bar: "from-emerald-500/50 via-emerald-400/30 to-transparent",
    badge: "bg-emerald-500/10 text-emerald-200"
  },
  amber: {
    icon: "text-amber-300",
    bar: "from-amber-400/60 via-amber-300/30 to-transparent",
    badge: "bg-amber-400/10 text-amber-200"
  }
};

const projects: Project[] = [
  {
    id: "flare",
    title: "Forward Looking Active Retrieval Generation (FLARE)",
    date: "July 2024 – Oct 2024",
    techStack: ["Python", "NLP", "OCR", "LLM", "OpenAI", "RAG Architecture"],
    highlights: flareHighlights,
    accent: "sky",
    icon: Award,
    link: "https://github.com/Justin-Jonany/FLARE_Implementation",
    spotlightLabel: "Spotlight"
  },
  {
    id: "scidigest",
    title: "SciDigest",
    date: "Nov 2023 – Dec 2023",
    techStack: ["Python", "NLP", "Deep Learning", "Bi-LSTM", "RNN", "TensorFlow", "PyTorch"],
    highlights: sciDigestHighlights,
    accent: "sky",
    icon: Code,
    link: "https://github.com/Justin-Jonany/SciDigest",
    image: {
      src: "/images/projects/scidigest-architecture.png",
      alt: "SciDigest architecture diagram",
      aspectClass: "aspect-[6/5]",
      fit: "contain"
    }
  },
  {
    id: "covid-phylo",
    title: "Phylogenetic Analysis of COVID-19 Variants",
    date: "Feb 2022",
    techStack: ["Bioinformatics", "MEGA X", "NCBI GenBank", "Statistical Analysis", "Literature Study"],
    highlights: covidPhyloHighlights,
    accent: "emerald",
    icon: Award,
    image: {
      src: "/images/projects/phylogenetic_tree.png",
      alt: "Bioinformatics visualization of COVID-19 variants",
      aspectClass: "aspect-[6/5]",
      fit: "contain"
    }
  },
  {
    id: "indofoodnet",
    title: "IndoFoodNet",
    date: "Aug 2023 – Sept 2023",
    techStack: ["Python", "Computer Vision", "Transfer Learning", "TensorFlow", "TensorFlow"],
    highlights: indoFoodNetHighlights,
    accent: "indigo",
    icon: Award,
    link: "https://github.com/Justin-Jonany/IndoFoodNet",
    image: {
      src: "/images/projects/indofoodnet-metrics.png",
      alt: "IndoFoodNet model performance dashboard",
      aspectClass: "aspect-[6/5]",
      fit: "contain"
    }
  },
  {
    id: "autopartner",
    title: "AutoPartner",
    date: "Sept 2023",
    techStack: ["Python", "Pytorch", "Deep Learning", "Ensemble Models"],
    highlights: autoPartnerHighlights,
    accent: "purple",
    icon: Zap,
    link: "https://github.com/Justin-Jonany/AutoPartner"
  }
];

const experiences: Experience[] = [
  {
    id: "thema",
    role: "Machine Learning Research Engineer",
    company: "Thema AI",
    date: "Apr 2025 – Present",
    location: "Ottawa, ON",
    techStack: ["Python", "LanceDB", "Clustering", "HTTPX", "cuML", "Reranking", "Polars", "Jinja"],
    highlights: themaHighlights,
    accent: "sky",
    icon: Sparkles,
    status: "Current"
  },
  {
    id: "osc",
    role: "Data Science Intern",
    company: "Ontario Securities Commission (OSC)",
    date: "May 2024 – Dec 2024",
    location: "Toronto, ON",
    techStack: ["Python", "Llama3", "OpenAI", "Big Data", "Azure", "Prompt Engineering", "Pyspark"],
    highlights: oscHighlights,
    accent: "indigo",
    icon: Brain
  },
  {
    id: "alto",
    role: "Remote Web Developer",
    company: "PT Alto Sentosa",
    date: "Apr 2023 – Jul 2023",
    location: "Remote",
    techStack: ["Python", "React", "Web Development", "Front-End", "HTML/CSS", "Javascript"],
    highlights: altoHighlights,
    accent: "purple",
    icon: Code
  }
] as const;

const ProjectFeature = ({ project }: { project: Project }) => {
  const theme = PROJECT_THEMES[project.accent];
  const Icon = project.icon;

  return (
    <motion.div
      id={`project-${project.id}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Card className="group relative overflow-hidden border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 shadow-2xl shadow-slate-900/50 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01] hover:border-sky-500/60 hover:shadow-[0_25px_60px_rgba(14,165,233,0.35)]">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-sky-500/10 via-transparent to-indigo-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <CardContent className="relative flex flex-col gap-8 p-6 sm:p-8 lg:flex-row lg:items-stretch">
          <div className="flex-1 space-y-6">
            <div className="space-y-4">
              {project.spotlightLabel && (
                <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500">
                  {project.spotlightLabel}
                </p>
              )}
              <h3 className={`text-3xl font-bold text-slate-100 sm:text-4xl ${theme.title}`}>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-inherit transition-colors hover:text-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-600"
                  >
                    {project.title}
                    <ExternalLink className="h-5 w-5" />
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              <p className={`text-lg font-medium ${theme.date}`}>{project.date}</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} className={`${theme.badge} px-4 py-2 text-sm`}>
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-3">{project.meta}</div>
            </div>
            <ul className="space-y-4 text-slate-300">
              {project.highlights.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Icon className={`mt-1 h-5 w-5 flex-shrink-0 ${theme.icon}`} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          {project.image && (
            <div className={`w-full ${project.image.widthClass ?? "lg:w-5/12"}`}>
              <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/70 p-3 shadow-inner shadow-slate-950/60">
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-sky-500/5 via-transparent to-indigo-500/10" />
                <div
                  className={`relative w-full overflow-hidden rounded-2xl ${
                    project.image.aspectClass ?? "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    sizes="(min-width: 1024px) 360px, 100vw"
                    className={`${project.image.fit === "contain" ? "object-contain" : "object-cover"} object-center`}
                  />
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ExperienceFeature = ({ experience }: { experience: Experience }) => {
  const theme = PROJECT_THEMES[experience.accent];
  const Icon = experience.icon;

  return (
    <motion.div
      id={`experience-${experience.id}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Card className="group relative overflow-hidden border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 shadow-2xl shadow-slate-900/50 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01] hover:border-sky-500/60 hover:shadow-[0_25px_60px_rgba(14,165,233,0.35)]">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-sky-500/10 via-transparent to-indigo-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <CardContent className="relative flex flex-col gap-6 p-6 sm:gap-8 sm:p-8 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-4">
            {experience.status && (
              <Badge className={`w-fit border px-4 py-1 text-xs tracking-[0.3em] ${theme.badge}`}>{experience.status}</Badge>
            )}
            <h3 className={`text-3xl font-bold text-slate-100 sm:text-4xl ${theme.title}`}>
              {experience.role}
            </h3>
            <p className={`text-lg font-medium ${theme.date}`}>{experience.company}</p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <MapPin className={`h-4 w-4 ${theme.icon}`} />
                {experience.location}
              </span>
              <span>{experience.date}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {experience.techStack.map((tech) => (
                <Badge key={tech} className={`${theme.badge} px-4 py-2 text-sm`}>
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <ul className="space-y-4 text-slate-300">
              {experience.highlights.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Icon className={`mt-1 h-5 w-5 flex-shrink-0 ${theme.icon}`} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "focus", label: "Focus" },
  { id: "coursework", label: "Coursework" },
  { id: "hobbies", label: "Hobbies" }
] as const;

const SECTION_HIGHLIGHTS: Record<(typeof navItems)[number]["id"], string> = {
  hero: "Machine Learning Research Engineer",
  about: "Story-Driven Builder",
  experience: "Applied AI Specialist",
  projects: "Full-Stack Innovator",
  focus: "Curiosity-Fueled Researcher",
  coursework: "Data-Driven Scholar",
  hobbies: "Tea & Trail Explorer"
};

const SECTION_KEYWORD_OVERRIDES: Partial<Record<(typeof navItems)[number]["id"], string[]>> = {
  coursework: ["current"]
};

type QuickJumpCategory = "Section" | "Experience" | "Project";

type QuickJumpTarget = {
  id: string;
  elementId: string;
  label: string;
  description: string;
  type: QuickJumpCategory;
  keywords: string[];
};

const experienceQuickTargets: QuickJumpTarget[] = [
  {
    id: "experience-thema",
    elementId: "experience-thema",
    label: "Machine Learning Research Engineer · Thema AI",
    description: "Apr 2025 – Present · Ottawa, ON",
    type: "Experience",
    keywords: [
      "thema",
      "machine learning research engineer",
      "multi-agent",
      "data enrichment",
      "serp",
      "ottawa",
      "pipeline",
      "unsupervised",
      "scikit-learn",
      "current",
      "python",
      "coop",
      "co-op",
      "internship"
    ]
  },
  {
    id: "experience-osc",
    elementId: "experience-osc",
    label: "Data Science Intern · Ontario Securities Commission",
    description: "May 2024 – Dec 2024 · Toronto, ON",
    type: "Experience",
    keywords: [
      "osc",
      "ontario securities commission",
      "llm",
      "rag",
      "azure",
      "toronto",
      "llama3",
      "big data",
      "python",
      "coop",
      "co-op",
      "internship"
    ]
  },
  {
    id: "experience-alto",
    elementId: "experience-alto",
    label: "Remote Web Developer · PT Alto Sentosa",
    description: "Apr 2023 – Jul 2023 · Remote",
    type: "Experience",
    keywords: ["alto", "web developer", "react", "front-end", "remote", "ux", "marketing"]
  }
];

const QUICK_JUMP_TYPE_STYLES: Record<QuickJumpCategory, string> = {
  Section: "border-slate-700 text-slate-300",
  Experience: "border-indigo-400/50 text-indigo-200",
  Project: "border-sky-400/50 text-sky-200"
};

const hobbies = [
  {
    icon: Coffee,
    title: "Tea Enthusiast",
    description:
      "My pantry is a rotating library of lapsang souchong, pu-erh bricks, gyokuro, genmaicha, smoked earl grey... (the list keeps going)",
    image: "/images/justin-tea-cake.jpg",
    imagePosition: "center 41%",
    imageScale: 1.0
  },
  {
    icon: Dumbbell,
    title: "Gym, Running, and Hiking",
    description:
      "Me and my friend hiking in Cold Springs, New York",
    image: "/images/justin-hike.jpg",
    imagePosition: "center 60%",
    imageScale: 1
  },
  {
    icon: ChefHat,
    title: "Cooking",
    description:
      "When I miss home, I recreate some of my favorite dishes! In the picture, is a Chinese-Indonesian dish called kwetiaw goreng!",
    image: "/images/justin-pad-thai.jpg",
    imagePosition: "center",
    imageScale: 1
  }
] as const;

const academicSummary = {
  cumulativeGpa: "86.27%",
  majorAverage: "84.43%",
  standing: "Excellent Standing (All Terms)",
  honours: "Term Distinction (All Terms)",
  award: "University of Waterloo President's Scholarship of Distinction (2023)"
} as const;

const educationHighlightCards: EducationHighlightCard[] = [
  {
    id: "gpa",
    title: "GPA",
    value: academicSummary.cumulativeGpa,
    // meta: "Consistent across every term",
    icon: GraduationCap,
    accent: "sky"
  },
  {
    id: "standing",
    title: "Standing",
    value: "Term Distinction (All Terms)",
    icon: Medal,
    accent: "purple"
  },
  {
    id: "activities",
    title: "Clubs & Leadership",
    value: "",
    meta: "Basketball Intramurals, Volleyball Intramurals, Indonesian Student Association PR Lead, Board Game Designer",
    icon: Users,
    accent: "emerald"
  },
  {
    id: "scholarship",
    title: "Scholarship",
    value: "",
    meta: "University of Waterloo President's Scholarship of Distinction (2023)",
    icon: Award,
    accent: "amber"
  }
] as const;

const BREW_METHODS: BrewMethod[] = ["western", "gongfu"];

const TEA_TIMER_MIN_HEIGHT = 360;
const TEA_TIMER_MAX_HEIGHT = 720;
const TEA_TIMER_RESIZE_GUTTER = 24;
const TEA_TIMER_NAV_GAP = 12;

const BREW_METHOD_METADATA: Record<BrewMethod, { label: string; description: string }> = {
  western: { label: "Western", description: "Longer steeps · 2 g per 250 ml" },
  gongfu: { label: "Gongfu", description: "Short steeps · 6-7 g per 100 ml" }
};

const TEA_CATEGORY_LABELS: Record<TeaCategory, string> = {
  black: "Black",
  green: "Green",
  white: "White",
  yellow: "Yellow",
  oolong: "Oolong",
  "pu-erh": "Pu-erh",
  blend: "Blend"
};

const TEA_CATEGORY_BADGES: Record<TeaCategory, string> = {
  black: "border-amber-500/60 bg-amber-500/10 text-amber-100",
  green: "border-emerald-500/60 bg-emerald-500/10 text-emerald-100",
  white: "border-slate-100/50 bg-slate-50/10 text-slate-100",
  yellow: "border-yellow-400/60 bg-yellow-500/10 text-yellow-100",
  oolong: "border-orange-400/60 bg-orange-500/10 text-orange-100",
  "pu-erh": "border-rose-500/60 bg-rose-500/10 text-rose-100",
  blend: "border-sky-400/60 bg-sky-500/10 text-sky-100"
};

const formatDurationLabel = (durationSeconds?: number) => {
  if (typeof durationSeconds !== "number" || durationSeconds <= 0) {
    return "--";
  }

  if (durationSeconds % 60 === 0) {
    return `${durationSeconds / 60} min`;
  }

  if (durationSeconds > 60) {
    const minutes = (durationSeconds / 60).toFixed(1).replace(/\\.0$/, "");
    return `${minutes} min`;
  }

  return `${durationSeconds} s`;
};

const formatRatioLabel = (ratio?: TeaRatio) => {
  if (!ratio) {
    return "--";
  }

  return `${ratio.teaGrams} g : ${ratio.waterMl} ml`;
};

const formatTemperatureLabel = (temperatureCelsius?: number) => {
  if (typeof temperatureCelsius !== "number") {
    return "--";
  }

  return `${temperatureCelsius}\u00b0C`;
};

const courseTerms = [
  {
    term: "Fall 2022 · 1A",
    gpa: "89.60%",
    courses: [
      { code: "CS 135", title: "Designing Functional Programs" },
      { code: "MATH 135", title: "Algebra for Honours Mathematics" },
      { code: "MATH 137", title: "`Calculus` 1 for Honours Mathematics" }
    ]
  },
  {
    term: "Winter 2023 · 1B",
    gpa: "86.40%",
    courses: [
      { code: "CS 136", title: "Elementary Algorithm Design and Data Abstraction" },
      { code: "MATH 136", title: "Linear Algebra 1 for Honours Mathematics" },
      { code: "MATH 138", title: "Calculus 2 for Honours Mathematics" },
      { code: "STAT 230", title: "Probability" }
    ]
  },
  {
    term: "Spring 2023 · 2A",
    gpa: "85.00%",
    courses: [
      { code: "CS 246", title: "Object-Oriented Software Development" },
      { code: "MATH 235", title: "Linear Algebra 2 for Honours Mathematics" },
      { code: "MATH 237", title: "Calculus 3 for Honours Mathematics" }
    ]
  },
  {
    term: "Winter 2024 · 2B",
    gpa: "85.40%",
    courses: [
      { code: "CS 241", title: "Foundations of Sequential Programs" },
      { code: "CS 245", title: "Logic and Computation" },
      { code: "CS 251", title: "Computer Organization and Design" },
      { code: "STAT 231", title: "Statistics" }
    ]
  },
  {
    term: "Winter 2025 · 3A",
    gpa: "84.75%",
    courses: [
      { code: "CS 240", title: "Data Structures and Data Management" },
      { code: "CS 348", title: "Introduction to Database Management" },
      { code: "MATH 239", title: "Introduction to Combinatorics" },
      { code: "STAT 331", title: "Applied Linear Models" }
    ]
  },
  {
    term: "Winter 2026 · 3B",
    gpa: "TBD",
    courses: [
      { code: "STAT 332", title: "Sampling and Experimental Design" },
      { code: "STAT 341", title: "Computational Statistics and Data Analysis" },
      { code: "CS 341", title: "Algorithms" },
      { code: "STAT 333", title: "Stochastic Processes 1" }
    ]
  }
] as const;

export default function Home() {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const [activeSection, setActiveSection] = React.useState<(typeof navItems)[number]["id"]>(navItems[0].id);
  const [isPaletteOpen, setPaletteOpen] = React.useState(false);
  const [paletteQuery, setPaletteQuery] = React.useState("");
  const paletteInputRef = React.useRef<HTMLInputElement>(null);
  const [searchCorpus, setSearchCorpus] = React.useState<Record<string, string>>({});
  const [isTeaTimerOpen, setTeaTimerOpen] = React.useState(false);
  const [teaCatalog, setTeaCatalog] = React.useState<Tea[]>([]);
  const [teaPresetId, setTeaPresetId] = React.useState<Tea["id"] | null>(null);
  const [brewMethod, setBrewMethod] = React.useState<BrewMethod>("western");
  const [teaRemaining, setTeaRemaining] = React.useState(0);
  const [isTeaRunning, setTeaRunning] = React.useState(false);
  const [teaLoading, setTeaLoading] = React.useState(true);
  const [teaError, setTeaError] = React.useState<string | null>(null);
  const [teaTimerPosition, setTeaTimerPosition] = React.useState<{ x: number; y: number } | null>(null);
  const [isTeaTimerDragging, setTeaTimerDragging] = React.useState(false);
  const [teaTimerHeight, setTeaTimerHeight] = React.useState<number | null>(null);
  const [isTeaTimerResizing, setTeaTimerResizing] = React.useState(false);
  const [teaTimerCursor, setTeaTimerCursor] = React.useState<"grab" | "grabbing" | "ns-resize">("grab");
  const [teaTimerTopBoundary, setTeaTimerTopBoundary] = React.useState(16);
  const [navBarElement, setNavBarElement] = React.useState<HTMLElement | null>(null);
  const teaTimerRef = React.useRef<HTMLDivElement>(null);
  const teaTimerScrollableRef = React.useRef<HTMLDivElement>(null);
  const dragOffsetRef = React.useRef({ x: 0, y: 0 });
  const resizeEdgeRef = React.useRef<"top" | "bottom" | null>(null);
  const resizeOffsetRef = React.useRef({ startHeight: 0, startY: 0, startTop: 0, startBottom: 0, startX: 0 });
  const navBarRef = React.useCallback((node: HTMLElement | null) => {
    setNavBarElement((current) => (current === node ? current : node));
  }, []);
  const heroHighlight = SECTION_HIGHLIGHTS[activeSection];
  const activeTea = React.useMemo(() => {
    if (!teaCatalog.length) {
      return undefined;
    }

    if (teaPresetId) {
      const found = teaCatalog.find((tea) => tea.id === teaPresetId);
      if (found) {
        return found;
      }
    }

    return teaCatalog[0];
  }, [teaCatalog, teaPresetId]);
  const activeProfile = React.useMemo(
    () => (activeTea ? activeTea.profiles[brewMethod] : undefined),
    [activeTea, brewMethod]
  );
  const teaFormattedTime = React.useMemo(() => {
    if (!activeProfile || activeProfile.durationSeconds <= 0) {
      return "--:--";
    }

    const minutes = Math.floor(teaRemaining / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (teaRemaining % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  }, [teaRemaining, activeProfile]);
  const teaProgress = React.useMemo(() => {
    if (!activeProfile || activeProfile.durationSeconds <= 0) {
      return 0;
    }

    const progressRatio = 1 - teaRemaining / activeProfile.durationSeconds;
    return Math.min(1, Math.max(0, progressRatio));
  }, [teaRemaining, activeProfile]);
  const quickJumpTargets = React.useMemo<QuickJumpTarget[]>(() => {
    const sectionTargets: QuickJumpTarget[] = navItems.map((item) => ({
      id: `section-${item.id}`,
      elementId: item.id,
      label: `${item.label}`,
      description: SECTION_HIGHLIGHTS[item.id],
      type: "Section",
      keywords: [item.label, SECTION_HIGHLIGHTS[item.id], ...(SECTION_KEYWORD_OVERRIDES[item.id] ?? [])]
    }));

    const projectTargets: QuickJumpTarget[] = projects.map((project) => ({
      id: `project-${project.id}`,
      elementId: `project-${project.id}`,
      label: project.title,
      description: `${project.date} · ${project.techStack.slice(0, 3).join(", ")}`,
      type: "Project",
      keywords: [project.title, project.date, ...project.techStack]
    }));

    return [...sectionTargets, ...experienceQuickTargets, ...projectTargets];
  }, []);

  const quickJumpResults = React.useMemo(() => {
    const query = paletteQuery.trim().toLowerCase();

    if (!query) {
      return quickJumpTargets;
    }

    const terms = query.split(/\s+/).filter(Boolean);

    return quickJumpTargets.filter((target) => {
      const haystack = `${target.label} ${target.description} ${target.keywords.join(" ")} ${
        searchCorpus[target.id] ?? ""
      }`.toLowerCase();
      return terms.every((term) => haystack.includes(term));
    });
  }, [paletteQuery, quickJumpTargets, searchCorpus]);

  React.useEffect(() => {
    let isMounted = true;

    const loadTeaCatalog = async () => {
      try {
        setTeaLoading(true);
        const response = await fetch("/api/teas");

        if (!response.ok) {
          throw new Error("Failed to fetch teas");
        }

        const payload: { teas?: Tea[] } = await response.json();
        if (!isMounted) {
          return;
        }

        const teas = [...(payload.teas ?? [])].sort((a, b) => a.name.localeCompare(b.name));
        setTeaCatalog(teas);
        setTeaError(null);
        setTeaPresetId((currentId) => {
          if (currentId && teas.some((tea) => tea.id === currentId)) {
            return currentId;
          }
          return teas[0]?.id ?? null;
        });
      } catch (error) {
        if (!isMounted) {
          return;
        }

        setTeaCatalog([]);
        setTeaPresetId(null);
        setTeaRemaining(0);
        setTeaRunning(false);
        setTeaError("Unable to load the tea library right now.");
      } finally {
        if (isMounted) {
          setTeaLoading(false);
        }
      }
    };

    void loadTeaCatalog();

    return () => {
      isMounted = false;
    };
  }, []);

  React.useEffect(() => {
    if (!activeProfile) {
      setTeaRemaining(0);
      setTeaRunning(false);
      return;
    }

    setTeaRemaining(activeProfile.durationSeconds);
    setTeaRunning(false);
  }, [activeProfile, activeTea?.id, brewMethod]);

  React.useEffect(() => {
    if (!isTeaRunning || !activeProfile) {
      return;
    }

    const interval = window.setInterval(() => {
      setTeaRemaining((prev) => {
        if (prev <= 1) {
          window.clearInterval(interval);
          setTeaRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, [isTeaRunning, activeProfile]);

  React.useEffect(() => {
    if (!isTeaTimerOpen) {
      setTeaTimerPosition(null);
      setTeaTimerDragging(false);
      setTeaTimerHeight(null);
      setTeaTimerResizing(false);
      return;
    }

    if (teaTimerHeight === null && typeof window !== "undefined") {
      setTeaTimerHeight(TEA_TIMER_MIN_HEIGHT);
    }
  }, [isTeaTimerOpen, teaTimerHeight]);

  React.useEffect(() => {
    if (!isTeaTimerOpen) {
      setTeaTimerCursor("grab");
    }
  }, [isTeaTimerOpen]);

  React.useEffect(() => {
    if (typeof window === "undefined" || !navBarElement) {
      return;
    }

    const updateBoundary = () => {
      const rect = navBarElement.getBoundingClientRect();
      setTeaTimerTopBoundary(Math.max(16, rect.bottom + TEA_TIMER_NAV_GAP));
    };

    updateBoundary();

    const handleResize = () => updateBoundary();
    window.addEventListener("resize", handleResize);

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(updateBoundary);
      resizeObserver.observe(navBarElement);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      resizeObserver?.disconnect();
    };
  }, [navBarElement]);

  React.useEffect(() => {
    if (!isTeaTimerDragging) {
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (!teaTimerRef.current) {
        return;
      }

      const rect = teaTimerRef.current.getBoundingClientRect();
      const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);
      const nextX = clamp(
        event.clientX - dragOffsetRef.current.x,
        16,
        Math.max(16, window.innerWidth - rect.width - 16)
      );
      const nextY = clamp(
        event.clientY - dragOffsetRef.current.y,
        teaTimerTopBoundary,
        Math.max(teaTimerTopBoundary, window.innerHeight - rect.height - 8)
      );
      setTeaTimerPosition({ x: nextX, y: nextY });
    };

    const handlePointerUp = () => {
      setTeaTimerDragging(false);
      setTeaTimerCursor((current) => (current === "grab" ? current : "grab"));
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp, { once: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [isTeaTimerDragging, teaTimerTopBoundary]);

  React.useEffect(() => {
    if (!isTeaTimerResizing || !resizeEdgeRef.current) {
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (typeof window === "undefined") {
        return;
      }

      const { startHeight, startY, startTop, startBottom } = resizeOffsetRef.current;
      const viewportLimit = window.innerHeight - 32;

      if (resizeEdgeRef.current === "bottom") {
        const deltaY = event.clientY - startY;
        const nextHeight = Math.min(
          Math.max(startHeight + deltaY, TEA_TIMER_MIN_HEIGHT),
          Math.min(TEA_TIMER_MAX_HEIGHT, viewportLimit - (teaTimerPosition?.y ?? startTop))
        );
        setTeaTimerHeight(nextHeight);
        return;
      }

      const deltaY = event.clientY - startY;
      const nextTop = Math.min(
        Math.max(startTop + deltaY, teaTimerTopBoundary),
        startBottom - TEA_TIMER_MIN_HEIGHT
      );
      const nextHeight = Math.min(startBottom - nextTop, TEA_TIMER_MAX_HEIGHT, viewportLimit - nextTop);

      setTeaTimerPosition((current) => ({ x: current?.x ?? resizeOffsetRef.current.startX, y: nextTop }));
      setTeaTimerHeight(nextHeight);
    };

    const handlePointerUp = () => {
      setTeaTimerResizing(false);
      resizeEdgeRef.current = null;
      setTeaTimerCursor((current) => (current === "grab" ? current : "grab"));
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp, { once: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [isTeaTimerResizing, teaTimerPosition?.y, teaTimerTopBoundary]);

  React.useEffect(() => {
    if (typeof window === "undefined" || !teaTimerPosition || !isTeaTimerOpen) {
      return;
    }

    const currentHeight =
      teaTimerHeight ?? teaTimerRef.current?.getBoundingClientRect().height ?? TEA_TIMER_MIN_HEIGHT;
    const maxY = Math.max(teaTimerTopBoundary, window.innerHeight - currentHeight - 8);
    const clampedY = Math.min(Math.max(teaTimerPosition.y, teaTimerTopBoundary), maxY);

    if (clampedY !== teaTimerPosition.y) {
      setTeaTimerPosition((current) => (current ? { ...current, y: clampedY } : current));
    }
  }, [isTeaTimerOpen, teaTimerHeight, teaTimerPosition, teaTimerTopBoundary]);

  React.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const sectionEntries = navItems
      .map((item) => {
        const element = document.getElementById(item.id);
        return element ? { id: item.id, element } : null;
      })
      .filter((entry): entry is { id: (typeof navItems)[number]["id"]; element: HTMLElement } => Boolean(entry));

    if (!sectionEntries.length) {
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      let currentSection = sectionEntries[0]?.id ?? navItems[0].id;

      for (const { id, element } of sectionEntries) {
        const sectionTop = element.getBoundingClientRect().top + window.scrollY;
        if (sectionTop <= scrollPosition) {
          currentSection = id;
        }
      }

      setActiveSection((prev) => (prev === currentSection ? prev : currentSection));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);


  React.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const collectCorpus = () => {
      const next: Record<string, string> = {};
      quickJumpTargets.forEach((target) => {
        const element = document.getElementById(target.elementId);
        if (element) {
          next[target.id] = (element.textContent ?? "").toLowerCase();
        }
      });
      setSearchCorpus(next);
    };

    const raf = window.requestAnimationFrame(collectCorpus);
    return () => window.cancelAnimationFrame(raf);
  }, [quickJumpTargets]);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteOpen((prev) => !prev);
      }

      if (event.key === "Escape") {
        setPaletteOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  React.useEffect(() => {
    if (!isPaletteOpen) {
      return;
    }

    setPaletteQuery("");
    const id = window.setTimeout(() => paletteInputRef.current?.focus(), 0);
    return () => window.clearTimeout(id);
  }, [isPaletteOpen]);

  const scrollToId = React.useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const handleNavClick = React.useCallback(
    (event: React.MouseEvent<HTMLAnchorElement> | undefined, id: (typeof navItems)[number]["id"]) => {
      event?.preventDefault();
      setActiveSection(id);
      scrollToId(id);
    },
    [scrollToId]
  );

  const handlePaletteSelect = React.useCallback(
    (target: QuickJumpTarget) => {
      setPaletteOpen(false);
      scrollToId(target.elementId);
    },
    [scrollToId]
  );

  const handlePaletteInputKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter" && quickJumpResults[0]) {
        event.preventDefault();
        handlePaletteSelect(quickJumpResults[0]);
      }
    },
    [handlePaletteSelect, quickJumpResults]
  );

  const handleTeaPresetChange = React.useCallback((presetId: Tea["id"]) => {
    setTeaPresetId(presetId);
  }, []);

  const handleTeaReset = React.useCallback(() => {
    if (!activeProfile) {
      setTeaRunning(false);
      setTeaRemaining(0);
      return;
    }

    setTeaRunning(false);
    setTeaRemaining(activeProfile.durationSeconds);
  }, [activeProfile]);

  const handleTeaStartPause = React.useCallback(() => {
    if (!activeProfile || activeProfile.durationSeconds <= 0) {
      return;
    }

    if (teaRemaining === 0) {
      setTeaRemaining(activeProfile.durationSeconds);
    }

    setTeaRunning((prev) => !prev);
  }, [activeProfile, teaRemaining]);

  const getTeaTimerResizeEdge = React.useCallback((event: React.PointerEvent | PointerEvent) => {
    if (!teaTimerRef.current) {
      return null;
    }

    const rect = teaTimerRef.current.getBoundingClientRect();
    const offsetY = event.clientY - rect.top;

    if (offsetY <= TEA_TIMER_RESIZE_GUTTER) {
      return "top";
    }

    if (rect.height - offsetY <= TEA_TIMER_RESIZE_GUTTER) {
      return "bottom";
    }

    return null;
  }, []);

  const handleTeaTimerPointerHover = React.useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (isTeaTimerDragging) {
        setTeaTimerCursor((current) => (current === "grabbing" ? current : "grabbing"));
        return;
      }
      if (isTeaTimerResizing) {
        setTeaTimerCursor((current) => (current === "ns-resize" ? current : "ns-resize"));
        return;
      }

      const resizeEdge = getTeaTimerResizeEdge(event);
      const nextCursor = resizeEdge ? "ns-resize" : "grab";
      setTeaTimerCursor((current) => (current === nextCursor ? current : nextCursor));
    },
    [getTeaTimerResizeEdge, isTeaTimerDragging, isTeaTimerResizing]
  );

  const handleTeaTimerPointerLeave = React.useCallback(() => {
    if (isTeaTimerDragging || isTeaTimerResizing) {
      return;
    }

    setTeaTimerCursor((current) => (current === "grab" ? current : "grab"));
  }, [isTeaTimerDragging, isTeaTimerResizing]);

  const handleTeaTimerPointerDown = React.useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (!teaTimerRef.current) {
        return;
      }

      const resizeEdge = getTeaTimerResizeEdge(event);
      if (resizeEdge) {
        event.preventDefault();
        resizeEdgeRef.current = resizeEdge;
        const rect = teaTimerRef.current.getBoundingClientRect();
        const top = teaTimerPosition?.y ?? rect.top;
        const height = teaTimerHeight ?? rect.height;
        resizeOffsetRef.current = {
          startHeight: height,
          startY: event.clientY,
          startTop: top,
          startBottom: top + height,
          startX: teaTimerPosition?.x ?? rect.left
        };
        setTeaTimerResizing(true);
        setTeaTimerCursor((current) => (current === "ns-resize" ? current : "ns-resize"));
        return;
      }

      const target = event.target as HTMLElement | null;
      if (target?.closest("button, input, select, textarea, a")) {
        return;
      }

      event.preventDefault();
      const rect = teaTimerRef.current.getBoundingClientRect();
      dragOffsetRef.current = { x: event.clientX - rect.left, y: event.clientY - rect.top };
      setTeaTimerPosition((current) => current ?? { x: rect.left, y: rect.top });
      setTeaTimerDragging(true);
      setTeaTimerCursor("grabbing");
    },
    [getTeaTimerResizeEdge, teaTimerHeight, teaTimerPosition]
  );

  const teaTimerPositionStyle = teaTimerPosition ? { top: teaTimerPosition.y, left: teaTimerPosition.x } : undefined;
  const teaTimerScrollableStyle = React.useMemo(() => {
    if (!teaTimerHeight) {
      return undefined;
    }

    return { maxHeight: Math.max(teaTimerHeight - 140, 180) };
  }, [teaTimerHeight]);

  const teaTimerCursorStyle = React.useMemo(() => {
    if (isTeaTimerResizing) {
      return "ns-resize";
    }

    if (isTeaTimerDragging) {
      return "grabbing";
    }

    return teaTimerCursor;
  }, [isTeaTimerDragging, isTeaTimerResizing, teaTimerCursor]);

  const handleTeaTimerWheel = React.useCallback(
    (event: React.WheelEvent<HTMLDivElement>) => {
      const scrollable = teaTimerScrollableRef.current;
      const timer = teaTimerRef.current;
      if (!scrollable || !timer) {
        return;
      }

      const deltaY = event.deltaY;
      const target = event.target as HTMLElement | null;

      if (!target || !scrollable.contains(target)) {
        event.preventDefault();
        event.stopPropagation();
        return; // disable scrolling from the outer frame/padding area
      }

      const findScrollableAncestor = (element: HTMLElement | null) => {
        let current: HTMLElement | null = element;
        while (current && timer.contains(current)) {
          if (current === timer) {
            break; // the timer shell itself can't scroll, keep searching descendants only
          }

          const canScrollVertically = current.scrollHeight > current.clientHeight;
          if (canScrollVertically) {
            const canScrollUp = current.scrollTop > 0;
            const canScrollDown =
              Math.ceil(current.scrollTop + current.clientHeight) < current.scrollHeight;
            if ((deltaY < 0 && canScrollUp) || (deltaY > 0 && canScrollDown)) {
              return current;
            }
          }

          current = current.parentElement;
        }

        return null;
      };

      const scrollTarget =
        target instanceof HTMLElement ? findScrollableAncestor(target) : null;

      if (scrollTarget && scrollTarget !== scrollable) {
        return;
      }

      const canScrollUp = scrollable.scrollTop > 0;
      const canScrollDown =
        Math.ceil(scrollable.scrollTop + scrollable.clientHeight) < scrollable.scrollHeight;

      event.preventDefault();
      event.stopPropagation();

      if ((deltaY < 0 && !canScrollUp) || (deltaY > 0 && !canScrollDown)) {
        return;
      }

      scrollable.scrollTop += deltaY;
    },
    [teaTimerRef, teaTimerScrollableRef]
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-48 -left-32 h-[28rem] w-[28rem] rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full bg-indigo-500/15 blur-[140px]" />
        <div className="absolute bottom-[-20%] left-1/4 h-[36rem] w-[36rem] rounded-full bg-cyan-400/10 blur-[160px]" />
        <div className="absolute top-[55%] left-[8%] h-[22rem] w-[22rem] rounded-full bg-sky-500/12 blur-[160px]" />
        <div className="absolute top-[70%] right-[12%] h-[24rem] w-[24rem] rounded-full bg-indigo-500/12 blur-[170px]" />
        <div className="absolute top-[20%] left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[180px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_35%,rgba(96,165,250,0.08),transparent_55%),radial-gradient(circle_at_80%_25%,rgba(129,140,248,0.08),transparent_50%),radial-gradient(circle_at_40%_80%,rgba(56,189,248,0.07),transparent_52%)] mix-blend-lighten opacity-70" />
      </div>
      {isPaletteOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-start justify-center bg-slate-950/85 px-4 py-24 backdrop-blur"
          onClick={() => setPaletteOpen(false)}
        >
          <div
            className="w-full max-w-lg overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/95 shadow-2xl shadow-slate-950/50"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-800/70 px-5 py-3">
              <div>
                <p className="text-sm font-semibold text-white">Quick Jump</p>
                <p className="text-xs text-slate-400">Navigate anywhere without scrolling</p>
              </div>
              <span className="flex items-center gap-1 rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                <Command className="h-3.5 w-3.5" />
                K
              </span>
            </div>
            <div className="px-5 py-4">
              <input
                ref={paletteInputRef}
                value={paletteQuery}
                onChange={(event) => setPaletteQuery(event.target.value)}
                onKeyDown={handlePaletteInputKeyDown}
                placeholder="Search projects, experience, or keywords like RAG"
                className="w-full rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none ring-2 ring-transparent transition focus:border-sky-500/50 focus:ring-sky-500/40"
              />
            </div>
            <div className="max-h-64 overflow-y-auto border-t border-slate-800/70">
              {quickJumpResults.length ? (
                quickJumpResults.map((target) => (
                  <button
                    key={target.id}
                    onClick={() => handlePaletteSelect(target)}
                    className="flex w-full items-center justify-between gap-4 border-b border-slate-800/60 px-5 py-4 text-left text-white transition hover:bg-slate-800/60 last:border-b-0"
                  >
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-semibold">{target.label}</span>
                      <span className="text-xs text-slate-400">{target.description}</span>
                    </div>
                    <span
                      className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] ${QUICK_JUMP_TYPE_STYLES[target.type]}`}
                    >
                      {target.type}
                    </span>
                  </button>
                ))
              ) : (
                <div className="px-5 py-8 text-center text-sm text-slate-400">
                  No matches yet. Try keywords like OSC, Toronto, or AutoPartner.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {isTeaTimerOpen && (
        <div
          ref={teaTimerRef}
          onPointerDown={handleTeaTimerPointerDown}
          onPointerMove={handleTeaTimerPointerHover}
          onPointerLeave={handleTeaTimerPointerLeave}
          onWheel={handleTeaTimerWheel}
          className={`fixed ${teaTimerPosition ? "" : "bottom-0 right-6"} z-40 w-full max-w-sm overflow-hidden rounded-3xl border border-amber-500/40 bg-slate-950/95 p-6 shadow-2xl shadow-amber-500/20 backdrop-blur`}
          style={{
            ...teaTimerPositionStyle,
            height: teaTimerHeight ?? undefined,
            maxHeight: "calc(100vh - 32px)",
            cursor: teaTimerCursorStyle
          }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-amber-300/80">Tea Timer</p>
              <h3 className="mt-1 text-xl font-semibold text-white">Brew break</h3>
            </div>
            <button
              type="button"
              onClick={() => {
                setTeaTimerOpen(false);
                setTeaRunning(false);
                setTeaRemaining(activeProfile?.durationSeconds ?? 0);
              }}
              className="rounded-full border border-amber-500/40 px-2 py-1 text-xs text-amber-200 transition hover:border-amber-400"
            >
              Close
            </button>
          </div>
          <div
            ref={teaTimerScrollableRef}
            className="mt-4 space-y-4 overflow-y-auto pr-1"
            style={teaTimerScrollableStyle}
          >
            {activeTea ? (
              <div className="rounded-2xl border border-amber-400/30 bg-amber-500/10 px-4 py-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-white">{activeTea.name}</p>
                    <p className="text-xs text-amber-100/80">{activeTea.tastingNotes}</p>
                  </div>
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.3em] ${TEA_CATEGORY_BADGES[activeTea.category]}`}
                  >
                    {TEA_CATEGORY_LABELS[activeTea.category]}
                  </span>
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-slate-800/80 px-4 py-3 text-xs text-slate-400">
                {teaError ?? "Loading tea data..."}
              </div>
            )}

            <section className="rounded-2xl border border-slate-800/70 bg-slate-950/70 p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-amber-200/80">Brew method</p>
              <div className="mt-2 flex gap-2">
                {BREW_METHODS.map((method) => {
                  const metadata = BREW_METHOD_METADATA[method];
                  const isActive = brewMethod === method;
                  return (
                    <button
                      key={method}
                      type="button"
                      onClick={() => setBrewMethod(method)}
                      className={`flex-1 rounded-xl border px-3 py-2 text-left text-sm transition ${
                        isActive
                          ? "border-amber-400 bg-amber-500/20 text-amber-100"
                          : "border-slate-800 text-slate-300 hover:border-amber-400/60 hover:text-amber-50"
                      }`}
                    >
                      <p className="font-semibold">{metadata.label}</p>
                      <p className="text-[11px] text-slate-400">{metadata.description}</p>
                    </button>
                  );
                })}
              </div>
            </section>

            <section className="rounded-3xl border border-amber-500/20 bg-slate-950/80 px-4 py-5">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-amber-200/80">
                <span>{BREW_METHOD_METADATA[brewMethod].label}</span>
                <span>{formatDurationLabel(activeProfile?.durationSeconds)}</span>
              </div>
              <div className="mt-3 text-center text-4xl font-mono font-semibold text-white">{teaFormattedTime}</div>
              <p className="mt-1 text-center text-xs text-amber-200/70">{BREW_METHOD_METADATA[brewMethod].description}</p>
              <div className="mt-4 h-2 w-full rounded-full bg-slate-900/70">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-emerald-300 transition-all"
                  style={{ width: `${Math.min(100, Math.max(0, teaProgress * 100))}%` }}
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleTeaStartPause}
                  disabled={!activeProfile || activeProfile.durationSeconds <= 0}
                  className={`flex-1 rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                    !activeProfile || activeProfile.durationSeconds <= 0
                      ? "cursor-not-allowed bg-slate-900 text-slate-600"
                      : "bg-amber-500/80 text-slate-950 hover:bg-amber-400"
                  }`}
                >
                  {isTeaRunning ? "Pause" : teaRemaining === 0 ? "Restart" : "Start"}
                </button>
                <button
                  type="button"
                  onClick={handleTeaReset}
                  disabled={!activeProfile}
                  className={`ml-3 rounded-2xl border px-4 py-2 text-sm transition ${
                    activeProfile
                      ? "border-slate-700 text-slate-300 hover:border-amber-400 hover:text-amber-100"
                      : "cursor-not-allowed border-slate-800 text-slate-600"
                  }`}
                >
                  Reset
                </button>
              </div>
              {teaRemaining === 0 && activeProfile && (
                <p className="mt-3 text-center text-sm text-emerald-300">Steep complete — time to pour ✨</p>
              )}
            </section>

            <section className="rounded-2xl border border-slate-800/70 bg-slate-950/70 p-4">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.4em] text-slate-500">
                <span>Tea library</span>
                <span>{teaCatalog.length ? `${teaCatalog.length} options` : "Loading..."}</span>
              </div>
              <div className="mt-3 max-h-48 space-y-2 overflow-y-auto pr-1">
                {teaError ? (
                  <div className="rounded-2xl border border-rose-500/40 bg-rose-500/10 px-3 py-2 text-xs text-rose-200">
                    {teaError}
                  </div>
                ) : teaLoading ? (
                  <div className="rounded-2xl border border-slate-800/80 px-3 py-2 text-xs text-slate-400">
                    Loading tea rituals...
                  </div>
                ) : (
                  teaCatalog.map((tea) => {
                    const isActive = activeTea?.id === tea.id;
                    return (
                      <button
                        key={tea.id}
                        type="button"
                        onClick={() => handleTeaPresetChange(tea.id)}
                        className={`flex w-full items-start justify-between gap-3 rounded-2xl border px-3 py-2 text-left transition ${
                          isActive
                            ? "border-amber-400 bg-amber-500/15 text-white"
                            : "border-slate-800 text-slate-200 hover:border-amber-400/50 hover:text-amber-100"
                        }`}
                      >
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <p className="text-sm font-semibold">{tea.name}</p>
                            <span
                              className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.3em] ${TEA_CATEGORY_BADGES[tea.category]}`}
                            >
                              {TEA_CATEGORY_LABELS[tea.category]}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-400">{tea.tastingNotes}</p>
                        </div>
                      </button>
                    );
                  })
                )}
              </div>
            </section>
          </div>
        </div>
      )}
      <header ref={navBarRef} className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-6">
        <div className="pointer-events-auto w-full max-w-6xl rounded-2xl border border-slate-800/70 bg-slate-950/85 shadow-lg shadow-slate-900/50 backdrop-blur-xl">
          <div className="flex flex-col gap-4 px-5 py-3">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">Justin Jonany</p>
                <p className="text-sm text-slate-300">Machine Learning Research Engineer</p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setTeaTimerOpen((prev) => !prev)}
                  className="flex items-center gap-1 rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-100 transition hover:border-amber-400 hover:bg-amber-500/20"
                >
                  <Coffee className="h-3.5 w-3.5" />
                  Tea Timer
                </button>
                <button
                  type="button"
                  className="flex items-center gap-1 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-100 transition hover:border-emerald-400 hover:bg-emerald-500/20"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  Tea Agent
                </button>
                <button
                  type="button"
                  onClick={() => setPaletteOpen(true)}
                  className="flex items-center gap-1 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200 transition hover:border-sky-500/60 hover:text-white"
                >
                  Quick Jump
                  <span className="flex items-center gap-0.5 rounded-full border border-slate-700 px-1.5 py-0.5 text-[9px] text-slate-400">
                    <Command className="h-2.5 w-2.5" />
                    K
                  </span>
                </button>
              </div>
            </div>
            <nav
              className="flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-slate-400 sm:justify-start"
              aria-label="Primary"
            >
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(event) => handleNavClick(event, item.id)}
                  className={`rounded-full border px-3 py-1.5 transition-colors duration-200 ${
                    activeSection === item.id
                      ? "border-sky-500/50 bg-sky-500/15 text-white shadow-[0_0_18px_rgba(14,165,233,0.25)]"
                      : "border-transparent text-slate-400 hover:border-slate-700 hover:bg-slate-800/60 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>
      <motion.section
        id="hero"
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative flex min-h-[75vh] items-center justify-center overflow-hidden px-4 pt-28 pb-20 sm:px-6 md:pt-36 md:pb-32"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(46,134,222,0.2),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.18),transparent_65%)]" />

        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-12 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative flex w-full justify-center md:w-auto md:justify-start"
          >
            <div className="relative h-52 w-52 sm:h-64 sm:w-64 md:h-80 md:w-80">
              <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-500 via-indigo-500/70 to-purple-500/40" />
              <span className="absolute left-[10%] top-[8%] h-72 w-72 rounded-full border-[8px] border-sky-500/40" />
              <span className="absolute -right-6 bottom-10 hidden h-14 w-14 rounded-full border-[6px] border-sky-500/80 md:block" />
              <Image
                src="/images/justin-pumpkin-patch.jpg"
                alt="Justin at a pumpkin patch surrounded by pumpkins"
                fill
                sizes="(min-width: 768px) 20vw, 50vw"
                className="rounded-full object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex max-w-xl flex-col items-center gap-6 md:items-start"
          >
            <Badge className="flex items-center gap-2 border-sky-500/60 bg-slate-900/40 px-4 py-2 text-sky-300">
              <Sparkles className="h-4 w-4 text-sky-300" />
              Website was created by vibe coding and several cups of tea
            </Badge>
            <h1 className="text-4xl font-black text-white sm:text-5xl md:text-6xl">
              Hey Friends <span className="inline-block align-middle">👋</span>
            </h1>
            <p className="text-xl font-light text-slate-300 sm:text-2xl md:text-3xl">
              I&apos;m Justin, a tea-obsessed{" "}
              <span className="relative inline-block font-semibold text-white leading-tight">
                {heroHighlight}
                <span className="absolute -bottom-1 left-0 h-[6px] w-full rounded-full bg-sky-500/70" />
              </span>{" "}
              blending AI with the real world—all fueled by milk oolong.
            </p>
            <p className="text-lg text-slate-400">
              The text above is NOT llm-generated. I swear I use em dashes when I write. 
            </p>
            <div className="flex flex-col gap-4 md:flex-row">
              <Button
                size="lg"
                onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
                className="rounded-full px-8 py-6 text-lg shadow-lg shadow-sky-500/30 transition-all hover:shadow-sky-500/50"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open("mailto:jjonany@uwaterloo.ca")}
                className="rounded-full border-slate-800 px-8 py-6 text-lg text-slate-100 hover:bg-slate-900"
              >
                <Mail className="mr-2 h-5 w-5" />
                Let&apos;s Collaborate
              </Button>
            </div>
            <div className="flex items-center justify-center gap-6 text-slate-300 md:justify-start">
              <a
                href="https://github.com/Justin-Jonany"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-800 bg-slate-900/80 p-3 transition-colors hover:border-sky-500 hover:text-sky-400"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/justinjonany/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-800 bg-slate-900/80 p-3 transition-colors hover:border-sky-500 hover:text-sky-400"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <div className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-4 py-2 text-slate-300 shadow-sm shadow-slate-950/60">
                <MapPin className="h-4 w-4 text-sky-400" />
                <span className="text-sm font-medium text-slate-200">Waterloo, ON</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <section id="about" className="relative bg-slate-950/60 px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="mb-6 bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-400 bg-clip-text text-5xl font-bold text-transparent">
              About Me
            </h2>
            <p className="mx-auto max-w-4xl text-xl leading-relaxed text-slate-300">
              Currently at Thema AI creating end-to-end pipelines, revenue models, and multi-agent systems that help
              investors discover their next great acquisition.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-16 max-w-6xl overflow-hidden rounded-3xl border border-indigo-400/30 bg-gradient-to-br from-slate-900 via-indigo-950/50 to-slate-900 p-8 shadow-2xl shadow-indigo-900/20"
          >
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-[0.9] items-center gap-5">
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-2xl border border-indigo-400/40 bg-white/90 p-2">
                  <Image
                    src="/images/University_of_Waterloo_seal.svg.png"
                    alt="University of Waterloo seal"
                    fill
                    sizes="64px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-indigo-300/80">Education</p>
                  <h3 className="mt-3 text-3xl font-bold text-slate-100">University of Waterloo</h3>
                  <p className="text-base font-semibold text-indigo-200">BMath Data Science</p>
                  <p className="text-sm font-medium text-slate-300">Graduating June 2027</p>
                </div>
              </div>
              <div className="grid flex-[1.2] gap-6 sm:grid-cols-2">
                {educationHighlightCards.map((card) => {
                  const Icon = card.icon;
                  const accent = EDUCATION_ACCENT_STYLES[card.accent];
                  return (
                    <div
                      key={card.id}
                      className="group relative overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-950/80 p-6 text-left shadow-inner shadow-slate-950/30 transition-all hover:-translate-y-1 hover:border-sky-500/40"
                    >
                      <span
                        className={`pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b ${accent.bar}`}
                        aria-hidden="true"
                      />
                      <div className="relative flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-slate-500">
                            {card.title}
                          </p>
                          <p
                            className={`mt-3 ${
                              card.id === "gpa" ? "text-3xl font-bold text-white" : "text-lg font-medium text-slate-100"
                            }`}
                          >
                            {card.value}
                          </p>
                          {card.meta && <p className="mt-1 text-sm text-slate-400">{card.meta}</p>}
                          {card.description && (
                            <p className="mt-3 text-sm leading-relaxed text-slate-400">{card.description}</p>
                          )}
                        </div>
                        <div
                          className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-slate-800/70 ${accent.badge}`}
                        >
                          <Icon className={`h-5 w-5 ${accent.icon}`} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <section id="experience" className="relative bg-slate-950/60 px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center text-5xl font-bold text-transparent bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-400 bg-clip-text"
          >
            Experience
          </motion.h2>

          <div className="space-y-10">
            {experiences.map((experience) => (
              <ExperienceFeature key={experience.id} experience={experience} />
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center text-5xl font-bold text-transparent bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-400 bg-clip-text"
          >
            Featured Projects
          </motion.h2>

          <div className="space-y-10">
            {projects.map((project) => (
              <ProjectFeature key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="coursework" className="relative bg-slate-950/70 px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-5xl font-bold text-transparent bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-400 bg-clip-text"
          >
            Coursework Snapshot
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-4 max-w-3xl text-center text-lg text-slate-400"
          >
            Core math, statistics, and computer science classes.
          </motion.p>
          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {courseTerms.map((term, index) => (
              <motion.div
                key={term.term}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group relative overflow-hidden border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 shadow-2xl shadow-slate-900/50 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01] hover:border-sky-500/60 hover:shadow-[0_25px_60px_rgba(14,165,233,0.35)]">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-sky-500/10 via-transparent to-indigo-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <CardContent className="relative p-6">
                    <div className="mb-4 flex items-baseline justify-between gap-2">
                      <h4 className="text-lg font-semibold text-slate-100">{term.term}</h4>
                      <span className="text-sm font-medium text-sky-300">Term GPA {term.gpa}</span>
                    </div>
                    <ul className="space-y-2 text-sm text-slate-400">
                      {term.courses.map((course) => (
                        <li key={course.code}>
                          <span className="font-semibold text-slate-200">{course.code}</span>{" "}
                          <span>{course.title}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="hobbies" className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center text-5xl font-bold text-transparent bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-400 bg-clip-text"
          >
            Beyond The Keyboard
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mx-auto mb-16 max-w-3xl text-center text-lg text-slate-400"
          >
            When I am not working, you can find me sipping a cup of tea, while I watch korean 
            dramas or hitting gym while l listen to alternative music!
          </motion.p>
          <div className="grid gap-6 md:grid-cols-3">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={hobby.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card className="group relative h-full overflow-hidden border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 shadow-2xl shadow-slate-900/50 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01] hover:border-sky-500/60 hover:shadow-[0_25px_60px_rgba(14,165,233,0.35)]">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-sky-500/10 via-transparent to-indigo-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative h-72 w-full overflow-hidden">
                    <Image
                      src={hobby.image}
                      alt={hobby.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-500 [transform:scale(var(--base-scale,1))] group-hover:[transform:scale(calc(var(--base-scale,1)*1.05))]"
                      style={
                        {
                          objectPosition: hobby.imagePosition,
                          "--base-scale": hobby.imageScale ?? 1
                        } as React.CSSProperties
                      }
                    />
                  </div>
                  <CardContent className="relative p-8">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-800">
                      <hobby.icon className="h-7 w-7 text-sky-300" />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-slate-100">{hobby.title}</h3>
                    <p className="text-slate-400">{hobby.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative border-t border-slate-800 bg-slate-950/70 px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-400 bg-clip-text text-4xl font-bold text-transparent">
              Let&apos;s Connect
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-slate-300">
              I&apos;m always open to discussing new opportunities, collaborations, or innovative projects in AI and
              machine learning.
            </p>

            <div className="mb-8 flex flex-wrap items-center justify-center gap-4 text-slate-300">
              <Button
                size="lg"
                onClick={() => window.open("mailto:jjonany@uwaterloo.ca")}
                className="rounded-full px-8 py-6 text-lg shadow-lg shadow-sky-500/30 transition-all hover:shadow-sky-500/50"
              >
                <Mail className="mr-2 h-5 w-5" />
                jjonany@uwaterloo.ca
              </Button>
            </div>

            <div className="mb-8 flex items-center justify-center gap-6">
              <a
                href="https://github.com/Justin-Jonany"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-800 bg-slate-900/80 p-3 text-slate-300 transition-colors hover:border-sky-500 hover:text-sky-400"
              >
                <Github className="h-7 w-7" />
              </a>
              <a
                href="https://www.linkedin.com/in/justinjonany/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-800 bg-slate-900/80 p-3 text-slate-300 transition-colors hover:border-sky-500 hover:text-sky-400"
              >
                <Linkedin className="h-7 w-7" />
              </a>
            </div>

            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Justin Jonany. Built with React & Tailwind CSS.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
