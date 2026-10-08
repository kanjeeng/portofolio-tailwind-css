# Kanjeng Dhimas Cahyoherlina — DevOps & Security Portfolio

A personal portfolio website for **Kanjeng Dhimas Cahyoherlina**, a DevOps, Cloud Infrastructure & Security Engineer. The site showcases professional experience, technical skills, and project work across automation, cloud infrastructure, containerization, and network security — built as a fast, modern, single-codebase Next.js application.

**Focus areas:** CI/CD Automation · Cloud Infrastructure (AWS/GCP) · Containerization (Docker/Kubernetes) · Infrastructure as Code (Terraform/Ansible) · Network & Security (VPN, SIEM, Penetration Testing).

---

## 🛠 Tech Stack

| Category            | Technology                                    |
| ------------------- | --------------------------------------------- |
| Framework           | [Next.js 14](https://nextjs.org/) (App Router)|
| Language            | TypeScript                                    |
| Styling             | [Tailwind CSS](https://tailwindcss.com/)      |
| Animation           | [Framer Motion](https://www.framer.com/motion/)|
| Icons / Skill Cloud | [react-icon-cloud](https://www.npmjs.com/package/react-icon-cloud) (simple-icons) |
| Contact Form Email  | [Resend](https://resend.com/) (transactional email API) |
| Font                | [Inter](https://fonts.google.com/specimen/Inter) via `next/font` |
| Containerization    | Docker, Multi-stage Builds                    |

---

## 📁 Folder Structure

```text
src/
├── app/
│   ├── layout.tsx                # Root layout, global metadata & font
│   ├── page.tsx                  # Home — Hero, About, Experience marquee, Skills, Projects CTA, Contact
│   ├── globals.css               # Tailwind base layer + custom utility classes
│   ├── about/
│   │   └── page.tsx              # Dedicated About page
│   ├── skills/
│   │   └── page.tsx              # Dedicated Skills page (DevOps toolkit)
│   ├── experience/
│   │   └── page.tsx              # Dedicated Experience / career timeline page
│   ├── project/
│   │   └── page.tsx              # Dedicated Projects page (GitHub portfolio link)
│   ├── contact/
│   │   └── page.tsx              # Dedicated Contact page
│   └── backend/
│       └── api/
│           └── contact/
│               └── route.js      # API route — sends contact form submissions via Resend
│
├── components/
│   ├── Navbar.tsx                # Shared responsive navigation bar
│   ├── Footer.tsx                # Shared footer (links, social, credits)
│   ├── SocialLinks.tsx           # Shared social media icon row
│   ├── BackToTop.tsx             # Shared "scroll to top" floating button
│   ├── ContactForm.tsx           # Contact form (client component)
│   ├── SkillCategoryGrid.tsx     # Categorized skill list with tool logos
│   └── magicui/
│       ├── retro-grid.tsx        # Animated background grid
│       ├── marquee.tsx           # Infinite scrolling marquee
│       └── icon-cloud.tsx        # 3D rotating skill-logo cloud
│
├── lib/
│   └── utils.ts                  # Shared utility helpers (e.g. `cn` classnames merge)
│
├── public/
│   ├── script.js                 # Vanilla JS: navbar scroll state, hamburger menu, back-to-top
│   └── *.png / *.svg / *.gif     # Images used across the site
│
├── Dockerfile                    # Multi-stage Docker build configuration
├── next.config.mjs               # Next.js configuration (Standalone output enabled)
└── postcss.config.js             # Tailwind CSS & PostCSS configuration

```

---

## ✨ Features

* **DevOps-focused personal branding** — Hero section and copywriting positioned around Automation, Cloud Infrastructure, Containerization, and Security.
* **Fully responsive, modern UI** — subtle gradients, smooth hover transitions, soft shadows, and a consistent design system built with Tailwind CSS.
* **3D interactive skill cloud** — a rotating cloud of tool logos (AWS, Docker, Kubernetes, Terraform, GitHub Actions, and more) powered by `react-icon-cloud`.
* **Categorized skills grid** — tools grouped into Cloud & Virtualization, Containerization & Orchestration, CI/CD & Automation, Networking & Security, and OS/Scripting.
* **Dedicated Experience timeline** — a clean, well-spaced career history pulled from real professional experience.
* **Live GitHub-linked project portfolio** — a direct call-to-action to browse all project source code on GitHub, instead of static screenshots that go stale.
* **Serverless contact form** — messages submitted on the site are emailed directly to the site owner's inbox via [Resend](https://resend.com/), with no database required.
* **Production-Ready Docker Support** — Highly optimized, secure (non-root user), multi-stage Dockerfile utilizing Next.js `standalone` output mode.

---

## 🚀 Installation & Deployment Guide

You can run this project locally using Node.js or deploy it as a production-ready Docker container.

### Prerequisites

* [Node.js](https://nodejs.org/) **v18 or newer** (For local development)
* [Docker](https://www.docker.com/) (For containerized deployment)
* A free API key from [Resend](https://resend.com/)

### 1. Clone the repository

```bash
git clone [https://github.com/kanjeeng/portofolio-tailwind-css.git](https://github.com/kanjeeng/portofolio-tailwind-css.git)
cd portofolio-tailwind-css

```

### 2. Configure environment variables

Create a `.env.local` file in the project root:

```bash
cp .env.example .env.local

```

Fill in your actual values:

```env
# Get a free API key at [https://resend.com](https://resend.com)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
CONTACT_TO_EMAIL=dimasleny210@gmail.com

```

---

### 💻 Option A: Local Development (Node.js)

1. Install dependencies:
```bash
npm install

```


2. Run the development server:
```bash
npm run dev

```


3. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

### 🐳 Option B: Production Deployment (Docker) - Recommended for DevOps

This project uses a multi-stage `Dockerfile` optimized for Next.js `standalone` mode, reducing the final image size and running securely as a non-root user.

**Step 1: Build the Docker Image**
Since the Contact Form API relies on environment variables during the build process, we pass them as `--build-arg`:

```bash
docker build \
  --build-arg APP_VERSION=1.0.0 \
  --build-arg RESEND_API_KEY="<YOUR_RESEND_API_KEY>" \
  --build-arg CONTACT_TO_EMAIL="dimasleny210@gmail.com" \
  -t dhimas-portofolio:latest .

```

*(Note: Replace `<YOUR_RESEND_API_KEY>` with your actual Resend API Key).*

**Step 2: Run the Docker Container**
Once the image is built, run the container in detached mode, exposing port 3000, and passing the `.env.local` file for runtime configuration:

```bash
docker run -d \
  --name portofolio-prod \
  -p 3000:3000 \
  --env-file .env.local \
  --restart unless-stopped \
  dhimas-portofolio:latest

```

**Step 3: View the Application**

* Access the site: `http://localhost:3000`
* To view logs of the running container:
```bash
docker logs -f portofolio-prod

```



---

### ☁️ Option C: Deploy to Vercel

This project is also ready to deploy on [Vercel](https://vercel.com/) natively:

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Add the same environment variables (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`) under **Project Settings → Environment Variables**.
4. Deploy! Vercel will handle the Next.js builds automatically.

---

## 📬 Contact

* **Email:** dimasleny210@gmail.com
* **GitHub:** [github.com/kanjeeng](https://github.com/kanjeeng)
* **LinkedIn:** [Kanjeng Dhimas Cahyoherlina](https://www.linkedin.com/in/kanjeng-dhimas-cahyoherlina-249155197/)

---