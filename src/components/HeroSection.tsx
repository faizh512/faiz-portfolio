import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const downloadResume = () => {
    // TODO: Implement resume download
    console.log('Download resume clicked');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center neural-bg">
      <div className="max-w-4xl mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Full-Stack <span className="electric">AI</span>
            <br />
            <span className="cyber">Developer</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Building end-to-end AI solutions with LangChain, LangGraph, and agentic workflows that transform businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToProjects}
              className="px-8 py-4 bg-electric text-white rounded-lg font-semibold hover:bg-cyan-500 transition-all duration-300 transform hover:scale-105 animate-glow"
              data-testid="button-view-work"
            >
              View My Work
            </Button>
            <Button
              onClick={downloadResume}
              variant="outline"
              className="px-8 py-4 border-2 border-electric text-electric rounded-lg font-semibold hover:bg-electric hover:text-white transition-all duration-300"
              data-testid="button-download-resume"
            >
              Download Resume
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-neon/20 rounded-full"
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-16 h-16 bg-matrix/20 rounded-full"
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute top-1/2 left-20 w-12 h-12 bg-cyber/20 rounded-full"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </section>
  );
}
