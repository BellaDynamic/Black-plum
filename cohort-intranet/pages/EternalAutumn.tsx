/**
 * Eternal Autumn Trust
 * Private Operating Foundation — Funds & Fuels the UCM Ecosystem
 */
import { Link } from "wouter";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Building2, TrendingUp, FileText, Shield, Globe, Sparkles,
  ArrowRight, ExternalLink, ChevronRight, Users
} from "lucide-react";

const CALENDLY = "https://calendly.com/changemaker-black-plum-concierge/newclientevaluation";

const FUNDING_PROGRAMS = [
  {
    name: "Program-Related Investments (PRI)",
    desc: "Investments made to accomplish the Trust's charitable purposes. PRIs are eligible for private foundation investment — no excise tax, counts toward 5% distribution requirement.",
    icon: TrendingUp,
    color: "text-zinc-300",
  },
  {
    name: "Donor Advised Fund (DAF) Management",
    desc: "All UCM programs are 100% DAF-ready. DAF holders can direct grants to any UCM program through the Eternal Autumn Trust without additional vetting.",
    icon: FileText,
    color: "text-zinc-300",
  },
  {
    name: "EE Fund Pool Optimizer",
    desc: "Proprietary fund pooling system that optimizes capital deployment across all 16 GRID cells. Ensures 30% development funding requirement is met per property.",
    icon: Sparkles,
    color: "text-zinc-300",
  },
  {
    name: "Startup Funding per GRID Cell",
    desc: "Each GRID cell requires $40,000–$80,000 in startup capital. The Trust funds 40–80% of this requirement through PRI and DAF instruments.",
    icon: Building2,
    color: "text-zinc-300",
  },
  {
    name: "Grant Management",
    desc: "Full grant lifecycle management — identification, application, compliance, reporting, and renewal — for all UCM programs and GRID properties.",
    icon: Globe,
    color: "text-zinc-300",
  },
  {
    name: "Community Development Finance",
    desc: "Community Development Financial Institution (CDFI)-aligned financing for underserved communities and economic development projects within the GRID framework.",
    icon: Users,
    color: "text-zinc-300",
  },
];

const PROGRAM_REQUIREMENTS = [
  {
    title: "Minimum 4 Core Programs",
    desc: "Each program conducts a minimum of 4 events or projects per year. This activity schedule also serves as the production schedule for location-specific content.",
  },
  {
    title: "Monthly Content Creation",
    desc: "Monthly content creation supports mission activities, tied to the production schedule. Used to encourage community onboarding and recruitment of service providers.",
  },
  {
    title: "30% Development Funding",
    desc: "Each GRID property requires 30% development funding before activation. The EE Fund Pool Optimizer tracks and manages this requirement across all cells.",
  },
  {
    title: "100% PRI/DAF Ready",
    desc: "All programs are structured to be immediately eligible for Program-Related Investment and Donor Advised Fund contributions — no additional vetting required.",
  },
];

const ECOSYSTEM_CONNECTIONS = [
  { name: "Universal Changemakers, Series L3C", role: "Parent organization — the Trust funds, fuels, and bridges gaps in UCM's humanism capabilities", path: "/" },
  { name: "Safe Harbor", role: "Primary beneficiary — crisis response and public service programs funded through the Trust", path: "/safe-harbor" },
  { name: "Big Heart Solutions", role: "Community impact programs funded through grant management and DAF instruments", path: "/big-heart" },
  { name: "Resolute Economic Growth Clinic", role: "Economic development programs funded through PRI and community development finance", path: "/resolute" },
  { name: "All GRID Properties", role: "Startup funding ($40K–$80K per cell) and ongoing program funding across all 16 cells", path: "/properties" },
];

