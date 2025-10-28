import { useState } from 'react';
import { ExternalLink, Share2 } from 'lucide-react';
import { getIconClass } from '../utils/iconMapper';
import { LinkData } from '../config/config';
import { generateLinkUrl } from '../utils/sectionUtils';
import { toast } from '@/hooks/use-toast';

interface LinkCardProps {
  link: LinkData;
  sectionTitle: string;
  delay?: number;
}

const LinkCard = ({ link, sectionTitle, delay = 0 }: LinkCardProps) => {
  const [showShareButton, setShowShareButton] = useState(false);
  const iconClass = getIconClass(link.icon);

  const handleClick = () => {
    if (link.url.startsWith('mailto:')) {
      window.location.href = link.url;
    } else {
      window.open(link.url, '_blank', 'noopener noreferrer');
    }
  };

  const handleShareClick = async (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the link click
    try {
      const linkUrl = generateLinkUrl(sectionTitle, link.title);
      await navigator.clipboard.writeText(linkUrl);
      toast({
        title: "Direct link copied!",
        description: `One-click link to "${link.title}" copied. Recipients will be redirected through this central hub to the resource.`
      });
    } catch (error) {
      console.error('Failed to copy link:', error);
      toast({
        title: "Copy failed",
        description: "Unable to copy link to clipboard.",
        variant: "destructive"
      });
    }
  };

  return (
    <div
      className="link-card-compact group animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <div className="flex items-center space-x-3">
        <div className="flex-shrink-0">
          <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center text-primary-foreground transition-all duration-200 group-hover:scale-105">
            <i className={`${iconClass} text-sm`}></i>
          </div>
        </div>
        
        <div className="flex-1 text-left min-w-0">
          <h3 className="text-sm font-medium text-card-foreground transition-colors duration-200 group-hover:text-primary leading-relaxed">
            {link.title}
          </h3>
        </div>
        
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={handleShareClick}
            onMouseEnter={() => setShowShareButton(true)}
            onMouseLeave={() => setShowShareButton(false)}
            className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-background/20 rounded"
            title={`Share ${link.title}`}
          >
            <Share2 className="w-3 h-3 text-muted-foreground/60 hover:text-primary transition-colors" />
          </button>
          <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/60 transition-all duration-200 group-hover:text-primary group-hover:scale-105" />
        </div>
      </div>
    </div>
  );
};

export default LinkCard;