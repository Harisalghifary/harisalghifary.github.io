import {
  Mail,
  Dribbble,
  Instagram,
  Linkedin,
  Twitter,
  Github,
  BriefcaseBusiness,
} from "lucide-react"; // or replace with your icon set

export default function Footer() {
  return (
    <footer
      id="footer"
      className="py-10 px-6 lg:px-24 text-white rounded-t-2xl"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12">
        {/* Left side: Text + Socials */}
        <div className="text-center lg:text-left max-w-md">
          <h2 className="text-4xl font-extrabold mb-4">Get in Touch</h2>
          <p className="text-gray-400 mb-2">
            Ecosystem bootstrapping learning curve lean startup disruptive.
          </p>
          <p className="text-gray-400 mb-6">
            Marketing long tail disruptive agile development partner.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <IconBox Icon={Github} link="https://github.com/Harisalghifary" />
            <IconBox
              Icon={Linkedin}
              link="https://www.linkedin.com/in/harisalghifary/"
            />
            <IconBox Icon={Twitter} link="https://x.com/Harisalghifary" />
          </div>
        </div>

        {/* Right side: Contact Cards */}
        <div className="flex flex-col sm:flex-row gap-6">
          <ContactCard
            icon={<BriefcaseBusiness className="w-6 h-6" />}
            text="Upwork"
            href="https://www.upwork.com/freelancers/~012d8669590cc72ec9"
          />
          <ContactCard
            icon={<Mail className="w-6 h-6" />}
            text="Gmail"
            href="mailto:haris.solo68@gmail.com"
          />
        </div>
      </div>
    </footer>
  );
}

function IconBox({ Icon, link }: { Icon: React.ElementType; link: string }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-yellow-200 text-black flex items-center justify-center rounded-md hover:scale-105 transition-transform"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}

function ContactCard({
  icon,
  text,
  href,
}: {
  icon: React.ReactNode;
  text: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group flex flex-col items-center justify-center text-center 
                   bg-[#0d1b1e] rounded-xl p-6 w-full sm:w-64 
                   shadow-lg transition-transform hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="text-yellow-200 mb-4">{icon}</div>
      <span className="text-white font-medium text-sm">{text}</span>

      {/* Subtle shadow offset effect */}
      <div
        className="absolute -bottom-2 left-2 w-full h-full rounded-xl bg-gray-800 
                     z-[-1] group-hover:translate-x-1 group-hover:translate-y-1 
                     transition-transform duration-300"
      />
    </a>
  );
}
