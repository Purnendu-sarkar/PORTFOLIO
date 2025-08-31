import { useState } from "react";
import { ProjectsData, type Project } from "@/constants/projects";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 px-6 md:px-10 lg:px-20 ">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          🚀 Projects
        </h2>
        <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
          A showcase of the projects I have worked on, highlighting my skills
          and experience.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {ProjectsData.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            viewport={{ once: true }}
          >
            <Card
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer border bg-card/70 backdrop-blur-md hover:shadow-xl transition-all duration-500 rounded-2xl"
            >
              <CardContent className="p-6">
                <img
                  src={
                    typeof project.image === "string"
                      ? project.image
                      : project.image.src
                  }
                  alt={project.title}
                  className="rounded-xl w-full h-40 object-cover mb-5"
                />

                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-muted hover:bg-accent transition"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 6 && (
                    <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-600">
                      +{project.technologies.length - 6} more
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-2xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-5">
                <img
                  src={
                    typeof selectedProject.image === "string"
                      ? selectedProject.image
                      : selectedProject.image.src
                  }
                  alt={selectedProject.title}
                  className="rounded-xl w-full h-56 object-cover"
                />

                <p className="text-muted-foreground">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-foreground transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-6">
                  <Button asChild>
                    <a
                      href={selectedProject.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                  </Button>
                  <Button asChild variant="secondary">
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Live
                    </a>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
