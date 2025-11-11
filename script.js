///HORIZONTAL SCROLL FOR CARDS SECTION///////////
const wrapper = document.querySelector(".hz_scroll_cards_wrapper");
if (!wrapper) return;

// Calculate the scroll distance dynamically
// This ensures the last card enters the viewport
const scrollDistance = wrapper.scrollWidth - wrapper.clientWidth;

// Only animate if there's content to scroll
if (scrollDistance <= 0) return;

ScrollTrigger.matchMedia({
  // Mobile screens
  "(max-width: 767px)": function() {
    gsap.to(".hz_scroll_cards_wrapper", {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: "#hz_cards_section",
        markers: true, // enable markers for debugging
        start: "top 20%",
        end: "bottom 10%",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      }
    });
  },
  
  // Desktop screens
  "(min-width: 768px)": function() {
    gsap.to(".hz_scroll_cards_wrapper", {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: "#hz_cards_section",
        //markers: true, // enable markers for debugging
        start: "top 10%",
        end: "bottom 90%",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      }
    });
  }
});
  