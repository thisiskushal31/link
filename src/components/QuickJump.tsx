import { useState, useEffect } from 'react';
import { ChevronUp, List, X, Share2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { profileConfig } from '../config/config';
import { sectionTitleToId, generateSectionUrl, generateMainUrl } from '../utils/sectionUtils';

const QuickJump = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Scroll to section function
  const scrollToSection = (sectionTitle: string) => {
    const element = document.getElementById(`section-${sectionTitleToId(sectionTitle)}`);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(sectionTitle);
    }
    setIsOpen(false);
  };

  // Share section function
  const handleShareSection = async (sectionTitle: string, event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent triggering the scroll action
    try {
      const sectionUrl = generateSectionUrl(sectionTitle);
      await navigator.clipboard.writeText(sectionUrl);
      toast({
        title: "Section link copied!",
        description: `Link to "${sectionTitle}" has been copied to clipboard.`
      });
    } catch (error) {
      console.error('Failed to copy section link:', error);
      toast({
        title: "Copy failed",
        description: "Unable to copy section link to clipboard.",
        variant: "destructive"
      });
    }
  };

  // Share main profile function
  const handleShareMain = async (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent triggering the scroll action
    try {
      const mainUrl = generateMainUrl();
      await navigator.clipboard.writeText(mainUrl);
      toast({
        title: "Profile link copied!",
        description: "Main profile URL has been copied to clipboard."
      });
    } catch (error) {
      console.error('Failed to copy main link:', error);
      toast({
        title: "Copy failed",
        description: "Unable to copy profile link to clipboard.",
        variant: "destructive"
      });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = profileConfig.sections.map(section => 
        document.getElementById(`section-${sectionTitleToId(section.title)}`)
      ).filter(Boolean);

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(profileConfig.sections[i].title);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="quick-jump-button w-14 h-14 bg-primary rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center text-primary-foreground group"
        aria-label="Quick jump to sections"
      >
        {isOpen ? (
          <X className="w-6 h-6 transition-transform duration-200" />
        ) : (
          <List className="w-6 h-6 transition-transform duration-200 group-hover:scale-110" />
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu */}
          <div className="quick-jump-menu absolute bottom-16 right-0 bg-card rounded-lg shadow-xl border min-w-56 max-h-80 overflow-y-auto z-50">
            <div className="p-3">
              <h3 className="text-sm font-semibold text-muted-foreground mb-2 px-2">
                Jump to Section
              </h3>
              <div className="space-y-1">
                {profileConfig.sections.map((section, index) => (
                  <div
                    key={section.title}
                    className={`w-full px-3 py-2 rounded-md text-sm transition-colors flex items-center justify-between group ${
                      activeSection === section.title
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-accent hover:text-accent-foreground'
                    }`}
                  >
                    <button
                      onClick={() => scrollToSection(section.title)}
                      className="flex-1 text-left truncate"
                    >
                      {section.title}
                    </button>
                    <div className="flex items-center gap-2 ml-2">
                      <span className="text-xs opacity-60">
                        {section.links.length}
                      </span>
                      <button
                        onClick={(e) => handleShareSection(section.title, e)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-background/20 rounded"
                        title={`Share ${section.title}`}
                      >
                        <Share2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Quick Actions */}
              <div className="border-t mt-3 pt-3">
                <button
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-accent hover:text-accent-foreground transition-colors flex items-center"
                >
                  <ChevronUp className="w-4 h-4 mr-2" />
                  Back to Top
                </button>
                <button
                  onClick={handleShareMain}
                  className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-accent hover:text-accent-foreground transition-colors flex items-center"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Profile
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default QuickJump;
