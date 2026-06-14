import Link from "next/link";
import { ArrowRight, Clock, Search } from "lucide-react";

const categories = ["All", "Fundamentals", "Career Switch", "Strategy", "Interview Prep", "Frameworks", "Case Studies"];

const articles = [
  {
    tag: "Fundamentals",
    tagColor: "bg-blue-50 text-blue-600",
    title: "What Does a Product Manager Actually Do?",
    excerpt: "A clear breakdown of the PM role — from roadmapping to stakeholder management — written for people who've never shipped a product.",
    readTime: "5 min",
    author: "PMPulse Team",
    featured: true,
  },
  {
    tag: "Career Switch",
    tagColor: "bg-green-50 text-green-600",
    title: "From MBA to PM: A 90-Day Transition Plan",
    excerpt: "Practical steps to position yourself as a strong PM candidate when coming from consulting, finance, or ops.",
    readTime: "8 min",
    author: "Priya S.",
    featured: true,
  },
  {
    tag: "Frameworks",
    tagColor: "bg-orange-50 text-orange-600",
    title: "The CIRCLES Framework Explained Simply",
    excerpt: "How to use CIRCLES to structure product design answers — with a worked example from scratch.",
    readTime: "6 min",
    author: "PMPulse Team",
    featured: false,
  },
  {
    tag: "Strategy",
    tagColor: "bg-red-50 text-red-600",
    title: "How to Build a Product Roadmap from Zero",
    excerpt: "Step-by-step guidance on creating your first roadmap — tools, prioritization methods, and stakeholder alignment.",
    readTime: "10 min",
    author: "Rahul M.",
    featured: false,
  },
  {
    tag: "Fundamentals",
    tagColor: "bg-blue-50 text-blue-600",
    title: "PRD vs. Product Brief: What's the Difference?",
    excerpt: "Understanding the core documents PMs write and when to use each one.",
    readTime: "4 min",
    author: "PMPulse Team",
    featured: false,
  },
  {
    tag: "Case Studies",
    tagColor: "bg-pink-50 text-pink-600",
    title: "How Notion Nailed Its PM Hiring Process",
    excerpt: "A deep dive into what Notion looks for in PMs and how to align your profile to their bar.",
    readTime: "7 min",
    author: "Ananya K.",
    featured: false,
  },
  {
    tag: "Career Switch",
    tagColor: "bg-green-50 text-green-600",
    title: "SWE to PM: Do You Lose Technical Credibility?",
    excerpt: "Real talk on the transition from engineering to product — and how to leverage your background, not hide it.",
    readTime: "6 min",
    author: "Vikram T.",
    featured: false,
  },
  {
    tag: "Interview Prep",
    tagColor: "bg-purple-50 text-purple-600",
    title: "How to Answer 'Design a Product for X' Questions",
    excerpt: "A repeatable 4-step framework to structure your product design answers in any PM interview.",
    readTime: "6 min",
    author: "PMPulse Team",
    featured: false,
  },
  {
    tag: "Frameworks",
    tagColor: "bg-orange-50 text-orange-600",
    title: "North Star Metrics: Picking the Right One",
    excerpt: "How to identify and defend your product's north star metric in interviews and on the job.",
    readTime: "5 min",
    author: "Priya S.",
    featured: false,
  },
];

export default function ArticlesPage() {
  const featured = articles.filter((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-google-dark tracking-tight">Articles</h1>
        <p className="text-google-gray mt-2 text-lg">Practical PM reads, written for switchers and beginners.</p>
      </div>

      {/* Search bar */}
      <div className="relative mb-8 max-w-lg">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-google-gray" />
        <input
          type="text"
          placeholder="Search articles..."
          className="w-full pl-11 pr-4 py-3 rounded-full border border-google-gray-border bg-white text-sm text-google-dark placeholder:text-google-gray focus:outline-none focus:border-google-blue focus:ring-2 focus:ring-google-blue-light"
        />
      </div>

      {/* Category chips */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat, i) => (
          <button
            key={cat}
            className={`chip px-4 py-1.5 text-sm border transition-colors ${
              i === 0
                ? "bg-google-blue text-white border-google-blue"
                : "bg-white text-google-gray border-google-gray-border hover:border-google-blue hover:text-google-blue"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured articles */}
      <div className="mb-12">
        <h2 className="text-sm font-semibold text-google-gray uppercase tracking-widest mb-5">Featured</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((article) => (
            <Link key={article.title} href="#" className="card p-8 flex flex-col gap-4 group">
              <span className={`chip ${article.tagColor} w-fit`}>{article.tag}</span>
              <h3 className="text-xl font-semibold text-google-dark group-hover:text-google-blue transition-colors leading-snug">
                {article.title}
              </h3>
              <p className="text-google-gray text-sm leading-relaxed flex-1">{article.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-google-gray mt-2">
                <span className="flex items-center gap-1.5">
                  <Clock size={12} /> {article.readTime} read · {article.author}
                </span>
                <ArrowRight size={14} className="text-google-blue" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* All articles */}
      <div>
        <h2 className="text-sm font-semibold text-google-gray uppercase tracking-widest mb-5">All Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rest.map((article) => (
            <Link key={article.title} href="#" className="card p-6 flex flex-col gap-3 group">
              <span className={`chip ${article.tagColor} w-fit`}>{article.tag}</span>
              <h3 className="font-semibold text-google-dark group-hover:text-google-blue transition-colors leading-snug">
                {article.title}
              </h3>
              <p className="text-google-gray text-sm leading-relaxed flex-1">{article.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-google-gray mt-1">
                <span className="flex items-center gap-1.5">
                  <Clock size={12} /> {article.readTime} read
                </span>
                <ArrowRight size={14} className="text-google-blue" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
