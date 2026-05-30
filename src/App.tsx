import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Testimonials } from './components/Testimonials';
import { MeetDeveloper } from './components/MeetDeveloper';
import { Footer } from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-bg-light dark:bg-bg-dark text-slate-800 dark:text-slate-200 transition-colors duration-300">
        <Navbar />
        <main className="w-full">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Resume />
          <Contact />
          <Testimonials />
          <MeetDeveloper />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
