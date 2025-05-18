import { Project } from "@/types/project";

  
  export default function ProjectCard({ project }: { project: Project }) {
    return (
      <div   className="border h-full md:h-[450px] w-[280px] sm:w-[300px] md:w-[340px] lg:w-[360px] rounded-lg overflow-hidden shadow hover:shadow-lg bg-gray-900 transition">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{project.description}</p>
          <div className="flex flex-wrap gap-2 text-xs mb-3">
            {project.techStack.map((tech) => (
              <span key={tech} className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4 text-sm">
            <a href={project.liveUrl} target="_blank" className="text-blue-500 hover:underline">Live</a>
            <a href={project.githubUrl} target="_blank" className="text-blue-500 hover:underline">Code</a>
          </div>
        </div>
      </div>
    );
  }
  