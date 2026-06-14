import { About } from "@/components/about";
import { PageSection } from "@/components/components/PageSection";
import { Projects } from "@/components/projects";
import { Sidebar } from "@/components/sidebar";
import { Skills } from "@/components/skills";
import { fetchRepos } from "@/lib/github/fetchRepos";

export default async function Page() {
  const projects = (await fetchRepos()).sort(
    (a, b) => Date.parse(b.pushed_at) - Date.parse(a.pushed_at),
  );

  return (
    <div className="relative min-h-screen">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[40vh] bg-[radial-gradient(ellipse_at_top,oklch(0.8_0.16_78/0.08),transparent_70%)]"
      />

      <main className="mx-auto max-w-6xl mt-12 px-6 md:px-12 lg:flex lg:gap-16 lg:px-16">
        <Sidebar />

        <div className="space-y-24 py-16 lg:w-[58%] lg:py-24">
          <PageSection title={"About me"}>
            <About />
          </PageSection>

          <PageSection title={"Skills"}>
            <Skills />
          </PageSection>

          <PageSection title={"Projects"}>
            <Projects projects={projects} />
          </PageSection>

          <footer className="border-t border-border pt-6">
            <p className="font-mono text-xs text-muted-foreground">
              Built with ❤️ by AlexisH. The Force will be with you, always.
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
