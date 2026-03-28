import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const GithubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const projects = [
  {
    title: "DentAI Assist",
    description:
      "AI-powered dental assistant with voice interaction, appointment booking, and admin dashboard — designed to automate patient queries and streamline clinic operations.",
    image: "/projects/project1.png",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "VAPI", "Clerk"],
    link: "https://dent-ai-assist.vercel.app",
    github: "https://github.com/abhishekKumar253/DentAI-Assist",
  },
  {
    title: "E-Shop Mart",
    description:
      "A scalable e-commerce platform with secure Razorpay payments, admin dashboard, and real-time product management — built for modern online businesses.",
    image: "/projects/project2.png",
    tags: ["React", "Node.js", "MongoDB", "Redis", "Cloudinary", "Razorpay"],
    link: "https://ecommerce-store-o6lk.onrender.com",
    github: "https://github.com/abhishekKumar253/ecommerce-app-fullstack",
  },
  {
    title: "CodeScribe – Online Code Editor",
    description:
      "A SaaS code editor with real-time collaboration, customizable themes, and subscription-based access — built to provide a modern cloud coding experience.",
    image: "/projects/project3.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Convex",
      "Clerk",
      "Monaco Editor",
      "Lemon Squeezy",
    ],
    link: "https://code-scribe-seven.vercel.app",
    github: "https://github.com/abhishekKumar253/CodeScribe",
  },
  {
    title: "Connectify – Chat & Video App",
    description:
      "A real-time chat and video calling platform with secure authentication, friend system, and notifications — built to deliver seamless communication experiences.",
    image: "/projects/project4.png",
    tags: ["React", "Node.js", "MongoDB", "Stream", "JWT", "Resend"],
    link: "https://connectify-fullstack-chat-video-calling.onrender.com",
    github:
      "https://github.com/abhishekKumar253/connectify-fullstack-chat-video-calling-App",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm tracking-wider uppercase">
            Featured Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>

          <p className="text-muted-foreground">
            A selection of my work — showcasing real-world applications,
            performance, and problem-solving skills.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl border border-white/10 overflow-hidden hover:-translate-y-2 transition-all duration-300">
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent opacity-60" />

                {/* Hover Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-white transition">
                    <ArrowUpRight className="w-5 h-5" />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-white transition">
                    <GithubIcon />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full border border-white/10 text-muted-foreground hover:border-primary hover:text-primary transition">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <AnimatedBorderButton>
            <a
              href="https://github.com/abhishekKumar253"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2">
              View More on GitHub
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
