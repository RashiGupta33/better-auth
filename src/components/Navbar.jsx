export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[99] flex items-start bg-white">
      {/* Left Logo Panel */}
      <div className="w-[40%] h-[44px] hidden lg:flex items-stretch shrink-0 border-r border-black/[0.06] px-7">
        <a
          href="/"
          className="flex h-full items-center px-4"
        >
          <img
            src="/better-auth-logo.svg"
            alt="BETTER-AUTH."
            className="h-[20px] w-auto"
          />
        </a>
      </div>

      {/* Right Navigation */}
      <div className="flex-1 hidden lg:flex h-[44px] border-b border-black/[0.06] bg-white min-w-0">
        <NavItem active>README</NavItem>
        <NavItem>DOCS</NavItem>
        <NavDropdown>PRODUCTS</NavDropdown>
        <NavItem>ENTERPRISE</NavItem>
        <NavDropdown>RESOURCES</NavDropdown>

        <a
          href="#"
          className="
            flex
            items-center
            gap-2
            px-5
            bg-black
            !text-white
            font-mono
            text-xs
            tracking-wider
            uppercase
            shrink-0
          "
        >
          SIGN-IN
          <span>↗</span>
        </a>
      </div>
    </div>
  );
}

function NavItem({ children, active = false }) {
  return (
    <div className="flex-1">
      <a
        href="#"
        className={`
          flex
          items-center
          justify-center
          h-[44px]
          border-r
          border-black/[0.06]
          font-mono
          text-xs
          uppercase
          tracking-wider
          transition-colors
          ${active
            ? "border-b-2 border-b-black text-black"
            : "text-black/60 hover:text-black"
          }
        `}
      >
        {children}
      </a>
    </div>
  );
}

function NavDropdown({ children }) {
  return (
    <div className="flex-1">
      <button
        className="
          w-full
          h-[44px]
          flex
          items-center
          justify-center
          gap-2
          border-r
          border-black/[0.06]
          font-mono
          text-xs
          uppercase
          tracking-wider
          text-black/60
          hover:text-black
        "
      >
        {children}
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
        >
          <path
            d="M1 1L5 5L9 1"
            stroke="currentColor"
            strokeWidth="1.2"
          />
        </svg>
      </button>
    </div>
  );
}