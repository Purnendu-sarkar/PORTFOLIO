/* eslint-disable @typescript-eslint/no-unused-vars */
import { SkillsInfo, type SkillCategory } from "@/constants/skills";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 pb-24 container mx-auto font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Glow Background Effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-[120px]" />
      </div>

      {/* Section Title */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          🚀 Skills
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-3 rounded-full shadow-lg" />
        <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
          A collection of my technical skills and expertise honed through
          various projects and experiences.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {SkillsInfo.map((category: SkillCategory, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.15 }}
            viewport={{ once: true }}
          >
            <Card className="border bg-card/70 backdrop-blur-md shadow-[0_0_20px_rgba(130,69,236,0.15)] hover:shadow-[0_0_35px_rgba(130,69,236,0.35)] transition-all duration-500 rounded-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">
                  {category.title}
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                  {category.skills.map((skill, _i) => (
                    <motion.div
                      key={skill.name}
                      className="flex items-center justify-center gap-2 border border-border rounded-2xl px-4 py-3 bg-background/40 hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-sm hover:shadow-md"
                      whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-7 h-7 object-contain"
                      />
                      <span className="text-sm font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
