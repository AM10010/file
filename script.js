/* ============================================================
   EDIT EVERYTHING YOU NEED HERE — this is the only place
   you have to touch to personalize the site.
   ============================================================ */
const CONFIG = {
  husbandName: "I",
  wifeName: "Koky",

  introLine: "I made you something... but first, let's play.",
  introSubline: `Before you open our story, Let's see if you still remember a little things ❤️

Our story has a lot of memories, pictures, little moments, inside jokes, and things that only we would remember.

So, before we take you through the last 20 years of us, there's just one little challenge…

Answer each question to unlock the next part of our story.

No cheating.
No asking me.
And yes… I'm sure you know the answers. 😌

Ready, Koky? ❤️ Answer a few questions about us, then walk through our chapters together.`,

  // 6 quiz questions. Put the correct option first or anywhere —
  // just set correct: true on the right one.
  quiz: [
    {
      question: "Do you remember the special day when you and Fady got together and started celebrating it every month? What was the date?",
      options: [
        { text: "7 Feb", correct: true },
        { text: "1 May", correct: false },
        { text: "2 July", correct: false },
      ],
      correctFeedback: "Yes! Right there, and I still remember that.",
      wrongFeedback: "Close, but no — it was at 7 Feb.",
    },
    {
      question: "What’s your favorite food and restaurant to go to together?",
      options: [
        { text: "McDonalds", correct: true },
        { text: "Buffalo Burger ", correct: false },
        { text: "Qasr el Kababgy", correct: false },
      ],
      correctFeedback: "Exactly. Every single time, without fail.",
      wrongFeedback: "A good guess, but it's McDonalds",
    },
    {
      question: "What’s your favorite color — and the color Fady really loves seeing you wear?",
      options: [
        { text: "Yellow", correct: false },
        { text: "Red", correct: false },
        { text: "Black", correct: true },
      ],
      correctFeedback: "Exactly. Every single time, without fail.",
      wrongFeedback: "A good guess, but it's Black",
    },
    {
      question: "Do you remember the little symbols Fady used to send you back then to say “I love you” or send you a kiss?",
      options: [
        { text: "& @", correct: false },
        { text: " //// $", correct: true },
        { text: " “”!?", correct: false },
      ],
      correctFeedback: "Exactly. Every single time, without fail.",
      wrongFeedback: "A good guess, but it's  //// $",
    },
    {
      question: "Do you remember the first gift Fady ever bought you — and which mall were you at?",
      options: [
        { text: "Box including Jacket - Arkedia Mall", correct: true },
        { text: "Shose - Cairo Mall", correct: false },
        { text: "Silver - Mall of Arabia", correct: false },
      ],
      correctFeedback: "Exactly. Every single time, without fail.",
      wrongFeedback: "A good guess, but it's  Box including Jacket - Arkedia Mall",
    },
    {
      question: "After almost 20 years… what are we?",
      options: [
        { text: " Best friends", correct: false },
        { text: " Husband & Wife", correct: false },
        { text: " A package that was never meant to be separated ❤️", correct: true },
      ],
      correctFeedback: "Exactly. Every single time, without fail.",
      wrongFeedback: "A good guess, but it's  A package that was never meant to be separated ❤️",
    },
  ],

  // Chapters of your story. As many as you like.
   story: [
    {
      label: "chapter one",
      title: "We Were Written Into Each Other’s Story",
      text: "If someone had told us back then that the two kids who happened to know each other would one day become husband and wife… I’m not sure we would have believed them.But somehow, our story always felt a little different.We got close, we drifted apart, we found our way back to each other… almost like one of those movie stories where the two people keep missing each other until life finally decides to put them on the same page.Looking back now, I honestly believe we were written into each other’s story long before we understood what it meant.Maybe we didn’t know it back then.Maybe we weren’t ready for it.But somehow, We eventually found our way back to each other.And this time, we stayed. ❤️",
      gallery: [
        "images/chapter1-1.jpg",
        "images/chapter1-2.jpg",
        "images/chapter1-3.jpg",
        "images/chapter1-4.jpg",
      ],
    },
    {
      label: "chapter two",
      title: "The Beginning of Us ❤️",
      text: "Then came the engagement… and suddenly, the story wasn’t just about two people who found each other.It became about building a life together.Two and a half years of engagement gave us plenty of time to dream, plan, argue, laugh, and imagine what our future would look like.And then came the day we became husband and wife.The beginning wasn’t perfect — and honestly, I don’t think I ever wanted it to be.Because what made our story beautiful wasn’t perfection.It was the love that stayed.We kept choosing each other.And somewhere between those early days of marriage and all the memories we were creating, you stopped being just the person I loved…You became my home. ❤️",
      gallery: [
        "images/chapter2-1.jpg",
        "images/chapter2-2.jpg",
        "images/chapter2-3.jpg",
        "images/chapter2-4.jpg",
        "images/chapter2-5.jpg",
        "images/chapter2-6.jpg",
      ],
    },
    {
      label: "chapter three",
      title: " The Package Was Tested ❤️",
      text: "Then life happened.And just like every real story, ours wasn’t always easy.We went through challenges, difficult moments, disappointments, arguments, pressure, and days when things weren’t exactly the way we wished they would be.We got angry at each other.We hurt each other.Sometimes you were upset with me, and sometimes I was upset with you.But somehow, no matter how far the argument went, we always found our way back to the same place…Each other.And through every difficult chapter, you were there.You were my support, my partner, my safe place, and the person standing beside me when I needed someone the most.You didn’t just share the good days with me.You stood beside me through the difficult ones too.And that’s when I understood something about us:We were never just a couple who loved each other when things were easy.We were a package.A package that life could shake, test, stretch, and challenge…But never truly separate.And somehow, every challenge didn’t break us.It made us stronger.It made us understand each other more.It made our bond deeper.Because at the end of every argument, every difficult day, and every storm…It was still you.And it was still me.Still us.Still the same package. ❤️",
      gallery: [
        "images/chapter 3-1.jpg",
        "images/chapter 3-2.jpg",
        "images/chapter 3-3.jpg",
        "images/chapter 3-4.jpg",
      ],
    },
    {
      label: "chapter four",
      title: "20 Years Later ❤️",
      text: "And here we are.Almost 20 years after our story began.14 years of marriage.Countless memories.Thousands of conversations.A million little moments that only we could understand.And somehow, after everything we’ve been through, I still look at you and feel incredibly lucky that life chose you for me.You are still the person I want to tell everything to.The person I want beside me when something amazing happens.The person I want beside me when life gets difficult.The person I want to laugh with, argue with, annoy, forgive, and come back to.You are not just my wife.You are my partner, my best friend, my support, my comfort, and one of the biggest reasons so many chapters of my life are beautiful.And after everything…I still don’t want another package.I want ours.The same one.For all the chapters we haven’t written yet. ❤️",
      gallery: [
        "images/chapter4-1.jpg",
        "images/chapter4-2.jpg",
        "images/chapter4-3.jpg",
        "images/chapter4-4.jpg",
        "images/chapter4-5.jpg",
        "images/chapter4-6.jpg",
      ],
    },
  ],

  // One soundtrack per section. Put your audio files in a "music" folder
  // next to index.html, named exactly like this (or change the paths).
music: {
  intro:    { src: "music/intro.mp3",    start: 0 },
  chapter1: { src: "music/chapter1.mp3", start: 37 }, // غيّر الرقم ده لثانية الجزء اللي عايزه
  chapter2: { src: "music/chapter2.mp3", start: 0 },
  chapter3: { src: "music/chapter3.mp3", start: 0 },
  chapter4: { src: "music/chapter4.mp3", start: 0 },
},

  finaleMessage:
    "Happy Birthday, Koky ❤️\n\n Happy Birthday to the Girl who has been part of my story for almost 20 years. Twenty years of knowing you.\n\n Fourteen years of calling you my wife \n\n  And a lifetime of memories that I wouldn’t trade for anything \n\n If I had the chance to go back to the very beginning and live our story all over again, I wouldn’t change the ending \n\n I would choose you again. \n\n Through the easy days. \n\n Through the difficult ones.\n\n Through every laugh, every argument, every challenge, every crazy moment, every comeback, and every little memory that made us who we are today.\n\n Because the truth is…\n\n You became much more than the girl I fell in love with.\n\n You became my comfort zone.\n\n My partner.\n\n My home.\n\n My safe place.\n\n My favorite part of this life.\n\n And after everything we’ve been through, I think I finally understand what our story has always been about.\n\n We were never two separate pieces trying to fit together.\n\n We were always one package.\n\n A package that has been through a lot…\n\n A package that has been tested…\n\n A package that has sometimes been a little difficult to handle 😂…\n\n But a package that was never meant to be separated.\n\n And if there are still a thousand chapters waiting for us… \n\n I want every single one of them with you.\n\n Happy Birthday, my Koky ❤️\n\n Thank you for 20 years of “us.”\n\n And here’s to everything we haven’t lived yet.\n\n Still us.\n\n Still one package.",
  finaleSignature: "— I love you 7abebty ❤️❤️",
};







