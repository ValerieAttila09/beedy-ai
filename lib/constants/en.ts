import { SparkleIcon } from "lucide-react";
import AtlassianLogo from "../../assets/icons/atlassian-logo.svg"
import CursorLogo from "../../assets/icons/cursor-logo.svg"
import MongodbLogo from "../../assets/icons/mongodb-logo.svg"
import NvidiaLogo from "../../assets/icons/nvidia-logo.svg"
import PrismaLogo from "../../assets/icons/prisma-logo.svg"
import SupabaseLogo from "../../assets/icons/supabase-logo.svg"

export const HERO_SECTION_EN = {
  title: "Revolutionize Your Interactions with Beedy AI",
  description: "Our AI-powered chatbot provides round-the-clock support, answering customer queries instantly and reducing response times. Easily integrate our chatbot with your existing platforms and workflows.",
  button: "Get Started",
  button2: "Read Docs",
  supports: "Supported by many well-known companies"
};

export const FEATURES_EN = [
  {
    title: "24/7 Automated Support",
    description: "Our AI-powered chatbot provides round-the-clock support, answering customer queries instantly and reducing response times.",
    icon: SparkleIcon,
  },
  {
    title: "Seamless Integration",
    description: "Easily integrate our chatbot with your existing platforms and workflows. No complex coding required.",
    icon: SparkleIcon,
  },
  {
    title: "Advanced Analytics",
    description: "Gain valuable insights into customer behavior with our advanced analytics dashboard. Track conversations and monitor performance.",
    icon: SparkleIcon,
  },
];

export const reviews = [
  { name: "Atlassian", img: AtlassianLogo, },
  { name: "Cursor", img: CursorLogo, },
  { name: "MongoDB", img: MongodbLogo, },
  { name: "NVIDIA", img: NvidiaLogo, },
  { name: "Prisma", img: PrismaLogo, },
  { name: "Supabase", img: SupabaseLogo, },
];

export const ABOUT_SECTION_EN = {
  title: "About Beedy AI",
  subtitle: "Deliver delightful, automated support and insights with our conversational AI platform.",
  points: [
    {
      title: "24/7 Smart Support",
      description: "Handle common customer requests instantly, reduce wait time and scale support without growing headcount.",
    },
    {
      title: "Seamless Integration",
      description: "Easily plug into your existing tools and channels (mail, chat, CRM) with flexible APIs and webhooks.",
    },
    {
      title: "Analytics & Insights",
      description: "Track conversation performance, surface trends, and make data-driven improvements.",
    },
  ],
};

export const PRICING_SECTION_EN = {
  plans: [
    {
      id: 'basic',
      title: 'Basic',
      priceMonthly: '$9',
      priceYearly: '$90',
      credits: '10 credit total',
      description: 'Great for personal projects and small teams',
      features: [
        { label: 'Basic chat', icon: 'MessageSquare' },
        { label: 'Email support', icon: 'Mail' },
        { label: 'Community access', icon: 'Users' }, { label: 'Standard analytics', icon: 'BarChart' },
        { label: 'Up to 5 integrations', icon: 'Zap' },
        { label: 'Community forum access', icon: 'Users' },],
      cta: 'Get Basic Plan',
    },
    {
      id: 'pro',
      title: 'Pro',
      priceMonthly: '$49',
      priceYearly: '$490',
      credits: '50 credit total',
      description: 'For growing teams who need more power',
      features: [
        { label: 'All Basic features', icon: 'Layers' },
        { label: 'Priority support', icon: 'Headphones' },
        { label: 'Advanced analytics', icon: 'BarChart' },
        { label: 'Integrations', icon: 'Zap' },
        { label: 'SLA 99.9% uptime', icon: 'ShieldCheck' },
        { label: 'Custom webhooks', icon: 'Zap' },
        { label: 'Role-based access control', icon: 'Users' },
        { label: 'Export & backups', icon: 'Package' },
      ],
      cta: 'Get Pro Plan',
      popular: true,
    },
    {
      id: 'business',
      title: 'Business',
      priceMonthly: '$299',
      priceYearly: '$2990',
      credits: '100 credit total',
      description: 'For large teams and mission-critical usage',
      features: [
        { label: 'SLA', icon: 'ShieldCheck' },
        { label: 'Dedicated account manager', icon: 'Users' },
        { label: 'Advanced security', icon: 'Lock' },
        { label: 'White-labeling', icon: 'Package' },
        { label: 'Dedicated security team', icon: 'ShieldCheck' },
        { label: 'Custom integrations', icon: 'Wrench' },
        { label: 'Audit logs & compliance', icon: 'Clock' },
        { label: 'Priority onboarding', icon: 'Headphones' },
      ],
      cta: 'Get Business Plan',
    },
    {
      id: 'enterprise',
      title: 'Enterprise',
      priceMonthly: 'Contact',
      priceYearly: 'Contact',
      credits: 'Unlimited credits',
      description: 'Custom solutions for large organizations',
      features: [
        { label: 'SLA & Compliance', icon: 'Shield' },
        { label: 'Dedicated onboarding', icon: 'Users' },
        { label: 'Custom integrations', icon: 'Wrench' },
        { label: 'Priority SLA', icon: 'Clock' },
        { label: 'Dedicated security & compliance', icon: 'ShieldCheck' },
        { label: 'Custom SLAs & pricing', icon: 'Package' },
        { label: 'White-glove support', icon: 'Headphones' },
        { label: 'Advanced reporting', icon: 'BarChart' },
      ],
      cta: 'Contact Sales',
    },
  ],
};

