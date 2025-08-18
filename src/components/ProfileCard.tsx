import { useState } from 'react';
import { Share } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import LinkCard from './LinkCard';
import ThemeToggle from './ThemeToggle';
import SocialLinks from './SocialLinks';
import ScrollToTop from './ScrollToTop';
import { profileConfig } from '../config/config';

const ProfileCard = () => {
  const [config] = useState(profileConfig);
  const [imageError, setImageError] = useState(false);

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
      <ThemeToggle />
      
      <button
        onClick={handleShare}
        className="share-button fixed top-6 right-6 z-10"
        aria-label="Share profile"
      >
        <Share className="w-5 h-5" />
      </button>

      <ScrollToTop />

      <header className="flex-shrink-0 container mx-auto px-4 pt-8 pb-4 max-w-md">
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

      <main className="flex-1 container mx-auto px-4 max-w-md overflow-hidden">
        <div className="h-full overflow-y-auto custom-scrollbar space-y-4 pb-4">
          {config.sections.map((section, sectionIndex) => (
            <section key={section.title} className="space-y-3">
              <h2 className="text-lg font-semibold text-center text-primary sticky top-0 bg-background py-1 rounded-lg">
                {section.title}
              </h2>
              <div className="space-y-1.5">
                {section.links.map((link, linkIndex) => (
                  <LinkCard
                    key={`${section.title}-${link.title}`}
                    link={link}
                    delay={(sectionIndex * 100) + (linkIndex * 30)}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <footer className="flex-shrink-0 container mx-auto px-4 py-4 max-w-md">
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