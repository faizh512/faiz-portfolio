import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface Skill {
  name: string;
  percentage: number;
  category: 'ai' | 'programming' | 'cloud';
}

const skills: Skill[] = [
  { name: 'LangChain/LangGraph', percentage: 95, category: 'ai' },
  { name: 'Fine-tuning LLMs', percentage: 90, category: 'ai' },
  { name: 'Agentic Workflows', percentage: 95, category: 'ai' },
  { name: 'MCP Integration', percentage: 88, category: 'ai' },
  { name: 'TensorFlow/PyTorch', percentage: 90, category: 'ai' },
  { name: 'Python/FastAPI', percentage: 95, category: 'programming' },
  { name: 'JavaScript/TypeScript', percentage: 90, category: 'programming' },
  { name: 'React/Node.js', percentage: 88, category: 'programming' },
  { name: 'PostgreSQL/MongoDB', percentage: 85, category: 'programming' },
  { name: 'n8n/LangFlow', percentage: 92, category: 'cloud' },
  { name: 'AWS/Docker', percentage: 87, category: 'cloud' },
  { name: 'MLOps/CI-CD', percentage: 85, category: 'cloud' },
];

const categoryInfo = {
  ai: { title: 'AI & LLM Development', color: 'electric', gradient: 'from-electric to-cyber' },
  programming: { title: 'Full-Stack Development', color: 'neon', gradient: 'from-neon to-purple-400' },
  cloud: { title: 'Automation & DevOps', color: 'matrix', gradient: 'from-matrix to-emerald-400' },
};

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (isInView) {
      skills.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedSkills(prev => new Set(Array.from(prev).concat(skill.name)));
        }, index * 200);
      });
    }
  }, [isInView]);

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" className="py-20 bg-slate-800/30" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center electric mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          data-testid="text-skills-title"
        >
          Technical Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(Object.keys(groupedSkills) as Array<keyof typeof categoryInfo>).map((category, categoryIndex) => {
            const info = categoryInfo[category];
            return (
              <motion.div
                key={category}
                className={`glass-card rounded-xl p-6 hover:border-${info.color}/50 transition-all duration-300`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                data-testid={`card-skills-${category}`}
              >
                <h3 className={`text-xl font-semibold mb-4 ${info.color}`} data-testid={`text-skills-category-${category}`}>
                  {info.title}
                </h3>
                <div className="space-y-4">
                  {groupedSkills[category].map((skill) => (
                    <div key={skill.name} className="skill-item" data-testid={`skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                      <div className="flex justify-between mb-2">
                        <span data-testid={`text-skill-name-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>{skill.name}</span>
                        <span className="skill-percentage" data-testid={`text-skill-percentage-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                          {skill.percentage}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div
                          className={`skill-bar bg-gradient-to-r ${info.gradient} h-2 rounded-full transition-all duration-2000 ease-out`}
                          style={{
                            width: animatedSkills.has(skill.name) ? `${skill.percentage}%` : '0%'
                          }}
                          data-testid={`bar-skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
