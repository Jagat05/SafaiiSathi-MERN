import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Reportsvg from "/assets/report.svg";
import Slider from "react-slick"; // Import Slider from react-slick
import "slick-carousel/slick/slick.css"; // Import slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick theme CSS

function HomePage() {
  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: false, // Pause on hover
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Welcome Section */}
      <section className="relative text-center py-20 bg-blue-200">
        {/* Report Icon */}
        <div className="absolute top-4 right-4 md:top-6 md:right-6">
          <Link
            to="/report"
            className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-200 to-blue-300 text-white rounded-full shadow-lg hover:from-blue-500 hover:to-blue-600 transition duration-300"
            title="Report Waste"
          >
            <img src={Reportsvg} alt="Report Waste" className="w-12 h-12" />
          </Link>
        </div>

        {/* Welcome Message */}
        <h2 className="text-4xl font-bold text-blue-600">
          Welcome to Safaii Sathi!
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Together, let's build a cleaner and greener Dhangadhi!
        </p>
      </section>

      {/* Quite Intro Section */}
      <section className="py-8 px-5 md:px-10 bg-white shadow-md rounded-lg ">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Safaii Sathi ?
        </h3>
        <p className="text-lg text-gray-600 text-justify leading-relaxed max-w-5xl mx-auto">
          Safaii Sathi is about involving the people of Dhangadhi in creating a
          better, healthier, and environmentally friendly city through
          collective action, responsibility, and awareness. It aims to inspire
          residents to work together for a cleaner and more sustainable
          future.🌱♻️
        </p>
        <p className="text-lg text-gray-600 text-justify leading-relaxed max-w-4xl mx-auto mt-4">
          Let’s take pride in building a beautiful future for everyone. Join us
          today and make a difference 🌍🌳!
        </p>
      </section>

      {/* Slider Section */}
      <section className="px-5 md:px-10">
        <Slider {...sliderSettings}>
          <div>
            <img
              src="/assets/noplastic.jpg"
              alt="Motivational Image 1"
              className="w-full h-72 object-cover rounded-lg md:h-80 lg:h-96"
            />
          </div>
          <div>
            <img
              src="/assets/hanging.jpg"
              alt="Motivational Image 2"
              className="w-full h-72 object-cover rounded-lg md:h-80 lg:h-96"
            />
          </div>
          <div>
            <img
              src="/assets/save9.jpg"
              alt="Motivational Image 3"
              className="w-full h-72 object-cover rounded-lg md:h-80 lg:h-96"
            />
          </div>
          <div>
            <img
              src="/assets/encourage.jpg"
              alt="Motivational Image 4"
              className="w-full h-72 object-cover rounded-lg md:h-80 lg:h-96"
            />
          </div>
          <div>
            <img
              src="/assets/damping1.jpg"
              alt="Motivational Image 5"
              className="w-full h-72 object-cover rounded-lg md:h-80 lg:h-96"
            />
          </div>
        </Slider>
      </section>
    </div>
  );
}

export default HomePage;
