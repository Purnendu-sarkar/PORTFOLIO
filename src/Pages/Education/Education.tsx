import { EducationInfo } from "@/constants/education";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
      style={{
        backgroundImage:
          "linear-gradient(38.73deg, rgba(204, 0, 187, 0.15), rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15))",
        clipPath: "polygon(0px 0px, 100% 0px, 100% 98%, 75% 96%, 0px 100%)",
      }}
    >
      {/* Section Title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-white">🎓EDUCATION</h2>
        <div className="w-52 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>
        {EducationInfo.map((edu, idx) => (
          <motion.div
            key={edu.degree}
            className={`relative flex items-center w-full mb-12 ${
              idx % 2 === 0
                ? "md:justify-start justify-center"
                : "md:justify-end justify-center"
            }`}
            style={{ opacity: 1, transform: "none", marginTop: idx * 40 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-400 rounded-full shadow-md border-4 border-gray-900 hidden md:block"></div>
            <div
              className={`w-full md:w-5/12 p-6 lg:p-8 rounded-xl shadow-lg border border-gray-700 backdrop-blur-md bg-gray-800 bg-opacity-60 ${
                idx % 2 === 0 ? "md:ml-10" : "md:mr-10"
              }`}
            >
              <h3 className="text-2xl lg:text-3xl font-semibold text-blue-300">
                {edu.degree}
              </h3>
              <p className="text-lg lg:text-xl text-gray-200">
                {edu.institution}
              </p>
              <p className="text-gray-400">{edu.period}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
