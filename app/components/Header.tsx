"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#09090B]/70 backdrop-blur border-b border-white/10"
          : "bg-transparent border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-5 flex justify-between items-center">
        <a href="/" className="logo">
          <div className="logo-mark">
            <div className="flow-lines">
              <div className="flow-line"></div>
              <div className="flow-line"></div>
              <div className="flow-line"></div>
              <div className="flow-line"></div>
            </div>
            <div className="curve-top"></div>
            <div className="curve-bottom"></div>
            <div className="center-element"></div>
          </div>
          <div className="logo-text">
            <span className="text-blue-500">Hawk</span>
            <span className="sims">Sims</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-300 items-center">
          <div className="relative group">
            <button
              className="hover:text-white flex items-center gap-1"
              onClick={() => {
                window.location.href = "/industries";
              }}
              type="button"
            >
              Industries
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-72 bg-[#18181B] border border-white/10 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-40 p-2">
              <a
                href="#aerospace"
                className="block px-4 py-2 hover:bg-white/5 rounded"
              >
                <div className="font-semibold text-white">
                  Aerospace & Defense
                </div>
                <div className="text-xs text-gray-400">
                  Advanced simulations for aerospace engineering.
                </div>
              </a>
              <a
                href="#oilgas"
                className="block px-4 py-2 hover:bg-white/5 rounded"
              >
                <div className="font-semibold text-white">Oil & Gas</div>
                <div className="text-xs text-gray-400">
                  Reservoir modeling and flow optimization.
                </div>
              </a>
              <a
                href="#construction"
                className="block px-4 py-2 hover:bg-white/5 rounded"
              >
                <div className="font-semibold text-white">
                  Construction & Infrastructure
                </div>
                <div className="text-xs text-gray-400">
                  Structural analysis and smart city solutions.
                </div>
              </a>
              <a
                href="#automotive"
                className="block px-4 py-2 hover:bg-white/5 rounded"
              >
                <div className="font-semibold text-white">Automotive</div>
                <div className="text-xs text-gray-400">
                  Vehicle dynamics and autonomous systems.
                </div>
              </a>
              <a
                href="#electronics"
                className="block px-4 py-2 hover:bg-white/5 rounded"
              >
                <div className="font-semibold text-white">Electronics</div>
                <div className="text-xs text-gray-400">
                  Circuit simulation and thermal management.
                </div>
              </a>
            </div>
          </div>
          <div className="relative group">
            <button className="hover:text-white flex items-center gap-1">
              Capabilities{" "}
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-40 bg-[#18181B] border border-white/10 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-40">
              <a href="#ai" className="block px-4 py-2 hover:bg-white/5">
                AI
              </a>
              <a href="#cloud" className="block px-4 py-2 hover:bg-white/5">
                Cloud
              </a>
              <a href="#data" className="block px-4 py-2 hover:bg-white/5">
                Data
              </a>
            </div>
          </div>
          <div className="relative group">
            <button className="hover:text-white flex items-center gap-1">
              Services{" "}
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-44 bg-[#18181B] border border-white/10 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-40">
              <a
                href="#consulting"
                className="block px-4 py-2 hover:bg-white/5"
              >
                Consulting
              </a>
              <a
                href="#integration"
                className="block px-4 py-2 hover:bg-white/5"
              >
                Integration
              </a>
              <a href="#support" className="block px-4 py-2 hover:bg-white/5">
                Support
              </a>
            </div>
          </div>
          <div className="relative group">
            <button className="hover:text-white flex items-center gap-1">
              Solutions{" "}
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-[#18181B] border border-white/10 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-40">
              <a
                href="#healthcare"
                className="block px-4 py-2 hover:bg-white/5"
              >
                Healthcare
              </a>
              <a href="#finance" className="block px-4 py-2 hover:bg-white/5">
                Finance
              </a>
              <a href="#education" className="block px-4 py-2 hover:bg-white/5">
                Education
              </a>
            </div>
          </div>
          <a href="#research" className="hover:text-white">
            Research
          </a>
          <a href="/blog" className="hover:text-white">
            Blog
          </a>
          <a href="#about" className="hover:text-white">
            About Us
          </a>
        </nav>

        {/* Mobile Toggle */}
        <MobileMenu />
      </div>
    </header>
  );
}

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <>
      {/* Only show hamburger when menu is closed */}
      {!isOpen && (
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col md:hidden bg-[#18181B]/95 border border-white/10 rounded-2xl shadow-2xl mx-2 mt-2">
          {/* Logo and Close Icon Row */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
            <a href="./index.html" className="logo">
              <div className="logo-mark">
                <div className="flow-lines">
                  <div className="flow-line"></div>
                  <div className="flow-line"></div>
                  <div className="flow-line"></div>
                  <div className="flow-line"></div>
                </div>
                <div className="curve-top"></div>
                <div className="curve-bottom"></div>
                <div className="center-element"></div>
              </div>
              <div className="logo-text">
                <span className="hawk">Hawk</span>
                <span className="sims">Sims</span>
              </div>
            </a>
            <button
              className="text-white focus:outline-none"
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {/* Menu Items */}
          <div className="px-4 pb-4 pt-2 space-y-2 text-gray-300 text-base font-medium">
            {/* Industries Dropdown */}
            <div className="flex items-center">
              <button
                className="flex-1 text-left py-3 px-2 rounded-lg hover:bg-white/5 focus:outline-none transition-colors"
                onClick={() => {
                  setIsOpen(false);
                  window.location.href = "/industries";
                }}
                tabIndex={0}
              >
                Industries
              </button>
              <button
                className="flex items-center px-2 focus:outline-none"
                onClick={() => handleDropdown("industries")}
                aria-expanded={openDropdown === "industries"}
                tabIndex={0}
              >
                <svg
                  className={`w-5 h-5 ml-2 transition-transform duration-300 ${
                    openDropdown === "industries" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openDropdown === "industries"
                  ? "max-h-96 opacity-100 mt-1"
                  : "max-h-0 opacity-0"
              } bg-[#232336] rounded-xl shadow-lg`}
            >
              {openDropdown === "industries" && (
                <div className="pl-4 py-2 space-y-1">
                  <a
                    href="#aerospace"
                    className="block py-2 px-2 rounded-lg hover:bg-violet-700/20 transition-colors"
                  >
                    <div className="font-semibold text-white">
                      Aerospace & Defense
                    </div>
                    <div className="text-xs text-gray-400">
                      Advanced simulations for aerospace engineering.
                    </div>
                  </a>
                  <a
                    href="#oilgas"
                    className="block py-2 px-2 rounded-lg hover:bg-violet-700/20 transition-colors"
                  >
                    <div className="font-semibold text-white">Oil & Gas</div>
                    <div className="text-xs text-gray-400">
                      Reservoir modeling and flow optimization.
                    </div>
                  </a>
                  <a
                    href="#construction"
                    className="block py-2 px-2 rounded-lg hover:bg-violet-700/20 transition-colors"
                  >
                    <div className="font-semibold text-white">
                      Construction & Infrastructure
                    </div>
                    <div className="text-xs text-gray-400">
                      Structural analysis and smart city solutions.
                    </div>
                  </a>
                  <a
                    href="#automotive"
                    className="block py-2 px-2 rounded-lg hover:bg-violet-700/20 transition-colors"
                  >
                    <div className="font-semibold text-white">Automotive</div>
                    <div className="text-xs text-gray-400">
                      Vehicle dynamics and autonomous systems.
                    </div>
                  </a>
                  <a
                    href="#electronics"
                    className="block py-2 px-2 rounded-lg hover:bg-violet-700/20 transition-colors"
                  >
                    <div className="font-semibold text-white">Electronics</div>
                    <div className="text-xs text-gray-400">
                      Circuit simulation and thermal management.
                    </div>
                  </a>
                </div>
              )}
            </div>
            {/* Capabilities Dropdown */}
            <div>
              <button
                className="w-full flex justify-between items-center py-3 px-2 rounded-lg hover:bg-white/5 focus:outline-none transition-colors"
                onClick={() => handleDropdown("capabilities")}
                aria-expanded={openDropdown === "capabilities"}
              >
                <span>Capabilities</span>
                <svg
                  className={`w-5 h-5 ml-2 transition-transform duration-300 ${
                    openDropdown === "capabilities" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openDropdown === "capabilities"
                    ? "max-h-40 opacity-100 mt-1"
                    : "max-h-0 opacity-0"
                } bg-[#232336] rounded-xl shadow-lg`}
              >
                {openDropdown === "capabilities" && (
                  <div className="pl-4 py-2 space-y-1">
                    <a
                      href="#ai"
                      className="block py-2 px-2 rounded-lg hover:bg-violet-700/20 transition-colors"
                    >
                      AI
                    </a>
                    <a
                      href="#cloud"
                      className="block py-2 px-2 rounded-lg hover:bg-violet-700/20 transition-colors"
                    >
                      Cloud
                    </a>
                    <a
                      href="#data"
                      className="block py-2 px-2 rounded-lg hover:bg-violet-700/20 transition-colors"
                    >
                      Data
                    </a>
                  </div>
                )}
              </div>
            </div>
            {/* Services Dropdown */}
            <div>
              <button
                className="w-full flex justify-between items-center py-3 px-2 rounded-lg hover:bg-white/5 focus:outline-none transition-colors"
                onClick={() => handleDropdown("services")}
                aria-expanded={openDropdown === "services"}
              >
                <span>Services</span>
                <svg
                  className={`w-5 h-5 ml-2 transition-transform duration-300 ${
                    openDropdown === "services" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openDropdown === "services"
                    ? "max-h-40 opacity-100 mt-1"
                    : "max-h-0 opacity-0"
                } bg-[#232336] rounded-xl shadow-lg`}
              >
                {openDropdown === "services" && (
                  <div className="pl-4 py-2 space-y-1">
                    <a
                      href="#consulting"
                      className="block py-2 px-2 rounded-lg hover:bg-violet-700/20 transition-colors"
                    >
                      Consulting
                    </a>
                    <a
                      href="#integration"
                      className="block py-2 px-2 rounded-lg hover:bg-violet-700/20 transition-colors"
                    >
                      Integration
                    </a>
                    <a
                      href="#support"
                      className="block py-2 px-2 rounded-lg hover:bg-violet-700/20 transition-colors"
                    >
                      Support
                    </a>
                  </div>
                )}
              </div>
            </div>
            {/* Solutions Dropdown */}
            <div>
              <button
                className="w-full flex justify-between items-center py-3 px-2 rounded-lg hover:bg-white/5 focus:outline-none transition-colors"
                onClick={() => handleDropdown("solutions")}
                aria-expanded={openDropdown === "solutions"}
              >
                <span>Solutions</span>
                <svg
                  className={`w-5 h-5 ml-2 transition-transform duration-300 ${
                    openDropdown === "solutions" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openDropdown === "solutions"
                    ? "max-h-40 opacity-100 mt-1"
                    : "max-h-0 opacity-0"
                } bg-[#232336] rounded-xl shadow-lg`}
              >
                {openDropdown === "solutions" && (
                  <div className="pl-4 py-2 space-y-1">
                    <a
                      href="#healthcare"
                      className="block py-2 px-2 rounded-lg hover:bg-violet-700/20 transition-colors"
                    >
                      Healthcare
                    </a>
                    <a
                      href="#finance"
                      className="block py-2 px-2 rounded-lg hover:bg-violet-700/20 transition-colors"
                    >
                      Finance
                    </a>
                    <a
                      href="#education"
                      className="block py-2 px-2 rounded-lg hover:bg-violet-700/20 transition-colors"
                    >
                      Education
                    </a>
                  </div>
                )}
              </div>
            </div>
            {/* Other menu items */}
            <a
              href="#research"
              className="block py-3 px-2 rounded-lg hover:bg-violet-700/20 transition-colors"
            >
              Research
            </a>
            <a
              href="/blog"
              className="block py-3 px-2 rounded-lg hover:bg-violet-700/20 transition-colors"
            >
              Blog
            </a>
            <a
              href="#about"
              className="block py-3 px-2 rounded-lg hover:bg-violet-700/20 transition-colors"
            >
              About Us
            </a>
          </div>
        </div>
      )}
    </>
  );
}
