// One entry per job, newest first. Add a new object to the top of the list to add a job.
// { role, company, dates, points: ["bullet", ...] }
export const experience = [
  {
    role: "Software Engineer · Full-Stack & Edge ML",
    company: "Uma Ltd.",
    dates: "Sep 2025 – Jun 2026",
    points: [
      "Architected a real-time C++ computer vision pipeline (YOLO26n on a Rockchip RK3588 NPU) with a multi-object tracker and temporal-voting gate: ~28ms end-to-end vs. the chip's published 66ms benchmark.",
      "Designed a dual-app watchdog architecture over MQTT so a device stays remotely manageable through crashes, recovering state within 10 seconds.",
      "Hardened the fleet with Keystore/TEE-bound key encryption, one-time provisioning certificates and integrity checks on every remote APK and model download.",
      "Built a two-tier CI/CD pipeline with a self-hosted runner running ~111 end-to-end tests against real hardware.",
      "Built the customer ordering web app (Next.js) end-to-end with Apple Pay and Google Pay via Moneris, plus features on the FastAPI operator dashboard and backend.",
    ],
  },
  {
    role: "Machine Learning Engineer",
    company: "Themis AI",
    dates: "Apr 2025 – Aug 2025",
    points: [
      "Implemented uncertainty estimation and active learning methods in scalable ML pipelines, cutting scoring latency 70% over 100k+ samples.",
      "Built Python CLI tools for multi-annotator labeling workflows, reducing label noise ~30%.",
      "Moved GPU workloads to RunPod serverless, halving monthly costs.",
    ],
  },
  {
    role: "Machine Learning Engineer",
    company: "UTAT Space Systems",
    dates: "Sep 2023 – Sep 2024",
    points: [
      "Built Python data pipelines that generated 5,000+ hyperspectral images for CV and ML training.",
      "Resolved CUDA, GPU memory and dependency conflicts across distributed systems, cutting post-processing time ~50%.",
      "Co-authored research presented at SmallSat 2024: +15% PSNR and +5% SSIM over previous methods.",
    ],
  },
  {
    role: "Build Infrastructure Developer",
    company: "BlackBerry QNX",
    dates: "Sep 2021 – Dec 2021",
    points: [
      "Migrated CI/CD from static VMs to Docker, freeing 95% of host resources and eliminating build queues.",
      "Automated container documentation with Python and Bash, saving manual work every week.",
      "Built a replacement Jenkins plugin that reached 99% uptime and cut build failures ~40%.",
    ],
  },
  {
    role: "Hackathon Mentor",
    company: "MetHacks",
    dates: "May 2023",
    points: [
      "Ran a workshop on React and TensorFlow, and mentored teams to ~90% functional prototypes by the end of the event.",
    ],
  },
];
