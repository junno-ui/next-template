export type MarketingPageData = {
  path: string
  title: string
  eyebrow: string
  description: string
  icon: string
  badge: string
  stats: Array<{
    label: string
    value: string
    detail: string
  }>
  features: Array<{
    title: string
    description: string
    icon: string
  }>
  workflow: Array<{
    title: string
    description: string
  }>
  primaryCta: {
    label: string
    href: string
  }
  secondaryCta: {
    label: string
    href: string
  }
}

export const marketingPages: Record<string, MarketingPageData> = {
  "products": {
    path: "products",
    title: "A product suite designed to look sharp and move fast.",
    eyebrow: "Product Platform",
    description:
      "Explore an integrated workspace for analytics, automation, and executive reporting with premium presentation built into every workflow.",
    icon: "solar:box-minimalistic-bold-duotone",
    badge: "New release orchestration",
    stats: [
      { label: "Dashboards launched", value: "148", detail: "Across growth, ops, and finance teams" },
      { label: "Time to insight", value: "4 min", detail: "From raw data to decision-ready view" },
      { label: "Automation coverage", value: "83%", detail: "Recurring marketing tasks automated" },
    ],
    features: [
      { title: "Unified workspace", description: "Move from campaign health to pipeline impact without context switching.", icon: "solar:widget-4-bold-duotone" },
      { title: "Premium presentation", description: "Use polished views that feel investor-ready in every stakeholder meeting.", icon: "solar:magic-stick-3-bold-duotone" },
      { title: "Operational clarity", description: "See bottlenecks, trend lines, and next actions in one system.", icon: "solar:chart-square-bold-duotone" },
      { title: "Team alignment", description: "Give product, sales, and marketing one source of truth for priorities.", icon: "solar:users-group-rounded-bold-duotone" },
    ],
    workflow: [
      { title: "Connect", description: "Bring campaign, revenue, and customer signals into a single operating layer." },
      { title: "Interpret", description: "Turn noisy metrics into a clear story with guided insights and visual hierarchy." },
      { title: "Act", description: "Launch automations and share premium reports without rebuilding the same deck every week." },
    ],
    primaryCta: { label: "Talk to sales", href: "/contact" },
    secondaryCta: { label: "View pricing", href: "/pricing" },
  },
  "products/analytics": {
    path: "products/analytics",
    title: "Analytics that make revenue conversations feel obvious.",
    eyebrow: "Analytics",
    description:
      "Track growth, funnel conversion, and customer behavior inside a cinematic dashboard experience that helps teams decide faster.",
    icon: "solar:chart-2-bold-duotone",
    badge: "AI signal scoring",
    stats: [
      { label: "Insight refresh", value: "Live", detail: "Streaming updates for campaign and sales health" },
      { label: "Executive reports", value: "12x", detail: "Faster weekly review cycles" },
      { label: "Conversion lift", value: "+18%", detail: "Teams react sooner to trend shifts" },
    ],
    features: [
      { title: "Funnel intelligence", description: "Understand where deals stall and which campaigns create qualified demand.", icon: "solar:graph-up-bold-duotone" },
      { title: "Signal layering", description: "Blend product usage, CRM activity, and attribution into one premium view.", icon: "solar:pulse-2-bold-duotone" },
      { title: "Board-ready exports", description: "Present clean, elegant summaries without rebuilding slides by hand.", icon: "solar:document-text-bold-duotone" },
      { title: "Alerting that matters", description: "Focus only on changes that deserve a decision, not dashboard noise.", icon: "solar:bell-bold-duotone" },
    ],
    workflow: [
      { title: "Model", description: "Map your funnel, revenue goals, and lifecycle moments." },
      { title: "Monitor", description: "Track every KPI through layered visual dashboards and anomaly detection." },
      { title: "Mobilize", description: "Share action-ready narratives with teams before momentum is lost." },
    ],
    primaryCta: { label: "Book analytics demo", href: "/contact" },
    secondaryCta: { label: "See all products", href: "/products" },
  },
  "products/automation": {
    path: "products/automation",
    title: "Automation that feels elegant, not robotic.",
    eyebrow: "Automation",
    description:
      "Build refined workflows for lead routing, lifecycle messaging, and internal approvals while keeping every interaction human and timely.",
    icon: "solar:magic-stick-3-bold-duotone",
    badge: "Workflow studio",
    stats: [
      { label: "Flows automated", value: "320+", detail: "Across acquisition, onboarding, and lifecycle" },
      { label: "Hours saved", value: "41/wk", detail: "For one mid-market marketing team" },
      { label: "Error reduction", value: "-62%", detail: "Cleaner execution across every touchpoint" },
    ],
    features: [
      { title: "Visual builders", description: "Launch sophisticated automations with guardrails and clear branch logic.", icon: "solar:hierarchy-square-3-bold-duotone" },
      { title: "Human approvals", description: "Keep premium brand control with smart checkpoints and review flows.", icon: "solar:shield-check-bold-duotone" },
      { title: "Lifecycle timing", description: "Deliver messages when customers are ready, not when a timer fires.", icon: "solar:clock-circle-bold-duotone" },
      { title: "Operational confidence", description: "Trace every trigger, action, and decision with clean audit visibility.", icon: "solar:eye-bold-duotone" },
    ],
    workflow: [
      { title: "Design", description: "Map triggers and outcomes with a workflow canvas your whole team can read." },
      { title: "Approve", description: "Protect tone, compliance, and timing before anything goes live." },
      { title: "Scale", description: "Clone top-performing flows and adapt them to every market segment." },
    ],
    primaryCta: { label: "Start a workflow review", href: "/contact" },
    secondaryCta: { label: "Explore reports", href: "/products/reports" },
  },
  "products/reports": {
    path: "products/reports",
    title: "Reports that feel as polished as your strategy.",
    eyebrow: "Reporting",
    description:
      "Generate premium reports for clients, founders, and executive teams with clearer narratives, stronger visuals, and less manual work.",
    icon: "solar:document-text-bold-duotone",
    badge: "Board-ready layouts",
    stats: [
      { label: "Report prep time", value: "-78%", detail: "From spreadsheet cleanup to polished deck" },
      { label: "Share rate", value: "91%", detail: "Stakeholders actually read and forward the updates" },
      { label: "Template variants", value: "24", detail: "Tailored for agencies, SaaS, and enterprise teams" },
    ],
    features: [
      { title: "Narrative blocks", description: "Turn metric changes into explainable stories with better context.", icon: "solar:notes-bold-duotone" },
      { title: "Brand-safe layouts", description: "Keep typography, spacing, and visual rhythm consistently premium.", icon: "solar:palette-round-bold-duotone" },
      { title: "Live data snapshots", description: "Capture the right numbers without rebuilding charts by hand.", icon: "solar:database-bold-duotone" },
      { title: "Fast approvals", description: "Review, annotate, and sign off with fewer last-minute edits.", icon: "solar:clipboard-check-bold-duotone" },
    ],
    workflow: [
      { title: "Compose", description: "Choose a premium structure matched to the audience and the decision at hand." },
      { title: "Customize", description: "Add commentary, benchmarks, and tailored visual emphasis." },
      { title: "Deliver", description: "Share a link or export a clean final report in minutes." },
    ],
    primaryCta: { label: "Preview reporting flow", href: "/contact" },
    secondaryCta: { label: "See analytics", href: "/products/analytics" },
  },
  "solutions": {
    path: "solutions",
    title: "Solutions tailored to the way modern teams actually work.",
    eyebrow: "Solutions",
    description:
      "From startups chasing product-market fit to enterprise teams managing complexity, every workflow is tuned for speed, polish, and control.",
    icon: "solar:lamp-charge-bold-duotone",
    badge: "Role-based experiences",
    stats: [
      { label: "Teams supported", value: "7", detail: "Growth, RevOps, CS, finance, product, sales, execs" },
      { label: "Launch speed", value: "2.4x", detail: "Faster rollout with guided templates" },
      { label: "Adoption score", value: "94%", detail: "Cleaner UX makes cross-team rollout easier" },
    ],
    features: [
      { title: "Segmented journeys", description: "Deliver the right setup and reporting model for each team shape.", icon: "solar:layers-bold-duotone" },
      { title: "Operational maturity", description: "Support lean teams today and more complex governance tomorrow.", icon: "solar:stairs-bold-duotone" },
      { title: "Premium onboarding", description: "Make first-time setup feel intentional, guided, and executive-friendly.", icon: "solar:rocket-bold-duotone" },
      { title: "Cross-functional trust", description: "Align stakeholders with layouts and language they can instantly read.", icon: "solar:hand-shake-bold-duotone" },
    ],
    workflow: [
      { title: "Assess", description: "Choose the delivery model that matches your team size and motion." },
      { title: "Configure", description: "Activate tailored templates, metrics, and workflow layers." },
      { title: "Expand", description: "Add teams and governance without losing speed or elegance." },
    ],
    primaryCta: { label: "Find your fit", href: "/contact" },
    secondaryCta: { label: "Compare pricing", href: "/pricing" },
  },
  "solutions/startups": {
    path: "solutions/startups",
    title: "For startups that need premium execution before headcount catches up.",
    eyebrow: "Startup Solution",
    description:
      "Move fast with lightweight workflows, clean analytics, and investor-ready reporting that makes a small team look incredibly sharp.",
    icon: "solar:rocket-bold-duotone",
    badge: "Built for lean teams",
    stats: [
      { label: "Weeks to launch", value: "2", detail: "From setup to executive-ready reporting" },
      { label: "Founder visibility", value: "100%", detail: "Key signals surfaced in one place" },
      { label: "Tool sprawl reduced", value: "-5", detail: "Fewer disconnected tools to manage" },
    ],
    features: [
      { title: "Fast setup", description: "Launch your system before process debt starts compounding.", icon: "solar:bolt-bold-duotone" },
      { title: "Investor-ready metrics", description: "Give founders and advisors premium, reliable update material.", icon: "solar:chart-square-bold-duotone" },
      { title: "Lean team workflows", description: "Keep approvals simple while preserving quality and brand confidence.", icon: "solar:users-group-rounded-bold-duotone" },
      { title: "Scalable foundations", description: "Adopt a system that still works after your next funding round.", icon: "solar:shield-up-bold-duotone" },
    ],
    workflow: [
      { title: "Launch", description: "Stand up the core dashboards and reporting rituals fast." },
      { title: "Learn", description: "Track the early signals that reveal product and channel traction." },
      { title: "Level up", description: "Add automation only when it actually saves time and improves execution." },
    ],
    primaryCta: { label: "Talk startup setup", href: "/contact" },
    secondaryCta: { label: "See agencies plan", href: "/solutions/agencies" },
  },
  "solutions/agencies": {
    path: "solutions/agencies",
    title: "For agencies that want client reporting to feel unmistakably premium.",
    eyebrow: "Agency Solution",
    description:
      "Deliver polished dashboards, repeatable operations, and cleaner client communication without adding more manual status work.",
    icon: "solar:users-group-rounded-bold-duotone",
    badge: "Client-ready reporting",
    stats: [
      { label: "Client packs sent", value: "1.2k", detail: "Every month with brand-safe consistency" },
      { label: "Prep time reduced", value: "67%", detail: "Less formatting, more strategic review" },
      { label: "Renewal confidence", value: "+22%", detail: "Clearer reporting improves client trust" },
    ],
    features: [
      { title: "White-label polish", description: "Present performance in a way that reinforces your agency value.", icon: "solar:palette-round-bold-duotone" },
      { title: "Reusable frameworks", description: "Standardize great delivery without making every client feel identical.", icon: "solar:copy-bold-duotone" },
      { title: "Stakeholder views", description: "Serve operators, CMOs, and founders with the right level of detail.", icon: "solar:user-id-bold-duotone" },
      { title: "Clear escalation paths", description: "Spot risky accounts sooner and intervene with confidence.", icon: "solar:danger-triangle-bold-duotone" },
    ],
    workflow: [
      { title: "Template", description: "Build a premium reporting baseline for every account type." },
      { title: "Tailor", description: "Adjust insight depth, branding, and recommendations for each client." },
      { title: "Retain", description: "Create calmer reviews and stronger trust with cleaner visibility." },
    ],
    primaryCta: { label: "Design agency workflow", href: "/contact" },
    secondaryCta: { label: "See reports", href: "/products/reports" },
  },
  "solutions/enterprise": {
    path: "solutions/enterprise",
    title: "For enterprise teams balancing polish, scale, and governance.",
    eyebrow: "Enterprise Solution",
    description:
      "Operate across regions, stakeholders, and approval layers with premium workflows that still feel fast and understandable.",
    icon: "solar:buildings-2-bold-duotone",
    badge: "Governance-ready operations",
    stats: [
      { label: "Regional teams", value: "18", detail: "Supported inside one shared system" },
      { label: "Approval latency", value: "-43%", detail: "Faster coordination across complex teams" },
      { label: "Compliance confidence", value: "99.9%", detail: "Auditability built into the workflow" },
    ],
    features: [
      { title: "Layered permissions", description: "Support local autonomy while protecting central standards.", icon: "solar:lock-keyhole-bold-duotone" },
      { title: "Executive clarity", description: "Give leadership premium summaries without operational overload.", icon: "solar:crown-bold-duotone" },
      { title: "Scalable controls", description: "Keep automation and reporting clean under governance pressure.", icon: "solar:shield-check-bold-duotone" },
      { title: "Cross-market visibility", description: "See what is working across teams without flattening nuance.", icon: "solar:global-bold-duotone" },
    ],
    workflow: [
      { title: "Standardize", description: "Set rules, templates, and governance layers centrally." },
      { title: "Delegate", description: "Empower teams with the right boundaries and premium defaults." },
      { title: "Measure", description: "Track outcomes globally while keeping execution locally relevant." },
    ],
    primaryCta: { label: "Discuss enterprise needs", href: "/contact" },
    secondaryCta: { label: "Explore solutions", href: "/solutions" },
  },
  "pricing": {
    path: "pricing",
    title: "Transparent pricing for teams that care about speed and presentation.",
    eyebrow: "Pricing",
    description:
      "Choose a plan built for your stage, then scale features, reporting quality, and collaboration without losing visual polish.",
    icon: "solar:tag-price-bold-duotone",
    badge: "No setup confusion",
    stats: [
      { label: "Starter", value: "$29", detail: "For lean teams building momentum" },
      { label: "Growth", value: "$99", detail: "For scaled workflows and automation" },
      { label: "Enterprise", value: "Custom", detail: "For governance, scale, and services" },
    ],
    features: [
      { title: "Simple packaging", description: "Understand what changes across plans without sales-call friction.", icon: "solar:square-transfer-horizontal-bold-duotone" },
      { title: "Premium defaults", description: "Even the first plan feels polished, useful, and complete.", icon: "solar:star-bold-duotone" },
      { title: "Upgrade paths", description: "Add deeper reporting, access, and workflow power only when needed.", icon: "solar:chart-square-bold-duotone" },
      { title: "Human support", description: "Get thoughtful onboarding help instead of generic setup instructions.", icon: "solar:headphones-round-bold-duotone" },
    ],
    workflow: [
      { title: "Choose", description: "Pick the plan matched to your current team shape." },
      { title: "Launch", description: "Start with a premium baseline and guided onboarding." },
      { title: "Expand", description: "Add control layers and advanced workflow power as you grow." },
    ],
    primaryCta: { label: "Contact sales", href: "/contact" },
    secondaryCta: { label: "Back to home", href: "/" },
  },
  "about": {
    path: "about",
    title: "We build software that makes teams feel more composed and capable.",
    eyebrow: "About NexusUI",
    description:
      "NexusUI exists to close the gap between operational power and presentation quality so fast-moving teams can look as sharp as they work.",
    icon: "solar:medal-star-bold-duotone",
    badge: "Design-led product thinking",
    stats: [
      { label: "Design principle", value: "Clarity", detail: "Every interaction should reduce noise" },
      { label: "Product focus", value: "Execution", detail: "Workflows must earn their complexity" },
      { label: "North star", value: "Confidence", detail: "Teams should feel sharper after every session" },
    ],
    features: [
      { title: "Designed for operators", description: "We care about the details that make daily work calmer and faster.", icon: "solar:case-round-bold-duotone" },
      { title: "Presentation matters", description: "Great products do not stop at functionality; they shape perception too.", icon: "solar:gallery-wide-bold-duotone" },
      { title: "Premium systems", description: "We prefer cohesive systems over disconnected feature piles.", icon: "solar:layers-minimalistic-bold-duotone" },
      { title: "Refined iteration", description: "Every screen should feel edited, intentional, and useful.", icon: "solar:tuning-2-bold-duotone" },
    ],
    workflow: [
      { title: "Study", description: "Observe how high-output teams work under pressure." },
      { title: "Simplify", description: "Strip away friction until the next action is obvious." },
      { title: "Elevate", description: "Wrap it in visuals and motion that reinforce trust." },
    ],
    primaryCta: { label: "View careers", href: "/careers" },
    secondaryCta: { label: "Contact us", href: "/contact" },
  },
  "careers": {
    path: "careers",
    title: "Join a team obsessed with making ambitious products feel beautifully clear.",
    eyebrow: "Careers",
    description:
      "We value sharp thinking, visual taste, and a bias toward shipping refined work that users can feel immediately.",
    icon: "solar:bag-smile-bold-duotone",
    badge: "Remote-first culture",
    stats: [
      { label: "Hiring focus", value: "Product + Design", detail: "Roles that shape the quality bar directly" },
      { label: "Work style", value: "Async", detail: "Deep work, written clarity, and fast decisions" },
      { label: "Team ritual", value: "Critique", detail: "We review details until the product feels right" },
    ],
    features: [
      { title: "High craft", description: "Work with people who notice interaction details and care about them deeply.", icon: "solar:pen-bold-duotone" },
      { title: "Clear ownership", description: "Own meaningful product surfaces end to end, not tiny disconnected tickets.", icon: "solar:target-bold-duotone" },
      { title: "Respectful pace", description: "Move fast through clarity, not chaos or performative urgency.", icon: "solar:stopwatch-bold-duotone" },
      { title: "Real impact", description: "Your decisions visibly improve how teams operate every day.", icon: "solar:fire-bold-duotone" },
    ],
    workflow: [
      { title: "Apply", description: "Share the work and thinking you are most proud of." },
      { title: "Meet", description: "Talk through craft, collaboration, and how you make decisions." },
      { title: "Build", description: "Help raise the product bar with us week after week." },
    ],
    primaryCta: { label: "Reach our team", href: "/contact" },
    secondaryCta: { label: "Learn about us", href: "/about" },
  },
  "contact": {
    path: "contact",
    title: "Talk to the team shaping premium growth workflows.",
    eyebrow: "Contact",
    description:
      "Whether you need a walkthrough, pricing guidance, or a custom setup conversation, we will help you find the right fit quickly.",
    icon: "solar:chat-round-dots-bold-duotone",
    badge: "Fast response team",
    stats: [
      { label: "Response time", value: "< 1 day", detail: "For product, sales, and onboarding questions" },
      { label: "Demo format", value: "Live", detail: "Tailored to your workflow and team shape" },
      { label: "Setup support", value: "Included", detail: "For premium onboarding and launch planning" },
    ],
    features: [
      { title: "Personal walkthroughs", description: "See the product applied to your specific reporting and workflow needs.", icon: "solar:monitor-bold-duotone" },
      { title: "Plan guidance", description: "Get direct advice on the right plan instead of generic upsell paths.", icon: "solar:document-add-bold-duotone" },
      { title: "Migration support", description: "Move from scattered tools to a cleaner operating system with less friction.", icon: "solar:transfer-horizontal-bold-duotone" },
      { title: "Thoughtful onboarding", description: "Start with a setup that looks polished and works from day one.", icon: "solar:rocket-2-bold-duotone" },
    ],
    workflow: [
      { title: "Share goals", description: "Tell us what feels messy, slow, or hard to present well today." },
      { title: "See the fit", description: "We map the product to your team, workflows, and reporting style." },
      { title: "Launch with confidence", description: "Move into onboarding with a clear premium implementation path." },
    ],
    primaryCta: { label: "Email sales@nexusui.dev", href: "mailto:sales@nexusui.dev" },
    secondaryCta: { label: "Review pricing", href: "/pricing" },
  },
  "terms": {
    path: "terms",
    title: "Terms that stay readable even when the topic is serious.",
    eyebrow: "Terms",
    description:
      "We believe legal content should be clear, structured, and easy to review, just like the rest of the product experience.",
    icon: "solar:document-bold-duotone",
    badge: "Readable by design",
    stats: [
      { label: "Language goal", value: "Plain", detail: "Reduce ambiguity where possible" },
      { label: "Review flow", value: "Structured", detail: "Clear sections and responsibilities" },
      { label: "Policy style", value: "Updated", detail: "Maintained as the product evolves" },
    ],
    features: [
      { title: "Clear obligations", description: "Understand what the platform provides and what customers manage.", icon: "solar:clipboard-text-bold-duotone" },
      { title: "Commercial clarity", description: "Review billing, renewals, and plan usage expectations quickly.", icon: "solar:wallet-money-bold-duotone" },
      { title: "Security expectations", description: "See where platform responsibility ends and customer controls begin.", icon: "solar:shield-bold-duotone" },
      { title: "Support context", description: "Know how assistance and service commitments are handled.", icon: "solar:headphones-round-bold-duotone" },
    ],
    workflow: [
      { title: "Read", description: "Move through clean sections without legal-content fatigue." },
      { title: "Review", description: "Check the responsibilities relevant to your team and plan." },
      { title: "Proceed", description: "Adopt the product with clearer expectations and less uncertainty." },
    ],
    primaryCta: { label: "Contact legal", href: "/contact" },
    secondaryCta: { label: "Privacy policy", href: "/privacy" },
  },
  "privacy": {
    path: "privacy",
    title: "Privacy practices explained with more care and less friction.",
    eyebrow: "Privacy",
    description:
      "Understand what data is collected, how it is used, and how we design the product to support responsible data handling.",
    icon: "solar:lock-keyhole-bold-duotone",
    badge: "Privacy-first operations",
    stats: [
      { label: "Data stance", value: "Minimal", detail: "Collect only what supports the service well" },
      { label: "Access model", value: "Scoped", detail: "Permissions should match responsibility" },
      { label: "Review cycle", value: "Ongoing", detail: "Policies evolve with the platform" },
    ],
    features: [
      { title: "Transparent handling", description: "See what data categories are used and why they matter.", icon: "solar:database-bold-duotone" },
      { title: "Clear controls", description: "Understand retention, access, and request processes quickly.", icon: "solar:settings-bold-duotone" },
      { title: "Safer defaults", description: "Product choices bias toward restraint, clarity, and trust.", icon: "solar:shield-check-bold-duotone" },
      { title: "User respect", description: "Better UX includes respecting what users share with your platform.", icon: "solar:heart-angle-bold-duotone" },
    ],
    workflow: [
      { title: "Discover", description: "Review the data flows that matter most to your team." },
      { title: "Control", description: "Understand available privacy and access management options." },
      { title: "Trust", description: "Adopt the platform with clearer expectations and better confidence." },
    ],
    primaryCta: { label: "Ask a privacy question", href: "/contact" },
    secondaryCta: { label: "Cookie policy", href: "/cookies" },
  },
  "cookies": {
    path: "cookies",
    title: "Cookie usage presented with the same clarity as the product.",
    eyebrow: "Cookie Policy",
    description:
      "Review the small pieces of data that support analytics, preferences, and core product behavior with a cleaner explanation of tradeoffs.",
    icon: "solar:cookie-bold-duotone",
    badge: "Transparent tracking",
    stats: [
      { label: "Categories", value: "3", detail: "Essential, analytics, and experience" },
      { label: "Control model", value: "Clear", detail: "Know what is necessary and what is optional" },
      { label: "Goal", value: "Trust", detail: "No dark patterns or vague policy language" },
    ],
    features: [
      { title: "Essential cookies", description: "Support sign-in, security, and core application behavior.", icon: "solar:shield-bold-duotone" },
      { title: "Analytics cookies", description: "Help us understand usage patterns and improve UX quality.", icon: "solar:pie-chart-3-bold-duotone" },
      { title: "Preference cookies", description: "Remember choices that make the interface feel more personal.", icon: "solar:tuning-square-bold-duotone" },
      { title: "Better transparency", description: "Explain data purpose in language real teams can actually read.", icon: "solar:eye-bold-duotone" },
    ],
    workflow: [
      { title: "Review", description: "See the categories and why they exist." },
      { title: "Decide", description: "Understand what is required versus optional." },
      { title: "Continue", description: "Use the platform with better visibility and control." },
    ],
    primaryCta: { label: "Contact support", href: "/contact" },
    secondaryCta: { label: "Review privacy", href: "/privacy" },
  },
}

export const marketingPagePaths = Object.keys(marketingPages)
