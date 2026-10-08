import { galaxiabound, diffusionimage, intelliverse, smiley5 } from "../components/assets";

// Every project lives here. Add an object to the list and it gets a card AND its own page at #/p/<slug>.
//
//   slug      short unique id used in the URL, e.g. "my-project" -> #/p/my-project
//   title     name shown on the card and page
//   tag       small label above the title
//   text      one or two sentences for the card
//   stack     tech list, e.g. "Python · React"
//   preview   card image. Use ONE of:  { image }  or  { tile: { bg, art } }  (art = a smiley gif from components/assets)
//             optional: badge: "Sample data" (yellow chip), play: true (shows a play icon for video)
//   overview  (optional) longer intro on the page. Falls back to `text`
//   team      (optional) small line under the title
//   features  (optional) [["Title", "Description"], ...] shown as "What it does"
//   wip       (optional) ["thing still to add", ...]. Shows a "Work in progress" banner at the top of the page.
//             Delete the line when the page is finished.
//   timeline  (optional) tournament/stage timeline, see robosoccer below
//   media     (optional) images and videos. { type: "image"|"video", src, caption }
//             videos also take poster, smSrc (smaller file for phones), title, opponent, color, note
//   links     (optional) [{ text, href }] buttons at the bottom of the page
//
// Files go in /public (videos in /public/videos, images in /public/<folder>) and are referenced with pub("/path").

export const pub = (path) => process.env.PUBLIC_URL + path;

