import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);

const workItems = [
  {
    image: "/images/velotis.jpg",
    alt: "Track-X ( Android App )",
    link: "https://play.google.com/store/apps/details?id=demash.app&hl=en_IN",
  },
  {
    image: "/images/velotis.jpg",
    alt: "Track-X ( IOS App )",
    link: "https://apps.apple.com/in/app/track-x/id1583729977",
  },
  {
    image: "/images/zingbus.jpeg",
    alt: "ZingBus ( IOS App )",
    link: "https://apps.apple.com/in/app/zingbus-book-bus-ticket-online/id1600049529",
  },
  {
    image: "/images/paypenny.png",
    alt: "Paypenny ( Android App )",
    link: "https://play.google.com/store/apps/details?id=com.bhanguz.Paypenny&hl=en_IN",
  },{
    image: "/images/paypenny.png",
    alt: "Paypenny ( IOS App )",
    link: "https://apps.apple.com/in/app/paypenny/id1545140323",
  }]

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {workItems?.map((_value, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{workItems[index].alt}</h4>
                    <p>
                      <a href={workItems[index].link} target="_blank" rel="noopener noreferrer">
                        View Project
                      </a>
                    </p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>Javascript, TypeScript, React Native </p>
              </div>
              <WorkImage image={workItems[index].image} alt={workItems[index].alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
