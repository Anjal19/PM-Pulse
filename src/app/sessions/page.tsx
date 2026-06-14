import { Clock, Star, CheckCircle, Video, Users, Mic, Calendar } from "lucide-react";

const sessionTypes = [
  {
    icon: Mic,
    title: "Mock PM Interview",
    duration: "45 min",
    price: "Free",
    priceNote: "Community session",
    description: "A realistic PM interview simulation with an experienced PM. Covers product design, analytical, or behavioural questions based on your target company.",
    includes: ["1 question type of your choice", "Real-time feedback", "Written debrief after the call", "Resources to work on gaps"],
    color: "bg-blue-50 text-blue-600",
    popular: true,
  },
  {
    icon: Video,
    title: "Career Strategy Session",
    duration: "60 min",
    price: "Free",
    priceNote: "Community session",
    description: "1:1 with a PM who made the switch. Work through your background, target roles, resume gaps, and 30-60-90 day plan.",
    includes: ["Resume and LinkedIn audit", "Target company shortlist", "Personalised action plan", "Email follow-up support"],
    color: "bg-green-50 text-green-600",
    popular: false,
  },
  {
    icon: Users,
    title: "Group Office Hours",
    duration: "60 min",
    price: "Free",
    priceNote: "Open to all",
    description: "Live group Q&A session with experienced PMs. Open format — bring your questions, case studies, or career dilemmas.",
    includes: ["Open Q&A format", "Peer community discussion", "Session recording shared after", "Runs every Saturday, 11am IST"],
    color: "bg-purple-50 text-purple-600",
    popular: false,
  },
];

const mentors = [
  {
    name: "Rahul Mehta",
    role: "Senior PM at Swiggy",
    background: "Ex-consultant, MBA IIM-B",
    speciality: "Fintech · Growth · Career Transitions",
    sessions: 42,
    rating: 4.9,
  },
  {
    name: "Sneha Krishnan",
    role: "APM at Google",
    background: "Ex-SWE at Infosys",
    speciality: "Product Design · FAANG Prep · SWE→PM",
    sessions: 31,
    rating: 5.0,
  },
  {
    name: "Vikram Tiwari",
    role: "PM Lead at Razorpay",
    background: "Ex-operations, 0→1 products",
    speciality: "Payments · B2B SaaS · Roadmapping",
    sessions: 58,
    rating: 4.8,
  },
  {
    name: "Ananya Kapoor",
    role: "Group PM at Meesho",
    background: "MBA, switched from marketing",
    speciality: "Consumer · Metrics · Behavioural Interviews",
    sessions: 35,
    rating: 4.9,
  },
];

const upcomingGroupSessions = [
  {
    title: "Office Hours: FAANG PM Interviews",
    date: "Saturday, June 21",
    time: "11:00 AM IST",
    host: "Sneha Krishnan",
    spots: 8,
  },
  {
    title: "AMA: Life as an APM at a Startup",
    date: "Wednesday, June 25",
    time: "7:00 PM IST",
    host: "Rahul Mehta",
    spots: 15,
  },
  {
    title: "Office Hours: Resume & LinkedIn Review",
    date: "Saturday, June 28",
    time: "11:00 AM IST",
    host: "Ananya Kapoor",
    spots: 10,
  },
];

export default function SessionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-google-dark tracking-tight">Sessions</h1>
        <p className="text-google-gray mt-2 text-lg">
          1:1 mentorship and group sessions with PMs who've been where you are.
        </p>
      </div>

      {/* Session types */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-google-dark mb-6">Choose a Session Type</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sessionTypes.map((session) => (
            <div key={session.title} className={`card p-7 flex flex-col gap-5 relative ${session.popular ? "border-google-blue" : ""}`}>
              {session.popular && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-google-blue text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-start justify-between">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${session.color}`}>
                  <session.icon size={20} />
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-google-dark">{session.price}</div>
                  <div className="text-xs text-google-gray">{session.priceNote}</div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-google-dark text-lg">{session.title}</h3>
                <span className="flex items-center gap-1 text-xs text-google-gray mt-1">
                  <Clock size={12} /> {session.duration}
                </span>
              </div>

              <p className="text-google-gray text-sm leading-relaxed">{session.description}</p>

              <ul className="space-y-2">
                {session.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-google-gray">
                    <CheckCircle size={14} className="text-green-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <button className={`mt-auto ${session.popular ? "btn-primary" : "btn-secondary"} text-center`}>
                Book This Session
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming group sessions */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-google-dark mb-6">Upcoming Group Sessions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {upcomingGroupSessions.map((s) => (
            <div key={s.title} className="card p-6 flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-google-blue-light flex items-center justify-center shrink-0">
                  <Calendar size={16} className="text-google-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-google-dark text-sm leading-snug">{s.title}</h3>
                  <p className="text-google-gray text-xs mt-1">with {s.host}</p>
                </div>
              </div>
              <div className="text-sm text-google-gray space-y-1">
                <p className="font-medium text-google-dark">{s.date}</p>
                <p>{s.time}</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-google-gray">{s.spots} spots left</span>
                <button className="text-google-blue text-xs font-semibold hover:underline">Register Free →</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mentors */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-google-dark mb-6">Meet the Mentors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {mentors.map((mentor) => (
            <div key={mentor.name} className="card p-6 flex flex-col gap-4 text-center">
              <div className="w-14 h-14 rounded-full bg-google-blue-light flex items-center justify-center mx-auto">
                <span className="text-google-blue font-bold text-xl">{mentor.name[0]}</span>
              </div>
              <div>
                <h3 className="font-semibold text-google-dark">{mentor.name}</h3>
                <p className="text-google-gray text-xs mt-0.5">{mentor.role}</p>
                <p className="text-google-gray text-xs mt-0.5">{mentor.background}</p>
              </div>
              <div className="text-xs text-google-gray bg-google-gray-light rounded-lg px-3 py-2 leading-relaxed">
                {mentor.speciality}
              </div>
              <div className="flex items-center justify-between text-xs text-google-gray border-t border-google-gray-border pt-3">
                <span>{mentor.sessions} sessions</span>
                <span className="flex items-center gap-1">
                  <Star size={11} className="fill-yellow-400 text-yellow-400" /> {mentor.rating}
                </span>
              </div>
              <button className="btn-secondary text-xs py-2">Book with {mentor.name.split(" ")[0]}</button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ / reassurance */}
      <section className="bg-google-gray-light rounded-2xl p-8">
        <h2 className="text-lg font-semibold text-google-dark mb-6">Before you book</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            { q: "Are sessions really free?", a: "Yes. Our mentors volunteer their time to give back. Group sessions are always free. 1:1s may go paid in future, but we'll always keep a free tier." },
            { q: "How do I prepare?", a: "Come with a specific question, resume, or target company in mind. The more focused you are, the more you get out of the session." },
            { q: "What if I'm a complete beginner?", a: "That's exactly who these are for. Mentors are used to starting from zero — just be honest about where you are." },
            { q: "Can I reschedule?", a: "Yes, up to 24 hours before the session. Just email us or use the reschedule link in your confirmation." },
          ].map((item) => (
            <div key={item.q} className="flex gap-3">
              <CheckCircle size={16} className="text-google-blue mt-0.5 shrink-0" />
              <div>
                <h4 className="font-semibold text-google-dark text-sm">{item.q}</h4>
                <p className="text-google-gray text-sm mt-1 leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
