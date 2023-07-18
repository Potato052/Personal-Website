import TechIcon from "./TechIcon";

const About = () => {
  return (
    <div id='about' className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-28 pl-5">
        <div>
          <h2 className="text-3xl sm:text-4xl uppercase font-bold py-4">
            About
          </h2>
          <p>
            Hi, I&apos;m Nigel! I recently finished my bachelor&apos;s degree in computer
            science University of Toronto. I&apos;m a fullstack software developer
            with over 6 months of industry experience. I&apos;m passionate about
            learning new technologies and keep myself up to date with latest
            technology trends. Though I am most proficient in building
            application with react, python and java, I am a quick learner and
            can pick up new tech stacks as needed. I am currently looking for
            full time opportunities as a software developer. Feel free to
            contact me if you have any questions or just want to say hi!
          </p>
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl uppercase font-bold py-4">
            Skills
          </h2>
          <div className="flex flex-wrap mb-4">
            <TechIcon name="HTML" file="html.svg" />
            <TechIcon name="CSS" file="css.svg" />
            <TechIcon name="JavaScript"file="javascript.svg"css="max-h-[55px] mt-[2px]"/>
            <TechIcon name="TypeScript" file="typescript.svg" />
            <TechIcon name="React" file="react.svg" />
            <TechIcon name="Nextjs" file="nextjs.svg" />
            <TechIcon name="NodeJs" file="node2.png" />
            <TechIcon name="C" file="c.png" />
            <TechIcon name="Python" file="python.svg" />
            <TechIcon name="Java" file="java.svg" />
            <TechIcon name="Django" file="django.svg" />
            <TechIcon name="PostgreSQL" file="postgresql.svg" />
            <TechIcon name="MongoDB" file="mongo.svg" />
            <TechIcon name="Neo4j" file="neo4j.svg" />
            <TechIcon name="firebase" file="firebase.svg" css="max-h-[60px]" />
            <TechIcon name="Git" file="git.svg" />
            <TechIcon name="Docker" file="docker.svg" />
            <TechIcon name="Bash" file="bash.png" />
            <TechIcon name="Vite" file="vite.svg" />
            <TechIcon name="Tailwind" file="tailwind.svg" />
            <TechIcon name="Bootstrap" file="bootstrap.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
