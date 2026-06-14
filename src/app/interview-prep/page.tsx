import { ChevronDown, Lightbulb, Target, BarChart2, MessageSquare, Layers, ArrowRight } from "lucide-react";

const questionTypes = [
  {
    icon: Layers,
    label: "Product Design",
    color: "bg-blue-50 text-blue-600",
    count: 32,
    description: "Design a product for X. Improve feature Y.",
  },
  {
    icon: BarChart2,
    label: "Analytical",
    color: "bg-green-50 text-green-600",
    count: 28,
    description: "Metrics dropped 20%. DAU calculation. A/B test design.",
  },
  {
    icon: Target,
    label: "Strategy",
    color: "bg-orange-50 text-orange-600",
    count: 24,
    description: "Should we enter market X? How would you grow Y?",
  },
  {
    icon: MessageSquare,
    label: "Behavioural",
    color: "bg-purple-50 text-purple-600",
    count: 20,
    description: "Tell me about a time you influenced without authority.",
  },
  {
    icon: Lightbulb,
    label: "Estimation",
    color: "bg-pink-50 text-pink-600",
    count: 16,
    description: "How many Ubers are taken in Mumbai on a Sunday?",
  },
];

const frameworks = [
  {
    name: "CIRCLES",
    use: "Product Design",
    steps: [
      "Comprehend the situation",
      "Identify the customer",
      "Report the customer's needs",
      "Cut through prioritization",
      "List solutions",
      "Evaluate trade-offs",
      "Summarize your recommendation",
    ],
  },
  {
    name: "STAR",
    use: "Behavioural",
    steps: ["Situation — set the scene", "Task — your responsibility", "Action — what you did specifically", "Result — measurable outcome"],
  },
  {
    name: "Root Cause Analysis",
    use: "Analytical (Metric Drop)",
    steps: [
      "Clarify the metric and timeframe",
      "Rule out data/tracking issues",
      "Segment by platform, geo, user type",
      "Check external factors",
      "Identify internal changes (deploys, experiments)",
      "Propose hypothesis and next steps",
    ],
  },
];

const questions = [
  {
    category: "Product Design",
    categoryColor: "bg-blue-50 text-blue-600",
    difficulty: "Medium",
    difficultyColor: "text-yellow-600",
    question: "Design a feature for Google Maps to help elderly users.",
    hint: "Start by narrowing who 'elderly' means. Pick one persona. Identify their top pain point with Maps today.",
  },
  {
    category: "Analytical",
    categoryColor: "bg-green-50 text-green-600",
    difficulty: "Hard",
    difficultyColor: "text-red-600",
    question: "Instagram's story views dropped 15% last Tuesday. Walk me through how you'd investigate.",
    hint: "Start by ruling out tracking bugs, then segment by platform, region, and account type before hypothesising causes.",
  },
  {
    category: "Strategy",
    categoryColor: "bg-orange-50 text-orange-600",
    difficulty: "Medium",
    difficultyColor: "text-yellow-600",
    question: "Should Spotify enter the podcast advertising market with its own ad network?",
    hint: "Frame as a build vs. buy vs. partner decision. Use a simple 2x2 on market size vs. strategic fit.",
  },
  {
    category: "Behavioural",
    categoryColor: "bg-purple-50 text-purple-600",
    difficulty: "Easy",
    difficultyColor: "text-green-600",
    question: "Tell me about a time you disagreed with a stakeholder and how you handled it.",
    hint: "Use STAR. Focus on your reasoning process and how you maintained the relationship, not just whether you 'won'.",
  },
  {
    category: "Estimation",
    categoryColor: "bg-pink-50 text-pink-600",
    difficulty: "Medium",
    difficultyColor: "text-yellow-600",
    question: "Estimate the number of active WhatsApp users in India.",
    hint: "Start from India's smartphone penetration (~600M), then layer messaging app adoption rates.",
  },
  {
    category: "Product Design",
    categoryColor: "bg-blue-50 text-blue-600",
    difficulty: "Hard",
    difficultyColor: "text-red-600",
    question: "How would you improve LinkedIn's job application experience?",
    hint: "Pick a specific user: entry-level switcher vs. experienced hire. Pain points differ drastically — commit to one.",
  },
];

