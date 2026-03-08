export function initOverlays() {
  const ideApp = document.getElementById("ide-app");
  const closedScreen = document.getElementById("ide-closed-screen");
  const minimizedBar = document.getElementById("ide-minimized-bar");
  const ideDesktop = document.getElementById("ide-desktop");

  const IDE_STATE_KEY = "ide-state";

  const bootIde = () => {
    if (!ideApp) return;
    ideApp.classList.add("ide-boot-intro");
    ideApp.addEventListener("animationend", () => {
      ideApp.classList.remove("ide-boot-intro");
    }, { once: true });
  };

  if (sessionStorage.getItem(IDE_STATE_KEY) === "open") {
    if (ideApp) {
      ideApp.style.transition = "none";
      ideApp.classList.remove("ide--closed");
      void ideApp.offsetWidth;
      ideApp.style.transition = "";
    }
  } else {
    setTimeout(() => {
      if (!closedScreen) return;
      closedScreen.classList.add("is-active", "ide-screen-intro");
      closedScreen.setAttribute("aria-hidden", "false");
      setTimeout(() => closedScreen.classList.remove("ide-screen-intro"), 2200);
    }, 120);
  }

  document.querySelector("[data-action='close-ide']")?.addEventListener("click", () => {
    sessionStorage.setItem(IDE_STATE_KEY, "closed");
    ideApp?.classList.add("ide--closed");
    setTimeout(() => closedScreen?.classList.add("is-active"), 200);
  });

  document.getElementById("ide-reopen-btn")?.addEventListener("click", () => {
    sessionStorage.setItem(IDE_STATE_KEY, "open");
    closedScreen?.classList.remove("is-active");
    setTimeout(() => {
      ideApp?.classList.remove("ide--closed");
      bootIde();
    }, 350);
  });

  document.querySelector("[data-action='minimize-ide']")?.addEventListener("click", () => {
    if (!ideApp) return;
    ideApp.classList.add("ide-shutdown-outro");
    ideApp.addEventListener("animationend", () => {
      ideApp.style.transition = "none";
      ideApp.classList.remove("ide-shutdown-outro");
      ideApp.classList.add("ide--minimized");
      void ideApp.offsetWidth;
      ideApp.style.transition = "";
      ideDesktop?.classList.add("is-active");
      minimizedBar?.classList.add("is-active");
    }, { once: true });
  });

  document.getElementById("ide-restore-btn")?.addEventListener("click", () => {
    minimizedBar?.classList.remove("is-active");
    ideDesktop?.classList.remove("is-active");
    setTimeout(() => {
      ideApp?.classList.remove("ide--minimized");
      bootIde();
    }, 200);
  });

  document.querySelector("[data-action='maximize-fullscreen']")?.addEventListener("click", () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  });

  document.querySelectorAll<HTMLElement>("[data-close-dialog]").forEach((btn) => {
    const id = btn.dataset.closeDialog!;
    btn.addEventListener("click", () => document.getElementById(id)?.classList.remove("is-active"));
  });

  document.querySelectorAll<HTMLElement>("[data-open-dialog]").forEach((btn) => {
    const id = btn.dataset.openDialog!;
    btn.addEventListener("click", () => document.getElementById(id)?.classList.add("is-active"));
  });

  document.querySelectorAll(".ide-overlay-backdrop").forEach((overlay) => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) overlay.classList.remove("is-active");
    });
  });

  const closeFindBar = () => {
    const findBar = document.getElementById("ide-find-bar");
    const findCount = document.getElementById("ide-find-count");
    findBar?.setAttribute("hidden", "");
    if (findCount) findCount.textContent = "";
  };

  document.getElementById("ide-find-close")?.addEventListener("click", closeFindBar);

  const findInput = document.getElementById("ide-find-input") as HTMLInputElement | null;
  const findCountEl = document.getElementById("ide-find-count");

  findInput?.addEventListener("input", () => {
    const q = findInput.value.trim();
    if (!q) { if (findCountEl) findCountEl.textContent = ""; return; }
    const text = document.querySelector("[data-file-view].is-file-active")?.textContent ?? "";
    const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const hits = (text.match(new RegExp(escaped, "gi")) || []).length;
    if (findCountEl) findCountEl.textContent = hits ? `${hits} resultados` : "Sin resultados";
    (window as any).find?.(q, false, false, true);
  });

  const debugBar = document.getElementById("ide-debug-bar");
  document.getElementById("ide-debug-stop")?.addEventListener("click", () => {
    debugBar?.classList.remove("is-active");
    debugBar?.setAttribute("aria-hidden", "true");
  });

  const deselectAll = () => {
    document.body.classList.remove("is-all-selected");
    document.querySelectorAll(".is-selected").forEach((el) => el.classList.remove("is-selected"));
  };

  document.getElementById("ide-deselect-btn")?.addEventListener("click", deselectAll);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".ide-overlay-backdrop.is-active").forEach((el) => {
        el.classList.remove("is-active");
      });
      closeFindBar();
      deselectAll();
    }
  });
}
