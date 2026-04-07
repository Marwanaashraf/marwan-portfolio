import { Calendar, GraduationCap, MapPin } from "lucide-react";
import { MotionWrapper } from "../../animations/motionVariants";
import { educationData } from "./Education.constants";


export default function Education() {
  const currentYear = new Date().getFullYear();
  const isGraduated = currentYear >= educationData.endYear;

  return (
    <section aria-label="Education section" className="section-container my-20">

      {/* Section Heading */}
      <MotionWrapper delay={0.2}>
        <h1 className="section-head">Education</h1>
      </MotionWrapper>

      {/* Education Card */}
      <MotionWrapper delay={0.4}>
        <div className="w-full md:w-[80%] mx-auto my-14 bg-card_light dark:bg-gray-950 shadow rounded-lg border border-main/30 dark:border-main/20 p-6 hover:dark:border-main/70 hover:border-main duration-500">
          
          {/* Degree + Institution */}
          <div className="flex items-center space-x-4">
            <div className="w-20 sm:w-20 h-16 lg:w-20 lg:h-20 bg-gradient-to-br to-secondry/20 dark:to-secondry/20 from-card_light dark:from-card_dark rounded-lg flex justify-center items-center text-main shadow">
              <GraduationCap className="w-8 h-8 sm:w-12 sm:h-12 text-main" aria-label="GraduationCap icon" />
            </div>

            <div>
              <h3 className="text-gradient text-base sm:text-xl md:text-2xl xl:text-3xl font-bold">
                {educationData.degree}
              </h3>
              <p className="text-main text-base md:text-xl font-bold">
                {educationData.institution}
              </p>
            </div>
          </div>

          {/* Duration and Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            {/* Duration */}
            <MotionWrapper delay={0.5}>
              <div className="edu-card flex items-center gap-2">
                <Calendar className="w-5 h-5 text-main" aria-label="Calendar icon" />
                <span className="text-light dark:text-dark">
                  {educationData.startYear} – {educationData.endYear} ({isGraduated ? "Graduated" : "Expected"})
                </span>
              </div>
            </MotionWrapper>

            {/* Location */}
            <MotionWrapper delay={0.6}>
              <div className="edu-card flex items-center gap-2">
                <MapPin className="w-6 h-6 text-main" aria-label="Map icon" />
                <span className="text-light dark:text-dark">{educationData.location}</span>
              </div>
            </MotionWrapper>
          </div>

          {/* Field of Study */}
          <MotionWrapper delay={0.7}>
            <div className="edu-card">
              <strong className="edu-header">Department: </strong>
              <span className="text-light dark:text-dark">{educationData.field}</span>
            </div>
          </MotionWrapper>

          {/* Graduation Project (Optional) */}
          {educationData.graduationProject && (
            <>
              {/* Project Header */}
              <MotionWrapper delay={0.8}>
                <div className="bg-gradient-to-r to-secondry/5 dark:to-secondry/10 from-card_light dark:from-card_dark rounded-lg p-3 flex items-center space-x-2 font-bold text-xl md:text-2xl shadow my-3">
                  <GraduationCap className="w-8 h-8 text-main" aria-label="GraduationCap icon" />
                  <span className="text-black dark:text-white">Graduation Project</span>
                </div>
              </MotionWrapper>

              {/* Project Name & Grade */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
                <MotionWrapper delay={0.9}>
                  <div className="edu-card">
                    <strong className="edu-header">Project Name: </strong>
                    <span className="text-light dark:text-dark">{educationData.graduationProject?.title}</span>
                  </div>
                </MotionWrapper>

                <MotionWrapper delay={1}>
                  <div className="edu-card">
                    <strong className="edu-header">Grade: </strong>
                    <span className="text-light dark:text-dark">{educationData.graduationProject?.grade}</span>
                  </div>
                </MotionWrapper>
              </div>

              {/* Project Description */}
              <MotionWrapper delay={1.1}>
                <div className="edu-card">
                  <strong className="edu-header">Description: </strong>
                  <span className="text-light dark:text-dark">{educationData.graduationProject?.description}</span>
                </div>
              </MotionWrapper>
            </>
          )}
        </div>
      </MotionWrapper>
    </section>
  );
}