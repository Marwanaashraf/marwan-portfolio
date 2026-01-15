import { ChevronUp } from "lucide-react";
import React from "react";
import { Link } from "react-scroll";

export default function NavigateToHome() {
  return (
    <Link to="home" offset={-80} smooth={true} duration={600}>
      <div className="w-10 h-10 fixed bottom-3 right-3 rounded-full border border-main/30 dark:border-sky-900  flex justify-center items-center bg-card_light hover:bg-card_light/80 dark:bg-slate-950 text-lg text-main cursor-pointer dark:hover:bg-slate-900 hover:border-main hover:scale-95 duration-500">
        <ChevronUp className="w-5 h-5"aria-label="ChevronUp icon" />
      </div>
    </Link>
  );
}
