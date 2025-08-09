import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  color: 'electric' | 'neon' | 'matrix';
}

const experiences: Experience[] = [
  {
    id: 'senior-ai-developer',
    title: 'Senior Full-Stack AI Developer',
    company: 'COSMIC AI Solutions',
    period: '2022 - Present',
    description: 'Leading development of enterprise AI platforms using LangChain and LangGraph. Built multi-agent systems that process over 1M+ conversations monthly with 95% accuracy using advanced agentic workflows.',
    skills: ['LangChain', 'Multi-Agents', 'Fine-tuning'],
    color: 'electric'
  },
  {
    id: 'ai-automation-engineer',
    title: 'AI Automation Engineer',
    company: 'DataFlow Technologies',
    period: '2020 - 2022',
    description: 'Developed intelligent automation workflows using n8n and LangFlow. Created MCP integrations that reduced manual processing time by 80% across multiple enterprise systems.',
    skills: ['n8n', 'LangFlow', 'MCP'],
    color: 'neon'
  },
  {
    id: 'llm-developer',
    title: 'LLM Developer',
    company: 'AI Research Lab',
    period: '2019 - 2020',
    description: 'Specialized in fine-tuning large language models for domain-specific applications. Developed custom training pipelines that improved model performance by 40% on specialized tasks.',
    skills: ['Fine-tuning', 'LLMs', 'Training'],
    color: 'matrix'
  }
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 bg-slate-800/30" ref={ref}>
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center electric mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          data-testid="text-experience-title"
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-electric via-neon to-matrix" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="experience-item relative pl-20"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                data-testid={`item-experience-${exp.id}`}
              >
                <div className={`absolute left-6 w-4 h-4 bg-${exp.color} rounded-full border-4 border-slate-900`} />
                <div className="glass-card rounded-xl p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                    <div>
                      <h3 className={`text-xl font-semibold ${exp.color}`} data-testid={`text-experience-title-${exp.id}`}>
                        {exp.title}
                      </h3>
                      <p className="cyber font-medium" data-testid={`text-experience-company-${exp.id}`}>
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-slate-400 mt-2 sm:mt-0" data-testid={`text-experience-period-${exp.id}`}>
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-slate-300 mb-4" data-testid={`text-experience-description-${exp.id}`}>
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 bg-${exp.color}/20 text-${exp.color} rounded-full text-sm`}
                        data-testid={`tag-experience-skill-${exp.id}-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
