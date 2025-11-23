import { useMemo } from 'react';
import BackgroundShapes from '@/components/BackgroundShapes';
import Footer from '@/components/Footer';
import Modal from '@/components/Modal';
import ProjectsSection from '@/components/ProjectsSection';
import { useDarkMode } from '@/hooks/useDarkMode';
import { useModal } from '@/hooks/useModal';
import { useParallax } from '@/hooks/useParallax';
import { ABOUT_CONTENT } from '@/utils/constants';
import { projects } from '@/utils/projects';
import LandingPage from '@/components/LandingPage';
import TechStackSection from '@/components/TechStack';

function App() {
  const modal = useModal();
  const darkMode = useDarkMode();
  const parallax = useParallax();

  const modalContent = useMemo(
    () => ({
      about: ABOUT_CONTENT,
      projects
    }),
    []
  );

  return (
    <>
    <div className="app" ref={parallax.containerRef}>
      <LandingPage
        onOpenModal={modal.open}
        onToggleTheme={darkMode.toggle}
        isDarkMode={darkMode.isDark} 
      />
      <TechStackSection />
      <BackgroundShapes />
      <ProjectsSection projects={projects} />
      <Footer onOpenModal={modal.open} />
    </div>
    <Modal isOpen={modal.isOpen} onClose={modal.close} content={modalContent} />
    </>
  )
}

export default App
