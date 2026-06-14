import { Trophy, Calendar, Users, Clock, ArrowRight, CheckCircle, Star } from "lucide-react";

const activeCompetitions = [
  {
    id: 1,
    status: "Live",
    statusColor: "bg-green-100 text-green-700",
    title: "Redesign the Onboarding Flow",
    company: "Fintech Product Challenge",
    description:
      "You've been handed a 68% drop-off rate during onboarding for a payments app. Diagnose the problem, propose a solution, and defend your decision with metrics.",
    deadline: "June 28, 2025",
    participants: 143,
    prize: "Expert feedback + LinkedIn feature",
    tags: ["Product Design", "Fintech", "UX"],
  },
  {
    id: 2,
    status: "Live",
    statusColor: "bg-green-100 text-green-700",
    title: "Build a North Star Metric for an EdTech App",
    company: "EdTech Case Challenge",
    description:
      "Given a learning platform with 50K MAUs and stagnating engagement, define the right north star metric, justify it, and outline 3 bets to move it.",
    deadline: "July 5, 2025",
    participants: 89,
    prize: "Expert feedback + Portfolio badge",
    tags: ["Metrics", "EdTech", "Strategy"],
  },
];

const upcomingCompetitions = [
  {
    id: 3,
    status: "Upcoming",
    statusColor: "bg-blue-100 text-blue-700",
    title: "Prioritize the Roadmap: B2B SaaS",
    company: "SaaS Product Challenge",
    description:
      "You have 3 conflicting stakeholder asks, a two-week sprint, and limited engineering capacity. Prioritize, justify, and present your roadmap decision.",
    startDate: "July 15, 2025",
    prize: "1:1 session with a senior PM",
    tags: ["Roadmapping", "B2B", "Prioritization"],
  },
  {
    id: 4,
    status: "Upcoming",
    statusColor: "bg-blue-100 text-blue-700",
    title: "Launch a Feature in a New Market",
    company: "Global Expansion Challenge",
    description:
      "Your company wants to launch its core feature in Southeast Asia. Define the GTM strategy, localisation decisions, and success metrics.",
    startDate: "August 1, 2025",
    prize: "Expert feedback + Community showcase",
    tags: ["GTM", "Growth", "Internationalisation"],
  },
];

const pastWinners = [
  { name: "Sneha R.", competition: "Pricing Strategy Case", role: "Now: APM at Razorpay" },
  { name: "Arjun P.", competition: "Growth Levers Challenge", role: "Now: PM at Swiggy" },
  { name: "Meera V.", competition: "Mobile UX Redesign", role: "Now: PM at CRED" },
];

const howItWorks = [
  { step: "01", title: "Pick a challenge", description: "Choose a live competition that matches your interest or target domain." },
  { step: "02", title: "Submit your solution", description: "Work on the case and submit a written or slide-deck solution before the deadline." },
  { step: "03", title: "Get expert feedback", description: "Every submission gets detailed written feedback from an experienced PM." },
  { step: "04", title: "Build your portfolio", description: "Top submissions are showcased on PMPulse and shared with hiring partners." },
];

export default function CompetitionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-google-dark tracking-tight">Competitions</h1>
        <p className="text-google-gray mt-2 text-lg">
          Real PM case challenges. Submit, get feedback, build your portfolio.
        </p>
      </div>

      {/* How it works */}
      <section className="bg-google-gray-light rounded-2xl p-8 mb-14">
        <h2 className="text-lg font-semibold text-google-dark mb-6">How it works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorks.map((step) => (
            <div key={step.step} className="flex flex-col gap-2">
              <span className="text-3xl font-bold text-google-blue opacity-30">{step.step}</span>
              <h3 className="font-semibold text-google-dark text-sm">{step.title}</h3>
              <p className="text-google-gray text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Live competitions */}
      <section className="mb-14">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <h2 className="text-xl font-semibold text-google-dark">Live Now</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {activeCompetitions.map((comp) => (
            <div key={comp.id} className="card p-7 flex flex-col gap-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className={`chip text-xs ${comp.statusColor} mb-2`}>{comp.status}</span>
                  <h3 className="font-semibold text-google-dark text-lg leading-snug">{comp.title}</h3>
                  <p className="text-google-gray text-sm mt-0.5">{comp.company}</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-yellow-50 flex items-center justify-center shrink-0">
                  <Trophy size={18} className="text-yellow-600" />
                </div>
              </div>

              <p className="text-google-gray text-sm leading-relaxed">{comp.description}</p>

              <div className="flex flex-wrap gap-2">
                {comp.tags.map((tag) => (
                  <span key={tag} className="chip bg-google-gray-light text-google-gray text-xs border border-google-gray-border">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 text-xs text-google-gray border-t border-google-gray-border pt-4">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} /> Deadline: {comp.deadline}
                </span>
                <span className="flex items-center gap-1.5">
                  <Users size={13} /> {comp.participants} participants
                </span>
                <span className="flex items-center gap-1.5">
                  <Star size={13} /> {comp.prize}
                </span>
              </div>

              <button className="btn-primary w-full text-center mt-1">
                Submit My Solution
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold text-google-dark mb-6">Coming Up</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {upcomingCompetitions.map((comp) => (
            <div key={comp.id} className="card p-7 flex flex-col gap-4 opacity-90">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className={`chip text-xs ${comp.statusColor} mb-2`}>{comp.status}</span>
                  <h3 className="font-semibold text-google-dark text-lg leading-snug">{comp.title}</h3>
                  <p className="text-google-gray text-sm mt-0.5">{comp.company}</p>
                </div>
              </div>

              <p className="text-google-gray text-sm leading-relaxed">{comp.description}</p>

              <div className="flex flex-wrap gap-2">
                {comp.tags.map((tag) => (
                  <span key={tag} className="chip bg-google-gray-light text-google-gray text-xs border border-google-gray-border">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 text-xs text-google-gray border-t border-google-gray-border pt-4">
                <span className="flex items-center gap-1.5">
                  <Clock size={13} /> Starts: {comp.startDate}
                </span>
                <span className="flex items-center gap-1.5">
                  <Star size={13} /> {comp.prize}
                </span>
              </div>

              <button className="btn-secondary w-full text-center mt-1">
                Notify Me
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Past winners */}
      <section>
        <h2 className="text-xl font-semibold text-google-dark mb-6">Past Winners</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {pastWinners.map((winner) => (
            <div key={winner.name} className="card p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-google-blue-light flex items-center justify-center shrink-0">
                <span className="text-google-blue font-semibold text-sm">{winner.name[0]}</span>
              </div>
              <div>
                <div className="font-semibold text-google-dark text-sm">{winner.name}</div>
                <div className="text-google-gray text-xs mt-0.5">{winner.competition}</div>
                <div className="flex items-center gap-1 text-green-600 text-xs mt-1.5">
                  <CheckCircle size={11} /> {winner.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
