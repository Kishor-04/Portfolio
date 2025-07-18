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
      dates: "April 2024 - June 2025",
      active: true,
      description:
        "Led the development of an interactive platform for my college’s Idealab, approved for student use. Dynamic guides for machines such as PCB laser cutting and 3d printing. Manages labs and machine access permission requests, uploading newsletters, and granting teacher access for workshop invitations. Provides the idealab machine products selling ecommerce platform",
      technologies: [
        "MERN",
        "TailwindCSS",
        "Figma",
        "Cloudinary",
      ],
      links: [
        {
          type: "Website",
          href: "https://ideatech.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Kishor-04/IdeaTech-React",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/djkdzdfry/video/upload/v1752770826/IdeaTech-record_kju0rj.mp4",
    },
    {
      title: "Journey Sphere",
      href: "https://journeysphere-fe.onrender.com/",
      dates: "June 2025",
      active: true,
      description:
        "Journey Sphere Travels is your one-stop destination for planning unforgettable adventures around the globe. Whether you’re dreaming of serene beaches, bustling cities, exotic escapes, or cultural explorations, we craft personalized travel experiences tailored just for you.",
      technologies: [
        "MERN",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://journeysphere-fe.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Kishor-04/MERN-JourneySphere-ATravelAcencyWebsite",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://res.cloudinary.com/djkdzdfry/video/upload/v1752772337/JourneySphere-record_jpgov4.mp4",
    },
    {
      title: "Transformer Go",
      href: "https://transformer-84q4.onrender.com/",
      dates: "March 2025 - April 2025",
      active: true,
      description:
         "Built a physical transformer manufacturing measurement Full stack app with machine learning model for error detection. Provides the measurement of the transformer on entering desired outputs. Implemented error prediction model using RandomForestRegressor.",
      technologies: [
        "MERN",
        "TailwindCSS",
        "Flask",
        "Machine Learning",
      ],
      links: [
        {
          type: "Website",
          href: "https://transformer-84q4.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/VAIBHAVSING/TransformerApp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://res.cloudinary.com/djkdzdfry/video/upload/v1752772376/TransformerGo-record_lvorei.mp4",
    },
    {
      title: "Ecommerce",
      href: "https://ideatech.onrender.com/ecommerce",
      dates: "April 2025 - June 2025",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "MERN",
        "TailwindCSS",
        "Cloudinary",
        "Figma"
      ],
      links: [
        {
          type: "Website",
          href: "https://ideatech.onrender.com/ecommerce",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Kishor-04/IdeaTech-React/tree/master/Frontend/src/pages/Ecommerce",
          icon: <Icons.github className="size-3" />,
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
