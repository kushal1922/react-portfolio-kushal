import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleButtonVisibility = () => {
    if (window.scrollY > 3000) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleButtonVisibility);
    return () => {
      window.removeEventListener("scroll", toggleButtonVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300 cursor-pointer"
        >
          Scroll to Top
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
