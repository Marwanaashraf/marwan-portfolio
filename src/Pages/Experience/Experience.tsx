import { Briefcase, Calendar, ChevronDown, Dot, MapPin } from "lucide-react";
import { MotionWrapper } from "../../animations/motionVariants";

import { experienceList } from "./Experience.constants";
import { useState } from "react";
import IconButton from "../../Components/IconButton/IconButton";

export default function Experience() {
  // 🔹 store the currently opened experience card
  const [activeId, setActiveId] = useState<string | null>(null);

  // 🔹 toggle card details
  const handleToggle = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      aria-label="Experience Section"
      className="section-container my-20"
    >
      {/* Section Heading */}
      <MotionWrapper delay={0.3}>
        <h1 className="section-head">Experience</h1>
      </MotionWrapper>

      {/* Intro paragraph */}
      <p className="text-center text-light dark:text-dark mt-6 font-medium text-lg">
        My career journey through key roles and companies. Click on each
        position to learn more about my responsibilities and achievements.
      </p>

      {/* Experience Cards Container */}
      <div
        className="w-full md:w-[90%] lg:w-[80%] xl:w-[75%] mx-auto my-14
        bg-card_light dark:bg-slate-900  rounded-lg border
        border-main/30 dark:border-main/20 p-3
        hover:dark:border-main/70 hover:border-main/60 duration-500"
      >
        {experienceList.map((item, i) => {
          const isOpen = activeId === item.id; // 🔹 check if card is active

          return (
            <MotionWrapper key={item.id} delay={0.5 + 0.1 * i}>
              <div>
                {/* Clickable Header */}
                <div
                  role="button"
                  aria-expanded={isOpen} // 🔹 accessibility
                  onClick={() => handleToggle(item.id)}
                  className="my-3 flex flex-wrap justify-between items-center gap-3
                  cursor-pointer w-full group"
                >
                  {/* Role + Company */}
                  <div className="flex items-center gap-3">
                    <IconButton
                      className="w-14 h-14 bg-slate-200 dark:bg-slate-800"
                      icon={<Briefcase className="w-6 h-6 text-main" />}
                    />

                    <div>
                      <h3 className="text-2xl font-bold">{item.role}</h3>

                      {/* Company Name */}
                      <p className="text-sm text-main font-medium">
                        {item.company}
                      </p>

                      <h5 className="text-xs text-light dark:text-dark">
                        {item.employmentType}
                      </h5>
                    </div>
                  </div>

                  {/* Date + Location */}
                  <div className="flex items-center gap-4 text-light dark:text-dark">
                    <div className="text-sm">
                      <h3>
                        <Calendar className="inline w-4 h-4" /> {item.startDate}{" "}
                        - {item.endDate}
                      </h3>
                      <h5>
                        <MapPin className="inline w-4 h-4" /> {item.location}
                      </h5>
                    </div>

                    {/* Chevron rotation animation */}
                    <ChevronDown
                      className={`transition-transform duration-300
                      ${isOpen ? "rotate-180 text-main" : ""}`}
                    />
                  </div>
                </div>

                {/* Details */}
                {isOpen && (
                  <div className="text-light dark:text-dark my-4 space-y-2">
                    {item.responsibilities.map((resp, index) => (
                      <div
                        key={`${item.id}-${index}`}
                        className="flex items-start gap-1"
                      >
                        <Dot className="text-main w-6 h-6 mt-1" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Divider */}
                {i < experienceList.length - 1 && <hr />}
              </div>
            </MotionWrapper>
          );
        })}
      </div>
    </section>
  );
}
