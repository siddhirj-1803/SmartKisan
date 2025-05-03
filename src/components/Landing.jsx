import { useRef, useState } from "react";
import { FaTint, FaSun } from "react-icons/fa";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import plantImage from "../assets/pot.png";
import leafIcon from "../assets/leaf.png";
import aboutImage from "../assets/au.jpg"; // Replace with actual uploaded image path

export default function Landing() {
  const [activeTab, setActiveTab] = useState("Home");

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const testimonialRef = useRef(null);
  const testimonialScrollRef = useRef(null); // NEW: Scrollable testimonial container
  const contactRef = useRef(null);

  const tabs = [
    { label: "Home", ref: homeRef },
    { label: "About us", ref: aboutRef },
    { label: "Testimonial", ref: testimonialRef },
    { label: "Contact us", ref: contactRef },
  ];

  const handleScroll = (tab) => {
    setActiveTab(tab.label);
    tab.ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollTestimonials = (direction) => {
    if (testimonialScrollRef.current) {
      const scrollAmount = testimonialScrollRef.current.offsetWidth / 2;
      testimonialScrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-[#505444] min-h-screen flex justify-center px-4 py-10 text-[18px]">
      <div className="bg-[#e0e9d4]/45 rounded-[2rem] w-full max-w-7xl p-6 sm:p-10 relative shadow-xl overflow-hidden scroll-smooth">

        {/* Navbar */}
        <nav className="sticky top-0 z-20 backdrop-blur-md rounded-t-[2rem] px-4 py-4 flex flex-col sm:flex-row justify-between items-center text-gray-700 mb-10 gap-4 sm:gap-0">
          <h1 className="text-2xl font-bold">SMARTKISAN.</h1>
          <ul className="flex gap-4 sm:gap-6 font-medium text-base sm:text-lg">
            {tabs.map((tab) => (
              <li key={tab.label}>
                <button
                  className={`focus:outline-none border-b-2 ${
                    activeTab === tab.label
                      ? "border-black"
                      : "border-transparent"
                  } hover:border-black transition-all duration-200`}
                  onClick={() => handleScroll(tab)}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Home Section */}
        <section ref={homeRef} className="min-h-[70vh] pt-10">
          <div className="relative flex justify-center">
            <img
              src={plantImage}
              alt="Plant pot"
              className="w-[18rem] sm:w-[25rem] md:w-[30rem] lg:w-[35rem] relative z-0"
            />

            <div className="absolute top-4 sm:top-10 left-1/2 transform -translate-x-1/2 z-10 w-full max-w-5xl px-4 text-center">
              <h2 className="text-4xl sm:text-6xl md:text-8xl font-light leading-tight text-black flex items-center justify-center flex-wrap gap-2">
                Proper care of
                <img
                  src={leafIcon}
                  alt="Leaf Icon"
                  className="inline-block h-12 sm:h-16 md:h-20"
                />
                <span className="font-serif text-[#384934]">Plants</span>
              </h2>
            </div>

            <div className="absolute top-[10rem] sm:top-[12rem] right-4 sm:right-10 w-[90%] sm:w-[280px] text-left z-10 text-base">
              <p className="text-gray-700 mb-4">
                Facing crop issues like pests or diseases? <b>SmartKisan</b> is your AI-powered farming companion — just upload an image, speak, or type your problem. We will diagnose it and give you clear, actionable solutions in your native language. Fast, simple, and farmer-friendly!
              </p>
              <button className="bg-black text-white px-6 py-3 rounded-full text-base">
                Start now
              </button>
            </div>

            <div className="absolute top-[12rem] sm:top-[14rem] left-[2rem] sm:left-[17rem] bg-white bg-opacity-30 px-4 py-2 rounded-full text-sm flex items-center gap-2 shadow z-10">
              <FaTint className="text-black" />
              <span>10% Humidity</span>
            </div>
            <div className="absolute top-[16rem] sm:top-[19rem] left-[2rem] sm:left-[14.5rem] bg-white bg-opacity-30 px-4 py-2 rounded-full text-sm flex items-center gap-2 shadow z-10">
              <FaTint className="text-black" />
              <span>450ml Water level</span>
            </div>
            <div className="absolute top-[20rem] sm:top-[24rem] left-[2rem] sm:left-[15.75rem] bg-white bg-opacity-30 px-4 py-2 rounded-full text-sm flex items-center gap-2 shadow z-10">
              <FaSun className="text-black" />
              <span>Sunny Atmosphere</span>
            </div>
          </div>
        </section>

        <hr className="my-10 border-t-2 border-black" />

        {/* About Us Section */}
        <section ref={aboutRef} className="min-h-[60vh] flex flex-col md:flex-row items-center justify-between px-4 py-12 gap-10">
          <div className="md:w-1/2 text-left">
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="text-gray-800 leading-relaxed">
            SmartKisan is transforming the future of farming with cutting-edge AI technology. Our platform empowers farmers to detect crop diseases and pests effortlessly, using their voice, text, or images. By offering instant, accurate diagnoses and providing actionable, region-specific solutions, SmartKisan ensures that every farmer, regardless of language or location, has the tools they need to protect their crops and boost productivity. Join us in making agriculture smarter and more sustainable for all.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={aboutImage} alt="About" className="rounded-xl max-w-full h-auto" />
          </div>
        </section>

        <hr className="my-10 border-t-2 border-black" />

        {/* Testimonials Section */}
        <section ref={testimonialRef} className="min-h-[50vh] px-4 py-12 relative">
          <h2 className="text-4xl font-bold mb-6 text-center"> Testimonials</h2>
          <div className="relative max-w-6xl mx-auto">
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 z-10"
              onClick={() => scrollTestimonials("left")}
            >
              <MdArrowBackIos size={20} />
            </button>
            <div
              ref={testimonialScrollRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-12"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {[1, 2, 3, 4, 5].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="relative bg-white text-gray-800 px-6 pt-10 pb-6 rounded-xl shadow-lg text-center w-[300px] flex-shrink-0 scroll-snap-align-center"

                >
                  <div className="text-3xl text-blue-500 mb-2">“</div>
                  <h3 className="font-semibold text-lg mb-1">{`User ${idx + 1}`}</h3>
                  <p className="text-sm text-gray-600">
                    SmartKisan helped me identify issues in my crops early. The tool is easy and effective!
                  </p>
                  <div className="text-3xl text-blue-500 mt-4">”</div>
                </div>
              ))}
            </div>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 z-10"
              onClick={() => scrollTestimonials("right")}
            >
              <MdArrowForwardIos size={20} />
            </button>
          </div>
        </section>

        <hr className="my-10 border-t-2 border-black" />

        {/* Contact Us Section */}
        <section ref={contactRef} className="min-h-[40vh] px-4 py-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="max-w-2xl mx-auto text-gray-800 leading-relaxed">
            Have questions or suggestions? Reach out at <a href="mailto:support@smartkisan.ai" className="text-blue-600 underline">support@smartkisan.ai</a> or connect with us on our social media channels.
          </p>
        </section>

      </div>
    </div>
  );
}
