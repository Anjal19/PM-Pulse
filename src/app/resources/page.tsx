import { ExternalLink, BookOpen, Video, FileText, Link2, Headphones, Layers } from "lucide-react";

const resourceCategories = [
  {
    icon: BookOpen,
    label: "Books",
    color: "bg-blue-50 text-blue-600",
    resources: [
      {
        title: "Inspired",
        by: "Marty Cagan",
        description: "The definitive guide to building products customers love. Required reading for every aspiring PM.",
        level: "Beginner",
        free: false,
      },
      {
        title: "The Lean Startup",
        by: "Eric Ries",
        description: "How continuous innovation creates radically successful businesses. Foundational PM mindset.",
        level: "Beginner",
        free: false,
      },
      {
        title: "Continuous Discovery Habits",
        by: "Teresa Torres",
        description: "Practical frameworks for making product discovery a daily habit, not a one-time event.",
        level: "Intermediate",
        free: false,
      },
      {
        title: "Shape Up",
        by: "Basecamp / Ryan Singer",
        description: "A modern approach to product development cycles — stop running in circles and ship finished work.",
        level: "Intermediate",
        free: true,
      },
    ],
  },
  {
    icon: Video,
    label: "Videos & Courses",
    color: "bg-red-50 text-red-600",
    resources: [
      {
        title: "PM School — YouTube",
        by: "Arpit Mehta",
        description: "Free video walkthroughs of PM case interviews, frameworks, and career advice.",
        level: "Beginner",
        free: true,
      },
      {
        title: "Become a Product Manager",
        by: "Udemy / Cole Mercer",
        description: "A comprehensive course covering the full PM skillset from zero to job-ready.",
        level: "Beginner",
        free: false,
      },
      {
        title: "Product Management Fundamentals",
        by: "LinkedIn Learning",
        description: "Short, digestible video modules on core PM concepts and day-to-day workflows.",
        level: "Beginner",
        free: false,
      },
    ],
  },
  {
    icon: FileText,
    label: "Templates",
    color: "bg-orange-50 text-orange-600",
    resources: [
      {
        title: "Product Requirements Doc (PRD)",
        by: "PMPulse",
        description: "A clean, battle-tested PRD template with instructions for each section.",
        level: "Beginner",
        free: true,
      },
      {
        title: "Prioritization Matrix (RICE)",
        by: "PMPulse",
        description: "Score your feature backlog using Reach, Impact, Confidence, and Effort.",
        level: "Beginner",
        free: true,
      },
      {
        title: "Roadmap Template (Quarterly)",
        by: "PMPulse",
        description: "A Notion-based quarterly roadmap with status, owners, and success metrics built in.",
        level: "Intermediate",
        free: true,
      },
    ],
  },
  {
    icon: Headphones,
    label: "Podcasts",
    color: "bg-purple-50 text-purple-600",
    resources: [
      {
        title: "Lenny's Podcast",
        by: "Lenny Rachitsky",
        description: "Weekly conversations with world-class product leaders. Best-in-class for career advice.",
        level: "All Levels",
        free: true,
      },
      {
        title: "This is Product Management",
        by: "Mike Fishbein",
        description: "Interviews with PMs on topics ranging from discovery to go-to-market.",
        level: "All Levels",
        free: true,
      },
      {
        title: "The Product Podcast",
        by: "Product School",
        description: "Short episodes from experienced PMs at top companies on specific PM skills.",
        level: "All Levels",
        free: true,
      },
    ],
  },
  {
    icon: Link2,
    label: "Communities",
    color: "bg-green-50 text-green-600",
    resources: [
      {
        title: "Lenny's Newsletter",
        by: "Lenny Rachitsky",
        description: "The most-read PM newsletter. Benchmarks, frameworks, and career guidance every week.",
        level: "All Levels",
        free: false,
      },
      {
        title: "Product Hunt",
        by: "Product Hunt",
        description: "See what's shipping. Great for developing product taste and keeping up with trends.",
        level: "All Levels",
        free: true,
      },
      {
        title: "r/ProductManagement",
        by: "Reddit",
        description: "Candid community discussions, AMA sessions, and job postings from the PM world.",
        level: "All Levels",
        free: true,
      },
    ],
  },
  {
    icon: Layers,
    label: "Frameworks",
    color: "bg-pink-50 text-pink-600",
    resources: [
      {
        title: "Jobs-to-Be-Done (JTBD)",
        by: "Clayton Christensen",
        description: "Understand what customers are hiring your product to do — the most powerful PM lens.",
        level: "Intermediate",
        free: true,
      },
      {
        title: "OKRs for Product Teams",
        by: "PMPulse",
        description: "How to write, align, and measure Objectives and Key Results at the team level.",
        level: "Beginner",
        free: true,
      },
      {
        title: "The Kano Model",
        by: "PMPulse",
        description: "Prioritize features by mapping them to customer satisfaction and delight.",
        level: "Intermediate",
        free: true,
      },
    ],
  },
];

const levelColors: Record<string, string> = {
  Beginner: "bg-green-50 text-green-600",
  Intermediate: "bg-yellow-50 text-yellow-600",
  "All Levels": "bg-blue-50 text-blue-600",
};

export default function ResourcesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-google-dark tracking-tight">Resources</h1>
        <p className="text-google-gray mt-2 text-lg">
          Hand-picked books, courses, templates, and tools — organised so you don&apos;t have to.
        </p>
      </div>

      {/* Quick filter chips */}
      <div className="flex flex-wrap gap-2 mb-12">
        {resourceCategories.map((cat) => (
          <button
            key={cat.label}
            className="chip px-4 py-1.5 text-sm border border-google-gray-border text-google-gray bg-white hover:border-google-blue hover:text-google-blue transition-colors"
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Resource sections */}
      <div className="space-y-16">
        {resourceCategories.map((cat) => (
          <section key={cat.label}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${cat.color}`}>
                <cat.icon size={18} />
              </div>
              <h2 className="text-xl font-semibold text-google-dark">{cat.label}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {cat.resources.map((res) => (
                <div key={res.title} className="card p-5 flex flex-col gap-3 group cursor-pointer">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-google-dark text-sm leading-snug group-hover:text-google-blue transition-colors">
                      {res.title}
                    </h3>
                    <ExternalLink size={13} className="text-google-gray shrink-0 mt-0.5" />
                  </div>
                  <p className="text-xs text-google-gray">by {res.by}</p>
                  <p className="text-google-gray text-sm leading-relaxed flex-1">{res.description}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className={`chip text-xs ${levelColors[res.level]}`}>{res.level}</span>
                    <span
                      className={`text-xs font-medium ${
                        res.free ? "text-green-600" : "text-google-gray"
                      }`}
                    >
                      {res.free ? "Free" : "Paid"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Submit suggestion */}
      <div className="mt-20 card p-8 text-center">
        <h3 className="text-lg font-semibold text-google-dark">Know a great resource we missed?</h3>
        <p className="text-google-gray text-sm mt-2">
          We review every suggestion and add the best ones to this list.
        </p>
        <button className="btn-primary mt-5">Submit a Resource</button>
      </div>
    </div>
  );
}
