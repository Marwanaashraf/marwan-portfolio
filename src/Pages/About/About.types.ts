import type { ReactNode } from "react";

export interface AboutCard {
  title: string;
  icon: ReactNode;
  description: string;
}
export interface AboutContent {
  image: string;
  paragraphs: string[];
}
