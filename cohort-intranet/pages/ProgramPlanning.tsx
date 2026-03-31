/**
 * Program Planning Dashboard — Universal Changemakers, Series L3C
 * Owned & Operated by Brandy Bianchini
 * Full operational tool: Brand Registry, Program Tracking, Workflow Checklists, Property Management
 */
import { useState } from "react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Building2, CheckCircle2, Circle, Star, Heart, Shield, TrendingUp,
  Music, Globe, Leaf, Sparkles, ChevronDown, ChevronRight, Home,
  ClipboardList, Users, Briefcase, AlertCircle, Clock, ArrowRight,
  MapPin, DollarSign, FileText, Settings, BarChart3, Package
} from "lucide-react";

// ─── BRAND REGISTRY (from Google Sheet) ─────────────────────────────────────
const BRANDS = [
  {
    id: "bella-dynamic",
    name: "Bella Dynamic Heart",
    purpose: "Authentic Living & Healing",
    outlets: "Sofia Health, Rupa Health, Amazon, Google, Social Media",
    components: "Media, content creation, marketing, concierge health services, advocacy, wellness",
    icon: Leaf,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
    path: "/bella-dynamic",
    status: "Active",
  },
  {
    id: "big-heart",
    name: "Big Heart Solutions",
    purpose: "Community support and outreach",
    outlets: "Quarterly and yearly activities",
    components: "Events, activities planned 12 weeks in advance",
    icon: Heart,
    color: "text-rose-400",
    bg: "bg-rose-500/10 border-rose-500/20",
    path: "/big-heart",
    status: "Active",
  },
  {
    id: "safe-harbor",
    name: "Safe Harbor Public Services & Resources Center",
    purpose: "The Resolute Economic Growth Clinic",
    outlets: "Public services and resources",
    components: "Purposes, missions, alliances, memberships, services",
    icon: Shield,
    color: "text-teal-400",
    bg: "bg-teal-500/10 border-teal-500/20",
    path: "/safe-harbor",
    status: "Active",
  },
  {
    id: "tgaa",
    name: "T.G.AA — The Global Artists Alliance",
    purpose: "Universal Changemakers, Series L3C: Cell 2: F.U.S.E.D",
    outlets: "Guild operations",
    components: "For Universal Social Economic Development — program management hub",
    icon: Music,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10 border-indigo-500/20",
    path: "/tgaa-guild",
    status: "Active",
  },
  {
    id: "moonlit-studio",
    name: "A Moonlit Studio, Series LLC",
    purpose: "Production and entertainment",
    outlets: "A Moonlit Room Production",
    components: "Universal Changemakers, Series L3C Cell 1",
    icon: Star,
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20",
    path: "/",
    status: "Active",
  },
  {
    id: "lunas-garden",
    name: "Luna's Garden",
    purpose: "Couture and fashion",
    outlets: "Couture Di Luna",
    components: "Fashion and design services",
    icon: Sparkles,
    color: "text-pink-400",
    bg: "bg-pink-500/10 border-pink-500/20",
    path: "/lunas-garden",
    status: "Active",
  },
  {
    id: "lunas-marketplace",
    name: "Lunas' Midnight Marketplace",
    purpose: "Entertainment network",
    outlets: "BWEN: Beautiful Webbed Entertainment Network",
    components: "Marketplace and entertainment platform",
    icon: Globe,
    color: "text-violet-400",
    bg: "bg-violet-500/10 border-violet-500/20",
    path: "/",
    status: "Active",
  },
  {
    id: "farlight",
    name: "Farlight Entertainment",
    purpose: "Film and production",
    outlets: "CineFX",
    components: "Entertainment production services",
    icon: Building2,
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
    path: "/",
    status: "Active",
  },
];

