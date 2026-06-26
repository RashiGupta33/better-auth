export default function Framework() {
    const features = [
        { title: "Two Factor", category: "Authentication" },
        { title: "Passkey", category: "Authentication" },
        { title: "Magic Link", category: "Authentication" },
        { title: "Email OTP", category: "Authentication" },
        { title: "Username", category: "Authentication" },
        { title: "One Tap", category: "Authentication" },
        { title: "Phone Number", category: "Authentication" },
        { title: "Anonymous", category: "Authentication" },
        { title: "Bearer", category: "Authentication" },
        { title: "Generic OAuth", category: "Authentication" },
        { title: "One Time Token", category: "Authentication" },
        { title: "SIWE", category: "Authentication" },
        { title: "Organization", category: "Organization" },
        { title: "Admin", category: "Organization" },
        { title: "Multi Session", category: "Organization" },
        { title: "API Key", category: "Organization" },
        { title: "SSO", category: "Enterprise" },
    ];

    const marqueeItems = [...features, ...features];
    return (
        <>
            {/* Frameworks */}
            < div className="my-4" >
                <div className="flex items-center gap-4">
                    <span className="text-lg font-medium text-neutral-200 tracking-tight shrink-0">Framework</span>
                    <div className="flex-1 border-t border-black/15">
                    </div>
                </div>
                <p className="text-[15px] sm:text-base text-neutral-400 mt-1">The most comprehensive authentication framework for TypeScript.
                </p>
            </div >

            <div className="mt-8 mb-10">
                <div className="border-r border-white/[0.1] bg-black/[0.01] overflow-hidden">
                    <div className="flex flex-col lg:flex-row">
                        <div className="min-w-0 flex-1 min-h-[320px] sm:min-h-[360px] lg:h-[400px] overflow-hidden">
                            <div className="pb-5 h-full" style={{ opacity: 1, transform: "none" }}>
                                <div className="relative">
                                    <div className="absolute -inset-4 bg-gradient-to-br from-foreground/[0.02] via-transparent to-foreground/[0.02] rounded-2xl blur-xl pointer-events-none dark:from-foreground/[0.03] dark:to-foreground/[0.03]"></div>
                                    <div className="relative overflow-hidden bg-black">
                                        <div className="px-3 py-1.5">
                                            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-neutral-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 32 32"><rect width="28" height="28" x="2" y="2" fill="currentColor" opacity="0.3" rx="1.312"></rect><path fill="currentColor" fillRule="evenodd" d="M18.245 23.759v3.068a6.5 6.5 0 0 0 1.764.575a11.6 11.6 0 0 0 2.146.192a10 10 0 0 0 2.088-.211a5.1 5.1 0 0 0 1.735-.7a3.54 3.54 0 0 0 1.181-1.266a4.47 4.47 0 0 0 .186-3.394a3.4 3.4 0 0 0-.717-1.117a5.2 5.2 0 0 0-1.123-.877a12 12 0 0 0-1.477-.734q-.6-.249-1.08-.484a5.5 5.5 0 0 1-.813-.479a2.1 2.1 0 0 1-.516-.518a1.1 1.1 0 0 1-.181-.618a1.04 1.04 0 0 1 .162-.571a1.4 1.4 0 0 1 .459-.436a2.4 2.4 0 0 1 .726-.283a4.2 4.2 0 0 1 .956-.1a6 6 0 0 1 .808.058a6 6 0 0 1 .856.177a6 6 0 0 1 .836.3a4.7 4.7 0 0 1 .751.422V13.9a7.5 7.5 0 0 0-1.525-.4a12.4 12.4 0 0 0-1.9-.129a8.8 8.8 0 0 0-2.064.235a5.2 5.2 0 0 0-1.716.733a3.66 3.66 0 0 0-1.171 1.271a3.73 3.73 0 0 0-.431 1.845a3.6 3.6 0 0 0 .789 2.34a6 6 0 0 0 2.395 1.639q.63.26 1.175.509a6.5 6.5 0 0 1 .942.517a2.5 2.5 0 0 1 .626.585a1.2 1.2 0 0 1 .23.719a1.1 1.1 0 0 1-.144.552a1.3 1.3 0 0 1-.435.441a2.4 2.4 0 0 1-.726.292a4.4 4.4 0 0 1-1.018.105a5.8 5.8 0 0 1-1.969-.35a5.9 5.9 0 0 1-1.805-1.045m-5.154-7.638h4v-2.527H5.938v2.527H9.92v11.254h3.171Z"></path></svg>auth.ts</span>
                                        </div>
                                        <div className="relative h-[310px] overflow-hidden">
                                            <figure dir="ltr" className="group shiki relative outline-none not-prose overflow-hidden text-sm shiki shiki-themes github-light github-dark border-0 rounded-none my-0 shadow-none bg-black [&_div]:bg-black [&_div]:text-[12px]" tabindex={0} data-line-numbers="true" style={{
                                                "--shiki-light": "#24292e",
                                                "--shiki-dark": "#e1e4e8",
                                                "--shiki-light-bg": "#fff",
                                                "--shiki-dark-bg": "#24292e",
                                            }}>
                                                <div className="empty:hidden absolute top-1 right-1 z-2 text-fd-muted-foreground">
                                                    <button type="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 transition-opacity size-7 border-none opacity-0 group-hover:opacity-100" aria-label="Copy Text">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check size-3.5 transition-transform scale-0" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy absolute size-3.5 transition-transform" aria-hidden="true"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
                                                    </button>
                                                </div>
                                                <div className="relative h-[400px] overflow-hidden">
                                                    <div
                                                        className="rounded-none border border-x-0 border-b-0 border-t-0 text-[13px] h-full overflow-hidden bg-fd-muted/50"
                                                        style={{
                                                            "--padding-right": "calc(var(--spacing) * 8)",
                                                            counterSet: "line 0",
                                                        }}
                                                    >
                                                        <pre className="min-w-full w-max *:flex *:flex-col py-2">
                                                            <code>
                                                                <span className="line">
                                                                    <span className="text-red-400">
                                                                        import
                                                                    </span>
                                                                    <span className="text-red-400">
                                                                        {" "}
                                                                        {"{ betterAuth } "}{" "}
                                                                    </span>
                                                                    <span className="text-red-400">
                                                                        from
                                                                    </span>
                                                                    <span className="text-red-400">
                                                                        {" "}
                                                                        "better-auth"
                                                                    </span>
                                                                </span>
                                                                {/* <br /> */}

                                                                <span className="line"></span>

                                                                <span className="line">
                                                                    <span className="text-red-500">
                                                                        export
                                                                    </span>
                                                                    <span className="text-red-500">
                                                                        {" "}
                                                                        const
                                                                    </span>
                                                                    <span className="text-blue-500">
                                                                        {" "}
                                                                        auth
                                                                    </span>
                                                                    <span style={{ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" }}>
                                                                        {" "}
                                                                        =
                                                                    </span>
                                                                    <span className="text-purple-500">
                                                                        {" "}
                                                                        betterAuth
                                                                    </span>
                                                                    <span style={{ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" }}>
                                                                        ({"{"})
                                                                    </span>
                                                                </span>

                                                                <span className="line">
                                                                    <span style={{ "--shiki-light": "#6F42C1", "--shiki-dark": "#E1E4E8" }}>
                                                                        {"  "}emailAndPassword
                                                                    </span>
                                                                    <span style={{ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" }}>
                                                                        : {"{"}
                                                                    </span>
                                                                </span>

                                                                <span className="line">
                                                                    <span style={{ "--shiki-light": "#6F42C1", "--shiki-dark": "#E1E4E8" }}>
                                                                        {"    "}enabled
                                                                    </span>
                                                                    <span style={{ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" }}>
                                                                        :{" "}
                                                                    </span>
                                                                    <span className="text-blue-500">
                                                                        true
                                                                    </span>
                                                                    <span style={{ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" }}>
                                                                        ,
                                                                    </span>
                                                                </span>

                                                                <span className="line">
                                                                    <span style={{ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" }}>
                                                                        {"  "}
                                                                        {"},"}
                                                                    </span>
                                                                </span>

                                                                <span className="line">
                                                                    <span style={{ "--shiki-light": "#6F42C1", "--shiki-dark": "#E1E4E8" }}>
                                                                        {"  "}socialProviders
                                                                    </span>
                                                                    <span style={{ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" }}>
                                                                        : {"{"}
                                                                    </span>
                                                                </span>

                                                                <span className="line">
                                                                    <span style={{ "--shiki-light": "#6F42C1", "--shiki-dark": "#E1E4E8" }}>
                                                                        {"    "}google
                                                                    </span>
                                                                    <span style={{ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" }}>
                                                                        : {"{"}
                                                                    </span>
                                                                </span>

                                                                <span className="line">
                                                                    <span style={{ "--shiki-light": "#6F42C1", "--shiki-dark": "#E1E4E8" }}>
                                                                        {"      "}clientId
                                                                    </span>
                                                                    <span style={{ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" }}>
                                                                        : process.env.
                                                                    </span>
                                                                    <span className="text-blue-500">
                                                                        GOOGLE_CLIENT_ID
                                                                    </span>
                                                                    <span className="text-red-500">
                                                                        !
                                                                    </span>
                                                                    <span style={{ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" }}>
                                                                        ,
                                                                    </span>
                                                                </span>

                                                                <span className="line">
                                                                    <span style={{ "--shiki-light": "#6F42C1", "--shiki-dark": "#E1E4E8" }}>
                                                                        {"      "}clientSecret
                                                                    </span>
                                                                    <span style={{ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" }}>
                                                                        : process.env.
                                                                    </span>
                                                                    <span className="text-blue-500">
                                                                        GOOGLE_CLIENT_SECRET
                                                                    </span>
                                                                    <span className="text-red-500">
                                                                        !
                                                                    </span>
                                                                    <span style={{ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" }}>
                                                                        ,
                                                                    </span>
                                                                </span>

                                                                <span className="line">
                                                                    <span style={{ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" }}>
                                                                        {"    "},
                                                                    </span>
                                                                </span>

                                                                <span className="line">
                                                                    <span style={{ "--shiki-light": "#6F42C1", "--shiki-dark": "#E1E4E8" }}>
                                                                        {"    "}github
                                                                    </span>
                                                                    <span style={{ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" }}>
                                                                        : {"{"}
                                                                    </span>
                                                                </span>

                                                                <span className="line">
                                                                    <span style={{ "--shiki-light": "#6F42C1", "--shiki-dark": "#E1E4E8" }}>
                                                                        {"      "}clientId
                                                                    </span>
                                                                    <span style={{ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" }}>
                                                                        : process.env.
                                                                    </span>
                                                                    <span className="text-blue-500">
                                                                        GITHUB_CLIENT_ID
                                                                    </span>
                                                                    <span className="text-red-500">
                                                                        !
                                                                    </span>
                                                                    <span style={{ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" }}>
                                                                        ,
                                                                    </span>
                                                                </span>

                                                                <span className="line">
                                                                    <span style={{ "--shiki-light": "#6F42C1", "--shiki-dark": "#E1E4E8" }}>
                                                                        {"      "}clientSecret
                                                                    </span>
                                                                    <span style={{ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" }}>
                                                                        : process.env.
                                                                    </span>
                                                                    <span style={{ "--shiki-light": "#6F42C1", "--shiki-dark": "#79B8FF" }}>
                                                                        GITHUB_CLIENT_SECRET
                                                                    </span>
                                                                    <span style={{ "--shiki-light": "#24292E", "--shiki-dark": "#F97583" }}>
                                                                        !
                                                                    </span>
                                                                    <span style={{ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" }}>
                                                                        ,
                                                                    </span>
                                                                </span>

                                                                <span className="line">
                                                                    <span style={{ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" }}>
                                                                        {"    "},
                                                                    </span>
                                                                </span>

                                                                <span className="line">
                                                                    <span style={{ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" }}>
                                                                        {"  "},
                                                                    </span>
                                                                </span>

                                                                <span className="line">
                                                                    <span style={{ "--shiki-light": "#6F42C1", "--shiki-dark": "#E1E4E8" }}>
                                                                        {"  "}plugins
                                                                    </span>
                                                                    <span style={{ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" }}>
                                                                        : [
                                                                    </span>
                                                                </span>

                                                                <span className="line">
                                                                    <span style={{ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" }}>
                                                                        {"    "}twoFactor
                                                                    </span>
                                                                    <span style={{ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" }}>
                                                                        (),
                                                                    </span>
                                                                </span>

                                                                <span className="line">
                                                                    <span style={{ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" }}>
                                                                        {"    "}passkey
                                                                    </span>
                                                                    <span style={{ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" }}>
                                                                        (),
                                                                    </span>
                                                                </span>

                                                                <span className="line">
                                                                    <span style={{ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" }}>
                                                                        {"    "}organization
                                                                    </span>
                                                                    <span style={{ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" }}>
                                                                        (),
                                                                    </span>
                                                                </span>

                                                                <span className="line">
                                                                    <span style={{ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" }}>
                                                                        {"  "}],
                                                                    </span>
                                                                </span>

                                                                <span className="line">
                                                                    <span style={{ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" }}>
                                                                        {"})"}
                                                                    </span>
                                                                </span>
                                                            </code>
                                                        </pre>

                                                        <div className="absolute inset-x-0 bottom-0 h-28 z-20 pointer-events-none bg-gradient-to-t from-white via-white/90 to-transparent" />
                                                    </div>
                                                </div>
                                            </figure>
                                            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row lg:flex-col lg:w-56 lg:shrink-0 border-t lg:border-t-0 lg:border-l border-white/[0.03] bg-black overflow-x-auto lg:overflow-visible">
                            <button
                                type="button"
                                className="relative flex-1 lg:flex-none text-left px-3 sm:px-4 py-2.5 sm:py-3 text-[10px] sm:text-[11px] lg:text-xs font-mono tracking-wider uppercase transition-colors border-r lg:border-r-0 lg:border-b last:border-r-0 lg:last:border-b-0 border-white/[0.08] whitespace-nowrap lg:whitespace-normal text-neutral-300 bg-white/5"
                            >
                                Declarative Config
                                <span className="absolute inset-y-0 right-0 w-[1.5px] bg-foreground/2 hidden lg:block"></span>
                            </button>

                            <button
                                type="button"
                                className="relative flex-1 lg:flex-none text-left px-3 sm:px-4 py-2.5 sm:py-3 text-[10px] sm:text-[11px] lg:text-xs font-mono tracking-wider uppercase transition-colors border-r lg:border-r-0 lg:border-b last:border-r-0 lg:last:border-b-0 border-white/[0.1] whitespace-nowrap lg:whitespace-normal text-neutral-400 hover:text-neutral-200"
                            >
                                Bring Your Own{" "}
                                <span className="text-amber-400">
                                    Database
                                </span>
                            </button>

                            <button
                                type="button"
                                className="relative flex-1 lg:flex-none text-left px-3 sm:px-4 py-2.5 sm:py-3 text-[10px] sm:text-[11px] lg:text-xs font-mono tracking-wider uppercase transition-colors border-r lg:border-r-0 lg:border-b last:border-r-0 lg:last:border-b-0 border-white/[0.1] whitespace-nowrap lg:whitespace-normal text-neutral-400 hover:text-neutral-200"
                            >
                                OAuth Providers
                            </button>

                            <button
                                type="button"
                                className="relative flex-1 lg:flex-none text-left px-3 sm:px-4 py-2.5 sm:py-3 text-[10px] sm:text-[11px] lg:text-xs font-mono tracking-wider uppercase transition-colors border-r lg:border-r-0 lg:border-b last:border-r-0 lg:last:border-b-0 border-white/[0.1] whitespace-nowrap lg:whitespace-normal text-neutral-400 hover:text-neutral-200"
                            >
                                Integrations
                            </button>

                            <div className="hidden lg:flex flex-1 items-end p-4">
                                <p className="text-[13px] leading-relaxed text-neutral-400">
                                    No dashboard clicks. Your auth lives in code — version controlled,
                                    type-safe, and reviewable in PRs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <div>
                    <a href="#" className="flex items-center justify-between w-full mb-4 text-[10px] font-mono text-neutral-200 hover:text-neutral-300 transition-colors uppercase tracking-wider border-b border-dashed border-white/[0.1] px-3 py-1.5 bg-white/10 hover:bg-white/15">
                        <span className="text-xs text-neutral-200">
                            Plugin Ecosystem
                        </span>
                        <span className="text-xs text-neutral-400">browse all →</span>
                    </a>
                    <div className="relative overflow-hidden">
                        {/* Left Fade */}
                        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-black to-transparent" />

                        {/* Right Fade */}
                        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-black to-transparent" />
                        <div className="flex animate-[marquee_40s_linear_infinite] mb-1.5 text-neutral-500">
                            {marqueeItems.map((item, index) => (
                                <span
                                    key={index}
                                    className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 mr-1.5 text-[11px] text-neutral-200 border border-white/[0.06] cursor-default whitespace-nowrap"
                                >
                                    <span className="text-neutral-200">
                                        {item.title}
                                    </span>
                                    <span className="text-[7px] font-mono uppercase tracking-wider text-neutral-400">
                                        {item.category}
                                    </span>
                                </span>
                            ))}
                        </div>

                        <div className="flex animate-[marquee-reverse_45s_linear_infinite] text-neutral-500">
                            {marqueeItems.map((item, index) => (
                                <span
                                    key={index}
                                    className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 mr-1.5 text-[11px] text-neutral-200 border border-white/[0.06] cursor-default whitespace-nowrap"
                                >
                                    <span className="text-neutral-200">
                                        {item.title}
                                    </span>
                                    <span className="text-[7px] font-mono uppercase tracking-wider text-neutral-400">
                                        {item.category}
                                    </span>
                                </span>
                            ))}
                        </div>
                    </div>

                </div>

            </div >
        </>
    );
}