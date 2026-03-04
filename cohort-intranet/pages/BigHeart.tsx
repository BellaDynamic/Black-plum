/**
 * Big Heart Solutions
 * Community impact, accessible transformation, and resource navigation
 */
import { Link } from "wouter";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Heart, Users, BookOpen, TrendingUp, Shield,
  ArrowRight, ExternalLink, ChevronRight, Star, Leaf
} from "lucide-react";

const CALENDLY = "https://calendly.com/changemaker-black-plum-concierge/newclientevaluation";

const SERVICE_TIERS = [
  {
    name: "Community Access",
    price: "$50–$150/month",
    desc: "Entry-level support for individuals and families. Financial literacy, basic business education, and resource navigation.",
    items: [
      "Financial literacy workshops",
      "Basic business education",
      "Public resource navigation",
      "Group support programs",
      "Community event access",
    ],
    financing: "Denefits available",
    color: "border-rose-500/30",
  },
  {
    name: "Growth Support",
    price: "$150–$350/month",
    desc: "For individuals and small organizations ready to build capacity. Includes one-on-one coaching and structured development.",
    items: [
      "One-on-one coaching sessions",
      "Business development basics",
      "Grant and funding guidance",
      "Community partnership introductions",
      "GRID framework orientation",
    ],
    financing: "Denefits available",
    color: "border-rose-500/40",
  },
  {
    name: "Organizational Support",
    price: "$350–$500/month",
    desc: "For community organizations, small nonprofits, and emerging businesses. Full program support and institutional connections.",
    items: [
      "Full program development support",
      "Institutional funding guidance",
      "Government program alignment",
      "Team development and training",
      "UCM ecosystem integration",
    ],
    financing: "Denefits available",
    color: "border-rose-500/50",
  },
];

const PROGRAMS = [
  {
    name: "Financial Literacy Program",
    desc: "Practical financial education for individuals and families — budgeting, credit, savings, and wealth-building basics.",
    icon: TrendingUp,
  },
  {
    name: "Business Basics Workshop",
    desc: "Introduction to business fundamentals for aspiring entrepreneurs — structure, compliance, and first steps.",
    icon: BookOpen,
  },
  {
    name: "Community Resource Navigation",
    desc: "Guided access to public benefits, nonprofit services, and government programs available in your region.",
    icon: Users,
  },
  {
    name: "Team Development & Training",
    desc: "Workforce development, HR basics, and team-building for small organizations and community groups.",
    icon: Star,
  },
];

const ECOSYSTEM_CONNECTIONS = [
  { name: "Safe Harbor", role: "Crisis response entry point — clients stabilize here before transitioning to Big Heart", path: "/safe-harbor" },
  { name: "Resolute Economic Growth Clinic", role: "Business development pathway for Big Heart clients ready to launch", path: "/resolute" },
  { name: "Bella Dynamic", role: "Benefits enrollment and wellness support for Big Heart members", path: "/bella-dynamic" },
  { name: "Black Plum Concierge", role: "Premium advisory for high-capacity clients who graduate from Big Heart programs", path: "/black-plum" },
];

