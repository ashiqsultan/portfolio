'use client';

import { Project } from '@/lib/data';
import { ExternalLink } from 'lucide-react';

interface ProjectShowcaseProps {
  project: Project;
}

export default function ProjectShowcase({ project }: ProjectShowcaseProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div
        onClick={() => {
          window.open(project.link);
        }}
        className="w-full md:w-1/2 rounded-xl border bg-card text-card-foreground shadow cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground"
      >
        <div className="space-y-2 p-6">
          <div className="flex space-x-1">
            <h3 className="font-semibold leading-none tracking-tight">
              {project.title}
            </h3>
            <ExternalLink height={15} width={15} />
          </div>
          <p className="text-sm text-muted-foreground">{project.description}</p>
        </div>
      </div>
      {/* Project Youtube embedded video - full width on mobile, 25% on medium screens */}
      <div className="w-full md:w-1/2">
        {project.videoId && (
          <div className="aspect-video w-full">
            <iframe
              src={`https://www.youtube.com/embed/${project.videoId}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              title={`${project.title} video`}
            />
          </div>
        )}
      </div>
    </div>
  );
}
