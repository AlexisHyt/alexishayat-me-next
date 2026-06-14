"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { getLangColor } from "@/lib/projectLanguagesMap";

const PAGE_SIZE = 5;
const MAX_VISIBLE_PAGES = 5;

interface ProjectsProps {
  projects: GitHubRepositoryWithLanguages[];
}

export function Projects({ projects }: ProjectsProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(projects.length / PAGE_SIZE));

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return projects.slice(start, start + PAGE_SIZE);
  }, [projects, currentPage]);

  const pageNumbers = useMemo(() => {
    if (totalPages <= MAX_VISIBLE_PAGES) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    const halfWindow = Math.floor(MAX_VISIBLE_PAGES / 2);
    let startPage = Math.max(1, currentPage - halfWindow);
    let endPage = startPage + MAX_VISIBLE_PAGES - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = endPage - MAX_VISIBLE_PAGES + 1;
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index,
    );
  }, [currentPage, totalPages]);

  const firstVisiblePage = pageNumbers[0];
  const lastVisiblePage = pageNumbers[pageNumbers.length - 1];

  return (
    <section id="projects" aria-label="Missions" className="scroll-mt-24">
      <h2 className="mb-8 font-mono text-xs uppercase tracking-[0.3em] text-primary lg:hidden">
        {"// projects"}
      </h2>
      <ul className="flex flex-col gap-4">
        {paginatedProjects.map((project) => {
          const tags = Object.entries(project.languages)
            .sort(([, bytesA], [, bytesB]) => Number(bytesB) - Number(bytesA))
            .slice(0, 3)
            .map(([language]) => language);

          return (
            <li
              key={project.id}
              className="group block rounded-lg border border-border bg-card/50 p-5"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="flex items-center gap-1.5 font-semibold text-foreground transition-colors group-hover:text-primary">
                  {project.name}
                </h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {new Date(project.pushed_at).getFullYear()}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {project.description ?? "No description provided."}
              </p>
              <div className="mt-4 flex justify-between items-center">
                <ul className="flex flex-wrap gap-2" aria-label="Languages">
                  {tags.map((tag) => (
                    <li
                      key={tag}
                      className={`rounded-full bg-accent/10 px-2.5 py-1 font-mono text-xs ${getLangColor(tag, "text")} ${getLangColor(tag, "border")} border`}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2">
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-8 items-center justify-center rounded-lg bg-secondary text-white px-2.5 text-sm font-medium transition-all hover:bg-secondary/80"
                  >
                    GitHub
                  </a>
                  {project.homepage && (
                    <a
                      href={project.homepage ?? "/"}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-8 items-center justify-center rounded-lg bg-primary px-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/80"
                    >
                      Homepage
                    </a>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <nav
        className="mt-6 flex items-center justify-center gap-2"
        aria-label="Project pages"
      >
        <button
          type="button"
          onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
          className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
          aria-label="Previous page"
        >
          {"<"}
        </button>

        {firstVisiblePage > 1 && (
          <button
            type="button"
            onClick={() => setCurrentPage(1)}
            className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-foreground transition-colors hover:bg-muted cursor-pointer"
          >
            1
          </button>
        )}

        {firstVisiblePage > 2 && (
          <span className="px-1 font-mono text-xs text-muted-foreground">
            ...
          </span>
        )}

        {pageNumbers.map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => setCurrentPage(page)}
            className={`rounded-md border px-2.5 py-1 font-mono text-xs transition-colors cursor-pointer ${
              currentPage === page
                ? "border-primary bg-primary/10 text-primary"
                : "border-border text-foreground hover:bg-muted"
            }`}
            aria-current={currentPage === page ? "page" : undefined}
          >
            {page}
          </button>
        ))}

        {lastVisiblePage < totalPages - 1 && (
          <span className="px-1 font-mono text-xs text-muted-foreground">
            ...
          </span>
        )}

        {lastVisiblePage < totalPages && (
          <button
            type="button"
            onClick={() => setCurrentPage(totalPages)}
            className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-foreground transition-colors hover:bg-muted cursor-pointer"
          >
            {totalPages}
          </button>
        )}

        <button
          type="button"
          onClick={() =>
            setCurrentPage((prev) => Math.min(totalPages, prev + 1))
          }
          disabled={currentPage === totalPages}
          className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
          aria-label="Next page"
        >
          {">"}
        </button>
      </nav>
    </section>
  );
}
