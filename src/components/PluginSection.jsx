const plugins = [
  "Passkeys",
  "Two Factor",
  "Organizations",
  "Magic Links",
  "API Keys",
  "Admin",
  "OAuth",
  "Username",
  "Anonymous",
  "Multi Session",
  "WebAuthn",
  "JWT",
];

export default function PluginSection() {
  return (
    <section className=" px-6 lg:px-10 py-20">
      <div className="flex items-center gap-4 mb-10">
        <span className="text-[13px] uppercase tracking-[0.2em] text-neutral-700">
          Plugins
        </span>

        <div className="flex-1 h-px bg-black/10" />
      </div>

      <div className="flex flex-wrap gap-3">
        {plugins.map((plugin) => (
          <div
            key={plugin}
            className="
              border border-black/10
              px-4
              py-3
              text-sm
              bg-white
              hover:bg-neutral-50
              transition-colors
            "
          >
            {plugin}
          </div>
        ))}
      </div>
    </section>
  );
}