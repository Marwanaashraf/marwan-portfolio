import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const contactList = [
  {
    name: "Email",
    contact: "marwanelmaghraby45@gmail.com",
    icon: <Mail className="w-5 h-5 text-main" aria-label="Mail icon" />,
    desc: "Best way to reach me for opportunities",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=marwanelmaghraby45@gmail.com",
  },
  {
    name: "Phone",
    contact: "+20 10 1165 8321",
    icon: <Phone className="w-5 h-5 text-main"  aria-label="Phone icon"/>,
    desc: "Available for quick discussions",
    link: "tel:+201011658321",
  },
  {
    name: "Location",
    contact: "Cairo, Egypt",
    icon: <MapPin className="w-5 h-5 text-main" aria-label="MapPin icon"/>,
    desc: "Open to remote and on-Site opportunities worldwide",
    link: null,
  },
  {
    name: "GitHub",
    contact: "Marwanaashraf",
    icon: <Github className="w-5 h-5 text-main" aria-label="GitHub icon" />,
    desc: "Check out my latest projects and contributions",
    link: "https://github.com/Marwanaashraf",
  },
  {
    name: "LinkedIn",
    contact: "marwan-ashraf-675078298",
    icon: <Linkedin className="w-5 h-5 text-main" aria-label="LinkedIn icon"/>,
    desc: "Let's connect professionally",
    link: "https://www.linkedin.com/in/marwan-ashraf-675078298/",
  },
];
