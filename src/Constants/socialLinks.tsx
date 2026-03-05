import { Github, Linkedin, Mail } from "lucide-react";
import { SocialLinks } from "../types/socialLinks";

export const SOCIAL_LINKS: SocialLinks[] = [
  {
    name: "mail",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=marwanelmaghraby45@gmail.com",
    icon: <Mail className="w-6 h-6" />,
  },
  {
    name: "github",
    href: "https://github.com/Marwanaashraf",
    icon: <Github className="w-6 h-6" />,
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/marwan-ashraf-675078298/",
    icon: <Linkedin className="w-6 h-6" />,
  },
];
