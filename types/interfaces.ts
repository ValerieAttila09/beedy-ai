import { LucideProps } from "lucide-react";
import { ComponentPropsWithoutRef } from "react";

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

// Sections & content interfaces
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

// Stats
export interface StatsItem {
  label: string;
  value: number | string; // numeric or formatted (e.g., "2.8M")
}

export interface StatsPoint {
  label: string; // e.g., 'Q1', 'Jan', 'P1'
  teams?: number;
  growth?: number; // percent number like 45 => 45
  customers?: number; // raw count
  revenue?: number; // raw count or simplified index
}

export interface StatsYear {
  id: string;
  label: string; // display label e.g. "2023 - 2024"
  items: StatsItem[]; // expect exactly 4 items in order
  // option A: quick metrics normalized 0..1 for simple sparklines
  metrics?: number[];
  // richer timeline points for plotting real data
  timeline?: StatsPoint[];
}

export interface StatsSection {
  title: string;
  description?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
  years: StatsYear[];
}