export const FAQ_SECTION_EN = {
  categories: [
    {
      title: 'General',
      items: [
        {
          question: 'What is Beedy AI and what can it do?',
          answer: 'Beedy AI is a conversational AI platform that helps businesses automate support, capture insights from conversations, and integrate AI agents into existing workflows and channels.',
        },
        {
          question: 'How do I get started?',
          answer: 'Sign up for an account, follow the quick-start guide in our documentation to connect a channel, and customize your assistant using our dashboard.',
        },
        {
          question: 'Can I try before I buy?',
          answer: 'Yes — we provide a free trial so you can evaluate features and integrations before committing to a paid plan.',
        },
        {
          question: 'Where can I find the documentation?',
          answer: 'Our documentation is available in the Docs section with step-by-step tutorials, API references, and integration guides.',
        },
      ],
    },
    {
      title: 'Billing',
      items: [
        {
          question: 'How does billing work?',
          answer: 'We support monthly and yearly billing cycles. Yearly subscriptions come with a discount. Billing details are available in your account settings.',
        },
        {
          question: 'Can I change plans later?',
          answer: 'Yes — you can upgrade or downgrade plans at any time from the billing page; proration is handled automatically for mid-cycle changes.',
        },
        {
          question: 'What is your refund policy?',
          answer: 'We offer a 30-day refund policy for eligible plans. Contact support if you need a refund.',
        },
        {
          question: 'How do I update my payment method?',
          answer: 'Go to account settings → billing → payment methods, and update or add a new payment method.',
        },
      ],
    },
    {
      title: 'Security & Compliance',
      items: [
        {
          question: 'How is data protected?',
          answer: 'We encrypt data in transit and at rest, follow industry best practices, and provide role-based access controls for accounts.',
        },
        {
          question: 'Do you offer enterprise compliance?',
          answer: 'Yes — enterprise plans include SLA, SOC/ISO compliance options, and dedicated security reviews.',
        },
      ],
    },
    {
      title: 'Integrations',
      items: [
        {
          question: 'What platforms do you integrate with?',
          answer: 'Beedy AI integrates with email, Slack, MS Teams, CRMs, and provides a flexible API for custom integrations.',
        },
        {
          question: 'Can I build custom connectors?',
          answer: 'Yes — our API and webhook system allow you to create custom connectors and workflows.',
        },
      ],
    },
  ],
};