// ─── PROGRAMS (4 core, each with public + private components) ────────────────
const PROGRAMS = [
  {
    id: 1,
    name: "Program 1",
    quarter: "Q4",
    brand: "Bella Dynamic Heart",
    genre: "Authentic Living & Healing",
    completion: 100,
    status: "On Track",
    statusColor: "text-emerald-400",
    pri_daf_ready: true,
    scopeLevels: [
      { level: "State", description: "Outlet Arena of cause/matters", filled: true },
      { level: "Regional", description: "Territory Cause, Matter, Issues (not State Specific)", filled: true },
      { level: "Local", description: "Specific Sector, Cause, Matter, Issues (not regional/state specific)", filled: true },
      { level: "Personal", description: "Solo artists, hobby, entrepreneur — scenario based concerns, pathways, benefits", filled: true },
      { level: "Professional", description: "Engagement arenas, strategy, tactics to achieve, earn, learn, co-deliver, cooperate", filled: true },
      { level: "Member Only", description: "Member type, class, cost, services, support packages (monthly, quarterly, yearly)", filled: true },
    ],
    checklist: [
      { task: "Brand assigned to program", done: true },
      { task: "Quarter set", done: true },
      { task: "Genre/title defined", done: true },
      { task: "All 6 scope levels filled", done: true },
      { task: "Target audience defined", done: true },
      { task: "PRI/DAF documentation complete", done: true },
      { task: "Public component live", done: false },
      { task: "Private component live", done: false },
      { task: "Minimum 4 events/projects scheduled", done: false },
      { task: "Monthly content production active", done: false },
    ],
  },
  {
    id: 2,
    name: "Program 2",
    quarter: "",
    brand: "",
    genre: "",
    completion: 0,
    status: "Pending Setup",
    statusColor: "text-amber-400",
    pri_daf_ready: false,
    scopeLevels: [
      { level: "State", description: "Outlet Arena of cause/matters", filled: false },
      { level: "Regional", description: "Territory Cause, Matter, Issues (not State Specific)", filled: false },
      { level: "Local", description: "Specific Sector, Cause, Matter, Issues (not regional/state specific)", filled: false },
      { level: "Personal", description: "Solo artists, hobby, entrepreneur — scenario based concerns, pathways, benefits", filled: false },
      { level: "Professional", description: "Engagement arenas, strategy, tactics to achieve, earn, learn, co-deliver, cooperate", filled: false },
      { level: "Member Only", description: "Member type, class, cost, services, support packages (monthly, quarterly, yearly)", filled: false },
    ],
    checklist: [
      { task: "Brand assigned to program", done: false },
      { task: "Quarter set", done: false },
      { task: "Genre/title defined", done: false },
      { task: "All 6 scope levels filled", done: false },
      { task: "Target audience defined", done: false },
      { task: "PRI/DAF documentation complete", done: false },
      { task: "Public component live", done: false },
      { task: "Private component live", done: false },
      { task: "Minimum 4 events/projects scheduled", done: false },
      { task: "Monthly content production active", done: false },
    ],
  },
  {
    id: 3,
    name: "Program 3",
    quarter: "",
    brand: "",
    genre: "",
    completion: 0,
    status: "Pending Setup",
    statusColor: "text-amber-400",
    pri_daf_ready: false,
    scopeLevels: [
      { level: "State", description: "Outlet Arena of cause/matters", filled: false },
      { level: "Regional", description: "Territory Cause, Matter, Issues (not State Specific)", filled: false },
      { level: "Local", description: "Specific Sector, Cause, Matter, Issues (not regional/state specific)", filled: false },
      { level: "Personal", description: "Solo artists, hobby, entrepreneur — scenario based concerns, pathways, benefits", filled: false },
      { level: "Professional", description: "Engagement arenas, strategy, tactics to achieve, earn, learn, co-deliver, cooperate", filled: false },
      { level: "Member Only", description: "Member type, class, cost, services, support packages (monthly, quarterly, yearly)", filled: false },
    ],
    checklist: [
      { task: "Brand assigned to program", done: false },
      { task: "Quarter set", done: false },
      { task: "Genre/title defined", done: false },
      { task: "All 6 scope levels filled", done: false },
      { task: "Target audience defined", done: false },
      { task: "PRI/DAF documentation complete", done: false },
      { task: "Public component live", done: false },
      { task: "Private component live", done: false },
      { task: "Minimum 4 events/projects scheduled", done: false },
      { task: "Monthly content production active", done: false },
    ],
  },
  {
    id: 4,
    name: "Program 4",
    quarter: "",
    brand: "",
    genre: "",
    completion: 0,
    status: "Pending Setup",
    statusColor: "text-amber-400",
    pri_daf_ready: false,
    scopeLevels: [
      { level: "State", description: "Outlet Arena of cause/matters", filled: false },
      { level: "Regional", description: "Territory Cause, Matter, Issues (not State Specific)", filled: false },
      { level: "Local", description: "Specific Sector, Cause, Matter, Issues (not regional/state specific)", filled: false },
      { level: "Personal", description: "Solo artists, hobby, entrepreneur — scenario based concerns, pathways, benefits", filled: false },
      { level: "Professional", description: "Engagement arenas, strategy, tactics to achieve, earn, learn, co-deliver, cooperate", filled: false },
      { level: "Member Only", description: "Member type, class, cost, services, support packages (monthly, quarterly, yearly)", filled: false },
    ],
    checklist: [
      { task: "Brand assigned to program", done: false },
      { task: "Quarter set", done: false },
      { task: "Genre/title defined", done: false },
      { task: "All 6 scope levels filled", done: false },
      { task: "Target audience defined", done: false },
      { task: "PRI/DAF documentation complete", done: false },
      { task: "Public component live", done: false },
      { task: "Private component live", done: false },
      { task: "Minimum 4 events/projects scheduled", done: false },
      { task: "Monthly content production active", done: false },
    ],
  },
];

