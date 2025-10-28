import { profileConfig } from '../config/config';

const SocialLinks = () => {
  const handleClick = (url: string) => {
    window.open(url, '_blank', 'noopener noreferrer');
  };

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 mb-8 px-3 sm:px-4 social-links-container">
      {profileConfig.essentialSocialLinks.map((link) => (
        <button
          key={link.name}
          onClick={() => handleClick(link.url)}
          className="social-link group flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border hover:bg-card-hover hover:border-primary/40 transition-all duration-200"
          aria-label={`Visit ${link.name}`}
        >
          <div className="w-6 h-6 flex items-center justify-center">
            <i className={`${link.icon} text-sm text-primary transition-colors duration-200`}></i>
          </div>
          <span className="text-sm font-medium text-card-foreground group-hover:text-primary transition-colors duration-200">
            {link.name}
          </span>
        </button>
      ))}
    </div>
  );
};

export default SocialLinks; 