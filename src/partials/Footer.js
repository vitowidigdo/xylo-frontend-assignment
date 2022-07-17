import React from "react";
import { Link } from "react-router-dom";
import Daniel from "images/daniel.png";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#121212" }}>
      <div className="mt-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="md:flex md:flex-1 grid grid-cols-1 sm:grid-cols-12 gap-8 py-8 justify-between md:py-12">
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2"></div>
            <div className="text-sm text-white pl-2">
              <ul className="text-sm">
                <li className="mb-4 flex items-start">
                  <p className="max-w-sm sm:max-w-xs">
                    Daniel Scrivner is an entreprenuer and investor focused on
                    building enduring companies and breakthrough products.
                  </p>
                </li>

                <li className="mb-2 flex justify-center">
                  <button className="max-w-xs text-center">
                    See what he’s working on now
                  </button>
                </li>
                <Link to="/" className="inline-block">
                  <img src={Daniel} alt="logo" className="h-12 w-auto" />
                </Link>
              </ul>
            </div>
          </div>

          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-white font-medium mb-2">Explore</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-white hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Most Popular
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-white hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Most Recent
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-white hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Topics & Tags
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-white hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Friday Five
                </Link>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-white font-medium mb-2">Outliers</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-white hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Episodes
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-white hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Subscribe Now
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-white hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  About the Show
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-white hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Sponsors
                </Link>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-white font-medium mb-2">Articles</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-white hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Show Notes
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-white hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Transcripts
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-white hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Essays
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-white hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Snippets
                </Link>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-white font-medium mb-2">More</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-white hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  About Daniel
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-white hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Business Card
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-white hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Newsroom
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-white hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 ">
          <div className="text-sm text-white mr-4 w-full">
            Copyright &copy; 2020 Daniel Scrivner. All Rights Reserved
          </div>

          <div className="text-sm text-white flex justify-between max-w-xs sm:max-w-6xl w-10/12 mx-auto sm:mx-0 py-4 sm:py-0">
            <p>Privacy & Terms</p>
            <p>Disclosures</p>
            <p>Sitemap</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
