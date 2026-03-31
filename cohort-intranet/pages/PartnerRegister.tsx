
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight, Star, Heart, Shield, TrendingUp, Music, Globe,
  Users, Briefcase, Building2, ChevronRight, ExternalLink, Leaf, Sparkles, CheckCircle, GitBranch, Puzzle, Landmark, Handshake, Network, Library, Settings, Rocket, AlertTriangle
} from "lucide-react";

const CALENDLY = "https://calendly.com/changemaker-black-plum-concierge/newclientevaluation";

const INTEGRATION_STACK = [
  { name: "Odoo", description: "Central CRM & ERP Hub for project management, document control, and accounting.", icon: Briefcase },
  { name: "Denefits", description: "White Glove Service Center for perpetual financing, receivables, and soft/hard money movement.", icon: Landmark },
  { name: "BetterWorld", description: "Micro and macro campaign creation for public outreach, fundraising, and donor engagement.", icon: Globe },
  { name: "Pietra Studio", description: "US-sourced product design, sourcing, and fulfillment for merchandise and branded apparel.", icon: Star },
  { name: "Wethos Studio", description: "Scope-of-work builder, rate cards, and team assembly for creative and professional services.", icon: Sparkles },
  { name: "Resources Center", description: "Access to government surplus property, asset procurement, and CF capital raise pathways.", icon: Building2 },
  { name: "External Network", description: "Structured access to a global network of agents, brokers, dealers, and service providers.", icon: Network },
];

const ONBOARDING_PROCESS = [
    { stage: 0, name: "Legal Vetting & Due Diligence", description: "Comprehensive background verification, credential checks, and alignment assessment. This is mandatory and cannot be skipped.", icon: Shield },
    { stage: 1, name: "Intake & Evaluation", description: "A privileged, one-on-one session with Brandy to identify your needs, strengths, and ideal role within the ecosystem.", icon: Handshake },
    { stage: 2, name: "Reality Assessment & Alignment", description: "Application of GRID, RAPID, and RFFS frameworks to map your vision to an executable, sustainable strategy.", icon: Rocket },
    { stage: 3, name: "Service Agreement Execution", description: "A personalized service agreement is drafted and financed through Denefits, ensuring you are compensated in perpetuity.", icon: CheckCircle },
    { stage: 4, name: "Pod/Nest Build-Out", description: "Your dedicated digital workspace is constructed, integrating all tools from the stack.", icon: GitBranch },
    { stage: 5, name: "Alignment & Activation", description: "Full training and onboarding. Only after this stage is any public-facing profile activated.", icon: Puzzle },
    { stage: 6, name: "Legal Hold Review", description: "If any concerns arise at any stage, the process is paused and placed on legal hold until resolved.", icon: Landmark },
];

