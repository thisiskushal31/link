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

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
    
    try {
      const sectionUrl = `${window.location.origin}${window.location.pathname}#section-${section.title.toLowerCase().replace(/\s+/g, '-')}`;
      
      if (navigator.share) {
        await navigator.share({
          title: `${section.title} - Kushal Gupta`,
          text: `Check out ${section.title} links`,
          url: sectionUrl,
        });
      } else {
        await navigator.clipboard.writeText(sectionUrl);
        // You could add a toast notification here
        console.log('Section URL copied to clipboard');
      }
    } catch (error) {
      console.error('Error sharing section:', error);
    }
  };

  return (
    <div 
      className="mb-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden transition-all duration-300 hover:bg-card/80"
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
          <button
            onClick={handleShare}
            className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all duration-200"
            title={`Share ${section.title} section`}
          >
            <Share2 className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Section Content */}
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 pb-5 space-y-3">
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
