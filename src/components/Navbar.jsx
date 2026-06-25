import logo from "../assets/vite.svg";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[99] flex items-start bg-white">
      {/* Left Logo Panel */}
      <div className="w-[40%] h-[44px] hidden lg:flex items-stretch shrink-0 border-r border-black/[0.06] px-7">
        <a
          href="/"
          className="flex h-full items-center justify-center px-2"
        >
          <img
            src={logo}
            alt="BETTER-AUTH."
            className="h-[20px] w-auto"
          />
        </a>
        <p className="pt-3 sm:pt-3 text-neutral-800 dark:text-neutral-200 font-medium">BETTER-AUTH.</p>
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

      {/* Mobile / Tablet Navbar */}
      <div className="lg:hidden flex w-full h-[44px] items-center justify-between border-b border-black/[0.06] px-4">
        {/* Mobile Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="BETTER-AUTH." className="h-[18px] w-auto" />
          <span className="font-medium text-sm text-neutral-800">BETTER-AUTH.</span>
        </a>

        {/* Mobile actions */}
        <div className="flex items-center gap-2">
          <a
            href="#"
            className="flex items-center px-3 py-1.5 bg-black text-white font-mono text-[11px] tracking-wider uppercase"
          >
            SIGN-IN
          </a>
          {/* Hamburger */}
          <MobileMenu />
        </div>
      </div>
    </div>
  );
}

function MobileMenu() {
  return (
    <details className="relative group">
      <summary className="list-none cursor-pointer flex items-center justify-center w-8 h-8 text-black/60 hover:text-black transition-colors">
        {/* Hamburger icon */}
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
          <line x1="0" y1="1" x2="18" y2="1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="0" y1="7" x2="18" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="0" y1="13" x2="18" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </summary>
      {/* Dropdown menu */}
      <div className="absolute right-0 top-full mt-1 w-44 bg-white border border-black/[0.08] shadow-md z-50">
        {[
          { label: "README", active: true },
          { label: "DOCS" },
          { label: "PRODUCTS" },
          { label: "ENTERPRISE" },
          { label: "RESOURCES" },
        ].map(({ label, active }) => (
          <a
            key={label}
            href="#"
            className={`block px-4 py-2.5 font-mono text-[11px] tracking-wider uppercase border-b border-black/[0.06] transition-colors
              ${active ? "text-black font-semibold" : "text-black/60 hover:text-black hover:bg-neutral-50"}`}
          >
            {label}
          </a>
        ))}
      </div>
    </details>
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