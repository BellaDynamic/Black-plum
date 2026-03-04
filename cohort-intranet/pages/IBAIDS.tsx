/**
 * iBAIDS — International Business and Individual Development System
 * Global B2B affiliate network for cross-border commerce and development
 */
import { Link } from "wouter";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Globe, Building2, Users, TrendingUp, Shield, FileText,
  ArrowRight, ExternalLink, ChevronRight
} from "lucide-react";

const CALENDLY = "https://calendly.com/changemaker-black-plum-concierge/newclientevaluation";

const MARKETS = [
  { name: "United States", desc: "Domestic B2B network — all states, counties, cities, and townships. Government procurement and community development.", icon: Building2 },
  { name: "United Kingdom", desc: "UK market access for entertainment, business development, and community programs. TGAA guild connections.", icon: Globe },
  { name: "European Union", desc: "EU market connections for international business development, compliance, and cross-border commerce.", icon: Globe },
  { name: "Africa / Film", desc: "African film industry connections and community development partnerships. Entertainment production and location incentives.", icon: Globe },
  { name: "World Markets", desc: "Global B2B affiliate network for any market where UCM programs and services can be deployed.", icon: Globe },
];

const SERVICES = [
  {
    name: "International B2B Connections",
    desc: "Direct connections to vetted B2B partners in all five market regions. Pre-qualified relationships for faster engagement.",
    icon: Users,
  },
  {
    name: "Cross-Border Compliance",
    desc: "Compliance guidance for international business operations — tax, labor, procurement, and regulatory requirements per region.",
    icon: Shield,
  },
  {
    name: "Global Market Access",
    desc: "Structured pathways for UCM brands and cohort members to access international markets through the iBAIDS affiliate network.",
    icon: Globe,
  },
  {
    name: "Development System Framework",
    desc: "The iBAIDS framework applies UCM's GRID and RAPID Phase Plan methodologies to international development projects.",
    icon: TrendingUp,
  },
  {
    name: "Affiliate Network Management",
    desc: "Ongoing management of affiliate relationships, performance tracking, and network expansion across all five market regions.",
    icon: FileText,
  },
];

const ECOSYSTEM_CONNECTIONS = [
  { name: "TGAA — The Global Artists Alliance", role: "Entertainment industry connections across all five iBAIDS market regions", path: "/tgaa-guild" },
  { name: "Resolute Economic Growth Clinic", role: "Business development support for iBAIDS clients scaling internationally", path: "/resolute" },
  { name: "GRID Meta House", role: "Global GRID deployment framework — iBAIDS extends GRID internationally", path: "/properties" },
  { name: "Universal Changemakers, Series L3C", role: "Parent organization — iBAIDS is the international arm of the UCM ecosystem", path: "/" },
];

export default function IBAIDS() {
  return (
    <DashboardLayout>
      <div className="p-4 md:p-6 space-y-8 max-w-5xl">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0">
            <Globe className="w-7 h-7 text-violet-400" />
          </div>
          <div>
            <div className="flex items-center gap-3 flex-wrap mb-2">
              <h1 className="text-2xl font-bold text-white">iBAIDS</h1>
              <Badge className="bg-violet-500/10 text-violet-300 border-violet-500/20 text-xs">International Business & Individual Development System</Badge>
              <Badge className="bg-zinc-800 text-zinc-400 border-zinc-700 text-xs">GRID-03</Badge>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
              iBAIDS — the International Business and Individual Development System — is the global B2B affiliate network that connects the UCM ecosystem to international markets. It provides the framework for cross-border commerce, compliance, and development across five market regions: USA, UK, EU, Africa/Film, and World Markets.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="bg-violet-950/20 border border-violet-500/20 rounded-xl p-6">
          <div className="text-xs text-violet-400 uppercase tracking-wider mb-3">Purpose</div>
          <p className="text-white text-base leading-relaxed mb-3">
            iBAIDS exists to ensure that the UCM ecosystem's reach is not limited by geography. Every brand, every program, and every cohort member has the potential to operate internationally — and iBAIDS provides the infrastructure to make that possible.
          </p>
          <p className="text-zinc-300 text-sm leading-relaxed">
            Through a vetted affiliate network, compliance guidance, and market-specific development frameworks, iBAIDS connects individuals and organizations to international opportunities they would not otherwise access — while maintaining the standards, protocols, and mission alignment of the UCM ecosystem.
          </p>
        </div>

        {/* Markets */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Market Regions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MARKETS.map((market) => {
              const Icon = market.icon;
              return (
                <div key={market.name} className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 flex gap-4">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-violet-400" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold mb-1">{market.name}</div>
                    <div className="text-zinc-400 text-xs leading-relaxed">{market.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Services</h2>
          <div className="space-y-3">
            {SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <div key={svc.name} className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 flex gap-4">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-violet-400" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold mb-1">{svc.name}</div>
                    <div className="text-zinc-400 text-xs leading-relaxed">{svc.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
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
          <h2 className="text-lg font-bold text-white mb-4">How to Access iBAIDS</h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-5">
            Access to the iBAIDS affiliate network is available to UCM preferred members and registered B2B partners. Schedule a session to discuss your international development goals and determine which market regions and services are the right fit for your situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
              <Button className="bg-violet-700 hover:bg-violet-600 text-white gap-2">
                Schedule a Session
                <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
            <Link href="/partner-register">
              <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-900 gap-2">
                Register as B2B Partner
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
