import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Transition from "../components/Transition.js";

function Header({ onClick }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [top, setTop] = useState(true);
  const trigger = useRef(null);
  const mobileNav = useRef(null);

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out backdrop-blur-sm shadow-lg mb-20 bg-[#161616]`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 bg-[#161616]">
        <div className="flex items-center justify-between h-16 md:h-20">
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-start flex-wrap items-center">
              <li>
                <button
                  onClick={onClick}
                  className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 border border-solid border-white cursor-pointer"
                >
                  <svg
                    fill="#FFFFFF"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    width="20px"
                    height="20px"
                  >
                    <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
                  </svg>
                </button>
              </li>
            </ul>

            <ul className="flex grow justify-center flex-wrap items-center">
              <li>
                <Link
                  to="/"
                  className="text-white px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Danielscrivner
                </Link>
              </li>
            </ul>

            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <button className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 border border-solid border-white">
                  <span>Subscribe</span>
                  <svg
                    className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </nav>

          <div className="flex md:hidden justify-between w-full">
            <button
              ref={trigger}
              className={`hamburger ${mobileNavOpen && "active"}`}
              aria-controls="mobile-nav"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <span className="sr-only">Menu</span>
              <svg
                className="w-6 h-6 fill-current text-white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="4" width="24" height="2" />
                <rect y="11" width="24" height="2" />
                <rect y="18" width="24" height="2" />
              </svg>
            </button>

            <button
              className="text-gray-200 bg-gray-900 hover:bg-gray-800 p-1 border border-solid border-white rounded cursor-pointer"
              onClick={onClick}
            >
              <svg
                fill="#FFFFFF"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="20px"
                height="20px"
                className="w-6 h-6 fill-current text-white"
              >
                <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
              </svg>
            </button>

            <Transition
              show={mobileNavOpen}
              tag="nav"
              id="mobile-nav"
              className="absolute top-full h-screen pb-16 z-20 right-0 w-full overflow-scroll bg-gray-900 text-white flex justify-center"
              enter="transition ease-out duration-200 transform"
              enterStart="opacity-0 -translate-y-2"
              enterEnd="opacity-100 translate-y-0"
              leave="transition ease-out duration-200"
              leaveStart="opacity-100"
              leaveEnd="opacity-0"
            >
              <ul className="px-5 py-2">
                <li>
                  <Link to="/" className="flex hover:text-gray-900 py-2 px-5">
                    Episodes
                  </Link>
                </li>
                <li>
                  <Link to="/" className="flex hover:text-gray-900 py-2 px-5">
                    Newsletter
                  </Link>
                </li>
                <li>
                  <Link to="/" className="flex hover:text-gray-900 py-2 px-5">
                    Topics & Tags
                  </Link>
                </li>

                <li>
                  <Link to="/" className="flex hover:text-gray-900 py-2 px-5">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/" className="flex hover:text-gray-900 py-2 px-5">
                    Newsroom
                  </Link>
                </li>
                <li>
                  <Link to="/" className="flex hover:text-gray-900 py-2 px-5">
                    Contacts
                  </Link>
                </li>

                <li>
                  <Link
                    to="/"
                    className="flex hover:text-gray-900 py-2 border-white border-solid border px-10 rounded-lg"
                  >
                    Subscribe
                  </Link>
                </li>
              </ul>
            </Transition>
          </div>
        </div>
        <div className="hidden md:flex md:grow items-center justify-between h-16 md:h-20">
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-start flex-wrap items-center">
              <li>
                <span className="text-gray-200 bg-gray-900 cursor-pointer hover:text-yellow-400">
                  Podcast
                </span>
              </li>
            </ul>

            <ul className="flex grow justify-center flex-wrap items-center">
              <li>
                <span className="text-gray-200 bg-gray-900 cursor-pointer hover:text-yellow-400">
                  Newsletter
                </span>
              </li>
            </ul>

            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <span className="text-gray-200 bg-gray-900 cursor-pointer hover:text-yellow-400">
                  Topics & Tags
                </span>
              </li>
            </ul>

            <ul className="flex grow justify-end flex-wrap items-center">
              <li class="group  relative dropdown cursor-pointer">
                <span className="text-gray-200 bg-gray-900 cursor-pointer hover:text-yellow-400">
                  More
                </span>
                <div class="group-hover:block dropdown-menu absolute hidden h-auto">
                  <ul class="top-0 w-40 text-center shadow rounded-2xl border border-solid border-[#1c1c1c] bg-[#050505]">
                    <li class="py-3 border-b border-solid border-[#1c1c1c]">
                      <span class="block cursor-pointer text-white">About</span>
                    </li>
                    <li class="py-3 border-b border-solid border-[#1c1c1c]">
                      <span class="block cursor-pointer text-white">
                        Newsroom
                      </span>
                    </li>
                    <li class="py-3 ">
                      <span class="block cursor-pointer text-white">
                        Contact
                      </span>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
