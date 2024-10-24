'use client';
import Navbar from '@/components/navbar';
import ProjectShowcase from '@/components/project-showcase';
import Sidebar from '@/components/sidebar';
import SkillOutline from '@/components/skill-outline';
import WorkShowcase from '@/components/work-showcase';

import {
  Project,
  WorkExperience,
  aboutYou,
  projects,
  skills,
  workExperiences,
} from '@/lib/data';

export default function Home() {
  return (
    <div className="max-w-full md:max-w-4xl mx-auto md:mt-8">
      <Navbar />
      <div className="flex flex-col md:flex-row my-3 md:my-5 mx-4 md:mx-0 space-y-4 md:space-y-0 md:space-x-10">
        <div className="w-full md:min-w-[65vh] space-y-5">
          <Sidebar />
          <section id="home" key="home" className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="flex justify-between sm:justify-end space-x-4">
                <div className="space-y-1">
                  <h3 className="font-medium leading-none">
                    {aboutYou.yearsOfExperience}
                  </h3>
                  <p className="text-xs text-muted-foreground">Experience</p>
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium leading-none">
                    {aboutYou.location}
                  </h3>
                  <p className="text-xs text-muted-foreground">Location</p>
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {skills.map((skill) => (
                  <SkillOutline
                    key={skill.text}
                    Icon={skill.icon}
                    text={skill.text}
                  />
                ))}
              </div>
              <p className="text-xs text-muted-foreground">Tech stack</p>
            </div>
          </section>

          {/* Projects */}
          <section id="projects" key="projects">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
              Projects
            </h2>
            <div className="space-y-5 mt-5">
              {projects.map((project: Project) => (
                <ProjectShowcase key={project.title} project={project} />
              ))}
            </div>
          </section>
          {/* Work */}
          <section id="work" key="work">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
              Work
            </h2>
            <div className="mt-5 rounded-xl border bg-card text-card-foreground shadow">
              <div className="p-4 md:p-6 space-y-6">
                {workExperiences.map(
                  (experience: WorkExperience, index: number) => (
                    <WorkShowcase
                      key={experience.company}
                      experience={experience}
                      whetherlast={workExperiences.length == index + 1}
                    />
                  )
                )}
              </div>
            </div>
          </section>
          {/* Contact */}
          <section id="contact" key="contact">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
              Contact
            </h2>
            <div className="mt-5 rounded-xl border bg-card text-card-foreground shadow">
              <p className="p-4 md:p-6 text-sm text-muted-foreground">
                Best way to reach me is through:{' '}
                <a href={`mailto:${aboutYou.email}`} className="break-all">
                  {aboutYou.email}
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
