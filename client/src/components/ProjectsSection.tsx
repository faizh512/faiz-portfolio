import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import img1 from '../../../public/ai_bot.png';
import img2 from '../../../public/cosmic_platform.png';
import img3 from '../../../public/cosmic_martketverse.png';
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  color: 'electric' | 'neon' | 'matrix';
}

const projects: Project[] = [
  {
    id: 'ai-support-assistant',
    title: 'AI Support Assistant',
    description: 'Intelligent chatbot system with real-time analytics dashboard, built using LangChain and Agentic Flow patterns for automated customer support.',
    image: img1, // Make sure ai_bot.png exists in public folder
    tags: ['LangChain', 'n8n', 'Python', 'React'],
    github: '#',
    demo: '#',
    color: 'electric'
  },
  {
    id: 'cosmic-data-platform',
    title: 'COSMIC Data Platform',
    description: 'Advanced data analytics platform with AI-powered insights, built using LangFlow for complex data processing and visualization workflows.',
    image: img2, // Make sure cosmic_platform.png exists in public folder
    tags: ['LangFlow', 'Fine-tuning', 'PostgreSQL'],
    github: '#',
    demo: '#',
    color: 'neon'
  },
  {
    id: 'cosmic-marketverse-ai',
    title: 'COSMIC MarketVerse AI',
    description: 'Comprehensive AI-driven market analysis platform using LangGraph for multi-agent workflows and MCP for seamless integrations.',
    image:img3, // Make sure cosmic_marketverse.png exists in public folder
    tags: ['LangGraph', 'MCP', 'LLM', 'AI Agents'],
    github: '#',
    demo: '#',
    color: 'matrix'
  }
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center electric mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          data-testid="text-projects-title"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card glass-card rounded-xl overflow-hidden hover:border-${project.color}/50 transition-all duration-300`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              data-testid={`card-project-${project.id}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-55 object-cover"
                data-testid={`img-project-${project.id}`}
              />
              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-2 ${project.color}`} data-testid={`text-project-title-${project.id}`}>
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4" data-testid={`text-project-description-${project.id}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 bg-${project.color}/20 text-${project.color} rounded-full text-sm`}
                      data-testid={`tag-project-${project.id}-${tag.toLowerCase()}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.demo}
                    className={`text-${project.color} hover:text-opacity-80 font-medium transition-colors`}
                    data-testid={`link-project-details-${project.id}`}
                  >
                    View Details
                  </a>
                  <div className="flex space-x-2">
                    {project.github && (
                      <a
                        href={project.github}
                        className={`text-slate-400 hover:text-${project.color} transition-colors`}
                        data-testid={`link-project-github-${project.id}`}
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        className={`text-slate-400 hover:text-${project.color} transition-colors`}
                        data-testid={`link-project-demo-${project.id}`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            variant="outline"
            className="px-8 py-3 border-2 border-electric text-electric rounded-lg font-semibold hover:bg-electric hover:text-white transition-all duration-300"
            data-testid="button-view-all-projects"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
