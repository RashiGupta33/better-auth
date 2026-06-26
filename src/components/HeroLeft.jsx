export default function HeroLeft() {
  return (
    <div
      className="
        hero-left-panel
        relative
        w-full
        lg:w-[40%]
        lg:h-[calc(100vh-44px)]
        border-b
        lg:border-b-0
        lg:border-r
        border-white/[0.06]
        px-5
        sm:px-6
        lg:px-7
        lg:sticky
        lg:top-[44px]
        bg-black
        overflow-hidden
      "
    >
      {/* Background Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 12px,
                rgba(0,0,0,.5) 12px,
                rgba(0,0,0,.5) 13px
              )
            `,
          }}
        />
      </div>

      {/* 3D Ribbon */}
      <div
        className="
          hidden
          lg:flex
          absolute
          inset-0
          justify-center
          items-center
          pointer-events-none
          z-[1]
        "
      >
        <div className="flex justify-center -mt-[28%]">
          <img
            src="/left-3d-logo-light.svg"
            alt=""
            draggable={false}
            className="
              max-h-[200px]
              z-10
              transition-transform
              duration-300
              hover:-translate-x-3
              hover:-rotate-6
            "
          />

          <img
            src="/right-3d-logo-light.svg"
            alt=""
            draggable={false}
            className="
              max-h-[200px]
              -ml-28
              -mt-3
              transition-transform
              duration-300
              hover:translate-x-3
              hover:rotate-6
            "
          />
        </div>
      </div>

      {/* Content */}
      <div
        className="
          hero-left-content
          relative
          z-[2]
          h-full
          flex
          flex-col
          justify-center
          -mt-6
        "
      >
        <div>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="
    relative
    inline-flex
    items-center
    gap-1.5
    px-2.5
    py-1
    pointer-events-auto
    group
    rounded-full
    bg-neutral-800/80
    hover:bg-neutral-700/50
    transition-colors
  "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="0.9em"
              height="0.9em"
              viewBox="0 0 24 24"
              className="text-neutral-100"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M13 4V2c4.66.5 8.33 4.19 8.85 8.85c.6 5.49-3.35 10.43-8.85 11.03v-2c3.64-.45 6.5-3.32 6.96-6.96A7.994 7.994 0 0 0 13 4m-7.33.2A9.8 9.8 0 0 1 11 2v2.06c-1.43.2-2.78.78-3.9 1.68zM2.05 11a9.8 9.8 0 0 1 2.21-5.33L5.69 7.1A8 8 0 0 0 4.05 11zm2.22 7.33A10.04 10.04 0 0 1 2.06 13h2c.18 1.42.75 2.77 1.63 3.9zm1.4 1.41l1.39-1.37h.04c1.13.88 2.48 1.45 3.9 1.63v2c-1.96-.21-3.82-1-5.33-2.26M12 17l1.56-3.42L17 12l-3.44-1.56L12 7l-1.57 3.44L7 12l3.43 1.58z"
              />
            </svg>

            <span className="text-xs sm:text-sm text-neutral-100 font-light">
              Introducing{" "}
              <span className="font-normal">| Agent Auth Protocol</span>
            </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="0.85em"
              height="0.85em"
              viewBox="0 0 24 24"
              className="
      text-neutral-400
      transition-transform
      group-hover:translate-x-0.5
    "
              aria-hidden="true"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14m-6-6l6 6l-6 6"
              />
            </svg>
          </a>

          <h1 className="pt-3 sm:pt-4 text-30px md:text-3xl xl:text-4xl text-neutral-200 tracking-tight leading-tight text-balance">
            The most comprehensive authentication framework
          </h1>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-2 sm:pt-4 pointer-events-auto">
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 bg-black !text-white text-[13px]"
            >
              Get Started
            </a>
            <a
              href="#"
              className="
      relative
      inline-flex
      items-center
      gap-1.5
      px-4
      sm:px-5
      py-2
      text-neutral-300
      text-xs
      sm:text-sm
      font-medium
      transition-colors
      group
    "
            >
              <span
                className="
        absolute
        inset-0
        opacity-[0.04]
        group-hover:opacity-[0.08]
        transition-opacity
      "
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(-45deg, transparent, transparent 4px, currentColor 4px, currentColor 5px)",
                }}
              />

              <span className="absolute top-0 -left-[6px] -right-[6px] h-px bg-white/20 group-hover:bg-white/30 transition-colors" />

              <span className="absolute bottom-0 -left-[6px] -right-[6px] h-px bg-white/20 group-hover:bg-white/30 transition-colors" />

              <span className="absolute left-0 -top-[6px] -bottom-[6px] w-px bg-white/20 group-hover:bg-white/30 transition-colors" />

              <span className="absolute right-0 -top-[6px] -bottom-[6px] w-px bg-white/20 group-hover:bg-white/30 transition-colors" />

              <span
                className="
        absolute
        -bottom-[6px]
        -right-[6px]
        font-mono
        text-[8px]
        text-white/40
        leading-none
        select-none
        translate-x-1/2
        translate-y-1/2
      "
              >
                +
              </span>

              <span className="relative">Sign In</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="
          hidden
          lg:flex
          absolute
          left-7
          right-3
          bottom-4
          justify-between
          items-center
          text-[11px]
          font-mono
          text-white/40
          z-[3]
        "
      >
        <div className="flex items-center gap-3">
          <a href="#">Community</a>
          <span>/</span>
          <a href="#">Changelog</a>
          <span>/</span>
          <a href="#">Legal</a>
          <span>/</span>
          <a href="#">Careers</a>
        </div>

        <div className="flex items-center gap-3">
          <a href="#">𝕏</a>
          <a href="#">GitHub</a>
          <span className="h-3 w-px bg-white/10" />
          <button>☀️</button>
        </div>
      </div>
    </div>
  );
}
