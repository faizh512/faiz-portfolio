import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      return await apiRequest('POST', '/api/contacts', data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    },
    onError: (error) => {
      console.error('Contact form error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactForm) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <section id="contact" className="py-20" ref={ref}>
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center electric mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          data-testid="text-contact-title"
        >
          Get In Touch
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4 cyber" data-testid="text-contact-subtitle">
                Let's Build Something Amazing
              </h3>
              <p className="text-slate-300 mb-6" data-testid="text-contact-description">
                I'm always interested in new opportunities and exciting projects. 
                Whether you want to discuss AI solutions, collaborate on research, 
                or just have a chat about the future of technology, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4" data-testid="contact-info-email">
                <div className="w-12 h-12 bg-electric/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 electric" />
                </div>
                <div>
                  <p className="text-slate-400">Email</p>
                  <p className="text-slate-200" data-testid="text-contact-email">faiz.hassan@email.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4" data-testid="contact-info-phone">
                <div className="w-12 h-12 bg-neon/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 neon" />
                </div>
                <div>
                  <p className="text-slate-400">Phone</p>
                  <p className="text-slate-200" data-testid="text-contact-phone">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4" data-testid="contact-info-location">
                <div className="w-12 h-12 bg-matrix/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 matrix" />
                </div>
                <div>
                  <p className="text-slate-400">Location</p>
                  <p className="text-slate-200" data-testid="text-contact-location">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="glass-card rounded-xl p-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="form-contact">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-300 mb-2">Name</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange('name')}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-100 focus:border-electric focus:outline-none transition-colors"
                    placeholder="Your Name"
                    data-testid="input-contact-name"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-2">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange('email')}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-100 focus:border-electric focus:outline-none transition-colors"
                    placeholder="your@email.com"
                    data-testid="input-contact-email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-300 mb-2">Subject</label>
                <Input
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange('subject')}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-100 focus:border-electric focus:outline-none transition-colors"
                  placeholder="Project Discussion"
                  data-testid="input-contact-subject"
                />
              </div>
              <div>
                <label className="block text-slate-300 mb-2">Message</label>
                <Textarea
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange('message')}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-100 focus:border-electric focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  data-testid="textarea-contact-message"
                />
              </div>
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full px-6 py-3 bg-gradient-to-r from-electric to-cyber text-white rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                data-testid="button-contact-submit"
              >
                {contactMutation.isPending ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
