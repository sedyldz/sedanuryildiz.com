import { getGoogleDriveEmbedUrl } from "../lib/projects";
import { LazyLoadImage } from "react-lazy-load-image-component";

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  year: string;
  media: { type: "video" | "image" | "youtube"; url: string }[]; 
  technologies: string[];
  url?: string;
  github?: string;
};

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="flex flex-col gap-8">
      {projects.map((project) => (
        <div key={project.id} className="flex flex-col gap-6">
          <div className="min-w-[200px]">
            <div className="flex  gap-2">
              <span className="text-sm text-neutral-500">{project.id}</span>
            </div>
            <div className="flex justify-between gap-2">
              <span className="text-sm text-neutral-500">{project.title}</span>
              <span className="text-sm text-neutral-500">{project.year}</span>
            </div>
            <div className="text-sm ">{project.category}</div>
            <div className="text-sm ">{project.description}</div>
            <div className="mt-2 text-sm text-neutral-500">
              {project.technologies.join(" · ")}
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 overflow-x-auto flex-grow ">
            {project.media.map((media, index) => (
              <div
                key={index}
                className="flex relative group h-[200px] w-[355px] items-start"
              >
                { media.type === "youtube" ? (
                   <iframe
                   className="h-full w-full object-cover"
                   src={media.url}
                   allow="autoplay; encrypted-media" allowFullScreen                
                 />
                ) : media.type === "video" ? (
                  <iframe
                    className="h-full w-full object-cover"
                    src={getGoogleDriveEmbedUrl(media.url)}
                    allow="autoplay"
                    allowFullScreen
                  />
                ): (
                  <LazyLoadImage
                    className="h-full w-full object-contain"
                    src={media.url}
                    alt={`${project.title} - ${index + 1}`}
                    effect="blur"
                    placeholderSrc="/placeholder.jpg"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
