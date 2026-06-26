import { Shield } from "lucide-react";
import { ArrowRight } from "lucide-react";
import infra from "../assets/Infra.png";
import contributors from "../assets/contributors.png";

export default function Infrastructure() {
    const sentinelFeatures = [
        "Bot Detection",
        "Brute Force",
        "Breached Passwords",
        "Impossible Travel",
        "Rate Limiting",
        "Geo Blocking",
        "Suspicious IPs",
        "Disposable Emails",
        "Email Abuse",
        "Free Trial Abuse",
    ];

    const sections = [
        {
            title: "Dashboard",
            items: [
                "User management",
                "Session monitoring",
                "Organization oversight",
                "User analytics",
            ],
        },
        {
            title: "Audit Logs",
            items: [
                "Auto-captured events",
                "Filter & search",
                "Configurable retention",
                "Log drain to SIEM",
            ],
        },
        {
            title: "Enterprise",
            items: [
                "Self-service SSO",
                "SCIM provisioning",
                "Directory sync",
                "RBAC",
            ],
        },
    ];

    return (
        <>
            <div className="relative mt-8 pt-6 pb-2">
                <div
                    className="absolute top-0 bottom-0 z-0 pointer-events-none"
                    style={{
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100vw",
                        maskImage:
                            "linear-gradient(transparent 0%, black 80%, black 92%, transparent 100%)",
                        WebkitMaskImage:
                            "linear-gradient(transparent 0%, black 80%, black 92%, transparent 100%)",
                    }}
                >
                    <div className="absolute inset-0 bg-neutral-800/30"></div>

                    <div className="absolute inset-0 opacity-[0.07]">
                        <svg className="w-full h-full">
                            <filter id="infra-grain">
                                <feTurbulence
                                    type="fractalNoise"
                                    baseFrequency="0.85"
                                    numOctaves="4"
                                    stitchTiles="stitch"
                                />
                                <feColorMatrix type="saturate" values="0" />
                            </filter>

                            <rect width="100%" height="100%" filter="url(#infra-grain)" />
                        </svg>
                    </div>
                </div>

                <div className="relative z-10 mb-6">
                    <div className="flex items-center gap-4 mb-2">
                        <span className="text-lg font-medium text-neutral-200 tracking-tight shrink-0">
                            Infrastructure
                        </span>

                        <div className="flex-1 border-t border-white/15"></div>
                    </div>

                    <p className="text-[14px] sm:text-base text-neutral-400 leading-relaxed">
                        Connect to our infrastructure and power your self-hosted Better Auth with
                        a dashboard, audit logs, security detection, enterprise features, and more.
                    </p>
                </div>

                <div
                    className="relative z-10 overflow-hidden border border-white/10"
                    style={{
                        maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
                        WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
                    }}
                >
                    <img
                        src={infra}
                        alt="Dashboard"
                        className="block w-full h-auto select-none"
                        draggable={false}
                    />

                </div>
            </div>

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 -mt-4 -mx-px">
                <div
                    className="absolute top-0 bottom-0 z-0 pointer-events-none"
                    // style={{
                    //     left: "50%",
                    //     transform: "translateX(-50%)",
                    //     width: "100vw",
                    //     maskImage:
                    //         "linear-gradient(transparent 0%, black 8%, black 92%, transparent 100%)",
                    //     WebkitMaskImage:
                    //         "linear-gradient(transparent 0%, black 8%, black 92%, transparent 100%)",
                    // }}
                >
                    <div className="absolute inset-0 bg-neutral-800/30"></div>

                    <div className="absolute inset-0 opacity-[0.07]">
                        <svg className="w-full h-full">
                            <filter id="infra-grain">
                                <feTurbulence
                                    type="fractalNoise"
                                    baseFrequency="0.85"
                                    numOctaves="4"
                                    stitchTiles="stitch"
                                />
                                <feColorMatrix type="saturate" values="0" />
                            </filter>

                            <rect width="100%" height="100%" filter="url(#infra-grain)" />
                        </svg>
                    </div>
                </div>
                {sections.map((section) => (
                    <div
                        key={section.title}
                        className="relative overflow-hidden border-t border-r border-b border-dashed border-white/20 first:border-l first:-mt-px p-4"
                    >
                        <h4 className="relative text-[12px] sm:text-xs font-mono font-semibold uppercase tracking-widest text-neutral-200 mb-3">
                            {section.title}
                        </h4>

                        <ul className="space-y-1.5">
                            {section.items.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-start gap-2 text-[13px] sm:text-[14px] text-neutral-400"
                                >
                                    <span className="text-white/30">+</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="relative z-10 border border-dashed border-white/20 -mt-px -mx-px p-4">
                <div
                    className="absolute top-0 bottom-0 z-0 pointer-events-none"
                    // style={{
                    //     left: "50%",
                    //     transform: "translateX(-50%)",
                    //     width: "100vw",
                    //     maskImage:
                    //         "linear-gradient(transparent 0%, black 8%, black 92%, transparent 100%)",
                    //     WebkitMaskImage:
                    //         "linear-gradient(transparent 0%, black 8%, black 92%, transparent 100%)",
                    // }}
                >
                    <div className="absolute inset-0 bg-neutral-800/30"></div>

                    <div className="absolute inset-0 opacity-[0.07]">
                        <svg className="w-full h-full">
                            <filter id="infra-grain">
                                <feTurbulence
                                    type="fractalNoise"
                                    baseFrequency="0.85"
                                    numOctaves="4"
                                    stitchTiles="stitch"
                                />
                                <feColorMatrix type="saturate" values="0" />
                            </filter>

                            <rect width="100%" height="100%" filter="url(#infra-grain)" />
                        </svg>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    {/* Left */}
                    <div className="sm:w-1/3">
                        <div className="flex items-center gap-2 mb-1">
                            <Shield
                                size={12}
                                strokeWidth={1.5}
                                className="text-white/30"
                            />

                            <h4 className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-widest text-neutral-200">
                                Sentinel
                            </h4>
                        </div>

                        <p className="text-[13px] sm:text-[14px] text-neutral-400 leading-relaxed">
                            Real-time threat detection before it reaches your users.
                        </p>
                    </div>

                    {/* Right */}
                    <div className="flex-1 flex flex-wrap gap-1.5">
                        {sentinelFeatures.map((feature) => (
                            <span
                                key={feature}
                                className="inline-flex items-center px-2 py-1 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-neutral-400 border border-white/[0.12] bg-white/[0.03] hover:bg-white/[0.06] hover:text-neutral-200 transition-colors"
                            >
                                {feature}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="relative z-10 flex items-center justify-between mt-4 px-6 py-5 border border-dashed border-white/20 bg-neutral-900/[0.01]">
                <div
                    className="absolute top-0 bottom-0 z-0 pointer-events-none"
                    // style={{
                    //     left: "50%",
                    //     transform: "translateX(-50%)",
                    //     width: "100vw",
                    //     maskImage:
                    //         "linear-gradient(transparent 0%, black 8%, black 92%, transparent 100%)",
                    //     WebkitMaskImage:
                    //         "linear-gradient(transparent 0%, black 8%, black 92%, transparent 100%)",
                    // }}
                >
                    <div className="absolute inset-0 bg-neutral-800/30"></div>

                    <div className="absolute inset-0 opacity-[0.07]">
                        <svg className="w-full h-full">
                            <filter id="infra-grain">
                                <feTurbulence
                                    type="fractalNoise"
                                    baseFrequency="0.85"
                                    numOctaves="4"
                                    stitchTiles="stitch"
                                />
                                <feColorMatrix type="saturate" values="0" />
                            </filter>

                            <rect width="100%" height="100%" filter="url(#infra-grain)" />
                        </svg>
                    </div>
                </div>
                <div className="flex flex-col gap-0.5">
                    <span className="text-[13px] sm:text-[14px] font-medium text-neutral-200">
                        Explore plans
                    </span>

                    <span className="text-[11px] sm:text-[12px] text-neutral-400">
                        Dashboard, audit logs, security detection, transactional comms, and
                        more.
                    </span>
                </div>

                <a
                    href="#"
                    className="inline-flex items-center gap-1.5 shrink-0 ml-4 px-4 py-2.5 bg-white/90 !text-black hover:opacity-80 hover:cursor-pointer transition-all font-mono text-[11px] uppercase tracking-widest group"
                >
                    View Plans
                    <ArrowRight
                        size={10}
                        className="opacity-70 group-hover:translate-x-0.5 transition-transform"
                    />
                </a>
            </div>

            <div className="relative mt-10 pt-8 pb-16 overflow-hidden">
                {/* Background Logo */}
                <div
                    className="absolute -right-10 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.04]"
                    aria-hidden="true"
                >
                    <svg
                        width="300"
                        height="225"
                        viewBox="0 0 60 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 0H15V15H30V30H15V45H0V30V15V0ZM45 30V15H30V0H45H60V15V30V45H45H30V30H45Z"
                            className="fill-foreground"
                        />
                    </svg>
                </div>

                {/* Dot Background */}
                <div
                    className="absolute inset-0 pointer-events-none select-none"
                    aria-hidden="true"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle, currentColor 0.5px, transparent 0.5px)",
                        backgroundSize: "24px 24px",
                        opacity: 0.03,
                    }}
                />

                <div className="pt-8">
                    <div className="flex items-center gap-4 mb-2">
                        <span className="text-lg font-medium text-neutral-200 tracking-tight shrink-0">
                            Contributors
                        </span>
                        <div className="flex-1 border-t border-white/10">
                        </div>
                    </div>
                    <p className="text-[13px] text-neutral-400 mb-5 leading-relaxed">
                        Built by a community of
                        <span className="text-neutral-200 font-medium tabular-nums">
                            {" "} 874+</span> contributors.
                    </p>
                    <img
                        src={contributors}
                        alt="Contributors"
                        className="block w-full h-auto select-none"
                        draggable={false}
                    />
                </div>

                <div className="relative space-y-6">
                    <p className="text-center text-lg text-balance text-neutral-400 tracking-tight">
                        Roll your own auth with confidence in minutes.
                    </p>

                    <div className="flex items-center justify-center gap-2">

                        <a
                            href="https://www.npmjs.com/package/better-auth"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="flex items-center gap-1.5 px-2.5 hover:bg-foreground/4 rounded-sm transition-colors text-foreground/50 dark:text-foreground/50">

                                {/* NPM SVG */}
                                <svg
                                    className="size-[11px] -translate-y-px text-neutral-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1.2em"
                                    height="1.2em"
                                    viewBox="0 0 128 128"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M0 7.062C0 3.225 3.225 0 7.062 0h113.88c3.838 0 7.063 3.225 7.063 7.062v113.88c0 3.838-3.225 7.063-7.063 7.063H7.062c-3.837 0-7.062-3.225-7.062-7.063zm23.69 97.518h40.395l.05-58.532h19.494l-.05 58.581h19.543l.05-78.075l-78.075-.1l-.1 78.126z"
                                    />
                                    <path
                                        className="fill-background text-neutral-400"
                                        d="M25.105 65.52V26.512H40.96c8.72 0 26.274.034 39.008.075l23.153.075v77.866H83.645v-58.54H64.057v58.54H25.105z"
                                    />
                                </svg>

                                <span className="text-xs font-mono text-neutral-400">
                                    4.6M / week
                                </span>
                            </div>
                        </a>

                        <a
                            href="https://github.com/better-auth/better-auth"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="flex items-center gap-1.5 px-2.5 hover:bg-foreground/4 rounded-sm transition-colors text-foreground/50 dark:text-foreground/50">

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="11"
                                    height="11"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="size-[11px] -translate-y-px text-neutral-400"
                                >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>

                                <span className="text-xs font-mono text-neutral-400">
                                    29k stars
                                </span>

                            </div>
                        </a>

                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-4 pt-1">

                        {/* Get Started Button */}
                        <a
                            href="/docs/installation"
                            className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 bg-white !text-black text-xs sm:text-sm font-medium hover:opacity-90 transition-colors"
                        >
                            Get Started
                        </a>

                        {/* Sign In Button */}
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
        </>
    );
}