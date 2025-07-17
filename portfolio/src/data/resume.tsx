import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Kishor Patil",
  initials: "KP",
  url: "https://kishorpatil.onrender.com",
  location: "Nashik, India",
  locationLink: "https://www.google.com/maps/place/nashik",
  description:
    "I’m skilled in Full Stack Development (MERN) | Machine Learning Enthusiast",
  summary:
    " A Final Year Information Technology student, passionate about creating solutions to real-world problems. Focused on integrating full-stack applications with Machine Learning models to build impactful systems. Known for strongleadership, teamwork, adaptability, and a continuous learning mindset.",
  avatarUrl: "/me.png", 
  skills: [
    "React",
    "TailwindCSS",
    "Typescript",
    "Node.js",
    "Python",
    "Machine Learning",
    "Docker",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "kishorpatil.connect@gmail.com",
    tel: "+91 9322303426",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/kishor-04",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kishorpatil04",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://www.linkedin.com/in/kishorpatil04",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "https://kishorpatil.connect@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Virtuoso Systems",
      href: "https://virtuososystems.com/",
      badges: [],
      location: "Remote",
      title: "Web Development Intern",
      logoUrl: "/atomic.png",
      start: "April 2025",
      end: "May 2025",
      description:
        " Developed a hands-on e-commerce website using the MERN stack",
    },
  ],
  education: [
    {
      school: "KK Wagh Institute of Engineering Education and Research, Nashik",
      href: "https://www.kkwagh.edu.in/",
      degree: "B-Tech in Information Technology",
      logoUrl: "/kkwagh-logo.jpg",
      start: "2022",
      end: "2026",
    },
    {
      school: "Gram Vikas Vidyalaya and Junior College, Pimpalgaon hareshwar,Dist-Jalgaon",
      href: "",
      degree: "HSC (Science)",
      logoUrl: "/gram-logo.jpg",
      start: "2021",
      end: "2022",
    },
    {
      school: "Nirmal International School, Pachora ,Dist-Jalgaon",
      href: "https://www.skooladmission.com/view_school_profile.php?school=76&action=login",
      degree: "CBSE (10th)",
      logoUrl: "/nirmal-logo.png",
      start: "2019",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "IdeaTech",
      href: "https://ideatech.onrender.com/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/djkdzdfry/video/upload/v1752770826/IdeaTech-record_kju0rj.mp4",
    },
    {
      title: "Journey Sphere",
      href: "https://journeysphere-fe.onrender.com/",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://res.cloudinary.com/djkdzdfry/video/upload/v1752772337/JourneySphere-record_jpgov4.mp4",
    },
    {
      title: "Transformer Go",
      href: "https://transformer-84q4.onrender.com/",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://transformer-84q4.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://res.cloudinary.com/djkdzdfry/video/upload/v1752772376/TransformerGo-record_lvorei.mp4",
    },
    {
      title: "Ecommerce",
      href: "https://ideatech.onrender.com/ecommerce",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/djkdzdfry/video/upload/v1752772406/Ecommerce-record_jn0gss.mp4",
    },
  ],
  hackathons: [
    
  ],
} as const;
