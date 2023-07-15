import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div className="w-full">
        <div className="max-w-[1240px] mx-auto px-2 py-16">
            <p className="text-3xl sm:text-4xl uppercase font-bold py-4 text-center">Projects</p>
            <div className="grid md:grid-cols-2 gap-8 mt-4">
                <ProjectItem title="Parcube" image="/projects/parcube.png" description="Parcube is a React Native application designed to revolutionize the parking industry by decentralizing parking ownership" techs={["React Native", "Firebase", "TypeScript", "Expo", "GCP"]} link="#" />
                <ProjectItem title="EasyChef" image="/projects/parcube.png" description="" techs={["React", "Django", "Bootstrap", "Python", "JavaScript"]} link="#" />
                <ProjectItem title="ThreeMusketeers" image="/projects/parcube.png" description="" techs={["React Native", "Firebase"]} link="#" />
                <ProjectItem title="MeepoIsYou" image="/projects/parcube.png" description="" techs={["React Native", "Firebase"]} link="#" />
                <ProjectItem title="Mysh" image="/projects/parcube.png" description="" techs={["React Native", "Firebase"]} link="#" />
                <ProjectItem title="Personal Website" image="/projects/parcube.png" description="" techs={["React Native", "Firebase"]} link="#" />
            </div>
        </div>
    </div>
  );
};

export default Projects;
