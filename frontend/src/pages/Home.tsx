import home from "../assets/home.jpg";
import TypewriterComponent from "typewriter-effect";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <div>
        <nav className="bg-black w-full h-16 flex justify-between p-5 items-center">
          <div className="text-white font-mono font-semibold pl-5 cursor-pointer  hover:text-slate-400 transition-all">
            <a
              href="https://github.com/Yajushh"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-slate-400 transition-all"
            >
              github.com/Yajushh
            </a>
          </div>
          <ul className="flex text-white font-serif font-semibold gap-8 pr-5 ">
            <li className="cursor-pointer hover:text-slate-400 transition-all">
              <a
                href="mailto:yajushmishra8@gmail.com"
                className="cursor-pointer hover:text-slate-400 transition-all"
              >
                <EmailIcon />
              </a>
            </li>
            <li className="cursor-pointer hover:text-slate-400 transition-all">
              <a
                href="https://www.linkedin.com/in/yajush-mishra-7b9aba27a/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-slate-400 transition-all"
              >
                <LinkedInIcon />
              </a>
            </li>
            <li className="cursor-pointer hover:text-slate-400 transition-all">
              <a
                href="https://github.com/Yajushh"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-slate-400 transition-all"
              >
                <GitHubIcon />
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex justify-between">
          <div className=" bg-red-400 h-screen w-2/3">
            <img
              src={home}
              alt="coolImage"
              className="object-cover h-screen opacity-80 backdrop-blur absolute z-0"
            />
            <div className="font-bold text-slate-200 text-6xl relative z-10 opacity-100 p-20 flex flex-col gap-20">
              <div className="h-1/2 w-2/3">
                <TypewriterComponent
                  options={{
                    strings: [
                      "Hello, My Name Is Yajush Mishra and I Can Create Fullstack Web Applications For You.",
                    ],
                    autoStart: true,
                    loop: true,
                    cursor: "_",
                    delay: 100,
                    deleteSpeed: 40,
                    devMode: false,
                  }}
                />
              </div>
            </div>
          </div>
          <div className="bg-blue-200 h-screen w-1/3 relative">
            <div className="font-bold text-slate-700 font-mono p-4 text-5xl mb-20">
              Explore New Ideas And Start Connecting !
            </div>
            <div className="w-full flex justify-center mb-10">
              <Link to="/signup">
                <button
                  type="button"
                  className="w-64 font-semibold bg-white text-2xl text-gray-600 p-3 rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-400"
                >
                  Signup
                </button>
              </Link>
            </div>
            <div className="w-full flex justify-center mb-10">
              <Link to="/signin">
                <button
                  type="button"
                  className="w-64 bg-white font-semibold text-2xl text-gray-600 p-3 rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-400"
                >
                  Signin
                </button>
              </Link>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <div className="w-full flex justify-center">
                <Link to="/blogs" className="mt-4">
                  <button
                    type="button"
                    className="bg-gray-900 text-white font-medium font-mono text-md px-4 py-2 rounded-md hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 transition-colors duration-300"
                  >
                    View Blogs
                  </button>
                </Link>
              </div>
              <p className="font-mono font-medium">
                You need to be signed in to view the blogs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
