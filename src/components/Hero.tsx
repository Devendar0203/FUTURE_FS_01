import React, { useState, useEffect } from 'react';
import { Download, Mail, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { motion } from 'framer-motion';

const GithubIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const LeetcodeIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.4l-7.203 7.2a1.37 1.37 0 0 0 0 1.935l.753.753a1.37 1.37 0 0 0 1.959-.006l6.45-6.45 6.086 6.087a1.37 1.37 0 0 0 1.937 0l.752-.752a1.37 1.37 0 0 0 0-1.936L14.45.4A1.374 1.374 0 0 0 13.483 0zm-8.877 9.801a1.37 1.37 0 0 0-.957.396l-3.23 3.23a1.37 1.37 0 0 0 0 1.937l7.2 7.2a1.37 1.37 0 0 0 1.936 0l3.23-3.23a1.37 1.37 0 0 0 0-1.936l-7.2-7.2a1.37 1.37 0 0 0-.979-.397z" />
  </svg>
);

const CodechefIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M11.2574.0039c-.37.0101-.7353.041-1.1003.095C9.6164.153 9.0766.4236 8.482.694c-.757.3244-1.5147.6486-2.2176.7027-1.1896.3785-1.568.919-1.8925 1.3516 0 .054-.054.1079-.054.1079-.4325.865-.4873 1.73-.325 2.5952.1621.5407.3786 1.0282.5408 1.5148.3785 1.0274.7578 2.0007.92 3.1362.1622.3244.3235.7571.4316 1.1897.2704.8651.542 1.8383 1.353 2.5952l.0057-.0028c.0175.0183.0301.0387.0482.0568.0072-.0036.0141-.0063.0213-.0099l-.0213-.5849c.6489-.9733 1.5673-1.6221 2.865-1.8925.5195-.1093 1.081-.1497 1.6625-.1278a8.7733 8.7733 0 0 1 1.7988.2357c1.4599.3785 2.595 1.1358 2.6492 1.7846.0273.3549.0398.6952.0326 1.0364-.001.064-.0046.1285-.007.193l.1362.0682c.075-.0375.1424-.107.2059-.1902.0008-.001.002-.002.0028-.0028.0018-.0023.0039-.0061.0057-.0085.0396-.0536.0747-.1236.1107-.1931.0188-.0377.0372-.0866.0554-.1292.2048-.4622.362-1.1536.538-1.9635.0541-.2703.1092-.4864.1633-.7027.4326-.9733 1.0266-1.8382 1.6213-2.6492.9733-1.3518 1.8928-2.5962 1.7846-4.0561-1.784-3.4608-4.2718-4.0017-5.5695-4.272-.2163-.0541-.3233-.0539-.4856-.108-1.3382-.2433-2.4945-.3953-3.6046-.3648zm5.0428 14.3788a9.8602 9.8602 0 0 0-.0326-.9824c-.0541-.703-1.1892-1.46-2.7032-1.8386-.588-.1336-1.1764-.2142-1.7448-.2356-.539-.0137-1.0657.0248-1.5546.1277-1.2436.2704-2.2162.9193-2.811 1.8925l.0511 1.431c.6672-.3558 1.7326-.8747 3.139-.9994.0662-.0059.1368-.0059.2044-.0099.1177-.013.2667-.044.4444-.044 1.6075 0 3.2682.5336 4.8767 1.6483.039-.2744.0611-.549.071-.8234l.044.0227c.0028-.0622.0143-.1268.0156-.1888zM11.256.0578c.1239-.0034.2538.01.379.0114-.23-.0022-.4588.0026-.6871.0156.103-.0061.2046-.0242.308-.027zm.4983.0156c.6552.014 1.3255.0711 2.0387.1803-.6834-.0987-1.3646-.1671-2.0387-.1803zm-1.3147.0554c-.076.0087-.1527.0133-.2285.0241-.8168.1167-1.7742.7015-2.75 1.045.3545-.1323.7143-.2957 1.0747-.4501C9.0765.4774 9.6705.207 10.1571.1529c.0939-.0139.1886-.0133.2825-.0241zm-.2285.24c.1622 0 .3787-.0002.5409.0539-.1425-.0357-.2595-.026-.3706-.0142a1.174 1.174 0 0 1 .3166.0681c.5796 1.0012-.4264 5.2791-.6786 8.1492.1559 1.0276.3138 1.9963.4628 2.7201-.7029-1.7843-1.4067-4.921-1.5148-7.354-.054-.9733.001-1.8386.2172-2.4874C9.401.8557 9.7244.4228 10.2111.3687zm3.1361.271c-.811 2.1088-.9184 6.1092-.9725 7.3528-.054.5407-.0001 1.73.054 2.5952 0 .2163.054.4325.054.6488 0-.2163-.054-.3786-.054-.5948-.4326-3.2442-.974-7.1362.9185-10.002zm3.352.3777c-.2704 2.1628-1.4047 3.191-1.7832 5.2998-.1081 1.6762-.325 3.6222-.379 5.2984-.0541-1.6762-.0007-3.4601.2697-5.2444.2703-1.8384.8651-3.6776 1.8925-5.3538zm-10.381.433c-.3581.1194-.632.248-.8575.3805.2317-.1358.4996-.2666.8575-.3805zm.2101.1974c.2155.0025.4384.0734.6006.2357-.0067-.004-.0078-.0033-.0142-.0071.1331.0929.2666.2093.3932.3847-.2036.9673.2553 3.0317.0398 4.6694.0763 1.5485.0717 3.1804.849 4.4594-.9796-1.5107-1.176-3.4375-1.3218-5.236-.1128-1.0907-.2035-2.0969-.4642-2.9033-.144-.3047-.2684-.5745-.3833-.822-.0247-.0369-.0447-.0784-.071-.1135-.1082-.1082-.1619-.2696-.1619-.3777 0-.054.0539-.1618.108-.1618.054-.0541.1616-.0553.2157-.1094a1.013 1.013 0 0 1 .2101-.0184zm-1.3459.6133c-.0604.0201-.0923.041-.1405.061.1768-.0341c.2163.7027.3243 1.4054.4326 2.0539-.0541.0541-.1083.054-.1623.108.0541.2163.1623.3243.2164.4866l-.1623.1622c.1623.1621.2704.3783.3786.5404-.3244.3244-.5947.7029-.9191 1.0272.2703.108.5407.2702.757.4324l.0541-.1621c.1622-.2704.2703-.4866.4326-.757.054-.108.1081-.2161.1622-.3242.2704-.4326.5947-.9733.9192-1.514.1622-.2163.2703-.4866.3785-.757-.1082 0-.2163-.0541-.2704-.108.054-.2163-.0001-.4866-.0541-.757-.2704-.9734-.5408-1.9469-.7571-2.9202-.054-.2703-.1622-.5407-.2703-.8651zm-1.2982.5947c-.2293.0765-.3953.1812-.5121.2858.1187-.1039.283-.2099.5121-.2858zm.2157.1974a4.0152 4.0152 0 0 1 .318.995c-.1049-.3323-.2112-.6633-.318-.995zm.5996 1.4886c.0381.1668.0772.3377.1107.5097-.0302-.1705-.072-.3414-.1107-.5097z" />
  </svg>
);

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = isDeleting ? 40 : 85;

  // Typing effect loop
  useEffect(() => {
    const currentFullRole = personalInfo.roles[roleIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentFullRole) {
      // Pause at full text before deleting
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
      }, 400);
    } else {
      timer = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? currentFullRole.substring(0, prev.length - 1)
            : currentFullRole.substring(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Dynamic Ambient Background Glows */}
      <div className="glow-circle w-[350px] h-[350px] bg-primary/20 top-1/4 left-10 animate-float" />
      <div className="glow-circle w-[300px] h-[300px] bg-secondary/20 bottom-10 right-10 animate-float" style={{ animationDelay: '-2s' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Text Area */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border border-primary/25 text-primary text-[10px] md:text-xs font-mono font-bold uppercase tracking-widest mb-6 w-fit animate-pulse-slow">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
            Open to Opportunities
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tight leading-none text-slate-900 dark:text-white mb-4">
            Hi, I am <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-primary via-secondary to-purple-500 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          <div className="h-12 flex items-center text-lg sm:text-xl md:text-2xl font-mono font-medium text-slate-600 dark:text-slate-300 mb-6">
            <span>I'm a&nbsp;</span>
            <span className="relative text-primary border-r-2 border-primary/80 pr-1 py-0.5 min-w-[2px] animate-[pulse_1s_infinite_alternate]">
              {displayText}
            </span>
          </div>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-xl leading-relaxed">
            {personalInfo.careerGoal}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="#projects"
              className="group px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/resume.pdf"
              download="Bandaru_Devendar_Resume.pdf"
              className="px-6 py-3 rounded-xl glass-card border border-slate-200/50 dark:border-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>

          {/* Social Links & Location */}
          <div className="flex items-center gap-6 mt-10 pt-8 border-t border-slate-200/50 dark:border-slate-800/50">
            <div className="flex flex-wrap gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white border border-slate-200/50 dark:border-slate-800/50 hover:border-primary/50 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white border border-slate-200/50 dark:border-slate-800/50 hover:border-primary/50 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon />
              </a>
              {personalInfo.leetcode && (
                <a
                  href={personalInfo.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white border border-slate-200/50 dark:border-slate-800/50 hover:border-primary/50 transition-colors"
                  aria-label="LeetCode Profile"
                >
                  <LeetcodeIcon />
                </a>
              )}
              {personalInfo.codechef && (
                <a
                  href={personalInfo.codechef}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white border border-slate-200/50 dark:border-slate-800/50 hover:border-primary/50 transition-colors"
                  aria-label="CodeChef Profile"
                >
                  <CodechefIcon />
                </a>
              )}
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white border border-slate-200/50 dark:border-slate-800/50 hover:border-primary/50 transition-colors"
                aria-label="Email Devendar"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Based in:</span> {personalInfo.location}
            </div>
          </div>
        </motion.div>

        {/* Profile Image Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="lg:col-span-5 flex justify-center items-center"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            
            {/* Pulsing Backlight */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-primary to-secondary rounded-full filter blur-xl opacity-40 animate-pulse-slow" />
            
            {/* Animated Rotating Outer Borders */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-primary/40 pointer-events-none"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
              className="absolute inset-2 rounded-full border border-dashed border-secondary/40 pointer-events-none"
            />

            {/* Main Avatar Container */}
            <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-slate-100 dark:border-slate-900 shadow-2xl glass-card">
              <img
                src="/images/profile/devendar.jpg"
                alt={personalInfo.name}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500';
                }}
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
