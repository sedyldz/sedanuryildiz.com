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
          I'm a 3 times hackathon winner full stack developer with product
          design background. I have more than 8 years experience delivering
          complex systems and scalable solutions using modern technologies. At
          Percona, I developed an observability tool to help database
          administrators identify and solve issues like slow queries and high
          CPU usage. As CTO of Knowy.ai, I hired and led a team of 8 developers
          to build a scalable MVP with advanced knowledge graphs. During six
          years at a digital product studio, I delivered 10+ web and mobile
          applications.
        </div>
      </main>
    </div>
  );
}
