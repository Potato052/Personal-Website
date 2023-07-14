import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div className="w-full">
        <div className="max-w-[1240px] mx-auto px-2 py-16">
            <p className="text-3xl sm:text-4xl uppercase font-bold py-4 text-center">Projects</p>
            <div className="grid md:grid-cols-3 gap-8 mt-4">
                <ProjectItem title="Parcube" image="/projects/parcube.png" link="#" />
                <ProjectItem title="EasyChef" image="/projects/parcube.png" link="#" />
                <ProjectItem title="ThreeMusketeers" image="/projects/parcube.png" link="#" />
                <ProjectItem title="MeepoIsYou" image="/projects/parcube.png" link="#" />
                <ProjectItem title="Mysh" image="/projects/parcube.png" link="#" />
                <ProjectItem title="Personal Website" image="/projects/parcube.png" link="#" />
            </div>
        </div>
    </div>
  );
};

export default Projects;
