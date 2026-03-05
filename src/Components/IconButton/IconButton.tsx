import React from "react";
/**
 * @className style of div
 * @icon displayed icon
 */
type TIcon = {
  className: string;
  icon: React.ReactNode;
};
export default function IconButton({ className, icon }: TIcon) {
  return (
    <>
      <div
        className={`${className} flex justify-center items-center rounded-full`}
      >
        {icon}
      </div>
    </>
  );
}
