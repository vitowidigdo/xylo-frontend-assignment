import React from "react";
import Billboard from "images/billboard.svg";
import Bloomberg from "images/bloomberg.svg";
import Espn from "images/espn.svg";
import Nytimes from "images/nytimes.svg";
import Washpost from "images/washpost.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Adam from "images/Adam-Nash.jpeg";
import Michael from "images/Michael-Brandt.jpeg";
import Milind from "images/Milind-Mehere.jpeg";

import Time from "images/time.png";
import Flame from "images/fire.png";
import Archive from "images/archive-32.png";

import Next from "images/next.png";
import Previous from "images/previous.png";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="rounded-full bg-black hover:bg-gray-800 border border-solid border-white p-1 absolute right-0 top-1/2">
      <img alt="next" src={Next} onClick={onClick} width={20} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="rounded-full bg-black hover:bg-gray-800 border border-solid border-white p-1 absolute left-0 top-1/2 z-20">
      <img alt="next" src={Previous} onClick={onClick} width={20} />
    </div>
  );
}

function FeaturesHome() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    customPaging: function () {
      return <div className="bg-white text-white rounded p-2 mt-2"></div>;
    },
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="relative" id="1">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div
          className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
          data-aos="fade-right"
        ></div>

        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <div className="">
            <div className="max-w-3xl mx-auto text-center pb-12"></div>

            <div className="flex flex-col lg:flex-row justify-center items-center">
              <img src={Billboard} alt="billboard" className="w-41 lg:w-40" />
              <img src={Bloomberg} alt="bloomberg" className="w-41 lg:w-40" />
              <img src={Espn} alt="espn" className="w-41 lg:w-40" />
              <img src={Nytimes} alt="nytimes" className="w-41 lg:w-40" />
              <img src={Washpost} alt="washpost" className="w-41 lg:w-40" />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-xl sm:max-w-6xl mx-auto px-3 text-center sm:px-6">
        <div className="relative h-full">
          <Slider {...settings}>
            <div className="bg-white rounded-lg px-3 mx-3 max-w-xl mt-10 home-hero">
              <img src={Adam} alt="adam" className="pb-4" width={300} />
              <div className="">
                <h3 className="font-bold text-lg pb-4">
                  #114 Daffy: Reinventing Charitable Giving and Building a
                  Modern Platform for Giving | Adam Nash, Co-Founder & CEO
                </h3>
                <p className="text-md pb-4">
                  In Episode #114, we explore building a modern charitable
                  giving platform. We’re joined by Adam Nash, Daffy’s Co-Founder
                  and CEO, and we cover donor-advised funds, getting kids
                  involved in charity, and philosophies on angel investing.
                </p>

                <div className="text-yellow-400 pb-4 flex items-center">
                  <div>Show more </div>
                  <svg
                    className="w-3 h-3 fill-current text-yellow-400 shrink-0 ml-2 -mr-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg px-3 mx-3 max-w-xl mt-10 home-hero">
              <div className="">
                <img src={Michael} alt="michael" className="pb-4" width={300} />
                <h3 className="font-bold text-lg pb-4">
                  #114 Daffy: Reinventing Charitable Giving and Building a
                  Modern Platform for Giving | Adam Nash, Co-Founder & CEO
                </h3>
                <p className="text-md pb-4">
                  In Episode #114, we explore building a modern charitable
                  giving platform. We’re joined by Adam Nash, Daffy’s Co-Founder
                  and CEO, and we cover donor-advised funds, getting kids
                  involved in charity, and philosophies on angel investing.
                </p>
                <div className="text-yellow-400 pb-4 flex items-center">
                  <div>Show more </div>
                  <svg
                    className="w-3 h-3 fill-current text-yellow-400 shrink-0 ml-2 -mr-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg px-3 mx-3 max-w-xl mt-10 home-hero">
              <img src={Milind} alt="milind" className="pb-4" width={300} />
              <h3 className="font-bold text-lg pb-4">
                #114 Daffy: Reinventing Charitable Giving and Building a Modern
                Platform for Giving | Adam Nash, Co-Founder & CEO
              </h3>
              <p className="text-md pb-4">
                In Episode #114, we explore building a modern charitable giving
                platform. We’re joined by Adam Nash, Daffy’s Co-Founder and CEO,
                and we cover donor-advised funds, getting kids involved in
                charity, and philosophies on angel investing.
              </p>
              <div className="text-yellow-400 pb-4 flex items-center">
                <div>Show more </div>
                <svg
                  className="w-3 h-3 fill-current text-yellow-400 shrink-0 ml-2 -mr-1"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                    fillRule="nonzero"
                  />
                </svg>
              </div>
            </div>

            <div className="bg-white rounded-lg px-3 mx-3 max-w-xl mt-10 home-hero">
              <img src={Milind} alt="milind" className="pb-4" width={300} />
              <h3 className="font-bold text-lg pb-4">
                #114 Daffy: Reinventing Charitable Giving and Building a Modern
                Platform for Giving | Adam Nash, Co-Founder & CEO
              </h3>
              <p className="text-md pb-4">
                In Episode #114, we explore building a modern charitable giving
                platform. We’re joined by Adam Nash, Daffy’s Co-Founder and CEO,
                and we cover donor-advised funds, getting kids involved in
                charity, and philosophies on angel investing.
              </p>
              <div className="text-yellow-400 pb-4 flex items-center">
                <div>Show more </div>
                <svg
                  className="w-3 h-3 fill-current text-yellow-400 shrink-0 ml-2 -mr-1"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                    fillRule="nonzero"
                  />
                </svg>
              </div>
            </div>

            <div className="bg-white rounded-lg px-3 mx-3 max-w-xl mt-10 home-hero">
              <img src={Milind} alt="milind" className="pb-4" width={300} />
              <h3 className="font-bold text-lg pb-4">
                #114 Daffy: Reinventing Charitable Giving and Building a Modern
                Platform for Giving | Adam Nash, Co-Founder & CEO
              </h3>
              <p className="text-md pb-4">
                In Episode #114, we explore building a modern charitable giving
                platform. We’re joined by Adam Nash, Daffy’s Co-Founder and CEO,
                and we cover donor-advised funds, getting kids involved in
                charity, and philosophies on angel investing.
              </p>
              <div className="text-yellow-400 pb-4 flex items-center">
                <div>Show more </div>
                <svg
                  className="w-3 h-3 fill-current text-yellow-400 shrink-0 ml-2 -mr-1"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                    fillRule="nonzero"
                  />
                </svg>
              </div>
            </div>

            <div className="bg-white rounded-lg px-3 mx-3 max-w-xl mt-10 home-hero">
              <img src={Milind} alt="milind" className="pb-4" width={300} />
              <h3 className="font-bold text-lg pb-4">
                #114 Daffy: Reinventing Charitable Giving and Building a Modern
                Platform for Giving | Adam Nash, Co-Founder & CEO
              </h3>
              <p className="text-md pb-4">
                In Episode #114, we explore building a modern charitable giving
                platform. We’re joined by Adam Nash, Daffy’s Co-Founder and CEO,
                and we cover donor-advised funds, getting kids involved in
                charity, and philosophies on angel investing.
              </p>
              <div className="text-yellow-400 pb-4 flex items-center">
                <div>Show more </div>
                <svg
                  className="w-3 h-3 fill-current text-yellow-400 shrink-0 ml-2 -mr-1"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                    fillRule="nonzero"
                  />
                </svg>
              </div>
            </div>
          </Slider>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center">
          <button className="bg-white rounded-lg mx-3 w-full md:max-w-max mt-10 home-hero text-black hover:text-yellow-400 items-center flex flex-col">
            <div className="rounded-full border bg-black hover:bg-yellow-400 p-2 mt-4">
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
            <h3 className="font-bold text-lg py-4">Trending Now</h3>
            <p className="text-md pb-4">
              Find the interviews and articles that are trending now
            </p>
          </button>
          <button className="bg-white rounded-lg w-full md:max-w-max mx-3 mt-10 home-hero text-black hover:text-yellow-400 items-center flex flex-col">
            <div className="rounded-full border bg-black hover:bg-yellow-400 p-2 mt-4">
              <img src={Time} alt="time" className="" width={30} />
            </div>
            <h3 className="font-bold text-lg py-4">New Releases</h3>
            <p className="text-md pb-4">
              Catch up on all of the latest interviews and articles
            </p>
          </button>

          <button className="bg-white rounded-lg w-full md:max-w-max mx-3 mt-10 home-hero text-black hover:text-yellow-400 items-center flex flex-col">
            <div className="rounded-full border bg-black hover:bg-yellow-400 p-2 mt-4">
              <img src={Archive} alt="archive" className="" width={30} />
            </div>
            <h3 className="font-bold text-lg py-4">The Archives</h3>
            <p className="text-md pb-4">
              Explore the archives by browsing categories and tags
            </p>
          </button>
        </div>
      </div>
    </section>
  );
}

export default FeaturesHome;