export default function PartnerRegister() {
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
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="bg-teal-700 hover:bg-teal-600 text-white text-xs">
                Book an Evaluation Session
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="py-20 md:py-28 px-4 border-b border-zinc-800 bg-gradient-to-br from-teal-950/30 via-black to-purple-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-purple-500/10 text-purple-300 border-purple-500/20 mb-6 text-xs">
            An Invitation to Build
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white">
            The Partner, Rep & Agent Onboarding Framework
          </h1>
          <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
            This is not a public application. It is a privileged and awarded invitation to become an active, aligned, and perpetually financed member of the Universal Changemakers ecosystem. We build your dedicated digital workspace — your Pod/Nest — before you are ever asked to perform.
          </p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white hover:bg-zinc-200 text-black font-bold text-sm">
              Schedule Your Intake & Evaluation Session <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </section>

      {/* ── WHAT A POD/NEST IS ── */}
      <section className="py-20 px-4 border-b border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">What is a Pod / Nest?</h2>
            <p className="text-zinc-400 mt-2 max-w-2xl mx-auto">A Pod/Nest is a dedicated, integrated digital workspace built specifically for you. It is a fully operational hub that connects you to every tool, resource, and financial pathway you need to work, earn, and grow within our ecosystem.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Your Integrated Digital Workspace</h3>
              <p className="text-zinc-300">Your Pod/Nest is not a generic profile page. It is a private, secure, and powerful environment where you can manage projects, access financing, upload documents, and collaborate in real time. It is built to your specific role, whether you are a creative producer, a field representative, an external broker, or a licensed professional.</p>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-3 mt-1 text-teal-400 flex-shrink-0" /><span>**No Public Profile Until Ready:** Your name and work are never made public until you have formally said yes and your Pod is fully built and active.</span></li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-3 mt-1 text-teal-400 flex-shrink-0" /><span>**The Ecosystem as the Example:** We use our own eight entities as the living demonstration of the model. You see it work before you join.</span></li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-3 mt-1 text-teal-400 flex-shrink-0" /><span>**Perpetual Financing:** Through Denefits, your service agreements are financed, ensuring you are compensated for your value without being dependent on unpredictable project funding.</span></li>
              </ul>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8">
                <div className="flex items-center justify-center mb-4">
                    <GitBranch className="w-12 h-12 text-purple-400"/>
                </div>
                <h4 className="text-xl font-bold text-center text-white">Your Pod Contains:</h4>
                <p className="text-zinc-400 text-center text-sm">A complete suite of integrated tools for success.</p>
                <div className="mt-6 space-y-4">
                    {INTEGRATION_STACK.slice(0, 4).map(item => (
                        <div key={item.name} className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-zinc-800 rounded-md flex items-center justify-center"><item.icon className="w-5 h-5 text-teal-400"/></div>
                            <div>
                                <p className="font-semibold text-white text-sm">{item.name}</p>
                                <p className="text-zinc-400 text-xs">{item.description.substring(0, 40)}...</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE FULL INTEGRATION STACK ── */}
      <section className="py-20 px-4 border-b border-zinc-800 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">The Full Integration Stack</h2>
            <p className="text-zinc-400 mt-2 max-w-3xl mx-auto">When your Pod/Nest is activated, you gain structured access to the following integrated systems. All partnerships begin with comprehensive legal vetting to protect everyone involved.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INTEGRATION_STACK.map(item => (
              <Card key={item.name} className="bg-zinc-900 border-zinc-800 p-6 hover:border-teal-500/50 transition-colors">
                <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-teal-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{item.name}</h3>
                </div>
                <p className="text-zinc-400 text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE 5-STAGE ONBOARDING PROCESS ── */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">The Pod Build-Out Process</h2>
            <p className="text-zinc-400 mt-2 max-w-2xl mx-auto">We invest in you first. Our comprehensive process ensures you are fully equipped, aligned, and financed before any work begins. **Legal vetting is mandatory and cannot be skipped.** If concerns arise at any stage, the process is placed on legal hold until resolved. **Bad business behavior will result in documented fees, dues, and reported liabilities.**</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-zinc-800 hidden md:block" aria-hidden="true"></div>
            {ONBOARDING_PROCESS.map((item, index) => (
              <div key={item.stage} className="relative flex md:items-center mb-8">
                <div className={`flex w-full items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="hidden md:flex w-1/2"></div>
                  <div className="hidden md:flex items-center justify-center w-12">
                    <div className="z-10 flex items-center justify-center w-12 h-12 bg-zinc-900 border-2 border-teal-500 rounded-full">
                      <item.icon className="w-6 h-6 text-teal-400" />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <Card className="bg-zinc-900 border-zinc-800 p-6">
                        <Badge className="bg-teal-500/10 text-teal-300 border-teal-500/20 mb-2 text-xs">Stage {item.stage}</Badge>
                        <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
                        <p className="text-zinc-400 text-sm">{item.description}</p>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BAD BUSINESS BEHAVIOR POLICY ── */}
      <section className="py-16 px-4 border-b border-zinc-800 bg-zinc-950/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-red-500/10 text-red-300 border-red-500/20 mb-6 text-xs uppercase tracking-widest">Critical Policy</Badge>
            <h2 className="text-3xl font-bold text-white mb-4">The 'Hell to Pay' Protection Clause</h2>
            <p className="text-zinc-400">This is a one-person operation. Disrespect of process, manipulative conduct, or unauthorized representation will result in immediate financial liability and formal reporting.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-zinc-900 border-zinc-800 p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center"><Shield className="w-5 h-5 mr-2 text-red-400" /> What Triggers Liability</h3>
              <ul className="space-y-3 text-zinc-400 text-sm">
                <li className="flex items-start"><span className="text-red-400 mr-2">•</span><span><strong>Process Disrespect:</strong> Failure to follow established protocols.</span></li>
                <li className="flex items-start"><span className="text-red-400 mr-2">•</span><span><strong>Misrepresentation:</strong> Unauthorized speaking on behalf of Black Plum.</span></li>
                <li className="flex items-start"><span className="text-red-400 mr-2">•</span><span><strong>Manipulative Conduct:</strong> Presenting false information as fact.</span></li>
                <li className="flex items-start"><span className="text-red-400 mr-2">•</span><span><strong>Unauthorized Financial Inclusion:</strong> Putting the founder on the spot in investor meetings.</span></li>
                <li className="flex items-start"><span className="text-red-400 mr-2">•</span><span><strong>Causing Hardship:</strong> Any action resulting in time loss, funding loss, or reputational damage.</span></li>
              </ul>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800 p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center"><Landmark className="w-5 h-5 mr-2 text-red-400" /> Consequences</h3>
              <ul className="space-y-3 text-zinc-400 text-sm">
                <li className="flex items-start"><span className="text-red-400 mr-2">•</span><span><strong>$500–$5,000+ in documented fees</strong> depending on offense severity.</span></li>
                <li className="flex items-start"><span className="text-red-400 mr-2">•</span><span><strong>Recovery of actual losses</strong> plus 25% administrative fee.</span></li>
                <li className="flex items-start"><span className="text-red-400 mr-2">•</span><span><strong>Formal reporting</strong> to credit bureaus, professional bodies, and legal authorities.</span></li>
                <li className="flex items-start"><span className="text-red-400 mr-2">•</span><span><strong>Immediate legal hold</strong> and Pod/Nest deactivation.</span></li>
                <li className="flex items-start"><span className="text-red-400 mr-2">•</span><span><strong>Permanent exclusion</strong> from the UCM ecosystem.</span></li>
              </ul>
            </Card>
          </div>
          <div className="mt-8 p-6 bg-red-950/20 border border-red-500/30 rounded-lg">
            <p className="text-red-300 text-center font-semibold">"One year of time and funding affected by manipulative havoc will result in documented recovery and reported liabilities. This is law and my right."</p>
            <p className="text-zinc-500 text-center text-sm mt-2">— Brandy Bianchini, Black Plum Concierge Agency</p>
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
