# Cohort File Catalog — Full Build TODO

## PHASE 1: Foundation & Authentication
- [x] Upgrade to web-db-user (backend, database, auth)
- [x] Create comprehensive database schema (properties, opportunities, members, capital raise, projects, events, denefits, service agreements)
- [x] Fix Home.tsx TypeScript errors
- [x] Push database schema migrations (pnpm db:push)
- [x] Wire Manus OAuth authentication to all protected routes
- [ ] Create member role system (admin, preferred_member, public)
- [x] Lock Den, PeerHub, Dashboard behind authentication

## PHASE 2: Master Reference & Data Layer
- [x] Create MASTER_REFERENCE.md with all entities, properties, programs, systems
- [x] Seed database with all 16 GRID properties
- [ ] Seed database with all 4 BWEN channels and content types
- [ ] Seed database with cohort member profiles (Mark Berry, Peter Bouers, Veronica Craven, Doug Stanley, Tom, Thomas Poulson)
- [x] Seed database with capital raise campaigns
- [x] Create server/routers for properties, opportunities, members, events, capital raise

## PHASE 3: Member Dashboard (The Den — Upgraded)
- [x] Build authenticated member dashboard using DashboardLayout
- [x] Dashboard home: overview cards (properties, open opportunities, active campaigns, upcoming events)
- [x] Properties panel: all 16 GRID properties with status, team, and programs
- [x] BWEN Channel Manager: 4 channels with content calendar and job needs
- [x] My Profile: member profile with skills, availability, Denefits status, agreements
- [ ] My Applications: track opportunity applications
- [ ] My Agreements: service agreements and contract status

## PHASE 4: Opportunities Station
- [x] Build /opportunities page (member-only)
- [x] Filter by property, category, compensation, location
- [ ] Historic opportunities reference (2005 production jobs as templates)
- [ ] BWEN channel-specific workforce needs (4 channels × content types)
- [ ] Admin: post new opportunities
- [x] Apply to opportunity flow
- [ ] Capabilities statement upload per member

## PHASE 5: Capital Raise Tracker
- [x] Build /capital-raise page (member-only)
- [ ] Campaign cards with progress bars (target vs. current)
- [ ] Funding source tracking (grants, contracts, private, Denefits)
- [ ] EE Fund Pool Optimizer section
- [ ] SF Fund Pool Optimizer section
- [ ] Financial Aid Center: qualify property/company/individual for service
- [ ] 30% development funding requirement tracker
- [ ] $40–80K startup per property tracker

## PHASE 6: Partner Registration System
- [x] Build /partner-register page (public-facing)
- [x] Form fields: org name, type, mission, territory, programs, contacts
- [x] Document upload (501c3, bylaws, etc.)
- [ ] Letter of interest generator
- [x] Alignment interest checkboxes (UCM programs)
- [ ] Admin review queue for partner applications
- [ ] Email notification on submission

## PHASE 7: BWEN Multi-Channel Network Manager
- [x] Build /bwen page (member-only)
- [x] 4 channel dashboard with concurrent content status
- [ ] Channel 1: Brand/Ads (SMASH social media)
- [ ] Channel 2: Program information content
- [ ] Channel 3: Project information content
- [ ] Channel 4: Audio/Video content
- [ ] Content calendar per channel (daily/weekly/quarterly/yearly cadence)
- [ ] Job needs per channel (link to opportunities)
- [ ] Social media platform tracker (YouTube, TikTok, Instagram, Facebook, LinkedIn, Podcast, Pinterest)

## PHASE 8: Project Pipeline (ASSESS for RAPID)
- [x] Build /projects page (member-only)
- [ ] ASSESS for RAPID phase tracker (Phase 0–5)
- [ ] Phase 0: Pre-Event (event-driven projects)
- [ ] Phase 1: Pre-GRID
- [ ] Phase 2: GRID (cohort presentation)
- [ ] Phase 3: Pre-RAPID
- [ ] Phase 4: RAPID (certification)
- [ ] Phase 5: RFFS (financial structuring)
- [ ] Project cards with property, lead, team, budget, status
- [ ] Milestone tracking per project
- [ ] Street Legends docu-series as example project

