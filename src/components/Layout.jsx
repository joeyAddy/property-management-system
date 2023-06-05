import React, { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import GoTop from "./GoToTop";

const Layout = () => {
  const [scrollPosition, setSrollPosition] = useState(0);

  const [showGoTop, setshowGoTop] = useState(false);

  const refScrollUp = useRef(null);

  //DISPLAY HANDLER
  const handleVisibleButton = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);

    if (scrollPosition > 100) {
      return setshowGoTop(true);
    } else if (scrollPosition < 100) {
      return setshowGoTop(false);
    }
  };

  //SCROLL LISTENER
  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  }, [scrollPosition]);

  const handleScrollUp = () => {
    refScrollUp.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative">
      <div ref={refScrollUp}>
        <Header />
      </div>
      <GoTop showGoTop={showGoTop} scrollUp={handleScrollUp} />
      <div className="min-h-full w-full bg-white">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
