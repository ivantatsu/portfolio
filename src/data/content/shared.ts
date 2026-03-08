import type { DomainMeta, ExplorerItem, TechMeta } from "../types";

export const sharedSkillDomainDefs = [
  { id: "01", icon: "lightning", skills: ["Angular", "TypeScript", "Astro", "Tailwind CSS", "Bootstrap", "JSP"] },
  { id: "02", icon: "palette", skills: ["Java", "Python", "Rust", "Spring Boot", "Struts", "LUA"] },
  { id: "03", icon: "database", skills: ["MySQL", "Oracle", "PostgreSQL", "MongoDB", "DynamoDB", "PL/SQL"] },
  { id: "04", icon: "rocket", skills: ["GitLab", "GitHub", "Docker", "Traefik", "ContainerD"] },
  { id: "05", icon: "flask", skills: ["ESLint", "JUnit", "SonarQube", "OWASP ZAP"] },
  { id: "06", icon: "cloud", skills: ["OVH", "AWS", "Tomcat", "WebLogic", "Nginx", "Linux"] },
];

export const sharedTopbar = {
  appTitle: "portfolio - IRB IDE",
  themeLabel: "> Blue Night Theme",
};

export const domainMetaMap: Record<string, DomainMeta> = {
  lightning: {
    label: "frontend",
    color: "#59d8ff",
    accentClass: "from-[#123c57] to-[#10283f]",
    iconName: "bolt",
  },
  palette: {
    label: "backend",
    color: "#ff7ab6",
    accentClass: "from-[#4a2140] to-[#2d1630]",
    iconName: "terminal",
  },
  database: {
    label: "data-layer",
    color: "#67f7bf",
    accentClass: "from-[#173d36] to-[#102924]",
    iconName: "database",
  },
  rocket: {
    label: "devops",
    color: "#ffd36b",
    accentClass: "from-[#4b3520] to-[#2f2319]",
    iconName: "rocket_launch",
  },
  flask: {
    label: "quality",
    color: "#9f93ff",
    accentClass: "from-[#2f2b52] to-[#1f1d36]",
    iconName: "science",
  },
  cloud: {
    label: "infrastructure",
    color: "#60c6f0",
    accentClass: "from-[#1a3548] to-[#0f2030]",
    iconName: "dns",
  },
};