## PHASE 9: Events & Scheduling
- [x] Build /events page (member-only)
- [x] Calendar view with property, program, and production events
- [x] Event types: meeting, production, event, deadline, training
- [ ] Create/edit events (admin)
- [ ] Attendee management
- [ ] Integration with BWEN content calendar
- [x] Production schedule view (March 7 & 8 shoot dates as example)

## PHASE 10: Peer Hub Upgrade
- [ ] Update PeerHub with real database-backed profiles
- [ ] Add Mark Berry, Peter Bouers, Veronica Craven, Doug Stanley
- [ ] Remove Jimmy, Vince, Crispin from main listing (move to peer profiles)
- [ ] Skills, availability, hourly rate, Denefits status per member
- [ ] Capabilities statement upload
- [ ] Government-approved capabilities statement format
- [ ] Preferred member application integration

## PHASE 11: Service Agreements
- [ ] Build /agreements page (member-only, admin)
- [ ] Agreement types: service, consulting, management, employment
- [ ] Template generator per type
- [ ] Status tracking (draft, active, paused, completed, terminated)
- [ ] Hourly rate and retainer fields
- [ ] 100 hours/quarter opportunity time tracker
- [ ] Billable hour agreement per cohort member

## PHASE 12: Home Page Rebuild
- [ ] Rebuild Home.tsx to reflect full ecosystem (not just A Moonlit Studio)
- [ ] Hero: Universal Changemakers Series L3C + Eternal Autumn Trust
- [ ] Properties section: all 16 GRID cells with links
- [ ] Programs section: RAPID, RFFS, ASSESS, Beneflts
- [ ] BWEN section: 4-channel network overview
- [ ] Partner registration CTA
- [ ] Member login CTA (The Den)
- [ ] "I'm Living My Best Life!" brand voice

## PHASE 13: Individual Entity Pages
- [ ] /safe-harbor — Safe Harbor Public Services & Resources Center
- [ ] /resolute — Resolute Economic Growth & Recovery Clinic
- [ ] /big-heart — Big Heart ❤️ Solutions
- [ ] /bella-dynamic — Bella Dynamic (authentic living/healing, end-of-life services)
- [ ] /foresight — Foresight Business & Entertainment Solutions
- [ ] /bianchini-consulting — Bianchini Consulting & Advising
- [ ] /moonlit-studio — A Moonlit Studio, Series
- [ ] /global-artist-alliance — TGAA (The Global Artists Alliance Guild)
- [ ] /eternal-autumn — Eternal Autumn Trust (private operating foundation)
- [ ] Each page interconnected showing how entities relate

## PHASE 14: GitHub Update
- [ ] Update Black-plum repo README with current state
- [ ] Push current website code to BellaDynamic/Black-plum
- [ ] Sync MASTER_REFERENCE.md to repo
- [ ] Update strategic documents with current build status
- [ ] Tag current version as v2.0

## PHASE 15: Checkpoint & Deploy
- [ ] Run all vitest tests
- [ ] Save checkpoint
- [ ] Publish via UI Publish button

## PHASE 14: Missing Entities — Full Incorporation
- [ ] Add Black Plum Concierge Agency (with Big Heart Solutions, Safe Harbor, Resolute as branded partners)
- [ ] Add Bella Dynamic (with Authentic Living & Healing, IHSS, grief support, estate planning via Exertus)
- [ ] Add Luna's Garden (sanctuary, healing, community wellness)
- [ ] Add F.U.S.E.D (Fused — program/initiative)
- [ ] Add TGAA — The Global Artists Alliance Guild (entertainment industry one-stop guild)
- [ ] Add iBAIDS — International Business and Individual Development System
- [ ] Add Big Heart Solutions (community impact, crisis support)
- [ ] Add Eternal Autumn Trust (Private Operating Foundation — program fulfillment arm)
- [ ] Add Exertus / Estate Plan X (strategic partnership under Black Plum Concierge)
- [ ] Add Authentic Living & Authentic Healing (co-supported with Bella Dynamic)
- [ ] Update seed data with all new entities
- [ ] Update Properties page to display all entities with correct ecosystem grouping
- [ ] Update Dashboard to show correct count and groupings

## PHASE 15: AI Consulting Services Module
- [ ] Build /consulting page with AI-powered marketing & financial management assistant
- [ ] AI chat interface for marketing strategy questions
- [ ] AI chat interface for financial management consulting
- [ ] Service package selector (marketing, financial, operations, HR, procurement)
- [ ] Needs assessment form (fill-in-the-blanks intake)
- [ ] Add to sidebar navigation