/* ============================================================
   App logic — shouldn't need to touch anything below this line
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  populateNames();
  buildAmbience();
  setupIntro();
  setupMusic();
});

function populateNames() {
  document.querySelectorAll(".husband-name").forEach((el) => (el.textContent = CONFIG.husbandName));
  document.querySelectorAll(".wife-name").forEach((el) => (el.textContent = CONFIG.wifeName));
  document.getElementById("intro-line").textContent = CONFIG.introLine;
  document.getElementById("intro-subline").textContent = CONFIG.introSubline;
}

/* ---------- Ambience: floating hearts + twinkles ---------- */
function buildAmbience() {
  const ambience = document.getElementById("ambience");
  const HEART_COUNT = 14;
  const TWINKLE_COUNT = 30;

  for (let i = 0; i < HEART_COUNT; i++) {
    const heart = document.createElement("span");
    heart.className = "heart animate-float-up";
    heart.textContent = "♥";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = 10 + Math.random() * 18 + "px";
    heart.style.animationDuration = 10 + Math.random() * 12 + "s";
    heart.style.animationDelay = Math.random() * 12 + "s";
    ambience.appendChild(heart);
  }

  for (let i = 0; i < TWINKLE_COUNT; i++) {
    const twinkle = document.createElement("span");
    twinkle.className = "twinkle animate-twinkle";
    twinkle.style.left = Math.random() * 100 + "%";
    twinkle.style.top = Math.random() * 100 + "%";
    twinkle.style.animationDuration = 2 + Math.random() * 3 + "s";
    twinkle.style.animationDelay = Math.random() * 4 + "s";
    ambience.appendChild(twinkle);
  }
}

