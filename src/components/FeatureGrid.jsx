const features = [
  {
    title: "Email & Password",
    desc: "Built-in authentication with secure password handling.",
  },
  {
    title: "Social Login",
    desc: "Google, GitHub and other OAuth providers.",
  },
  {
    title: "Passkeys",
    desc: "Modern passwordless authentication support.",
  },
  {
    title: "Multi Session",
    desc: "Manage multiple active sessions seamlessly.",
  },
  {
    title: "Organizations",
    desc: "Teams, members, roles and permissions.",
  },
  {
    title: "2FA",
    desc: "Additional account security with two-factor auth.",
  },
];

export default function FeatureGrid() {
  return (
    <section className="px-6 lg:px-10 py-20">
      {/* Header */}
      <div className="flex items-center gap-4 mb-10">
        <span className="text-[13px] uppercase tracking-[0.2em] text-neutral-700">
          Features
        </span>

        <div className="flex-1 h-px bg-black/10" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="
              border border-black/10
              p-6
              bg-white
              hover:bg-neutral-50
              transition-colors
            "
          >
            <h3 className="text-lg font-medium mb-3">
              {feature.title}
            </h3>

            <p className="text-sm leading-6 text-neutral-600">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}