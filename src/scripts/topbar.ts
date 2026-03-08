import type { UiCopy } from "../data/types";

export function initTopBar(toastLabels: UiCopy["toast"]) {
  const menu = document.getElementById("topbar-menu");
  if (!menu) return;

  const triggers = Array.from(menu.querySelectorAll<HTMLElement>("[data-menu-trigger]"));
  const dropdowns = Array.from(menu.querySelectorAll<HTMLElement>("[data-menu-dropdown]"));

  const closeAll = () => {
    triggers.forEach((t) => {
      t.setAttribute("aria-expanded", "false");
      t.closest(".topbar-menu-item")?.classList.remove("is-open");
    });
    dropdowns.forEach((d) => d.classList.remove("topbar-dropdown--open"));
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      const idx = trigger.dataset.menuTrigger;
      const dropdown = menu.querySelector(`[data-menu-dropdown="${idx}"]`);
      const isOpen = dropdown?.classList.contains("topbar-dropdown--open");
      closeAll();
      if (!isOpen && dropdown) {
        dropdown.classList.add("topbar-dropdown--open");
        trigger.setAttribute("aria-expanded", "true");
        trigger.closest(".topbar-menu-item")?.classList.add("is-open");
      }
    });
  });

  document.addEventListener("click", closeAll);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeAll(); });

  const showEditorFlash = (color: string) => {
    const flash = document.createElement("div");
    flash.className = "editor-flash";
    flash.style.setProperty("--flash-color", color);
    document.body.appendChild(flash);
    requestAnimationFrame(() => requestAnimationFrame(() => flash.classList.add("is-active")));
    setTimeout(() => flash.remove(), 500);
  };

  let toastTimer: ReturnType<typeof setTimeout> | undefined;

  const showToast = (message: string, type: "info" | "success" | "warning" = "info") => {
    let toast = document.getElementById("ide-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "ide-toast";
      document.body.appendChild(toast);
    }

    toast.classList.remove("is-active");
    void toast.offsetWidth;

    const typeClass = type === "success" ? "ide-toast--success" : type === "warning" ? "ide-toast--warning" : "";
    toast.className = `ide-toast ${typeClass}`;

    const iconName = type === "success" ? "save" : type === "warning" ? "warning" : "info";

    toast.textContent = "";
    const content = document.createElement("div");
    content.className = "ide-toast__content";
    const icon = document.createElement("span");
    icon.className = "ide-toast__icon icon-symbol";
    icon.textContent = iconName;
    const msg = document.createElement("span");
    msg.className = "ide-toast__message";
    msg.textContent = message;
    content.append(icon, msg);
    const progress = document.createElement("div");
    progress.className = "ide-toast__progress";
    const fill = document.createElement("div");
    fill.className = "ide-toast__progress-fill";
    progress.appendChild(fill);
    toast.append(content, progress);

    void toast.offsetWidth;
    toast.classList.add("is-active");

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast!.classList.remove("is-active"), 2300);
  };

  const showActionShake = () => {
    const activeView = document.querySelector("[data-file-view].is-file-active");
    activeView?.classList.add("action-shake");
    setTimeout(() => activeView?.classList.remove("action-shake"), 400);
  };

  const showSaveScan = () => {
    const scan = document.createElement("div");
    scan.className = "save-scan";
    document.body.appendChild(scan);
    requestAnimationFrame(() => requestAnimationFrame(() => scan.classList.add("is-active")));
    setTimeout(() => scan.remove(), 700);
  };

  const dispatchAction = (action: string) => {
    if (!action) return;

    if (action.startsWith("navigate-")) {
      window.location.hash = action.replace("navigate-", "");
      return;
    }

    if (action.startsWith("open-dialog:")) {
      document.getElementById(action.replace("open-dialog:", ""))?.classList.add("is-active");
      return;
    }

    switch (action) {
      case "toggle-terminal":
        document.querySelectorAll(".sidebar-terminal").forEach((p) => {
          p.classList.toggle("sidebar-terminal--hidden");
        });
        break;

      case "toggle-sidebar": {
        const sidebar = document.querySelector<HTMLElement>("[data-desktop-sidebar]");
        sidebar?.classList.toggle("sidebar--collapsed");
        break;
      }

      case "close-ide": {
        const ideApp = document.getElementById("ide-app");
        const closedScreen = document.getElementById("ide-closed-screen");
        ideApp?.classList.add("ide--closed");
        setTimeout(() => closedScreen?.classList.add("is-active"), 200);
        break;
      }

      case "minimize-ide": {
        const ideApp = document.getElementById("ide-app");
        const ideDesktop = document.getElementById("ide-desktop");
        const minimizedBar = document.getElementById("ide-minimized-bar");
        ideApp?.classList.add("ide--minimized");
        setTimeout(() => {
          ideDesktop?.classList.add("is-active");
          minimizedBar?.classList.add("is-active");
        }, 180);
        break;
      }

      case "maximize-fullscreen":
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {});
        } else {
          document.exitFullscreen().catch(() => {});
        }
        break;

      case "undo-action":
        showEditorFlash("rgba(159, 147, 255, 0.13)");
        showToast(toastLabels.nothingToUndo, "warning");
        showActionShake();
        break;

      case "redo-action":
        showEditorFlash("rgba(89, 216, 255, 0.11)");
        showToast(toastLabels.nothingToRedo, "warning");
        showActionShake();
        break;

      case "find-action": {
        const bar = document.getElementById("ide-find-bar");
        bar?.removeAttribute("hidden");
        setTimeout(() => (document.getElementById("ide-find-input") as HTMLInputElement | null)?.focus(), 30);
        break;
      }

      case "select-all-action": {
        showEditorFlash("rgba(89, 216, 255, 0.18)");
        document.body.classList.add("is-all-selected");
        const activeView = document.querySelector("[data-file-view].is-file-active");
        const targets = activeView?.querySelectorAll(
          ".hero-code-line, .hero-cursor-line, .focus-principle-card, .stack-domain-card, .project-json-card, .timeline-item-card, .contact-link-row"
        );
        targets?.forEach((el) => el.classList.add("is-selected"));
        const countEl = document.getElementById("ide-selection-count");
        if (countEl) countEl.textContent = String(targets?.length ?? 0);
        break;
      }

      case "deselect-all-action":
        document.body.classList.remove("is-all-selected");
        document.querySelectorAll(".is-selected").forEach((el) => el.classList.remove("is-selected"));
        break;

      case "save-file": {
        const nameEl = document.getElementById("active-file-name");
        showToast(`${nameEl?.textContent ?? "file"} — ${toastLabels.saved}`, "success");
        showSaveScan();
        nameEl?.classList.add("saved-flash");
        setTimeout(() => nameEl?.classList.remove("saved-flash"), 1000);
        break;
      }

      case "start-debug": {
        const debugBar = document.getElementById("ide-debug-bar");
        showEditorFlash("rgba(103, 247, 191, 0.1)");
        debugBar?.classList.add("is-active");
        debugBar?.setAttribute("aria-hidden", "false");
        break;
      }

      case "stop-debug": {
        const debugBar = document.getElementById("ide-debug-bar");
        debugBar?.classList.remove("is-active");
        debugBar?.setAttribute("aria-hidden", "true");
        break;
      }
    }
  };

  menu.addEventListener("click", (e) => {
    const item = (e.target as HTMLElement).closest<HTMLElement>("[data-menu-action]");
    if (!item) return;
    const action = item.dataset.menuAction ?? "";
    closeAll();
    if (action) dispatchAction(action);
  });
}
