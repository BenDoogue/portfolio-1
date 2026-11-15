// ============================================================================
// PORTFOLIO DATA & PROJECT DIRECTORY
// ----------------------------------------------------------------------------
// Edit this file to update your bio, links, or add/remove projects.
// No build step required! Just save, commit, and GitHub Pages updates.
// ============================================================================

window.PORTFOLIO_DATA = {
  profile: {
    handle: "BenDoogue",
    name: "Ben Doogue",
    tagline: "Computer & Cognitive Science Student @ Te Herenga Waka (VUW)",
    status: "ONLINE // BUILDING & LEARNING",
    location: "Wellington, New Zealand",
    email: "b.d.doogue@gmail.com",
    github: "https://github.com/BenDoogue",
    about: [
      "I am a 3rd year Computer and Cognitive Science student at Te Herenga Waka (Victoria University of Wellington).",
      "I started programming properly in 2025 as an absolute novice. I know a bit of Java and have some experience training small machine learning models in Python.",
      "My goal is to learn to build user-interactive projects and visual explorations so that I can freely create things that I enjoy.",
      "Part of my degree is focused on AI, and I'm interested in what the future of Human–AI Interaction (HCI) will look like — figuring out novel ways for humans and AI to communicate."
    ],
    interests: [
      "Human–AI Interaction (HCI)",
      "Cognitive Science",
      "Interactive Web Tools",
      "Machine Learning (Python)",
      "Java & Visual Explorations"
    ]
  },

  // --------------------------------------------------------------------------
  // PROJECTS LIST
  // Add a new object to this array to list a new project on the site.
  //
  // Fields:
  //   id       - short unique slug
  //   title    - display name
  //   type     - "page" (hosted GitHub Page / live site) or "repo" (code only)
  //   year     - e.g. "2025" or "2026"
  //   liveUrl  - URL to the live site / GitHub Page (or null if none)
  //   repoUrl  - URL to the GitHub repository
  //   desc     - short description
  //   tags     - array of short labels, e.g. ["HTML/JS", "Study Tool"]
  //   featured - true to highlight with a [FEATURED] badge
  // --------------------------------------------------------------------------
  projects: [
    {
      id: "studydesk",
      title: "StudyDesk",
      type: "page",
      year: "2026",
      liveUrl: "https://bendoogue.github.io/StudyDesk/",
      repoUrl: "https://github.com/BenDoogue/StudyDesk",
      desc: "A small flashcard app to help me (and hopefully others) study.",
      tags: ["GitHub Pages", "Flashcards", "Interactive"],
      featured: true
    },
    {
      id: "doorlist",
      title: "DoorList",
      type: "page",
      year: "2026",
      liveUrl: "https://bendoogue.github.io/DoorList/",
      repoUrl: "https://github.com/BenDoogue/DoorList",
      desc: "DoorList web application hosted on GitHub Pages.",
      tags: ["GitHub Pages", "Web App"],
      featured: true
    },
    {
      id: "amgod",
      title: "Amgod",
      type: "repo",
      year: "2025",
      liveUrl: null,
      repoUrl: "https://github.com/BenDoogue/Amgod",
      desc: "Experimental repository — figuring out how things work.",
      tags: ["Experiment", "Sandbox"],
      featured: false
    }

    // --- TEMPLATE FOR NEW PROJECTS (copy, uncomment, and fill in) ---
    // {
    //   id: "my-new-project",
    //   title: "My New Project",
    //   type: "page", // "page" or "repo"
    //   year: "2026",
    //   liveUrl: "https://bendoogue.github.io/my-new-project/",
    //   repoUrl: "https://github.com/BenDoogue/my-new-project",
    //   desc: "Short description of what this project does.",
    //   tags: ["HTML/CSS/JS", "HCI"],
    //   featured: false
    // },
  ]
};