// Each project has a detail page at #/p/<slug>.
//  preview: card image (or `tile` for a coloured tile with a smiley), `video` shows a play badge on the card
//  features: [title, text] pairs on the detail page
//  media: images / videos shown on the detail page, links: external buttons
export const projects = [
  {
    slug: "edge-vision",
    title: "Edge Vision Pipeline",
    tag: "Real-time CV on an NPU",
    text: "A C++ detection pipeline (YOLO26n on a Rockchip RK3588 NPU) with a tracker and a temporal-voting gate, at ~28ms end-to-end vs. the chip's published 66ms.",
    stack: "C++ · RKNN · YOLO",
    preview: { image: pub("/videos/uma-cv.jpg"), play: true },
    overview: "Part of the Uma smart vending machine. The pipeline has to work out which item a customer picked up, in real time, on a small NPU with 4GB of RAM.",
    features: [
      ["Fast inference", "Tuned NPU core allocation to reach ~28ms end-to-end, against 66ms on the chip's published Ultralytics benchmark (132% faster)."],
      ["Stable tracking", "A Hungarian-algorithm multi-object tracker keeps one identity per item across frames."],
      ["Temporal voting", "A classification gate waits for agreement across frames before deciding what an item is, so one noisy frame can't charge the wrong product."],
      ["Making it fit the NPU", "YOLO26n wouldn't run on the NPU as-is. It only worked once the last two layers were removed from the model and computed manually afterward."],
      ["Low-level memory work", "Custom memory management and device interfaces in C++ removed serialization overhead and cut latency a further ~30%."],
    ],
    wip: ["A latency chart (28ms vs. the 66ms benchmark)", "A write-up on how the model was adapted for the NPU"],
    media: [{ type: "video", src: pub("/videos/uma-cv.mp4"), poster: pub("/videos/uma-cv.jpg"), caption: "The pipeline running on the device" }],
  },
  {
    slug: "uma-devkit",
    title: "Uma DevKit",
    tag: "CV tuning & eval platform",
    text: "A desktop tool to tune an edge vision pipeline, run it against labelled video, and compare runs, in place of eyeballing results.",
    stack: "Python · Flask · React · TypeScript · Tailwind",
    preview: { image: pub("/devkit/frames.jpg"), badge: "Demo data" },
    overview: "Tuning a detector and tracker by feel doesn't scale. DevKit closes the loop. Change a parameter, run the pipeline on the device against ground-truth video, and see exactly what got better or worse. The screenshots here use generated demo data, not real footage.",
    features: [
      ["Live tuner", "Edit the device's pipeline parameters in grouped panels (detection, track lifecycle, velocity coasting, appearance matching, flow verification and more), then push them to the device. Named profiles can be saved, loaded and deleted."],
      ["Run an eval", "Upload a video, a folder of frames or a zip, plus optional ground truth (YOLO txt, COCO JSON or custom JSON). The run executes on the device in the background with live progress."],
      ["Tracking metrics", "ID swaps, fragmentations, flicker, double matches, respawns and a lifetime distribution, so tracker problems show up as numbers."],
      ["Detection metrics", "Precision, recall, F1, mean IoU and mAP@0.5 against ground truth."],
      ["Frame browser", "Step through any run with toggleable layers (raw detections, tracked items, classified crops), alongside a track timeline that marks creations, conflicts and suppressions."],
      ["Annotated video", "Every run is rendered to an annotated MP4 so a result can be shared without the tool."],
      ["Run comparison", "Pick two runs and see metric differences next to the exact parameter diffs that caused them."],
      ["Device updater", "A panel for the on-device updater: status, logs, screenshots, installed packages, a shell, and one-click maintenance actions."],
      ["Tested", "A pytest suite covers the updater and shell command handling."],
    ],
    wip: ["Screenshots from real device runs (these use demo data)", "Walkthroughs of the Tuner and Updater panels"],
    media: [
      { type: "image", src: pub("/devkit/frames.jpg"), caption: "Frame browser with detections, tracks and the track timeline (demo data)" },
      { type: "image", src: pub("/devkit/metrics.jpg"), caption: "Tracking and detection metrics, lifetime distribution and fragmentations (demo data)" },
      { type: "image", src: pub("/devkit/compare.jpg"), caption: "Comparing two tuning profiles with parameter diffs (demo data)" },
    ],
  },
  {
    slug: "uma-vending",
    title: "Uma Smart Vending Platform",
    tag: "Device fleet architecture",
    text: "A dual-app system (vending app plus an always-on watchdog and updater) on an RK3588 Android device, coordinated over MQTT and AWS IoT.",
    stack: "Kotlin · Python · MQTT · AWS IoT",
    preview: { tile: { bg: "#fff1c2", art: smiley5 } },
    overview: "A vending machine that has to stay usable and remotely manageable even when software misbehaves, across a fleet of devices in the field.",
    features: [
      ["Dual-app watchdog", "The customer-facing app and an always-on watchdog/updater run as separate apps sharing a UID, so a crash in one never takes the other down. Crashes are detected and state is recovered within 10 seconds."],
      ["MQTT coordination", "Concurrent state machines for machine lifecycle, operating mode and order status coordinate over AWS IoT Core, S3 and KVS rather than direct IPC."],
      ["Safe updates", "Every remote APK and model download is checked (HTTP status, byte count, file magic) before it touches a live device, so a bad update can't brick one."],
      ["Hardened credentials", "AES/GCM key encryption bound to the Android Keystore/TEE and scope-limited one-time provisioning certificates."],
      ["Two-tier CI/CD", "Cloud runners build, lint and unit-test on every push. A self-hosted runner runs ~111 end-to-end tests against real hardware."],
    ],
    wip: ["An architecture diagram of the watchdog and MQTT flow"],
  },
  {
    slug: "jobber",
    title: "Jobber",
    tag: "AI resume & job-application assistant",
    text: "Full-stack app, built solo, that scores a resume against a job description, tailors it to the role and tracks every application on a board.",
    stack: "React · Vite · Node.js · SQLite · Docker",
    preview: { image: pub("/jobber/board-card.jpg"), badge: "Sample data" },
    overview: "Applying to jobs means rewriting a resume, a cover letter and a spreadsheet for every posting. Jobber puts it in one place. Paste a job link, get an ATS-style match score with keyword gaps, tailor the resume to the role, and track the application from backlog to offer. The screenshots use made-up sample companies and scores.",
    features: [
      ["ATS match score", "A 0–100 score from deterministic keyword matching, so the same resume and posting always give the same number, plus a gap analysis of missing keywords."],
      ["Resume tailoring", "AI rewrites LaTeX bullets for the target role, and a Vitest eval harness catches prompt regressions."],
      ["Provider-agnostic LLM layer", "Resume optimization, cover letters and interview prep run over Anthropic, Google or OpenAI behind one interface."],
      ["Dual-mode resume editor", "Edit in a Monaco LaTeX editor or a structured doc editor, with Google Docs import."],
      ["Application board", "Backlog, Drafting, Review, Applied, Interview and Offer columns, with a board and list view."],
      ["Job search and prep", "Live job search, an email generator, and interview prep."],
      ["Built to ship", "React/Vite client, Express API, SQLite with JWT auth, deployed with Docker and nginx on Linux."],
    ],
    wip: ["Screenshots of the ATS scan and cover-letter screens", "A short deploy and architecture write-up"],
    media: [
      { type: "image", src: pub("/jobber/board.jpg"), caption: "The application board, with made-up sample companies" },
      { type: "image", src: pub("/jobber/list.jpg"), caption: "The same applications in list view" },
      { type: "image", src: pub("/jobber/editor.jpg"), caption: "The LaTeX resume editor" },
    ],
  },
  {
    slug: "robosoccer",
    title: "RoboSoccer",
    tag: "Competition winner",
    team: "Team Triple Dev Redundancy",
    text: "An autonomous C++ robot that tracks moving targets, dodges obstacles and scores under tight latency limits.",
    stack: "C++ · Robotics",
    preview: { image: pub("/videos/robosoccer-semifinal-1.jpg"), play: true },
    overview: "For CSCC85 (Fundamentals of Robotics and Automated Systems) at the University of Toronto, every team built a fully autonomous soccer robot. Robots then played a bracket tournament. Our team, Triple Dev Redundancy, played through to the final.",
    features: [
      ["Finite state machine", "A deterministic FSM manages real-time state transitions from multi-sensor telemetry inputs."],
      ["PID control", "Tuned PID controllers for locomotion and orientation, with sensor feedback loops that adapt to variable field conditions."],
      ["Latency constraints", "Tracks moving targets, evades dynamic obstacles and scores goals under strict latency constraints."],
    ],
    wip: ["A highlight reel of the goals", "Short notes on strategy for each match"],
    // Tournament timeline. Each stage lists indexes into `media` below (0 = first clip).
    // Fill `result` (e.g. "Won 3-1") and `note` whenever you like. They show up on the timeline automatically.
    timeline: [
      { name: "Quarterfinal", vs: "G-17", result: "", note: "", clips: [0, 1] },
      { name: "Semifinal", vs: "The Big Result", result: "", note: "", clips: [2, 3] },
      { name: "Final", vs: "7:37s Get the Bot!", result: "", note: "", clips: [4, 5] },
    ],
    // One clip per half. `color` is the robot colour (sides can switch between halves) and `note` is a short caption.
    media: [
      { type: "video", title: "Quarterfinal · 1st half", opponent: "vs G-17", color: "Red", note: "", src: pub("/videos/robosoccer-quarterfinal-1.mp4"), smSrc: pub("/videos/robosoccer-quarterfinal-1-sm.mp4"), poster: pub("/videos/robosoccer-quarterfinal-1.jpg") },
      { type: "video", title: "Quarterfinal · 2nd half", opponent: "vs G-17", color: "Blue", note: "", src: pub("/videos/robosoccer-quarterfinal-2.mp4"), smSrc: pub("/videos/robosoccer-quarterfinal-2-sm.mp4"), poster: pub("/videos/robosoccer-quarterfinal-2.jpg") },
      { type: "video", title: "Semifinal · 1st half", opponent: "vs The Big Result", color: "Blue", note: "", src: pub("/videos/robosoccer-semifinal-1.mp4"), smSrc: pub("/videos/robosoccer-semifinal-1-sm.mp4"), poster: pub("/videos/robosoccer-semifinal-1.jpg") },
      { type: "video", title: "Semifinal · 2nd half", opponent: "vs The Big Result", color: "Red", note: "", src: pub("/videos/robosoccer-semifinal-2.mp4"), smSrc: pub("/videos/robosoccer-semifinal-2-sm.mp4"), poster: pub("/videos/robosoccer-semifinal-2.jpg") },
      { type: "video", title: "Final · 1st half", opponent: "vs 7:37s Get the Bot!", color: "Red", note: "", src: pub("/videos/robosoccer-final-1.mp4"), smSrc: pub("/videos/robosoccer-final-1-sm.mp4"), poster: pub("/videos/robosoccer-final-1.jpg") },
      { type: "video", title: "Final · 2nd half", opponent: "vs 7:37s Get the Bot!", color: "Blue", note: "", src: pub("/videos/robosoccer-final-2.mp4"), smSrc: pub("/videos/robosoccer-final-2-sm.mp4"), poster: pub("/videos/robosoccer-final-2.jpg") },
    ],
  },
  {
    slug: "beyond-the-visible",
    title: "Beyond the Visible",
    tag: "Published research",
    text: "A 3D diffusion model that denoises hyperspectral satellite images across space and wavelength, presented at SmallSat 2024.",
    stack: "Python · PyTorch · CUDA",
    preview: { image: diffusionimage },
    overview: "Hyperspectral cameras on the FINCH CubeSat produce images with stripe noise. This work built a 3D diffusion model that denoises and destripes across both spatial and spectral dimensions, and was presented as an oral talk at the SmallSat Conference 2024.",
    features: [
      ["3D diffusion model", "Jointly attends to spectral and spatial dimensions, with distributed GPU acceleration."],
      ["Synthetic training data", "A stripe generator produced 5,000+ realistic noisy hyperspectral images for training."],
      ["Results", "+15% PSNR and +5% SSIM over previous methods."],
    ],
    links: [{ text: "Read the paper (arXiv)", href: "https://arxiv.org/abs/2406.10724" }],
  },
  {
    slug: "galaxia-bound",
    title: "Galaxia Bound",
    tag: "Game jam winner",
    text: "A browser space game made in Unity with two teammates. Developer's Choice winner at ScoreSpace 30.",
    stack: "Unity · C#",
    preview: { image: galaxiabound },
    overview: "Made in a game jam with two teammates and playable in the browser.",
    links: [{ text: "Play it on itch.io", href: "https://qin2500.itch.io/galaxia-bound" }],
  },
  {
    slug: "intelliverse",
    title: "Intelliverse",
    tag: "Hack the Valley 7",
    text: "A three-layer app with a swappable backend. Top 5 hacks, Best Discovery Hack and Most Creative Use of GitHub.",
    stack: "TypeScript · React Native · GraphQL",
    preview: { image: intelliverse },
    overview: "Built at Hack the Valley 7 with a three-layer architecture, so the backend can later serve different frontends.",
    links: [{ text: "See it on Devpost", href: "https://devpost.com/software/intelliverse" }],
  },
];
