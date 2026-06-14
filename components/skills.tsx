import Link from "next/link";
import { SKILLS_GROUPS } from "@/lib/skills";

export function Skills() {
  return (
    <section id="skills" aria-label="Arsenal" className="scroll-mt-24">
      <h2 className="mb-8 font-mono text-xs uppercase tracking-[0.3em] text-primary lg:hidden">
        {"// skills"}
      </h2>
      <div className="grid gap-8 sm:grid-cols-3">
        {Object.entries(SKILLS_GROUPS).map(([name, skills]) => (
          <div key={name}>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              {name}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <Link
                    href={skill.documentation}
                    key={skill.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li
                      key={skill.name}
                      className={`rounded-full border ${skill.border} ${skill.shadow} transition-shadow bg-card text-white px-3 py-1 font-mono text-sm flex items-center gap-2 cursor-pointer`}
                    >
                      <Icon className={`${skill.color}`} />
                      {skill.name}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
