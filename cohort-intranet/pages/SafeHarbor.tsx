/**
 * Safe Harbor Public Resource & Service Center
 * Crisis response, public support infrastructure, and resource coordination
 */
import { Link } from "wouter";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Shield, Heart, Users, FileText, Building2, Phone,
  ArrowRight, ExternalLink, ChevronRight, Globe, Briefcase, TrendingUp
} from "lucide-react";

const CALENDLY = "https://calendly.com/changemaker-black-plum-concierge/newclientevaluation";

const SERVICES = [
  {
    category: "Crisis Intervention",
    items: [
      "Immediate crisis response coordination",
      "Emergency resource deployment",
      "Safety planning and stabilization",
      "24-hour referral network access",
    ],
  },
  {
    category: "Resource Coordination",
    items: [
      "Public benefits navigation (SNAP, Medi-Cal, housing)",
      "Legal aid referrals and case management",
      "Healthcare access and Medi-Cal enrollment",
      "Utility assistance and emergency funds",
    ],
  },
  {
    category: "Advocacy & Case Management",
    items: [
      "Individual and family case management",
      "Government agency advocacy",
      "Compliance and documentation support",
      "Long-term stability planning",
    ],
  },
  {
    category: "Community Infrastructure",
    items: [
      "Nonprofit and agency partnership coordination",
      "Government contract fulfillment",
      "Community outreach and education programs",
      "Volunteer coordination via Galaxy Digital",
    ],
  },
];

const FUNDING_SOURCES = [
  { name: "Government Contracts", desc: "Federal, state, county, and city contracts for public service delivery", icon: Building2 },
  { name: "Foundation Grants", desc: "Private and public foundation grants aligned with crisis response mission", icon: FileText },
  { name: "Donor Advised Funds", desc: "DAF-eligible programs through Eternal Autumn Trust — 100% PRI/DAF ready", icon: TrendingUp },
  { name: "Fee-for-Service", desc: "Agency and organizational service agreements for coordinated care", icon: Briefcase },
];

const ECOSYSTEM_CONNECTIONS = [
  { name: "Big Heart Solutions", role: "Community support and resource navigation for stabilized clients", path: "/big-heart" },
  { name: "Resolute Economic Growth Clinic", role: "Business development pathway for clients ready to launch", path: "/resolute" },
  { name: "Bella Dynamic", role: "Benefits enrollment, IHSS, and end-of-life planning support", path: "/bella-dynamic" },
  { name: "Black Plum Concierge", role: "Premium advisory for high-capacity clients who graduate from crisis support", path: "/black-plum" },
  { name: "Eternal Autumn Trust", role: "Primary funding source — PRI and DAF investments for all programs", path: "/eternal-autumn" },
];