export const FOOTER_SECTION_EN = {
  brand: {
    name: 'Beedy AI',
    tagline: 'Copy the code and make it yours.',
    badges: [
      { label: 'App Store', href: '#' },
      { label: 'Google Play', href: '#' },
    ],
  },
  sections: [
    {
      title: 'Product',
      links: [
        { title: 'Overview', href: '/#features' },
        { title: 'Pricing', href: '/pricing' },
        { title: 'Marketplace', href: '/marketplace' },
        { title: 'Features', href: '/#features' },
      ],
    },
    {
      title: 'Company',
      links: [
        { title: 'About', href: '/about' },
        { title: 'Team', href: '/team' },
        { title: 'Blog', href: '/blog' },
        { title: 'Careers', href: '/careers' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { title: 'Help', href: '/support' },
        { title: 'Sales', href: '/sales' },
        { title: 'Advertise', href: '/advertise' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { title: 'Terms of Service', href: '/terms' },
        { title: 'Privacy Policy', href: '/privacy' },
      ],
    },
  ],
  social: [
    { name: 'Twitter', href: 'https://twitter.com' },
    { name: 'Github', href: 'https://github.com' },
    { name: 'Discord', href: 'https://discord.com' },
    { name: 'Telegram', href: 'https://t.me' },
  ],
  copyright: '© Beedy AI. All rights reserved.',
};

export const CTA_SECTION_EN = {
  title: 'Ready to get started with Beedy AI?',
  description: 'Start your free trial or talk to our team to build a custom plan for your organization.',
  ctaPrimary: 'Start Free Trial',
  ctaSecondary: 'Contact Sales',
  items: [
    {
      title: 'Documentation',
      description: "Learn more about our platform's features and capabilities.",
      icon: 'Book',
    },
    {
      title: 'Interactive Demo',
      description: 'Experience our platform firsthand with an interactive demonstration of key features.',
      icon: 'MonitorPlay',
    },
  ],
};

export const STATS_SECTION_EN = {
  title: "Numbers don't Lie",
  description: 'Key growth indicators across years. Toggle the year to see updated metrics.',
  ctaPrimary: 'Documentation',
  ctaSecondary: 'Get Started',
  years: [
    {
      id: 'y21',
      label: '2021 - 2022',
      items: [
        { label: 'Team Members', value: 300 },
        { label: 'Company Growth', value: 120 },
        { label: 'New Customers', value: 100000000 },
        { label: 'Revenue', value: 10 },
      ],
      // timeline across 4 quarters for each metric
      timeline: [
        { label: 'Q1', teams: 50, growth: 10, customers: 18000000, revenue: 2 },
        { label: 'Q2', teams: 120, growth: 60, customers: 42000000, revenue: 3 },
        { label: 'Q3', teams: 230, growth: 220, customers: 70000000, revenue: 3 },
        { label: 'Q4', teams: 300, growth: 120, customers: 100000000, revenue: 2 },
      ],
    },
    {
      id: 'y22',
      label: '2022 - 2023',
      items: [
        { label: 'Team Members', value: 120000 },
        { label: 'Company Growth', value: 45 },
        { label: 'New Customers', value: 2800000 },
        { label: 'Revenue', value: 150 },
      ],
      timeline: [
        { label: 'Q1', teams: 80000, growth: 20, customers: 500000, revenue: 30 },
        { label: 'Q2', teams: 90000, growth: 30, customers: 700000, revenue: 50 },
        { label: 'Q3', teams: 110000, growth: 60, customers: 1500000, revenue: 40 },
        { label: 'Q4', teams: 120000, growth: 45, customers: 2800000, revenue: 30 },
      ],
    },
    {
      id: 'y23',
      label: '2023 - 2024',
      items: [
        { label: 'Team Members', value: 120000 },
        { label: 'Company Growth', value: 45 },
        { label: 'New Customers', value: 2800000 },
        { label: 'Revenue', value: 150 },
      ],
      timeline: [
        { label: 'Q1', teams: 105000, growth: 25, customers: 600000, revenue: 35 },
        { label: 'Q2', teams: 110000, growth: 40, customers: 900000, revenue: 45 },
        { label: 'Q3', teams: 118000, growth: 50, customers: 1800000, revenue: 35 },
        { label: 'Q4', teams: 120000, growth: 45, customers: 2800000, revenue: 35 },
      ],
    },
    {
      id: 'y24',
      label: '2024 - 2025',
      items: [
        { label: 'Team Members', value: 130000 },
        { label: 'Company Growth', value: 60 },
        { label: 'New Customers', value: 5000000 },
        { label: 'Revenue', value: 200 },
      ],
      timeline: [
        { label: 'Q1', teams: 100000, growth: 35, customers: 800000, revenue: 40 },
        { label: 'Q2', teams: 110000, growth: 45, customers: 2000000, revenue: 50 },
        { label: 'Q3', teams: 125000, growth: 80, customers: 4500000, revenue: 50 },
        { label: 'Q4', teams: 130000, growth: 60, customers: 5000000, revenue: 60 },
      ],
    },
  ],
};
