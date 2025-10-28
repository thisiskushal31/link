# Personal Link Hub Website

This repository contains the source code for my personal link hub website, which showcases my professional profiles, projects, courses, and curated resources.

> **Info:** A public, general-use version of this repository is available at <https://github.com/thisiskushal31/configurable-react-link-hub-starter>.

---

## 📝 How to Add New Links

### Quick Setup

1. **Edit Profile Info** → Open `src/config/profile.json`
   - Update `name`, `bio`, `avatar`, `email`
   - Add your social media URLs

2. **Add New Links** → Edit `src/config/config.ts`
   - Add links to existing sections (Blog, Resources, etc.)
   - Create new sections if needed
   - Use FontAwesome icons: `"fas fa-icon-name"`

3. **Deploy** → Push to GitHub
   - Changes auto-deploy to your live site

### Example

```typescript
// Add to any section in config.ts
{
  title: "My New Link",
  url: "https://example.com",
  icon: "fas fa-link"
}
```

**Live Site**: [https://thisiskushal31.github.io/link/](https://thisiskushal31.github.io/link/)

---

## Copyright and Licensing

© 2025 Kushal Gupta. All Rights Reserved.

The source code and all content within this repository are the exclusive property of Kushal Gupta. This content is not to be used, reproduced, or distributed without explicit permission.

## About

A public repository containing the website code for my personal link hub. All code is for my exclusive use and is not licensed for public distribution.

**Live Site**: [https://thisiskushal31.github.io/link/](https://thisiskushal31.github.io/link/)