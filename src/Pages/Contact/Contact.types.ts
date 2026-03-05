import type { ReactNode } from "react";

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactItem {
  id: string;
  title: string;
  value: string;
  description: string;
  href: string;
  icon: ReactNode;
}