## PHASE 16: Cohort Member Directory
- [ ] Build /cohort page with full member directory
- [ ] Add Mark Berry (AMG), Peter Bouers, Veronica Craven, Doug Stanley
- [ ] Member capabilities statements
- [ ] Availability and preferred agreement status
- [ ] Remove Jimmy, Vince, Crispin from primary team listings

## PHASE 17: Capital Raise Detail View
- [ ] EE Fund Pool Optimizer display
- [ ] 30% development funding requirement tracker per property
- [ ] $40–80K startup cost breakdown per GRID cell
- [ ] Investor-facing campaign status view

## PHASE 18: Visual Polish
- [ ] Slow-pulse illumination effects on dashboard stat cards
- [ ] Glow animation on teal accent elements
- [ ] Mobile optimization pass (no white backgrounds, proper font sizing)

## PHASE 19: Black Plum Concierge Agency Flagship

- [x] Build /black-plum dedicated flagship page
- [x] Membership tiers: Executive Platinum, Gold, Silver, Community Access, No-Income Navigation
- [x] Private client investor intake form with legal disclaimers
- [x] Global project management services showcase (A-Z life navigation)
- [x] Human condition navigation services (individual, family, community, business)
- [ ] Denefits financing integration (pre-approval widget placeholder)
- [x] Service agreements and legal framework display
- [x] Partner showcase: Exertus/Estate Plan X, Big Heart Solutions, Safe Harbor, Resolute Clinic
- [x] Crypto/trade-in/non-traditional payment methods section
- [x] Add /black-plum route to App.tsx and sidebar nav

## PHASE 20: Fix Fabricated Content

- [x] Remove all made-up email addresses from every page
- [x] Remove all fabricated phone numbers from every page
- [x] Remove all made-up names used as placeholders
- [x] Replace with Calendly booking link as primary CTA

## PHASE 20: Fix Fabricated Content (Priority)

- [x] Remove all fabricated emails from Properties.tsx, Services.tsx, TGAA.tsx, BlackPlum.tsx
- [x] Replace all fabricated emails with Calendly booking link
- [x] Remove all fabricated phone numbers from all pages

## PHASE 21: Public-Facing Landing Page Rebuild

- [x] Rebuild Home.tsx as a professional public-facing entry point
- [x] Three audience paths: Industry Partners, Prospective Members, Investors
- [x] UCM mission statement and ecosystem overview visible without login
- [x] Compliant enrollment entry points per brand (consumer law, finance law)
- [x] Single booking/payments CTA routing to Calendly
- [ ] Translate whiteboard content: Properties rollout, BWEN 4-channel structure, social media strategy, revenue waterfall
- [x] No white backgrounds, mobile optimized, dark theme throughout

## PHASE 22: Complex Systems Navigation Support / Financial Hub

- [x] Build /financial-hub page — unified billing, payments, Denefits, service agreements
- [x] Denefits financing terms display (plans over $300/mo, 3/6/9/12 months, no interest, $39 fee)
- [ ] Service agreement generator per member/per project
- [ ] Member plan billing dashboard (active plans, payment status, next due dates)
- [ ] Capital raise financial tracking per GRID cell
- [x] Revenue waterfall display (how money flows through the ecosystem)
- [x] Booking CTA routing to Calendly
- [ ] Client needs assessment form ("fill in the blanks" first session intake)
- [ ] COL/COB (Cost of Living / Cost of Business) calculator per territory
- [x] Financial navigation tiers: Free Member → Institutional/Agency

## PHASE 23: Brand Pages Built

- [x] /safe-harbor — Safe Harbor Public Services & Resources Center
- [x] /resolute — Resolute Economic Growth & Recovery Clinic
- [x] /big-heart — Big Heart Solutions
- [x] /bella-dynamic — Bella Dynamic (authentic living/healing, end-of-life services)
- [x] /lunas-garden — Luna's Garden (sanctuary, healing, community wellness)
- [x] /eternal-autumn — Eternal Autumn Trust (private operating foundation)
- [x] /ibaids — iBAIDS (International Business and Individual Development System)
- [x] All brand pages interconnected showing how entities relate
- [x] All brand pages added to App.tsx routing
- [x] DashboardLayout sidebar updated with grouped navigation (Navigation, Operations, Brands, Member)
