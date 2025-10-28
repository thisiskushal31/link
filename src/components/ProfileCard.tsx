import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Share } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import LinkCard from './LinkCard';
import ThemeToggle from './ThemeToggle';
import SocialLinks from './SocialLinks';
import ScrollToTop from './ScrollToTop';
import QuickJump from './QuickJump';
import { CollapsibleSection } from './CollapsibleSection';
import { profileConfig } from '../config/config';
import { sectionIdToTitle, scrollToSection, updateUrlForSection, resetUrlToMain, sectionTitleToId, linkTitleToId, scrollToLink } from '../utils/sectionUtils';

const ProfileCard = () => {
  const [config] = useState(profileConfig);
  const [imageError, setImageError] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const { sectionId, linkId } = useParams<{ sectionId?: string; linkId?: string }>();

  // Handle section and link navigation from URL parameters
  useEffect(() => {
    if (sectionId) {
      const sectionTitle = sectionIdToTitle(sectionId, config.organizedSections);
      if (sectionTitle) {
        // If there's also a linkId, redirect directly to the external URL
        if (linkId) {
          const section = config.organizedSections.find(s => sectionTitleToId(s.title) === sectionId);
          if (section) {
            const link = section.links.find(l => linkTitleToId(l.title) === linkId);
            if (link) {
              setIsRedirecting(true);
              // Small delay to show redirect message
              setTimeout(() => {
                // Redirect in the same tab (replaces current page)
                // This won't trigger popup blockers as it's navigation, not opening new windows
                try {
                  window.location.href = link.url;
                } catch (error) {
                  // Fallback: try location.replace for better compatibility
                  window.location.replace(link.url);
                }
              }, 500);
              return;
            }
          }
        }
        
        // If no linkId or link not found, scroll to section
        setTimeout(() => {
          scrollToSection(sectionTitle, 100);
        }, 100);
      }
    }
  }, [sectionId, linkId, config.organizedSections]);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "Profile URL has been copied to clipboard."
      });
    } catch (error) {
      console.error('Failed to copy:', error);
      toast({
        title: "Copy failed",
        description: "Unable to copy link to clipboard.",
        variant: "destructive"
      });
    }
  };

  if (!config) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-destructive mb-2">Configuration Error</h1>
          <p className="text-muted-foreground">Unable to load profile configuration.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Redirect overlay */}
      {isRedirecting && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="text-center space-y-4 p-8 max-w-md mx-auto">
            <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto"></div>
            <div>
              <h2 className="text-xl font-semibold text-primary mb-2">Redirecting to Resource</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                This is a central link hub. You're being redirected to the specific resource you requested. 
                This is expected behavior - not a suspicious link.
              </p>
              <div className="mt-3 text-xs text-muted-foreground/80">
                <p>🔗 Central Link Hub by Kushal Gupta</p>
                <p>Redirecting to your requested content...</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <ThemeToggle />
      
      <button
        onClick={handleShare}
        className="share-button fixed top-6 right-6 z-10"
        aria-label="Share profile"
      >
        <Share className="w-5 h-5" />
      </button>

      <ScrollToTop />
      <QuickJump />

      <header className="flex-shrink-0 container mx-auto px-4 pt-8 pb-4 max-w-lg">
        <div className="text-center space-y-4">
          <div className="relative inline-block">
            <div className="w-24 h-24 rounded-full overflow-hidden ring-2 ring-primary/20 ring-offset-2 ring-offset-background">
              {!imageError ? (
                <img
                  src={config.profileImage}
                  alt={config.name}
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full bg-primary flex items-center justify-center text-primary-foreground text-xl font-bold">
                  {config.name.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-primary">
              {config.name}
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-sm mx-auto">
              {config.about}
            </p>
          </div>

          <SocialLinks />
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 max-w-lg overflow-hidden">
        <div className="h-full overflow-y-auto custom-scrollbar space-y-4 pb-4">
          {/* Blog Sections - Expanded by default for immediate visibility */}
          {config.organizedSections.map((section, sectionIndex) => (
            <CollapsibleSection
              key={section.title}
              section={section}
              delay={sectionIndex * 150}
            />
          ))}
        </div>
      </main>

      <footer className="flex-shrink-0 container mx-auto px-4 py-4 max-w-lg">
        <div className="text-center">
          <div className="text-xs text-muted-foreground/60">
            © 2025 Kushal Gupta. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProfileCard;