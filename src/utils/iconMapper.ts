export const getIconClass = (iconName: string): string => {
  const iconMap: Record<string, string> = {
    Github: 'fab fa-github',
    Linkedin: 'fab fa-linkedin',
    Globe: 'fas fa-globe',
    Mail: 'fas fa-envelope',
    Twitter: 'fab fa-twitter',
    MessageCircle: 'fab fa-discord',
    FileText: 'fas fa-file-alt',
    BookOpen: 'fas fa-book-open',
    Instagram: 'fab fa-instagram',
    Youtube: 'fab fa-youtube',
    Twitch: 'fab fa-twitch',
    Music: 'fas fa-music',
    Code: 'fas fa-code',
    Briefcase: 'fas fa-briefcase',
    Heart: 'fas fa-heart',
    Star: 'fas fa-star',
    Users: 'fas fa-users',
    Zap: 'fas fa-bolt'
  };

  return iconMap[iconName] || 'fas fa-globe';
};