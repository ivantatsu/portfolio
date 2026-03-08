export type Locale = "es" | "en";

export const Language = { EN: "en", ES: "es" } as const;

export type TimelineItemType = "experience" | "education";
export type ProjectStatus = "production" | "development" | "concept";
export type FileId = "home" | "focus" | "stack" | "projects" | "timeline" | "contact";
export type TechType = "frontend" | "backend" | "data" | "ops" | "testing" | "other";
export type FileType = ".astro" | ".tsx" | ".css" | ".ts" | ".sql" | ".yml" | ".test.ts" | ".json" | ".java" | ".py" | ".rs" | ".lua" |".jsp"| "cloud" | "server" | "qa" | "git" | "proxy" | "ops" ;
export type ExplorerItemKind = "folder" | "file";
export type ExplorerNode = ExplorerItem & { children: ExplorerNode[] };

export interface PersonalInfo {
  name: string;
  role: string;
  location: string;
  experience: string;
  description: string;
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
}

export interface Skill {
  name: string;
  level: number;
  color: string;
  description: string;
}

export interface SkillDomain {
  id: string;
  title: string;
  icon: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  status: ProjectStatus;
  description: string;
  techs: string[];
  github?: string;
  demo?: string;
  highlights: string[];
  diagram?: string;
}

export interface TimelineItem {
  period: string;
  isCurrent?: boolean;
  title: string;
  company: string;
  description: string;
  type: TimelineItemType;
}

export interface PortfolioData {
  personal: PersonalInfo;
  skills: Skill[];
  skillDomains: SkillDomain[];
  projects: Project[];
  timeline: TimelineItem[];
}

export interface FileMeta {
  type: string;
  name: string;
  path: string;
  colorClass: string;
}

export interface FocusPrinciple {
  icon: string;
  title: string;
  desc: string;
  color: string;
}

export interface ExplorerItem {
  id: string;
  name: string;
  kind: ExplorerItemKind;
  depth: number;
  parentId?: string;
  defaultOpen?: boolean;
  tag?: string;
  href?: string;
  colorClass?: string;
}


export type DomainMeta = {
  label: string;
  color: string;
  accentClass: string;
  iconName: string;
};

export type TechMeta = {
  type: TechType;
  fileType: FileType;
  color: string;
  iconSlug: string;
  iconHex: string;
  iconUrl?: string;
};

export type EnrichedTech = TechMeta & {
  name: string;
};

export type EnrichedDomain = DomainMeta & {
  id: string;
  title: string;
  techs: EnrichedTech[];
};

export interface UiCopy {
  topbar: {
    menuItems: {
      label: string;
      action?: string;
      items?: { label?: string; shortcut?: string; action?: string; separator?: true }[];
    }[];
    appTitle: string;
    themeLabel: string;
    langLabel: string;
    openExplorer: string;
    explorerButton: string;
    deselectAllLabel: string;
  };
  sidebar: {
    explorerTitle: string;
    terminalTitle: string;
    loadingLabel: string;
    installCmd: string;
    logs: string[];
    closeExplorer: string;
    running: string;
  };
  fileMeta: Record<FileId, FileMeta>;
  layout: {
    metaDescription: string;
    pageTitlePrefix: string;
  };
  statusBar: {
    branch: string;
    framework: string;
    language: string;
    ide: string;
    theme: string;
    encoding: string;
    lineColumn: string;
    ready: string;
  };
  toast: {
    nothingToUndo: string;
    nothingToRedo: string;
    allSelected: string;
    saved: string;
  };
  hero: {
    subtitle: string;
    available: string;
    contact: string;
    built: string;
    mode: string;
    focus: string;
    builtValue: string;
    modeValue: string;
    focusValue: string;
    previewLabel: string;
    codeTypeName: string;
    codeFunctionName: string;
    codeStatusKey: string;
    codeStatusValue: string;
    codePassionKey: string;
    codePassionValue: string;
    codeFocusKey: string;
    codeFocusValue: string;
    github: string;
    linkedin: string;
  };
  focus: {
    lead: string;
    title: string;
    description: string;
    fileLabel: string;
    priorities: string;
    updated: string;
    principles: FocusPrinciple[];
  };
  stack: {
    lead: string;
    title: string;
    description: string;
    items: string;
    groupsLabel: string;
    techsLabel: string;
    yamlDefinition: string;
    liveSchema: string;
    preview: {
      eyebrow: string;
      title: string;
      description: string;
      groups: string;
      tech: string;
      cluster: string;
      coverage: string;
    };
  };
  projects: {
    lead: string;
    title: string;
    description: string;
    fileLabel: string;
    rows: string;
    queryComment: string;
    rowsReturned: string;
    querySuccess: string;
    row: string;
    techStack: string;
    highlights: string;
    labels: { production: string; development: string; concept: string };
    repo: string;
    demo: string;
    architecture: string;
  };
  timeline: {
    lead: string;
    title: string;
    description: string;
    commits: string;
    track: string;
    current: string;
    typeLabels: { experience: string; education: string };
  };
  contact: {
    lead: string;
    title: string;
    description: string;
    fileLabel: string;
    initCommand: string;
    connecting: string;
    send: string;
    linkedin: string;
    status: string;
    ready: string;
    footer: string;
    labels: {
      email: string;
      github: string;
      linkedin: string;
      twitter: string;
    };
  };
  infraDiagram: {
    internet: string;
    edgeProxy: string;
    traefik: string;
    sslRouting: string;
    runtime: string;
    docker: string;
    containerOrchestration: string;
    publicApps: string;
    portfolio: string;
    miniPaas: string;
    others: string;
    wireguardVpn: string;
    gitlab: string;
    gitlabInternal: string;
    mirrorSync: string;
    github: string;
    gitlabRunners: string;
    baseOs: string;
  };
}
