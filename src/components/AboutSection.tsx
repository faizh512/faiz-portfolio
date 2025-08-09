import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold electric mb-8" data-testid="text-about-title">About Me</h2>
            <div className="text-lg text-slate-300 space-y-4">
              <p data-testid="text-about-intro">
                I'm a passionate Full-Stack AI Developer with 5+ years of experience building end-to-end AI solutions. I specialize in LangChain, LangGraph, and creating sophisticated agentic workflows that automate complex business processes.
              </p>
              <p data-testid="text-about-experience">
                From fine-tuning large language models to building multi-agent systems with n8n and LangFlow, I create AI applications that seamlessly integrate with existing infrastructure using MCP and modern web technologies.
              </p>
              <p data-testid="text-about-interests">
                My expertise spans the entire AI development stack - from model fine-tuning and prompt engineering to building scalable web applications that bring AI capabilities to real users.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 glass-card rounded-lg">
                <div className="text-3xl font-bold electric" data-testid="text-projects-count">50+</div>
                <div className="text-slate-400" data-testid="text-projects-label">AI Projects</div>
              </div>
              <div className="text-center p-4 glass-card rounded-lg">
                <div className="text-3xl font-bold cyber" data-testid="text-experience-count">5+</div>
                <div className="text-slate-400" data-testid="text-experience-label">Years Experience</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card p-8 rounded-2xl w-full max-w-md">
              <h3 className="text-2xl font-semibold cyber mb-6 text-center">AI Development Stack</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-electric rounded-full animate-pulse"></div>
                  <span className="text-slate-300">LangChain & LangGraph</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-neon rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <span className="text-slate-300">Multi-Agent Systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-matrix rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <span className="text-slate-300">LLM Fine-tuning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-electric rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                  <span className="text-slate-300">Full-Stack Integration</span>
                </div>
              </div>
            </div>
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-neon/20 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-matrix/20 rounded-full"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
