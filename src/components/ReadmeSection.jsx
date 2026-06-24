export default function ReadmeTab() {
  return (
    <div className="relative z-0 w-full lg:w-[60%] overflow-x-hidden">
      <div className="flex items-start lg:items-center justify-center">
        <div className="flex flex-col w-full">
          <div className="flex-1 overflow-x-hidden no-scrollbar">
            <div className="p-5 lg:px-8 lg:pt-8">
              <article className="pb-0">

                {/* README Heading */}
                <h1 className="flex items-center gap-3 text-sm sm:text-[16px] font-mono text-neutral-900 mb-4 sm:mb-5">
                  README
                  <span className="w-full h-px bg-black/19" />
                </h1>

                {/* Description */}
                <p className="text-sm sm:text-[15px] text-foreground/80 mb-6 sm:mb-8 leading-relaxed">
                  Auth that lives{" "}
                  <span className="font-medium text-foreground/90">
                    inside your app
                  </span>
                  . Composable, plugin-based, and built to scale —
                  powering from weekend projects to the biggest{" "}
                  <span className="font-medium text-foreground/90">
                    consumer and enterprise apps
                  </span>{" "}
                  on the planet.
                </p>

                {/* CLI Box Component */}
                <div className="mb-6">
                  <div className="mb-6 rounded-md border border-foreground/[0.1] relative">
                    {/* Tabs */}
                    <div className="flex items-center border-b border-foreground/[0.1]">
                      <button className="px-4 py-2 text-[12px] transition-colors duration-150 relative text-neutral-800 dark:text-neutral-200">
                        CLI
                        <div className="absolute bottom-0 left-4 right-4 h-[1.5px] bg-neutral-600 dark:bg-neutral-400" />
                      </button>

                      <button className="px-4 py-2 text-[12px] transition-colors duration-150 relative text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-400">
                        Prompt
                      </button>

                      <button className="px-4 py-2 text-[12px] transition-colors duration-150 relative text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-400">
                        MCP
                      </button>

                      <button className="px-4 py-2 text-[12px] transition-colors duration-150 relative text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-400">
                        Skills
                      </button>
                    </div>

                    {/* Code Block */}
                    <div style={{ overflow: "visible", height: "50px" }}>
                      <div>
                        <div>
                          <div className="flex items-center justify-between bg-neutral-100/50 dark:bg-[#050505] px-4 py-3">
                            <code
                              className="text-[13px]"
                              style={{
                                fontFamily: "var(--font-geist-pixel-square)",
                              }}
                            >
                              <span className="text-purple-600/90 dark:text-purple-400/90">
                                npx
                              </span>{" "}
                              <span className="text-neutral-700 dark:text-neutral-300">
                                auth init
                              </span>
                            </code>

                            <div className="relative">
                              <button
                                className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors p-1"
                                aria-label="Copy command"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  className="h-4 w-4"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trusted By Divider */}
                <div className="flex items-center gap-3 my-4">
                  <div className="flex-1 border-t border-foreground/6" />

                  <span className="text-[11px] sm:text-xs text-foreground/50 font-mono tracking-wider uppercase shrink-0">
                    Trusted By
                  </span>
                </div>

                {/* Trusted Logos Component */}
                <div className="space-y-3">
                  {/* Your Logo Marquee Here */}
                </div>

                {/* Features Heading */}
                <div className="mt-6 mb-4">
                  <h2 className="text-2xl font-medium text-neutral-900 dark:text-neutral-100">
                    Features
                  </h2>
                </div>

                {/* Features Grid Component */}
                <div>
                  {/* Your Features Grid Here */}
                </div>

              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}