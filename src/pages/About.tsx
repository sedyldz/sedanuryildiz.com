import { Header } from "../components/Header";

export function About() {
  return (
    <div className="min-h-screen bg-white font-mono">
      <Header />
      <main className="pt-32">
        <div className="px-6 pb-6 flex justify-between items-center border-b border-neutral-200">
          <div className="flex gap-4 text-sm">
            <span className="text-neutral-400">ABOUT</span>
            <span>/</span>
            <span>ME</span>
          </div>
        </div>
        <div className="p-6 text-sm">
        Full-stack developer and product designer with 10+ years of experience turning complex problems into intuitive, scalable products. My superpower is bridging product thinking, design, and engineering to bring clarity to ambiguity and turn ideas into products people love.

Currently exploring the intersection of AI and software development, experimenting with agentic workflows and rethinking what it means to build software.
        </div>
      </main>
    </div>
  );
}
