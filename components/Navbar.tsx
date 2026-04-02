"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// ─── Config ──────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "AI", href: "/ai-exploration" },
];

const LINKEDIN_URL = "https://www.linkedin.com/in/shimoli-joshi";
const EMAIL = "mailto:shimoli95@gmail.com";
const RESUME_URL =
  "https://drive.google.com/file/d/1pRm71uvPH_3ey6Vk2VC1ZjakilHPQUCD/view?usp=sharing";

// ─── Icons ───────────────────────────────────────────────────────────────────
function LinkedInIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function ResumeIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────
export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* ── Desktop: always-dark floating pill ── */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <nav
          className="
            flex items-center gap-0.5 px-2 py-1.5 rounded-full
            bg-[rgba(17,17,17,0.88)] backdrop-blur-xl
            border border-white/10
          "
          aria-label="Main navigation"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`
                px-3.5 py-1.5 rounded-full text-sm transition-colors duration-150
                ${
                  isActive(href)
                    ? "font-medium text-[#f2f2f2] bg-white/15"
                    : "text-[#b3b3b3] hover:text-[#f2f2f2] hover:bg-white/8"
                }
              `}
            >
              {label}
            </Link>
          ))}

          <div className="w-px h-4 mx-1 bg-white/15" />

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="
              w-9 h-9 rounded-full flex items-center justify-center
              text-[#b3b3b3] hover:text-[#f2f2f2] hover:bg-white/10
              transition-colors duration-150
            "
          >
            <LinkedInIcon />
          </a>

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View resume"
            className="
              w-9 h-9 rounded-full flex items-center justify-center
              text-[#b3b3b3] hover:text-[#f2f2f2] hover:bg-white/10
              transition-colors duration-150
            "
          >
            <ResumeIcon />
          </a>
        </nav>
      </header>

      {/* ── Mobile: always-dark top bar ── */}
      <header className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <div
          className="
            flex items-center justify-between px-5 py-4
            bg-[rgba(17,17,17,0.92)] backdrop-blur-xl
            border-b border-white/8
          "
        >
          <Link
            href="/"
            className="text-base font-semibold tracking-tight text-[#f2f2f2]"
          >
            Shimoli
          </Link>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="
              p-2 -mr-1 rounded-lg
              text-[#b3b3b3] hover:text-[#f2f2f2] hover:bg-white/8
              transition-colors duration-150
            "
          >
            {mobileOpen ? (
              <CloseIcon />
            ) : (
              <span className="flex flex-col gap-[5px]" aria-hidden="true">
                <span className="block w-5 h-[1.5px] rounded bg-current" />
                <span className="block w-5 h-[1.5px] rounded bg-current" />
              </span>
            )}
          </button>
        </div>

        {mobileOpen && (
          <div
            className="
              px-5 pb-6 pt-2 flex flex-col gap-1
              bg-[rgba(17,17,17,0.96)] backdrop-blur-xl
              border-b border-white/8
            "
          >
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`
                  px-3 py-2.5 rounded-xl text-sm transition-colors duration-150
                  ${
                    isActive(href)
                      ? "font-medium text-[#f2f2f2] bg-white/12"
                      : "text-[#b3b3b3] hover:text-[#f2f2f2] hover:bg-white/6"
                  }
                `}
              >
                {label}
              </Link>
            ))}

            <div className="h-px bg-white/10 my-2" />

            <div className="flex gap-2">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm
                  text-[#b3b3b3] hover:text-[#f2f2f2] hover:bg-white/6
                  transition-colors duration-150
                "
              >
                <LinkedInIcon />
                LinkedIn
              </a>
              <a
                href={EMAIL}
                className="
                  flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm
                  text-[#b3b3b3] hover:text-[#f2f2f2] hover:bg-white/6
                  transition-colors duration-150
                "
              >
                Email
              </a>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm
                  text-[#b3b3b3] hover:text-[#f2f2f2] hover:bg-white/6
                  transition-colors duration-150
                "
              >
                <ResumeIcon />
                Resume
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
