import { Header } from "../components/Header";
import { ProjectGrid } from "../components/ProjectGrid";
import { projects } from "../lib/projects";

export function Home() {
  return (
    <div className="min-h-screen bg-white font-mono">
      <Header />
      <main className="pt-32">
        <div className="px-6 pb-6 flex justify-between items-center border-b border-neutral-200">
          <div className="flex gap-4 text-sm">
            <span className="text-neutral-400">OVERVIEW</span>
            <span>/</span>
            <span>INDEX</span>
          </div>
        </div>
        <div className="p-6">
          <ProjectGrid projects={projects} />
        </div>
      </main>
    </div>
  );
}
