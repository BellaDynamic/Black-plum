/**
 * Resolute Economic Growth & Recovery Clinic
 * Business development, economic empowerment, and strategic consulting
 */
import { Link } from "wouter";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  TrendingUp, Briefcase, FileText, Building2, Globe,
  ArrowRight, ExternalLink, ChevronRight, Users, Sparkles
} from "lucide-react";

const CALENDLY = "https://calendly.com/changemaker-black-plum-concierge/newclientevaluation";

const SERVICE_PACKAGES = [
  {
    name: "Business Launch",
    price: "$1,000–$3,000",
    type: "Project-Based",
    desc: "For entrepreneurs launching their first business. Entity formation, compliance setup, basic financial architecture, and first 90-day plan.",
    items: [
      "Entity formation guidance",
      "Compliance and licensing checklist",
      "Basic financial architecture",
      "90-day launch plan (RAPID Phase 1–3)",
      "Service agreement template",
    ],
    financing: "Denefits available",
    color: "border-sky-500/30",
  },
  {
    name: "Revenue Architecture",
    price: "$3,000–$7,500",
    type: "Project-Based",
    desc: "For established businesses building sustainable revenue systems. Includes RFFS assessment, revenue modeling, and partnership structuring.",
    items: [
      "RFFS financial capacity assessment",
      "Revenue stream modeling",
      "Grant and funding identification",
      "Partnership structuring",
      "Full RAPID Phase Plan (Phases 1–5)",
    ],
    financing: "Denefits available",
    color: "border-sky-500/40",
  },
  {
    name: "Economic Development Consulting",
    price: "$5,000–$10,000+",
    type: "Project or Retainer",
    desc: "For agencies, government partners, and organizations seeking economic development strategy, procurement guidance, and community impact planning.",
    items: [
      "Government procurement strategy",
      "CFR compliance and acquisition guidance",
      "Community development planning",
      "GRID deployment per territory",
      "Institutional partnership development",
    ],
    financing: "Institutional billing available",
    color: "border-sky-500/50",
  },
];

const FUSED_PROGRAM = {
  name: "F.U.S.E.D.",
  tagline: "Fusing Economic Development Resources with Community Recovery Pathways",
  desc: "F.U.S.E.D. is the flagship initiative under Resolute Economic Growth & Recovery Clinic. It bridges public sector resources and private enterprise to create sustainable community impact — connecting individuals and organizations to economic development opportunities they would not otherwise access.",
  components: [
    "Economic recovery program design",
    "Public/private sector bridge building",
    "Community business incubation",
    "Resource coordination and deployment",
    "Government program alignment and compliance",
  ],
};

const ECOSYSTEM_CONNECTIONS = [
  { name: "Big Heart Solutions", role: "Clients transition from Big Heart when ready for business development", path: "/big-heart" },
  { name: "Safe Harbor", role: "Crisis-stabilized clients referred to Resolute for economic recovery", path: "/safe-harbor" },
  { name: "Black Plum Concierge", role: "High-capacity clients graduate to Black Plum for premium advisory", path: "/black-plum" },
  { name: "Eternal Autumn Trust", role: "PRI and DAF funding for economic development programs", path: "/eternal-autumn" },
  { name: "iBAIDS", role: "International business development connections for scaling clients", path: "/ibaids" },
];

