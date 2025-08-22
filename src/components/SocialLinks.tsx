import { profileConfig } from '../config/config';

const SocialLinks = () => {
  const handleClick = (url: string) => {
    window.open(url, '_blank', 'noopener noreferrer');
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6 mb-8 px-3 sm:px-4 social-links-container">
      {profileConfig.socialLinks.map((link) => (
        <button
          key={link.name}
          onClick={() => handleClick(link.url)}
          className="social-link group"
          aria-label={`Visit ${link.name}`}
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-card border border-border flex items-center justify-center transition-all duration-200 group-hover:scale-105 group-hover:border-primary/40 group-hover:bg-card-hover">
            <i className={`${link.icon} text-lg sm:text-xl text-primary group-hover:text-primary transition-colors duration-200`}></i>
          </div>
        </button>
      ))}
    </div>
  );
};

export default SocialLinks; 