import { MapPin, Phone } from "lucide-react";
import { PERSONAL_INFO } from "../../../Constants/personInformation";
import { SOCIAL_LINKS } from "../../../Constants/socialLinks";

/**
 * ============================================================
 * Global Footer Component
 * ============================================================
 * - Fully Dynamic (No Hard-Coded Data)
 * - Easy to Customize from constants/
 * - Template-Friendly for Marketplace Usage
 */
export default function Footer() {
  /** Always show current year automatically */
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-main/30 dark:border-main/20">
      {/* Main Footer Content */}
      <div className="w-[80%] py-8 mx-auto">
        <div className="flex flex-wrap justify-between gap-6">
          {/* ================================================= */}
          {/* Personal Info */}
          {/* ================================================= */}
          <div className="space-y-3 w-full md:w-fit">
            <h2 className="text-gradient text-3xl font-bold">
              {PERSONAL_INFO.userName}
            </h2>

            {/* Location */}
            {PERSONAL_INFO.location && (
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-main" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            )}

            {/* Availability (Optional Field) */}
            {PERSONAL_INFO.availability && (
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-main" />
                <span>{PERSONAL_INFO.availability}</span>
              </div>
            )}
          </div>

          {/* ================================================= */}
          {/* Social Links */}
          {/* ================================================= */}
          <div className="space-y-3 w-full md:w-fit">
            <h3 className="text-gradient text-3xl font-semibold">Connect Me</h3>

            <div className="flex gap-2">
              {SOCIAL_LINKS?.length ? (
                SOCIAL_LINKS.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="w-12 h-12 rounded-full flex justify-center items-center 
                    bg-card_light dark:bg-card_dark 
                    text-main hover:scale-90 
                    hover:bg-card_light/70 dark:hover:bg-card_dark/50 
                    transition"
                  >
                    {item.icon}
                  </a>
                ))
              ) : (
                <p className="text-sm text-slate-400">
                  Add your social links in <code>socialLinks.ts</code>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ===================================================== */}
      {/* Copyright */}
      {/* ===================================================== */}
      <div className="py-10 text-slate-400 text-center border-t border-main/30 dark:border-main/20 ">
        <p>
          © {currentYear}{" "}
          <span className="text-main">{PERSONAL_INFO.userName}</span>. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
