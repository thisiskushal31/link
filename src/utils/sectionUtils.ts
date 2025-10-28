/**
 * Utility functions for section navigation and URL generation
 */

/**
 * Converts a section title to a URL-friendly ID
 * @param title - The section title
 * @returns URL-friendly section ID
 */
export const sectionTitleToId = (title: string): string => {
  return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '').replace(/-+/g, '-').replace(/^-|-$/g, '');
};

/**
 * Converts a section ID back to the original title
 * @param id - The section ID
 * @param sections - Array of section data to find the matching title
 * @returns Original section title or null if not found
 */
export const sectionIdToTitle = (id: string, sections: Array<{ title: string }>): string | null => {
  const section = sections.find(s => sectionTitleToId(s.title) === id);
  return section ? section.title : null;
};

/**
 * Generates a shareable URL for a specific section
 * @param sectionTitle - The section title
 * @param baseUrl - Base URL (defaults to current origin)
 * @returns Complete shareable URL
 */
export const generateSectionUrl = (sectionTitle: string, baseUrl?: string): string => {
  const sectionId = sectionTitleToId(sectionTitle);
  const base = baseUrl || window.location.origin;
  return `${base}/link/#/section/${sectionId}`;
};

/**
 * Generates a shareable URL for the main profile
 * @param baseUrl - Base URL (defaults to current origin)
 * @returns Complete shareable URL
 */
export const generateMainUrl = (baseUrl?: string): string => {
  const base = baseUrl || window.location.origin;
  return `${base}/link/#/`;
};

/**
 * Scrolls to a specific section with smooth animation
 * @param sectionTitle - The section title to scroll to
 * @param offset - Additional offset from top (default: 0)
 */
export const scrollToSection = (sectionTitle: string, offset: number = 0): void => {
  const sectionId = sectionTitleToId(sectionTitle);
  const element = document.querySelector(`[data-section="${sectionId}"]`);
  
  if (element) {
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Gets the current section ID from the URL
 * @returns Current section ID or null if not in a section route
 */
export const getCurrentSectionId = (): string | null => {
  const hash = window.location.hash;
  const sectionMatch = hash.match(/#\/section\/(.+)/);
  return sectionMatch ? sectionMatch[1] : null;
};

/**
 * Updates the URL to reflect the current section without triggering navigation
 * @param sectionTitle - The section title to set in URL
 */
export const updateUrlForSection = (sectionTitle: string): void => {
  const sectionId = sectionTitleToId(sectionTitle);
  const newUrl = `#/section/${sectionId}`;
  
  // Update URL without triggering navigation
  window.history.replaceState(null, '', newUrl);
};

/**
 * Resets URL to main profile page
 */
export const resetUrlToMain = (): void => {
  window.history.replaceState(null, '', '#/');
};

/**
 * Converts a link title to a URL-friendly ID
 * @param title - The link title
 * @returns URL-friendly link ID
 */
export const linkTitleToId = (title: string): string => {
  return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '').replace(/-+/g, '-').replace(/^-|-$/g, '');
};

/**
 * Generates a shareable URL for a specific link within a section
 * @param sectionTitle - The section title
 * @param linkTitle - The link title
 * @param baseUrl - Base URL (defaults to current origin)
 * @returns Complete shareable URL for the link
 */
export const generateLinkUrl = (sectionTitle: string, linkTitle: string, baseUrl?: string): string => {
  const sectionId = sectionTitleToId(sectionTitle);
  const linkId = linkTitleToId(linkTitle);
  const base = baseUrl || window.location.origin;
  return `${base}/link/#/section/${sectionId}/link/${linkId}`;
};

/**
 * Scrolls to a specific link with smooth animation
 * @param linkTitle - The link title to scroll to
 * @param offset - Additional offset from top (default: 0)
 */
export const scrollToLink = (linkTitle: string, offset: number = 0): void => {
  const linkId = linkTitleToId(linkTitle);
  const element = document.getElementById(`link-${linkId}`);
  
  if (element) {
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
};
