export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  featured?: boolean
  badge: string
  author: {
    name: string
    role: string
    avatar: string
  }
  highlights: string[]
  content: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "marketing-automation-2025",
    title: "The Future of Marketing Automation in 2025",
    excerpt:
      "Discover how AI-powered automation is reshaping the way ambitious teams plan, execute, and measure campaigns with far less operational drag.",
    date: "Apr 20, 2025",
    readTime: "8 min read",
    category: "Automation",
    featured: true,
    badge: "AI workflow design",
    author: {
      name: "Sarah Chen",
      role: "Lifecycle Strategy Lead",
      avatar: "SC",
    },
    highlights: [
      "Automation is shifting from static logic trees to adaptive decision systems.",
      "Teams now use AI to accelerate campaign production, not replace strategic judgment.",
      "Operational clarity matters as much as automation speed when systems scale.",
    ],
    content: [
      "Marketing automation has evolved far beyond simple email drips. In 2025, the strongest teams use orchestration layers that respond to behavior, product context, and commercial intent in near real time.",
      "The biggest shift is from rule-based automation to predictive automation. Instead of building rigid branches for every possible outcome, teams are using systems that interpret patterns across dozens of signals and suggest the next best step with more confidence.",
      "Generative AI is also changing campaign production. Teams can now describe a lifecycle goal, a segment, and a tone, then generate first-draft copy, creative direction, and workflow scaffolding in minutes rather than days.",
      "That does not make human operators less important. The premium teams still win on editorial judgment, sequencing, and restraint. Automation handles repetition, while humans decide which moments deserve nuance and brand care.",
      "As the tooling matures, the real differentiator becomes orchestration quality. Teams that build elegant, understandable systems will outperform those that simply automate more steps without improving the user experience.",
    ],
  },
  {
    slug: "data-driven-decisions",
    title: "Making Data-Driven Decisions That Actually Work",
    excerpt:
      "Learn the framework strong teams use to turn raw analytics into sharper business decisions instead of noise-heavy reporting rituals.",
    date: "Apr 15, 2025",
    readTime: "6 min read",
    category: "Analytics",
    badge: "Decision systems",
    author: {
      name: "Marcus Johnson",
      role: "Growth Analytics Director",
      avatar: "MJ",
    },
    highlights: [
      "Define success before launch so analysis does not become retroactive storytelling.",
      "Run a consistent review cadence instead of reacting to every metric movement.",
      "Data literacy across the team creates faster and calmer decision cycles.",
    ],
    content: [
      "Every marketing team says it wants to be data-driven, but many still operate on instinct decorated with dashboards. The gap is rarely tooling. It is the absence of a usable framework for turning numbers into decisions.",
      "The first move is defining success before the campaign starts. When teams choose meaningful targets tied to revenue, retention, or qualified pipeline, the eventual analysis becomes far less subjective.",
      "The second move is building a review cadence. Strong organizations look at the right metrics weekly, zoom out monthly, and revisit assumptions quarterly. Consistency matters more than checking the dashboard every hour.",
      "Equally important is creating a culture where data can challenge intuition. If metrics are only welcome when they confirm leadership's prior belief, reporting becomes political theater rather than decision support.",
      "The teams that improve fastest are the ones where analytics can travel. When marketers, operators, and leaders all know how to read trends and connect them to action, better decisions stop depending on a single specialist.",
    ],
  },
  {
    slug: "email-campaign-optimization",
    title: "Email Campaign Optimization: A Complete Guide",
    excerpt:
      "From timing and segmentation to copy rhythm and CTA structure, this guide covers the levers that actually improve opens and conversions.",
    date: "Apr 10, 2025",
    readTime: "10 min read",
    category: "Email",
    badge: "Conversion craft",
    author: {
      name: "Priya Nair",
      role: "Email Experience Manager",
      avatar: "PN",
    },
    highlights: [
      "A strong message hierarchy outperforms clever wording without structure.",
      "Segmentation should make the email feel more relevant, not more fragmented.",
      "Testing works best when teams isolate one decision at a time.",
    ],
    content: [
      "Email performance rarely improves because of one magic trick. The biggest gains usually come from refining several small decisions that shape clarity, timing, and relevance together.",
      "Start with structure. A message with a clean opening, one obvious value proposition, and a focused call to action almost always beats a longer email trying to do too much at once.",
      "Segmentation matters, but only when it improves relevance in a real way. Splitting an audience into ten nearly identical groups adds operational overhead without improving the message experience.",
      "Testing is valuable when the question is clear. Compare one subject line idea, one CTA pattern, or one send-time hypothesis rather than changing half the email and calling the result a learning.",
      "Over time, the strongest teams build a library of patterns that consistently work, then apply that knowledge with taste. Optimization becomes less about hacks and more about reliable editorial discipline.",
    ],
  },
  {
    slug: "customer-segmentation-playbook",
    title: "The Customer Segmentation Playbook",
    excerpt:
      "A practical approach to building sharper audience segments that improve relevance, engagement, and long-term customer value.",
    date: "Apr 5, 2025",
    readTime: "7 min read",
    category: "Strategy",
    badge: "Audience design",
    author: {
      name: "Lina Ortega",
      role: "Customer Insights Lead",
      avatar: "LO",
    },
    highlights: [
      "Useful segments are defined by actionability, not novelty.",
      "Behavioral and lifecycle signals usually outperform static demographic slices.",
      "Segmentation should reduce friction for both customers and internal teams.",
    ],
    content: [
      "Segmentation is often treated like a documentation exercise, but its value comes from what it allows a team to actually do better. A segment only matters if it changes messaging, timing, or priority.",
      "The most useful segments tend to combine behavior, intent, and lifecycle stage. These patterns reveal what a customer is trying to accomplish right now, which is often more useful than broad profile traits alone.",
      "Teams should also resist creating overly intricate frameworks too early. If a segment is difficult to explain, operationalize, or measure, it usually adds complexity faster than it adds relevance.",
      "When done well, segmentation helps every part of the growth system feel more thoughtful. Content feels better matched, handoffs feel more informed, and reporting becomes easier to interpret.",
      "The goal is not maximum granularity. It is better judgment. Premium segmentation creates a clearer path to action rather than a larger taxonomy to maintain.",
    ],
  },
  {
    slug: "performance-metrics-that-matter",
    title: "Performance Metrics That Actually Matter",
    excerpt:
      "Stop centering vanity metrics and focus on the numbers that reveal momentum, efficiency, and commercial quality.",
    date: "Mar 28, 2025",
    readTime: "5 min read",
    category: "Analytics",
    badge: "Signal clarity",
    author: {
      name: "Darren Lee",
      role: "Revenue Operations Partner",
      avatar: "DL",
    },
    highlights: [
      "Metrics should explain momentum, not just summarize activity.",
      "Leading indicators matter when they clearly connect to commercial outcomes.",
      "A smaller metric set often improves alignment across teams.",
    ],
    content: [
      "Many dashboards fail because they optimize for completeness instead of clarity. Teams end up reviewing dozens of numbers without a shared sense of which ones should actually influence a decision.",
      "A useful metric stack usually includes a few leading indicators, a few quality signals, and a few commercial outcomes. That combination helps teams understand both early momentum and eventual business impact.",
      "Vanity metrics are not always useless, but they become dangerous when they dominate the conversation. Reach, traffic, or opens only matter when they connect to pipeline quality, retention, or revenue efficiency.",
      "The most effective reporting systems also show change over time. A number in isolation rarely tells a compelling story, but a well-framed trend can quickly reveal whether the team is improving or drifting.",
      "Better metrics create better conversations. When everyone understands what the team values and why, planning becomes sharper and post-mortems become more honest.",
    ],
  },
  {
    slug: "multi-channel-marketing",
    title: "Building a Multi-Channel Marketing Engine",
    excerpt:
      "Coordinate email, paid, content, and product signals into one coherent system without making execution feel chaotic.",
    date: "Mar 22, 2025",
    readTime: "9 min read",
    category: "Strategy",
    badge: "Channel orchestration",
    author: {
      name: "Amara Wells",
      role: "Integrated Campaigns Lead",
      avatar: "AW",
    },
    highlights: [
      "Multi-channel success depends on consistency of narrative, not channel volume.",
      "The handoff between teams matters as much as the campaign idea itself.",
      "A shared operating rhythm keeps channels coordinated without over-managing them.",
    ],
    content: [
      "A multi-channel engine is not just a collection of active channels. It is a coordinated system where timing, message hierarchy, and intent stay aligned as a customer moves between touchpoints.",
      "The most common failure is fragmentation. One team runs paid around awareness, another sends lifecycle messages about activation, and content publishes thought leadership with no connective tissue across any of it.",
      "Strong teams solve this by establishing campaign narratives that travel well. Each channel adapts the message to its format, but the commercial story remains coherent and recognizable.",
      "Operational rhythm matters too. Shared planning, clear ownership, and a simple feedback loop prevent channels from drifting or duplicating work.",
      "When a multi-channel system is working, the customer does not experience internal complexity. They simply feel that the brand is timely, relevant, and unusually well coordinated.",
    ],
  },
]

export const blogPostMap = Object.fromEntries(
  blogPosts.map((post) => [post.slug, post])
) as Record<string, BlogPost>

export function getFeaturedPost() {
  return blogPosts.find((post) => post.featured) ?? blogPosts[0]
}

export function getRelatedPosts(slug: string, limit = 3) {
  return blogPosts.filter((post) => post.slug !== slug).slice(0, limit)
}
