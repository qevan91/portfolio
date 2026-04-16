import { useState } from 'react';
import HomeSection from '../components/LeftPanel/HomeSection';
import ProjectsSection from '../components/LeftPanel/ProjectsSection';
import AboutSection from '../components/LeftPanel/AboutSection';
import GithubSection from '../components/LeftPanel/GithubSection';
import ContactSection from '../components/LeftPanel/ContactSection';
import PitchPanel from '../components/PitchPanel';

export default function MainPortfolio() {
    const [activeSection, setActiveSection] = useState('home');

    return (
        <main>
            <div className="content-panel">
                {activeSection === 'home' && <HomeSection />}
                {activeSection === 'projects' && <ProjectsSection />}
                {activeSection === 'about' && <AboutSection />}
                {activeSection === 'github' && <GithubSection />}
                {activeSection === 'contact' && <ContactSection />}
            </div>

            <PitchPanel
                activeSection={activeSection}
                setActiveSection={setActiveSection}
            />
        </main>
    );
}