export default function EternalAutumn() {
  return (
    <DashboardLayout>
      <div className="p-4 md:p-6 space-y-8 max-w-5xl">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-xl bg-zinc-500/10 border border-zinc-500/20 flex items-center justify-center shrink-0">
            <Shield className="w-7 h-7 text-zinc-300" />
          </div>
          <div>
            <div className="flex items-center gap-3 flex-wrap mb-2">
              <h1 className="text-2xl font-bold text-white">Eternal Autumn Trust</h1>
              <Badge className="bg-zinc-500/10 text-zinc-300 border-zinc-500/20 text-xs">Private Operating Foundation</Badge>
              <Badge className="bg-teal-500/10 text-teal-300 border-teal-500/20 text-xs">100% PRI/DAF Ready</Badge>
              <Badge className="bg-zinc-800 text-zinc-400 border-zinc-700 text-xs">All GRID Cells</Badge>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
              The Eternal Autumn Trust is the private operating foundation created to fund, fuel, and bridge gaps in humanism capabilities from Universal Changemakers Series L3C. It is responsible for fulfilling program outreach across all GRID cells and manages the EE Fund Pool Optimizer for capital deployment.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
          <div className="text-xs text-zinc-400 uppercase tracking-wider mb-3">Purpose & Structure</div>
          <p className="text-white text-base leading-relaxed mb-3">
            The Eternal Autumn Trust exists to ensure that the mission of Universal Changemakers, Series L3C is never limited by capital constraints. As a private operating foundation, it can receive Program-Related Investments from other private foundations, deploy Donor Advised Fund grants, and manage the full lifecycle of grant funding across all UCM programs.
          </p>
          <p className="text-zinc-300 text-sm leading-relaxed mb-4">
            The Trust is the financial backbone of the UCM ecosystem. Every brand, every GRID cell, and every program is ultimately funded through the Trust's capital management systems — ensuring that the movement of people and money back into community is never interrupted by administrative or financial gaps.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-zinc-800 rounded-lg p-3 text-center">
              <div className="text-white font-bold text-lg">100%</div>
              <div className="text-zinc-400 text-xs">PRI Eligible</div>
            </div>
            <div className="bg-zinc-800 rounded-lg p-3 text-center">
              <div className="text-white font-bold text-lg">100%</div>
              <div className="text-zinc-400 text-xs">DAF Ready</div>
            </div>
            <div className="bg-zinc-800 rounded-lg p-3 text-center">
              <div className="text-white font-bold text-lg">16+</div>
              <div className="text-zinc-400 text-xs">GRID Cells Funded</div>
            </div>
          </div>
        </div>

        {/* Funding Programs */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Funding Programs & Instruments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FUNDING_PROGRAMS.map((prog) => {
              const Icon = prog.icon;
              return (
                <div key={prog.name} className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 flex gap-4">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 flex items-center justify-center shrink-0">
                    <Icon className={`w-4 h-4 ${prog.color}`} />
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

        {/* Program Requirements */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Program Structure Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROGRAM_REQUIREMENTS.map((req) => (
              <div key={req.title} className="bg-zinc-950 border border-zinc-800 rounded-xl p-5">
                <div className="text-white text-sm font-semibold mb-2">{req.title}</div>
                <div className="text-zinc-400 text-xs leading-relaxed">{req.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Capital Deployment */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
          <h2 className="text-lg font-bold text-white mb-4">Capital Deployment — GRID Cell Funding</h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-5">
            Each GRID cell requires a minimum of $40,000–$80,000 in startup capital. The EE Fund Pool Optimizer tracks the 30% development funding requirement per property and manages capital deployment across all active cells.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
            <div className="bg-zinc-900 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-white mb-1">$40K–$80K</div>
              <div className="text-xs text-zinc-500">Startup Cost per GRID Cell</div>
            </div>
            <div className="bg-zinc-900 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-white mb-1">30%</div>
              <div className="text-xs text-zinc-500">Development Funding Required Before Activation</div>
            </div>
            <div className="bg-zinc-900 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-white mb-1">40–80%</div>
              <div className="text-xs text-zinc-500">Trust Funding Coverage per Property</div>
            </div>
          </div>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
            <Button className="bg-zinc-700 hover:bg-zinc-600 text-white gap-2">
              Schedule an Investor Conversation
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

        {/* Investor / Funder Engagement */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
          <h2 className="text-lg font-bold text-white mb-4">For Investors & Funders</h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">
            The Eternal Autumn Trust is structured to receive Program-Related Investments from private foundations, Donor Advised Fund grants from DAF holders, and institutional capital from community development finance institutions. All programs are fully documented and compliant with IRS requirements for PRI eligibility.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div className="bg-zinc-900 rounded-lg p-4">
              <div className="text-zinc-300 text-xs font-semibold uppercase tracking-wider mb-2">For Private Foundations</div>
              <p className="text-zinc-400 text-xs leading-relaxed">
                PRIs made to the Eternal Autumn Trust count toward your 5% distribution requirement and are not subject to excise tax. Full documentation of program-related purpose is available upon request.
              </p>
            </div>
            <div className="bg-zinc-900 rounded-lg p-4">
              <div className="text-zinc-300 text-xs font-semibold uppercase tracking-wider mb-2">For DAF Holders</div>
              <p className="text-zinc-400 text-xs leading-relaxed">
                All UCM programs are 100% DAF-ready. You can direct grants from your Donor Advised Fund to any UCM program through the Eternal Autumn Trust without additional vetting or documentation.
              </p>
            </div>
          </div>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
            <Button className="bg-zinc-700 hover:bg-zinc-600 text-white gap-2">
              Schedule an Investor Conversation
              <ExternalLink className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </DashboardLayout>
  );
}
