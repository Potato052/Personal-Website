import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id='project' className="w-full bg-neutral-800 pl-2">
        <div className="max-w-[1240px] mx-auto px-2 py-16">
            <p className="text-3xl sm:text-4xl uppercase font-bold py-4 text-center text-white">Projects</p>
            <div className="grid md:grid-cols-2 gap-8 mt-4">
                <ProjectItem title="Parcube" image="/projects/parcube.png" description="A React Native application designed to revolutionize the parking industry by decentralizing parking ownership" techs={["React Native", "Firebase", "TypeScript", "Expo", "GCP"]} link="https://github.com/Potato052/Parcube" />
                <ProjectItem title="EasyChef" image="/projects/easychef.png" description="Innovative recipe application that allows users to search for recipes based on ingredients they have on hand" techs={["React", "Django", "Bootstrap", "Python", "JavaScript"]} link="https://github.com/Potato052/EasyChef" />
                <ProjectItem title="ThreeMusketeers" image="/projects/threemusket.png" description="Modernized version of the eponymous classic abstract strategy board game." techs={["Java", "JavaFx"]} link="https://github.com/Potato052/ThreeMusketeers" />
                <ProjectItem title="MeepoIsYou" image="/projects/meepoisyou-card.webp" description="A homage of the popular puzzle game Baba Is You, built using Pygame." techs={["Python", "Pygame"]} link="#" />
                <ProjectItem title="Mysh" image="/projects/terminal.jpg" description="C-powered shell supporting basic commands, piping, redirection and background processes." techs={["C"]} link="#" />
                <ProjectItem title="Personal Website" image="/projects/personal-web.png" description="Personal portfolio website built using Next.js and Tailwind CSS." techs={["Next.js", "tailwind"]} link="https://github.com/Potato052/Personal-website" />
            </div>
        </div>
    </div>
  );
};

export default Projects;
