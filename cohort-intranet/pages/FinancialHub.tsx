/**
 * Financial Navigation Hub
 * Denefits, service agreements, billing tiers, and financial tools
 */
import { Link } from "wouter";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DollarSign, CreditCard, FileText, TrendingUp, Shield, Globe,
  ArrowRight, ExternalLink, ChevronRight, Building2, Users, Sparkles, Briefcase
} from "lucide-react";

const CALENDLY = "https://calendly.com/changemaker-black-plum-concierge/newclientevaluation";
const DENEFITS_URL = "https://denefits.com";

const DENEFITS_TERMS = [
  { label: "Minimum Amount", value: "$300/month" },
  { label: "Interest Rate", value: "0% — No Interest" },
  { label: "Service Fee", value: "$39 one-time" },
  { label: "Payment Plans", value: "3, 6, 9, or 12 months" },
  { label: "Credit Check", value: "Not required for most plans" },
  { label: "Application", value: "Pre-approval link or widget" },
];

const FINANCIAL_TOOLS = [
  {
    name: "Denefits",
    category: "Financing & Payment Plans",
    desc: "White-labeled financing platform for service agreements and member plans. 0% interest, $39 fee, 3–12 month plans. Integrated across all UCM brands.",
    icon: CreditCard,
    color: "text-teal-400",
    border: "border-teal-500/20",
    url: DENEFITS_URL,
  },
  {
    name: "Wethos Studio",
    category: "Service Agreement Generation",
    desc: "Contract and service agreement generation platform. Produces per-project, per-person agreements that are legally sound and aligned with UCM protocols.",
    icon: FileText,
    color: "text-blue-400",
    border: "border-blue-500/20",
    url: null,
  },
  {
    name: "RFFS — Rapid Financial Fiscal Solutions",
    category: "Financial Assessment & Modeling",
    desc: "Proprietary financial assessment tool. Determines working capital capacity, revenue modeling, and the appropriate service package for each client or project.",
    icon: TrendingUp,
    color: "text-sky-400",
    border: "border-sky-500/20",
    url: null,
  },
  {
    name: "RAPID Phase Plan",
    category: "Project & Revenue Architecture",
    desc: "Five-phase proprietary framework: Research, Architecture, Planning, Implementation, Delivery. Applied to every client engagement, project, and program.",
    icon: Sparkles,
    color: "text-violet-400",
    border: "border-violet-500/20",
    url: null,
  },
  {
    name: "GRID Meta House",
    category: "Territory & Property Management",
    desc: "16-cell operational grid for territory management, property development, and workforce initiatives. Each cell requires $40K–$80K startup capital.",
    icon: Building2,
    color: "text-amber-400",
    border: "border-amber-500/20",
    url: "/properties",
  },
  {
    name: "EE Fund Pool Optimizer",
    category: "Capital Deployment",
    desc: "Proprietary fund pooling system under the Eternal Autumn Trust. Optimizes capital deployment across all 16 GRID cells and manages the 30% development funding requirement.",
    icon: DollarSign,
    color: "text-emerald-400",
    border: "border-emerald-500/20",
    url: "/eternal-autumn",
  },
  {
    name: "Exertus / Estate Plan X",
    category: "Estate Planning & Wealth Transfer",
    desc: "Strategic partnership for estate planning services integrated into Black Plum Concierge. Supports high-capacity clients with wealth transfer, legacy planning, and estate architecture.",
    icon: Shield,
    color: "text-zinc-300",
    border: "border-zinc-500/20",
    url: "https://estateplanx.com",
  },
  {
    name: "CF Regulation / Crowdfunding",
    category: "Capital Raise",
    desc: "Regulation Crowdfunding (Reg CF) instruments for capital raise campaigns. Integrated with the Capital Raise module for property and program funding.",
    icon: Users,
    color: "text-rose-400",
    border: "border-rose-500/20",
    url: "/capital-raise",
  },
];

