import { MapPin, Phone } from "lucide-react";
import { socilMediaIcons } from "../../Constants/SocialMediaIcons";
export default function Footer() {
  return (
    <footer className="py-14 border-t border-main/30 dark:border-sky-950">
      {/* footer */}
      <div className="w-[80%] py-8 mx-auto">
        <div className="flex flex-wrap justify-between space-y-3">
          {/* name */}
          <div className="space-y-3 w-full md:w-fit">
            <h1 className="text-gradient text-3xl font-bold">Marwan Ashraf</h1>
            <div className="flex space-x-1 items-center">
              <MapPin className="w-4 h-4 text-main" /> <span>Cairo, Egypt</span>{" "}
            </div>
            <div className="flex space-x-1 items-center">
              <Phone className="w-4 h-4 text-main" />{" "}
              <span>Available for remote Work</span>{" "}
            </div>
          </div>

          {/* contact me */}
          <div className="space-y-3 w-full md:w-fit">
            <h3 className="text-gradient text-3xl font-bold">Contact Me</h3>
            <div className="icons flex space-x-2">
              {socilMediaIcons.map((item) => {
                return (
                  <a
                    key={item.name}
                    className="w-12 h-12 rounded-full flex justify-center items-center bg-card_light dark:bg-card_dark text-sky-500 hover:bg-card_light/70 dark:hover:bg-card_dark/50 hover:scale-90 duration-100"
                    href={item.href}
                    target="_blank"
                  >
                    {item.icon}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* copy rights */}
      <div className="py-9 text-slate-400 text-center border-t border-main/30 dark:border-sky-950">
        <p>Copy Right 2025 © By <span className="text-main">Marwan Ashraf</span> All Rights Reserved</p>
      </div>
    </footer>
  );
}
