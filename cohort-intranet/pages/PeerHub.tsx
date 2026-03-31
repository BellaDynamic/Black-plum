
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight, Users, Shield, CheckCircle, GitBranch, Lock, Info, Search, Filter, ExternalLink, Briefcase, Landmark, Globe, Star, Sparkles, Building2, Network
} from "lucide-react";

const PEER_HUB_PRINCIPLES = [
  { title: "No Public Names Until Ready", description: "No peer names or projects are published until they formally say 'Yes' and their dedicated digital workspace (Pod/Nest) is fully built and integrated.", icon: Shield },
  { title: "Ecosystem as the Example", description: "We use our own eight entities as the living demonstration of the model. You see the structure work before your own profile is activated.", icon: Users },
  { title: "Integrated Tool Stack", description: "Every active peer has a Pod/Nest integrated with Odoo, Denefits, BetterWorld, Pietra, Wethos, and our Resources Center.", icon: GitBranch },
  { title: "Legal Vetting & Due Diligence", description: "Stage 0 is mandatory. All peers undergo comprehensive vetting to ensure alignment and protect the entire ecosystem.", icon: Lock },
];

const ACTIVE_ENTITIES = [
  { name: "Black Plum Concierge", role: "Mutual Benefit Partnership", color: "from-purple-600 to-indigo-700" },
  { name: "Safe Harbor", role: "Public Services & Resources", color: "from-teal-600 to-emerald-700" },
  { name: "Big Heart Solutions", role: "Community Impact & Crisis Support", color: "from-rose-600 to-pink-700" },
  { name: "Resolute Clinic", role: "Economic Growth & Recovery", color: "from-amber-600 to-orange-700" },
  { name: "Bella Dynamic", role: "Authentic Living & Healing", color: "from-blue-600 to-cyan-700" },
  { name: "Eternal Autumn Trust", role: "Private Operating Foundation", color: "from-zinc-600 to-slate-700" },
];

export default function PeerHub() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* ── TOP NAV ── */}
      <nav className="sticky top-0 z-50 bg-black/95 border-b border-zinc-800 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-600 to-purple-700 flex items-center justify-center">
                <span className="text-white text-xs font-bold">UC</span>
              </div>
              <div>
                <div className="text-sm font-bold text-white leading-none">Universal Changemakers</div>
                <div className="text-xs text-zinc-500 leading-none">Series L3C</div>
              </div>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/partner-register">
              <Button size="sm" className="bg-teal-700 hover:bg-teal-600 text-white text-xs">
                Apply for Evaluation
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="py-16 px-4 border-b border-zinc-800 bg-gradient-to-br from-zinc-900 via-black to-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-teal-500/10 text-teal-300 border-teal-500/20 mb-6 text-xs uppercase tracking-widest">
            Internal Operations Hub
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
            The Peer Hub & Pod Network
          </h1>
          <p className="text-lg text-zinc-400 mb-8 leading-relaxed max-w-2xl mx-auto">
            This is where our community of partners, contractors, field reps, and agents manage their integrated digital workspaces. Access is restricted to awarded peers who have completed Stage 0-5 of the onboarding process.
          </p>
        </div>
      </section>

      {/* ── PEER HUB PRINCIPLES ── */}
      <section className="py-12 px-4 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PEER_HUB_PRINCIPLES.map((principle) => (
            <Card key={principle.title} className="bg-zinc-900/50 border-zinc-800 p-6">
              <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center mb-4">
                <principle.icon className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-white font-bold mb-2">{principle.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{principle.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* ── THE ECOSYSTEM AS THE EXAMPLE ── */}
      <section className="py-20 px-4 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">The Living Example</h2>
              <p className="text-zinc-400">
                We do not ask peers to use tools we do not use ourselves. Every entity in our ecosystem is built as a Pod/Nest, demonstrating the full integration of Odoo, Denefits, and our proprietary frameworks (GRID, RAPID, RFFS).
              </p>
            </div>
            <Link href="/partner-register">
              <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                View Onboarding Framework <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACTIVE_ENTITIES.map((entity) => (
              <Card key={entity.name} className="bg-zinc-900 border-zinc-800 overflow-hidden hover:border-teal-500/30 transition-all group">
                <div className={`h-2 bg-gradient-to-r ${entity.color}`} />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-white">{entity.name}</h3>
                    <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-teal-500/10 transition-colors">
                      <CheckCircle className="w-4 h-4 text-teal-500" />
                    </div>
                  </div>
                  <p className="text-zinc-500 text-xs mb-4 uppercase tracking-widest font-semibold">{entity.role}</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-zinc-800 text-zinc-400 text-[10px] border-none">Odoo</Badge>
                    <Badge variant="secondary" className="bg-zinc-800 text-zinc-400 text-[10px] border-none">Denefits</Badge>
                    <Badge variant="secondary" className="bg-zinc-800 text-zinc-400 text-[10px] border-none">BetterWorld</Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── PEER DIRECTORY PLACEHOLDER ── */}
      <section className="py-20 px-4 bg-zinc-950/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 mb-6">
            <Lock className="w-8 h-8 text-zinc-600" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Peer Directory Is Restricted</h2>
          <p className="text-zinc-400 mb-8">
            To protect our community, the full directory of partners, contractors, and agents is only accessible to authenticated members. Peer profiles are only activated once their Pod/Nest is fully built and their service agreement is finalized through Denefits.
          </p>
          <div className="bg-zinc-900/50 border border-dashed border-zinc-800 rounded-xl p-12">
            <p className="text-zinc-500 italic text-sm">
              "We build your nest before you are ever asked to fly."
            </p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-12 px-4 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto text-center text-zinc-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Brandy Bianchini | Universal Changemakers, Series L3C. All rights reserved.</p>
          <p className="mt-2">Owned & Operated by Brandy Bianchini | Universal Changemakers, Series L3C | hello@blackplum.belladynamic.org</p>
        </div>
      </footer>
    </div>
  );
}