export const techMetaMap: Record<string, TechMeta> = {
  // Frontend
  Angular: { type: "frontend", fileType: ".tsx", color: "#ff0040", iconSlug: "angular", iconHex: "ff0040" },
  TypeScript: { type: "frontend", fileType: ".tsx", color: "#38d9f5", iconSlug: "typescript", iconHex: "38d9f5" },
  Astro: { type: "frontend", fileType: ".astro", color: "#ff4400", iconSlug: "astro", iconHex: "ff4400" },
  "Tailwind CSS": { type: "frontend", fileType: ".css", color: "#00f0ff", iconSlug: "tailwindcss", iconHex: "00f0ff" },
  Bootstrap: { type: "frontend", fileType: ".css", color: "#bf5fff", iconSlug: "bootstrap", iconHex: "bf5fff" },
  JSP: { type: "frontend", fileType: ".jsp", color: "#ff9500", iconSlug: "html5", iconHex: "ff9500" },
  // Backend
  Java: { type: "backend", fileType: ".java", color: "#ffaa00", iconSlug: "openjdk", iconHex: "ffaa00" },
  Python: { type: "backend", fileType: ".py", color: "#4fc3f7", iconSlug: "python", iconHex: "4fc3f7" },
  Rust: { type: "backend", fileType: ".rs", color: "#ff3d00", iconSlug: "rust", iconHex: "ff3d00" },
  "Spring Boot": { type: "backend", fileType: ".java", color: "#57ff5c", iconSlug: "springboot", iconHex: "57ff5c" },
  Spring: { type: "backend", fileType: ".java", color: "#57ff5c", iconSlug: "spring", iconHex: "57ff5c" },
  Struts: { type: "backend", fileType: ".java", color: "#ff3333", iconSlug: "apache", iconHex: "ff3333" },
  LUA: { type: "backend", fileType: ".lua", color: "#7c7cff", iconSlug: "lua", iconHex: "7c7cff" },
  gRPC: { type: "backend", fileType: ".ts", color: "#5599ff", iconSlug: "grpc", iconHex: "5599ff" },
  Tokio: { type: "backend", fileType: ".rs", color: "#ff3d00", iconSlug: "rust", iconHex: "ff3d00" },
  // Data
  MySQL: { type: "data", fileType: ".sql", color: "#00aaff", iconSlug: "mysql", iconHex: "00aaff" },
  Oracle: { type: "data", fileType: ".sql", color: "#ff2222", iconSlug: "databricks", iconHex: "ff2222" },
  PostgreSQL: { type: "data", fileType: ".sql", color: "#5599ff", iconSlug: "postgresql", iconHex: "5599ff" },
  MongoDB: { type: "data", fileType: ".json", color: "#00e676", iconSlug: "mongodb", iconHex: "00e676" },
  DynamoDB: { type: "data", fileType: ".json", color: "#6677ff", iconSlug: "icloud", iconHex: "6677ff" },
  "PL/SQL": { type: "data", fileType: ".sql", color: "#ff2222", iconSlug: "oracle", iconHex: "ff2222", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" },
  // DevOps
  GitLab: { type: "ops", fileType: "git", color: "#ff6d26", iconSlug: "gitlab", iconHex: "ff6d26" },
  GitHub: { type: "ops", fileType: "git", color: "#c8e6ff", iconSlug: "github", iconHex: "c8e6ff" },
  Docker: { type: "ops", fileType: "ops", color: "#00beff", iconSlug: "docker", iconHex: "00beff" },
  Traefik: { type: "ops", fileType: "proxy", color: "#00d4ff", iconSlug: "traefikproxy", iconHex: "00d4ff" },
  ContainerD: { type: "ops", fileType: "ops", color: "#88ccff", iconSlug: "containerd", iconHex: "88ccff" },
  // Quality
  ESLint: { type: "testing", fileType: "qa", color: "#9b6dff", iconSlug: "eslint", iconHex: "9b6dff" },
  JUnit: { type: "testing", fileType: ".test.ts", color: "#00e676", iconSlug: "junit5", iconHex: "00e676" },
  SonarQube: { type: "testing", fileType: "qa", color: "#29b6f6", iconSlug: "sonar", iconHex: "29b6f6" },
  "OWASP ZAP": { type: "testing", fileType: "qa", color: "#5fb8ff", iconSlug: "owasp", iconHex: "5fb8ff" },
  // Infrastructure
  OVH: { type: "ops", fileType: "cloud", color: "#4db8ff", iconSlug: "ovh", iconHex: "4db8ff" },
  AWS: { type: "ops", fileType: "cloud", color: "#ffaa00", iconSlug: "amazonaws", iconHex: "ffaa00", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  Tomcat: { type: "ops", fileType: "server", color: "#ffe566", iconSlug: "apachetomcat", iconHex: "ffe566" },
  WebLogic: { type: "ops", fileType: "server", color: "#e066ff", iconSlug: "oracle", iconHex: "e066ff", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" },
  Nginx: { type: "ops", fileType: "server", color: "#00e676", iconSlug: "nginx", iconHex: "00e676" },
  Linux: { type: "ops", fileType: ".yml", color: "#ffd600", iconSlug: "linux", iconHex: "ffd600" },
};

export const statusConfig = {
  production: { color: "text-neon-green", bg: "bg-neon-green/10", border: "border-neon-green/30", dot: "#39ff14" },
  development: { color: "text-neon-yellow", bg: "bg-neon-yellow/10", border: "border-neon-yellow/30", dot: "#ffd700" },
  concept: { color: "text-editor-dim", bg: "bg-white/5", border: "border-border", dot: "#858585" },
};

export const techColorMap: Record<string, string> = Object.fromEntries(
  Object.entries(techMetaMap).map(([name, meta]) => [name.toLowerCase(), meta.color])
);

export const explorerItems: ExplorerItem[] = [
  { id: "workspace", name: "PORTFOLIO", kind: "folder", depth: 0, defaultOpen: true },
  { id: "src", name: "src", kind: "folder", depth: 1, parentId: "workspace", defaultOpen: true },
  { id: "views", name: "views", kind: "folder", depth: 2, parentId: "src", defaultOpen: true },
  { id: "home-file", name: "portfolio.ts", kind: "file", depth: 3, parentId: "views", tag: "TS", href: "#home", colorClass: "text-neon-cyan" },
  { id: "notes", name: "notes", kind: "folder", depth: 2, parentId: "src", defaultOpen: true },
  { id: "focus-file", name: "focus.md", kind: "file", depth: 3, parentId: "notes", tag: "MD", href: "#focus", colorClass: "text-editor-comment" },
  { id: "config", name: "config", kind: "folder", depth: 2, parentId: "src", defaultOpen: true },
  { id: "stack-file", name: "stack.yml", kind: "file", depth: 3, parentId: "config", tag: "YML", href: "#stack", colorClass: "text-neon-yellow" },
  { id: "data", name: "data", kind: "folder", depth: 2, parentId: "src", defaultOpen: true },
  { id: "projects-file", name: "projects.db", kind: "file", depth: 3, parentId: "data", tag: "DB", href: "#projects", colorClass: "text-neon-pink" },
  { id: "logs", name: "logs", kind: "folder", depth: 2, parentId: "src", defaultOpen: true },
  { id: "timeline-file", name: "timeline.log", kind: "file", depth: 3, parentId: "logs", tag: "LOG", href: "#timeline", colorClass: "text-editor-string" },
  { id: "scripts", name: "scripts", kind: "folder", depth: 2, parentId: "src", defaultOpen: true },
  { id: "contact-file", name: "contact.sh", kind: "file", depth: 3, parentId: "scripts", tag: "SH", href: "#contact", colorClass: "text-neon-green" },
];