const BILLING_TIERS = [
  {
    name: "Free Member",
    price: "No Cost",
    desc: "Public intake evaluation, access to BWEN channels, and community resources.",
    items: [
      "Member intake evaluation",
      "BWEN channel access",
      "Community resource directory",
      "Event invitations",
    ],
    cta: "Join Free",
    ctaPath: "/member-intake",
    color: "border-zinc-700",
  },
  {
    name: "Preferred B2B Member",
    price: "100 Hours / Quarter",
    desc: "Preferred business-to-business membership. Includes opportunity time, software access, and priority scheduling.",
    items: [
      "100 opportunity hours per quarter",
      "Software access (Align, Wethos, Denefits)",
      "Priority scheduling with Brandy",
      "Service agreement generation",
      "RFFS financial assessment",
      "RAPID Phase Plan engagement",
    ],
    cta: "Apply for Membership",
    ctaPath: "/member-intake",
    color: "border-teal-500/30",
    highlight: true,
  },
  {
    name: "Project / Retainer Client",
    price: "$1,000–$10,000+",
    desc: "Project-based or retainer engagement for specific business development, production, or consulting needs.",
    items: [
      "Full RAPID Phase Plan (Phases 1–5)",
      "RFFS financial capacity assessment",
      "Service agreement via Wethos",
      "Denefits financing available",
      "Brand-specific service delivery",
      "Government procurement support",
    ],
    cta: "Book a Session",
    ctaUrl: CALENDLY,
    color: "border-zinc-700",
  },
  {
    name: "Institutional / Agency",
    price: "Custom",
    desc: "Government agencies, associations, and institutional partners. Formal service agreements, CFR compliance, and procurement-ready documentation.",
    items: [
      "Formal service agreements",
      "CFR compliance documentation",
      "Capabilities statement (government-approved)",
      "Grant and procurement support",
      "GRID territory deployment",
      "Community development planning",
    ],
    cta: "Schedule a Conversation",
    ctaUrl: CALENDLY,
    color: "border-zinc-700",
  },
];

const PAYMENT_METHODS = [
  { name: "Denefits Financing", desc: "0% interest payment plans for service agreements over $300/month" },
  { name: "Direct Payment", desc: "ACH, wire transfer, and standard payment processing" },
  { name: "Cryptocurrency", desc: "Accepted during consultation — discussed with legal and finance peers" },
  { name: "Asset Trade-In", desc: "Gold, silver, stocks, and other assets — discussed during consultation" },
  { name: "Grant Funding", desc: "Program-Related Investments and Donor Advised Fund grants via Eternal Autumn Trust" },
  { name: "Venture Capital / CF", desc: "Regulation Crowdfunding and VC instruments for capital raise engagements" },
];

