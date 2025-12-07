import { SocialLink, SectionData } from '../config/config';

/**
 * Helper function to create essential social links (prominently displayed)
 * @param socialData - Social media data from profile.json
 * @returns Array of essential social links
 */
export const createEssentialSocialLinks = (socialData: Record<string, string>): SocialLink[] => {
  const essentialLinks = [
    {
      name: "Website",
      key: "website",
      icon: "fas fa-globe",
    },
    {
      name: "E-Mail",
      key: "email",
      icon: "fa-solid fa-envelope",
    },
    {
      name: "LinkedIn",
      key: "linkedin",
      icon: "fab fa-linkedin",
    },
    {
      name: "Twitter",
      key: "twitter",
      icon: "fab fa-x-twitter",
    },
    {
      name: "GitHub",
      key: "github",
      icon: "fab fa-github",
    },
    {
      name: "Blog",
      key: "blog",
      icon: "fas fa-blog",
    },
    {
      name: "Schedule Meeting",
      key: "calendar",
      icon: "fas fa-calendar",
    },
    {
      name: "Documentation",
      key: "dochub",
      icon: "fas fa-book-open",
    }
  ];

  return essentialLinks.map(link => ({
    name: link.name,
    url: socialData[link.key] || "",
    icon: link.icon,
  }));
};

/**
 * Helper function to create organized sections (collapsible)
 * @param socialData - Social media data from profile.json
 * @returns Array of organized sections
 */
export const createOrganizedSections = (socialData: Record<string, string>): SectionData[] => {
  const sections: SectionData[] = [
    {
      title: "Writing Platforms",
      links: [
        {
          title: "Hashnode",
          url: socialData.hashnode || "",
          icon: "fas fa-blog",
        },
        {
          title: "Medium",
          url: socialData.medium || "",
          icon: "fab fa-medium",
        }
      ]
    },
    {
      title: "Development & Coding",
      links: [
        {
          title: "CodePen",
          url: socialData.codepen || "",
          icon: "fab fa-codepen",
        },
        {
          title: "LeetCode",
          url: socialData.leetcode || "",
          icon: "fas fa-code",
        }
      ]
    },
    {
      title: "Professional & Learning",
      links: [
        {
          title: "GCP Skill Badges",
          url: socialData["gcp-badges"] || "",
          icon: "fas fa-award",
        }
      ]
    }
  ];

  // Filter out sections with no valid links
  return sections.filter(section =>
    section.links.some(link => link.url && link.url.trim() !== "")
  );
};

/**
 * Helper function to create additional resources section
 * Consolidates all social/organized links into one section
 * @param socialData - Social media data from profile.json
 * @returns Single section with all additional resources
 */
export const createAdditionalResourcesSection = (socialData: Record<string, string>): SectionData => {
  const allLinks = [
    // Writing Platforms
    {
      title: "Hashnode",
      url: socialData.hashnode || "",
      icon: "fas fa-blog",
    },
    {
      title: "Medium",
      url: socialData.medium || "",
      icon: "fab fa-medium",
    },
    // Development & Coding
    {
      title: "CodePen",
      url: socialData.codepen || "",
      icon: "fab fa-codepen",
    },
    {
      title: "LeetCode",
      url: socialData.leetcode || "",
      icon: "fas fa-code",
    },
    // Professional & Learning
    {
      title: "GCP Skill Badges",
      url: socialData["gcp-badges"] || "",
      icon: "fas fa-award",
    }
  ];

  // Filter out links with no valid URLs
  const validLinks = allLinks.filter(link => link.url && link.url.trim() !== "");

  return {
    title: "Additional Resources",
    links: validLinks
  };
};
