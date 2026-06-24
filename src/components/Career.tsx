import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>React Native | React Developer </h4>
                <h5>ToXSL Technologies</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              •	Led a team of 5 React Native developers delivering 8 production iOS/Android apps using JavaScript and TypeScript.
              •	Owned full project lifecycle — requirement analysis, architecture decisions, deployment, and post-release support — for clients across 3 countries.
              •	Standardized project structure and reusable component libraries, reducing per-project setup time by 50% and cutting average. delivery time by 2 weeks.
              •	Introduced Git branching strategy and code review culture that reduced production hotfixes by 40%.
              •	Also contributed to a React.js self-service ordering web app, improving page load speed by 25% through lazy loading and code splitting.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>React Native Developer </h4>
                <h5>Affle India Pvt Ltd</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              •	Developed and maintained service-based mobile applications for iOS and Android with 50K+ combined installs, using React Native and TypeScript.
              •	Reduced UI jank and improved FPS from ~45 to 60 across multiple device form factors through targeted rendering optimizations.
              •	Integrated third-party SDKs and handled platform-specific iOS/Android implementations for 6+ client projects delivered on schedule.
              •	Diagnosed and resolved critical production bugs using Sentry and Crashlytics — reducing crash rate by 35% within 60 days of joining.
              •	Participated in Agile ceremonies and maintained a 95% on-time sprint delivery rate across 18 months.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>React Native Developer </h4>
                <h5>Zingbus</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              •	Led end-to-end development of ZingBus iOS app — a large-scale bus booking platform with 100K+ active users — using React Native with TypeScript.
              •	Architected scalable, modular codebase that reduced feature development time by 40% through reusable component libraries and standardized patterns.
              •	Reduced app crash rate by 60% and improved average screen load time from 1.8s to 0.7s by optimizing API handling, memory management, and component lifecycles.
              •	Improved app store rating from 3.6 to 4.4 through targeted UX improvements and stability fixes across 12 releases.
              •	Established CI/CD pipeline with Bitrise and Fastlane — automated App Store builds, versioning, and TestFlight distribution for a team of 8 engineers.
              •	Integrated CleverTap and Mixpanel analytics, enabling data-driven decisions that increased booking conversion rate by 18%.
              •	Mentored 4 junior developers, conducted bi-weekly code reviews, and enforced best practices that reduced code review turnaround by 50%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>React Native Developer Consultant </h4>
                <h5>Velotis Technology</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              •	Developing Track-x, a fleet management app with live GPS tracking, real-time telemetry, and comprehensive fleet monitoring for 500+ vehicles across multiple operators.
              •	Integrated real-time GPS tracking, map overlays, and live telemetry pipelines — reducing average location update latency to under 2 seconds.
              •	Built route management, trip history, driver monitoring, and alert notification features, improving fleet operator response time by ~30%.
              •	Set up CI/CD pipeline using GitHub Actions and Fastlane for automated iOS/Android builds and OTA deployments, cutting release cycle from 3 days to under 4 hours.
              •	Collaborated with backend and product teams to design scalable APIs handling 10K+ concurrent real-time data streams.
              Senior Software Develop
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
