import React from "react";

import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import FeaturesHome from "../partials/FeaturesHome";
import News from "../partials/News";
import Footer from "../partials/Footer";
import { Helmet } from "react-helmet-async";
import Modal from "components/Modal";

import Time from "images/time.png";
import Flame from "images/fire.png";
import Archive from "images/archive-32.png";

import Close from "images/button-close-icon.png";

function Home() {
  const [searchModal, setSearchModal] = React.useState(false);
  const [input, setInput] = React.useState("");
  const [inputFocus, setInputFocus] = React.useState(false);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Helmet>
        <title>Home</title>
      </Helmet>

      <Header
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setSearchModal(true);
        }}
        searchModal={searchModal}
      />

      <main className="grow bg-gray-900">
        <HeroHome />
        <FeaturesHome />

        <News />
      </main>
      <Modal
        id="modal"
        ariaLabel="modal-headline"
        show={searchModal}
        handleClose={() => setSearchModal(false)}
      >
        <div>
          <div className="bg-gray-900 flex flex-col rounded-xl">
            <p className="text-white text-xl font-semibold text-center py-4">
              Quickly find episodes, articles, and pages across the website.
            </p>
            <button className="flex justify-center flex-col items-center">
              <div className="flex items-center pb-4">
                <div className="flex space-x-1">
                  <div className="border flex items-center rounded-full bg-gray-800 focus:bg-black relative">
                    <div className="absolute px-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#ffffff"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      className="block w-full px-10 py-2 text-white bg-gray-800 border-r border-l-0 border border-solid rounded-full border-gray-800 focus:bg-black focus:border-gray-800 focus:ring-0"
                      placeholder="Search..."
                      onChange={(e) => handleChange(e)}
                      onFocus={() => setInputFocus(true)}
                      onBlur={() => setInputFocus(false)}
                      value={input}
                    />
                    {inputFocus && (
                      <button
                        className="px-2 absolute right-0"
                        onClick={() => {
                          setInput("");
                          setInputFocus(false);
                        }}
                      >
                        <img src={Close} alt="close" classNames="" width={25} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div className="border flex items-center rounded-full bg-gray-800 focus:bg-black">
                <button
                  className="block w-full text-white bg-gray-800 border-r border-l-0 border border-solid rounded-full border-gray-800 hover:bg-black"
                  style={{
                    padding: "7px 105px",
                  }}
                >
                  Search
                </button>
              </div>
            </button>
            <div className="flex flex-row justify-center items-center">
              <button className="rounded-lg mx-3 w-full md:max-w-max mt-10 home-hero text-white hover:text-yellow-400 items-center flex flex-col">
                <div className="rounded-full border bg-gray-600 hover:bg-yellow-400 p-2 mt-4">
                  <img
                    src={Flame}
                    alt="flame"
                    className="rounded-full object-cover"
                    width={30}
                    style={{
                      height: "30px",
                    }}
                  />
                </div>
                <h3 className="font-bold text-xs md:text-lg py-4">Popular</h3>
              </button>
              <button className="rounded-lg w-full md:max-w-max mx-3 mt-10 home-hero text-white hover:text-yellow-400 items-center flex flex-col">
                <div className="rounded-full border bg-gray-600 hover:bg-yellow-400 p-2 mt-4">
                  <img src={Time} alt="time" className="" width={30} />
                </div>
                <h3 className="font-bold text-xs md:text-lg py-4">Recent</h3>
              </button>

              <button className="rounded-lg w-full md:max-w-max mx-3 mt-10 home-hero text-white hover:text-yellow-400 items-center flex flex-col">
                <div className="rounded-full border bg-gray-600 hover:bg-yellow-400 p-2 mt-4">
                  <img src={Archive} alt="archive" className="" width={30} />
                </div>
                <h3 className="font-bold text-xs md:text-lg py-4">
                  Browse All
                </h3>
              </button>
            </div>
          </div>
        </div>
      </Modal>
      <Footer />
    </div>
  );
}

export default Home;
