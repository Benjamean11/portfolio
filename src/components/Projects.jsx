import { motion } from "framer-motion";

function Projects() {
  const projectList = [
    { title: "Project 1", desc: "yoo project one." },
    { title: "Project 2", desc: "wagwan project two." },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-6 bg-white">
      <motion.h3 
        className="text-3xl font-bold text-center text-blue-600 mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        My Projects
      </motion.h3>

      <div className="grid md:grid-cols-2 gap-8 justify-center ml-35">
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            className="w-[30vw] h-[50vh] p-6 shadow-lg rounded-lg border bg-gray-100 transition-all duration-300 pl-7"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.8 }}
            viewport={{ once: false }}
          >
            <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
            <p className="text-gray-700">{project.desc}</p>
          </motion.div>
        ))}
      </div>
    </section> 
  );
}

export default Projects;