/* ---------- Section navigation ---------- */
function showSection(id) {
  document.querySelectorAll(".section").forEach((s) => s.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
  playSectionMusic(id);
}

function setupIntro() {
  document.getElementById("start-btn").addEventListener("click", () => {
    showSection("quiz");
    startQuiz();
  });
}

/* ---------- Quiz ---------- */
let quizIndex = 0;

function startQuiz() {
  quizIndex = 0;
  renderQuestion();
}

function renderQuestion() {
  const total = CONFIG.quiz.length;
  const item = CONFIG.quiz[quizIndex];

  document.getElementById("quiz-progress-text").textContent = `Question ${quizIndex + 1} / ${total}`;
  document.getElementById("progress-bar").style.width = `${(quizIndex / total) * 100}%`;
  document.getElementById("question").textContent = item.question;
  document.getElementById("feedback").classList.add("hidden");

  const optionsEl = document.getElementById("options");
  optionsEl.innerHTML = "";
  optionsEl.classList.remove("hidden");

  item.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt.text;
    btn.addEventListener("click", () => selectOption(opt));
    optionsEl.appendChild(btn);
  });
}

function selectOption(opt) {
  const optionsEl = document.getElementById("options");
  const buttons = optionsEl.querySelectorAll(".option-btn");

  buttons.forEach((btn) => {
    btn.disabled = true;
    const matchesText = btn.textContent === opt.text;
    if (matchesText) btn.classList.add(opt.correct ? "correct" : "incorrect");
  });

  const feedback = document.getElementById("feedback");
  document.getElementById("feedback-title").textContent = opt.correct ? "You know me so well" : "Not quite";
  document.getElementById("feedback-text").textContent = opt.correct
    ? CONFIG.quiz[quizIndex].correctFeedback
    : CONFIG.quiz[quizIndex].wrongFeedback;
  feedback.classList.remove("hidden");

  const total = CONFIG.quiz.length;
  document.getElementById("progress-bar").style.width = `${((quizIndex + 1) / total) * 100}%`;
}

document.addEventListener("click", (e) => {
  if (e.target && e.target.id === "next-btn") {
    quizIndex++;
    if (quizIndex < CONFIG.quiz.length) {
      renderQuestion();
    } else {
      showSection("story");
      buildTimeline();
    }
  }
});

/* ---------- Story timeline ---------- */
function buildTimeline() {
  const timeline = document.getElementById("timeline");

  if (timeline.dataset.built) return;
  timeline.dataset.built = "true";

  CONFIG.story.forEach((chapter, i) => {
    const item = document.createElement("article");

    item.className = "timeline-item card";
    item.dataset.chapter = i + 1;

    if (i !== 0) {
      item.classList.add("hidden");
    }

    item.innerHTML = `
      <p class="chapter-label">${chapter.label}</p>

      <h3>${chapter.title}</h3>

      <p>${chapter.text}</p>

      ${
        chapter.gallery
          ? `
            <div class="chapter-gallery">
              ${chapter.gallery
                .map(
                  (img) =>
                    `<img 
                      src="${img}" 
                      alt="${chapter.label} photo" 
                      class="chapter-gallery-img" 
                      loading="lazy"
                    />`
                )
                .join("")}
            </div>
          `
          : ""
      }

      <div style="margin-top: 2rem; text-align: center;">
        ${
          i < CONFIG.story.length - 1
            ? `<button class="btn next-chapter-btn" data-next="${i + 1}">
                Next Chapter
              </button>`
            : `<button class="btn chapter-finale-btn">
                One last thing...
              </button>`
        }
      </div>
    `;

    timeline.appendChild(item);
  });

  revealTimelineOnScroll();

  // Start Chapter 1 music
  playSectionMusic("chapter1");

  // Next Chapter buttons
  document.querySelectorAll(".next-chapter-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const currentChapter = Number(button.dataset.next);
      const nextChapter = currentChapter + 1;

      const currentItem = document.querySelector(
        `[data-chapter="${currentChapter}"]`
      );

      const nextItem = document.querySelector(
        `[data-chapter="${nextChapter}"]`
      );

      if (!currentItem || !nextItem) return;

      currentItem.classList.add("hidden");
      nextItem.classList.remove("hidden");

      playSectionMusic(`chapter${nextChapter}`);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      revealTimelineOnScroll();
    });
  });

  // Final button after Chapter 4
  document
    .querySelector(".chapter-finale-btn")
    .addEventListener("click", () => {
      showSection("finale");

      document.getElementById("finale-message").textContent =
        CONFIG.finaleMessage;

      document.getElementById("finale-signature").textContent =
        CONFIG.finaleSignature;

      fireConfetti();
    });
}

