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
  about: "🚀 Experienced DevOps & Platform Engineer | Skilled in Containers, CI/CD, IaC | Exploring AI, Cloud-Native & Secure Systems",
  socialLinks: [
    {
      name: "Website",
      url: "https://thisiskushal31.github.io",
      icon: "fas fa-globe",
    },
    {
      name: "E-Mail",
      url: "mailto:guptakushal070@gmail.com",
      icon: "fa-solid fa-envelope",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/thisiskushalgupta/",
      icon: "fab fa-linkedin",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/thisis_kushal",
      icon: "fab fa-x-twitter",
    },
    {
      name: "GitHub",
      url: "https://github.com/thisiskushal31",
      icon: "fab fa-github",
    },
    {
      name: "Blog",
      url: "https://thisiskushal31.github.io/blog/",
      icon: "fas fa-blog",
    }
  ],
  sections: [
    // {
    //   title: "Quick Links",
    //   links: [
    //     {
    //       title: "Twitter",
    //       url: "https://twitter.com/thisis_kushal",
    //       icon: "fab fa-x-twitter",
    //     },
    //     {
    //       title: "GitHub",
    //       url: "https://github.com/thisiskushal31",
    //       icon: "fab fa-github",
    //     },
    //     {
    //       title: "Self Hosted Blog",
    //       url: "https://thisiskushal31.github.io/blog/",
    //       icon: "fas fa-blog",
    //     }
    //   ],
    // },
    {
      title: "Containers & Orchestration",
      links: [
        {
          title: "Coming Soon",
          url: "https://thisiskushal31.github.io/blog/",
          icon: "Code"
        }
      ],
    },
    // {
    //   title: "Generative AI & LLM Integration",
    //   links: [
    //     {
    //       title: "Building RAG Systems with LangChain and Pinecone",
    //       url: "https://thisiskushal31.github.io/blog/rag-langchain-pinecone",
    //       icon: "Zap",
    //     },
    //     {
    //       title: "Fine-Tuning Llama 2 with Hugging Face on AWS",
    //       url: "https://thisiskushal31.github.io/blog/llm-finetuning-llama2",
    //       icon: "Code",
    //     },
    //     {
    //       title: "Prompt Engineering for Scalable AI APIs",
    //       url: "https://thisiskushal31.github.io/blog/prompt-engineering-apis",
    //       icon: "Brain",
    //     },
    //     {
    //       title: "Multimodal AI: Integrating Text and Images with Hugging Face CLIP",
    //       url: "https://thisiskushal31.github.io/blog/multimodal-ai-clip",
    //       icon: "Image",
    //     },
    //     {
    //       title: "AI Agents: Building Autonomous Agents Using LangChain and OpenAI",
    //       url: "https://thisiskushal31.github.io/blog/ai-agents-langchain",
    //       icon: "Robot",
    //     },
    //     {
    //       title: "Ethical LLM Deployment: Mitigating Bias in Fine-Tuned Models on AWS/GCP",
    //       url: "https://thisiskushal31.github.io/blog/ethical-llm-bias",
    //       icon: "BalanceScale",
    //     },
    //   ],
    // },
    // {
    //   title: "Container Orchestration",
    //   links: [
    //     {
    //       title: "Scaling Kubernetes with ArgoCD and Helm",
    //       url: "https://thisiskushal31.github.io/blog/kubernetes-argocd-helm",
    //       icon: "Server",
    //     },
    //     {
    //       title: "Cluster Autoscaler Setup for Cost Efficiency",
    //       url: "https://thisiskushal31.github.io/blog/k8s-autoscaler",
    //       icon: "Gauge",
    //     },
    //     {
    //       title: "Unifying VMs and Containers: Kubernetes as a Standard Orchestrator",
    //       url: "https://thisiskushal31.github.io/blog/k8s-vm-unification",
    //       icon: "Layers",
    //     },
    //     {
    //       title: "Advanced GitOps: Implementing Flux Alongside ArgoCD for Multi-Cloud",
    //       url: "https://thisiskushal31.github.io/blog/gitops-flux-argocd",
    //       icon: "GitBranch",
    //     },
    //     {
    //       title: "Cost-Efficient Orchestration: Autoscaling with Kubernetes on Azure/AWS",
    //       url: "https://thisiskushal31.github.io/blog/k8s-cost-scaling",
    //       icon: "DollarSign",
    //     },
    //   ],
    // },
    // {
    //   title: "CI/CD Pipelines",
    //   links: [
    //     {
    //       title: "Automating Deployments with GitHub Actions",
    //       url: "https://thisiskushal31.github.io/blog/cicd-github-actions",
    //       icon: "Zap",
    //     },
    //     {
    //       title: "Jenkins to GitLab CI Migration Guide",
    //       url: "https://thisiskushal31.github.io/blog/jenkins-gitlab-ci",
    //       icon: "Code",
    //     },
    //     {
    //       title: "DevSecOps Integration: Embedding Security Scans in GitHub Actions",
    //       url: "https://thisiskushal31.github.io/blog/devsecops-github",
    //       icon: "Shield",
    //     },
    //     {
    //       title: "AI-Enhanced CI/CD: Automating Pipelines with GenAI Tools",
    //       url: "https://thisiskushal31.github.io/blog/ai-cicd-automation",
    //       icon: "Brain",
    //     },
    //     {
    //       title: "Hyperautomation in CI/CD: Using Ansible for End-to-End Automation",
    //       url: "https://thisiskushal31.github.io/blog/hyperautomation-ansible",
    //       icon: "Wrench",
    //     },
    //   ],
    // },
    // {
    //   title: "Infrastructure as Code (IaC)",
    //   links: [
    //     {
    //       title: "Terraform Modules for Multi-Cloud Deployments",
    //       url: "https://thisiskushal31.github.io/blog/terraform-multicloud",
    //       icon: "Globe",
    //     },
    //     {
    //       title: "Ansible for Zero-Downtime Server Config",
    //       url: "https://thisiskushal31.github.io/blog/ansible-server-config",
    //       icon: "Wrench",
    //     },
    //     {
    //       title: "Secure IaC: Scanning Terraform Code with KICS and Snyk",
    //       url: "https://thisiskushal31.github.io/blog/secure-iac-snyk",
    //       icon: "Lock",
    //     },
    //     {
    //       title: "Multi-Cloud IaC: Provisioning with Pulumi and Terraform Modules",
    //       url: "https://thisiskushal31.github.io/blog/multi-iac-pulumi",
    //       icon: "Cloud",
    //     },
    //     {
    //       title: "IaC Maturity: Best Practices for Scalable, Compliant Infra",
    //       url: "https://thisiskushal31.github.io/blog/iac-maturity",
    //       icon: "CheckCircle",
    //     },
    //   ],
    // },
    // {
    //   title: "Observability & Monitoring",
    //   links: [
    //     {
    //       title: "Prometheus and Grafana for Kubernetes Monitoring",
    //       url: "https://thisiskushal31.github.io/blog/prometheus-grafana-k8s",
    //       icon: "ChartLine",
    //     },
    //     {
    //       title: "ELK Stack for Centralized Logging",
    //       url: "https://thisiskushal31.github.io/blog/elk-stack-logging",
    //       icon: "Database",
    //     },
    //     {
    //       title: "AI-Driven Predictive Monitoring: Using Prometheus with ML Models",
    //       url: "https://thisiskushal31.github.io/blog/ai-predictive-prometheus",
    //       icon: "Brain",
    //     },
    //     {
    //       title: "Full-Stack Observability: Integrating ELK with Grafana for Microservices",
    //       url: "https://thisiskushal31.github.io/blog/fullstack-observability",
    //       icon: "Layers",
    //     },
    //     {
    //       title: "Cost-Cutting in Observability: Optimizing Data with Cloud Tools",
    //       url: "https://thisiskushal31.github.io/blog/observability-cost",
    //       icon: "DollarSign",
    //     },
    //   ],
    // },
    // {
    //   title: "Secure Software Development",
    //   links: [
    //     {
    //       title: "Zero-Trust Security in Node.js APIs",
    //       url: "https://thisiskushal31.github.io/blog/zero-trust-nodejs",
    //       icon: "Lock",
    //     },
    //     {
    //       title: "Vulnerability Scanning with Snyk in CI/CD",
    //       url: "https://thisiskushal31.github.io/blog/snyk-cicd",
    //       icon: "Shield",
    //     },
    //     {
    //       title: "AI in Secure Coding: Using GenAI for Vulnerability Detection",
    //       url: "https://thisiskushal31.github.io/blog/ai-secure-coding",
    //       icon: "Code",
    //     },
    //     {
    //       title: "Defensive Programming: Implementing Zero-Trust in Node.js Apps",
    //       url: "https://thisiskushal31.github.io/blog/defensive-zero-trust",
    //       icon: "Shield",
    //     },
    //     {
    //       title: "Compliance Automation: Achieving SOC2 with IAM and Secrets Management",
    //       url: "https://thisiskushal31.github.io/blog/compliance-soc2",
    //       icon: "CheckCircle",
    //     },
    //   ],
    // },
    // {
    //   title: "Cloud-Native Architecture",
    //   links: [
    //     {
    //       title: "Microservices with Kafka and Kubernetes",
    //       url: "https://thisiskushal31.github.io/blog/microservices-kafka-k8s",
    //       icon: "Network",
    //     },
    //     {
    //       title: "Serverless APIs with AWS Lambda",
    //       url: "https://thisiskushal31.github.io/blog/serverless-lambda",
    //       icon: "Cloud",
    //     },
    //     {
    //       title: "Scalable Microservices: Event-Driven Design with Kafka on Kubernetes",
    //       url: "https://thisiskushal31.github.io/blog/scalable-kafka-k8s",
    //       icon: "Server",
    //     },
    //     {
    //       title: "AI/ML in Cloud-Native: Integrating SageMaker with Serverless Apps",
    //       url: "https://thisiskushal31.github.io/blog/ai-cloud-sagemaker",
    //       icon: "Brain",
    //     },
    //     {
    //       title: "Multi-Cloud Native Strategies: Hybrid Architectures on AWS/Azure/GCP",
    //       url: "https://thisiskushal31.github.io/blog/multi-cloud-hybrid",
    //       icon: "Globe",
    //     },
    //   ],
    // },
    // {
    //   title: "System Design & Scalability",
    //   links: [
    //     {
    //       title: "Designing High-Availability Systems on GCP",
    //       url: "https://thisiskushal31.github.io/blog/system-design-ha-gcp",
    //       icon: "Architecture",
    //     },
    //     {
    //       title: "Caching Strategies with Redis for Scalability",
    //       url: "https://thisiskushal31.github.io/blog/redis-caching",
    //       icon: "Database",
    //     },
    //     {
    //       title: "High-Availability Design: Tradeoffs in Distributed Systems",
    //       url: "https://thisiskushal31.github.io/blog/ha-distributed-tradeoffs",
    //       icon: "BalanceScale",
    //     },
    //     {
    //       title: "Database Scaling: Sharding with PostgreSQL and Redis",
    //       url: "https://thisiskushal31.github.io/blog/db-scaling-postgres",
    //       icon: "Database",
    //     },
    //     {
    //       title: "System Design Patterns: Circuit Breakers in Microservices",
    //       url: "https://thisiskushal31.github.io/blog/design-patterns-circuit",
    //       icon: "Code",
    //     },
    //   ],
    // },
  ],
}; 