// ─── PROPERTY MANAGEMENT ─────────────────────────────────────────────────────
const PROPERTIES = [
  {
    id: 1,
    name: "First Property — To Be Identified",
    type: "Government Surplus / Procurement",
    status: "Sourcing",
    statusColor: "text-amber-400",
    location: "TBD — State/County/City",
    purpose: "Brick-and-mortar base for UCM programs. Hybrid in-person and remote operations hub.",
    fundingPath: "CF Regulations (Crowdfunding) + Capital Raise",
    checklist: [
      { task: "Government portal access confirmed", done: true },
      { task: "Surplus property search initiated", done: false },
      { task: "Property identified and evaluated", done: false },
      { task: "RFFS financial capacity assessment complete", done: false },
      { task: "Capital raise structure defined", done: false },
      { task: "CF regulation compliance reviewed", done: false },
      { task: "Procurement application submitted", done: false },
      { task: "Property acquired", done: false },
      { task: "Program development plan created", done: false },
      { task: "Location activated for program use", done: false },
    ],
  },
];

// ─── WORKFLOW MASTER CHECKLIST ────────────────────────────────────────────────
const WORKFLOW_STAGES = [
  {
    stage: "Stage 0: Legal Vetting & Due Diligence",
    icon: Shield,
    color: "text-red-400",
    bg: "bg-red-500/10 border-red-500/20",
    items: [
      { task: "Background and reference check completed", done: false },
      { task: "Due diligence report filed", done: false },
      { task: "Legal hold cleared", done: false },
      { task: "Alignment with UCM values and process confirmed", done: false },
    ],
  },
  {
    stage: "Stage 1: Intake & Evaluation",
    icon: ClipboardList,
    color: "text-sky-400",
    bg: "bg-sky-500/10 border-sky-500/20",
    items: [
      { task: "Initial intake session completed", done: false },
      { task: "Fill-in-the-blanks needs assessment form submitted", done: false },
      { task: "NAICS code alignment identified", done: false },
      { task: "Service agreement scope defined", done: false },
    ],
  },
  {
    stage: "Stage 2: Financial Alignment (RFFS)",
    icon: DollarSign,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
    items: [
      { task: "RFFS financial capacity assessment completed", done: false },
      { task: "Denefits financing terms reviewed ($300+/mo, 3–12 months, no interest)", done: false },
      { task: "Service fee and dues schedule agreed upon", done: false },
      { task: "Payment automation set up via Denefits", done: false },
    ],
  },
  {
    stage: "Stage 3: Service Agreement & Contracts",
    icon: FileText,
    color: "text-violet-400",
    bg: "bg-violet-500/10 border-violet-500/20",
    items: [
      { task: "Service agreement drafted per project and per person", done: false },
      { task: "One-Person Operator Protection Clause included", done: false },
      { task: "Bad Business Behavior Liability Schedule attached", done: false },
      { task: "Investor Meeting Protocol clause included", done: false },
      { task: "Agreement signed by all parties", done: false },
    ],
  },
  {
    stage: "Stage 4: Pod/Nest Build-Out",
    icon: Settings,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10 border-indigo-500/20",
    items: [
      { task: "Odoo CRM profile created and configured", done: false },
      { task: "Denefits CRM/Receivables account activated", done: false },
      { task: "BetterWorld account set up", done: false },
      { task: "Pietra Studio access granted", done: false },
      { task: "Wethos Studio access granted", done: false },
      { task: "Resources Center property/product hub access granted", done: false },
      { task: "Group app and real-time collaboration tools activated", done: false },
      { task: "Document upload and project portal live", done: false },
      { task: "External agent/broker/dealer network connections established", done: false },
    ],
  },
  {
    stage: "Stage 5: RAPID Phase Plan Activation",
    icon: TrendingUp,
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
    items: [
      { task: "Research phase completed", done: false },
      { task: "Architecture phase completed", done: false },
      { task: "Planning phase completed", done: false },
      { task: "Implementation phase initiated", done: false },
      { task: "Delivery milestones set", done: false },
    ],
  },
  {
    stage: "Stage 6: Program Integration & Go-Live",
    icon: BarChart3,
    color: "text-teal-400",
    bg: "bg-teal-500/10 border-teal-500/20",
    items: [
      { task: "Peer/partner pod page live on site (after formal 'yes')", done: false },
      { task: "GRID cell assigned to project/brand", done: false },
      { task: "Minimum 4 events/projects per year scheduled", done: false },
      { task: "Monthly content production schedule active", done: false },
      { task: "BWEN channel content live", done: false },
      { task: "Reporting and KPI tracking active", done: false },
    ],
  },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────
export default function ProgramPlanning() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "brands" | "programs" | "workflow" | "properties">("dashboard");
  const [expandedProgram, setExpandedProgram] = useState<number | null>(1);
  const [expandedStage, setExpandedStage] = useState<number | null>(0);
  const [expandedProperty, setExpandedProperty] = useState<number | null>(0);

  const totalBrands = BRANDS.length;
  const activePrograms = PROGRAMS.filter(p => p.completion > 0).length;
  const avgCompletion = Math.round(PROGRAMS.reduce((a, p) => a + p.completion, 0) / PROGRAMS.length);
  const workflowTotal = WORKFLOW_STAGES.reduce((a, s) => a + s.items.length, 0);
  const workflowDone = WORKFLOW_STAGES.reduce((a, s) => a + s.items.filter(i => i.done).length, 0);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-900/80 sticky top-0 z-40 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-widest mb-0.5">Brandy Bianchini | Universal Changemakers, Series L3C</p>
            <h1 className="text-xl font-bold text-zinc-100 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-purple-400" />
              Program Planning Dashboard
            </h1>
          </div>
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-zinc-100">
              <Home className="w-4 h-4 mr-2" /> Home
            </Button>
          </Link>
        </div>
        {/* Tab Nav */}
        <div className="max-w-7xl mx-auto px-4 flex gap-1 pb-0 overflow-x-auto">
          {[
            { key: "dashboard", label: "Dashboard", icon: BarChart3 },
            { key: "brands", label: "Brand Registry", icon: Package },
            { key: "programs", label: "Programs", icon: ClipboardList },
            { key: "workflow", label: "Workflow Checklist", icon: CheckCircle2 },
            { key: "properties", label: "Property Management", icon: MapPin },
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as typeof activeTab)}
              className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeTab === tab.key
                  ? "border-purple-500 text-purple-300"
                  : "border-transparent text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <tab.icon className="w-3.5 h-3.5" />
              {tab.label}
            </button>
          ))}
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">

        {/* ── DASHBOARD TAB ── */}
        {activeTab === "dashboard" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-zinc-100 mb-1">Operations Overview</h2>
              <p className="text-zinc-400 text-sm">Universal Changemakers, Series L3C — owned and operated by Brandy Bianchini. Industry-agnostic. All-state access. PRI/DAF ready.</p>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Active Brands", value: totalBrands, icon: Package, color: "text-purple-400", bg: "bg-purple-500/10 border-purple-500/20" },
                { label: "Core Programs", value: `${activePrograms} / 4`, icon: ClipboardList, color: "text-sky-400", bg: "bg-sky-500/10 border-sky-500/20" },
                { label: "Avg Completion", value: `${avgCompletion}%`, icon: BarChart3, color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
                { label: "Workflow Progress", value: `${workflowDone} / ${workflowTotal}`, icon: CheckCircle2, color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20" },
              ].map(kpi => (
                <Card key={kpi.label} className={`${kpi.bg} border p-5`}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs text-zinc-400 uppercase tracking-wider">{kpi.label}</p>
                    <kpi.icon className={`w-4 h-4 ${kpi.color}`} />
                  </div>
                  <p className={`text-3xl font-bold ${kpi.color}`}>{kpi.value}</p>
                </Card>
              ))}
            </div>

            {/* Program Status Summary */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-200 mb-4">Program Status</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {PROGRAMS.map(p => (
                  <Card key={p.id} className="bg-zinc-900/60 border border-zinc-800 p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="font-semibold text-zinc-100">{p.name}</p>
                        {p.brand && <p className="text-sm text-zinc-400">{p.brand} — {p.genre}</p>}
                        {!p.brand && <p className="text-sm text-zinc-500 italic">Not yet configured</p>}
                      </div>
                      <Badge className={`text-xs ${p.completion === 100 ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/20" : "bg-amber-500/10 text-amber-300 border-amber-500/20"}`}>
                        {p.status}
                      </Badge>
                    </div>
                    <div className="w-full bg-zinc-800 rounded-full h-2 mb-2">
                      <div
                        className={`h-2 rounded-full transition-all ${p.completion === 100 ? "bg-emerald-500" : "bg-amber-500"}`}
                        style={{ width: `${p.completion}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-zinc-500">
                      <span>{p.completion}% complete</span>
                      {p.quarter && <span>Q: {p.quarter}</span>}
                      <span className={p.pri_daf_ready ? "text-emerald-400" : "text-zinc-600"}>
                        {p.pri_daf_ready ? "✓ PRI/DAF Ready" : "PRI/DAF Pending"}
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Integration Stack */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-200 mb-4">Integration Stack — Pod/Nest Tools</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {[
                  { name: "Odoo", desc: "CRM & Operations", color: "text-sky-400" },
                  { name: "Denefits", desc: "White Glove CRM / Receivables", color: "text-emerald-400" },
                  { name: "BetterWorld", desc: "Fundraising & Community", color: "text-rose-400" },
                  { name: "Pietra Studio", desc: "Product & Brand Hub", color: "text-purple-400" },
                  { name: "Wethos Studio", desc: "Scope & Proposal Builder", color: "text-amber-400" },
                ].map(tool => (
                  <Card key={tool.name} className="bg-zinc-900/60 border border-zinc-800 p-4 text-center">
                    <p className={`font-semibold text-sm ${tool.color}`}>{tool.name}</p>
                    <p className="text-xs text-zinc-500 mt-1">{tool.desc}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── BRAND REGISTRY TAB ── */}
        {activeTab === "brands" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-zinc-100 mb-1">Brand Registry</h2>
              <p className="text-zinc-400 text-sm">All 8 active brands under Universal Changemakers, Series L3C. Each brand has its own purpose, outlets, and program components.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {BRANDS.map(brand => (
                <Card key={brand.id} className={`${brand.bg} border p-5`}>
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`p-2 rounded-lg bg-zinc-900/60`}>
                      <brand.icon className={`w-5 h-5 ${brand.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-zinc-100 text-sm">{brand.name}</h3>
                        <Badge className="bg-emerald-500/10 text-emerald-300 border-emerald-500/20 text-xs">{brand.status}</Badge>
                      </div>
                      <p className={`text-xs font-medium ${brand.color} mt-0.5`}>{brand.purpose}</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="text-zinc-500 uppercase tracking-wider">Outlets / Vehicles: </span>
                      <span className="text-zinc-300">{brand.outlets}</span>
                    </div>
                    <div>
                      <span className="text-zinc-500 uppercase tracking-wider">Components: </span>
                      <span className="text-zinc-300">{brand.components}</span>
                    </div>
                  </div>
                  {brand.path !== "/" && (
                    <Link href={brand.path}>
                      <Button variant="ghost" size="sm" className="mt-3 text-xs text-zinc-400 hover:text-zinc-100 p-0 h-auto">
                        View Brand Page <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </Link>
                  )}
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* ── PROGRAMS TAB ── */}
        {activeTab === "programs" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-zinc-100 mb-1">Core Programs</h2>
              <p className="text-zinc-400 text-sm">Minimum 4 programs required. Each program must have a public and private component, and conduct a minimum of 4 events/projects per year. All programs must be 100% PRI/DAF ready.</p>
            </div>
            <div className="space-y-4">
              {PROGRAMS.map((program, idx) => (
                <Card key={program.id} className="bg-zinc-900/60 border border-zinc-800 overflow-hidden">
                  <button
                    className="w-full p-5 flex items-center justify-between text-left hover:bg-zinc-800/40 transition-colors"
                    onClick={() => setExpandedProgram(expandedProgram === idx ? null : idx)}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                        program.completion === 100 ? "bg-emerald-500/20 text-emerald-300" : "bg-amber-500/20 text-amber-300"
                      }`}>
                        {program.id}
                      </div>
                      <div>
                        <p className="font-semibold text-zinc-100">{program.name}</p>
                        <p className="text-sm text-zinc-400">
                          {program.brand ? `${program.brand} — ${program.genre} (${program.quarter})` : "Not yet configured — click to set up"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right hidden sm:block">
                        <p className={`text-lg font-bold ${program.completion === 100 ? "text-emerald-400" : "text-amber-400"}`}>{program.completion}%</p>
                        <p className="text-xs text-zinc-500">{program.status}</p>
                      </div>
                      {expandedProgram === idx ? <ChevronDown className="w-4 h-4 text-zinc-400" /> : <ChevronRight className="w-4 h-4 text-zinc-400" />}
                    </div>
                  </button>

                  {expandedProgram === idx && (
                    <div className="border-t border-zinc-800 p-5 space-y-6">
                      {/* Scope Levels */}
                      <div>
                        <h4 className="text-sm font-semibold text-zinc-300 mb-3 flex items-center gap-2">
                          <Globe className="w-4 h-4 text-sky-400" /> Scope Levels (6 Required)
                        </h4>
                        <div className="grid md:grid-cols-2 gap-2">
                          {program.scopeLevels.map(scope => (
                            <div key={scope.level} className={`flex items-start gap-2 p-3 rounded-lg border ${
                              scope.filled ? "bg-emerald-500/5 border-emerald-500/20" : "bg-zinc-800/40 border-zinc-700/40"
                            }`}>
                              {scope.filled
                                ? <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                                : <Circle className="w-4 h-4 text-zinc-600 mt-0.5 flex-shrink-0" />
                              }
                              <div>
                                <p className={`text-xs font-semibold ${scope.filled ? "text-emerald-300" : "text-zinc-500"}`}>{scope.level}</p>
                                <p className="text-xs text-zinc-500 mt-0.5">{scope.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Program Checklist */}
                      <div>
                        <h4 className="text-sm font-semibold text-zinc-300 mb-3 flex items-center gap-2">
                          <ClipboardList className="w-4 h-4 text-purple-400" /> Program Setup Checklist
                        </h4>
                        <div className="space-y-2">
                          {program.checklist.map((item, i) => (
                            <div key={i} className={`flex items-center gap-3 p-2.5 rounded-lg ${
                              item.done ? "bg-emerald-500/5" : "bg-zinc-800/30"
                            }`}>
                              {item.done
                                ? <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                : <Circle className="w-4 h-4 text-zinc-600 flex-shrink-0" />
                              }
                              <span className={`text-sm ${item.done ? "text-zinc-300" : "text-zinc-500"}`}>{item.task}</span>
                              {!item.done && <Badge className="ml-auto bg-amber-500/10 text-amber-300 border-amber-500/20 text-xs">Pending</Badge>}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* PRI/DAF Status */}
                      <div className={`p-4 rounded-lg border ${program.pri_daf_ready ? "bg-emerald-500/10 border-emerald-500/20" : "bg-amber-500/10 border-amber-500/20"}`}>
                        <div className="flex items-center gap-2">
                          {program.pri_daf_ready
                            ? <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            : <AlertCircle className="w-4 h-4 text-amber-400" />
                          }
                          <p className={`text-sm font-semibold ${program.pri_daf_ready ? "text-emerald-300" : "text-amber-300"}`}>
                            {program.pri_daf_ready ? "PRI/DAF Documentation Complete" : "PRI/DAF Documentation Required"}
                          </p>
                        </div>
                        <p className="text-xs text-zinc-400 mt-1 ml-6">
                          All programs must be 100% Program-Related Investment (PRI) and Donor Advised Fund (DAF) ready before activation.
                        </p>
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* ── WORKFLOW CHECKLIST TAB ── */}
        {activeTab === "workflow" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-zinc-100 mb-1">Master Workflow Checklist</h2>
              <p className="text-zinc-400 text-sm">The complete operational process for onboarding partners, contractors, field reps, and agents. Every person must pass all stages before pod activation. This is the standard template for all engagements.</p>
            </div>
            <div className="flex items-center gap-4 p-4 bg-zinc-900/60 border border-zinc-800 rounded-xl">
              <div className="flex-1 bg-zinc-800 rounded-full h-3">
                <div
                  className="h-3 rounded-full bg-gradient-to-r from-purple-500 to-emerald-500 transition-all"
                  style={{ width: `${Math.round((workflowDone / workflowTotal) * 100)}%` }}
                />
              </div>
              <span className="text-sm font-semibold text-zinc-300 whitespace-nowrap">{workflowDone} / {workflowTotal} tasks complete</span>
            </div>
            <div className="space-y-4">
              {WORKFLOW_STAGES.map((stage, idx) => (
                <Card key={idx} className={`${stage.bg} border overflow-hidden`}>
                  <button
                    className="w-full p-5 flex items-center justify-between text-left hover:bg-zinc-800/20 transition-colors"
                    onClick={() => setExpandedStage(expandedStage === idx ? null : idx)}
                  >
                    <div className="flex items-center gap-3">
                      <stage.icon className={`w-5 h-5 ${stage.color}`} />
                      <div>
                        <p className="font-semibold text-zinc-100 text-sm">{stage.stage}</p>
                        <p className="text-xs text-zinc-500">
                          {stage.items.filter(i => i.done).length} / {stage.items.length} tasks complete
                        </p>
                      </div>
                    </div>
                    {expandedStage === idx ? <ChevronDown className="w-4 h-4 text-zinc-400" /> : <ChevronRight className="w-4 h-4 text-zinc-400" />}
                  </button>
                  {expandedStage === idx && (
                    <div className="border-t border-zinc-700/40 p-5 space-y-2">
                      {stage.items.map((item, i) => (
                        <div key={i} className={`flex items-center gap-3 p-2.5 rounded-lg ${item.done ? "bg-emerald-500/5" : "bg-zinc-900/40"}`}>
                          {item.done
                            ? <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                            : <Circle className="w-4 h-4 text-zinc-600 flex-shrink-0" />
                          }
                          <span className={`text-sm ${item.done ? "text-zinc-300" : "text-zinc-400"}`}>{item.task}</span>
                          {!item.done && <Clock className="w-3.5 h-3.5 text-zinc-600 ml-auto flex-shrink-0" />}
                        </div>
                      ))}
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* ── PROPERTY MANAGEMENT TAB ── */}
        {activeTab === "properties" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-zinc-100 mb-1">Property Management</h2>
              <p className="text-zinc-400 text-sm">Government surplus procurement strategy. Properties are identified, procured, developed through UCM programs, and funded via CF regulations and capital raise. Each property becomes a brick-and-mortar hub for UCM operations.</p>
            </div>

            {/* Strategy Overview */}
            <Card className="bg-zinc-900/60 border border-zinc-800 p-5">
              <h3 className="font-semibold text-zinc-200 mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-400" /> Procurement Strategy
              </h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                {[
                  { step: "1. Identify", desc: "Use government portal access to locate surplus property in target cities, states, and counties.", color: "text-sky-400" },
                  { step: "2. Assess", desc: "Run RFFS financial capacity assessment. Define capital raise structure using CF regulations.", color: "text-purple-400" },
                  { step: "3. Activate", desc: "Procure property, run UCM programs through it, and build hybrid in-person/remote operations hub.", color: "text-emerald-400" },
                ].map(s => (
                  <div key={s.step} className="p-4 bg-zinc-800/40 rounded-lg border border-zinc-700/40">
                    <p className={`font-bold text-sm ${s.color} mb-1`}>{s.step}</p>
                    <p className="text-zinc-400 text-xs">{s.desc}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Property Cards */}
            {PROPERTIES.map((property, idx) => (
              <Card key={property.id} className="bg-zinc-900/60 border border-zinc-800 overflow-hidden">
                <button
                  className="w-full p-5 flex items-center justify-between text-left hover:bg-zinc-800/40 transition-colors"
                  onClick={() => setExpandedProperty(expandedProperty === idx ? null : idx)}
                >
                  <div className="flex items-center gap-3">
                    <Building2 className="w-5 h-5 text-teal-400" />
                    <div>
                      <p className="font-semibold text-zinc-100">{property.name}</p>
                      <p className="text-sm text-zinc-400">{property.type} — {property.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-amber-500/10 text-amber-300 border-amber-500/20 text-xs">{property.status}</Badge>
                    {expandedProperty === idx ? <ChevronDown className="w-4 h-4 text-zinc-400" /> : <ChevronRight className="w-4 h-4 text-zinc-400" />}
                  </div>
                </button>
                {expandedProperty === idx && (
                  <div className="border-t border-zinc-800 p-5 space-y-5">
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Purpose</p>
                        <p className="text-zinc-300">{property.purpose}</p>
                      </div>
                      <div>
                        <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Funding Path</p>
                        <p className="text-zinc-300">{property.fundingPath}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-300 mb-3 flex items-center gap-2">
                        <ClipboardList className="w-4 h-4 text-teal-400" /> Property Acquisition Checklist
                      </h4>
                      <div className="space-y-2">
                        {property.checklist.map((item, i) => (
                          <div key={i} className={`flex items-center gap-3 p-2.5 rounded-lg ${item.done ? "bg-emerald-500/5" : "bg-zinc-800/30"}`}>
                            {item.done
                              ? <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                              : <Circle className="w-4 h-4 text-zinc-600 flex-shrink-0" />
                            }
                            <span className={`text-sm ${item.done ? "text-zinc-300" : "text-zinc-500"}`}>{item.task}</span>
                            {!item.done && <Badge className="ml-auto bg-amber-500/10 text-amber-300 border-amber-500/20 text-xs">Pending</Badge>}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            ))}

            {/* Add Property Prompt */}
            <Card className="bg-zinc-900/40 border border-dashed border-zinc-700 p-8 text-center">
              <MapPin className="w-8 h-8 text-zinc-600 mx-auto mb-3" />
              <p className="text-zinc-400 text-sm font-medium">Additional properties will appear here once identified through the government surplus portal.</p>
              <p className="text-zinc-600 text-xs mt-1">Each property follows the 3-step procurement strategy above.</p>
            </Card>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-16 py-8 text-center">
        <p className="text-xs text-zinc-600">
          &copy; {new Date().getFullYear()} Brandy Bianchini | Universal Changemakers, Series L3C. All rights reserved.
        </p>
        <p className="text-xs text-zinc-700 mt-1">
          Owned &amp; Operated by Brandy Bianchini | hello@blackplum.belladynamic.org
        </p>
      </footer>
    </div>
  );
}
