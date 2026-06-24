export default function Footer() {
  return (
    <footer
      className="px-6 lg:px-10 py-12 border-t"
      style={{ background: "var(--ink-900)", borderColor: "rgba(228,224,213,0.08)" }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <p
            className="text-paper-50 font-bold mb-1"
            style={{ fontSize: "0.875rem", fontFamily: "var(--font-inter, sans-serif)" }}
          >
            CFO On the Go Pro
          </p>
          <p className="eyebrow" style={{ color: "var(--paper-200)", opacity: 0.45 }}>
            Strategy · Planning · Tax
          </p>
        </div>

        {/* Lending entity */}
        <div>
          <p
            className="text-paper-50 font-bold mb-1"
            style={{ fontSize: "0.875rem", fontFamily: "var(--font-inter, sans-serif)" }}
          >
            Intelligent Finance Specialists
          </p>
          <p className="eyebrow" style={{ color: "var(--ledger-blue)" }}>
            Credit · Lending · Mortgage Broking
          </p>
        </div>

        {/* Disclosure */}
        <div>
          <p
            className="type-caption text-paper-200 leading-relaxed"
            style={{ opacity: 0.45, fontFamily: "var(--font-inter, sans-serif)" }}
          >
            CFO On the Go Pro and Intelligent Finance Specialists are separate entities.
            Credit advice is provided by Intelligent Finance Specialists only.
            General financial information on this site does not constitute personal
            financial advice.
          </p>
        </div>
      </div>

      <div
        className="max-w-7xl mx-auto mt-10 pt-6 border-t flex flex-wrap items-center justify-between gap-4"
        style={{ borderColor: "rgba(228,224,213,0.06)" }}
      >
        <p className="eyebrow" style={{ color: "var(--paper-200)", opacity: 0.3 }}>
          © {new Date().getFullYear()} CFO On the Go Pro. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["Privacy Policy", "Terms of Use", "Credit Guide"].map((l) => (
            <a
              key={l}
              href="#"
              className="eyebrow hover:text-paper-50 transition-colors"
              style={{ color: "var(--paper-200)", opacity: 0.3 }}
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
