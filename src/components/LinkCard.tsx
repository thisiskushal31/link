import { ExternalLink } from 'lucide-react';
import { getIconClass } from '../utils/iconMapper';
import { LinkData } from '../config/config';

interface LinkCardProps {
  link: LinkData;
  delay?: number;
}

const LinkCard = ({ link, delay = 0 }: LinkCardProps) => {
  const iconClass = getIconClass(link.icon);

  const handleClick = () => {
    if (link.url.startsWith('mailto:')) {
      window.location.href = link.url;
    } else {
      window.open(link.url, '_blank', 'noopener noreferrer');
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
        
        <div className="flex-shrink-0">
          <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/60 transition-all duration-200 group-hover:text-primary group-hover:scale-105" />
        </div>
      </div>
    </div>
  );
};

export default LinkCard;