
// import React, { useState, useEffect, useRef } from "react";
// import './NavigationPanel.css';

// function Panel() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isScrolling, setIsScrolling] = useState(false);
//   const indicatorRef = useRef(null);
//   const itemsRef = useRef([]);

//   const handleIndicator = (index) => {
//     setActiveIndex(index);
//   };

//   useEffect(() => {
//     const activeItem = itemsRef.current[activeIndex];
//     if (activeItem && indicatorRef.current) {
//       indicatorRef.current.style.width = `${activeItem.offsetWidth}px`;
//       indicatorRef.current.style.left = `${activeItem.offsetLeft}px`;
//       indicatorRef.current.style.backgroundColor = activeItem.getAttribute("active-color");
//     }
//   }, [activeIndex]);

//   useEffect(() => {
//     let scrollTimer;

//     const handleScroll = () => {
//       if (!isScrolling) {
//         setIsScrolling(true);
//       }

//       // Clear the previous timeout and set a new one
//       clearTimeout(scrollTimer);
//       scrollTimer = setTimeout(() => {
//         setIsScrolling(false);
//       }, 10000); // Hide the panel after 10 seconds of inactivity
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       clearTimeout(scrollTimer);
//     };
//   }, [isScrolling]);

//   return (
//     <div>
//       {isScrolling && (
//         <div className="panel">
//           <nav className="nav">
//             {["Home", "Qualification", "Work Experience", "Projects", "Contact"].map((item, index) => (
//               <a
//                 href={["#Home", "#Qualification", "#work", "#Projects", "#Contact"][index]}
//                 key={index}
//                 className={`nav-item ${index === activeIndex ? "is-active" : ""}`}
//                 onClick={() => handleIndicator(index)}
//                 active-color={["orange", "green", "blue", "red", "rebeccapurple"][index]}
//                 ref={(el) => (itemsRef.current[index] = el)}
//                 style={{ color: index === activeIndex ? itemsRef.current[index]?.getAttribute("active-color") : "black" }}
//               >
//                 {item}
//               </a>
//             ))}
//             <span className="nav-indicator" ref={indicatorRef}></span>
//           </nav>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Panel;

import React, { useState, useEffect, useRef } from "react";
import './NavigationPanel.css';

function Panel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const indicatorRef = useRef(null);
  const itemsRef = useRef([]);
  const hideTimeoutRef = useRef(null);

  const sections = ["Home", "Qualification", "work", "Projects", "Contact"];
  const colors = ["orange", "green", "blue", "red", "rebeccapurple"];

  const handleIndicator = (index) => {
    setActiveIndex(index);
  };

  // Track scroll position to update active nav item
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      let current = 0;

      sections.forEach((id, index) => {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop;
          if (scrollPos >= offsetTop - 100) {
            current = index;
          }
        }
      });

      if (current !== activeIndex) {
        setActiveIndex(current);
      }

      // Show panel on scroll and reset inactivity timer
      setIsVisible(true);
      resetHideTimeout();
    };

    const resetHideTimeout = () => {
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 10000); // Hide after 10 seconds
    };

    window.addEventListener("scroll", handleScroll);
    resetHideTimeout(); // Start timer on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, [activeIndex, sections]);

  // Animate the indicator
  useEffect(() => {
    const activeItem = itemsRef.current[activeIndex];
    if (activeItem && indicatorRef.current) {
      indicatorRef.current.style.width = `${activeItem.offsetWidth}px`;
      indicatorRef.current.style.left = `${activeItem.offsetLeft}px`;
      indicatorRef.current.style.backgroundColor = colors[activeIndex];
    }
  }, [activeIndex, colors]);

  return (
    <div className={`panel ${isVisible ? 'visible' : 'hidden'}`}>
      <nav className="nav">
        {["Home", "Qualification", "Work Experience", "Projects", "Contact"].map((item, index) => (
          <a
            href={`#${sections[index]}`}
            key={index}
            className={`nav-item ${index === activeIndex ? "is-active" : ""}`}
            onClick={() => handleIndicator(index)}
            active-color={colors[index]}
            ref={(el) => (itemsRef.current[index] = el)}
            style={{ color: index === activeIndex ? colors[index] : "black" }}
          >
            {item}
          </a>
        ))}
        <span className="nav-indicator" ref={indicatorRef}></span>
      </nav>
    </div>
  );
}

export default Panel;
