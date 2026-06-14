import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-google-gray-light border-t border-google-gray-border mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-google-blue flex items-center justify-center">
                <span className="text-white font-bold text-xs">PM</span>
              </div>
              <span className="text-google-dark font-semibold text-base">
                PM<span className="text-google-blue">Pulse</span>
              </span>
            </div>
            <p className="text-google-gray text-sm leading-relaxed max-w-xs">
              Your one-stop destination for breaking into product management. Resources, prep, and community — all in one place.
            </p>
          </div>

          <div>
            <h3 className="text-google-dark font-semibold text-sm mb-3">Learn</h3>
            <ul className="space-y-2">
              {[
                { href: "/articles", label: "Articles" },
                { href: "/resources", label: "Resources" },
                { href: "/interview-prep", label: "Interview Prep" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-google-gray text-sm hover:text-google-blue transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-google-dark font-semibold text-sm mb-3">Community</h3>
            <ul className="space-y-2">
              {[
                { href: "/competitions", label: "Competitions" },
                { href: "/sessions", label: "Sessions" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-google-gray text-sm hover:text-google-blue transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-google-gray-border mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-google-gray text-xs">© 2025 PMPulse. All rights reserved.</p>
          <p className="text-google-gray text-xs">Built for PM switchers &amp; beginners</p>
        </div>
      </div>
    </footer>
  );
}
