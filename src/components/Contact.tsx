import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Mock API Submission delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Trigger Success Confetti explosion!
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });

    // Reset form after submission
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-50/50 dark:bg-slate-900/10">
      
      {/* Background glow ball */}
      <div className="glow-circle w-[350px] h-[350px] bg-primary/10 bottom-10 left-10 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <span className="text-[11px] font-mono font-bold text-primary tracking-widest uppercase block mb-3">
            07. Contact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Connect with me
          </h2>
        </div>

        {/* Outer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Card: Email */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-6 rounded-2xl glass-card glass-card-hover text-left flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="overflow-hidden">
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider block mb-1">Email Me</span>
                <h4 className="text-sm sm:text-base font-mono font-bold text-slate-900 dark:text-white truncate">
                  {personalInfo.email}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Checked daily &middot; Quick response</p>
              </div>
            </a>

            {/* Card: Phone */}
            <a
              href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
              className="p-6 rounded-2xl glass-card glass-card-hover text-left flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider block mb-1">Call Me</span>
                <h4 className="text-base font-mono font-bold text-slate-900 dark:text-white">
                  {personalInfo.phone}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Available for phone / WhatsApp chat</p>
              </div>
            </a>

            {/* Card: Location */}
            <div className="p-6 rounded-2xl glass-card text-left flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider block mb-1">Office Location</span>
                <h4 className="text-base font-display font-bold text-slate-900 dark:text-white tracking-tight">
                  Hyderabad, Telangana
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{personalInfo.location}</p>
              </div>
            </div>

            {/* Quote Block */}
            <div className="p-6 rounded-2xl glass-card bg-gradient-to-br from-primary/5 to-secondary/5 border-l-4 border-l-secondary text-left italic text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              "Building solid scalable backends is my passion, but delivering a gorgeous, intuitive user experience is what makes it complete."
            </div>

          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-card border border-slate-200/50 dark:border-slate-800/50 h-full relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {submitSuccess ? (
                  // Success Message Overlay
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-16 h-full"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 max-w-sm mb-8 leading-relaxed">
                      Thank you, your message has been received. I will review it and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="px-6 py-2.5 rounded-xl border border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-800 font-mono font-bold text-xs uppercase tracking-wider cursor-pointer transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  // Actual Form
                  <motion.form
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 text-left"
                    noValidate
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Field: Name */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="text-[11px] font-mono text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl bg-slate-100/50 dark:bg-slate-900/50 border ${
                            errors.name ? 'border-rose-500 focus:ring-rose-500/20' : 'border-slate-200/50 dark:border-slate-800/50 focus:border-primary/50'
                          } focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all text-sm`}
                          placeholder="Your Name"
                          disabled={isSubmitting}
                        />
                        {errors.name && (
                          <span className="text-xs font-mono text-rose-500 font-medium flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.name}
                          </span>
                        )}
                      </div>

                      {/* Field: Email */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-[11px] font-mono text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl bg-slate-100/50 dark:bg-slate-900/50 border ${
                            errors.email ? 'border-rose-500 focus:ring-rose-500/20' : 'border-slate-200/50 dark:border-slate-800/50 focus:border-primary/50'
                          } focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all text-sm`}
                          placeholder="you@example.com"
                          disabled={isSubmitting}
                        />
                        {errors.email && (
                          <span className="text-xs font-mono text-rose-500 font-medium flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.email}
                          </span>
                        )}
                      </div>

                    </div>

                    {/* Field: Subject */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="subject" className="text-[11px] font-mono text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-100/50 dark:bg-slate-900/50 border ${
                          errors.subject ? 'border-rose-500 focus:ring-rose-500/20' : 'border-slate-200/50 dark:border-slate-800/50 focus:border-primary/50'
                        } focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all text-sm`}
                        placeholder="Project inquiry, collaboration, job post, etc."
                        disabled={isSubmitting}
                      />
                      {errors.subject && (
                        <span className="text-xs font-mono text-rose-500 font-medium flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.subject}
                        </span>
                      )}
                    </div>

                    {/* Field: Message */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-[11px] font-mono text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-100/50 dark:bg-slate-900/50 border ${
                          errors.message ? 'border-rose-500 focus:ring-rose-500/20' : 'border-slate-200/50 dark:border-slate-800/50 focus:border-primary/50'
                        } focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all text-sm resize-none`}
                        placeholder="Tell me about your project context or requirements..."
                        disabled={isSubmitting}
                      />
                      {errors.message && (
                        <span className="text-xs font-mono text-rose-500 font-medium flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.message}
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-primary via-secondary to-purple-600 text-white font-mono font-bold uppercase tracking-wider hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:-translate-y-0"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4.5 h-4.5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>

                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