export default function BigHeart() {
  return (
    <DashboardLayout>
      <div className="p-4 md:p-6 space-y-8 max-w-5xl">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0">
            <Heart className="w-7 h-7 text-rose-400" />
          </div>
          <div>
            <div className="flex items-center gap-3 flex-wrap mb-2">
              <h1 className="text-2xl font-bold text-white">Big Heart Solutions</h1>
              <Badge className="bg-rose-500/10 text-rose-300 border-rose-500/20 text-xs">Community Impact</Badge>
              <Badge className="bg-zinc-800 text-zinc-400 border-zinc-700 text-xs">GRID-01</Badge>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
              Big Heart Solutions provides accessible transformation services for the general public, community organizations, and small businesses. Sliding-scale pricing ensures that financial capacity is never a barrier to growth. Big Heart is where community members learn what to know, how to know it, and what to expect when engaging in business.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="bg-rose-950/20 border border-rose-500/20 rounded-xl p-6">
          <div className="text-xs text-rose-400 uppercase tracking-wider mb-3">Mission</div>
          <p className="text-white text-base leading-relaxed mb-3">
            Big Heart Solutions exists to close the knowledge gap that keeps individuals and communities from accessing the resources, opportunities, and systems that are already available to them.
          </p>
          <p className="text-zinc-300 text-sm leading-relaxed">
            Through financial literacy, business education, and community resource navigation, Big Heart teaches people in plain language what they need to know to move forward — whether that means applying for benefits, starting a business, or connecting with the right people in their community.
          </p>
        </div>

        {/* Revenue */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 text-center">
            <div className="text-2xl font-bold text-rose-400 mb-1">$10K–$30K</div>
            <div className="text-xs text-zinc-500">Monthly Revenue Potential</div>
          </div>
          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 text-center">
            <div className="text-2xl font-bold text-white mb-1">Sliding Scale</div>
            <div className="text-xs text-zinc-500">$50–$500/month — No one turned away</div>
          </div>
          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 text-center">
            <div className="text-2xl font-bold text-white mb-1">Grants + Individual</div>
            <div className="text-xs text-zinc-500">Combined institutional and individual funding</div>
          </div>
        </div>

        {/* Service Tiers */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Service Tiers & Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {SERVICE_TIERS.map((tier) => (
              <Card key={tier.name} className={`bg-zinc-950 border ${tier.color} p-5 flex flex-col`}>
                <div className="text-white font-bold text-sm mb-1">{tier.name}</div>
                <div className="text-rose-400 text-lg font-bold mb-2">{tier.price}</div>
                <p className="text-zinc-400 text-xs leading-relaxed mb-4 flex-1">{tier.desc}</p>
                <ul className="space-y-1.5 mb-4">
                  {tier.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-zinc-300">
                      <ChevronRight className="w-3 h-3 text-rose-400 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="text-xs text-teal-400 bg-teal-500/10 border border-teal-500/20 rounded px-2 py-1 text-center">
                  {tier.financing}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Programs */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Core Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROGRAMS.map((prog) => {
              const Icon = prog.icon;
              return (
                <div key={prog.name} className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 flex gap-4">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-rose-400" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold mb-1">{prog.name}</div>
                    <div className="text-zinc-400 text-xs leading-relaxed">{prog.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Billing */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
          <h2 className="text-lg font-bold text-white mb-4">Billing & Financing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div className="bg-zinc-900 rounded-lg p-4">
              <div className="text-teal-400 text-xs font-semibold uppercase tracking-wider mb-2">Denefits Financing</div>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Service plans over $300/month qualify for Denefits financing. 0% interest. $39 fee. 3, 6, 9, or 12-month payment plans. No credit check required for many plans. White-labeled under Big Heart Solutions branding.
              </p>
            </div>
            <div className="bg-zinc-900 rounded-lg p-4">
              <div className="text-teal-400 text-xs font-semibold uppercase tracking-wider mb-2">No-Income Navigation</div>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Big Heart Solutions maintains a no-income navigation tier for individuals who cannot pay. Grant funding and institutional support cover these engagements. No one is turned away due to financial hardship.
              </p>
            </div>
          </div>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
            <Button className="bg-rose-700 hover:bg-rose-600 text-white gap-2">
              Schedule Your First Session
              <ExternalLink className="w-4 h-4" />
            </Button>
          </a>
        </div>

        {/* Ecosystem */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Ecosystem Connections</h2>
          <div className="space-y-3">
            {ECOSYSTEM_CONNECTIONS.map((conn) => (
              <div key={conn.name} className="bg-zinc-950 border border-zinc-800 rounded-lg p-4 flex items-center justify-between gap-4">
                <div>
                  <div className="text-white text-sm font-semibold mb-1">{conn.name}</div>
                  <div className="text-zinc-500 text-xs">{conn.role}</div>
                </div>
                <Link href={conn.path}>
                  <Button size="sm" variant="ghost" className="text-xs text-zinc-400 hover:text-white hover:bg-zinc-800 gap-1 shrink-0">
                    View <ArrowRight className="w-3 h-3" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* How to Engage */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
          <h2 className="text-lg font-bold text-white mb-4">How to Get Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[
              { step: "1", title: "Book a Session", desc: "Schedule a first session to discuss your situation and goals. This is a no-pressure conversation — we meet you where you are." },
              { step: "2", title: "Readiness Assessment", desc: "Complete a short assessment to identify which programs, resources, and service tier are the right fit for your current situation." },
              { step: "3", title: "Begin Your Program", desc: "Start with your selected service tier. Denefits financing is available if needed. Your service agreement is generated and you begin immediately." },
            ].map((s) => (
              <div key={s.step} className="flex gap-3">
                <div className="w-7 h-7 rounded-full bg-rose-500/20 border border-rose-500/30 flex items-center justify-center shrink-0 text-rose-400 text-xs font-bold">{s.step}</div>
                <div>
                  <div className="text-white text-sm font-semibold mb-1">{s.title}</div>
                  <div className="text-zinc-400 text-xs leading-relaxed">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
              <Button className="bg-rose-700 hover:bg-rose-600 text-white gap-2">
                Book Your First Session
                <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
            <Link href="/member-intake">
              <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-900 gap-2">
                Apply for Membership
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
