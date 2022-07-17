import React from "react";
import "index.css";
import Image1 from "images/Screen Shot 1.png";
import Image2 from "images/Screen Shot 2.png";

function News() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 md:pt-10">
        <div className="sm:py-6 md:py-0">
          <div className="max-w-sm mx-auto md:max-w-none mt-10 md:mt-0">
            <div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-center text-center"></div>
          </div>
        </div>

        <div className="md:grid md:grid-cols-2 grid-cols-1 md:gap-3 mt-8 gridColumn">
          <div
            className="max-w-xl md:max-w-none md:w-full mx-auto mb-8 md:mb-0"
            data-aos="zoom-y-out"
          >
            <div className="flex flex-col items-center bg-gray-800 rounded-2xl">
              <p className="text-yellow-600 text-2xl pt-4">LISTEN NOW</p>
              <span className="text-white h3 pt-3">Outliers Podcast</span>
              <p className="text-white text-center w-10/12 pt-2">
                Every week, I sit down with someone in the Top 1% of their field
                to decode what they've mastered and what they've learned along
                the way.
              </p>
              <button className="btn-sm text-black bg-white hover:bg-gray-800 hover:text-white border border-solid border-white rounded-full my-4">
                Explore Episode
              </button>
              <img src={Image1} alt="left" />
            </div>
          </div>

          <div className="mb-8 md:mb-0">
            <div className="flex flex-col items-center bg-gray-800 rounded-2xl">
              <p className="text-yellow-600 text-2xl pt-4">SUBSCRIBE NOW</p>
              <span className="text-white h3 pt-3">Friday 5 Email</span>
              <p className="text-white text-center w-10/12 px-10 pt-2">
                Every Friday, I share five things I've been reading, using, and
                loving—including articles, biohacks, gadgets, and more.
              </p>
              <button className="btn-sm text-black bg-white hover:bg-gray-800 hover:text-white border border-solid border-white rounded-full my-4">
                Subscribe Now
              </button>
              <img src={Image2} alt="right" />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12 md:pt-10">
        <div className="mx-auto text-center bg-gray-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 md:pt-20 md:pb-16">
            <div className="">
              <div className="max-w-3xl mx-auto text-center pb-12">
                <h1 className="h3 mb-4 text-white">GET THE WEEKLY SUMMARY</h1>

                <p className="text-white">
                  Join 7,500+ including Fortune 500 CEOs, championship coaches,
                  and bestselling authors who get my free weekly summary.
                </p>
              </div>

              <div className="max-w-sm md:max-w-2xl xl:max-w-none mx-auto items-end">
                <form className="w-full lg:w-auto">
                  <div className="flex flex-row justify-center">
                    <input
                      type="email"
                      className="w-7/12 bg-gray-800 rounded-l-xl px-4 py-3 mb-2 sm:mb-0 text-white placeholder-gray-500 focus:border-gray-600  border-b border-t border-l border-solid border-white"
                      placeholder="Enter Your Email"
                      aria-label="Enter Your Email"
                    />
                    <button
                      className="text-black bg-white hover:bg-gray-800 rounded-r-xl font-medium inline-flex items-center justify-center border border-transparent leading-snug transition duration-150 ease-in-out px-8 py-3 mb-2 md:mb-0 shadow-lg"
                      href="#0"
                    >
                      Try It
                    </button>
                  </div>
                  <p className="pt-8" style={{ color: "#717171" }}>
                    <span>By subscribing, you agree to our</span>
                    <span className="underline cursor-pointer">
                      {" "}
                      privacy policy.
                    </span>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