function revealTimelineOnScroll() {
  const items = document.querySelectorAll(".timeline-item");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("in-view"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view", "animate-rise-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  items.forEach((el) => observer.observe(el));
}

/* ---------- Confetti burst ---------- */
function fireConfetti() {
  const confetti = document.getElementById("confetti");
  confetti.classList.remove("hidden");
  const colors = ["var(--rose)", "var(--gold)", "var(--wine)", "var(--blush)"];

  for (let i = 0; i < 60; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece animate-confetti";
    piece.style.left = Math.random() * 100 + "%";
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = 3 + Math.random() * 2.5 + "s";
    piece.style.animationDelay = Math.random() * 0.6 + "s";
    piece.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
    confetti.appendChild(piece);
  }

  setTimeout(() => {
    confetti.classList.add("hidden");
    confetti.innerHTML = "";
  }, 6500);
}

/* ---------- Music: one soundtrack per section ----------
   Put audio files in CONFIG.music (see top of this file).
   Every time showSection() runs, playSectionMusic() swaps the
   <audio> src to that section's track and plays it.
   If the person has muted the music with the toggle button,
   we remember that and don't force it back on when the track changes. */
let musicMuted = false;

function playSectionMusic(sectionId) {
  const audio = document.getElementById("bg-music");
  const track = CONFIG.music && CONFIG.music[sectionId];
  if (!track) return;

  const src = track.src;
  const startAt = track.start || 0;

  // Avoid restarting the same track if we're already on it.
  const alreadyOnThisTrack = audio.dataset.section === sectionId;
  if (!alreadyOnThisTrack) {
    audio.dataset.section = sectionId;
    audio.src = src;

    // Wait for metadata to load before seeking, otherwise
    // currentTime can silently get ignored on some browsers.
    const seekAndPlay = () => {
      audio.currentTime = startAt;
      audio.removeEventListener("loadedmetadata", seekAndPlay);
    };
    audio.addEventListener("loadedmetadata", seekAndPlay);
  }

  if (musicMuted) return;

  audio.play().catch(() => {
    // Autoplay was blocked by the browser (common on first load
    // before any user interaction). It will start on the next
    // click anywhere, handled by the listener in setupMusic().
  });
}

function setupMusic() {
  const audio = document.getElementById("bg-music");
  const toggle = document.getElementById("music-toggle");

  const setToggleUI = (playing) => {
    toggle.classList.toggle("playing", playing);
    toggle.textContent = playing ? "♫" : "♪";
    toggle.setAttribute("aria-label", playing ? "Mute music" : "Play music");
  };

  toggle.addEventListener("click", () => {
    if (musicMuted || audio.paused) {
      musicMuted = false;
      audio.play().catch(() => {});
      setToggleUI(true);
    } else {
      musicMuted = true;
      audio.pause();
      setToggleUI(false);
    }
  });

  // Kick off the intro track right away. Most browsers block audio
  // with sound before the visitor has interacted with the page at
  // all, so this will likely be blocked the very first time — that's
  // fine, the fallback below catches the first click/tap and retries.
  playSectionMusic("intro");

  const resumeOnFirstInteraction = () => {
    if (!musicMuted && audio.paused && audio.src) {
      audio.play().then(() => setToggleUI(true)).catch(() => {});
    }
    document.removeEventListener("click", resumeOnFirstInteraction);
    document.removeEventListener("touchstart", resumeOnFirstInteraction);
  };
  document.addEventListener("click", resumeOnFirstInteraction);
  document.addEventListener("touchstart", resumeOnFirstInteraction);

  audio.addEventListener("playing", () => setToggleUI(true));
  audio.addEventListener("pause", () => setToggleUI(false));
}