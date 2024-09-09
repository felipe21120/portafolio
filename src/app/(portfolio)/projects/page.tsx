import { ContainerProjects } from "./ui/ContainerProjects";

export default function ProjectsPage() {
    return (
      <div>
        <h1 className="font-bold text-4xl">Mis Proyectos</h1>
        <p className="mt-6 font-light">He realizado muchos proyectos</p>   
        <ContainerProjects />
      </div>
    );
  }