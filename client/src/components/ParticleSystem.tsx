import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  element: HTMLDivElement;
}

export function ParticleSystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const particles: Particle[] = [];
    const particleCount = window.innerWidth > 768 ? 50 : 25;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.width = Math.random() * 4 + 2 + 'px';
      particle.style.height = particle.style.width;
      particle.style.background = `rgba(14, 165, 233, ${Math.random() * 0.5 + 0.3})`;
      
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      
      particle.style.left = x + 'px';
      particle.style.top = y + 'px';
      
      container.appendChild(particle);
      
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        element: particle
      });
    }

    particlesRef.current = particles;

    function animate() {
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Boundary checking
        if (particle.x < 0 || particle.x > window.innerWidth) particle.vx *= -1;
        if (particle.y < 0 || particle.y > window.innerHeight) particle.vy *= -1;

        particle.element.style.left = particle.x + 'px';
        particle.element.style.top = particle.y + 'px';
      });

      animationRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      particles.forEach(particle => {
        particle.element.remove();
      });
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      // Clean up existing particles
      particlesRef.current.forEach(particle => {
        particle.element.remove();
      });
      particlesRef.current = [];
      
      // Recreate particles for new screen size
      if (containerRef.current) {
        const container = containerRef.current;
        const particles: Particle[] = [];
        const particleCount = window.innerWidth > 768 ? 50 : 25;

        for (let i = 0; i < particleCount; i++) {
          const particle = document.createElement('div');
          particle.className = 'particle';
          particle.style.width = Math.random() * 4 + 2 + 'px';
          particle.style.height = particle.style.width;
          particle.style.background = `rgba(14, 165, 233, ${Math.random() * 0.5 + 0.3})`;
          
          const x = Math.random() * window.innerWidth;
          const y = Math.random() * window.innerHeight;
          
          particle.style.left = x + 'px';
          particle.style.top = y + 'px';
          
          container.appendChild(particle);
          
          particles.push({
            x,
            y,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            element: particle
          });
        }

        particlesRef.current = particles;
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <div ref={containerRef} className="fixed inset-0 z-0" />;
}
