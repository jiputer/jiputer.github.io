// Site-wide text and links. Edit here to change the header, hero and footer.
export const email = "jpaulma23@gmail.com";

export const links = {
  github: "https://github.com/jiputer",
  linkedin: "https://www.linkedin.com/in/john-p-ma",
  itch: "https://jiputer.itch.io/",
  resume: process.env.PUBLIC_URL + "/John_M_Resume.pdf",
};

export const hero = {
  hello: "Hi, I'm John",
  title: "I'm a software engineer, full-stack developer and ML engineer.",
  lede: "I can build real-time computer vision systems in C++, ship web apps end to end, and take ML models from research to deployment. Based in Toronto.",
};

// Links shown in the top bar (the theme toggle is added after these).
export const navLinks = [
  { label: "LinkedIn", href: links.linkedin },
  { label: "GitHub", href: links.github },
  { label: "itch.io", href: links.itch },
  { label: "Resume", href: links.resume },
];
