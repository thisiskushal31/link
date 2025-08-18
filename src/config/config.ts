export interface LinkData {
  title: string;
  url: string;
  icon: string;
}

export interface SectionData {
  title: string;
  links: LinkData[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ProfileConfig {
  profileImage: string;
  name: string;
  about: string;
  socialLinks: SocialLink[];
  sections: SectionData[];
}

export const profileConfig: ProfileConfig = {
  profileImage: "./profile.jpeg",
  name: "Kushal Gupta",
  about: "🚀 DevOps & Platform Engineer | Building scalable infrastructure with a dash of creativity",
  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/thisiskushal31',
      icon: 'fab fa-github'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/thisiskushalgupta/',
      icon: 'fab fa-linkedin'
    },
    {
      name: 'Website',
      url: 'https://thisiskushal31.github.io',
      icon: 'fas fa-globe'
    }
  ],
  sections: [
    {
      title: "Professional",
      links: [
        { title: "GitHub", url: "https://github.com/thisiskushal31", icon: "Github" },
        { title: "LinkedIn", url: "https://www.linkedin.com/in/thisiskushalgupta/", icon: "Linkedin" },
        { title: "Portfolio", url: "https://thisiskushal31.github.io", icon: "Globe" },
        { title: "Resume", url: "/resume.pdf", icon: "FileText" },
        { title: "Email Me", url: "mailto:kushal@example.com", icon: "Mail" }
      ]
    },
    {
      title: "Social",
      links: [
        { title: "Twitter/X", url: "https://twitter.com/kushal", icon: "Twitter" },
        { title: "Discord", url: "https://discord.gg/kushal", icon: "MessageCircle" },
        { title: "Instagram", url: "https://instagram.com/kushal", icon: "Instagram" },
        { title: "YouTube", url: "https://youtube.com/@kushal", icon: "Youtube" },
        { title: "Twitch", url: "https://twitch.tv/kushal", icon: "Twitch" }
      ]
    },
    {
      title: "Blog Content",
      links: [
        { title: "How to Structure Your Argo CD Repositories Using Application Sets", url: "https://blog.kushal.dev/argo-cd-app-sets", icon: "BookOpen" },
        { title: "Complete Guide to Setting Up Production-Ready Kubernetes Clusters with Monitoring and Logging", url: "https://blog.kushal.dev/k8s-production-setup", icon: "Code" },
        { title: "Docker Multi-Stage Builds: Optimizing Container Images for Production Deployments", url: "https://blog.kushal.dev/docker-multistage", icon: "Briefcase" },
        { title: "CI/CD Pipeline Best Practices for Modern Cloud-Native Applications", url: "https://blog.kushal.dev/cicd-best-practices", icon: "Zap" },
        { title: "Infrastructure as Code with Terraform: From Beginner to Advanced Techniques", url: "https://blog.kushal.dev/terraform-guide", icon: "Globe" },
        { title: "Monitoring and Observability in Microservices Architecture", url: "https://blog.kushal.dev/microservices-monitoring", icon: "Star" },
        { title: "Short Guide", url: "https://blog.kushal.dev/short", icon: "Heart" },
        { title: "GitOps Workflow Implementation with ArgoCD, Helm, and Kubernetes for Scalable Application Deployment", url: "https://blog.kushal.dev/gitops-workflow", icon: "Users" }
      ]
    },
    {
      title: "Content & Blog",
      links: [
        { title: "Main Blog", url: "https://blog.kushal.dev", icon: "BookOpen" },
        { title: "Tech Articles", url: "https://kushal.dev/articles", icon: "Code" },
        { title: "DevOps Tutorials", url: "https://kushal.dev/devops", icon: "Briefcase" },
        { title: "Weekly Newsletter", url: "https://newsletter.kushal.dev", icon: "Mail" },
        { title: "Podcast", url: "https://podcast.kushal.dev", icon: "Music" }
      ]
    },
    {
      title: "Projects & Tools",
      links: [
        { title: "Docker Tools", url: "https://github.com/kushal/docker-tools", icon: "Code" },
        { title: "K8s Templates", url: "https://github.com/kushal/k8s-templates", icon: "Briefcase" },
        { title: "Infrastructure Boilerplate", url: "https://github.com/kushal/infra-boilerplate", icon: "Zap" },
        { title: "CI/CD Pipeline Generator", url: "https://cicd.kushal.dev", icon: "Star" },
        { title: "Monitoring Stack", url: "https://monitoring.kushal.dev", icon: "Users" },
        { title: "API Gateway Templates", url: "https://github.com/kushal/api-gateway", icon: "Globe" }
      ]
    },
    {
      title: "Courses & Learning",
      links: [
        { title: "DevOps Masterclass", url: "https://course.kushal.dev/devops", icon: "BookOpen" },
        { title: "Kubernetes Course", url: "https://course.kushal.dev/k8s", icon: "Star" },
        { title: "Docker Deep Dive", url: "https://course.kushal.dev/docker", icon: "Code" },
        { title: "AWS Certification Guide", url: "https://course.kushal.dev/aws", icon: "Briefcase" },
        { title: "Free Resources", url: "https://resources.kushal.dev", icon: "Heart" }
      ]
    },
    {
      title: "Community & Support",
      links: [
        { title: "Community Discord", url: "https://discord.gg/kushal-community", icon: "MessageCircle" },
        { title: "Mentorship Program", url: "https://mentorship.kushal.dev", icon: "Users" },
        { title: "1-on-1 Consulting", url: "https://consulting.kushal.dev", icon: "Briefcase" },
        { title: "Support My Work", url: "https://buymeacoffee.com/kushal", icon: "Heart" },
        { title: "Sponsor Projects", url: "https://github.com/sponsors/kushal", icon: "Star" }
      ]
    }
  ]
}; 