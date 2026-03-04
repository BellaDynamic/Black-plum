/**
 * Bella Dynamic
 * Authentic Living & Healing — Benefits & Support Systems
 */
import { Link } from "wouter";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Leaf, Heart, Shield, Users, FileText, Star,
  ArrowRight, ExternalLink, ChevronRight, Building2
} from "lucide-react";

const CALENDLY = "https://calendly.com/changemaker-black-plum-concierge/newclientevaluation";

const BENEFIT_PLANS = [
  {
    name: "Core Benefits Package",
    price: "$150–$350/month",
    desc: "Foundational defined benefit plan for individuals and families. Medical, dental, vision, and basic retirement support.",
    items: [
      "Medical coverage navigation",
      "Dental & vision benefits",
      "Basic retirement planning",
      "Benefits enrollment support",
      "Annual benefits review",
    ],
    financing: "Denefits available",
    color: "border-emerald-500/30",
  },
  {
    name: "Comprehensive Wellness Plan",
    price: "$350–$750/month",
    desc: "Full wellness and benefits package including pension, rehabilitation, and specialized support programs.",
    items: [
      "Pension & retirement planning",
      "Rehabilitation support programs",
      "IHSS navigation & enrollment",
      "Grief support services",
      "Die With Dignity program access",
    ],
    financing: "Denefits available",
    color: "border-emerald-500/40",
  },
  {
    name: "Organizational Benefits",
    price: "$500–$2,000/month",
    desc: "Union-like defined benefit plans for small organizations, production companies, and B2B members. Covers entire teams.",
    items: [
      "Team-wide benefits enrollment",
      "Pension plan administration",
      "Workers' compensation guidance",
      "HR compliance support",
      "UCM ecosystem integration",
    ],
    financing: "Institutional billing available",
    color: "border-emerald-500/50",
  },
];

const AUTHENTIC_PROGRAMS = [
  {
    name: "Authentic Living",
    desc: "Personal development and life navigation support. Helps individuals build authentic, sustainable lives aligned with their values and goals.",
    icon: Star,
  },
  {
    name: "Authentic Healing",
    desc: "End-of-life planning, grief support, and death certificate assistance. Power of attorney transitions, conservatorship, and IHSS navigation.",
    icon: Heart,
  },
  {
    name: "Google Grandparent Initiative",
    desc: "Technology literacy and digital navigation support for seniors. Helps older adults access digital services, benefits, and community resources.",
    icon: Users,
  },
  {
    name: "Safe Rides / Women-Only Rides",
    desc: "Safe transportation coordination for women, seniors, and vulnerable populations. Community-based ride coordination and safety programs.",
    icon: Shield,
  },
  {
    name: "Die With Dignity Programs",
    desc: "Compassionate end-of-life planning for individuals without family or friends. Includes organ donation programs, final arrangements, and legacy planning.",
    icon: Leaf,
  },
  {
    name: "Rehabilitation Support",
    desc: "Recovery and rehabilitation navigation — connecting individuals to appropriate services, benefits, and community support systems.",
    icon: Building2,
  },
];

const ECOSYSTEM_CONNECTIONS = [
  { name: "Authentic Living & Authentic Healing", role: "Co-supported programs — grief, IHSS, end-of-life, and wellness", path: "/authentic-living" },
  { name: "Safe Harbor", role: "Crisis response and resource coordination for Bella Dynamic clients in need", path: "/safe-harbor" },
  { name: "Black Plum Concierge", role: "Premium advisory layer for Bella Dynamic's high-capacity clients", path: "/black-plum" },
  { name: "Denefits Platform", role: "Financing and payment processing for all benefit plans over $300/month", path: "/financial-hub" },
];

