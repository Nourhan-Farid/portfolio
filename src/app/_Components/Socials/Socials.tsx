
import { Github, Icon, Linkedin, Mail } from "lucide-react";
export default function Socials() {
  const SocialsLinks = [
    { href: "https://github.com/Nourhan-Farid", icon: Github },
    {
      href: "https://www.linkedin.com/in/nourhan-farid-4b200828b/",
      icon: Linkedin,
    },
    {
      href: "mailto:nourhanfarid883@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <div className="flex justify-center">
      {SocialsLinks.map(({ href, icon: Icon }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-[#003783] px-2 transition-colors transform hover:scale-110"
        >
          <Icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
}
