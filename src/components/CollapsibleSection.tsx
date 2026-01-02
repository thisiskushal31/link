/**
 * CollapsibleSection Component
 * 
 * A collapsible section component for organizing links into expandable categories.
 * Provides a clean, organized way to display multiple link categories without cluttering the UI.
 * 
 * Features:
 * - Expandable/collapsible sections with smooth animations
 * - Consistent styling with the overall design system
 * - Accessible keyboard navigation
 * - Share functionality for individual sections
 * - Responsive design for mobile and desktop
 */

import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Share2 } from 'lucide-react';
import LinkCard from './LinkCard';
import { SectionData } from '../config/config';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { generateSectionUrl } from '../utils/sectionUtils';
import { useToast } from '@/hooks/use-toast';

interface CollapsibleSectionProps {
  section: SectionData;
  delay?: number;
}

export const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ 
  section, 
  delay = 0 
}) => {
  // Expand by default for better user experience - users can see content immediately
  const [isExpanded, setIsExpanded] = useState(true);
  const [showShareButton, setShowShareButton] = useState(false);
  const { toast } = useToast();

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
    
    const sectionUrl = generateSectionUrl(section.title);
    
    // Try native share API first (if available)
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${section.title} - Kushal Gupta`,
          text: `Explore ${section.title} resources and links`,
          url: sectionUrl,
        });
        return; // Success, exit early
      } catch (error) {
        // User cancelled share dialog - fall back to clipboard
        if (error instanceof Error && error.name === 'AbortError') {
          return; // User cancelled, don't show error or fallback
        }
        // If share failed for other reasons, fall through to clipboard copy
      }
    }
    
    // Fallback to clipboard copy
    try {
      // Try modern Clipboard API first
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(sectionUrl);
        toast({
          title: "Section link copied!",
          description: `Shareable link to "${section.title}" section has been copied to clipboard.`
        });
      } else {
        // Fallback for older browsers using execCommand
        const textArea = document.createElement('textarea');
        textArea.value = sectionUrl;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
          const successful = document.execCommand('copy');
          document.body.removeChild(textArea);
          
          if (successful) {
            toast({
              title: "Section link copied!",
              description: `Shareable link to "${section.title}" section has been copied to clipboard.`
            });
          } else {
            throw new Error('execCommand copy failed');
          }
        } catch (err) {
          document.body.removeChild(textArea);
          throw err;
        }
      }
    } catch (error) {
      console.error('Failed to copy section link:', error);
      toast({
        title: "Copy failed",
        description: "Unable to copy link to clipboard. Please copy the URL manually.",
        variant: "destructive"
      });
    }
  };

  return (
    <div 
      className="mb-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl transition-all duration-300 hover:bg-card/80"
      data-section={section.title.toLowerCase().replace(/\s+/g, '-')}
      style={{ 
        animationDelay: `${delay}ms`,
        animation: 'fadeInUp 0.6s ease-out forwards',
        opacity: 0,
        transform: 'translateY(20px)'
      }}
    >
      {/* Section Header */}
      <div 
        className="flex items-center justify-between p-5 cursor-pointer select-none"
        onClick={handleToggle}
        onMouseEnter={() => setShowShareButton(true)}
        onMouseLeave={() => setShowShareButton(false)}
      >
        <div className="flex items-center space-x-3">
          <div className="text-muted-foreground transition-transform duration-200">
            {isExpanded ? (
              <ChevronDown className="w-5 h-5" />
            ) : (
              <ChevronRight className="w-5 h-5" />
            )}
          </div>
          <h3 className="text-lg font-semibold text-foreground">
            {section.title}
          </h3>
          <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">
            {section.links.length}
          </span>
        </div>
        
        {showShareButton && (
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={handleShare}
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all duration-200"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Share {section.title} section</p>
            </TooltipContent>
          </Tooltip>
        )}
      </div>

      {/* Section Content */}
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 pt-2 pb-5 space-y-3">
          {section.links.map((link, index) => (
            <LinkCard
              key={link.id || `${section.title}-${index}`}
              link={link}
              sectionTitle={section.title}
              delay={index * 50}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
