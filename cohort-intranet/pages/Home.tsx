/**
 * Universal Changemakers, Series L3C — Public-Facing Landing Page
 * Three audience paths: Industry Partners, Prospective Members, Investors
 * Full ecosystem overview showing how all brands interconnect
 */
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight, Star, Heart, Shield, TrendingUp, Music, Globe,
  Users, Briefcase, Building2, ChevronRight, ExternalLink, Leaf, Sparkles
} from "lucide-react";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";

const CALENDLY = "https://calendly.com/changemaker-black-plum-concierge/newclientevaluation";

const BRANDS = [
  {
    id: "black-plum",
    name: "Black Plum Concierge",
    tagline: "Premium Concierge & Advisory",
    description: "Your direct portal to Brandy Bianchini. Full-service advisory for executives, founders, and high-net-worth individuals navigating complex life and business decisions.",
    icon: Star,
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20",
    tier: "Executive",
    path: "/black-plum",
  },
  {
    id: "safe-harbor",
    name: "Safe Harbor",
    tagline: "Public Resource & Service Center",
    description: "Crisis response, public support infrastructure, and resource coordination for individuals, nonprofits, and government agencies. Funded through institutional contracts and grants.",
    icon: Shield,
    color: "text-teal-400",
    bg: "bg-teal-500/10 border-teal-500/20",
    tier: "Community",
    path: "/safe-harbor",
  },
  {
    id: "big-heart",
    name: "Big Heart Solutions",
    tagline: "Community Impact & Resource Navigation",
    description: "Accessible transformation services for the general public, community organizations, and small businesses. Sliding-scale pricing. Financial literacy, business basics, and resource navigation.",
    icon: Heart,
    color: "text-rose-400",
    bg: "bg-rose-500/10 border-rose-500/20",
    tier: "Community",
    path: "/big-heart",
  },
  {
    id: "resolute",
    name: "Resolute Economic Growth Clinic",
    tagline: "Business Development & Economic Empowerment",
    description: "Strategic consulting, revenue architecture, grant services, and partnership structuring for entrepreneurs, startups, and economic development agencies.",
    icon: TrendingUp,
    color: "text-sky-400",
    bg: "bg-sky-500/10 border-sky-500/20",
    tier: "Business",
    path: "/resolute",
  },
  {
    id: "bella-dynamic",
    name: "Bella Dynamic",
    tagline: "Authentic Living & Healing — Benefits System",
    description: "Union-like defined benefit plans including pension, medical, dental, vision, and retirement. Co-supports Authentic Living & Authentic Healing services for grief, IHSS, and end-of-life planning.",
    icon: Leaf,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
    tier: "Benefits",
    path: "/bella-dynamic",
  },
  {
    id: "tgaa",
    name: "The Global Artists Alliance",
    tagline: "Paramount Guild for Entertainment Professionals",
    description: "One-and-done service solution for any entertainment project. Production management, location incentives, talent placement, and benefits for artists — all under one roof.",
    icon: Music,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10 border-indigo-500/20",
    tier: "Entertainment",
    path: "/tgaa-guild",
  },
  {
    id: "ibaids",
    name: "iBAIDS",
    tagline: "International Business & Individual Development System",
    description: "Global B2B affiliate network connecting USA, UK, EU, Africa, and world markets. Cross-border commerce, compliance, and development within the UCM ecosystem.",
    icon: Globe,
    color: "text-violet-400",
    bg: "bg-violet-500/10 border-violet-500/20",
    tier: "Global",
    path: "/ibaids",
  },
  {
    id: "eternal-autumn",
    name: "Eternal Autumn Trust",
    tagline: "Private Operating Foundation",
    description: "Funds, fuels, and bridges gaps in humanism capabilities from Universal Changemakers Series L3C. 100% PRI and DAF ready. Manages the EE Fund Pool Optimizer across all GRID cells.",
    icon: Building2,
    color: "text-zinc-300",
    bg: "bg-zinc-500/10 border-zinc-500/20",
    tier: "Foundation",
    path: "/eternal-autumn",
  },
];

