import React from "react";
/**
 * @className style of div
 * @icon displayed icon
 */
type TIcon = {
  className: string;
  icon: React.ReactNode;
};
export default function DivIcon({ className, icon }: TIcon) {
  return (
    <>
      <div
        className={`${className} bg-slate-200 dark:bg-slate-800 rounded-full flex justify-center items-center`}
      >
        {icon}
      </div>
    </>
  );
}
