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
  about: "🚀 DevOps & Platform Engineer | Tech blogs, experiments & personal insights",
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
      title: "Blog Content",
      links: [
        { title: "Comming Soon", url: "https://thisiskushal31.github.io/blog/", icon: "Heart" }
        // { title: "How to Structure Your Argo CD Repositories Using Application Sets", url: "https://thisiskushal31.github.io/blog/", icon: "BookOpen" },
        // { title: "Complete Guide to Setting Up Production-Ready Kubernetes Clusters with Monitoring and Logging", url: "https://blog.kushal.dev/k8s-production-setup", icon: "Code" },
        // { title: "Docker Multi-Stage Builds: Optimizing Container Images for Production Deployments", url: "https://blog.kushal.dev/docker-multistage", icon: "Briefcase" },
        // { title: "CI/CD Pipeline Best Practices for Modern Cloud-Native Applications", url: "https://blog.kushal.dev/cicd-best-practices", icon: "Zap" },
        // { title: "Infrastructure as Code with Terraform: From Beginner to Advanced Techniques", url: "https://blog.kushal.dev/terraform-guide", icon: "Globe" },
        // { title: "Monitoring and Observability in Microservices Architecture", url: "https://blog.kushal.dev/microservices-monitoring", icon: "Star" },
        // { title: "Short Guide", url: "https://blog.kushal.dev/short", icon: "Heart" },
        // { title: "GitOps Workflow Implementation with ArgoCD, Helm, and Kubernetes for Scalable Application Deployment", url: "https://blog.kushal.dev/gitops-workflow", icon: "Users" }
      ]
    }
    // {
    //   title: "Content & Blog",
    //   links: [
    //     { title: "Main Blog", url: "https://blog.kushal.dev", icon: "BookOpen" },
    //     { title: "Tech Articles", url: "https://kushal.dev/articles", icon: "Code" },
    //     { title: "DevOps Tutorials", url: "https://kushal.dev/devops", icon: "Briefcase" },
    //     { title: "Weekly Newsletter", url: "https://newsletter.kushal.dev", icon: "Mail" },
    //     { title: "Podcast", url: "https://podcast.kushal.dev", icon: "Music" }
    //   ]
    // }
  ]
}; 