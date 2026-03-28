import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "BSc in Information Technology",
    institution: "Nilamber Pitamber University",
    period: "2022 — 2025",
    location: "Jharkhand, India",
    description:
      "Built strong fundamentals in Data Structures, Algorithms, and Web Development while gaining hands-on experience through real-world projects using modern technologies.",
    tags: [
      "Data Structures",
      "Algorithms",
      "MERN Stack",
      "REST APIs",
      "System Design Basics",
    ],
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Education
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Academic{" "}
            <span className="font-serif italic font-normal text-white">
              background.
            </span>
          </h2>
          <p className="text-muted-foreground">
            My educational foundation that shaped my technical thinking and
            problem-solving approach.
          </p>
        </div>

        {/* Education Card */}
        <div className="max-w-3xl">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="glass p-8 rounded-2xl border border-primary/30 hover:border-primary/50   hover:scale-[1.02] transition-all duration-300">
              {/* Top Row */}
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-7 h-7 text-primary" />
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-sm text-primary font-medium mb-1">
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </div>
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-muted-foreground mt-1">
                    {edu.institution} — {edu.location}
                  </p>
                  <p className="text-sm text-muted-foreground mt-4">
                    {edu.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {edu.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-surface text-xs rounded-full border border-white/10 text-muted-foreground hover:border-primary/50 hover:text-primary transition">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
