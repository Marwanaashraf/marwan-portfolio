import { ChevronUp } from "lucide-react";
import { Link } from "react-scroll";

/**
 * Floating button that scrolls the user back to the top (Home section).
 * Appears as a fixed action button for better UX on long pages.
 */
export default function ScrollToTopButton() {
  return (
    <Link to="home" smooth duration={600} offset={-80}>
      <button
        aria-label="Scroll back to top"
        className="
          fixed bottom-4 right-4 z-40
          w-11 h-11 rounded-full
          flex items-center justify-center
          bg-card_light dark:bg-card_dark
          border border-main/50 dark:border-main/25
          text-main shadow-md
          hover:bg-card_light/80 dark:hover:bg-slate-900
          hover:border-main dark:hover:border-main/80 hover:scale-95
          transition-all duration-300
        "
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </Link>
  );
}