export default function FinancialHub() {
  return (
    <DashboardLayout>
      <div className="p-4 md:p-6 space-y-8 max-w-5xl">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0">
            <DollarSign className="w-7 h-7 text-teal-400" />
          </div>
          <div>
            <div className="flex items-center gap-3 flex-wrap mb-2">
              <h1 className="text-2xl font-bold text-white">Financial Navigation Hub</h1>
              <Badge className="bg-teal-500/10 text-teal-300 border-teal-500/20 text-xs">Billing, Financing & Tools</Badge>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
              The Financial Navigation Hub is the central reference for all billing, financing, service agreement, and financial tool information across the UCM ecosystem. It covers Denefits payment plans, RFFS assessments, RAPID Phase Plan engagements, and the full suite of financial instruments available to members, clients, and partners.
            </p>
          </div>
        </div>

        {/* Denefits Overview */}
        <div className="bg-teal-950/20 border border-teal-500/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <CreditCard className="w-5 h-5 text-teal-400" />
            <div className="text-white font-bold">Denefits — Financing & Payment Plans</div>
            <Badge className="bg-teal-500/10 text-teal-300 border-teal-500/20 text-xs">Integrated Across All Brands</Badge>
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed mb-5">
            Denefits is the financing platform integrated across all UCM brands. It provides 0% interest payment plans for service agreements and member plans over $300/month. Plans are white-labeled under each brand's identity and managed through the UCM CRM and accounts receivable system.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-5">
            {DENEFITS_TERMS.map((term) => (
              <div key={term.label} className="bg-zinc-900 rounded-lg p-3">
                <div className="text-zinc-500 text-xs mb-1">{term.label}</div>
                <div className="text-white text-sm font-semibold">{term.value}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={DENEFITS_URL} target="_blank" rel="noopener noreferrer">
              <Button className="bg-teal-700 hover:bg-teal-600 text-white gap-2">
                Visit Denefits
                <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-900 gap-2">
                Discuss Financing Options
                <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>

        {/* Billing Tiers */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Membership & Billing Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {BILLING_TIERS.map((tier) => (
              <Card key={tier.name} className={`bg-zinc-950 border ${tier.color} p-5 flex flex-col ${tier.highlight ? "ring-1 ring-teal-500/30" : ""}`}>
                {tier.highlight && (
                  <div className="text-xs text-teal-400 font-semibold uppercase tracking-wider mb-2">Most Popular</div>
                )}
                <div className="text-white font-bold text-sm mb-1">{tier.name}</div>
                <div className="text-teal-400 text-lg font-bold mb-3">{tier.price}</div>
                <p className="text-zinc-400 text-xs leading-relaxed mb-4 flex-1">{tier.desc}</p>
                <ul className="space-y-1.5 mb-5">
                  {tier.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-zinc-300">
                      <ChevronRight className="w-3 h-3 text-teal-400 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                {tier.ctaUrl ? (
                  <a href={tier.ctaUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="w-full bg-zinc-800 hover:bg-zinc-700 text-white gap-2">
                      {tier.cta} <ExternalLink className="w-3 h-3" />
                    </Button>
                  </a>
                ) : (
                  <Link href={tier.ctaPath!}>
                    <Button size="sm" className="w-full bg-zinc-800 hover:bg-zinc-700 text-white gap-2">
                      {tier.cta} <ArrowRight className="w-3 h-3" />
                    </Button>
                  </Link>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Financial Tools */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Financial Tools & Systems</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FINANCIAL_TOOLS.map((tool) => {
              const Icon = tool.icon;
              return (
                <div key={tool.name} className={`bg-zinc-950 border ${tool.border} rounded-xl p-5 flex gap-4`}>
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 flex items-center justify-center shrink-0">
                    <Icon className={`w-4 h-4 ${tool.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div className="text-white text-sm font-semibold">{tool.name}</div>
                      {tool.url && (
                        tool.url.startsWith("http") ? (
                          <a href={tool.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3 h-3 text-zinc-500 hover:text-zinc-300 shrink-0" />
                          </a>
                        ) : (
                          <Link href={tool.url}>
                            <ArrowRight className="w-3 h-3 text-zinc-500 hover:text-zinc-300 shrink-0 cursor-pointer" />
                          </Link>
                        )
                      )}
                    </div>
                    <div className="text-xs text-zinc-500 mb-2">{tool.category}</div>
                    <div className="text-zinc-400 text-xs leading-relaxed">{tool.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
          <h2 className="text-lg font-bold text-white mb-4">Accepted Payment & Exchange Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
            {PAYMENT_METHODS.map((method) => (
              <div key={method.name} className="flex items-start gap-3">
                <ChevronRight className="w-3 h-3 text-teal-400 mt-1 shrink-0" />
                <div>
                  <div className="text-white text-sm font-semibold">{method.name}</div>
                  <div className="text-zinc-500 text-xs">{method.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-zinc-500 text-xs leading-relaxed">
            Non-traditional payment methods (cryptocurrency, asset trade-ins) are discussed during the consultation process and coordinated with legal and finance peers. All financial arrangements are governed by a service agreement generated through Wethos Studio.
          </p>
        </div>

        {/* How Financial Flows Work */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
          <h2 className="text-lg font-bold text-white mb-4">How Funds Flow Through the Ecosystem</h2>
          <div className="space-y-4 mb-5">
            {[
              { step: "1", title: "Funds Enter", desc: "Revenue enters through service agreements, member plans, grants, PRIs, DAF grants, and capital raise instruments. All are tracked through the UCM CRM and accounts receivable system." },
              { step: "2", title: "Funds Are Allocated", desc: "The EE Fund Pool Optimizer (under Eternal Autumn Trust) allocates capital across GRID cells, programs, and operational needs. 30% development funding is maintained per property before activation." },
              { step: "3", title: "Funds Are Deployed", desc: "Capital is deployed to programs, service providers, workforce initiatives, and community development projects. Service providers are financed into projects through Denefits and service agreements." },
              { step: "4", title: "Funds Return to Community", desc: "The ultimate function of the UCM financial system is the movement of people and money — pushing resources back into community and affecting bottom-line changes threefold." },
            ].map((s) => (
              <div key={s.step} className="flex gap-4">
                <div className="w-7 h-7 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center shrink-0 text-teal-400 text-xs font-bold">{s.step}</div>
                <div>
                  <div className="text-white text-sm font-semibold mb-1">{s.title}</div>
                  <div className="text-zinc-400 text-xs leading-relaxed">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
            <Button className="bg-teal-700 hover:bg-teal-600 text-white gap-2">
              Discuss Your Financial Path
              <ExternalLink className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </DashboardLayout>
  );
}
