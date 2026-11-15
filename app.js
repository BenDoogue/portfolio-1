// ============================================================================
// RETRO PORTFOLIO RENDERER
// Reads window.PORTFOLIO_DATA from projects.js and renders the page.
// ============================================================================

(function () {
  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  const { profile, projects } = data;

  // Profile fields
  document.getElementById("profile-name").textContent = profile.name;
  document.getElementById("profile-tagline").textContent = profile.tagline;
  document.getElementById("profile-status").textContent = profile.status;
  document.getElementById("profile-handle").textContent = "@" + profile.handle;
  document.getElementById("profile-location").textContent = profile.location;
  document.getElementById("project-count").textContent = String(projects.length);

  // About paragraphs
  const aboutEl = document.getElementById("about-content");
  aboutEl.innerHTML = "";
  profile.about.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    aboutEl.appendChild(p);
  });

  // Interests list
  const interestsEl = document.getElementById("interests-list");
  interestsEl.innerHTML = "";
  profile.interests.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    interestsEl.appendChild(li);
  });

  // Contact links
  const emailEl = document.getElementById("contact-email");
  emailEl.textContent = profile.email;
  emailEl.href = "mailto:" + profile.email;

  const ghEl = document.getElementById("contact-github");
  ghEl.textContent = profile.github;
  ghEl.href = profile.github;

  // Render projects with optional filter
  const container = document.getElementById("projects-container");

  function renderProjects(filter) {
    container.innerHTML = "";
    const filtered = projects.filter((p) => {
      if (filter === "all") return true;
      return p.type === filter;
    });

    if (filtered.length === 0) {
      const empty = document.createElement("p");
      empty.textContent = "No projects match this filter yet.";
      container.appendChild(empty);
      return;
    }

    filtered.forEach((project) => {
      const card = document.createElement("article");
      card.className = "project-card";

      const top = document.createElement("div");
      top.className = "project-top";

      const title = document.createElement("h2");
      title.className = "project-title";
      title.textContent = project.title;

      const year = document.createElement("span");
      year.className = "project-year";
      year.textContent = "[" + project.year + "]";

      top.appendChild(title);
      top.appendChild(year);

      const badges = document.createElement("div");
      badges.className = "project-badges";

      const typeBadge = document.createElement("span");
      if (project.liveUrl) {
        typeBadge.className = "tag tag-live";
        typeBadge.textContent = "LIVE PAGE";
      } else {
        typeBadge.className = "tag tag-repo";
        typeBadge.textContent = "GITHUB REPO";
      }
      badges.appendChild(typeBadge);

      (project.tags || []).forEach((t) => {
        const tag = document.createElement("span");
        tag.className = "tag";
        tag.textContent = t;
        badges.appendChild(tag);
      });

      const desc = document.createElement("p");
      desc.className = "project-desc";
      desc.textContent = project.desc;

      const links = document.createElement("div");
      links.className = "project-links";

      if (project.liveUrl) {
        const liveBtn = document.createElement("a");
        liveBtn.className = "retro-btn";
        liveBtn.href = project.liveUrl;
        liveBtn.target = "_blank";
        liveBtn.rel = "noopener noreferrer";
        liveBtn.textContent = "Open Live Site ->";
        links.appendChild(liveBtn);
      }

      if (project.repoUrl) {
        const repoBtn = document.createElement("a");
        repoBtn.className = "retro-btn";
        repoBtn.href = project.repoUrl;
        repoBtn.target = "_blank";
        repoBtn.rel = "noopener noreferrer";
        repoBtn.textContent = "View Source";
        links.appendChild(repoBtn);
      }

      const upper = document.createElement("div");
      upper.appendChild(top);
      upper.appendChild(badges);
      upper.appendChild(desc);

      card.appendChild(upper);
      card.appendChild(links);
      container.appendChild(card);
    });
  }

  renderProjects("all");

  // Filter buttons
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(btn.getAttribute("data-filter"));
    });
  });

  // Retro status bar clock
  const clockEl = document.getElementById("retro-clock");
  function updateClock() {
    const now = new Date();
    clockEl.textContent = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  updateClock();
  setInterval(updateClock, 1000);
})();
