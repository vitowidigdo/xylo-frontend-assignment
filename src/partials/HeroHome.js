import React from "react";
import "index.css";
import Hero from "css/Screen Shot 2022-07-15 at 14.44.18.png";
import PodcastImage from "images/62cc70ad17e453993c2a8e79_Steve-Vassallo_Hero-p-800.jpeg";

function HeroHome() {
  return (
    <section className="relative text-white border-b border-solid border-[#1c1c1c] bg-[#050505] md:mt-10">
      <div className="mx-auto px-4 sm:px-6" style={{ maxWidth: "1400px" }}>
        <div className="pt-32 pb-12 md:pt-40 md:pb-20 max-w-sm md:max-w-4xl xl:max-w-none mx-auto grid gap-2 md:grid-cols-2 xl:gap-6">
          <div className="max-w-2xl mx-auto text-center sm:text-left pb-12 md:pb-16">
            <h1
              className="h2 leading-tighter tracking-tighter mb-4"
              style={{
                fontWeight: "600",
              }}
              data-aos="zoom-y-out"
            >
              Timeless Insight For Business and Life{" "}
            </h1>
            <span className="text-lg md:text-xl block">
              Every week, I sit down with someone in the Top 1% of their field —
              from NYT bestselling authors to Oscar winners — to decode what
              they've mastered. Listen as I uncover the tactics, routines, and
              habits that will propel you to the top of your field.
            </span>
            <div className="max-w-3xl mx-auto">
              <div style={{ padding: "15px 0 15px 0" }} />
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-left"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <button className="btn-sm text-gray-200 bg-black hover:bg-gray-800 w-full mb-6 sm:w-auto sm:mb-5 max-w-sm">
                    <div className="flex justify-center items-center">
                      <img
                        src={PodcastImage}
                        alt="podcast"
                        className=""
                        width={100}
                      />
                      <div className="text-left text-sm ml-3 items-center">
                        <div style={{ color: "#e0922c" }}>Latest Episode</div>
                        <div>
                          #120 Foundation Capital: Reinventing a 27 Year Old
                          Venture Capital Firm | Steve Vassallo, General Partner
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-left"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <button className="btn-sm text-gray-200 bg-black hover:bg-gray-800 w-full mb-4 sm:w-auto sm:mb-0">
                  Start Here
                </button>
                <button className="btn-sm text-gray-200 bg-black hover:bg-gray-800 w-full sm:w-auto sm:ml-4">
                  Listen to The Podcast
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-center mb-8">
              <div className="flex flex-col justify-center">
                <img alt="hero" src={Hero} className="mx-auto hero-home" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