const tips = [
  {
    title: "Always clarify before diving in",
    body: "Interviewers respect structured thinkers. Spend 30–60 seconds asking clarifying questions before structuring your answer.",
  },
  {
    title: "State your framework upfront",
    body: "Say 'I'll use CIRCLES for this' before you start. It signals structure and gives the interviewer a mental map of where you're going.",
  },
  {
    title: "Make assumptions explicit",
    body: "Whenever you assume something (user segment, market size, constraint), say it out loud. It shows rigour and invites feedback.",
  },
  {
    title: "Quantify wherever possible",
    body: "Even rough numbers help. '~30% of users' is better than 'many users'. Train yourself to ballpark metrics.",
  },
];

export default function InterviewPrepPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-google-dark tracking-tight">Interview Prep</h1>
        <p className="text-google-gray mt-2 text-lg">
          Frameworks, question banks, and tips to ace your PM interviews — at any company.
        </p>
      </div>

      {/* Question type cards */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold text-google-dark mb-6">Browse by Question Type</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {questionTypes.map((qt) => (
            <button key={qt.label} className="card p-5 text-left group hover:border-google-blue transition-colors">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${qt.color} mb-3`}>
                <qt.icon size={18} />
              </div>
              <div className="font-semibold text-google-dark text-sm group-hover:text-google-blue transition-colors">
                {qt.label}
              </div>
              <div className="text-google-gray text-xs mt-1">{qt.count} questions</div>
              <div className="text-google-gray text-xs mt-1.5 leading-relaxed">{qt.description}</div>
            </button>
          ))}
        </div>
      </section>

      {/* Frameworks */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold text-google-dark mb-6">Key Frameworks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {frameworks.map((fw) => (
            <div key={fw.name} className="card p-6 flex flex-col gap-4">
              <div>
                <h3 className="font-bold text-google-dark text-lg">{fw.name}</h3>
                <span className="chip bg-google-blue-light text-google-blue text-xs mt-1">{fw.use}</span>
              </div>
              <ol className="space-y-2">
                {fw.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-google-gray">
                    <span className="text-google-blue font-semibold text-xs mt-0.5 w-4 shrink-0">{i + 1}.</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      {/* Practice questions */}
      <section className="mb-14">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-xl font-semibold text-google-dark">Practice Questions</h2>
          <button className="text-google-blue text-sm font-medium hover:underline flex items-center gap-1">
            See all <ArrowRight size={14} />
          </button>
        </div>
        <div className="space-y-4">
          {questions.map((q, i) => (
            <details key={i} className="card group">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <span className={`chip text-xs ${q.categoryColor} shrink-0`}>{q.category}</span>
                  <span className="font-medium text-google-dark text-sm leading-snug">{q.question}</span>
                </div>
                <div className="flex items-center gap-3 shrink-0 ml-4">
                  <span className={`text-xs font-medium ${q.difficultyColor}`}>{q.difficulty}</span>
                  <ChevronDown size={16} className="text-google-gray group-open:rotate-180 transition-transform" />
                </div>
              </summary>
              <div className="px-6 pb-6 pt-0 border-t border-google-gray-border">
                <div className="flex items-start gap-2 mt-4">
                  <Lightbulb size={14} className="text-yellow-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-google-gray leading-relaxed">
                    <span className="font-medium text-google-dark">Hint: </span>
                    {q.hint}
                  </p>
                </div>
                <div className="mt-4 flex gap-3">
                  <button className="btn-primary text-xs px-4 py-2">Practice Now</button>
                  <button className="btn-secondary text-xs px-4 py-2">Save Question</button>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Tips section */}
      <section>
        <h2 className="text-xl font-semibold text-google-dark mb-6">Golden Rules for PM Interviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {tips.map((tip) => (
            <div key={tip.title} className="card p-6 flex gap-4">
              <div className="w-7 h-7 rounded-full bg-google-blue-light flex items-center justify-center shrink-0 mt-0.5">
                <Lightbulb size={14} className="text-google-blue" />
              </div>
              <div>
                <h3 className="font-semibold text-google-dark text-sm">{tip.title}</h3>
                <p className="text-google-gray text-sm mt-1.5 leading-relaxed">{tip.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 bg-google-blue-light rounded-2xl p-8 text-center">
          <h3 className="text-lg font-semibold text-google-dark">Ready to do a mock interview?</h3>
          <p className="text-google-gray text-sm mt-2">
            Book a 45-min mock with an experienced PM and get detailed, personalised feedback.
          </p>
          <a href="/sessions" className="btn-primary mt-5 inline-block">
            Book a Mock Interview
          </a>
        </div>
      </section>
    </div>
  );
}
