import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';


function App() {
  const [selectedSection, setSelectedSection] = useState('home'); // section par défaut

  const renderSection = () => {
    switch (selectedSection) {
      case 'home':
        return <Hero onSelect={setSelectedSection} />;
      case 'aboutme':
        return <AboutMe />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <ContactForm />;
      default:
        return <Hero onSelect={setSelectedSection} />; 
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-neutral-100 dark:bg-gray-900 text-black dark:text-white overflow-hidden">
      {/* Sidebar */}
      <Sidebar onSelect={setSelectedSection} />

      {/* Main content */}
      <main className="ml-20 sm:ml-60 p-6 w-full overflow-auto">
        {renderSection()}
      </main>
    </div>
  );
}

export default App;
