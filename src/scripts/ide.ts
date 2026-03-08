import type { FileMeta, FileId } from "../data/types";

export function initIde(fileMeta: Record<FileId, FileMeta>) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll<HTMLElement>("[data-animate]").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    el.style.transitionDelay = (el.dataset.delay ?? "0") + "ms";
    observer.observe(el);
  });

  const initExplorerTrees = () => {
    document.querySelectorAll("[data-explorer-tree]").forEach((tree) => {
      const applyTreeState = () => {
        tree.querySelectorAll<HTMLElement>("[data-folder-toggle]").forEach((toggle) => {
          const isOpen = toggle.dataset.open !== "false";
          toggle.setAttribute("aria-expanded", String(isOpen));
          toggle.classList.toggle("is-folder-open", isOpen);

          const chevron = toggle.querySelector("[data-folder-chevron]");
          if (chevron) chevron.textContent = isOpen ? "v" : ">";

          const glyph = toggle.querySelector("[data-folder-glyph]");
          if (glyph) glyph.textContent = isOpen ? "folder_open" : "folder";

          const children = toggle.dataset.folderId
            ? tree.querySelector(`[data-folder-children-for="${toggle.dataset.folderId}"]`)
            : null;
          if (children) children.classList.toggle("sidebar-tree-node--hidden", !isOpen);
        });
      };

      tree.querySelectorAll<HTMLElement>("[data-folder-toggle]").forEach((toggle) => {
        if (toggle.dataset.bound === "true") return;
        toggle.dataset.bound = "true";
        toggle.addEventListener("click", () => {
          toggle.dataset.open = toggle.dataset.open === "false" ? "true" : "false";
          applyTreeState();
        });
      });

      applyTreeState();
    });
  };

  const fileViews = Array.from(document.querySelectorAll("[data-file-view]"));
  const fileLinks = Array.from(document.querySelectorAll<HTMLElement>("[data-file-link]"));
  const fileTypeEl = document.getElementById("active-file-type");
  const fileNameEl = document.getElementById("active-file-name");
  const filePathEl = document.getElementById("active-file-path");
  const sidebarLocationPills = Array.from(document.querySelectorAll<HTMLElement>("[data-sidebar-location]"));

  const activateFile = () => {
    const currentHash = window.location.hash.replace("#", "") || "home";
    const targetId = fileMeta[currentHash as FileId] ? (currentHash as FileId) : "home";
    const meta = fileMeta[targetId];

    fileViews.forEach((view) => view.classList.toggle("is-file-active", view.id === targetId));
    fileLinks.forEach((link) => link.classList.toggle("is-file-active", link.dataset.fileId === targetId));

    if (fileTypeEl && fileNameEl && filePathEl) {
      fileTypeEl.textContent = meta.type;
      fileNameEl.textContent = meta.name;
      filePathEl.textContent = meta.path;
      fileTypeEl.className = `text-[9px] font-bold px-1 py-[1px] rounded ${meta.colorClass}`;
    }

    const prefix = sidebarLocationPills[0]?.dataset.locationPrefix ?? "portfolio/";
    const folderPath = prefix + meta.path.split("/").slice(0, -1).join("/");
    sidebarLocationPills.forEach((pill) => { pill.textContent = folderPath; });

    document.body.classList.remove("is-all-selected");
    document.querySelectorAll(".is-selected").forEach((el) => el.classList.remove("is-selected"));
  };

  const intervalIds: ReturnType<typeof setInterval>[] = [];

  document.querySelectorAll<HTMLElement>("[data-terminal-log-lines]").forEach((container) => {
    const lines = (container.getAttribute("data-terminal-log-lines") ?? "").split("|").filter(Boolean);
    const target = container.querySelector(".terminal-log");
    if (!target || lines.length < 2) return;
    let idx = 0;
    intervalIds.push(setInterval(() => {
      idx = (idx + 1) % lines.length;
      target.textContent = lines[idx];
    }, 1400));
  });

  window.addEventListener("pagehide", () => intervalIds.forEach(clearInterval));

  window.addEventListener("hashchange", activateFile);
  activateFile();
  initExplorerTrees();

  document.querySelectorAll("[data-action='toggle-terminal']").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".sidebar-terminal").forEach((panel) => {
        panel.classList.toggle("sidebar-terminal--hidden");
      });
    });
  });

  const mobileSidebar = document.getElementById("mobile-sidebar");
  const mobileOverlay = document.getElementById("mobile-sidebar-overlay");
  const toggleButtons = Array.from(document.querySelectorAll("[data-sidebar-toggle]"));
  const closeButtons = Array.from(document.querySelectorAll("[data-sidebar-close]"));

  const openSidebar = () => {
    if (!mobileSidebar || !mobileOverlay) return;
    mobileSidebar.classList.remove("-translate-x-full");
    mobileOverlay.classList.remove("opacity-0", "pointer-events-none");
    mobileSidebar.setAttribute("aria-hidden", "false");
  };

  const closeSidebar = () => {
    if (!mobileSidebar || !mobileOverlay) return;
    mobileSidebar.classList.add("-translate-x-full");
    mobileOverlay.classList.add("opacity-0", "pointer-events-none");
    mobileSidebar.setAttribute("aria-hidden", "true");
  };

  toggleButtons.forEach((btn) => btn.addEventListener("click", openSidebar));
  closeButtons.forEach((btn) => btn.addEventListener("click", closeSidebar));
  fileLinks.forEach((link) => link.addEventListener("click", closeSidebar));

  window.addEventListener("keydown", (e) => { if (e.key === "Escape") closeSidebar(); });
}
