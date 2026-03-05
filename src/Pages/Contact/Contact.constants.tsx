import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import type { ContactItem } from "./Contact.types";

export const contactList: ContactItem[] = [
  {
    id: "email",
    title: "Email",
    value: "marwanelmaghraby45@gmail.com",
    icon: <Mail className="w-5 h-5 text-main" aria-label="Mail icon" />,
    description: "Best way to reach me for opportunities",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=marwanelmaghraby45@gmail.com",
  },
  {
    id: "phone",
    title: "Phone",
    value: "+20 10 1165 8321",
    icon: <Phone className="w-5 h-5 text-main" aria-label="Phone icon" />,
    description: "Available for quick discussions",
    href: "tel:+201011658321",
  },
  {
    id: "location",
    title: "location",
    value: "Cairo, Egypt",
    icon: <MapPin className="w-5 h-5 text-main" aria-label="MapPin icon" />,
    description: "Open to remote and on-Site opportunities worldwide",
    href: "",
  },
  {
    id: "gitHub",
    title: "GitHub",
    value: "Marwanaashraf",
    icon: <Github className="w-5 h-5 text-main" aria-label="GitHub icon" />,
    description: "Check out my latest projects and contributions",
    href: "https://github.com/Marwanaashraf",
  },
  {
    id: "linkedIn",
    title: "LinkedIn",
    value: "marwan-ashraf-675078298",
    icon: <Linkedin className="w-5 h-5 text-main" aria-label="LinkedIn icon" />,
    description: "Let's connect professionally",
    href: "https://www.linkedin.com/in/marwan-ashraf-675078298/",
  },
];