const PROGRAMS = [
  {
    name: "GRID — Global Responsible Integrated Development",
    description: "Minimum 16 cells per state. Each cell holds a project, event, activity, brand, or business. The master deployment framework for all UCM brands.",
    icon: Building2,
  },
  {
    name: "RAPID Phase Plan",
    description: "Research → Architecture → Planning → Implementation → Delivery. The project lifecycle methodology applied to every client engagement and internal project.",
    icon: TrendingUp,
  },
  {
    name: "RFFS — Rapid Financial Fiscal Solutions",
    description: "Financial capacity assessment, working capital modeling, and sustainability planning. Applied before any financial conversation or capital raise.",
    icon: Sparkles,
  },
  {
    name: "BWEN — Multi-Channel Network",
    description: "Four concurrent content channels: Brand/Ads, Program Information, Project Information, and Audio/Video. Runs daily, weekly, and quarterly across all platforms.",
    icon: Globe,
  },
];

const AUDIENCE_PATHS = [
  {
    title: "Industry Partners",
    subtitle: "Agencies, studios, government, and organizations",
    description: "Register as a preferred partner to access our B2B network, co-develop programs, and engage in government procurement and community development opportunities across all regions.",
    cta: "Register as Partner",
    ctaPath: "/partner-register",
    icon: Briefcase,
    color: "border-teal-500/40 hover:border-teal-400/60",
    badgeColor: "bg-teal-500/10 text-teal-300 border-teal-500/20",
  },
  {
    title: "Prospective Members",
    subtitle: "Professionals, creatives, and service providers",
    description: "Apply as a preferred B2B member to access Brandy's network, proprietary tools (GRID, RAPID, RFFS), software access, and structured opportunity hours. 100 hours per quarter to start.",
    cta: "Apply for Membership",
    ctaPath: "/member-intake",
    icon: Users,
    color: "border-purple-500/40 hover:border-purple-400/60",
    badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/20",
  },
  {
    title: "Investors & Funders",
    subtitle: "Private foundations, DAF holders, and capital partners",
    description: "Explore Program-Related Investment (PRI) and Donor Advised Fund (DAF) opportunities through the Eternal Autumn Trust. All programs are 100% PRI/DAF ready with full RFFS documentation.",
    cta: "Schedule a Conversation",
    ctaPath: CALENDLY,
    icon: TrendingUp,
    color: "border-sky-500/40 hover:border-sky-400/60",
    badgeColor: "bg-sky-500/10 text-sky-300 border-sky-500/20",
    external: true,
  },
];

