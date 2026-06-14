import Link from "next/link";
import { ArrowRight, BookOpen, Trophy, Users, Mic, Star, TrendingUp, CheckCircle } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Articles & Resources",
    description: "Curated reads on PM fundamentals, strategy, and frameworks — written for beginners and career switchers.",
    href: "/articles",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Trophy,
    title: "Competitions",
    description: "Practice with real case studies. Compete, get feedback, and build your PM portfolio.",
    href: "/competitions",
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    icon: Mic,
    title: "Sessions",
    description: "1:1 mentorship and group sessions with experienced PMs. Ask anything, get real answers.",
    href: "/sessions",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Users,
    title: "Interview Prep",
    description: "Structured question banks, mock frameworks, and STAR guides to crack your PM interviews.",
    href: "/interview-prep",
    color: "bg-purple-50 text-purple-600",
  },
];

const stats = [
  { value: "500+", label: "Resources" },
  { value: "120+", label: "Mock Questions" },
  { value: "40+", label: "Sessions Hosted" },
  { value: "2K+", label: "Community Members" },
];

const latestArticles = [
  {
    tag: "Fundamentals",
    tagColor: "bg-blue-50 text-blue-600",
    title: "What Does a Product Manager Actually Do?",
    excerpt: "A clear breakdown of the PM role — from roadmapping to stakeholder management — written for people who've never shipped a product.",
    readTime: "5 min read",
    href: "/articles",
  },
  {
    tag: "Career Switch",
    tagColor: "bg-green-50 text-green-600",
    title: "From MBA to PM: A 90-Day Transition Plan",
    excerpt: "Practical steps to position yourself as a strong PM candidate when coming from consulting, finance, or ops.",
    readTime: "8 min read",
    href: "/articles",
  },
  {
    tag: "Interview Prep",
    tagColor: "bg-purple-50 text-purple-600",
    title: "How to Answer 'Design a Product for X' Questions",
    excerpt: "A repeatable 4-step framework to structure your product design answers in any PM interview.",
    readTime: "6 min read",
    href: "/interview-prep",
  },
];

const testimonials = [
  {
    quote: "PMPulse helped me land my first PM role after 6 years in marketing. The interview prep section is gold.",
    name: "Priya S.",
    role: "APM at a Series B startup",
  },
  {
    quote: "The competitions gave me real portfolio projects to talk about in interviews. Nothing else does that.",
    name: "Rahul M.",
    role: "Transitioned from SWE to PM",
  },
  {
    quote: "Booked a session before my Google PM loop. Got the offer. Enough said.",
    name: "Ananya K.",
    role: "PM at Google",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-google-blue-light text-google-blue px-4 py-1.5 rounded-full text-sm font-medium mb-8">
            <TrendingUp size={14} />
            Built for PM switchers &amp; beginners
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-google-dark tracking-tight leading-tight">
            Your launchpad into{" "}
            <span className="text-google-blue">Product Management</span>
          </h1>
          <p className="mt-6 text-xl text-google-gray max-w-2xl mx-auto leading-relaxed">
            Articles, resources, competitions, interview prep, and live sessions — everything you need to break into PM, in one place.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/resources" className="btn-primary text-base px-8 py-3 flex items-center gap-2">
              Explore Resources <ArrowRight size={16} />
            </Link>
            <Link href="/sessions" className="btn-secondary text-base px-8 py-3">
              Book a Session
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-google-gray-border bg-google-gray-light py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-google-blue">{stat.value}</div>
                <div className="text-sm text-google-gray mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title text-3xl">Everything you need, nothing you don't</h2>
          <p className="section-subtitle">Four pillars designed to take you from curious to hired.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <Link key={f.title} href={f.href} className="card p-6 group flex flex-col gap-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${f.color}`}>
                <f.icon size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-google-dark group-hover:text-google-blue transition-colors">
                  {f.title}
                </h3>
                <p className="text-google-gray text-sm mt-2 leading-relaxed">{f.description}</p>
              </div>
              <div className="mt-auto flex items-center gap-1 text-google-blue text-sm font-medium">
                Explore <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-google-gray-light">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="section-title">Latest Articles</h2>
              <p className="section-subtitle">Practical reads for your PM journey.</p>
            </div>
            <Link href="/articles" className="hidden sm:flex items-center gap-1 text-google-blue text-sm font-medium hover:underline">
              View all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestArticles.map((article) => (
              <Link key={article.title} href={article.href} className="card p-6 flex flex-col gap-4 group">
                <span className={`chip ${article.tagColor} w-fit`}>{article.tag}</span>
                <h3 className="font-semibold text-google-dark text-lg leading-snug group-hover:text-google-blue transition-colors">
                  {article.title}
                </h3>
                <p className="text-google-gray text-sm leading-relaxed flex-1">{article.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-google-gray">
                  <span>{article.readTime}</span>
                  <ArrowRight size={14} className="text-google-blue" />
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center sm:hidden">
            <Link href="/articles" className="text-google-blue text-sm font-medium hover:underline">
              View all articles →
            </Link>
          </div>
        </div>
      </section>

      {/* Why PMPulse */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="section-title text-3xl">Why PMPulse?</h2>
            <p className="section-subtitle mt-3">
              Most PM content is scattered, jargon-heavy, or behind a paywall. We built the resource we wish we had when we were switching.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Beginner-first content that doesn't assume you know what a PRD is",
                "Real case competitions with expert feedback, not just templates",
                "Sessions with PMs who've done the switcher journey themselves",
                "Interview frameworks that work across FAANG, startups, and everything in between",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-google-blue mt-0.5 shrink-0" />
                  <span className="text-google-gray text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Link href="/articles" className="btn-primary">
                Start Learning
              </Link>
            </div>
          </div>

          {/* Testimonials */}
          <div className="flex flex-col gap-4">
            {testimonials.map((t) => (
              <div key={t.name} className="card p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-google-dark text-sm leading-relaxed">"{t.quote}"</p>
                <div className="mt-4">
                  <div className="font-semibold text-google-dark text-sm">{t.name}</div>
                  <div className="text-google-gray text-xs">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-google-blue py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white tracking-tight">Ready to break into PM?</h2>
          <p className="mt-4 text-blue-100 text-lg">
            Join thousands of aspiring PMs using PMPulse to land their first product role.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/resources"
              className="px-8 py-3 rounded-full bg-white text-google-blue font-semibold text-sm hover:bg-blue-50 transition-colors"
            >
              Browse Resources
            </Link>
            <Link
              href="/sessions"
              className="px-8 py-3 rounded-full border border-white text-white font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              Book a Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
