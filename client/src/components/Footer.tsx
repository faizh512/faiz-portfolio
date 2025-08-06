import { Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold electric mb-2" data-testid="text-footer-name">Faiz Hassan</h3>
            <p className="text-slate-400" data-testid="text-footer-title">Full-Stack AI Developer &amp; Technology Innovator</p>
          </div>

          <div className="flex space-x-6">
            <a
              href="#"
              className="text-slate-400 hover:text-electric transition-colors"
              data-testid="link-footer-github"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-neon transition-colors"
              data-testid="link-footer-linkedin"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-matrix transition-colors"
              data-testid="link-footer-twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-400" data-testid="text-footer-copyright">
            &copy; 2024 Faiz Hassan. All rights reserved. Built with passion and AI.
          </p>
        </div>
      </div>
    </footer>
  );
}
