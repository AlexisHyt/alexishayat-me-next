"use client";

import Glitch from "@donnieashok/react-textglitch";
import { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
];

const SOCIALS = [
  { href: "https://github.com/AlexisHyt", label: "GitHub" },
  { href: "https://www.linkedin.com/in/alexis-hayat/", label: "LinkedIn" },
];

const sidebarLineColors = [
  "bg-red-600 shadow-[0px_0px_45px_10px_#E7000B]",
  "bg-sky-600 shadow-[0px_0px_45px_10px_#0084D1]",
  "bg-green-600 shadow-[0px_0px_45px_10px_#00A63E]",
  "bg-violet-600 shadow-[0px_0px_45px_10px_#7F22FE]",
];

export function Sidebar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-10% 0px -80% 0px" },
    );
    for (const item of NAV) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[42%] lg:max-w-md lg:flex-col lg:justify-between lg:py-24">
      <div>
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
          {"// "}
          <Tooltip>
            <TooltipTrigger>
              <span className="font-aurebesh">profile</span>
            </TooltipTrigger>
            <TooltipContent>Profile</TooltipContent>
          </Tooltip>
        </p>
        <Glitch>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Alexis Hayat
          </h1>
        </Glitch>
        <h2 className="mt-3 text-lg font-medium text-foreground/90">
          Full-Stack Developer
        </h2>
        <p className="mt-4 max-w-xs text-pretty leading-relaxed text-muted-foreground">
          Developer (noun, masculine): To write words on a dark text editor
        </p>

        <nav aria-label="Section navigation" className="mt-16 hidden lg:block">
          <ul className="space-y-4">
            {NAV.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="group flex items-center gap-4 py-1"
                  >
                    <span
                      className={`h-px transition-all duration-300 ${
                        isActive
                          ? `w-16 ${sidebarLineColors[NAV.indexOf(item) % sidebarLineColors.length]}`
                          : "w-8 bg-muted-foreground/40 group-hover:w-16 group-hover:bg-foreground"
                      }`}
                    />
                    <span
                      className={`font-mono text-xs uppercase tracking-[0.2em] transition-colors ${
                        isActive
                          ? "text-primary"
                          : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <ul className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-2">
        {SOCIALS.map(({ href, label }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-primary"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
