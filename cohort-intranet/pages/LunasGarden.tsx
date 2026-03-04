/**
 * Luna's Garden
 * Sanctuary, Healing & Community Wellness Space
 */
import { Link } from "wouter";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Leaf, Heart, Users, Star, Shield,
  ArrowRight, ExternalLink, ChevronRight
} from "lucide-react";

const CALENDLY = "https://calendly.com/changemaker-black-plum-concierge/newclientevaluation";

const PROGRAMS = [
  {
    name: "Sanctuary Space",
    desc: "A physical and virtual safe space for personal and collective healing. Open to community members at all stages of their journey.",
    icon: Shield,
  },
  {
    name: "Healing Programs",
    desc: "Structured healing programs combining restorative practices, community support, and wellness education.",
    icon: Heart,
  },
  {
    name: "Community Wellness",
    desc: "Community-wide wellness programming including group sessions, workshops, and peer support circles.",
    icon: Users,
  },
  {
    name: "Restorative Practices",
    desc: "Evidence-informed restorative practices for individuals and groups recovering from trauma, loss, or life transitions.",
    icon: Star,
  },
  {
    name: "Safe Space Programming",
    desc: "Dedicated programming for vulnerable populations — women, youth, seniors, and individuals in recovery.",
    icon: Leaf,
  },
];

const ECOSYSTEM_CONNECTIONS = [
  { name: "Bella Dynamic", role: "Authentic Living & Healing programs — co-supported wellness and grief support", path: "/bella-dynamic" },
  { name: "Safe Harbor", role: "Crisis response and resource coordination for Luna's Garden community members", path: "/safe-harbor" },
  { name: "Big Heart Solutions", role: "Community support and resource navigation for Luna's Garden participants", path: "/big-heart" },
];

export default function LunasGarden() {
  return (
    <DashboardLayout>
      <div className="p-4 md:p-6 space-y-8 max-w-5xl">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0">
            <Leaf className="w-7 h-7 text-teal-400" />
          </div>
          <div>
            <div className="flex items-center gap-3 flex-wrap mb-2">
              <h1 className="text-2xl font-bold text-white">Luna's Garden</h1>
              <Badge className="bg-teal-500/10 text-teal-300 border-teal-500/20 text-xs">Sanctuary & Healing</Badge>
              <Badge className="bg-amber-500/10 text-amber-300 border-amber-500/20 text-xs">Planning Phase</Badge>
              <Badge className="bg-zinc-800 text-zinc-400 border-zinc-700 text-xs">GRID-06</Badge>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
              Luna's Garden is a sanctuary and healing space within the UCM ecosystem. It provides community wellness programming, restorative practices, and a safe space for personal and collective healing — supporting the Public Hub and community development mission.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="bg-teal-950/20 border border-teal-500/20 rounded-xl p-6">
          <div className="text-xs text-teal-400 uppercase tracking-wider mb-3">Vision</div>
          <p className="text-white text-base leading-relaxed mb-3">
            Luna's Garden is named for the idea that healing, like a garden, requires tending — patience, care, and the right conditions to grow. It is a space where community members can come as they are and leave with more than they arrived with.
          </p>
          <p className="text-zinc-300 text-sm leading-relaxed">
            Currently in the planning phase, Luna's Garden is being developed as a physical and virtual sanctuary within the UCM Public Hub (GRID-06). It will serve as the community wellness anchor for all UCM brands — a place where the work of healing is honored and supported.
          </p>
          <div className="mt-4 bg-amber-500/10 border border-amber-500/20 rounded-lg p-3">
            <div className="text-amber-400 text-xs font-semibold mb-1">Currently in Planning Phase</div>
            <p className="text-zinc-400 text-xs">Luna's Garden is actively being developed. If you are interested in contributing to its design, programming, or launch, please schedule a session to discuss how you can be involved.</p>
          </div>
        </div>

        {/* Programs */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Planned Programs & Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROGRAMS.map((prog) => {
              const Icon = prog.icon;
              return (
                <div key={prog.name} className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 flex gap-4">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-teal-400" />
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

        {/* Get Involved */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
          <h2 className="text-lg font-bold text-white mb-4">Get Involved</h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-6">
            Luna's Garden is being built with community input. If you are a healer, wellness practitioner, community organizer, or someone who believes in the power of sanctuary spaces, we want to hear from you. Schedule a session to discuss how you can contribute to the design and launch of Luna's Garden.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
              <Button className="bg-teal-700 hover:bg-teal-600 text-white gap-2">
                Schedule a Session
                <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
            <Link href="/partner-register">
              <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-900 gap-2">
                Register as Community Partner
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