export default function BellaDynamic() {
  return (
    <DashboardLayout>
      <div className="p-4 md:p-6 space-y-8 max-w-5xl">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
            <Leaf className="w-7 h-7 text-emerald-400" />
          </div>
          <div>
            <div className="flex items-center gap-3 flex-wrap mb-2">
              <h1 className="text-2xl font-bold text-white">Bella Dynamic</h1>
              <Badge className="bg-emerald-500/10 text-emerald-300 border-emerald-500/20 text-xs">Authentic Living & Healing</Badge>
              <Badge className="bg-zinc-800 text-zinc-400 border-zinc-700 text-xs">GRID-11</Badge>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
              Bella Dynamic is the internal benefits and support system designed to remedy the mismanagement of benefits and budgets for individuals, families, and organizations. It provides union-like defined benefit plans — pension, medical, dental, vision, retirement — and co-supports Authentic Living & Authentic Healing services for grief, IHSS, and end-of-life planning.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-xl p-6">
          <div className="text-xs text-emerald-400 uppercase tracking-wider mb-3">Mission</div>
          <p className="text-white text-base leading-relaxed mb-3">
            Bella Dynamic exists to ensure that every person — regardless of income, background, or life situation — has access to the benefits, wellness support, and end-of-life planning they deserve.
          </p>
          <p className="text-zinc-300 text-sm leading-relaxed">
            Named for Brandy Bianchini herself, Bella Dynamic is the most personal expression of the UCM mission: that authentic living and healing are not luxuries — they are rights. The platform bridges the gap between what benefits people are entitled to and what they actually receive, while providing the human support needed to navigate complex systems with dignity.
          </p>
        </div>

        {/* Benefit Plans */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Benefit Plans & Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {BENEFIT_PLANS.map((plan) => (
              <Card key={plan.name} className={`bg-zinc-950 border ${plan.color} p-5 flex flex-col`}>
                <div className="text-white font-bold text-sm mb-1">{plan.name}</div>
                <div className="text-emerald-400 text-lg font-bold mb-3">{plan.price}</div>
                <p className="text-zinc-400 text-xs leading-relaxed mb-4 flex-1">{plan.desc}</p>
                <ul className="space-y-1.5 mb-4">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-zinc-300">
                      <ChevronRight className="w-3 h-3 text-emerald-400 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="text-xs text-teal-400 bg-teal-500/10 border border-teal-500/20 rounded px-2 py-1 text-center">
                  {plan.financing}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Authentic Programs */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Authentic Living & Healing Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {AUTHENTIC_PROGRAMS.map((prog) => {
              const Icon = prog.icon;
              return (
                <div key={prog.name} className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 flex gap-4">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-emerald-400" />
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
                All benefit plans over $300/month qualify for Denefits financing. 0% interest. $39 fee. 3, 6, 9, or 12-month payment plans. No credit check required for many plans. White-labeled under Bella Dynamic branding.
              </p>
            </div>
            <div className="bg-zinc-900 rounded-lg p-4">
              <div className="text-teal-400 text-xs font-semibold uppercase tracking-wider mb-2">No-Income Navigation</div>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Bella Dynamic maintains a no-income navigation tier for individuals who cannot pay. Grant funding and institutional support cover these engagements. No one is turned away due to financial hardship.
              </p>
            </div>
          </div>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
            <Button className="bg-emerald-700 hover:bg-emerald-600 text-white gap-2">
              Schedule a Benefits Consultation
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
              { step: "1", title: "Book a Session", desc: "Schedule a first session to discuss your benefits situation, your wellness needs, or your organization's benefit plan requirements." },
              { step: "2", title: "Benefits Assessment", desc: "Complete a benefits assessment to identify which plans, programs, and support services are the right fit for your current situation." },
              { step: "3", title: "Enroll & Begin", desc: "Enroll in your selected benefit plan. Denefits financing is available if needed. Your service agreement is generated and enrollment begins immediately." },
            ].map((s) => (
              <div key={s.step} className="flex gap-3">
                <div className="w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400 text-xs font-bold">{s.step}</div>
                <div>
                  <div className="text-white text-sm font-semibold mb-1">{s.title}</div>
                  <div className="text-zinc-400 text-xs leading-relaxed">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
              <Button className="bg-emerald-700 hover:bg-emerald-600 text-white gap-2">
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
