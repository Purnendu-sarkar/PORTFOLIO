import { FacebookIcon } from "../ui/FacebookIcon";
import { InstagramIcon } from "../ui/InstagramIcon";
import { LinkedInIcon } from "../ui/LinkedinIcon";

export default function Footer() {
  return (
    <footer
      className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold text-purple-500">Purnendu Sarkar</h2>
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          <a href="#about" className="hover:text-purple-500 text-sm sm:text-base my-1">
            About
          </a>
          <a href="#skills" className="hover:text-purple-500 text-sm sm:text-base my-1">
            Skills
          </a>
          <a href="#projects" className="hover:text-purple-500 text-sm sm:text-base my-1">
            Projects
          </a>
          <a href="#education" className="hover:text-purple-500 text-sm sm:text-base my-1">
            Education
          </a>
        </nav>
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          <a
            href="https://www.facebook.com/purnendusarkar4200"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
          >
            <FacebookIcon size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/purnendusarkar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
          >
            <LinkedInIcon size={24} />
          </a>
          <a
            href="https://www.instagram.com/purnendusarkar420/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
          >
            <InstagramIcon size={24} />
          </a>
          <a
            href="https://www.youtube.com/@DSRPurnendu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 576 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
            </svg>
          </a>
        </div>
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Purnendu Sarkar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}