export default function SafeHarbor() {
  return (
    <DashboardLayout>
      <div className="p-4 md:p-6 space-y-8 max-w-5xl">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0">
            <Shield className="w-7 h-7 text-teal-400" />
          </div>
          <div>
            <div className="flex items-center gap-3 flex-wrap mb-2">
              <h1 className="text-2xl font-bold text-white">Safe Harbor</h1>
              <Badge className="bg-teal-500/10 text-teal-300 border-teal-500/20 text-xs">Public Resource & Service Center</Badge>
              <Badge className="bg-zinc-800 text-zinc-400 border-zinc-700 text-xs">GRID-01</Badge>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
              Safe Harbor is the crisis response and public support infrastructure within the UCM ecosystem. It serves individuals in crisis, nonprofits, government agencies, and community organizations — providing immediate resource coordination, advocacy, and long-term case management.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-teal-950/30 border border-teal-500/20 rounded-xl p-6">
          <div className="text-xs text-teal-400 uppercase tracking-wider mb-3">Mission</div>
          <p className="text-white text-base leading-relaxed mb-3">
            Safe Harbor exists to ensure that no individual, family, or organization falls through the cracks of an overwhelmed public support system. We coordinate resources, advocate for compliance, and create pathways from crisis to stability — and from stability to growth.
          </p>
          <p className="text-zinc-300 text-sm leading-relaxed">
            As a registered entity with associations in all states, counties, cities, and townships, Safe Harbor is uniquely positioned to navigate federal, state, and local compliance frameworks — including CFR (Code of Federal Regulations), federal acquisition requirements, and procurement responsibilities.
          </p>
        </div>

        {/* Revenue Potential */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 text-center">
            <div className="text-2xl font-bold text-teal-400 mb-1">$50K–$200K</div>
            <div className="text-xs text-zinc-500">Monthly Revenue Potential</div>
          </div>
          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 text-center">
            <div className="text-2xl font-bold text-white mb-1">Institutional</div>
            <div className="text-xs text-zinc-500">Primary Revenue Model — Contracts & Grants</div>
          </div>
          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 text-center">
            <div className="text-2xl font-bold text-white mb-1">100% PRI/DAF</div>
            <div className="text-xs text-zinc-500">All Programs Ready for Foundation Funding</div>
          </div>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Services & Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SERVICES.map((svc) => (
              <Card key={svc.category} className="bg-zinc-950 border-zinc-800 p-5">
                <div className="text-teal-400 text-xs font-semibold uppercase tracking-wider mb-3">{svc.category}</div>
                <ul className="space-y-2">
                  {svc.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-zinc-300">
                      <ChevronRight className="w-3 h-3 text-teal-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* Funding Sources */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Funding & Revenue Sources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FUNDING_SOURCES.map((source) => {
              const Icon = source.icon;
              return (
                <div key={source.name} className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 flex gap-4">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-teal-400" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold mb-1">{source.name}</div>
                    <div className="text-zinc-400 text-xs leading-relaxed">{source.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Billing & Service Agreements */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
          <h2 className="text-lg font-bold text-white mb-4">Billing, Financing & Service Agreements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
            <div className="bg-zinc-900 rounded-lg p-4">
              <div className="text-teal-400 text-xs font-semibold uppercase tracking-wider mb-2">Denefits Financing</div>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Service plans over $300/month are eligible for Denefits financing. 0% interest. $39 fee. 3, 6, 9, or 12-month payment plans available. White-labeled under Safe Harbor branding.
              </p>
            </div>
            <div className="bg-zinc-900 rounded-lg p-4">
              <div className="text-teal-400 text-xs font-semibold uppercase tracking-wider mb-2">Service Agreements</div>
              <p className="text-zinc-400 text-xs leading-relaxed">
                All engagements are governed by a service agreement generated through Wethos Studio. Agreements are per project and per person — structured to complement individual needs and life position.
              </p>
            </div>
            <div className="bg-zinc-900 rounded-lg p-4">
              <div className="text-teal-400 text-xs font-semibold uppercase tracking-wider mb-2">Government Contracts</div>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Safe Harbor is registered for government procurement in all states, counties, cities, and townships. Capabilities statements available per CFR and federal acquisition requirements.
              </p>
            </div>
          </div>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
            <Button className="bg-teal-700 hover:bg-teal-600 text-white gap-2">
              Schedule a Consultation
              <ExternalLink className="w-4 h-4" />
            </Button>
          </a>
        </div>

        {/* Ecosystem Connections */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Ecosystem Connections</h2>
          <p className="text-zinc-400 text-sm mb-4">
            Safe Harbor is the entry point for individuals in crisis. As clients stabilize, they are guided through the UCM ecosystem toward growth and independence.
          </p>
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
          <h2 className="text-lg font-bold text-white mb-4">How to Engage with Safe Harbor</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[
              { step: "1", title: "Book a Session", desc: "Schedule a first session with Brandy to assess your situation, your organization's needs, or the partnership opportunity." },
              { step: "2", title: "Needs Assessment", desc: "Complete the UCM intake assessment. This determines which programs, resources, and service agreements are appropriate for your situation." },
              { step: "3", title: "Service Agreement", desc: "A service agreement is generated per your specific needs. Denefits financing is available for eligible service plans. Work begins immediately." },
            ].map((s) => (
              <div key={s.step} className="flex gap-3">
                <div className="w-7 h-7 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center shrink-0 text-teal-400 text-xs font-bold">{s.step}</div>
                <div>
                  <div className="text-white text-sm font-semibold mb-1">{s.title}</div>
                  <div className="text-zinc-400 text-xs leading-relaxed">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
              <Button className="bg-teal-700 hover:bg-teal-600 text-white gap-2">
                Book Your First Session
                <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
            <Link href="/partner-register">
              <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-900 gap-2">
                Register as Partner Organization
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