export default function Resolute() {
  return (
    <DashboardLayout>
      <div className="p-4 md:p-6 space-y-8 max-w-5xl">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
            <TrendingUp className="w-7 h-7 text-sky-400" />
          </div>
          <div>
            <div className="flex items-center gap-3 flex-wrap mb-2">
              <h1 className="text-2xl font-bold text-white">Resolute Economic Growth Clinic</h1>
              <Badge className="bg-sky-500/10 text-sky-300 border-sky-500/20 text-xs">Business Development</Badge>
              <Badge className="bg-zinc-800 text-zinc-400 border-zinc-700 text-xs">GRID-02</Badge>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
              Resolute Economic Growth & Recovery Clinic provides strategic consulting, revenue architecture, grant services, and partnership structuring for entrepreneurs, startups, small-to-medium businesses, and economic development agencies. It is the business development engine of the UCM ecosystem.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="bg-sky-950/20 border border-sky-500/20 rounded-xl p-6">
          <div className="text-xs text-sky-400 uppercase tracking-wider mb-3">Mission</div>
          <p className="text-white text-base leading-relaxed mb-3">
            Resolute exists to ensure that every entrepreneur, organization, and community has access to the strategic tools, financial architecture, and institutional connections needed to build sustainable economic growth.
          </p>
          <p className="text-zinc-300 text-sm leading-relaxed">
            Through the RAPID Phase Plan, RFFS financial modeling, and GRID deployment, Resolute turns ideas into structured, fundable, compliant business operations — and connects them to the government, institutional, and private sector opportunities that sustain them.
          </p>
        </div>

        {/* Revenue */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 text-center">
            <div className="text-2xl font-bold text-sky-400 mb-1">$20K–$75K</div>
            <div className="text-xs text-zinc-500">Monthly Revenue Potential</div>
          </div>
          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 text-center">
            <div className="text-2xl font-bold text-white mb-1">Project + Retainer</div>
            <div className="text-xs text-zinc-500">$1,000–$10,000 per project engagement</div>
          </div>
          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 text-center">
            <div className="text-2xl font-bold text-white mb-1">B2B + Institutional</div>
            <div className="text-xs text-zinc-500">Government, agency, and enterprise clients</div>
          </div>
        </div>

        {/* Service Packages */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Service Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {SERVICE_PACKAGES.map((pkg) => (
              <Card key={pkg.name} className={`bg-zinc-950 border ${pkg.color} p-5 flex flex-col`}>
                <div className="text-white font-bold text-sm mb-1">{pkg.name}</div>
                <div className="text-sky-400 text-lg font-bold mb-0.5">{pkg.price}</div>
                <div className="text-zinc-500 text-xs mb-3">{pkg.type}</div>
                <p className="text-zinc-400 text-xs leading-relaxed mb-4 flex-1">{pkg.desc}</p>
                <ul className="space-y-1.5 mb-4">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-zinc-300">
                      <ChevronRight className="w-3 h-3 text-sky-400 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="text-xs text-teal-400 bg-teal-500/10 border border-teal-500/20 rounded px-2 py-1 text-center">
                  {pkg.financing}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* F.U.S.E.D. Program */}
        <div className="bg-zinc-950 border border-sky-500/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <div className="text-white font-bold">{FUSED_PROGRAM.name}</div>
              <div className="text-sky-400 text-xs">{FUSED_PROGRAM.tagline}</div>
            </div>
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">{FUSED_PROGRAM.desc}</p>
          <ul className="space-y-2">
            {FUSED_PROGRAM.components.map((comp) => (
              <li key={comp} className="flex items-start gap-2 text-sm text-zinc-300">
                <ChevronRight className="w-3 h-3 text-sky-400 mt-0.5 shrink-0" />
                {comp}
              </li>
            ))}
          </ul>
        </div>

        {/* Billing */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
          <h2 className="text-lg font-bold text-white mb-4">Billing & Financing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
            <div className="bg-zinc-900 rounded-lg p-4">
              <div className="text-teal-400 text-xs font-semibold uppercase tracking-wider mb-2">Denefits Financing</div>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Service plans over $300/month qualify for Denefits financing. 0% interest. $39 fee. 3, 6, 9, or 12-month payment plans. White-labeled under Resolute branding.
              </p>
            </div>
            <div className="bg-zinc-900 rounded-lg p-4">
              <div className="text-teal-400 text-xs font-semibold uppercase tracking-wider mb-2">Project-Based Billing</div>
              <p className="text-zinc-400 text-xs leading-relaxed">
                All project engagements are governed by a service agreement generated through Wethos Studio. Agreements are per project and per person — structured to complement individual business needs.
              </p>
            </div>
            <div className="bg-zinc-900 rounded-lg p-4">
              <div className="text-teal-400 text-xs font-semibold uppercase tracking-wider mb-2">Institutional Billing</div>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Government agencies and institutional partners are billed through formal service agreements and contracts. All engagements comply with CFR and federal acquisition requirements.
              </p>
            </div>
          </div>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
            <Button className="bg-sky-700 hover:bg-sky-600 text-white gap-2">
              Schedule a Business Consultation
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
          <h2 className="text-lg font-bold text-white mb-4">How to Engage with Resolute</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[
              { step: "1", title: "Book a Session", desc: "Schedule a first session to discuss your business, your goals, and where you are in the development process." },
              { step: "2", title: "RFFS Assessment", desc: "Complete the Rapid Financial Fiscal Solutions assessment to determine your working capital capacity and the right service package." },
              { step: "3", title: "RAPID Phase Plan", desc: "Your engagement follows the RAPID Phase Plan — Research, Architecture, Planning, Implementation, Delivery. A service agreement is generated and work begins." },
            ].map((s) => (
              <div key={s.step} className="flex gap-3">
                <div className="w-7 h-7 rounded-full bg-sky-500/20 border border-sky-500/30 flex items-center justify-center shrink-0 text-sky-400 text-xs font-bold">{s.step}</div>
                <div>
                  <div className="text-white text-sm font-semibold mb-1">{s.title}</div>
                  <div className="text-zinc-400 text-xs leading-relaxed">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
              <Button className="bg-sky-700 hover:bg-sky-600 text-white gap-2">
                Book Your First Session
                <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
            <Link href="/partner-register">
              <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-900 gap-2">
                Register as Partner
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
