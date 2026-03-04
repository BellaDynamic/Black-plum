import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Opportunities from "./pages/Opportunities";
import Properties from "./pages/Properties";
import CapitalRaise from "./pages/CapitalRaise";
import Projects from "./pages/Projects";
import MemberProfile from "./pages/MemberProfile";
import BWENChannels from "./pages/BWENChannels";
import Events from "./pages/Events";
import PartnerRegister from "./pages/PartnerRegister";
import BlackPlum from "./pages/BlackPlum";
import SafeHarbor from "./pages/SafeHarbor";
import BigHeart from "./pages/BigHeart";
import Resolute from "./pages/Resolute";
import BellaDynamic from "./pages/BellaDynamic";
import LunasGarden from "./pages/LunasGarden";
import EternalAutumn from "./pages/EternalAutumn";
import IBAIDS from "./pages/IBAIDS";
import TGAA from "./pages/TGAA";
import Services from "./pages/Services";
import MemberIntake from "./pages/MemberIntake";
import PeerHub from "./pages/PeerHub";
import Den from "./pages/Den";
import FinancialHub from "./pages/FinancialHub";

function Router() {
  return (
    <Switch>
      {/* Public */}
      <Route path={"/"} component={Home} />
      <Route path={"/services"} component={Services} />
      <Route path={"/partner-register"} component={PartnerRegister} />
      <Route path={"/member-intake"} component={MemberIntake} />

      {/* Brand Pages */}
      <Route path={"/black-plum"} component={BlackPlum} />
      <Route path={"/safe-harbor"} component={SafeHarbor} />
      <Route path={"/big-heart"} component={BigHeart} />
      <Route path={"/resolute"} component={Resolute} />
      <Route path={"/bella-dynamic"} component={BellaDynamic} />
      <Route path={"/lunas-garden"} component={LunasGarden} />
      <Route path={"/eternal-autumn"} component={EternalAutumn} />
      <Route path={"/ibaids"} component={IBAIDS} />
      <Route path={"/tgaa-guild"} component={TGAA} />

      {/* Member Dashboard */}
      <Route path={"/dashboard"} component={Dashboard} />
      <Route path={"/opportunities"} component={Opportunities} />
      <Route path={"/properties"} component={Properties} />
      <Route path={"/capital-raise"} component={CapitalRaise} />
      <Route path={"/projects"} component={Projects} />
      <Route path={"/profile"} component={MemberProfile} />
      <Route path={"/bwen"} component={BWENChannels} />
      <Route path={"/events"} component={Events} />
      <Route path={"/peer-hub"} component={PeerHub} />
      <Route path={"/den"} component={Den} />
      <Route path={"/financial-hub"} component={FinancialHub} />

      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
