import {LucideProps} from "lucide-react";
import {ComponentPropsWithoutRef} from "react";

export interface NavbarMenuData {
  title: string;
  href: string;
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
}

export interface AnimatedGridPatternProps extends ComponentPropsWithoutRef<"svg"> {
  width?: number
  height?: number
  x?: number
  y?: number
  strokeDasharray?: number
  numSquares?: number
  maxOpacity?: number
  duration?: number
  repeatDelay?: number
}

export interface AboutSection {
  title: string;
  subtitle?: string;
  points: { title: string; description: string; icon?: any }[];
}

export interface PricingPlan {
  id: string;
  title: string;
  priceMonthly: string;
  priceYearly?: string;
  description: string;
  credits?: string;
  features: { label: string; icon?: string }[];
  cta: string;
  popular?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  title: string;
  items: FAQItem[];
}

export interface FooterLink {
  title: string;
  href?: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface CTASection {
  title: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary?: string;
}

export interface StatsItem {
  label: string;
  value: number | string; 
}

export interface StatsPoint {
  label: string; 
  teams?: number;
  growth?: number;
  customers?: number;
  revenue?: number; 
}

export interface StatsYear {
  id: string;
  label: string;
  items: StatsItem[];
  metrics?: number[];
  timeline?: StatsPoint[];
}

export interface StatsSection {
  title: string;
  description?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
  years: StatsYear[];
}

export interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export interface GradientColors {
    dark: {
        border: string;
        overlay: string;
        accent: string;
        text: string;
        glow: string;
        textGlow: string;
        hover: string;
    };
    light: {
        border: string;
        base: string;
        overlay: string;
        accent: string;
        text: string;
        glow: string;
        hover: string;
    };
}

export interface GradientButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: string;
    label?: string;
    className?: string;
    variant?: ColorVariant;
}