export default function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* ── TOP NAV ── */}
      <nav className="sticky top-0 z-50 bg-black/95 border-b border-zinc-800 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-600 to-purple-700 flex items-center justify-center">
              <span className="text-white text-xs font-bold">UC</span>
            </div>
            <div>
              <div className="text-sm font-bold text-white leading-none">Universal Changemakers</div>
              <div className="text-xs text-zinc-500 leading-none">Series L3C</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
            <a href="#ecosystem" className="hover:text-white transition">Ecosystem</a>
            <a href="#programs" className="hover:text-white transition">Programs</a>
            <a href="#engage" className="hover:text-white transition">Engage</a>
            <Link href="/partner-register" className="hover:text-white transition">Partners</Link>
          </div>
          <div className="flex items-center gap-3">
            {isAuthenticated ? (
              <Link href="/dashboard">
                <Button size="sm" className="bg-teal-700 hover:bg-teal-600 text-white text-xs">
                  Member Dashboard
                </Button>
              </Link>
            ) : (
              <>
                <a href={getLoginUrl()} className="text-sm text-zinc-400 hover:text-white transition hidden sm:block">
                  Member Login
                </a>
                <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="bg-teal-700 hover:bg-teal-600 text-white text-xs">
                    Book a Session
                  </Button>
                </a>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="py-20 md:py-28 px-4 border-b border-zinc-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-950/30 via-black to-purple-950/20 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-3xl">
            <Badge className="bg-teal-500/10 text-teal-300 border-teal-500/20 mb-6 text-xs">
              Founded December 11, 2015
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white">
              Moving People, Money,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400">
                and Purpose
              </span>{" "}
              Back Into Community
            </h1>
            <p className="text-lg text-zinc-300 mb-4 leading-relaxed">
              Universal Changemakers, Series L3C is a multi-entity ecosystem built to protect individuals and projects through streamlined, programmatic, and systematic processes for finance, labor law, and general business management.
            </p>
            <p className="text-base text-zinc-400 mb-8 leading-relaxed">
              Led by Brandy Bianchini — COO, procurement officer, and community development leader — the UCM ecosystem deploys eight branded entities, four global programs, and proprietary methodologies across every industry, territory, and demographic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-teal-700 hover:bg-teal-600 text-white gap-2 w-full sm:w-auto">
                  Book a Session with Brandy
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <Link href="/member-intake">
                <Button size="lg" variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-900 gap-2 w-full sm:w-auto">
                  Apply for Membership
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── AUDIENCE PATHS ── */}
      <section id="engage" className="py-16 px-4 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">How Would You Like to Engage?</h2>
            <p className="text-zinc-400">Select the path that best describes your relationship with UCM.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {AUDIENCE_PATHS.map((path) => {
              const Icon = path.icon;
              return (
                <Card key={path.title} className={`bg-zinc-950 border ${path.color} p-6 transition-all duration-200 flex flex-col`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-zinc-300" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{path.title}</div>
                      <div className="text-zinc-500 text-xs">{path.subtitle}</div>
                    </div>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed flex-1 mb-5">{path.description}</p>
                  {path.external ? (
                    <a href={path.ctaPath} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="w-full bg-zinc-800 hover:bg-zinc-700 text-white gap-2">
                        {path.cta}
                        <ExternalLink className="w-3 h-3" />
                      </Button>
                    </a>
                  ) : (
                    <Link href={path.ctaPath}>
                      <Button size="sm" className="w-full bg-zinc-800 hover:bg-zinc-700 text-white gap-2">
                        {path.cta}
                        <ArrowRight className="w-3 h-3" />
                      </Button>
                    </Link>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ECOSYSTEM OVERVIEW ── */}
      <section id="ecosystem" className="py-16 px-4 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">The UCM Ecosystem</h2>
            <p className="text-zinc-400 max-w-2xl">
              Eight interconnected brands operating on shared infrastructure — GRID, RAPID Phase Plan, RFFS, Denefits financing, and a unified service management layer. Every brand shares billing, compliance, and operational systems.
            </p>
          </div>

          {/* Ecosystem relationship diagram */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 mb-8">
            <div className="text-xs text-zinc-500 uppercase tracking-wider mb-4">Organizational Structure</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4">
                <div className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Parent Organization</div>
                <div className="text-white font-bold mb-1">Universal Changemakers, Series L3C</div>
                <div className="text-zinc-400 text-xs">Founded December 11, 2015 · No cap on capital building through program-related investments · Supports nonprofits by filling the void in traditional support systems</div>
              </div>
              <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4">
                <div className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Funding Arm</div>
                <div className="text-white font-bold mb-1">Eternal Autumn Trust</div>
                <div className="text-zinc-400 text-xs">Private Operating Foundation · Funds, fuels, and bridges gaps in humanism capabilities from UCM L3C · 100% PRI and DAF ready</div>
              </div>
              <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4">
                <div className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Deployment Framework</div>
                <div className="text-white font-bold mb-1">GRID Tool</div>
                <div className="text-zinc-400 text-xs">Global Responsible Integrated Development · Minimum 16 cells per state · Each cell holds a project, event, activity, brand, or business</div>
              </div>
            </div>
          </div>

          {/* Client journey flow */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 mb-8">
            <div className="text-xs text-zinc-500 uppercase tracking-wider mb-4">Client Journey — Four Entry Points</div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              {[
                { label: "Crisis or Need", brand: "Safe Harbor", desc: "Immediate crisis response and resource coordination", color: "border-teal-500/30" },
                { label: "Community Support", brand: "Big Heart Solutions", desc: "Financial literacy, business basics, community resources", color: "border-rose-500/30" },
                { label: "Business Development", brand: "Resolute Clinic", desc: "Strategic consulting, revenue architecture, grant services", color: "border-sky-500/30" },
                { label: "Premium Concierge", brand: "Black Plum", desc: "White-glove service across all six pillars for executives", color: "border-purple-500/30" },
              ].map((entry, i) => (
                <div key={entry.label} className={`bg-zinc-900 border ${entry.color} rounded-lg p-4 relative`}>
                  {i < 3 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <ChevronRight className="w-5 h-5 text-zinc-600" />
                    </div>
                  )}
                  <div className="text-xs text-zinc-500 mb-1">Entry Point {i + 1}</div>
                  <div className="text-white font-semibold text-sm mb-1">{entry.label}</div>
                  <div className="text-teal-400 text-xs font-medium mb-2">{entry.brand}</div>
                  <div className="text-zinc-500 text-xs">{entry.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Brand cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {BRANDS.map((brand) => {
              const Icon = brand.icon;
              return (
                <Card key={brand.id} className={`bg-zinc-950 border ${brand.bg} p-5 hover:border-opacity-60 transition-all duration-200`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-zinc-900 flex items-center justify-center">
                      <Icon className={`w-4 h-4 ${brand.color}`} />
                    </div>
                    <Badge className="text-xs bg-zinc-800 text-zinc-400 border-zinc-700">{brand.tier}</Badge>
                  </div>
                  <div className="text-white font-semibold text-sm mb-1">{brand.name}</div>
                  <div className="text-zinc-500 text-xs mb-3">{brand.tagline}</div>
                  <p className="text-zinc-400 text-xs leading-relaxed mb-4">{brand.description}</p>
                  <Link href={brand.path}>
                    <Button size="sm" variant="ghost" className="w-full text-xs text-zinc-400 hover:text-white hover:bg-zinc-800 gap-1 h-7">
                      Learn More <ArrowRight className="w-3 h-3" />
                    </Button>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROPRIETARY PROGRAMS ── */}
      <section id="programs" className="py-16 px-4 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Proprietary Systems & Methodologies</h2>
            <p className="text-zinc-400 max-w-2xl">
              Every UCM engagement is guided by these proprietary frameworks. They are not publicly shared — they are applied by Brandy and her certified cohort on your behalf.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROGRAMS.map((prog) => {
              const Icon = prog.icon;
              return (
                <div key={prog.name} className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm mb-2">{prog.name}</div>
                    <p className="text-zinc-400 text-sm leading-relaxed">{prog.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SHARED INFRASTRUCTURE ── */}
      <section className="py-16 px-4 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">One Infrastructure. Every Brand.</h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                All UCM brands operate on the same shared infrastructure. This means every client — regardless of which brand they enter through — benefits from the same billing systems, compliance frameworks, service agreements, and operational tools.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Denefits financing is available across all brands for service plans over $300 per month. Service agreements are generated per project and per person through Wethos Studio. All client relationships are managed through Odoo CRM with multi-entity accounting.
              </p>
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
                <Button className="bg-teal-700 hover:bg-teal-600 text-white gap-2">
                  Schedule a First Session
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "Odoo CRM", desc: "Central hub — client relationships, project management, multi-entity accounting" },
                { name: "Denefits", desc: "Financing and payment processing for all brands — 0% interest, $39 fee" },
                { name: "Practice Panther", desc: "Legal case management across all brands and service agreements" },
                { name: "Wethos Studio", desc: "Contract automation for all service agreements per project and per person" },
                { name: "Galaxy Digital", desc: "Public volunteer recruitment portal for all four global programs" },
                { name: "Align Software", desc: "Meeting rooms, agenda management, and financial raise conversations" },
              ].map((tool) => (
                <div key={tool.name} className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
                  <div className="text-white text-xs font-semibold mb-1">{tool.name}</div>
                  <div className="text-zinc-500 text-xs leading-relaxed">{tool.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINANCIAL ARCHITECTURE ── */}
      <section className="py-16 px-4 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Revenue Architecture</h2>
            <p className="text-zinc-400">How money flows through the UCM ecosystem — from project execution to community reinvestment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
            {[
              { pct: "40%", label: "Project Execution & Worker Compensation", color: "bg-teal-500/20 border-teal-500/30 text-teal-300" },
              { pct: "25%", label: "Benefits & Infrastructure", color: "bg-purple-500/20 border-purple-500/30 text-purple-300" },
              { pct: "20%", label: "Operating Expenses", color: "bg-sky-500/20 border-sky-500/30 text-sky-300" },
              { pct: "10%", label: "Growth & Development", color: "bg-indigo-500/20 border-indigo-500/30 text-indigo-300" },
              { pct: "5%", label: "Reserve Fund", color: "bg-zinc-500/20 border-zinc-500/30 text-zinc-300" },
            ].map((item) => (
              <div key={item.pct} className={`border rounded-xl p-5 text-center ${item.color}`}>
                <div className="text-3xl font-bold mb-2">{item.pct}</div>
                <div className="text-xs leading-relaxed opacity-80">{item.label}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { brand: "Black Plum Concierge", range: "$25K–$100K/month", type: "Membership + Project Consulting" },
              { brand: "Safe Harbor", range: "$50K–$200K/month", type: "Government Contracts + Grants" },
              { brand: "Resolute Economic Clinic", range: "$20K–$75K/month", type: "Business Consulting + Training" },
              { brand: "Big Heart Solutions", range: "$10K–$30K/month", type: "Sliding Scale + Institutional Funding" },
            ].map((item) => (
              <div key={item.brand} className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
                <div className="text-white text-xs font-semibold mb-1">{item.brand}</div>
                <div className="text-teal-400 text-sm font-bold mb-1">{item.range}</div>
                <div className="text-zinc-500 text-xs">{item.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Begin?
          </h2>
          <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
            Every engagement starts with a conversation. Book a session with Brandy to discuss your situation, your project, or your organization — and find out which UCM pathway is right for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-teal-700 hover:bg-teal-600 text-white gap-2 w-full sm:w-auto">
                Book a Session
                <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
            <Link href="/partner-register">
              <Button size="lg" variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-900 gap-2 w-full sm:w-auto">
                Register as Partner
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-zinc-800 py-10 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Organization</div>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li><a href="#ecosystem" className="hover:text-white transition">Ecosystem</a></li>
                <li><a href="#programs" className="hover:text-white transition">Programs</a></li>
                <li><a href="#engage" className="hover:text-white transition">Engage</a></li>
              </ul>
            </div>
            <div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Brands</div>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li><Link href="/black-plum" className="hover:text-white transition">Black Plum Concierge</Link></li>
                <li><Link href="/safe-harbor" className="hover:text-white transition">Safe Harbor</Link></li>
                <li><Link href="/resolute" className="hover:text-white transition">Resolute Clinic</Link></li>
                <li><Link href="/big-heart" className="hover:text-white transition">Big Heart Solutions</Link></li>
              </ul>
            </div>
            <div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider mb-3">More Brands</div>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li><Link href="/bella-dynamic" className="hover:text-white transition">Bella Dynamic</Link></li>
                <li><Link href="/tgaa-guild" className="hover:text-white transition">TGAA Guild</Link></li>
                <li><Link href="/ibaids" className="hover:text-white transition">iBAIDS</Link></li>
                <li><Link href="/eternal-autumn" className="hover:text-white transition">Eternal Autumn Trust</Link></li>
              </ul>
            </div>
            <div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Access</div>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li><Link href="/member-intake" className="hover:text-white transition">Apply for Membership</Link></li>
                <li><Link href="/partner-register" className="hover:text-white transition">Partner Registry</Link></li>
                <li><a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Book a Session</a></li>
                <li><a href={getLoginUrl()} className="hover:text-white transition">Member Login</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xs text-zinc-600">
              &copy; {new Date().getFullYear()} Universal Changemakers, Series L3C. All rights reserved.
            </div>
            <div className="text-xs text-zinc-600">
              Eternal Autumn Trust · Private Operating Foundation · All programs 100% PRI/DAF Ready
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
